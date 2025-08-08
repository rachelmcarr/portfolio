import '../styles/global.css'
import Layout from '../components/Layout'
import { Inter, Inter_Tight } from 'next/font/google';
import CustomCursor from '../components/CustomCursor';
import useLenis from '../hooks/useLenis';

const inter = Inter({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

export default function MyApp({ Component, pageProps }) {
  useLenis();
  return (
    <main className={`${inter.variable} ${interTight.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div className="hidden md:block">
        <CustomCursor />
      </div>
    </main>
  );
}

