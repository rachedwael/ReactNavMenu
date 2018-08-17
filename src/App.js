import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';



class App extends Component {

  constructor(props)
  {
    super(props)
    this.state={links:[
      {label:"PROGRAMMES",to:"/programmes",subMenu:[{labSub:"FULL TIME", toSub:"/programmes/fulltime"},{labSub: "PART TIME", toSub:"/programmes/summeracademy"},{labSub: "SUMMER ACADEMY", toSub:"/home/arab"}]},
      {label:"SERVICES",to:"/services",subMenu:[{labSub:"For Entrepreneur", toSub:"/services/ForEntrepreneur"},{labSub:"For Students", toSub:"/services/Forstudents"},{labSub:"For Hobbyiest", toSub:"/services/ForHobbyiest"}]},
      {label:"ABOUT",to:"/about",subMenu:[{labSub:"QUIS SOMMES NOUS", toSub:"/about/quisommesnous"},{labSub:"PARTENAIRES", toSub:"/about/partenaires"}]},
      {label:"Contact",to:"/contact"}]
} 
  }
  render() {
    return (
      <div className="App">
        <Header links={this.state.links} />
      </div>
    );
  }
}

export default App;
//el.subMenu && el.subMenu.map