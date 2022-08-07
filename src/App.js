
import './App.css';

import MainRouter from './MainRouter';
import store from './redux/rtk/store';
import { Provider } from 'react-redux';
import TodoProvider from './context/TodoProvider';



function App() {
  return (

    <TodoProvider>
      <Provider store={store} >

        <MainRouter />

      </Provider>
    </TodoProvider>

  );
}

export default App;
