import createStore from 'unistore'
import React from 'react'
import {Redirect} from 'react-router-dom'
import {Header} from './components/Header'
import axios from 'axios'

// News API
const apiKey = '9975f97755874c9fb9b501d61a9cff2a'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl + "everything?sources=cnn&apiKey=" + apiKey

const inisialization = {
    isLogin: false,
    accKey: '',
    name: '',
    email: '',
    category: '',
    keyWord: '',
    categoryOrSearch: '',
    namaPengguna: '',
    kataKunci: '',
    judulBeritaTerkini: [],
    beritaUtama: [],
    isLoading: '',
}

export const store = createStore(inisialization)

export const actions = store => (
{
    onSubmit: (state, event) => {
        event.preventDefault()
    },

    handleChange: (state, event) => {
        console.warn(event.target.value)
        store.setState({[event.target.name]: event.target.value, isLogin: true})
    },

    clickTab: async (state, something, event) => {
        await axios
            .get(baseUrl + "everything?q=" + something + "&apiKey=" + apiKey)
            .then(async function(response){
                await store.setState({beritaUtama: response.data.articles, isLoading: false, category: something, categoryOrSearch: 'category'})
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
    },

    searchByWord: (state, event) => {
        console.warn(event.target.value)
        let keyword = event.target.value;
        axios
            .get(baseUrl + "everything?q=" + keyword + "&apiKey=" + apiKey)
            .then(function(response){
                store.setState({beritaUtama: response.data.articles, isLoading: false, category: keyword, categoryOrSearch: 'search'})
                console.warn("check response", response.data.articles)
            })
            .catch(function(response){
                store.setState({isLoading: false})
                console.warn("TESSSSSSSSSSSSSSSSS")
                console.warn(response)
            })
    },

    postLogin: (state, event) => {
        const namaPengguna = inisialization.namaPengguna;
        const kataKunci = inisialization.kataKunci
        const data = {
          username: namaPengguna,
          password: kataKunci
        };
        
        console.warn('check post login')
        axios
          .post("https://react-challenge.free.beeceptor.com/masuk", data)
          .then(async function (response) {
            console.log(response.data);
            if (response.data.hasOwnProperty("accKey")) {
              console.warn('masuk if');
              await store.setState({accKey: response.data.accKey, isLogin: true, name: response.data.name, email: response.data.email});
              store.history.push("/profile");
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },

}
)