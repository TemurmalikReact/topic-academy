import React, { useState } from 'react'
import styles from "./contact.module.scss"

export const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_content}>
        <div className={styles.contact_content__title}>Savollaringiz qoldimi?</div>
        <div className={styles.contact_content__text}>Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha savollaringizga javob beramiz.
        </div>

      </div>
      <div className={styles.contact_form}>
        <input type="text" className='input' placeholder='Ismingiz' />
        <input type="text" className='input' placeholder='+998 99 999 99 99' />
        <button className='gradient-button fit'>SAVOL BERISH</button>
      </div>
    </div>
  )
}
