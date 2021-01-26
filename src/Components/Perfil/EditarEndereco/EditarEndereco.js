import axios from 'axios'
import React, { useState } from 'react'

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange = (value, name) => {
        setForm({ ...form, [name]: value })
    }

    return { form, onChange }
}

function EditarEndereco () {
    return <div>
        Não precisa 
    </div>
}

export default EditarEndereco