import React from "react";
import { Switch, Route } from "react-router-dom";

import { InfoProvider } from "./Context.jsx";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Questions from "./Components/Questions/Questions.jsx";
import Login from "./Components/Login/Login.jsx";
import Answers from "./Components/Answers/Answers.jsx";
import Students from "./Components/Students/Students.jsx";

function App() {

  return (
    <>
      <InfoProvider>
        <Header/>

        <Switch>
          <Route path='/' exact>
            <Main/>

          </Route>

          <Route path='/about' exact>
            <About/>
          </Route>

          <Route path='/teachers' exact>
            <Teachers/>
          </Route>

          <Route path='/students' exact>
            <Students/>
          </Route>

          <Route path='/contact' exact>
            <Contact/>
          </Route>

          <Route path='/questions' exact>
            <Questions/>
          </Route>

          <Route path='/answers' exact>
            <Answers/>
          </Route>
          
          <Route path='/login' exact>
            <Login/>
          </Route>

          <Route path='/signup' exact>
            <Signup/>
          </Route>

        </Switch>
        <Footer/>
      </InfoProvider>
    </>
  )
}

export default App;
