import check from '@/images/icons/icon-check.svg';
import arrow from '@/images/icons/icon-arrow.svg';
import styles from './Select.module.css'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VALUES = ['AM', 'PM']

export default function Select() {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [selectedVal, setSelectedVal] = useState(VALUES[0]);

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return

            switch(e.code) {
                case "Enter":
                case "Space":
                    setIsOpen(prev => !prev)
                    if (isOpen) setSelectedVal(VALUES[highlightedIndex])
                    break;
                case "ArrowUp":
                case "ArrowDown": {   
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    const newIndex = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newIndex >= VALUES.length) {
                        setHighlightedIndex(0)
                    } else if (newIndex < 0) {
                        setHighlightedIndex(VALUES.length - 1)
                    } else {
                        setHighlightedIndex(newIndex)
                    }
                    break;
                }
                case "Escape":
                    setIsOpen(false)
                    break;               
            }
        }
        containerRef.current?.addEventListener('keydown', handler);

        return () => {
            containerRef.current?.removeEventListener('keydown', handler);
        }
    }, [isOpen, highlightedIndex])

    return (
        <div 
            className={styles.container}
            onClick={() => setIsOpen(state => !state)}
            onBlur={() => setIsOpen(false)}
            ref={containerRef}
            tabIndex={0}   
        >
            <input 
                type="text"
                name="time-period"
                readOnly
                value={selectedVal}  
                aria-label='time-period'              
            />
            <Image src={arrow} alt='' className={isOpen ? styles['arrow-up'] : styles['arrow-down']} />
            <ul className={isOpen ? `${styles.dropdown} ${styles.show}` : styles.dropdown}>
                {VALUES.map((val, i) => (
                    <li
                        key={i}
                        onMouseDown={(e) => {   
                            e.stopPropagation()
                            setSelectedVal(val)
                        }}
                        onMouseEnter={() => setHighlightedIndex(i)}
                        className={highlightedIndex === i ? styles.highlighted : undefined}
                    >
                        { selectedVal === val && <Image src={check} alt='' />}
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    )
}