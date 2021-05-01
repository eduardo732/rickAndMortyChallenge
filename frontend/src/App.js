import './App.css';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import  firstChallenge  from './pages/firstChallenge'
import  secondChallenge  from './pages/secondChallenge'

import { Provider } from 'react-redux'
import generateStore from './redux/store' 

function App() {
  const store = generateStore();
  return (
    <Provider className="App" store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/firstChallenge" component={firstChallenge} />
        <Route path="/secondChallenge" component={secondChallenge} />
      </Switch>
    </Provider>
  );
}

export default App;
