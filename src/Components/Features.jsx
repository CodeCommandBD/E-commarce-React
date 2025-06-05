import React from 'react'
import { FaTruck, FaHeadset, FaMoneyBillWave, FaLock } from 'react-icons/fa'

const featureData = [
    {
        icon: <FaTruck />,
        title: 'Free Shipping',
        subtitle: 'On orders over $50',
    },
    {
        icon: <FaHeadset />,
        title: '24/7 Support',
        subtitle: 'We are here to help you',
    },
    {
        icon: <FaMoneyBillWave />,
        title: 'Money Back Guarantee',
        subtitle: '30 days return policy',
    },
    {
        icon: <FaLock />,
        title: 'Secure Payment',
        subtitle: '100% secure payment',
    }
]

const Features = () => {
  return (
    <div>
        <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8'>
            <div className='container '>
                <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 gap-x-8'>
                    {
                        featureData.map((feature,index)=>{
                            return(
                                <div className='flex flex-col items-center text-center' key={index}>
                                    <div className='text-4xl text-purple-500 mb-4'>{feature.icon}</div>
                                    <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                                    <p className='text-gray-600'>{feature.subtitle}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features