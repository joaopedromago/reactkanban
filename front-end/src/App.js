import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Kanban from './components/kanban.js'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

function App() {


  return (
    <DndProvider backend={HTML5Backend}>
      <Kanban></Kanban>
    </DndProvider>);
}

export default App;