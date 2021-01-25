import axios from 'axios';
import React, {useState} from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    }
  
    return { form, onChange }
}


function SignUp() {
    
    const { form, onChange } = useForm({
        name: '',
        email: '',
        cpf: '',
        password: '',
        passwordConfirm: ''
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        signUpFutureEats()
    }

    const signUpFutureEats = () => {
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf,
            password: form.password
        }

        axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup',body)
        .then(Response => {
            window.localStorage.setItem("token", Response.data.token)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div>
                Future Eats
            </div>

            <div>
                Cadastrar
            </div>

            <div>
                <form onSubmit={handleSubmit}> 
                    <label> Nome </label>
                    <input name='name' type='text' placeholder='Nome Completo' 
                        value={form.name} onChange={handleChange}/>
                    <label> Email </label>
                    <input name='email' type='email' placeholder='email@example.com' 
                        value={form.email} onChange={handleChange}/>
                    <label> Cpf </label>
                    <input name='cpf' type='text' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                        placeholder='000.000.000-00' value={form.cpf} onChange={handleChange}/>
                    <label> Senha </label>
                    <input name='password' type='password' placeholder='Mínimo 6 caracteres'
                        value={form.password} onChange={handleChange}/>
                    <label> Confirme a senha </label>
                    <input name='passwordConfirm' type='password' placeholder='Mínimo 6 caracteres' 
                        value={form.passwordConfirm} onChange={handleChange}/>
                    <button type='submit'> Entrar </button>
                </form>
            </div>

            <div>
                Não possui Cadastro clique aqui
            </div>
        </div>
    );
}

export default SignUp;