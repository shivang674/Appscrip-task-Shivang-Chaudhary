"use client";

import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.topBar}>
                    <div className={styles.mobileMenu}>
                        <Menu size={24} className={styles.menuButton} />
                        <Link href="/" className={styles.logoMobile}><img src="/logo.png" alt="Logo" width={24} height={24} /></Link>
                    </div>

                    <div className={styles.logoCenter}>
                        <Link href="/" className={styles.logoText}>LOGO</Link>
                    </div>

                    <div className={styles.actions}>
                        <Search size={20} />
                        <Heart size={20} />
                        <ShoppingBag size={20} />
                        <User size={20} className={styles.hideMobile} />
                        <div className={styles.hideMobile} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold', fontSize: '14px' }}>
                            ENG <ChevronDown size={14} />
                        </div>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="/" className={styles.navLink}>SHOP</Link></li>
                        <li><Link href="/" className={styles.navLink}>SKILLS</Link></li>
                        <li><Link href="/" className={styles.navLink}>STORIES</Link></li>
                        <li><Link href="/" className={styles.navLink}>ABOUT</Link></li>
                        <li><Link href="/" className={styles.navLink}>CONTACT US</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
