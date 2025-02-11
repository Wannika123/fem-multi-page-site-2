import bgMobile from '@/images/homepage/ready-bg-mobile@2x.jpg';
import bgaTablet from '@/images/homepage/ready-bg-tablet@2x.jpg';
import bgDesktop from '@/images/homepage/ready-bg-desktop@2x.jpg';
import styles from './Reserve.module.css'
import ResponsiveImg from '../ResponsiveImg';
import BookBtn from '../BookBtn';

export default function Reserve() {
    return (
        <section className={styles.section}>
            <ResponsiveImg 
                mobileSrc={bgMobile}
                tabletSrc={bgaTablet}
                desktopSrc={bgDesktop}
                alt=''
                sizes='100vw'
            />
            <div className={[styles.content, 'center'].join(' ')}>               
                <h2>Ready to make a reservation?</h2>
                <BookBtn dark={false} />               
            </div>
        </section>
    )
}