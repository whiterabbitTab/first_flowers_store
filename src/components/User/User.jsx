import React, { useContext } from 'react';
import styles from './User.module.scss';
import Context from '#components/Context/ProductProvider.tsx';
import { useNavigate } from 'react-router-dom'
import { DataField } from '#components/widgets/DataField/DataField.jsx';

export const User = () => {

    const navigate = useNavigate()
    const {setisAuth, user_data, setUserData} = useContext(Context)
    const exitAccount = () => {
        setisAuth(false)
        setUserData({
            login: '',
            password: '',
            verif_pass: '',
            phone: '',
            user_name: '',
            user_surname: '',
            date: '',
            bonuses: 0
        })
        navigate('/', {replace: true})
    }
    
    const changePass = () => {
        const inputs = document.getElementById('pass').querySelectorAll('input')
        if (inputs[0].value == user_data.password) {
            if (inputs[1].value == inputs[2].value) {
                setUserData({
                    ...user_data,
                    password: inputs[1].value,
                    verif_pass: inputs[1].value
                })
                inputs[0].value = inputs[1].value = inputs[2].value = ''
                
            }
        }
    }

    return(
        <main id='old' className={styles.user_page}>
            <section className={styles.user_info}>
                <div className={styles.icons}>
                    <div className={styles.icon}></div>
                    <h5 className={styles.user__name}>{user_data.login}</h5>
                    <div className={styles.bonus_block}>
                        <p>Накоплено бонусов</p>
                        <div>
                            <p>{user_data.bonuses}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.main_info}>
                    <h3>Данные профиля</h3>
                    <div>
                        <DataField name={'phone'} text={'Телефон'} value={user_data.phone} ph={'Введите номер телефона'}></DataField>
                        <DataField name={'user_name'} text={'Имя'} value={user_data.user_name} ph={'Введите свое имя'}></DataField>
                        <DataField name={'user_name'} text={'Фамилия'} value={user_data.user_surname} ph={'Введите свою фамилию'}></DataField>
                        <DataField name={'date'} text={'Дата рождения'} value={user_data.date} type='date'></DataField>
                    </div>
                </div>
                <div className={styles.password_settings}>
                    <h3>Поменять пароль</h3>
                    <div id='pass'>
                        <DataField name={'old_password'} text={'Старый пароль'} ph={'Введите старый пароль'}></DataField>
                        <DataField name={'new_password'} text={'Новый пароль'} ph={'Введите новый пароль'}></DataField>
                        <DataField name={'confirm_password'} text={'Подтвердите пароль'} ph={'Подтвердите новый пароль'}></DataField>
                        <button onClick={changePass}>Поменять пароль</button>
                    </div>
                </div>
            </section>
            <button onClick={exitAccount}>Выйти из аккаунта</button>
        </main>
    );
};