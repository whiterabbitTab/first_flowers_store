import React, { useState, useEffect } from 'react';
import styles from './Product.module.scss';

import { useParams, useLocation, Navigate } from 'react-router-dom'

export const Product = () => {
    // const [prod, setProd] = useState();
    // useEffect(() => {
    //     fetch(`https://whiterabbittab.github.io/fl-store-api/data.json/${id}`)
    //         .then(res => res.json())
    //         .then(prod => setProd(prod))
    // }, [])

    const {id} = useParams()
    const location = useLocation()
    const product = location.state
    useEffect(() => {
        const topY = document.body.getBoundingClientRect().top
        window.scrollTo({ top: topY})
    }, [])

    if (product) {
        return(
            <main className={styles.product_page}>
                <section className={styles.product_description}>
                    <div style={{background: 'url("https://whiterabbittab.github.io/fl-store-api/img-prod-1.png")'}} className={styles.photo}></div>
                    <div className={styles.title}>
                        <div>
                            <h1>{product.title}</h1>
                            <div>
                                {product.discount != 0 && <p><span>{Math.round((product.price * (100 - product.discount)) / 100)}</span><div></div></p>}
                                {product.discount != 0 ? <p style={{ opacity: .4 }}><span><div className={styles.line}></div>{product.price}</span><div></div></p> : <p><span>{product.price}</span><div></div></p>}
                            </div>
                        </div>
                        <div>
                            <button>В корзину</button>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h1>Описание букета</h1>
                        <p>Артикул: <span>{product.article}</span></p>
                        <p>Цвет: <span>{product.colors.map((el, i) => {
                            return (product.colors.length - 1 == i ? `${el}` : `${el}, `)
                        })}</span></p>
                        <p>Высота: <span>{product.height} см</span></p>
                        <p>Ширина: <span>{product.width} см</span></p>
                        <p>Состав: <span>{product.structure.map((el, i) => {
                            return (product.structure.length - 1 == i ? `${el}` : `${el}, `)
                        })}</span></p>
                    </div>
                </section>
            </main>
        );
    } else {
        return <Navigate to={'*'} replace={true}></Navigate>
    }
};
