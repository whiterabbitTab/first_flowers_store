import React, { useState, useEffect, useContext } from 'react';
import styles from './DataField.module.scss';
import Context from '#components/Context/ProductProvider.tsx';

export const DataField = ({ name, text, value, type = 'text', ph = '' }) => {

    const {user_data, setUserData} = useContext(Context)
    const handleChange = (e) => {
        const input = e.target
        setUserData({
            ...user_data,
            [name]: input.value
        })
        console.log(user_data)
    }

    return(
        <form onChange={(e) => handleChange(e)} className={styles.field}>
            <label htmlFor={`field_${name}`}>{text}</label>
            <input name={`field_${name}`} type={type} value={value} placeholder={ph} />
        </form>
    );
};
