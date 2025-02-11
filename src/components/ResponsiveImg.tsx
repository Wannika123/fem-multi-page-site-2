'use client'

import { useWindowSize } from "@/hooks/useWindowSize";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
    mobileSrc: StaticImport
    tabletSrc: StaticImport
    desktopSrc: StaticImport
    alt: string
    blur?: boolean
    sizes?: string
}

export default function ResponsiveImg({ 
    mobileSrc, 
    tabletSrc, 
    desktopSrc, 
    alt, 
    sizes,
    blur = true 
}: Props) {
    const { width } = useWindowSize();

    if (width === 0) {
        return null
    }

    let src: StaticImport;
    if (width < 480) {
        src = mobileSrc
    } else if (width < 1040) {
        src = tabletSrc
    } else {
        src = desktopSrc
    }

    return (
        <Image 
            src={src} 
            alt={alt} 
            placeholder={blur ? 'blur' : 'empty'}
            style={{
                width: '100%',
                height: 'auto',
            }}
            sizes={sizes}
        />
    )
}