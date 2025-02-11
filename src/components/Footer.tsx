import logo from '@/images/logo.svg';
import Image from 'next/image';
import styles from './Footer.module.css'

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <div className='center'>
                <Image src={logo} alt='logo icon' className={styles.logo} />
                <div className={styles['text-container']}>
                    <div>
                        <p>Marthwaite, Sedbergh</p><br/>
                        <p>Cumbria</p><br />
                        <p>+00 44 123 4567</p>
                    </div>
                    <div>
                        <p>Open Times</p><br/>
                        <p>Mon - Fri: 09:00 AM - 10:00 PM</p><br />
                        <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}