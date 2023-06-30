// RegisterPublisherForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegisterPublisherForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/publisher/register', {
                firstName,
                lastName,
                organizationName,
                email,
                password,
            });
            console.log(response.data);

        } catch (error) {
            console.error('Error:', error.response.data);

        }
    };

    return (
        <form onSubmit={handleSubmit}>

        </form>
    );
};

export default RegisterPublisherForm;
