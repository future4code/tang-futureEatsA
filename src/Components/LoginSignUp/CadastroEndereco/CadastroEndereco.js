import axios from 'axios';
import React, { useState } from 'react';

export const useForm = (initialValues) => {
	const [form, setForm] = useState(initialValues);

	const onChange = (value, name) => {
		setForm({ ...form, [name]: value });
	};

	return { form, onChange };
};

function CadastroEndereco() {
	const { form, onChange } = useForm({
		street: '',
		number: '',
		neighbourhood: '',
		city: '',
		state: '',
		complement: '',
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		onChange(value, name);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		CadastrarEndereco();
	};

	const CadastrarEndereco = () => {
		const body = {
			street: form.street,
			number: form.number,
			neighbourhood: form.neighbourhood,
			city: form.city,
			state: form.state,
			complement: form.complement,
		};

		axios
			.put(
				'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address',
				body,
				{
					headers: {
						auth: window.localStorage.getItem('token'),
					},
				}
			)
			.then((Response) => Response)
			.catch((error) => console.log(error));
	};

	return (
		<div>
			Cadastro endereco
			<form onSubmit={handleSubmit}>
				<input
					name={'street'}
					type={'text'}
					value={form.street}
					onChange={handleChange}
					placeholder={'Rua'}
					required
				/>
				<input
					name={'number'}
					type={'number'}
					value={form.number}
					onChange={handleChange}
					placeholder={'Numero'}
					required
				/>
				<input
					name={'neighbourhood'}
					type={'text'}
					value={form.neighbourhood}
					onChange={handleChange}
					placeholder={'Vizinhança'}
					required
				/>
				<input
					name={'city'}
					type={'text'}
					value={form.city}
					onChange={handleChange}
					placeholder={'Cidade'}
					required
				/>
				<input
					name={'state'}
					type={'text'}
					value={form.state}
					onChange={handleChange}
					placeholder={'Estado'}
					required
				/>
				<input
					name={'complement'}
					type={'text'}
					value={form.complement}
					onChange={handleChange}
					placeholder={'Complemento'}
				/>
				<button>Enviar</button>
			</form>
		</div>
	);
}
export default CadastroEndereco;
