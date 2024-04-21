import React, { useEffect, useState, useRef, useContext } from 'react';
import styles from './Home.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

import { Card } from '../widgets/Card/Card';
import Context from '#components/Context/ProductProvider.tsx';

export const Home = () => {
    
    const position = useRef(0);
    const location_state = useLocation().state
    
    const {data} = useContext(Context)

    const next_slide = (count) => {
        const carousel = document.querySelector(`.${styles.carousel}`)
        const width = document.querySelector(`.${styles.content}`).clientWidth / 4
        if (position.current == 0 || position.current == -4) {
            position.current == 0 & count == -1 && position.current--
            position.current == -4 & count == 1 && position.current++
        } else {
            position.current += count
        }
        carousel.style.transform = `translateX(${position.current * width}px)`
    }

    useEffect(() => {
        if (location_state != null) {
            const topY = document.getElementById(location_state).getBoundingClientRect().top
            window.scrollTo({ top: topY, behavior: 'smooth'})
            window.history.replaceState({}, '')
        }
    })

    return(
        <main className={styles.home_page}>
            <section className={styles.greeting}>
                <div className={styles.info_greeting}>
                    <h3>Заказ цветов на дом</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <NavLink onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} className={styles.order_btn} to='/catalog'>Заказать</NavLink>
                </div>
                <div className={styles.greet_photo}></div>
            </section>
            <section id='about' className={styles.about}>
                <h1>О нас</h1>
                <div className='flex items-center justify-between mt-16'>
                    <div className={styles.main_info}>
                        <h2>“ООО” Flowers hoyours</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className={styles.examples}>
                        <div className={styles.flower_block}></div>
                        <div className={styles.flower_block}></div>
                        <div className={styles.flower_block}></div>
                    </div>
                </div>
            </section>
            <section id='products' className={styles.products_carousel}>
                <h1>Товары</h1>
                <div className={styles.container}>
                    <button className={styles.arrow_left} onClick={() => next_slide(1)}></button>
                    <div className={styles.content}>
                        <ul className={styles.carousel}>
                            {data == undefined ? <p>Загрузка товаров</p> : data.products.slice(0, 8).map((el, i) => {
                                return (
                                    <Card key={i} props={el} prop={'all'} />
                                )
                            })}
                        </ul>
                    </div>
                    <button className={styles.arrow_right} onClick={() => next_slide(-1)}></button>
                </div>
                <NavLink onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} to='/catalog'>Посмотреть все товары</NavLink>
            </section>
            {/* <section className={styles.reviews_section}></section> */}
            <section className={styles.info_section}>
                <h1>Доставка букетов и подарков на дом</h1>
                <div className={styles.main_info}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <div></div>
                </div>
                <div className={styles.lower_part}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </main>
    );
};
