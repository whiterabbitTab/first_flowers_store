import React, { useEffect } from 'react';
import styles from '../../Home/Home.module.scss'

import { useNavigate } from 'react-router-dom'

export const Card = ({ props, prop }) => {

    const navigate = useNavigate();

    const handleProduct = () => {
        navigate(`/catalog/product/${[props.article]}`, {state: props})
    }

    if (prop == 'all' | prop == props.property) {
        return(
            <li onClick={handleProduct} className={styles.card}>
                <div style={{background: 'url("https://whiterabbittab.github.io/fl-store-api/img-2.png")'}} className={`${styles.image}`}></div>
                <div className={styles.card_content}>
                    <div className={styles.name_price}>
                        <span>{props.title}</span>
                        <span className='text-gray-main'>Цена: <span>{props.price}p</span></span>
                    </div>
                    <div className={styles.info_block}>
                        <p>{props.description}</p>
                    </div>
                    <button className={styles.basket_btn}>В корзину</button>
                </div>
            </li>
        );
    }
};
