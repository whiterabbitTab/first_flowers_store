import React from 'react';
import styles from './Footer.module.scss';

import { NavLink } from 'react-router-dom'

export const Footer = () => {
    const lst = ['www.facebook.com', 'https://telegram.ru', 'https://vk.com', '+7 999 999 9999']
    return(
        <footer id='footer' className={styles.footer}>
            <div className={styles.main_info_foot}>
                <div className={styles.about_holidays}>
                    <h1>Поздравления с </h1>
                    <ul>
                        <li>С днем рождения</li>
                        <li>С днем матери</li>
                        <li>С 8 марта</li>
                        <li>С 14 февраля</li>
                        <li>С годовщиной</li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <ul>
                        <li>
                            <div></div>
                            <h2>Peony</h2>
                        </li>
                        {lst.map((el, i) => {
                            return (
                                <li key={i}>
                                    <span></span>
                                    <NavLink>{el}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.stock}>
                    <h1>Пользователю</h1>
                    <ul>
                        <li><NavLink>Отзывы</NavLink></li>
                        <li><NavLink>Как оформить заказ</NavLink></li>
                        <li><NavLink>Информация о доставке</NavLink></li>
                        <li><NavLink>Тех. Поддержка</NavLink></li>
                        <li><NavLink>Способы оплаты</NavLink></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
