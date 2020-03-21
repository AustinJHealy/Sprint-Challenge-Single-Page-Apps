import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";



export default function App() {
  return (
    <main data-testid='app'>
      <Route exact path ='/' component={ WelcomePage } />
      <Route exact path ="/characters/:name" component={ SearchForm } />
      <Header />
      <CharacterCard />
    </main>
  );
}
