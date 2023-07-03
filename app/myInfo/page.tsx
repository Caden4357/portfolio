import React from 'react'
import styles from './MyInfo.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function MyInfo() {
    return (
        <main className={styles.main}>
            <div className={styles.myInfo}>
                <div className={styles.left}>
                    <h1 className={styles.textPop}><span>Caden</span> Wilcox</h1>
                    <h2>Full Stack Developer</h2>
                    <p>From code to creativity, I build digital dreams with a full-stack flair</p>
                    <button className={`${styles.textPop} ${styles.resume}`}>Resume</button>
                    <Link target="_blank" href="https://www.linkedin.com/in/caden-wilcox-python/"><img className={styles.smIcon} src="/linkedIn.png" alt="" /></Link>
                    <div className='d-flex jc-center ai-center gap'>
                        <h3><Link target="_blank" className={styles.link} href='mailto:wilcox4357@gmail.com'>Contact Me!</Link></h3>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/headshot.jpg" alt="hero" className={styles.headshot}/>
                </div>
            </div>
        </main>
    )
}
