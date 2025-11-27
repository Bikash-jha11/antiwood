import React from 'react'
import CircularLoader from './circularloader'
import { SiLinuxserver } from "react-icons/si";

function Metics() {
    return (
          <div className="metric-wrapper">
        <div className='h-[125px] w-[300px] rounded-3xl border-1 metric'>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-[rgb(9,56,26)]'>Making UI more faster.</p>
                <div className='w-[250px] h-[55px] border-1 bg-white rounded-3xl overflow-hidden text-black flex  items-center  inner_metric'>
                    <div className='flex gap-4 pl-4'>
                        <CircularLoader />
                        <p className='text-sm text-[#494949] inner_metric'>optimizing build.</p>
                        <SiLinuxserver style={{'color':'blue'}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Metics