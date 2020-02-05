import React from 'react'

export default function Tariff( {props} ) {
    return (
        <div className="main">
            <ul className="main-block">
                {props.hitsale &&
                    <div className="hitsale">
                        <div className="hit">
                            {props.hit}
                        </div>
                        <div className="sale" >
                            {props.sale}
                        </div>
                    </div>}
                <li className="main-block-item-1">
                    <div className="title" >{props.name}</div>
                </li>
                <li className="main-block-item-2">
                    {props.titleText}
                    <div className="price">
                        {props.price}
                    </div>
                </li>
                <li className="main-block-item-3">
                    <div className="dollar">
                        {props.chase}
                    </div>
                    <div className="month">
                        {props.month}
                    </div>
                </li>
                <li className="main-block-item-11"></li>
                <li className="main-block-item-4">
                    <div className="trafic" >
                        {props.trafic}
                        {props.mb}
                        {props.gb}
                    </div>
                </li>
                <li className="main-block-item-5">
                    {props.unlimitStatus && <div className="withoutlimit" >{props.unlimit}</div>}
                </li>
                <li className="main-block-item-6">
                    <div className="social" >
                        {props.socialStatus && props.social.map(o => <img className="imgSocial" src={o} alt="social-icon" />)}
                    </div>
                    <h4>{props.internetOutSide}</h4>
                </li>
                <li className="main-block-item-7">
                    {props.timeMinStatus &&
                        <div className="time" >
                            {props.time}{" "}
                            {props.min}
                        </div>
                    }
                </li>
                <li className="main-block-item-8">
                    {props.messageCountAndSmS &&
                        <div className="messageCount" >
                            {props.messageCount}{" "}
                            {props.sms}
                        </div>
                    }
                </li>
                <li className="main-block-item-9">
                    <div className="butBtn">
                        {props.buyButton}
                    </div>
                </li>
                <li className="main-block-item-10">
                    <div className="text" >
                        {props.text}
                    </div>
                </li>  
            </ul>
        </div >
    )
}