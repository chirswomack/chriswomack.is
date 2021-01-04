import Head from 'next/head'
import Link from 'next/link'
import classNames from 'classnames';

import DarkModeToggle from './darkModeToggle'
import Navbar from './Navbar'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home = false }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="prefetch"
                    href="/fonts/cooper-hewitt/CooperHewitt-Book.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="prefetch"
                    href="/fonts/cooper-hewitt/CooperHewitt-Semibold.ttf"
                    as="font"
                    crossOrigin=""
                />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <DarkModeToggle />
            {!home && <Navbar />}
            <div className={classNames('max-w-4xl px-8 md:px-4 mb-24 mx-auto cooper-hewitt', { 'mt-24': home, 'mt-12': !home })}>
                <main>{children}</main>
            </div>
        </>
    )
}