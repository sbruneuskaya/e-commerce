import React from "react";
import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";
import {Navigation} from "./components/Navigation/navigation";
import {Catalog} from "./components/Catalog/catalog";

export const App = () => {

    return (
        <>
            <Header/>
            <main>
                <Navigation/>
                <Catalog/>
            </main>
            <Footer/>
        </>
    )
}
