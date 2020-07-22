// arquivo Users.js
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import App from '../../App';

const Par = (props) => {
  return (
  <div>
  <h2>Primeiro Router: {props.id}</h2>
  <p> {props.teste} this is my awesome Users component para voce </p>
  </div>
  );
};

const Users = (props) => {
  const id = props.match.params.id;
  if (id) return <Par teste={'Good Afternoon'}  id={id}/>
  return (
  <div>
    <h2>Segundo Router: com array [{props.pag}]</h2>
    <p> {props.greetingMessage} My awesome About component </p>
      {props.pag.map(e => (
        <div>
         <h2>Users: {e}</h2>
          <Link to={`/users/${e}`}> users:{e} </Link>
          </div>
      ))}
       {/* <Link to={`/users/2`}> users:2 </Link>
       <Link to={`/users/3`}> users:3 </Link> */}
      
  </div>
  );
};
// {/* <header>

// <Link to={`users/${props.pag[0]}`}>User{props.pag[0]}</Link>
// <Link to="/about"> ABOUT</Link>
// <Link to="/users"> USERS</Link> 
//  /* <par  teste={props.greetingMessage} id={id}/> */}
//       /* <Route exact path="/" render={()=> <App  {...props} />}>
//         <Link to='/' >voltar</Link>
//       </Route> */}
//         /* <Route path={`/${id}`} render={ (props) => <par {...props} teste={props.greetingMessage} id={id} />} > </Route> */}
//         <p>ID: {id} {props.greetingMessage}, this is my awesome Users component para o usuário </p>
    

// </header> */}
export default Users;
