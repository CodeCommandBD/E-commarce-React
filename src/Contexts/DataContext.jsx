import axios from "axios";
import { createContext, useState } from "react";

export const dataContext = createContext(null);



export const DataProvider = ({children}) => {

    const [data, setData] = useState()

    // *************fetching all products from api **************

    const fetchAllProducts = async () =>{
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            console.log(response);
            const productData = response.data.products
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

