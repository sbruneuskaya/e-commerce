import React from "react";
import style from './catalogProduct.module.css'
import {API_URL} from "../../const";
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/order/orderSlice";


export const CatalogProduct = ({el}) => {
    const dispatch = useDispatch()
    return (
        <article className={style.product}>
            <img src={`${API_URL}/${el.image}`} alt={`${el.title}`} className={style.product__image}/>

            <p className={style.product__price}>{el.price}<span className="currency">₽</span></p>

            <h3 className={style.product__title}>
                <button className={style.product__detail}>{el.title}</button>
            </h3>

            <p className={style.product__weight}>{el.weight}</p>

            <button className={style.product__add} type="button"
            onClick={()=>{
                dispatch(addProduct({id: el.id}))
            }}
            >Добавить</button>
        </article>
    )
}