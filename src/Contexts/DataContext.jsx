import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const dataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [categoryOnlyData, setCategoryOnlyData] = useState(['All']);
    const [brandOnlyData, setBrandOnlyData] = useState(['All']);

    // Custom brand list
    const customBrands = [
        'Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour',
        'Apple', 'Samsung', 'Sony', 'LG', 'Microsoft',
        'Zara', 'H&M', 'Gucci', 'Louis Vuitton', 'Prada'
    ];

    const getUniqeCategory = (data, property) => {
        if (!data || !Array.isArray(data)) return ['All'];
        
        let newVal = data.map((curElem) => {
            return curElem[property]?.name || curElem[property];
        });
        
        newVal = ['All', ...new Set(newVal)];
        
        return newVal.filter(item => 
            item && 
            !item.includes('NewCategoryLam') && 
            item !== null && 
            item !== undefined
        );
    }

    useEffect(() => {
        if (data && data.length > 0) {
            setCategoryOnlyData(getUniqeCategory(data, 'category'));
            setBrandOnlyData(getUniqeCategory(data, 'brand'));
        }
    }, [data]);

    // *************fetching all products from api **************

    const fetchAllProducts = async () =>{
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=150')
            const productData = response.data.map(product => ({
                ...product,
                brand: customBrands[Math.floor(Math.random() * customBrands.length)]
            }))
            setData(productData)
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
        <dataContext.Provider value={{data, setData, fetchAllProducts,categoryOnlyData,brandOnlyData}}>
            {children}
        </dataContext.Provider>
  )
}

export const useData = () => useContext(dataContext)
