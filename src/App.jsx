import React from "react";
import {Header} from "./components/Header/header";
import {Footer} from "./components/Footer/footer";
import {Navigation} from "./components/Navigation/navigation";
import {Catalog} from "./components/Catalog/catalog";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = () => {

    return (
        <Provider store={store}>
            <Header/>
            <main>
                <Navigation/>
                <Catalog/>
            </main>
            <Footer/>
        </Provider>
    )
}
