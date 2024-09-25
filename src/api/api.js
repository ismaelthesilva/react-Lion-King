// src/api/api.js
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://your-api-url' : 'http://localhost:5001';

export const subscribeEmail = async (email) => {
    try {
        const response = await fetch(`${apiUrl}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error during fetch:', error);
        throw error; // re-throw error for handling in the component
    }
};
