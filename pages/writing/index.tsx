import Link from 'next/link';

export default function WritingHome() {
    return (
        <h1 className="title">
            Read{' '}
            <Link href="/writing/first-post">
                <a>this page!</a>
            </Link>
        </h1>
    );
}