import { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import styles from './filterSidebar.module.css';

const categories = [
    "IDEAL FOR", "OCCASION", "WORK", "FABRIC", "SEGMENT", "SUITABLE FOR", "RAW MATERIALS", "PATTERN"
];

function FilterCategory({ name }: { name: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.category}>
            <div className={styles.categoryHeader} onClick={() => setIsOpen(!isOpen)}>
                <span>{name}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
            {isOpen && (
                <div className={styles.categoryContent}>
                    <div className={styles.categoryContent}>
                        <span className={styles.filterOption}>All</span>
                        <span className={styles.filterOption} style={{ color: '#999', fontSize: '12px', cursor: 'pointer' }}>Unselect all</span>
                    </div>
                    {['Men', 'Women', 'Baby & Kids'].map(opt => (
                        <label key={opt} className={styles.filterOption}>
                            <input type="checkbox" /> {opt}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FilterSidebar({ onClose }: { onClose?: () => void }) {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.mobileHeader}>
                <span style={{ fontWeight: 'bold' }}>FILTERS</span>
                <button onClick={onClose}><X size={24} /></button>
            </div>

            <label className={styles.checkboxLabel}>
                <input type="checkbox" /> CUSTOMIZABLE
            </label>

            {categories.map((cat) => (
                <FilterCategory key={cat} name={cat} />
            ))}
        </aside>
    );
}
