import React from "react";
import {Container} from "./components/Container/container";
import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";

export const App = () => {

    return (
        <>
            <Header/>
            <main>
                <nav>
                    <Container className="navigation__container"/>
                </nav>
                <section></section>
            </main>
            <Footer/>
        </>
    )
}
