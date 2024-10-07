import React from 'react'
import { Weather, Plan } from '../../components'
const EcoRecommendations = () => {
    //gives recommendations based on the user's location and weather
    // e.g. what furniture to buy if the user is based on (state) and (weather)
    // e.g. if (user's location) is often rainning, not recommended to buy wooden furniture
    // e.g. if it is often sunny, recommended trampoline for outdoor activities and sun-energy furniture
  return (
    <div>
      <div className='pt-5 space-y-5 flex flex-col items-center justify-center'>
      <div className='border border-gray-300 border-solid shadow-md hover:shadow-2xl p-5'>
        <Weather />
      </div>
      <div>
        <Plan />
      </div>
    </div>
    </div>
  )
}

export default EcoRecommendations
