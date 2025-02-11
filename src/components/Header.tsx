import logo from '@/images/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    return (
        <header className='center'>
            <Link href='/'>
                <Image src={logo} alt='logo icon' priority />
            </Link>
        </header>
    )
}