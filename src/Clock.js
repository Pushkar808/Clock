import React, { useEffect, useState } from 'react'

export default function Clock() {
    const [Time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000)

    }, [])
    return (
        <>
            <div className='relative'>
                <div className='absolute top-0 w-40 h-40 border-2 border-red-500 rounded-full animate-ping'>
                </div>
                <div className='flex items-center justify-center bg-slate-500 w-36 h-36 text-center rounded-full'>
                    {Time}
                </div>
            </div>
        </>
    )
}
