import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom'
import Context from '#components/Context/ProductProvider.tsx';

// import * as React from 'react' ---- импортирование всего из react и обращение через React

export const Header = () => {

    let location = useLocation();
    
    const {isAuth} = useContext(Context)
    
    useEffect(() => {
        const anchors = document.querySelectorAll('a[href*="#"]')
        for (let el of anchors) {
            el.addEventListener('click', (e) => {
                e.preventDefault()

                const blockId = el.getAttribute('href').substr(1)

                document.getElementById(blockId).scrollIntoView({
                    behavior: 'smooth'
                })
            })
        }
    })
    
    if (location.pathname == '/') {
        return(
            <header className={styles.header}>
                <NavLink to='/' className={styles.home_btn}>
                    <div className={styles.logo}></div>
                    <h3>Peony</h3>
                </NavLink>
                <div className={styles.links}>
                    <a href='#about' className={styles.navbutton}>О нас</a>
                    <a href='#products' className={styles.navbutton}>Товары</a>
                    <a href='#footer' className={styles.navbutton}>Отзывы</a>
                    <a href='#footer' className={styles.navbutton}>Контакты</a>
                </div>
                <div className={styles.accounts_links}>
                    <NavLink to='/basket' className={styles.basket}>
                        <div className={styles.basket_icon}></div>
                        <span>Корзина</span>
                    </NavLink>
                    <NavLink to={isAuth ? '/user_account' : '/authorization'} className={isAuth ? styles.account : styles.auth_btn}>{isAuth ? '' : "Войти"}</NavLink>
                </div>
            </header>
        );
    } else {
        return(
            <header className={styles.header}>
                <NavLink to='/' className={styles.home_btn}>
                    <div className={styles.logo}></div>
                    <h3>Peony</h3>
                </NavLink>
                <div className={styles.links}>
                    <NavLink to='/' state={'about'} className={styles.navbutton}>О нас</NavLink>
                    <NavLink to='/' state={'products'} className={styles.navbutton}>Товары</NavLink>
                    <NavLink to='/' state={'footer'} className={styles.navbutton}>Отзывы</NavLink>
                    <NavLink to='/' state={'footer'} className={styles.navbutton}>Контакты</NavLink>
                </div>
                <div className={styles.accounts_links}>
                    <NavLink to='/basket' className={styles.basket}>
                        <div className={styles.basket_icon}></div>
                        <span>Корзина</span>
                    </NavLink>
                    <NavLink to={isAuth ? '/user_account' : '/authorization'} className={isAuth ? styles.account : styles.auth_btn}>{isAuth ? '' : "Войти"}</NavLink>
                </div>
            </header>
        );
    }
    
};
