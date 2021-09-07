import HeadMeta from '@/components/HeadMeta';
import { PortableText } from '@/lib/sanity';

export default function HomePage({ mainData }) {
  const { title, content } = mainData;
  return (
    <>
      <HeadMeta title={title} description={content} />
      <div className="home-page bg-offwhite f-h-center">
        <div className="c-2">
          <PortableText blocks={content} className="type-spacing" />
        </div>
      </div>
      <style global jsx>{`
        .home-page {
          min-height: 100vh;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
