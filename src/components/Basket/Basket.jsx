import React from 'react';
import styles from './Basket.module.scss';

import { DataField } from '../widgets/DataField/DataField';
import { Card_order } from '../widgets/Card_order/Card_order';

export const Basket = () => {
    return(
        <main className={styles.basket}>
            <h1>Корзина</h1>
            <div className={styles.main_div}>
                <div className={styles.orders__block}>
                    <div className={styles.decoration}>
                        <div className={styles.order}>
                            <h1>Оформление заказа</h1>
                            <div className={styles.postcard}>
                                <h2>Открытка:</h2>
                                <textarea spellCheck={false}></textarea>
                            </div>
                            <div className={styles.informations}>
                                <div className={styles.date}>
                                    <h3>Дата и время доставки</h3>
                                    <DataField type={'date'} name={'date'} text={'Дата'} value={'2024-02-02'} />
                                    <DataField type={'text'} name={'time'} text={'Время'} value={'9:00'} />
                                </div>
                                <div className={styles.info_recipient}>
                                    <h3>Информация о получателе</h3>
                                    <DataField type={'text'} name={'username'} text={'Имя'} value={'Ангелина'} />
                                    <DataField type={'text'} name={'phone'} text={'Телефон'} value={'8-999-999-99-99'} />
                                </div>
                                {/* <div className={styles.address}>
                                    <h3>Адрес доставки</h3>
                                    <div>
                                        <label htmlFor="address">Адрес</label>
                                        <select className={styles.select_add} name="address">
                                            <option value="1" selected>Москва, ул. тако...</option>
                                            <option value="2">Краснодар, ул. тако...</option>
                                            <option value="3">Санкт Петербург, ул. 52...</option>
                                        </select>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className={styles.payment}>
                            <div className={styles.card_data}>
                                <h3>Банковкские реквизиты</h3>
                                <input type='text' value='4444 4444 4444 4444' />
                                <div>
                                    <input type="text" value={'05/31'}/>
                                    <input type="text" value={'148'}/>
                                </div>
                            </div>
                            <div className={styles.info_customer}>
                                <h3>Номер получателя</h3>
                                <DataField type={'text'} name={'name_cust'} text={'Имя'} value={'Валерий'} ></DataField>
                                <DataField type={'text'} name={'phone_cust'} text={'Телефон'} value={'8-888-777-66-55'} ></DataField>
                            </div>
                        </div>
                    </div>
                    <div className={styles.list_orders}>
                        <Card_order></Card_order>
                        <Card_order></Card_order>
                    </div>
                </div>
            </div>
            <button className={styles.order_btn} type="submit">Заказать</button>
        </main>
    );
};
