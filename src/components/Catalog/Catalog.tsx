import React, { useContext, useEffect, useState } from 'react';
import styles from './Catalog.module.scss';
import { Card } from '../widgets/Card/Card';
import Context from '#components/Context/ProductProvider.tsx';

export const Catalog = () => {
    const [property, setProp] = useState('all');
    const [min_price, setMinPrice] = useState<number>(0);
    const [max_price, setMaxPrice] = useState<number>(25000);
    const [count, setCount] = useState(1);
    
    const {data} = useContext(Context)

    const changeStyle = (e) => {
        const input = e.target
        input.select()
    }

    const changePrice = (input, setPrice) => {
        console.log(setPrice == setMinPrice)
        if (setPrice == setMinPrice) {
            if (max_price < input.value) {
                setMaxPrice(input.value)
            }
        } else {
            if (min_price > input.value) {
                setMinPrice(input.value)
            }
        }
        setPrice(input.value)
    }

    return(
        <main className={styles.catalog_main}>
            <section className={styles.greeting}>
                <div></div>
                <h1>Выберите подходящий товар, чтобы поднять настроение близким</h1>
                <h3><span>Скидки</span> на категории букетов с оригинальным оформлением во время праздников до <span>30%!!!</span></h3>
                <a href="#filt">Заказать</a>
            </section>
            <section id='filt' className={styles.filters}>
                <div className={styles.products_filter}>
                    <button onClick={() => setProp('all')}>Все товары</button>
                    <button onClick={() => setProp('gift')}>Подарки</button>
                    <button onClick={() => setProp('postcards')}>Открытки</button>
                    <button onClick={() => setProp('toy')}>Игрушки</button>
                    <button onClick={() => setProp('vase')}>Вазы</button>
                    <button onClick={() => setProp('ind_plants')}>Комнатные растения</button>
                    <button onClick={() => setProp('flower')}>Составные букеты и корзины</button>
                </div>
                <div className={styles.diff_filter}>
                    <div>
                        <select defaultValue='all' name="flowers">
                            <option value="all">Все</option>
                            <option value="Rose">Розы</option>
                            <option value="Tulips">Тюльпаны</option>
                            <option value="violets">Фиалки</option>
                            <option value="Lilies">Лилии</option>
                            <option value="Pions">Пионы</option>
                        </select>
                    </div>
                    <div>
                        <select defaultValue='all' name="occasion">
                            <option value="all">Все</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="have">В наличии</label>
                        <input name='have' type="checkbox" />
                    </div>
                    <div>
                        <label htmlFor=''>Скидка</label>
                        <input name='proc' type="checkbox" />
                    </div>
                    <form>
                        <label htmlFor='price'>Мин. цена</label>
                        <input name='price' type="text" value={min_price} onClick={changeStyle} onChange={(e) => changePrice(e.target, setMinPrice)} placeholder='Введите мин. цену' />
                    </form>
                    <form>
                        <label htmlFor='price'>Макс. цена</label>
                        <input name='price' type="text" value={max_price} onClick={changeStyle} onChange={(e) => changePrice(e.target, setMaxPrice)} placeholder='Введите макс. цену' />
                    </form>
                </div>
            </section>
            <section className={styles.products__sect}>
                <div className={styles.products}>
                    {data == undefined ? <p>Загрузка товаров...</p> : data.products.slice(0,12 * count).filter(el => min_price < el.price && max_price > el.price).map((el, i) => {
                        console.log(el)
                        return (
                            <Card key={i} props={el} prop={property}></Card>
                        )
                    })}
                </div>
                <button className={styles.update} onClick={() => setCount(count+1)}>Посмотреть ещё </button>
            </section>
        </main>
    );
};
