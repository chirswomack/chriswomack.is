import Layout from '@components/layout';
import Post from '@components/Post';
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

export default function PostPage({ postData }) {
    return (
        <Layout>
            <Post {...postData} />
        </Layout>
    );
}