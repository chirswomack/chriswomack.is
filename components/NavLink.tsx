import Link from 'next/link'

export default function NavLink({ text, href }) {
    return (
        <Link href={href}>
            <a className="opacity-75 font-semibold px-4 py-2 block">{text}</a>
        </Link>
    );
}