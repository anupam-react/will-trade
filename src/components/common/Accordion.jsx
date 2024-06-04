// Accordion.js

import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-2 w-[600px] ">
      {items.map((item, index) => (
        <div className='mb-4' key={index}>

        <div
          
          className='flex gap-[100px] justify-between'
        >
            <p className='text-white text-[19px] font-bold w-[400px]'>
            {item.title}
            </p>
          <div
            className=" text-left font-semibold cursor-pointer"
            onClick={() => handleItemClick(index)}
          >
          <img src="../SVG (16).png" alt="" className='h-[20px] w-[20px]'/>
          </div>
        </div>
        <hr className='my-2'/>
      {index === activeIndex && <p className="text-gray-600">{item.content}</p>}
      </div>
      ))}
    </div>
  );
};

export default Accordion;
