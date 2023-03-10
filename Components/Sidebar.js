import React from 'react';
import { BuildingLibraryIcon, CreditCardIcon, HeartIcon, HomeIcon, PlusCircleIcon, SearchIcon } from '@heroicons/react/24/solid'
const Sidebar = () => {
    return (
        <>
               <div className='p-4'>

            <div className='space-y-1 text-sm text-gray-400 '>
                <div >

                    <button className='flex items-center justify-start space-x-3 hover:text-gray-400' >
                        <HomeIcon className="w-5 h-5" />
                        <h3>Home</h3>

                    </button>
                </div>
                <div >
                    <button className='flex justify-start space-x-3 hover:text-gray-400 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <h3>Search</h3>
                    </button>
                </div>
                <div >
                    <button className='flex justify-start space-x-3 hover:text-gray-400' >
                        <BuildingLibraryIcon className="w-5 h-5" />
                        <h3> Your library</h3>
                    </button>
                </div>

            <hr  className='bg-gray-400  space-y-4'/>
            </div>
            <div className="text-sm space-y-2 text-gray-400" >

                 <div  >
                    <button className='flex justify-start space-x-3 hover:text-gray-400 '>
                       <PlusCircleIcon className="w-5 h-5"/> 
                        <h1>Create Playlist</h1>
                    </button>
                 </div>
                 <div>
                    <button className='flex justify-start space-x-3 hover:text-gray-400 ' >
                        <HeartIcon className="w-5 h-5" />
                        <h3>Like Songs</h3>
                    </button>
                 </div>
            </div>
               </div>
        </>


    );
}

export default Sidebar;
