import React from 'react'

export default function Tariff( {tariff} ) {
    return (
        <div className="main">
            <ul className="main-block">
                {tariff.hitsale &&
                    <div className="hitsale">
                        <div className="hit">
                            {tariff.hit}
                        </div>
                        <div className="sale" >
                            {tariff.sale}
                        </div>
                    </div>}
                <li className="main-block-item-1">
                    <div className="title" >{tariff.name}</div>
                </li>
                <li className="main-block-item-2">
                    {tariff.titleText}
                    <div className="price">
                        {tariff.price}
                    </div>
                </li>
                <li className="main-block-item-3">
                    <div className="dollar">
                        {tariff.chase}
                    </div>
                    <div className="month">
                        {tariff.month}
                    </div>
                </li>
                <li className="main-block-item-11"></li>
                <li className="main-block-item-4">
                    <div className="trafic" >
                        {tariff.trafic}
                        {tariff.mb}
                        {tariff.gb}
                    </div>
                </li>
                <li className="main-block-item-5">
                    {tariff.unlimitStatus && <div className="withoutlimit" >{tariff.unlimit}</div>}
                </li>
                <li className="main-block-item-6">
                    <div className="social" >
                        {tariff.socialStatus && tariff.social.map(o => <img className="imgSocial" src={o} alt="social-icon" />)}
                    </div>
                    <h4>{tariff.internetOutSide}</h4>
                </li>
                <li className="main-block-item-7">
                    {tariff.timeMinStatus &&
                        <div className="time" >
                            {tariff.time}{" "}
                            {tariff.min}
                        </div>
                    }
                </li>
                <li className="main-block-item-8">
                    {tariff.messageCountAndSmS &&
                        <div className="messageCount" >
                            {tariff.messageCount}{" "}
                            {tariff.sms}
                        </div>
                    }
                </li>
                <li className="main-block-item-9">
                    <div className="butBtn">
                        {tariff.buyButton}
                    </div>
                </li>
                <li className="main-block-item-10">
                    <div className="text" >
                        {tariff.text}
                    </div>
                </li>  
            </ul>
        </div >
    )
}