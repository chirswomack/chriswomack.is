import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '@components/layout';
import Date from '@components/date';
import { getSortedPostsData } from '../lib/posts';
import Logo from '@components/logo';

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
            <Logo classNames="absolute left-8 top-8 h-12" />
            <section className="text-xl font-medium flex flex-row dark:bg-black dark:bg-opacity-50 bg-violet-lightest bg-opacity-25 rounded rounded-lg py-6 px-8 md:pb-0">
                <div className="max-w-prose">
                    <p className="mb-4">Hi, I'm Chris Womack. I'm a software engineer and writer. Welcome to my website.</p>
                    <p>
                        (This is a sample website - you’ll be building a site like this on{' '}
                        <a href="https://nextjs.org/learn" className="text-link dark:text-link-dark">our Next.js tutorial</a>.)
                    </p>
                </div>
                <img className="h-48 w-48 mx-6 self-center -mt-6 md:block hidden" src="/images/profile-nobg.png" />
            </section>
            <section className="text-xl p-px">
                <h2 className="mt-10 mb-9 leading-snug text-3xl font-black opacity-75">Articles</h2>
                <ul className="p-0 m-0 list-none">
                    {allPostsData.map(({ id, date, title }) => (
                        <li className="mb-6 mt-0 mx-0" key={id}>
                            <Link href={`/writing/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className="opacity-50 font-medium">
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}