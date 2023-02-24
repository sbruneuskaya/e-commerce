import React from "react";
import {Container} from "../Container/container";
import style from './catalog.module.css'
import photo_5 from './../../assets/img/photo-5.jpg'
import photo_1 from './../../assets/img/photo-1.jpg'
import photo_3 from './../../assets/img/photo-3.jpg'
import photo_2 from './../../assets/img/photo-2.jpg'
import photo_4 from './../../assets/img/photo-4.jpg'
import photo from './../../assets/img/photo.jpg'
import {Order} from "../Order/order";
import {CatalogProduct} from "../CatalogProduct/catalogProduct";

const goodsList = [
    {title: 'Мясная бомба'},
    {title: 'Супер сырный'},
    {title: 'Сытный'},
    {title: 'Итальянский'},
    {title: 'Вечная классика'},
    {title: 'Тяжелый удар'},
];


export const Catalog = () => {
    return (
        <section className={style.catalog}>
            <Container className={style.catalog__container}>
                <Order/>
                <div className={style.catalog__wrapper}>
                    <h2 className={style.catalog__title}>Бургеры</h2>

                    <div className={style.catalog__wrap_list}>
                        <ul className={style.catalog__list}>
                            {goodsList.map((el, key) => (
                                <li key={key} className={style.catalog__item}>
                                    <CatalogProduct title={el.title}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}