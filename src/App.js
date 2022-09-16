import React from "react"
import Header from "./Header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GroceriesList from "./components/GroceriesList" 
import MenusList from "./components/MenusList"




const App = () => {
  return (
      <Router>
          <main>
              <Header title="Menu And Groceries List"/>
              <Routes>
                <Route path="/" element={<MenusList />} />
              </Routes>
              <GroceriesList />
          </main>
      </Router>
  )
}


export default App;
