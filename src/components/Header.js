import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import './../App.css';

class Header extends Component {
  render() {
    return (
      <div className="menu-container">
      
        <nav>
            <label for="menu-mobile" className="menu-mobile">Menu</label>
            <input type="checkbox" id="menu-mobile" role="button" />
            <ul>
                {this.props.links.map((el,i)=>{
                    return(
                    <li key={i} className={"menu-"+el.label.toLowerCase()}> <Link to={el.to}>{el.label}</Link>
                    <ul key={i} className="submenu">
                    {el.subMenu && el.subMenu.map((e,k)=>{                     
                        return(                       
                            <li key={k}>< Link key={i} to={e.toSub}> {e.labSub} </Link></li>                        
                            )
                        })}
                    </ul>
                    </li>  
                    )                
                })}   
            </ul>    
        </nav>
        {this.props.links.map((el,i)=>{
            return(
            <Route exact path={el.to} render={() => <h1> Page {el.label} </h1> } />
            )})}

       

        {this.props.links.map((el,i)=>{
           
                return(
                    ((el.subMenu) && el.subMenu.map((e,k)=>{        
                    return(                     
                        <Route key={k} path={e.toSub} render={() => 'Page '+e.labSub} />                     
                     )
                     
                 }))
                )

        })}    
      </div>
    );
  }
}

export default Header;

