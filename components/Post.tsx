import Head from 'next/head';
import Date from './date';
import Markdown from './markdown';

export default function Post({ title, date, content }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article className="cooper-hewitt">
                <h1 className="text-3xl my-4 mx-0 font-bold">{title}</h1>
                <div className="text-gray-500">
                    <Date dateString={date} />
                </div>
                <Markdown markdown={content} />
            </article>
        </>
    );
}