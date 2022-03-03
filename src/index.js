import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from "./context/Context"
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter,Route, Switch} from 'react-router-dom'

ReactDOM.render(
<CookiesProvider><ContextProvider><BrowserRouter><Switch><Route path="/card=:card/mandantId=:mandantId/analyseId=:analyseId/contextId=:contextId"><div style={{backgroundColor:"#eeeeee"}}><App /></div></Route></Switch></BrowserRouter></ContextProvider></CookiesProvider>,
 document.getElementById('root'));

 //mandantID=5bb62244-c69e-11e6-9d84-001c4254d875, analyseId=5bbbdc57-c69e-11e6-9d84-001c4254d875, 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
