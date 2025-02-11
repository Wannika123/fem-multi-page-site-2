import styles from "./page.module.css";
import Header from "@/components/Header";
import ResponsiveImg from "@/components/ResponsiveImg";
import mobileHero from '@/images/homepage/hero-bg-mobile@2x.jpg';
import tabletHero from '@/images/homepage/hero-bg-tablet@2x.jpg';
import desktopHero from '@/images/homepage/hero-bg-desktop@2x.jpg';
import BookBtn from "@/components/BookBtn";
import Features from "@/components/home/Features";
import Highlights from "@/components/home/Highlights";
import Reserve from "@/components/home/Reserve";
import Events from "@/components/home/Events";

export default function Home() {
  return (
    <>
      <div className="hero-img">
        <ResponsiveImg 
          mobileSrc={mobileHero} 
          tabletSrc={tabletHero}
          desktopSrc={desktopHero}
          alt="Shrimp pasta"
        />
      </div>

      {/* header style is slightly different between homepage and booking page (in tablet and mobile version), so it can't be in root layout */}
      <div className={styles['header-container']}>
        <Header />
      </div>

      <main>
        <section className={['center', styles.section].join(' ')}>
          <h1>Exquisite dining <br /> since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
          </p>
          <BookBtn dark={false} />
        </section>
        <Features />
        <Highlights />
        <Events />
        <Reserve />
      </main>
    </>
  );
}
