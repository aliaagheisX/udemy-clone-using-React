import React from 'react'
import { useState } from 'react'
import styles from './ShowMore.module.css'
export default function ShowMore({ children, maxHeight = '320px' }) {
    const [expand, setExpand] = useState(0);
    const isActive = () => expand ? 'less' : 'more';
    return (

        <div className={styles.cont} >
            <div className={styles[isActive()]}
                style={{
                    maxHeight: expand ? '100%' : maxHeight
                }}
            >

                {children}
            </div>
            <button
                className={styles.btnCont}
                onClick={() => setExpand(!expand)}
            >
                <div className={styles.btn}>
                    <span className="material-symbols-outlined">{`expand_${isActive()}`}
                    </span>

                    <button>Show {isActive()}</button>
                </div>
            </button>
        </div >
    )
}
