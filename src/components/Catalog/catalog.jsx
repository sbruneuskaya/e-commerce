import React, {useEffect} from "react";
import {Container} from "../Container/container";
import style from './catalog.module.css'
import {Order} from "../Order/order";
import {CatalogProduct} from "../CatalogProduct/catalogProduct";
import {useDispatch, useSelector} from "react-redux";
import {productRequestAsync} from "../../store/product/productSlice";



export const Catalog = () => {
    const {productsList}=useSelector(state=>state.productRedux)
    const dispatch = useDispatch()
    const {categoryArr, activeCategory} = useSelector((state) => state.categoryRedux)
    console.log(productsList)

    useEffect(()=>{
        if(categoryArr.length){
            dispatch(productRequestAsync(categoryArr[activeCategory].title))
        }
    },[categoryArr, activeCategory])

    return (
        <section className={style.catalog}>
            <Container className={style.catalog__container}>
                <Order/>
                <div className={style.catalog__wrapper}>
                    <h2 className={style.catalog__title}>{categoryArr[activeCategory]?.rus}</h2>

                    <div className={style.catalog__wrap_list}>
                        <ul className={style.catalog__list}>
                            {productsList.map(el => (
                                <li key={el.id} className={style.catalog__item}>
                                    <CatalogProduct el={el}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}