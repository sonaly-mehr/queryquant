'use client';

import Link from 'next/link';
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black border-t  border-gray-800 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-500 text-sm font-inter">
                            &copy; {new Date().getFullYear()} QueryQuant. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6 items-center">
                        <Link href="/privacy-policy" className="text-gray-400 hover:underline hover:text-neon-green text-sm font-inter transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-use" className="text-gray-400 hover:underline hover:text-neon-green text-sm font-inter transition-colors">
                            Terms of Use
                        </Link>

                        <Link
                            href="https://x.com/query_quant?s=21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-inter text-gray-300 hover:text-neon-green transition-colors"
                            title="Follow us on X"
                            aria-label="Follow us on X"
                        >
                            <FaSquareXTwitter className='text-gray-200 text-xl' />
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}