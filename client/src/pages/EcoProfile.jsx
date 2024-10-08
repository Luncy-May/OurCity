import React from 'react'
import { EcoEducation, EcoGoods, EcoBuilding, EcoLeaderboard, EcoLiving, EcoRecommendations } from './EcoPages.'
const EcoProfile = () => {
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <div className='space-y-10 p-3 overflow-hidden'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the OurCity Community</div>
                        </div>
                        <Routes>
                            <Route path="ecoEducation" element={<ProtectedRoute><EcoEducation /></ProtectedRoute>} />
                            <Route path="findFriends" element={<ProtectedRoute><FindFriends /></ProtectedRoute>} />
                            <Route path="findClubs" element={<ProtectedRoute><FindClubs /></ProtectedRoute>} />
                            <Route path="activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />
                            <Route path="feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                        </Routes>
                    </div>
                </div>
            ) : (<div>
                <div>
                    <div className=' p-3 overflow-hidden'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the OurCity Community</div>
                        </div>
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

export default EcoProfile
