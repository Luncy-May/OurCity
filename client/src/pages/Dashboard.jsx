import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import NotAuthorizedPage from './NotAuthorizedPage';
import { ImageSwapper } from '../components';
const Dashboard = () => {
    const { userID } = useParams();  // Extract userID from the URL
    const storedUserID = localStorage.getItem('userID');
    const username = localStorage.getItem('username');
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(userID === storedUserID);
    const images = [
        '/statePictures/Alabama.webp',
        '/statePictures/Alaska.webp',
        '/statePictures/Arizona.webp',
        '/statePictures/Arkansas.webp',
        '/statePictures/California.webp',
        '/statePictures/Colorado.webp',
        '/statePictures/Connecticut.webp',
        '/statePictures/Delaware.webp',
        '/statePictures/Florida.webp',
        '/statePictures/Georgia.webp',
        '/statePictures/Hawaii.webp',
        '/statePictures/Idaho.webp',
        '/statePictures/Illinois.webp',
        '/statePictures/Indiana.webp',
        '/statePictures/Iowa.webp',
        '/statePictures/Kansas.webp',
        '/statePictures/Kentucky.webp',
        '/statePictures/Louisiana.webp',
        '/statePictures/Maine.webp',
        '/statePictures/Maryland.webp',
        '/statePictures/Massachusetts.webp',
        '/statePictures/Michigan.webp',
        '/statePictures/Minnesota.webp',
        '/statePictures/Mississippi.webp',
        '/statePictures/Missouri.webp',
        '/statePictures/Montana.webp',
        '/statePictures/Nebraska.webp',
        '/statePictures/Nevada.webp',
        '/statePictures/NewHampshire.webp',
        '/statePictures/NewJersey.webp',
        '/statePictures/NewMexico.webp',
        '/statePictures/NewYork.webp',
        '/statePictures/NorthCarolina.webp',
        '/statePictures/NorthDakota.webp',
        '/statePictures/Ohio.webp',
        '/statePictures/Oklahoma.webp',
        '/statePictures/Oregon.webp',
        '/statePictures/Pennsylvania.webp',
        '/statePictures/RhodeIsland.webp',
        '/statePictures/SouthCarolina.webp',
        '/statePictures/SouthDakota.webp',
        '/statePictures/Tennessee.webp',
        '/statePictures/Texas.webp',
        '/statePictures/Utah.webp',
        '/statePictures/Vermont.webp',
        '/statePictures/Virginia.webp',
        '/statePictures/Washington.webp',
        '/statePictures/WestVirginia.webp',
        '/statePictures/Wisconsin.webp',
        '/statePictures/Wyoming.webp'
    ];
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


    return (
        <div>
            {isAuthorized ? (

                <div className='pl-[10vw] space-y-10 p-3 mt-[5vh] overflow-hidden'>
                    <div className='pt-5 space-y-5 text-4xl font-bold'>{username}'s Dashboard</div>
                    <div>
                        {/* Pass the images array to the ImageSwapper component */}
                        <ImageSwapper images={images} />
                    </div>
                    <div className='flex justify-between items-center max-w-[1400px]'>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-shrink-0'></div>
                        <div className='flex-shrink-0'></div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Pass the images array to the ImageSwapper component */}
                    <div className='pl-10 pr-10'>
                        <NotAuthorizedPage /><div className='pt-5 space-y-5 text-xl font-bold'> Or you can try our living recommendation engine firsthead below! </div>
                        <div className='w-[600px] h-[500px]'>
                            <ImageSwapper images={images} />
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Dashboard;
