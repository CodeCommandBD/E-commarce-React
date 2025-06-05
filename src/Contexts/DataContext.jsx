import axios from "axios";
import { createContext, useContext, useState } from "react";

export const dataContext = createContext(null);



export const DataProvider = ({children}) => {

    const [data, setData] = useState()

    // *************fetching all products from api **************

    const fetchAllProducts = async () =>{
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=150')
            const productData = response.data
            setData(productData)
            
            
        } catch (error) {
            console.log(error);
            
        }
    }


  return (
        <dataContext.Provider value={{data, setData, fetchAllProducts}}>
            {children}
        </dataContext.Provider>
  )
}

export const useData = () => useContext(dataContext)
