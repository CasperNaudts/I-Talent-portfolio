import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Footer } from "./components/common/footer/Footer";
import { Navbar } from "./components/common/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Internationaal } from "./components/pages/internationaal/Internationaal";
import { Seminaries } from "./components/pages/seminaries/Seminaries";

export const App: React.FC = () => {
    return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				<div className="App-page">
					<Route exact={true} path="/" component={Home}/>
					<Route exact={true} path="/seminaries" component={Seminaries}/>
					<Route exact={true} path="/internationaal" component={Internationaal}/>
					<Footer/>
				</div>
			</div>
		</BrowserRouter>
    );
};