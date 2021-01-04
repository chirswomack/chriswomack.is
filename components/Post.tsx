import Head from 'next/head';
import Date from './date';
import Markdown from './markdown';

export default function Post({ title, date, content }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article className="cooper-hewitt prose dark:prose-dark lg:prose-lg xl:prose-xl max-w-none md:px-4">
                <h1 className="opacity-75">{title}</h1>
                <div className="opacity-50 -mt-6 font-medium">
                    <Date dateString={date} />
                </div>
                <Markdown markdown={content} />
            </article>
        </>
    );
}