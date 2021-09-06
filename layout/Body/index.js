import theme from '@/styles/theme';
import { useRouter } from 'next/router';

const Body = (props) => {
  const router = useRouter();

  return (
    <>
      <main role="main" className="main">
        <div className="container">{props.children}</div>
      </main>
      <style jsx global>{`
        .main {
          width: 100%;
        }

        @media screen and (max-width: ${theme.mediaMedium}px) {
        }
      `}</style>
    </>
  );
};

export default Body;
