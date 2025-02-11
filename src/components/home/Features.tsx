import Image from 'next/image';
import lines from '@/images/patterns/pattern-lines.svg';
import divider from '@/images/patterns/pattern-divide.svg';
import curve from '@/images/patterns/pattern-curve-top-right.svg';
import enjoyMobile from '@/images/homepage/enjoyable-place-mobile@2x.jpg';
import enjoyTablet from '@/images/homepage/enjoyable-place-tablet@2x.jpg';
import enjoyDesktop from '@/images/homepage/enjoyable-place-desktop@2x.jpg';
import localMobile from '@/images/homepage/locally-sourced-mobile@2x.jpg';
import localTablet from '@/images/homepage/locally-sourced-tablet@2x.jpg';
import localDesktop from '@/images/homepage/locally-sourced-desktop@2x.jpg';
import styles from './Features.module.css';
import ResponsiveImg from '../ResponsiveImg';

export default function Features() {
    return (
        <section className={styles.section}>

            <Image src={curve} alt='' className={styles.curve} />

            <div className={['center', styles.feature].join(' ')}>
                <div className={styles['img-container']}>
                    <ResponsiveImg
                        mobileSrc={enjoyMobile} 
                        tabletSrc={enjoyTablet}
                        desktopSrc={enjoyDesktop}
                        alt='The lanscape of the countryside, with hills and stream.'
                    />
                </div>
                <div className={styles['text-container']}>
                    <Image src={divider} alt='' />
                    <h2>Enjoyable place for all the family</h2>
                    <p>
                        Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.
                    </p>
                </div>
            </div>

            <div className={['center', styles.feature].join(' ')}>
                <div className={styles['img-container']}>
                    <ResponsiveImg
                        mobileSrc={localMobile} 
                        tabletSrc={localTablet}
                        desktopSrc={localDesktop}
                        alt='The close-up look of the dish, a hand holding a spoon is about to scoop the dish'
                    />
                    <Image src={lines} alt='' className={styles.lines} />
                </div>
                <div className={styles['text-container']}>
                    <Image src={divider} alt='' sizes='71px' />
                    <h2>The most locally sourced food</h2>
                    <p>
                        All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.
                    </p>
                </div>
            </div>

        </section>
    )
}