import React,{ Component } from 'react'
import { HashRouter, Switch,Route,Redirect } from "react-router-dom";
import asyncComponent from '../utils/asyncComponent';
import home from '../pages/home/home'

const production = asyncComponent(() => import("../pages/production/production"));
const record = asyncComponent(() => import("../pages/record/record"));
const balance = asyncComponent(() => import("../pages/balance/balance"));

export default class RouteConfig extends Component{ 
    render(){ 
        return ( 
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={home} />
                    <Route path='/production' component={production} />
                    <Route path='/record' component={record} />
                    <Route path='/balance' component={balance} />
                </Switch>
            </HashRouter>
        )
    }
}