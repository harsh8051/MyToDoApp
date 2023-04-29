
import './App.css'

import Home from './pages/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
          <List listData={listData} />
        </Route>
        <Route path="/details/:title">
          <DetailsPage listData={listData} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
