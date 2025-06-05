
import { dataContext, useData } from '../Contexts/DataContext'

const Category = () => {
    const {categoryOnlyData} = useData(dataContext)

  return (
    <div className='bg-[#101829] py-7 '>
      <div className='container flex gap-4 items-center justify-between py-7'>
        {
          categoryOnlyData.map((item, index)=>{
            return <div key={index}>
              <button className='cursor-pointer px-6 py-2 bg-purple-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 text-sm font-medium'>
                {item}
              </button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category