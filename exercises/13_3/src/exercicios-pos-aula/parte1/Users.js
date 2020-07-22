// arquivo Users.js
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import App from '../../App';

const Par = (props) => {
  const id = props.match.params;
  if (id) return (
  <div>
  <h2>Usuário: {id.user}</h2>
  <p> {props.teste} this is my awesome Users component para voce </p>
  </div>
  );
};

const Users = (props) => {
  const id = props.match.params;
return (
  <BrowserRouter>
  <div>
    <h2>Users: {id.id}</h2>
    <p> {props.greetingMessage} My awesome About component </p>
       <Link to={`/users/1}`}> users:1 </Link>
       <Link to={`/users/2`}> users:2 </Link>
       <Link to={`/users/3`}> users:3 </Link>
       <main>
       <Route  path='/users/:user' component={Par}></Route>
      <Route  path={`/users/${id}`} component={Par}><Par teste={'Good After'}/></Route>      

       </main>
  </div>
  </BrowserRouter>
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
