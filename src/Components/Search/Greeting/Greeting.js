
import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour < 12) {
        return 'Good Morning 🌅';
      } else if (hour < 18) {
        return 'Good Afternoon 🌞 ';
      } else if (hour < 22) {
        return 'Good Evening🌇';
      } else {
        return 'Good Night🌃';
      }
    };

    setGreeting(getGreeting());

    // Optionally, set an interval to update the greeting every hour
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 3600000); // 1 hour in milliseconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <h1>{greeting}</h1>;
};

export default Greeting;
