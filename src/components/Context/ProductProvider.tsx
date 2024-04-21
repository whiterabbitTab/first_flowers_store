import React, { createContext, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'

type TypeData = {
    "products": [
        {
            "title": string,
            "price": number,
            "discount": number,
            "description": string,
            "picture": string,
            "article": number,
            "width": number,
            "height": number,
            "structure"?: string[],
            "colors": string[],
            "property": string // ----> gifts, postcards, toys, vases, ind_plants, flowers
        }
    ]
}

type TypeDataUser = {
    login: string,
    password: string,
    verif_pass: string,
    phone: string,
    user_name: string,
    user_surname: string,
    date: string,
    bonuses: number
}

const Context = React.createContext({});
export default Context

export const ProductProvider = ({ children }) => {
    const [data, setData] = useState<TypeData>();
    const [user_data, setUserData] = useLocalStorage<TypeDataUser>('user-data', {
        login: '',
        password: '',
        verif_pass: '',
        phone: '',
        user_name: '',
        user_surname: '',
        date: '',
        bonuses: 0
    })
    const [isAuth, setisAuth] = useLocalStorage<boolean>('isAuth', false)
    useEffect(() => {
        fetch('https://whiterabbittab.github.io/fl-store-api/data.json')
            .then(res => res.json())
            .then(data_json => setData(data_json))
    }, [])

    return <Context.Provider value={{data, isAuth, setisAuth, user_data, setUserData}}>
        {children}
    </Context.Provider>
}

