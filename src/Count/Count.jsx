import React, { useState } from 'react'
const Count = () => {
    const [count, setCount] = useState(0)
    // let ClickHandler = (param) => {
    //     if (param == "dec") {
    //         setCount(count - 1)
    //     } else if (param == "inc") {
    //         setCount(count + 1)
    //     } else {
    //         setCount(0)
    //     }
        
    // }
    

    return (
        <div className='  flex items-center justify-center w-full bg-slate-900 h-screen'>
            <div className='flex text-center text-white items-center flex-col gap-10 m-4 sm:m-10   lg:w-2/4'>
                <h1 className='text-6xl'>Counter</h1>
                <div className='text-9xl font-semibold'>{count}</div>
                <div  className='bigin flex justify-center gap-6 mt-5'>
                    {/* <button onClick={() => ClickHandler("dec")} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>decrease</button>
                    <button onClick={() => ClickHandler("res")} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>reset</button>
                    <button onClick={() => ClickHandler("inc")} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>increase</button> */}
                    <button  onClick={() => setCount(count+1)} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>decrease</button>
                    <button onClick={() => setCount(0)} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>reset</button>
                    <button onClick={() => setCount(count-1)} className='text-sm uppercase tracking-widest border rounded px-4 py-1 hover:bg-white hover:text-slate-900 transition-all'>increase</button>
                </div>
            </div>
        </div>
    )
}

export default Count