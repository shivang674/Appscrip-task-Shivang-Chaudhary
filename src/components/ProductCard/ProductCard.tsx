"use client";

import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Product } from '@/lib/types';
import styles from './productCard.module.css';

export default function ProductCard({ product }: { product: Product }) {
    const isOutOfStock = product.rating.count === 0; // Mock logic
    const isNew = product.id % 5 === 0;

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                {isOutOfStock && <span className={styles.outOfStock}>OUT OF STOCK</span>}
                {isNew && <span className={styles.newProduct}>NEW PRODUCT</span>}
                <Image
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: 'contain' }}
                />
                <button
                    className={styles.wishlist}
                    aria-label="Add to wishlist"
                    suppressHydrationWarning
                >
                    <Heart size={20} />
                </button>
            </div>

            <div className={styles.details}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>Sign in or Create an account to see pricing</p>
                <div className={styles.priceRow}>
                    {/* Using mock logic to hide price as per screenshot 'Sign in ...' or showing it */}
                    {/* But usually PLP shows price. Screenshot says 'Sign in or Create an account to see pricing' */}
                    {/* <span style={{textDecoration: 'line-through'}}>$120</span> */}
                    {/* <span style={{color: 'red'}}>${product.price}</span> */}
                </div>
            </div>
        </div>
    );
}
