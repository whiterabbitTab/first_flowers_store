import React, { useContext, useEffect, useState } from 'react';
import styles from './Auth.module.scss';
import { useNavigate } from 'react-router-dom'

import { DataField } from '#components/widgets/DataField/DataField.jsx';
import Context from '#components/Context/ProductProvider.tsx';

type TypeUserData = {
    "data_user": {
        login: string,
        password: string,
        phone?: string
    }
}

export const Auth = () => {
    const [has_acc, setHasAcc] = useState<boolean>(false)
    const navigate = useNavigate()
    const {setisAuth, user_data, setUserData} = useContext(Context)

    const enterAccount = () => {
        if (user_data.login != 0 && user_data.password != 0 && user_data.verif_pass != 0 && user_data.phone != 0) {
            if (user_data.password == user_data.verif_pass) {
                setisAuth(true)
                navigate('/user_account', {replace: true})
            } else {
                setUserData({
                    ...user_data,
                    login: '',
                    phone: '',
                    password: '',
                    verif_pass: ''
                })
            }
        }
    }

    return(
        <main className={styles.auth_page}>
            <section>
                <h1>{has_acc ? 'Авторизация' : 'Регистрация'}</h1>
                <div className={styles.fields}>
                    <DataField name={'login'} text={'Введите логин'} value={user_data.login} ph={'Введите логин'}></DataField>
                    <DataField name={'password'} text={'Введите пароль'} value={user_data.password} ph={'Введите пароль'}></DataField>
                    <DataField name={'verif_pass'} text={'Подтвердите пароль'} value={user_data.verif_pass} ph={'Подтвердите пароль'}></DataField>
                    {!has_acc && <DataField name={'phone'} text={'Номер телефона'} value={user_data.phone} ph={'Введите номер телефона'}></DataField>}
                </div>
                <div className={styles.buttons}>
                    <button onClick={enterAccount} className={styles.order_btn}>{has_acc ? 'Войти' : 'Зарегистрироваться'}</button>
                    <button onClick={() => setHasAcc(!has_acc)}>{has_acc ? 'Нет аккаунта' : 'Уже есть аккаунт'}</button>
                </div>
            </section>
        </main>
    );
};
