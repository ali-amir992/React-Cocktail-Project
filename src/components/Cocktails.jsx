import React, { useContext } from 'react'
import { AppContext } from '../Context'
import SingleCocktail from './SingleCocktail';
import Loading from './Loading';

const Cocktails = () => {
    const { data, loading } = useContext(AppContext);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            {data ?
                (
                    <div className='flex justify-center items-center mb-16'>
                        <div className='flex justify-center items-end flex-wrap gap-x-16 gap-y-16 max-w-[1300px] mx-0 my-auto'>
                            {data.map((item) => (
                                <SingleCocktail key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                ) :
                (
                    <h1 className='text-4xl font-bold text-center'>No drinks found</h1>
                )}
        </div>
    )
}

export default Cocktails
