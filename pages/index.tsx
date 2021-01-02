import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '@components/layout';
import Date from '@components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <section className="text-xl">
        <p>Hello, I'm <b>Chris</b>. I'm a software engineer and writer. Welcome to my website.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className="text-xl p-px">
        <h2 className="my-4 leading-snug text-2xl">Blog</h2>
        <ul className="p-0 m-0 list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5 mt-0 mx-0" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}