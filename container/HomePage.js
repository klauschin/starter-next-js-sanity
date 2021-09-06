import HeadMeta from '@/components/HeadMeta';
import { PortableText } from '@/lib/sanity';

export default function HomePage({ mainData }) {
  const { title, content } = mainData;
  return (
    <>
      <HeadMeta title={title} description={content} />
      <div className="home-page bg-offwhite f-h-center">
        <PortableText blocks={content} />
      </div>
      <style global jsx>{`
        .home-page {
          min-height: 100vh;
          width: 100%;
          justify-content: center;
          > div {
            max-width: 900px;
          }
        }
      `}</style>
    </>
  );
}
