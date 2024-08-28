import React from 'react'
import styles from "./services.module.scss"
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation(); 

  return (
    <div className={styles.services}>
      <div className={styles.services_title}>{t('services_title')}</div>
      <div className={styles.services_content}>
        <div className={styles.services_column}>
          <div className={styles.services_column}>
            <div className={styles.services_column__icon}>
              <img src={require('../../assets/chat-bubble-dynamic-color.png')} alt="" />
            </div>
            <span><b>Qisqa</b> muddat ichida Koreys tilida gapirishni istaysiz</span>
          </div>
        </div>
        <div className={styles.services_column}>
          <div className={styles.services_column__icon}>
            <img src={require('../../assets/rocket-dynamic-color.png')} alt="" />
          </div>
          <span>Koreys tili o’rganib o’z <b>karyerangizni</b> qurmoqchisiz</span>
        </div>
        <div className={styles.services_column}>
          <div className={styles.services_column}>
            <div className={styles.services_column__icon}>
              <img src={require('../../assets/money-dynamic-color.png')} alt="" />
            </div>
            <span>Topik sertifikatini olib Koreyaning nufuzli universitetlariga <b>GRANT</b> yutmoqchisiz</span>
          </div>
        </div>
        <div className={styles.services_column}>
          <div className={styles.services_column}>
            <div className={styles.services_column__icon}>
              <img src={require('../../assets/travel-dynamic-color.png')} alt="" />
            </div>
            <span>Janubiy Koreya davlatida <b>o’qish</b> va <b>ishlash uchun</b> ketmoqchisiz</span>
          </div>
        </div>
        <div className={styles.services_column}>
          <div className={styles.services_column}>
            <div className={styles.services_column__icon}>
              <img src={require('../../assets/target-dynamic-color.png')} alt="" />
            </div>
            <span>Koreys tilini o’rta darajda bilasiz va darajangizni <b>oshirmoqchisiz</b></span>
          </div>
        </div>
        <div className={styles.services_column}>
          <div className={styles.services_column}>
            <div className={styles.services_column__icon}>
              <img src={require('../../assets/key-dynamic-color.png')} alt="" />
            </div>
            <span>Ko’p yillardan buyon o’qib ham <b>natijaga</b> chiqa olmayapsiz</span>
          </div>
        </div>
      </div>
      <div className={styles.services_submit}>
        <button className='gradient-button'>HA, BU MEN</button>
      </div>
    </div>
  )
}
