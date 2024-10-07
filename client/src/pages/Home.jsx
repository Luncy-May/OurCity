import React, { useRef } from 'react'
import { BackgroundImage, Navbar } from '../components';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
gsap.registerPlugin(useGSAP);

const Home = () => {
    const container = useRef();
    useGSAP(
        () => {
            // gsap code here...
            gsap.to('.box', { rotation: 180 }); // <-- automatically reverted
        },
        { scope: container }
    ); // <-- scope for selector text (optional)

    return (
        <div className="relative w-full h-screen overflow-hidden z-20">
            <div className='absolute w-full h-full'>
                <BackgroundImage name="home" imagePath={"/sunnyLakeSky.jpg"} />
            </div>
            <div>
                <div ref={container} className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
                    <div className="text-white text-[140px] font-inter pt-[5vh] overflow-hidden whitespace-nowrap">Welcome to EcoTravel</div>
                    <div className='text-white overflow-hidden space-x-5 flex items-center justify-center font-inter '>
                        <div>
                            <div className='flex-shrink-0'>
                                <Link to="/login">
                                    <div className='p-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                                        <div className='mb-2'>
                                            <FaSignInAlt size={50} />
                                        </div>
                                        <div className='mt-2'>
                                            Already have an account? Login here!
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className='flex-shrink-0'>
                                <Link to="/register">
                                    <div className='p-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                                        <div className='mb-2'>
                                            <FaUserPlus size={50} />
                                        </div>
                                        <div className='mt-2'>
                                            Register an account. It is free!
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-shrink-0'>
                            <Link to="/community">
                                <div className='pl-5 pr-5 text-2xl font-bold shadow-md hover:shadow-2xl min-h-[300px] min-w-[300px] flex flex-col items-center justify-center break-words'>
                                    <div className='mb-2'>
                                        <FaSearch size={50} />
                                    </div>
                                    <div className='mt-2'>
                                        Check out what other amazing people are doing with EcoTravel here!
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
