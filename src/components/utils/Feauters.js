import React from 'react';
import styles from './Feauters.module.css';

export function Feauters(content_info) {
    return (
        <div>
            <h4>This course includes:</h4>
            <ul className={styles.feautres}>
                <li>
                    <span className="material-symbols-outlined">
                        subscriptions
                    </span>
                    <span>{content_info} on-demand video</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        description
                    </span>
                    <span>1 article</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        system_update_alt
                    </span>
                    <span>3 downloadable resources</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        all_inclusive
                    </span>
                    <span>Full lifetime access</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        devices
                    </span>
                    <span>Access on mobile and TV</span>
                </li>
                <li>
                    <span className="material-symbols-outlined">
                        workspace_premium
                    </span>
                    <span>Certificate of completion</span>
                </li>
            </ul>
        </div>);
}
