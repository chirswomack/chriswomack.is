import Link from 'next/link';
import CloseIcon from './CloseIcon';
import Logo from './logo';
import MenuIcon from './MenuIcon';
import NavLink from './NavLink';

export default function Navbar() {
    return (
        <header className="flex flex-wrap justify-between pt-8 pr-20 items-center">
            <Link href="/">
                <a className="ml-8 opacity-75 hover:opacity-100"><Logo classNames="inline-block h-12" /></a>
            </Link>
            <input id="menu-toggle" type="checkbox" className="hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block opacity-50">
                <MenuIcon />
                <CloseIcon />
            </label>
            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center px-6 text-xl pt-6 md:pt-0">
                        <li>
                            <NavLink href="/" text="Home" />
                        </li>
                        <li>
                            <NavLink href="/" text="Articles" />
                        </li>
                        <li>
                            <NavLink href="/" text="About me" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}