import React from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img src={require('../../assets/logo.png')} alt="" />
        <span>{t('header_welcome_message')}</span> 
      </div>
      <nav className={styles.header_nav}>
        <div className={styles.header_nav__item}>
          <a href="#">
            {t('header_why_us')} 
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            {t('header_results')} 
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            {t('header_courses')} 
          </a>
        </div>
        <div className={styles.header_nav__item}>
          <a href="#">
            {t('header_faq')} 
          </a>
        </div>
      </nav>
      <select
            onChange={changeLanguage}
            value={i18n.language}
            className={styles.language_select}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O'zbek</option>
          </select>
      <div className={styles.header_phone}>
        <p>+998 (33) 306 0098</p>
        <span>{t('header_contact_now')}</span> 
      </div>
    </div>
  );
};
