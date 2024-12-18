import Head from 'next/head';
import { AtomSeoI } from './seo.interface';

const Seo = ({ title }: AtomSeoI) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default Seo;
