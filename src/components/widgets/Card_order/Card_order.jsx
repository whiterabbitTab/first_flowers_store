import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Basket/Basket.module.scss';

export const Card_order = () => {
    return(
        <div className={styles.card_order}>
            <div className={styles.image}></div>
            <div className={styles.text_block}>
                <h4>Фиалки ( lorem )</h4>
                <div>
                    <p>Позиций: <span>1</span></p>
                    <p>Цена: <span>3500</span></p>
                </div>
                <textarea>Описание:
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
            </div>
        </div>
    );
};