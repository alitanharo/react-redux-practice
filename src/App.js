
import './App.css';

import MainRouter from './MainRouter';
import store from './redux/stor';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store= {store} >
    
   <MainRouter/>

    </Provider>
  );
}

export default App;
