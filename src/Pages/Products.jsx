import React, { useEffect } from 'react'
import { useData } from '../Contexts/DataContext'

import FilterSection from '../Components/FilterSection'
import ProductCard from '../Components/ProductCard'

const Products = () => {
  const { data, fetchAllProducts } = useData()

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div>
      <div className='my-10'>
        {
          data?.length > 0 ? (
            <div className='container flex gap-8'>
              <FilterSection></FilterSection>
              <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>

                {
                  data?.map((product, index) => {
                    return (
                      <ProductCard key={index} product={product}></ProductCard>
                    )
                  })
                }
              </div>
            </div>
          )
          :
          (<div className='flex flex-col items-center justify-center h-screen'>
            <div align="center" className="fond">
              <div className="contener_general">
                <div className="contener_mixte">
                  <div className="ballcolor ball_1">&nbsp;</div>
                </div>
                <div className="contener_mixte">
                  <div className="ballcolor ball_2">&nbsp;</div>
                </div>
                <div className="contener_mixte">
                  <div className="ballcolor ball_3">&nbsp;</div>
                </div>
                <div className="contener_mixte">
                  <div className="ballcolor ball_4">&nbsp;</div>
                </div>
              </div>
            </div>

          </div>)
        }
      </div>
    </div>
  )
}

export default Products