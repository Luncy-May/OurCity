import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import NotAuthorizedPage from './NotAuthorizedPage';

const Dashboard = () => {
  const { userID } = useParams();  // Extract userID from the URL
  const storedUserID = localStorage.getItem('userID');
  const username = localStorage.getItem('username');
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(userID === storedUserID);

  useEffect(() => {
    if (!isAuthorized) {
      return; // If not authorized, don't proceed with fetch
    }

    const getDashboard = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8080/GetUserDashboard/${userID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            userID: userID,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch dashboard data.');
        }

        const data = await response.json();
        console.log(data);  // Handle the response data

      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getDashboard();
  }, [isAuthorized, userID, username]);

  if (!isAuthorized) {
    return <Navigate to="/not-authorized" />;
  }

  return (
    <div>
      {isAuthorized ? (
        <div className='pl-[10vw] space-y-10 p-3 mt-[5vh] overflow-hidden'>
          <div className='pt-5 space-y-5 text-4xl font-bold'>{username}'s Dashboard</div>
          <div className='flex justify-between items-center max-w-[1400px]'>
            <div className='flex-shrink-0'></div>
            <div className='flex-shrink-0'></div>
            <div className='flex-shrink-0'></div>
          </div>
        </div>
      ) : (
        <NotAuthorizedPage />
      )}
    </div>
  );
};

export default Dashboard;
