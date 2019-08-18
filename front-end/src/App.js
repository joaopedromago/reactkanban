import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Kanban from './components/kanban.js'

function App() {


  return (<div><Kanban></Kanban></div>);
}

export default App;

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)	