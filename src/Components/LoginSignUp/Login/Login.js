import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function Login() {
	const token = window.localStorage.getItem('token');
	const hasAddress = window.localStorage.getItem('hasAddress');
	const { form, onChange } = useForm({ email: '', password: '' });
	const history = useHistory();

	useEffect(() => {
		checaDados();
	}, []);

	const checaDados = () => {
		if (token) {
			if (hasAddress) {
				history.push('/Feed');
			} else {
				history.push('/MeuEndereco');
			}
		}
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		onChange(value, name);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		Login();
	};

	const Login = () => {
		const body = {
			email: form.email,
			password: form.password,
		};

		axios
			.post(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login',
				body
			)
			.then((Response) => {
				window.localStorage.setItem('token', Response.data.token);
				window.localStorage.setItem(
					'hasAddress',
					Response.data.user.hasAddress
				);
				checaDados();
			})
			.catch((error) => console.log(error));
	};

	return (
		<div>
			<div>Future Eats</div>

			<div>Entrar</div>

			<div>
				<form onSubmit={handleSubmit}>
					<input
						name={'email'}
						type={'text'}
						value={form.email}
						onChange={handleChange}
						required
					/>
					<input
						name={'password'}
						type={'password'}
						value={form.password}
						onChange={handleChange}
						required
					/>
					<button>Entrar</button>
				</form>
			</div>

			<div>
				<span>Não possui Cadastro?</span>{' '}
				<button
					onClick={() => {
						history.push('/SignUp');
					}}
				>
					clique aqui
				</button>
			</div>
		</div>
	);
}

export default Login;
