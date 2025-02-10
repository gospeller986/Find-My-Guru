import React from 'react'

export const Help = () => {
  return (
    <div className='flex flex-col w-full px-8 md:px-[20vh] gap-8'>
        <div className='flex w-full justify-start'>
            <h1 className='text-5xl font-bold'>Need some help ?</h1>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between gap-4' >
             <div className='bg-gray-400/30 p-4 w-full'>
                <h1>Request a feature</h1>
             </div>
             <div className='bg-gray-400/30 p-4 w-full'>
                <h1>Request a feature</h1>
             </div>
             <div className='bg-gray-400/30 p-4 w-full'>
                <h1>Request a feature</h1>
             </div>
        </div>

    </div>
  )
}
