import React from "react";
import styles from './styles/TopicMenu.module.css'
import { SummaryContext } from "..";
import { useContext } from "react";
export default function TopicMenu() {
    const { context_info: { category, label } } = useContext(SummaryContext);
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
