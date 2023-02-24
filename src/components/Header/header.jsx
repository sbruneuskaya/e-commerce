import React from "react";
import style from './header.module.css'
import logo from './../../assets/img/logo.svg'
import {Container} from "../Container/container";

export const Header = () => {
    return (
        <header className={style.header}>
            <Container>
                <div className={style.header__container}>
                    <img className={style.header__logo} src={logo} alt="Логотип YourMeal"/>
                    <div className={style.header__wrapper}>
                        <h1 className={style.header__title}>
                            <span>Только самые</span>
                            <span className={style.header__red}>сочные бургеры!</span>
                        </h1>
                        <p className={style.header__appeal}>Бесплатная доставка от 599₽</p>
                    </div>
                </div>
            </Container>
        </header>
    )
}