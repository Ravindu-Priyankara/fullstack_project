import React, { useEffect, useState } from 'react';
import Dashboard from '../dashboard';
import CreativeLoadingAnimation from './CreativeLoadingAnimation'; // Adjust the path accordingly

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your async operation here
      // For demonstration purposes, we'll use setTimeout
      setTimeout(() => {
        setLoading(false); // Set loading to false after the operation is complete
      }, 2000);
    };

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs once on mount

  return (
    <div>
      {/* Your component content */}
      {loading ? <CreativeLoadingAnimation /> : <Dashboard />}
    </div>
  );
};

export default Index;
