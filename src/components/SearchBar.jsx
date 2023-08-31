import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  //   useEffect(() => {
  //     // Set the default search term to 'a' when the component is mounted
  //     setSearchTerm('a');
  //   }, [setSearchTerm]); // Make sure to include setSearchTerm as a dependency

  function changeHandler(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='flex justify-center items-center'>
      <div className=' flex flex-col flex-wrap justify-center items-center my-20 h-36 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[25rem] md:w-[35rem] max-sm:mx-3'>

        <form  >

          <label htmlFor="search" className='text-lg md:text-2xl text-green-800 tracking-widest'>
            Enter the name of the drink
          </label>

          <br />
          <input
            type="text"
            name="searchTerm"
            placeholder="Search Coctial"
            value={searchTerm}
            id="searchTerm"
            onChange={changeHandler}
            className='w-[15rem] md:w-[30rem] h-10 rounded-sm bg-slate-200 mt-4 px-5'
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
