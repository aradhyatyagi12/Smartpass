import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchLeaves = () => {
    const [leaves, setLeaves] = useState([]);

    const fetchLeaves = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/leaves');
            setLeaves(response.data);
        } catch (error) {
            console.error('Error fetching leaves:', error);
        }
    };

    useEffect(() => {
        fetchLeaves(); // Call the function when the component mounts
    }, []);

    return (
        <div>
            <h2>Leave Applications</h2>
            <ul>
                {leaves.map((leave) => (
                    <li key={leave.id}>
                        From: {leave.dateFrom} To: {leave.dateTo} Reason: {leave.reason}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchLeaves;
