import Link from "next/link";
import styles from './BookBtn.module.css'


type Props = {
    dark: boolean
}

export default function BookBtn({ dark }: Props) {
    const themeClass = dark ? styles.dark : styles.light;

    return (
        <Link href='/booking' className={[styles.button, themeClass].join(' ')}>
            BOOK A TABLE
        </Link>
    )
}