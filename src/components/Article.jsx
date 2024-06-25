import React from 'react';
import BgImage from '../assets/imgs/tmsph-ls-midafood.jpeg'
import { BiSolidUpArrow } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
const Article = ({bg, dateCreated, authorName, title, body}) => {

    // Parse the date string into a Date object
    const date = new Date(dateCreated);

    // Define an array of month names
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const month = monthNames[date.getMonth()];
    const day = date.getDate();

  return (
    <div className='relative p-5 h-fit md:h-screen w-full min-w-[350px]'>
        <img className='aspect-video h-[50%] object-center w-full object-cover' alt='Mida Food Background Image' src={require(`../assets/imgs/${bg}`)}></img>
        <div className='relative -mt-16 left-[10%] md:left[5%] flex flex-col justify-center items-center w-[5vw] h-[5vw] bg-red-600 text-white -skew-x-12 p-10'>
          <h2 className='sm:text-[2rem] md:text-3xl font-bold'>{day}</h2>
          <h3>{month.substring(0, 3).toUpperCase()}</h3>
          <BiSolidUpArrow className='bottom-0 right-0 text-base -skew-x-[40deg] absolute '/>
        </div>

        {/* Share Button  */}
        <div className='w-full flex justify-end'>
          <button className='relative flex gap-x-2 justify-center items-center btnShare'>
          <PiShareFat></PiShareFat>
          SHARE
          </button>
        </div>

        {/* Line  */}
        <div className='w-full h-[1px] bg-black bg-opacity-20'></div>

        {/* Contents  */}
        <div className='space-y-5 mt-2'>
          {/* Author Here */}
          <h3 className='text-red-500 text-2xl font-bold'>{authorName}</h3>
          {/* Title  */}
          <h1 className='text-2xl md:text-5xl md:leading-[3.5rem] font-bold'>{title}</h1>
          {/* Body / Content  */}
          <p>{body}</p>
          <button className='border-b-4 border-black'>READ ARTICLE</button>
        </div>
        
      </div>
  )
}

export default Article