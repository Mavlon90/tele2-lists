import React from 'react'
import Tariff from '../Tariffs/Tariff'

export default function App() {
    const  social = [
           "https://msk.tele2.ru/api/media/asset?mediaId=m220005",
           "https://msk.tele2.ru/api/media/asset?mediaId=m220001",
           "https://msk.tele2.ru/api/media/asset?mediaId=m220003",
           "https://msk.tele2.ru/api/media/asset?mediaId=m220006",
           "https://msk.tele2.ru/api/media/asset?mediaId=m220004",
           "https://msk.tele2.ru/api/media/asset?mediaId=m1990041",
           "https://msk.tele2.ru/api/media/asset?mediaId=m1680033",
    ];
  const teleList = [
      {id: 1, name: "Везде онлайн", price: 500, chase: "₽", month: "/месяц", trafic: 40, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 500,min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: true, socialStatus: true, unlimitStatus: true, messageCountAndSmS: true, timeMinStatus: true},
        
        {id: 2, name: "Мой онлайн", price: 400, chase: "₽", month: "/месяц", trafic: 15, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 500, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: true, unlimitStatus: true, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 3, name: "Мой онлайн +", price: 700, chase: "₽", month: "/месяц", trafic: 30, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, internetOutSide: "Интернет за границей", time: 800, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: true, unlimitStatus: true, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 4, name: "Мой разговор", price: 200, chase: "₽", month: "/месяц", trafic: 2, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 200, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, internetOutSideStatus: true,timeMinStatus: true},
 
        {id: 5, name: "Мой Tele2", price: 7, chase: "₽", month: "/день", trafic: 5, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 200, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, timeMinStatus: true},
 
        {id: 6, name: "Безлимит", price: 650, chase: "₽", month: "/месяц", trafic: "БЕЗЛИМИТНЫЙ ИНТЕРНЕТ", unlimit: "+безлимитные",
        social: social, time: 500, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
        {id: 7, name: "Премиум", price: 1500, chase: "₽", month: "/месяц", trafic: 50, gb: 'ГБ', unlimit: "+безлимитные",
        social: social, time: 2000, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 500, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
        {id: 8, name: "Классический", titleText: "Без абонентской платы", untlimit: "+безлимитные",
        social: social, time: 2000, min: "мин.", messageCount: 500, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, timeMinStatus: false},
 
        {id: 9, name: "Интернет для устройств", titleText: "Без абонентской платы", untlimit: "+безлимитные",
        social: social, time: 500, min: "мин.",  messageCount: 50, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: false, internetOutSideStatus: false, timeMinStatus: false},
 
        {id: 10, name: "Интернет для вещей", price: 100, chase: "₽", month: "/месяц", trafic: 300, mb: 'МБ', untlimit: "+безлимитные",
        social: social, time: 300, min: "мин.", text: "+ безлимит на Tele2 России", messageCount: 100, sms: "SMS", buyButton: "Купить SIM",
        hit: 'Хит', sale: 'продаж', hitsale: false, socialStatus: false, unlimitStatus: false, messageCountAndSmS: true, timeMinStatus: true},
 
    ];


    return (
        
        <>
         {teleList.map(o => <Tariff tariff = {o}
         />)}
         </>
    )
}
