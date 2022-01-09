import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginComponent from "./LoginComponent";
import ProductComponent from "./ProductComponent";
import RegisterComponent from "./RegisterComponent"

function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={RegisterComponent} />
                        <Route exact path="/Login" component={LoginComponent} />
                         <Route exact path="/product" component={ProductComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}

export default RouterComponent;