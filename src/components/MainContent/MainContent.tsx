"use client";

import { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import FilterBar from '../FilterBar/FilterBar';
import FilterSidebar from '../FilterSidebar/FilterSidebar';
import ProductCard from '../ProductCard/ProductCard';
import styles from './mainContent.module.css';
import gridStyles from '../ProductGrid/productGrid.module.css';

export default function MainContent({ products }: { products: Product[] }) {
    const [showFilter, setShowFilter] = useState(false); // Default false to prevent hydration mismatch/flash on mobile

    useEffect(() => {
        // Set default based on window width after mount
        if (window.innerWidth > 768) {
            setShowFilter(true);
        }
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className={styles.container}>
            <FilterBar showFilter={showFilter} setShowFilter={toggleFilter} count={products.length} />

            <div className={styles.content}>
                {showFilter && (
                    <div className={styles.sidebarWrapper}>
                        <FilterSidebar onClose={() => setShowFilter(false)} />
                    </div>
                )}

                <div className={styles.gridWrapper}>
                    <div className={gridStyles.grid}>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
