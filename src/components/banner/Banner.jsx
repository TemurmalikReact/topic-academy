import React from 'react'
import styles from "./banner.module.scss"

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <img className={styles.banner_image} src={require('../../assets/banner.png')} alt="" />
      <div className={styles.banner_text}>
        <svg width="28" height="1" viewBox="0 0 28 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="1" rx="0.5" fill="#A7DFB1" />
        </svg>
        <span>
          3 oyda Koreys tilida gapirishni boshlang
        </span>
      </div>
      <div className={styles.banner_title}>
        Janubiy Koreya Universitetlarida <br /> 100% gacha grant asosida <br />  o’qish imkoniyati
      </div>
      <div className={styles.banner_content}>
        <div className={styles.banner_content__item}>
          <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4468 8.10588C11.668 6.22293 8.78141 1.29022 8.15338 0.768508C7.36808 0.116345 6.83438 0.587427 4.99684 3.55404C-1.04133 13.3012 -1.06621 23.0581 4.92151 33.2068C6.64279 36.1238 7.07932 36.5935 7.89037 36.4003C8.50892 36.253 11.9022 30.5533 12.9149 27.96C13.971 25.2563 14.7809 20.7721 14.6878 18.143C14.5944 15.4944 13.5288 10.722 12.4468 8.10588Z" fill="#ABDDB1" />
          </svg>
          <span>5 oyda Topikdan 6 <br /> darajagacha olishda <br /> yordam beramiz</span>
        </div>
        <div className={styles.banner_content__item}>
          <svg width="15" height="37" viewBox="0 0 15 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4468 8.10588C11.668 6.22293 8.78141 1.29022 8.15338 0.768508C7.36808 0.116345 6.83438 0.587427 4.99684 3.55404C-1.04133 13.3012 -1.06621 23.0581 4.92151 33.2068C6.64279 36.1238 7.07932 36.5935 7.89037 36.4003C8.50892 36.253 11.9022 30.5533 12.9149 27.96C13.971 25.2563 14.7809 20.7721 14.6878 18.143C14.5944 15.4944 13.5288 10.722 12.4468 8.10588Z" fill="#ABDDB1" />
          </svg>
          <span>Topikdan yuqori darajani qo’lga <br /> kiritib, Janubiy Koreyada o’qish <br /> va ishlash imkoniyati</span>
        </div>
      </div>
      <div className={styles.banner_submit}>
        <button className='gradient-button'>BEPUL DARSGA YOZILISH</button>
        <span>Birinchi darsga bepul yoziling!</span>
      </div>
    </div>
  )
}
