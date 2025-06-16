'use client';

import { useState } from 'react';
import HeaderNav from './header-nav';

export default function HeaderBurger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[40px] h-[40px] flex items-center justify-center"
            >
                <img src="/menu_24px.png" alt="menu icon" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0">
                    <HeaderNav />
                </div>
            )}
        </div>
    );
}
