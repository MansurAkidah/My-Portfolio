'use client';
import React from 'react'
import styles from './style.module.scss';

export default function Index({index, title,link, cat, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>{cat}</p>
        </div>
    )
}