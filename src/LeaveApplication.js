// src/components/LeaveApplication.js
import React, { useState } from 'react';
import axios from 'axios';

const LeaveApplication = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        reason: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/leaves', formData);
        alert('Leave application submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" name="dateFrom" onChange={handleChange} required />
            <input type="date" name="dateTo" onChange={handleChange} required />
            <textarea name="reason" onChange={handleChange} required />
            <button type="submit">Apply Leave</button>
        </form>
    );
};

export default LeaveApplication;
