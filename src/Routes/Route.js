import React from 'react'
import {BrowserRouter , Switch, Route} from "react-router-dom"
import Feed from '../Components/Home/Feed/Feed'
import Login from '../Components/LoginSignUp/Login/Login'
import SignUp from '../Components/LoginSignUp/SignUp/SignUp'
import CadastroEndereco from '../Components/LoginSignUp/CadastroEndereco/CadastroEndereco'
import Perfil from '../Components/Perfil/Perfil/Perfil'
import EditarCadastro from '../Components/Perfil/EditarCadastro/EditarCadastro'
import Restaurante from '../Components/Restaurante/Restaurante/Restaurante'
import GlobalState from '../Global/GlobalState'

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
                <GlobalState>
                    <Feed/>
                </GlobalState>
            </Route>

            <Route exact path="/Search">
                Search
            </Route>

            <Route exact path="/Carrinho">
                Carrinho
            </Route>

            <Route exact path="/Restaurante">
                <GlobalState>
                    <Restaurante/>
                </GlobalState>
            </Route>

            <Route exact path="/Perfil">
                <Perfil/>
            </Route>

            <Route exact path="/EditarCadastro">
                <EditarCadastro/>
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