import { Metadata } from 'next';
import { fetchProducts } from '@/lib/api';
import HeroSection from '@/components/HeroSection/HeroSection';
import MainContent from '@/components/MainContent/MainContent';

export const metadata: Metadata = {
  title: 'Discover Our Products | Appscrip PLP',
  description: 'Explore our wide range of products including clothing, jewelry, and electronics. High quality and best prices.',
  openGraph: {
    title: 'Discover Our Products | Appscrip PLP',
    description: 'Explore our wide range of products including clothing, jewelry, and electronics.',
    type: 'website',
  },
};

export default async function Home() {
  const products = await fetchProducts();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.image,
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        }
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MainContent products={products} />
    </>
  );
}
