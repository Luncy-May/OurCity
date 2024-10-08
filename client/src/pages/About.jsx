import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
import { BackgroundImage } from '../components';
const About = () => {
  return (
    <div>
      <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <div className='absolute w-full h-full z-10 brightness-50'>
          <BackgroundImage name="about" imagePath={"/locationSearch.jpg"} />
        </div>
        <div className="text-gray-300 z-50 text-[120px] font-inter overflow-hidden whitespace-nowrap">Our Missions</div>
        <div className='text-gray-300 overflow-hidden flex items-center justify-center font-inter '>
          <div className='z-20'>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Eco-Friendly Living: Provide users with actionable tips, resources, and recommendations to reduce carbon footprint, conserve natural resources, and promote sustainable practices in daily lives.
                  </div>
                </div>
            </div>

            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Community Building: Facilitate social connections and friendships among neighbors through interactive features, events, and activities that encourage collaboration, mutual support, and a sense of belonging.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Social Good: Inspire users to participate in volunteer opportunities, community service projects, and eco-friendly initiatives that benefit local communities and contribute to the greater good.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Personalized Recommendations: Offer tailored suggestions and activities based on users' interests, preferences, and location, ensuring a unique and engaging experience for each individual.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Education and Awareness: Raise awareness about environmental issues, promote eco-friendly practices, and provide educational resources to empower users to make informed choices about lifestyle and consumption habits.
                  </div>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <div className='p-5 text-2xl font-bold flex flex-col items-center justify-center break-words'>
                  <div className='mt-2'>
                  Incentives and Rewards: Recognize and reward users for eco-friendly actions, community contributions, and social good achievements, motivating them to continue making a positive impact.
                  </div>
                </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default About
