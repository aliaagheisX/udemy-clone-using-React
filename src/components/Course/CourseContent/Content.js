import React, { useState } from 'react'
import ButtonExpand from './ButtonExpand';
import Collapse from 'react-bootstrap/Collapse';

import styles from './styles/index.module.css'
export default function Content({ id, data }) {
    const {
        icon_class,
        title,
        preview_url,
        description,
        content_summary,
        can_be_previewed
    } = data;

    const [open, setOpen] = useState(false);

    return (
        <div className={styles.section}>
            <div className={styles.row}>
                <div className={styles.cont}>
                    <span className={`material-symbols-outlined ${styles.icon}`}>
                        {icon_class === "udi udi-play-circle" ? 'play_circle' : 'note'}
                    </span>

                    <a className={styles.title} href={preview_url}>{title}</a>
                    {
                        description !== "" &&
                        <ButtonExpand setOpen={setOpen} open={open} id={id}
                        />}
                </div>
                <div className={styles.cont}>
                    {
                        can_be_previewed && <a className={styles.preview} href={preview_url}>Preview</a>
                    }
                    <span className={styles.summary}>{content_summary}</span>
                </div>
            </div>

            <Collapse in={open}>
                <div
                    dangerouslySetInnerHTML={{ __html: description }}
                    id={`description${id}`}
                    className={styles.collapse} />
            </Collapse>
        </div>
    )
}
