import React from "react";
import styles from './TopicMenu.module.css'

export default function TopicMenu({ category, label }) {
    return (
        <div className={styles.topicMenu}>
            <a href='/'>{category.title}</a>
            <span className="material-symbols-outlined">
                navigate_next
            </span>
            <a href='/'>{label.title}</a>
        </div>
    )
}
