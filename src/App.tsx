
import './App.css'

import Home from './pages/Home'

import TaskList from './pages/TaskList'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasklist" element={<TaskList />} />
      </Routes>
    </Router>
  )
}

export default App
