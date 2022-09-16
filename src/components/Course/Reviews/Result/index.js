import User from './User';
import React from "react";
import styles from './styles/index.module.css'
import Links from './Links';
export default function Result({ data: { content, ...data } }) {
    return (
        <div className={styles.res}>
            <User data={data} />
            <div className={styles.cont}>
                <p className={styles.desc}>{content}</p>
                <Links />
            </div>
        </div>
    )
}
