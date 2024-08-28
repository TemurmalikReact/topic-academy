import React from 'react'
import styles from "./banner.module.scss"
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation(); 

  return (
    <div className={styles.banner}>
      <img className={styles.banner_image} src={require('../../assets/banner.png')} alt="" />
      <div className={styles.banner_text}>
        <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="1" rx="0.5" fill="#A7DFB1" />
        </svg>
        <span>
          {t('banner_message')}
        </span>
      </div>
      <div className={styles.banner_title}>
        {t('banner_title1')} <br /> {t('banner_title2')} <br /> {t('banner_title3')}
      </div>
      <div className={styles.banner_content}>
        <div className={styles.banner_content__item}>
          <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4468 8.10588C11.668 6.22293 8.78141 1.29022 8.15338 0.768508C7.36808 0.116345 6.83438 0.587427 4.99684 3.55404C-1.04133 13.3012 -1.06621 23.0581 4.92151 33.2068C6.64279 36.1238 7.07932 36.5935 7.89037 36.4003C8.50892 36.253 11.9022 30.5533 12.9149 27.96C13.971 25.2563 14.7809 20.7721 14.6878 18.143C14.5944 15.4944 13.5288 10.722 12.4468 8.10588Z" fill="#ABDDB1" />
          </svg>
          <span>{t('banner_content_item_left1')} <br /> {t('banner_content_item_left2')} <br /> {t('banner_content_item_left3')}</span>
        </div>
        <div className={styles.banner_content__item}>
          <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4468 8.10588C11.668 6.22293 8.78141 1.29022 8.15338 0.768508C7.36808 0.116345 6.83438 0.587427 4.99684 3.55404C-1.04133 13.3012 -1.06621 23.0581 4.92151 33.2068C6.64279 36.1238 7.07932 36.5935 7.89037 36.4003C8.50892 36.253 11.9022 30.5533 12.9149 27.96C13.971 25.2563 14.7809 20.7721 14.6878 18.143C14.5944 15.4944 13.5288 10.722 12.4468 8.10588Z" fill="#ABDDB1" />
          </svg>
          <span>{t('banner_content_item_right1')} <br /> {t('banner_content_item_right2')} <br /> {t('banner_content_item_right3')}</span>
        </div>
      </div>
      <div className={styles.banner_submit}>
        <button className='gradient-button'>{t('banner_button')}</button>
        <span>{t('banner_subtext')}</span>
      </div>
    </div>
  )
}
