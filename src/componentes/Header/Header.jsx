import React from "react";
import ItenListContainer from "../ItenListContainer/ItenListContainer";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header>
      <h1>Ecommerce</h1>
      <NavBar/>
      <ItenListContainer greeting="Styling Integrado"/>
    </header>
  );
}
