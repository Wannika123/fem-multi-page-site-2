import Image from 'next/image';
import curveTop from '@/images/patterns/pattern-curve-top-left.svg';
import curveBottom from '@/images/patterns/pattern-curve-top-right.svg';      
import divider from '@/images/patterns/pattern-divide.svg';
import salmonMobile from '@/images/homepage/salmon-mobile@2x.jpg';
import salmonTabletDesktop from '@/images/homepage/salmon-desktop-tablet@2x.jpg';
import beefMobile from '@/images/homepage/beef-mobile@2x.jpg';
import beefTabletDesktop from '@/images/homepage/beef-desktop-tablet@2x.jpg';
import chocolateMobile from '@/images/homepage/chocolate-mobile@2x.jpg';
import chocolateTabletDesktop from '@/images/homepage/chocolate-desktop-tablet@2x.jpg';
import styles from './Highlights.module.css'
import ResponsiveImg from '../ResponsiveImg';

const MENUS = [
    {
        menuName: 'Seared Salmon Fillet',
        description: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        image: {
            mobileSrc: salmonMobile,
            tabletDesktopSrc: salmonTabletDesktop,
            alt: 'A beautifully decorated plate of seared salmon fillet'
        }
    },
    {
        menuName: 'Rosemary Filet Mignon',
        description: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        image: {
            mobileSrc: beefMobile,
            tabletDesktopSrc: beefTabletDesktop,
            alt: 'A plate of rosemary filet mignon that has beautiful crust, decorated with fresh rosemary on top.'
        }
    },
    {
        menuName: 'Summer Fruit Chocolate Mousse',
        description: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        image: {
            mobileSrc: chocolateMobile,
            tabletDesktopSrc: chocolateTabletDesktop,
            alt: 'Cups of chocolate mousse, with fresh summer fruit on top'
        }
    }
]

export default function Highlights() {
    return (
        <section className={styles.section}>

            <Image src={curveTop} alt='' className={styles['curve-top']} />

            <Image src={curveBottom} alt='' className={styles['curve-bottom']} />
            
            <div className={['center', styles.content].join(' ')}>
                <div className={styles['intro-text']}>
                    <Image src={divider} alt='' />
                    <h2>A few highlights from our menu</h2>
                    <p>
                        We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.
                    </p>
                </div>
                <div className={styles.menus}>
                    {MENUS.map((menu, i) => (
                        <div key={i}>
                            <div className={styles.menu}>
                                <div className={styles['menu-img-container']}>
                                    <ResponsiveImg 
                                        mobileSrc={menu.image.mobileSrc}
                                        tabletSrc={menu.image.tabletDesktopSrc}
                                        desktopSrc={menu.image.tabletDesktopSrc}
                                        alt={menu.image.alt}
                                    />
                                </div>
                                <div className={styles['menu-text-container']}>
                                    <div>
                                        <h3>{menu.menuName}</h3>
                                    </div>
                                    <p>{menu.description}</p>
                                </div>                               
                            </div>
                            { (i < MENUS.length - 1) && <hr /> }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}