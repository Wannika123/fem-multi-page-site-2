import heroMobile from '@/images/booking/hero-bg-mobile@2x.jpg';
import heroTablet from '@/images/booking/hero-bg-tablet@2x.jpg';
import heroDesktop from '@/images/booking/hero-bg-desktop@2x.jpg';
import lines from '@/images/patterns/pattern-lines.svg';
import curve from '@/images/patterns/pattern-curve-bottom-right.svg';
import ResponsiveImg from '@/components/ResponsiveImg';
import styles from './page.module.css'
import Header from '@/components/Header';
import Form from '@/components/booking/Form';
import Image from 'next/image';

export default function BookingPage() {
    return (
        <>
            <div className='hero-img'>
                <ResponsiveImg 
                    mobileSrc={heroMobile}
                    tabletSrc={heroTablet}
                    desktopSrc={heroDesktop}
                    alt=''
                />
                <Image src={curve} alt='' className={styles.curve} />
            </div>

            <div className={styles['header-container']}>
                <Header />
            </div>

            <main className={[styles.main, 'center'].join(' ')}>
                <div className={styles['text-container']}>
                    <h1>Reservations</h1>
                    <p>
                        We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
                    </p>
                </div>
                <div className={styles['form-container']}>
                    <Image src={lines} alt='' />
                    <Form />
                </div>
            </main>
        </>
    )
}