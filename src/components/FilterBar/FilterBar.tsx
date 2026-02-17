"use client";

import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import styles from './filterBar.module.css';

interface FilterBarProps {
    showFilter: boolean;
    setShowFilter: (show: boolean) => void;
    count: number;
}

export default function FilterBar({ showFilter, setShowFilter, count }: FilterBarProps) {
    return (
        <div className={styles.filterBar}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className={styles.itemCount}>{count} ITEMS</span>
                <button
                    className={styles.toggleFilter}
                    onClick={() => setShowFilter(!showFilter)}
                    suppressHydrationWarning
                >
                    {showFilter ? <><ChevronLeft size={16} /> HIDE FILTER</> : <><ChevronRight size={16} /> SHOW FILTER</>}
                </button>
            </div>

            <div className={styles.sortContainer}>
                <select className={styles.select} suppressHydrationWarning>
                    <option value="recommended">RECOMMENDED</option>
                    <option value="newest">NEWEST FIRST</option>
                    <option value="popular">POPULAR</option>
                    <option value="price-high">PRICE: HIGH TO LOW</option>
                    <option value="price-low">PRICE: LOW TO HIGH</option>
                </select>
                {/* <ChevronDown size={16} />  Select handles arrow usually */}
            </div>
        </div>
    );
}
