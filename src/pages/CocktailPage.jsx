import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../Context';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const CocktailPage = () => {

  const navigation = useNavigate();
  const { singleCocktail, setSingleCocktail, loading, setLoading } = useContext(AppContext)

  const { id } = useParams();
  console.log(id);

  const urlById = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const fetchSingleData = async () => {

    setLoading(true);

    try {

      const res = await fetch(urlById);
      const data = await res.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setSingleCocktail(newCocktail)
      } else {
        setSingleCocktail(null)
      }
    }
    catch (error) {
      console.log("Error in single cocktial data")
      console.log(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSingleData();
  }, [id]);


  if (loading) {
    return <Loading/>;
  }

  if (!singleCocktail) {
    return (
      <div>No cocktial to display</div>
    )
  }

  const {
    name,
    image,
    category,
    info,
    glass,
    instructions,
    ingredients,
  } = singleCocktail;
  return (
    <div>

      <Navbar />

      <div className='flex flex-col justify-center items-center my-16  '>

        <button
          className='bg-[#476a2e] rounded-md mt-1 px-5 py-2 text-white font-light tracking-widest transition-all ease-in duration-300
        hover:bg-[#d4e6a5] hover:text-[#476a2e] hover:font-extralight'
          onClick={() => navigation('/')}>Back Home</button>

          <h1 className='text-3xl font-bold mt-3'>{name}</h1>
      </div>

      <div className='flex justify-center items-center gap-x-9 mb-16'>

        <div className='h-[27rem] w-[27rem]'>
          <img className='rounded-md' src={image} alt="" />
        </div>

        <div>

          <div className='w-[645px] h-max flex flex-col gap-y-6'>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Name :</span> <span className='font-bold text-lg ml-2'>{name}</span>
            </p>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Category :</span> <span className='font-bold text-lg ml-2'>{category}</span>
            </p>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Info :</span> <span className='font-bold text-lg ml-2'>{info}</span>
            </p>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Glass :</span> <span className='font-bold text-lg ml-2'>{glass}</span>
            </p>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Instructions :</span> <span className='font-bold text-lg ml-2'>{instructions}</span>
            </p>
            <p>
              <span className='bg-[#d4e6a5] text-[#476a2e] font-bold text-base p-1 rounded-sm '>Ingredients :</span>
              {
                ingredients.map((item, index) => {
                  return item ? <span className='font-bold text-lg ml-2' key={index}> {item}</span> : null
                })
              }
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CocktailPage