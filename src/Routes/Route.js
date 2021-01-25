import React from 'react'
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Feed from '../Components/Home/Feed/Feed'
import Login from '../Components/LoginSignUp/Login/Login'
import SignUp from '../Components/LoginSignUp/SignUp/SignUp'
import CadastroEndereco from '../Components/LoginSignUp/CadastroEndereco/CadastroEndereco'
import Perfil from '../Components/Perfil/Perfil/Perfil'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>

            <Route exact path="/SignUp">
                <SignUp/>
            </Route>

            <Route exact path="/MeuEndereco">
                <CadastroEndereco/>
            </Route>

            <Route exact path="/Feed">
                <Feed/>
            </Route>

            <Route exact path="/Search">
                Search
            </Route>

            <Route exact path="/Carrinho">
                Carrinho
            </Route>

            <Route exact path="/Restaurante">
                Restaurante
            </Route>

            <Route exact path="/Perfil">
                <Perfil/>
            </Route>

            <Route exact path="/EditarCadastro">
                Editar Cadastro
            </Route>

            <Route exact path="/EditarEndereco">
                Editar Endereco
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router