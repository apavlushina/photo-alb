import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AlbumsListContainer from "./components/AlbumsListContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={AlbumsListContainer} />
        </header>
      </div>
    </Provider>
  );
}

export default App;
