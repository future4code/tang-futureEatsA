import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange = (value, name) => {
        setForm({ ...form, [name]: value })
    }

    return { form, onChange }
}

function EditarCadastro() {
    const { form, onChange } = useForm({
        name: '',
        email: '',
        cpf: ''
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        edicaoDeCadastro()
    }

    const edicaoDeCadastro = () => {
        const body = {
            name: form.name,
            email: form.email,
            cpf: form.cpf
        }

        axios
            .put("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile", body, {
                headers: {
                    "auth": window.localStorage.getItem("token")
                }
            })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return <div>
        Edição de Cadastro
        <div>
            <form onSubmit={handleSubmit}>
                <label> Nome </label>
                <input name='name' type='text' placeholder='Nome Completo'
                    value={form.name} onChange={handleChange} />
                <label> Email </label>
                <input name='email' type='email' placeholder='email@example.com'
                    value={form.email} onChange={handleChange} />
                <label> Cpf </label>
                <input name='cpf' type='text' pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    placeholder='000.000.000-00' value={form.cpf} onChange={handleChange} />
                <button type='submit'> Entrar </button>
            </form>
        </div>
    </div>

}

export default EditarCadastro