import React from "react";
import style from './orderGoods.module.css'
import burger_1 from "../../assets/img/burger_1.jpg";
import {Count} from "../Count/count";

export const OrderGoods=({item})=>{
    return(
        <li className={style.order__item}>
            <img className={style.order__image} src={burger_1} alt={item}/>

            <div className={style.goods}>
                <h3 className={style.goods__title}>{item}</h3>

                <p className={style.goods__weight}>512г</p>

                <p className={style.goods__price}>1279
                    <span className="currency">₽</span>
                </p>
            </div>
            <Count count={1}/>
        </li>
    )
}