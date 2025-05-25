"use client";
import React from 'react'
import data from '../data/cards.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';


interface NewSome {
      id: number;
  title: string;
  img: string;
  description: string;
  capital: string;
  language: string;
  currency: string;
  population: number;
  continent: string;
  isFeatured: boolean;
}

const Cards = () => {
    const featured = data.countries.filter((choose:NewSome)=> choose.isFeatured)
  return (
    <div className='py-12 bg-black'>
        {/* // for the title  */}
        <div> <div className="text-center font-extrabold text-teal-800"> EXPLORE </div></div>
        <div className='mt-10'> 
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featured.map((choose:NewSome) => ( 
                    <div key={choose.id} className="flex justify-center"> 
                 <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"> 
                    <div className="space-y-4"> 
                        <img 
                            src={choose.img} 
                            alt={choose.title}
                            className="object-cover w-full h-48 rounded-lg"
                        />
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-black dark:text-white">{choose.title}</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Capital: <span className="font-medium">{choose.capital}</span>
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                                {choose.description}
                            </p>
                        </div>
                        <Link 
                            href={`/countries/${choose.title}`}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                        > 
                            Learn more 
                        </Link>
                    </div>
                </BackgroundGradient>
                 
                 </div>
                ))}

            </div>
        </div>

        {/* button for exploring more  */}
         <div className='text-center mt-12'> 
            <Link 
                href={"/courses"}
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            > 
                View All Countries
            </Link> 
        </div>
    </div>
  )
}

export default Cards
