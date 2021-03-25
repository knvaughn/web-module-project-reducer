import React, {useReducer} from 'react';
import reducer, {initialState} from './reducers/index';
import {addOne, applyNumber, changeOperation, clearDisplay, storeMemory, applyMemory, clearMemory} from './actions/index';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numberHandler = (number) => {
    dispatch(applyNumber(number));
  }

  const operationHandler = (operation) => {
    dispatch(changeOperation(operation));
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => {dispatch(storeMemory())}}/>
              <CalcButton value={"MR"} onClick={() => {dispatch(applyMemory())}}/>
              <CalcButton value={"MC"} onClick={() => {dispatch(clearMemory())}}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={2} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={3} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={5} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={6} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={8} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
              <CalcButton value={9} onClick={(event) => {numberHandler(parseInt(event.target.innerText))}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={(event) => {operationHandler(event.target.innerText)}}/>
              <CalcButton value={"*"} onClick={(event) => {operationHandler(event.target.innerText)}}/>
              <CalcButton value={"-"} onClick={(event) => {operationHandler(event.target.innerText)}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => {dispatch(clearDisplay())}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
