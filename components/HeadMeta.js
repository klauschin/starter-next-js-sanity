import React from 'react';
import Head from 'next/head';

const HeadMeta = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={props.description ? props.description : 'Homes + Studios'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Klaus Chin" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} key="og:title" />
      <meta
        property="og:description"
        content={props.description ? props.description : 'Homes + Studios'}
        key="og:description"
      />
      <meta
        property="og:image"
        content={`/static/image/4-Barbara_Hepworth_Exterior_Museum_st-ives_PhotoC_Bent-Szameitat-350x460.jpg`}
        key="og:image"
      />
      <meta
        property="og:image:alt"
        content="Homes + Studios"
        key="og:image:alt"
      />

      <meta itemProp="name" content={props.title} />
      <meta
        itemProp="description"
        content={props.description ? props.description : 'Homes + Studios'}
      />
      <meta itemProp="image" content={`/BeautifulEcon_V2-41.png`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={props.title} />
      <meta
        name="twitter:description"
        content={props.description ? props.description : 'Homes + Studios'}
      />

      {props.children}
    </Head>
  );
};

export default HeadMeta;
