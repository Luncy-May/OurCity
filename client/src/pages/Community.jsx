import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Activities, Feed, FindClubs, FindFriends, Gallery } from './CommunityPages'
import NotAuthorizedPage from './NotAuthorizedPage'
const Community = ({ Darkmode }) => {
    const username = localStorage.getItem("username");
    const userID = localStorage.getItem("userID");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const [isLoading,setIsLoading] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState((userID !== null && userID !== undefined && userID !== ""));
    return (
        <div>
            {isLoggedIn ? (
        <div>
            <div className='space-y-10 p-3 overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the OurCity Community</div>
                </div>
                {/* Sub-routes for Community */}
                <Routes>
                    <Route path="gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
                    <Route path="findFriends" element={<ProtectedRoute><FindFriends /></ProtectedRoute>} />
                    <Route path="findClubs" element={<ProtectedRoute><FindClubs /></ProtectedRoute>} />
                    <Route path="activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />
                    <Route path="feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                </Routes>
            </div>
        </div>
    ): (<div>
        <div>
            <div className=' p-3 overflow-hidden'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the OurCity Community</div>
                </div>
                {/* Sub-routes for Community */}
                <Routes>
                    <Route path="gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
                    <Route path="findFriends" element={<ProtectedRoute><FindFriends /></ProtectedRoute>} />
                    <Route path="findClubs" element={<ProtectedRoute><FindClubs /></ProtectedRoute>} />
                    <Route path="activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />
                    <Route path="feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                </Routes>
            </div>
            <NotAuthorizedPage />
        </div>
</div>)}
</div>
)

}

export default Community
