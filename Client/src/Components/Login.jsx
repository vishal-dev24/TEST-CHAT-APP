import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://test-chat-app-1.onrender.com/login', formData, { withCredentials: true });
            console.log("Login Success:", res.data);
            setFormData({ email: '', password: '' });
            navigate('/profile');
        } catch (error) {
            console.error("Login Error:", error.response ? error.response.data : error.message);
            alert(error.response?.data?.message || "Login failed! Please check your credentials.");
        }
    };

    return (
        <div className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
            <h1 className='font-bold  text-3xl mb-5 text-slate-800'>WelCome To ChatSphare</h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-3/4   max-w-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {[{ type: "email", name: "email", placeholder: "Enter email" }, { type: "password", name: "password", placeholder: "Enter password" }].map((input, index) => (
                        <input key={index} {...input} value={formData[input.name]} onChange={handleChange} required className="w-full p-3 border border-sky-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200" />
                    ))}
                    <button type="submit" className="w-full text-xl bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-200 transition">Login</button>
                    <p onClick={() => navigate('/')} className='text-center text-violet-600 cursor-pointer text-lg hover:text-blue-900 mt-3'>Don't have an account ? Register</p>

                </form>
            </div>
        </div>
    )
}
export default Login