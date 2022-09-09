import React, { useRef, useState, useEffect } from 'react'
import styles from './styles/StickyCard.module.css'


export default function StickyCard({ children }) {
    const stickyCardRef = useRef(null);
    const [isSticky, setIsSticky] = useState(0);

    const scollHandeler = () => {
        if (window.pageYOffset > stickyCardRef.current.offsetTop)
            setIsSticky(1);
        else
            setIsSticky(0);
    }
    useEffect(() => {
        window.addEventListener('scroll', scollHandeler);
    }, []);


    return (
        <div
            className={`shadow ${styles.stickyCard} d-none d-lg-block`}
            ref={stickyCardRef}
            style={{
                position: isSticky ? 'fixed' : 'absolute',
                top: isSticky ? '20px' : 'auto'
            }}
        >
            {children}
        </div>
    )
}
