import styles from './hero.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Discover our products</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
        </section>
    );
}
