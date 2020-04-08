import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { Navbar } from "./components/common/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Seminaries } from "./components/pages/seminaries/Seminaries";
import { StudentZelfstandige } from "./components/pages/studentzelfstandige/StudentZelfstandige";

export const App: React.FC = () => {
    return (
		<BrowserRouter>
			<div className="App">
				<Navbar/>
				<div className="App-page">
					<Route exact={true} path="/" component={Home}/>
					<Route exact={true} path="/seminaries" component={Seminaries}/>
					<Route exact={true} path="/student-zelfstandige" component={StudentZelfstandige}/>
				</div>
			</div>
		</BrowserRouter>
    );
};