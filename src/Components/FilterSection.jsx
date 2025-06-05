import React from 'react'
import { dataContext, useData } from '../Contexts/DataContext'

const FilterSection = () => {
  const { brandOnlyData, categoryOnlyData } = useData(dataContext)

  return (
    <div className='bg-gray-100  p-4 rounded-md h-max'>
      <input type="text" className='bg-white p-2 rounded-md border-gray-400 border-2' placeholder='Search...' />

      {/* category data  */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
          categoryOnlyData?.map((item, index) => {
            return <div key={index} className='flex gap-2'>
              <input className='cursor-pointer accent-purple-500' type="checkbox" id={`category-${index}`} />
              <label className='cursor-pointer uppercase' htmlFor={`category-${index}`}>{item}</label>
            </div>
          })
        }
      </div>
      {/* brand Data */}

      <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
      <div className='flex flex-col gap-2 mt-3'>
        <select name="" id="" className='bg-white p-2 w-full border-gray-200 border-2 roudned-md '>

          {
            brandOnlyData?.map((item, index) => {
              return <option key={index} value={item}>
                {item}
              </option>
            })
          }

        </select>
      </div>
      {/* Price range */}
      <h1 className='mt-5 font-semibold text-xl'>Price Range</h1>

      <div className='flex flex-col gap-2'>
        <label htmlFor="">Price Range: $0- $5000</label>
        <input type="range" className='accent-purple-500' />
      </div>
      <button className='bg-purple-600 rounded-md text-white px-3 py-1 mt-5 cursor-pointer'> Reset Filters</button>
    </div>
  )
}

export default FilterSection