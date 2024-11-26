// src/contexts/TrackingContext.js
import React, { createContext, useState } from 'react';

export const TrackingContext = createContext();

export const TrackingProvider = ({ children }) => {
    const [trackingData, setTrackingData] = useState([]);

    // Simulate API call to fetch tracking info
    const fetchTrackingData = (orderId) => {
        const dummyTracking = [
            { step: 1, status: 'Order Placed', date: '2024-11-18' },
            { step: 2, status: 'Order Confirmed', date: '2024-11-19' },
            { step: 3, status: 'Shipped', date: '2024-11-20' },
            { step: 4, status: 'Out for Delivery', date: '2024-11-21' },
            { step: 5, status: 'Delivered', date: '2024-11-22' },
        ];

        // Filter or fetch based on orderId (simulate for now)
        const filteredData = dummyTracking; // Replace with real API data
        setTrackingData(filteredData);
    };

    return (
        <TrackingContext.Provider value={{ trackingData, fetchTrackingData }}>
            {children}
        </TrackingContext.Provider>
    );
};
