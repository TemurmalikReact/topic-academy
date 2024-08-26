import React from 'react'
import styles from "./plan.module.scss"

export const Plan = () => {
    return (
        <div className={styles.plan}>
            <div className={styles.plan_title}>O’zingizga mos kursga ro’yxatdan o’ting
            </div>
            <div className={styles.plan_content}>
                <div className={styles.plan_column}>
                    <div className={styles.plan_card}>
                        <div className={styles.plan_card__image}>
                            <img src={require('../../assets/course1.png')} alt="" />
                            <div className={styles.plan_card__header}>
                                <span>Intiensive</span>
                                <div className={styles.tag}>Davomiyligi: 5 oy</div>
                            </div>
                        </div>
                        <div className={`${styles.plan_card__text} ${styles.pr_medium}`}>
                        Koreys tilini chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.
                        </div>
                        <div className={styles.plan_card__footer}>
                            <button className='gradient-button medium'>RO'YXATDAN O'TISH</button>
                            <span>970.000 so’m /oy</span>
                        </div>
                    </div>
                </div>
                <div className={styles.plan_column}>
                    <div className={styles.plan_card}>
                        <div className={styles.plan_card__image}>
                            <img src={require('../../assets/course2.png')} alt="" />
                            <div className={styles.plan_card__header}>
                                <span>Odatiy</span>
                                <div className={styles.tag}>Davomiyligi: 5 oy</div>
                            </div>
                        </div>
                        <div className={`${styles.plan_card__text} ${styles.pr_large}`}>
                            Haftada 3 kun 1.5 soatdan iborat odatiy Koreys tili darslari.
                        </div>
                        <div className={styles.plan_card__footer}>
                            <button className='gradient-button medium'>RO'YXATDAN O'TISH</button>
                            <span>560.000 so’m /oy</span>
                        </div>
                    </div>
                </div>
                <div className={styles.plan_column}>
                    <div className={styles.plan_card}>
                        <div className={styles.plan_card__image}>
                            <img src={require('../../assets/course3.png')} alt="" />
                            <div className={styles.plan_card__header}>
                                <span>Individual</span>
                                <div className={styles.tag}>Davomiyligi: 5 oy</div>
                            </div>
                        </div>
                        <div className={styles.plan_card__text}>
                        O’qituvchidan individual dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.                        </div>
                        <div className={styles.plan_card__footer}>
                            <button className='gradient-button medium'>RO'YXATDAN O'TISH</button>
                            <span>1.800.000 so’m /oy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
