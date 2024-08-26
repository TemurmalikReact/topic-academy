import React, { useState } from 'react'
import styles from "./facilities.module.scss"

export const Facilities = () => {
  const facilities = [
    {
      title: "Professional ustozlar",
      text: "Sizga 4 yildan ortiq tajriba va Topik darajasi 6 bo‘lgan o‘qituvchilar dars beradi",
    },
    {
      title: "Bepul coworking zonalari",
      text: "Erkin dars qilish, networking va o‘z ustingizda ishlash uchun bepul coworking zonalarimiz mavjud",
    },
    {
      title: "Haftalik tadbirlar",
      text: "TOPIK academy jamoasi o‘quvchilari uchun doimiy ravishda qo‘shimcha tadbirar tashkilb keladi",
    },
    {
      title: "Bepul sinov imtihonlari",
      text: "Har davomida tashkil qilinadigan sinov imtihonlarida qatnashib o‘z darajangizni bilib borasiz",
    },
    {
      title: "Yordamchi kuratorlar",
      text: "Darslarni o‘zlashtirishda qiyinchilik bo‘lsa sizga yordam beradigan kuratoringiz bo‘ladi",
    },
    {
      title: "Konsulting xizmatlar",
      text: "Muvaffaqiyatli bitirgan talabalarimizga Janubiy Koreyada o‘qish uchun visa olishda, universitet tanlash va grand yutishda yordam beramiz",
    }
  ]
  return (
    <div className={styles.facilities}>
      <div className={styles.facilities_title}>Nima uchun aynan TOPIK academy?</div>
      <div className={styles.facilities_content}>
        { facilities.map(((facility, i) => (
          <div className={styles.facilities_column} key={i}>
            <div className={styles.facilities_column__icon}>{i+1}</div>
            <div className={styles.facilities_column__title}>{facility.title}</div>
            <div className={styles.facilities_column__text}>{facility.text}</div>
          </div>
        ))) }
      </div>
    </div>
  )
}
