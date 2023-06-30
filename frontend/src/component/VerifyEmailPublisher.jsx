// VerifyEmailPublisher.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VerifyEmailPublisher = () => {
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`/api/publisher/verify-email/${token}`);
                console.log(response.data);

            } catch (error) {
                console.error('Error:', error.response.data);

            }
        };

        verifyEmail();
    }, [token]);

    return <div>Verifying email...</div>;
};

export default VerifyEmailPublisher;
