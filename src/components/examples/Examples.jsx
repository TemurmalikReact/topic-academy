import React from 'react'
import styles from "./examples.module.scss"
import Marquee from "react-fast-marquee";

export const Examples = () => {
    return (
        <div className={styles.examples}>
            <div className={styles.examples_title}>O’quvchilarimizning natijalari TOPIK 6 gacha</div>
            <Marquee autoFill>
                <div className={styles.examples_content}>
                    <div className={styles.examples_column}>
                        <img src={require('../../assets/example.png')} alt="" />
                        <div className={styles.examples_column__footer}>
                            <span>Topik 6</span>
                        </div>
                    </div>
                </div>
            </Marquee>
            <Marquee autoFill direction='right'>
                <div className={styles.examples_content}>
                    <div className={styles.examples_column}>
                        <img src={require('../../assets/example.png')} alt="" />
                        <div className={styles.examples_column__footer}>
                            <span>Topik 6</span>
                        </div>
                    </div>
                </div>
            </Marquee>
            <div className={styles.examples_submit}>
                <button className='gradient-button'>HA, BU MEN</button>
            </div>
        </div>
    )
}
