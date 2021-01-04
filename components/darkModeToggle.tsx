import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [isDarkMode, setDarkMode] = useState(true);
    const toggleDarkMode = () => {
        if (isDarkMode) {
          localStorage.theme = 'light';
          document.querySelector('html').classList.remove('dark');
          setDarkMode(false);
        } else {
          localStorage.theme = 'dark';
          document.querySelector('html').classList.add('dark');
          setDarkMode(true);
        }
    };

    useEffect(() => {
        if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
          localStorage.theme = 'light';
          document.querySelector('html').classList.remove('dark');
          setDarkMode(true);
        }
      }, [])

    return (
        <button
            type="button"
            className="z-10 p-px absolute top-11 right-10 rounded-md focus:outline-none focus:ring-4 focus:ring-violet focus:ring-opacity-25 dark:focus:ring-opacity-25 dark:focus:ring-purple-lightest"
            onClick={() => toggleDarkMode()}
        >
            <span className="sr-only">
                <span className="dark:hidden">Switch to dark theme</span>
                <span className="hidden dark:inline">Switch to light theme</span>
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50 hover:opacity-100"
            >
                <g className="sun fill-purple-lightest stroke-purple-lightest opacity-0 dark:opacity-100">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </g>
                    <g className="moon fill-violet stroke-violet dark:opacity-0">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </g>
            </svg>
        </button>
    );
}