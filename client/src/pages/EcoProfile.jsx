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
                        {/* Sub-routes for Community */}
                        <Routes>
                            <Route path="gallery" element={<Gallery />} />
                            <Route path="findFriends" element={<FindFriends />} />
                            <Route path="findClubs" element={<FindClubs />} />
                            <Route path="activities" element={<Activities />} />
                            <Route path="feed" element={<Feed />} />
                        </Routes>
                    </div>
                </div>
            ) : (<div>
                <div>
                    <div className=' p-3 overflow-hidden'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='pt-5 space-y-5 text-4xl font-bold'>Welcome to the OurCity Community</div>
                        </div>
                        {/* Sub-routes for Community */}
                        <Routes>
                            <Route path="gallery" element={<Gallery />} />
                            <Route path="findFriends" element={<FindFriends />} />
                            <Route path="findClubs" element={<FindClubs />} />
                            <Route path="activities" element={<Activities />} />
                            <Route path="feed" element={<Feed />} />
                        </Routes>
                    </div>
                    <NotAuthorizedPage />
                </div>
            </div>)}
        </div>
    )
}

export default EcoProfile
