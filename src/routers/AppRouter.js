import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import PortfolioItemPage from '../pages/PortfolioItemPage';
import PortfolioPage from '../pages/PortfolioPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage}/> 
            </Switch>
        </div> 
    </BrowserRouter>
);

export default AppRouter; 