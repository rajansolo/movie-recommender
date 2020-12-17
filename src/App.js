import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
 
const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
