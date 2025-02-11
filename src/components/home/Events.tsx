'use client'

import lines from '@/images/patterns/pattern-lines.svg';
import familyMobile from '@/images/homepage/family-gathering-mobile@2x.jpg';
import familyTablet from '@/images/homepage/family-gathering-tablet@2x.jpg';
import familyDesktop from '@/images/homepage/family-gathering-desktop@2x.jpg';
import specialMobile from '@/images/homepage/special-events-mobile@2x.jpg';
import specialTablet from '@/images/homepage/special-events-tablet@2x.jpg';
import specialDesktop from '@/images/homepage/special-events-desktop@2x.jpg';
import socialMobile from '@/images/homepage/social-events-mobile@2x.jpg';
import socialTablet from '@/images/homepage/social-events-tablet@2x.jpg';
import socialDesktop from '@/images/homepage/social-events-desktop@2x.jpg';
import { useState } from 'react';
import styles from './Events.module.css';
import Image from 'next/image';
import ResponsiveImg from '../ResponsiveImg';
import BookBtn from '../BookBtn';

const EVENTS = [
    {
        eventName: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We\’ll provide a memorable experience for all.',
        image: {
            mobile: familyMobile,
            tablet: familyTablet,
            desktop: familyDesktop,
            alt: 'A family enjoying a large variety of healthy food, pastas, avocadoes, tomatoes, bageutte, salad, et cetera.'
        }
    },
    {
        eventName: 'Special Events',
        description: 'Whether it\’s a romantic dinner or special date you\’re celebrating with others we\’ll look after you. We\’ll be sure to mark your special date with an unforgettable meal.',
        image: {
            mobile: specialMobile,
            tablet: specialTablet,
            desktop: specialDesktop,
            alt: 'A large group of friends holding up their own wine glass, probably saying "cheers!"'
        }
    },
    {
        eventName: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We\’re more than happy to cater for big parties. We\’ll work with you to make your event a hit with everyone.',
        image: {
            mobile: socialMobile,
            tablet: socialTablet,
            desktop: socialDesktop,
            alt: 'A large table full of wine glasses, whereas people around the table seem to be in conversation'
        }
    }
]

export default function Events() {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <section className={[styles.section, 'center'].join(' ')}>

            <div className={styles['img-slider']}>
                <Image src={lines} alt='' className={styles.lines} />
                {EVENTS.map((event, i) => (
                    <div 
                        key={i}
                        className={i === slideIndex ? `${styles.slide} ${styles.visible}` : styles.slide}
                    >
                        <ResponsiveImg 
                            mobileSrc={event.image.mobile}
                            tabletSrc={event.image.tablet}
                            desktopSrc={event.image.desktop}
                            alt={event.image.alt}
                            sizes='(max-width: 1040px) 100vw, 50vw'
                        />
                    </div>
                ))}
            </div>

            <div className={styles['text-container']}>
                <div className={styles['btns-wrapper']}>
                    {EVENTS.map((event, i) => (
                        <button
                            key={i}
                            onClick={() => { setSlideIndex(i) }}
                            className={i === slideIndex ? styles.selected : undefined}
                        >
                            {event.eventName}
                        </button>
                    ))}
                </div>
                <div className={styles.description}>
                    <h2>{EVENTS[slideIndex].eventName}</h2>
                    <p>{EVENTS[slideIndex].description}</p>
                    <BookBtn dark={true} />
                </div>
            </div>

        </section>
    )
}