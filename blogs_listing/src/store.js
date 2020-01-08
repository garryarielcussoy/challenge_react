import createStore from 'unistore'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {Header} from './components/Header'
import axios from 'axios'

let inisialization = {
    isLogin: false,
    accKey: '',
    name: '',
    email: '',
    category: 'math',
    keyWord: 'math',
    categoryOrSearch: '',
    namaPengguna: '',
    kataKunci: '',
    judulBeritaTerkini: '',
    isLoading: '',
}

export const store = createStore(inisialization)

export const actions = store => (
{
    onSubmit: (state, event) => {
        event.preventDefault()
    }
},
{
    onChange: (state, event) => {
        console.warn(event.target.value)
        store.setState({[event.target.name]: event.target.value})
    }
}
)