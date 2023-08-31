import { createContext, useState } from "react";
import { useEffect } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('a');
    const [data, setData] = useState(null);
    const [singleCocktail , setSingleCocktail] = useState(null);

    const fetchData = async () => {

        setLoading(true)
        try {
            const res = await fetch(`${url}${searchTerm}`);
            const output = await res.json();

            const { drinks } = output;

            if (drinks) {
                const newDrinks = drinks.map((item) => {
                    const { idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass, } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setData(newDrinks);
             
                
            }
            else {
                setData(null);
            }

        } catch (error) {
            console.log("Error in fetching data");
            console.log(error);
        }
        setLoading(false);
    }

    //just to log the data 
    useEffect(() => {
        console.log("here is the data", data);
    }, [data]);

    useEffect(() => {
        fetchData();
    }, [searchTerm]);





    const value = {
        loading,
        setLoading,
        fetchData,
        searchTerm,
        setSearchTerm,
        data,
        setData,
        singleCocktail,
        setSingleCocktail
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}