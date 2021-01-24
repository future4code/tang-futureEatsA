import React, { useState } from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value });
    };
  
    return { form, onChange };
};

function Login() {
    const { form, onChange } = useForm({ email: '', senha: ''});

    const handleChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        Login(form)
    };

    const Login = (body) => {
        console.log(body)
    }
    
    return (
        <div>
            <div>
                Future Eats
            </div>

            <div>
                Entrar
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        name={"email"}
                        type={"text"} 
                        value={form.email} 
                        onChange={handleChange} 
                        required
                    />
                    <input 
                        name={"senha"} 
                        type={"password"} 
                        value={form.senha} 
                        onChange={handleChange} 
                        required
                    />
                    <button>Entrar</button>
                </form>
            </div>

            <div>
                Não possui Cadastro clique aqui
            </div>
        </div>
    );
}

export default Login;