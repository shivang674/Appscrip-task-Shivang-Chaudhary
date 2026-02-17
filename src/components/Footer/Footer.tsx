import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.topSection}>
                    <div className={styles.subscribeSection}>
                        <h3 className={styles.sectionTitle}>Be the first to know</h3>
                        <p>Sign up for updates from mettā muse.</p>
                        <form className={styles.subscribeForm}>
                            <input type="email" placeholder="Enter your e-mail..." className={styles.input} />
                            <button type="submit" className={styles.button}>Subscribe</button>
                        </form>
                    </div>
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>Contact Us</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                        <div style={{ marginTop: '1rem' }}>
                            <h3 className={styles.sectionTitle}>Currency</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <img src="/us-flag.png" alt="US Flag" style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: 'white' }} />
                                <span style={{ fontWeight: 'bold' }}>USD</span>
                            </div>
                            <p style={{ fontSize: '10px', marginTop: '0.5rem' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.linkGroup}>
                        <h3 className={styles.sectionTitle}>mettā muse</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Stories</Link></li>
                            <li><Link href="#">Artisans</Link></li>
                            <li><Link href="#">Boutiques</Link></li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">EU Compliances Docs</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkGroup}>
                        <h3 className={styles.sectionTitle}>Quick Links</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="#">Orders & Shipping</Link></li>
                            <li><Link href="#">Join/Login as a Seller</Link></li>
                            <li><Link href="#">Payment & Pricing</Link></li>
                            <li><Link href="#">Return & Refunds</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linkGroup}>
                        <h3 className={styles.sectionTitle}>Follow Us</h3>
                        <div className={styles.socialIcons}>
                            <div style={{ border: '1px solid white', borderRadius: '50%', padding: '4px' }}><Instagram size={16} /></div>
                            <div style={{ border: '1px solid white', borderRadius: '50%', padding: '4px' }}><Linkedin size={16} /></div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 className={styles.sectionTitle}>mettā muse Accepts</h3>
                            <div className={styles.paymentIcons}>
                                <img src="/gpay.png" alt="GPay" width={40} height={25} style={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} />
                                <img src="/mastercard.png" alt="Mastercard" width={40} height={25} style={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} />
                                <img src="/paypal.png" alt="PayPal" width={40} height={25} style={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} />
                                <img src="/amex.png" alt="Amex" width={40} height={25} style={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} />
                                <img src="/applepay.png" alt="ApplePay" width={40} height={25} style={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    Copyright © 2023 mettamuse. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
