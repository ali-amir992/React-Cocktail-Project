import React from 'react'

import { useNavigate } from 'react-router-dom'
const SingleCocktail = (props) => {

    const item = props.item;
    const navigation = useNavigate();
    function handleClick() {
        navigation(`/cocktail/${item.id}`);
    }

    return (
        <div className='h-max w-[22.8rem] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md transition-all duration-300 ease-in 
        hover:scale-105 
        hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]
        '>
            <div>
                <img className='rounded-md' src={item.image} alt="" />
            </div>

            <div className='flex flex-col my-3 mb-4 ml-4'>
                <h1 className='text-3xl mt-3 font-bold'>{item.name}</h1>
                <h3 className='text-xl font-semibold  '>{item.glass}</h3>
                <h3 className='text-base font-light text-gray-400'>{item.info}</h3>

                <div >
                    <button className='bg-[#476a2e] rounded-md mt-1 px-5 py-1 text-white font-light tracking-widest transition-all ease-in duration-300
                hover:bg-[#d4e6a5] hover:text-[#476a2e] hover:font-extralight'
                        onClick={handleClick}>Details</button>
                </div>
            </div>


        </div>
    )
}

export default SingleCocktail