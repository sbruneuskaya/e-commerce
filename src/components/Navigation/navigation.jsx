import React from "react";
import style from './navigation.module.css'
import {Container} from "../Container/container";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../store/categoty/categorySlice";

export const Navigation = () => {
    const {categoryArr, activeCategory} = useSelector((state) => state.categoryRedux)
    const dispatch = useDispatch()
    // console.log(categoryArr)

    return (
        <nav className={style.navigation}>
            <Container className={style.navigation__container}>
                <ul className={style.navigation__list}>
                    {categoryArr.map((el, i) =>
                        <li key={i}>
                            <button
                                className={classNames(style.navigation__button, activeCategory === i ? style.navigation__button_active : null)}
                                style={{backgroundImage: `url(${el.image})`}}
                                onClick={()=>{
                                    dispatch(changeCategory({indexCategory: i}))
                                }}
                            >{el.rus}
                            </button>
                        </li>
                    )}
                </ul>
            </Container>
        </nav>
    )
}