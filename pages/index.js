import HomePage from '@/container/HomePage';
import { useRouter } from 'next/router';
import { groq } from 'next-sanity';
import { usePreviewSubscription, urlFor, PortableText } from '@/lib/sanity';
import { getClient } from '@/lib/sanity.server';

const homePageDataQuery = groq`*[_type == "homepage"][0]`;

function IndexPage(props) {
  const { homeData, preview } = props;

  const router = useRouter();

  const { data: homePageData } = usePreviewSubscription(homePageDataQuery, {
    initialData: homeData,
    enabled: preview || router.query.preview !== null,
  });

  return <HomePage mainData={homePageData} />;
}

export async function getStaticProps({ params = {}, preview = false }) {
  const homeData = await getClient(preview).fetch(homePageDataQuery);

  return {
    props: {
      preview,
      homeData,
    },
  };
}

export default IndexPage;
