import React from "react";
import style from './catalogProduct.module.css'
import photo_4 from "../../assets/img/photo-4.jpg";

export  const CatalogProduct=(props)=>{
    return(
        <article className={style.product}>
            <img src={photo_4} alt={props.title} className={style.product__image}/>

            <p className={style.product__price}>560<span className="currency">₽</span></p>

            <h3 className={style.product__title}>
                <button className={style.product__detail}>{props.title}</button>
            </h3>

            <p className={style.product__weight}>510г</p>

            <button className={style.product__add} type="button">Добавить</button>
        </article>
    )
}