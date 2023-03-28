import { createContext } from "react"
import axios from "axios";
import React, { useEffect, useState } from "react";

export let NewsContext = createContext([])

export function NewsContextProvider(props) {
    const [Bussiness, setBussiness] = useState([]);
    const [Apple, setApple] = useState([]);
    const [wolfStreet, setWolf] = useState([]);
    const [health, setHealth] = useState([]);
    const [football, setFootbal] = useState([]);
    const [headline, setHeadLine] = useState([]);
    const [Sport, setSport] = useState([])
    const [fashion, setFashion] = useState([])
    const [technology, setTechnology] = useState([])
    const [foods, setFoods] = useState([])
    let keyApi = '87b2adef633f4dfba5ae1b1fe93d37b0'


    async function getTopHeadline(callback) {
        let { data } = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${keyApi}`
        )
        callback(data.articles.slice(0, 5))
    }



    async function getSport(callback) {
        let { data } = await axios.get(`https://newsapi.org/v2/everything?apiKey=${keyApi}&q=sport&sortBy=popularity`)
        callback(data.articles)

    }




    async function getFoods(callback) {
        let { data } = await axios.get(`https://newsapi.org/v2/everything?apiKey=${keyApi}&q=foods&sortBy=popularity`)
        callback(data.articles)
    }




    async function getTech(callback) {
        let { data } = await axios.get(`https://newsapi.org/v2/everything?apiKey=${keyApi}&q=technology&sortBy=popularity`)
        callback(data.articles)
    }




    async function getFashion(callback) {
        let { data } = await axios.get(`https://newsapi.org/v2/everything?apiKey=${keyApi}&q=fashion&sortBy=popularity`)
        callback(data.articles)
    }



    async function getBussinessData(type, callback) {
        let { data } = await axios.get(
            `https://newsapi.org/v2/everything?q=${type}&apiKey=${keyApi}`
        );
        callback(data.articles.slice(1, 4));
    }


    async function getFootballData(type, callback) {
        let { data } = await axios.get(
            `https://newsapi.org/v2/everything?q=${type}&apiKey=${keyApi}`
        );
        callback(data.articles.slice(1, 7));
    }




    async function getWolfStreet(callback) {
        const { data } = await axios.get(
            `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${keyApi}`
        );
        callback(data.articles.slice(7, 10));
    }



    useEffect(() => {
        getTopHeadline(setHeadLine)
        getBussinessData("tesla", setBussiness);
        getBussinessData("Apple", setApple);
        getBussinessData("health", setHealth);
        getFootballData("football", setFootbal);
        getWolfStreet(setWolf);
        getSport(setSport)
        getFoods(setFoods)
        getTech(setTechnology)
        getFashion(setFashion)

    }, []);

    return <NewsContext.Provider value={{ Bussiness, Apple, wolfStreet, health, football, headline, Sport, fashion, technology, foods }} >
        {props.children}
    </NewsContext.Provider>
}