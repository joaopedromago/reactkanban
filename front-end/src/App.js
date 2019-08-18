import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [cardsBacklog, setBacklogCard] = useState([]);
  const [cardsTodo, setTodoCard] = useState([]);
  const [cardsInprogress, setInprogressCard] = useState([]);
  const [cardsTesting, setTestingCard] = useState([]);
  const [cardsDone, setDoneCard] = useState([]);

  const [cardsCount, setCardCount] = useState(0);

  const addCard = (texto, position) => {
    setCardCount(cardsCount + 1);
    let newCard = {
      key: cardsCount,
      titulo: texto + ' ' + cardsCount
    }

    switch (position) {
      case 0:
        setBacklogCard([
          ...cardsBacklog,
          newCard
        ])
        break;
      case 1:
        setTodoCard([
          ...cardsTodo,
          newCard
        ])
        break;
      case 2:
        setInprogressCard([
          ...cardsInprogress,
          newCard
        ])
        break;
      case 3:
        setTestingCard([
          ...cardsTesting,
          newCard
        ])
        break;
      case 4:
        setDoneCard([
          ...cardsDone,
          newCard
        ])
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-div">
      <table className="kanban-table">
        <thead>
          <tr>
            <th>
              Backlog
             <button className="ui labeled icon blue button" onClick={() => addCard('Backlog', 0)}>
                <i className="icon plus"></i>
                Adicionar Card
              </button>
            </th>
            <th>
              To do
              <button className="ui labeled icon blue button" onClick={() => addCard('To do', 1)}>
                <i className="icon plus"></i>
                Adicionar Card
              </button>
            </th>
            <th>
              In progress
              <button className="ui labeled icon blue button" onClick={() => addCard('In progress', 2)}>
                <i className="icon plus"></i>
                Adicionar Card
              </button>
            </th>
            <th>
              Testing
              <button className="ui labeled icon blue button" onClick={() => addCard('Testing', 3)}>
                <i className="icon plus"></i>
                Adicionar Card
            </button>
            </th>
            <th>
              Done
              <button className="ui labeled icon blue button" onClick={() => addCard('Done', 4)}>
                <i className="icon plus"></i>
                Adicionar Card
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="ui cards card-div custom-scrollbar">
                {cardsBacklog.map(item => (
                  <div className="ui fluid card" key={item.key}>
                    <div className="content">
                      <div className="header">{item.titulo}</div>
                      <div className="description">Clique para definir as informações deste card</div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="ui cards card-div custom-scrollbar">
                {cardsTodo.map(item => (
                  <div className="ui fluid card" key={item.key}>
                    <div className="content">
                      <div className="header">{item.titulo}</div>
                      <div className="description">Clique para definir as informações deste card</div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="ui cards card-div custom-scrollbar">
                {cardsInprogress.map(item => (
                  <div className="ui fluid card" key={item.key}>
                    <div className="content">
                      <div className="header">{item.titulo}</div>
                      <div className="description">Clique para definir as informações deste card</div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="ui cards card-div custom-scrollbar">
                {cardsTesting.map(item => (
                  <div className="ui fluid card" key={item.key}>
                    <div className="content">
                      <div className="header">{item.titulo}</div>
                      <div className="description">Clique para definir as informações deste card</div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
            <td>
              <div className="ui cards card-div custom-scrollbar">
                {cardsDone.map(item => (
                  <div className="ui fluid card" key={item.key}>
                    <div className="content">
                      <div className="header">{item.titulo}</div>
                      <div className="description">Clique para definir as informações deste card</div>
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
