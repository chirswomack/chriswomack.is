import Head from 'next/head';
import Date from '@components/date';
import Layout from '@components/layout';
import Markdown from '@components/markdown';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className="text-3xl my-4 mx-0 font-bold">{postData.title}</h1>
                <div className="text-gray-500">
                    <Date dateString={postData.date} />
                </div>
                <Markdown markdown={postData.content} />
            </article>
        </Layout>
    );
}