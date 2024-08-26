import React, { useState } from 'react'
import styles from "./questions.module.scss"

export const Questions = () => {
  const accordions = [
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", text: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?' },
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", text: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?' },
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", text: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?' },
    { title: "O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?", text: 'O’quv materallar bilan ta’minlaysizlarmi yoki o’zim izlab topamanami?' },
  ]

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    // If the clicked index is already active, set it to null (collapse it)
    // Otherwise, set the clicked index as active
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.questions}>
      <div className={styles.questions_title}>Ko’p beriladigan savollar
      </div>
      <div className={styles.questions_content}>
        {accordions.map((accordion, i) => (
          <div className={styles.accordion_container}>
            <div className={styles.accordion} onClick={() => handleAccordionClick(i)}>
              <span>{accordion.title}</span>
              <div className={styles.accordion_button}>+</div>
            </div>
            <div
              className={`${styles.accordion_text} ${activeIndex === i ? styles.active : ""}`}
            >
              {accordion.text}
            </div>
          </div>))}
      </div>
    </div>
  )
}
