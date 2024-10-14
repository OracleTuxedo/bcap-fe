import Head from 'next/head';

type SeoProps = {
    title: string;
};

const Seo = ({ title }: SeoProps) => {
    return (
        <Head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
            <title>{title}</title>
        </Head>
    );
};

export default Seo;