import React, { useState } from 'react'
import './index.css'
const Indices = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

      // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
//   let currentItems = transaction?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
        <div className='flex items-center gap-6'>
                <p className='bg-[#2B3139] px-2 text-[14px] text-[#EAECEF] rounded-lg'>All</p>
            <p className='text-[#848E9C] text-[8px]'>Solana</p>
            <p className='font-normal ml-2 px-1 pb-[2px] rounded-sm bg-[#2B3139] text-[12px] text-[#F0B90B]'>New</p>
            <p className='text-[#848E9C] text-[8px]'>RWA</p>
            <p className='font-normal ml-2 px-1 pb-[2px] rounded-sm bg-[#2B3139] text-[12px] text-[#F0B90B]'>New</p>
            <p className='text-[#848E9C] text-[14px]'>Meme</p>
            <p className='text-[#848E9C] text-[14px]'>Payments</p>
            <p className='text-[#848E9C] text-[14px]'>AI</p>
            <p className='text-[#848E9C] text-[14px]'>Layer 1 / Layer 2</p>
            <p className='text-[#848E9C] text-[14px]'>Metaverse</p>
            <div className='text-[#848E9C] text-[14px] flex items-center gap-1'>
                <p>Others</p>
                <img src="../home-down.svg.png" alt="" className='h-fit'/>
            </div>
        </div>
      
        <table className="w-full text-sm text-left my-6">
          <thead
            className=""
          >
            <tr className='text-[#848E9C] text-[12px] '>
              <th scope="col" >
                <div className="flex">
              Name 
              <img src="../sort-small-f.svg fill.png" alt="" />

                </div>
              </th>
              <th scope="col">
              <div className="flex">
              Price 
              <img src="../sort-small-f.svg fill.png" alt="" />
                </div>
              </th>
              <th scope="col" className="">
                <div  className="flex gap-2">
                    <div className='border border-[#474D57] flex items-center gap-1 rounded-[4px] px-1'>
                        <p>24h</p>
                        <img src="../home-down.svg.png" alt="" className='h-fit'/>
                    </div>
                    <div className="flex">
                    Change 
              <img src="../sort-small-f.svg fill.png" alt="" />
                </div>
                </div>
              </th>
              <th scope="col" className="">
              <div className="flex">
              24h Volume
              <img src="../sort-small-f.svg fill.png" alt="" />
                </div>
              </th>
              <th scope="col" className="">
              <div className="flex">
              Market Cap
              <img src="../sort-down-f.svg.png" alt="" />
                </div>
              </th>
              <th scope="col">
              Actions
              </th>
             
            </tr>
          </thead>
          <tbody>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../87496d50-2408-43e1-ad4c-78b47b448a6a.png (1).png" alt="" />
                        <p className='text-[#EAECEF]'>US 100</p>
                        <p className='text-[#848E9C] text-[14px] '>US Dollar</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$66,249.28</td>
              <td className="py-4 text-[#0ECB81]">+6.70%</td>
              <td className="py-4 text-[#EAECEF]">$42.65B</td>
              <td className="py-4 text-[#EAECEF]">$1,305.04B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png (2).png" alt="" />
                        <p className='text-[#EAECEF]'>USOIL</p>
                        <p className='text-[#848E9C] text-[14px] '>US Oil</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$3,014.34</td>
              <td className="py-4 text-[#0ECB81]">+3.68%</td>
              <td className="py-4 text-[#EAECEF]">$15.52B</td>
              <td className="py-4 text-[#EAECEF]">$362.07B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../6180cdb6-8480-4a3c-a8a9-8a193a89fc5e.png.png" alt="" />
                        <p className='text-[#EAECEF]'>DAX40</p>
                        <p className='text-[#848E9C] text-[14px] '>German Dax Index</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$1.00</td>
              <td className="py-4 text-[#F6465D]">-1.42%</td>
              <td className="py-4 text-[#EAECEF]">$76.67B</td>
              <td className="py-4 text-[#EAECEF]">$110.95B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png" alt="" />
                        <p className='text-[#EAECEF]'>HK50</p>
                        <p className='text-[#848E9C] text-[14px] '>Hong Kong Stock Market Index</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$3,014.34</td>
              <td className="py-4 text-[#0ECB81]">+3.68%</td>
              <td className="py-4 text-[#EAECEF]">$15.52B</td>
              <td className="py-4 text-[#EAECEF]">$362.07B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../b2f0c70f-4fb2-4472-9fe7-480ad1592421.png.png" alt="" />
                        <p className='text-[#EAECEF]'>US50</p>
                        <p className='text-[#848E9C] text-[14px] '>US Dollar</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$3,014.34</td>
              <td className="py-4 text-[#0ECB81]">+3.68%</td>
              <td className="py-4 text-[#EAECEF]">$15.52B</td>
              <td className="py-4 text-[#EAECEF]">$362.07B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-1 '>
                        <img src="../753f4bd7-5f2a-48c7-93e0-35b9d23aa29e.png.png" alt="" className='w-[24px]' />
                        <p className='text-[#EAECEF]'>USDC</p>
                        <p className='text-[#848E9C] text-[14px] '>USD Coin</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">$3,014.34</td>
              <td className="py-4 text-[#0ECB81]">+3.68%</td>
              <td className="py-4 text-[#EAECEF]">$15.52B</td>
              <td className="py-4 text-[#EAECEF]">$362.07B</td>
              <td className="py-4">
                <div className='flex gap-4'>
                    <img src="../Link → SVG.png" alt="" />
                    <img src="../SVG (28).png" alt="" />
                </div>
              </td>
            </tr>
         
          </tbody>
        </table>
        {/* <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between px-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing
            <span className="font-semibold text-white dark:text-white px-1">
            {currentPage}
            </span>
            of
            <span className="font-semibold text-white dark:text-white pl-1">
             10
            </span>
          </span>

             <div className="pagination">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="pagination__selected"
                >
                  <img src="../Vector (1).svg" alt="" />
                </button>
                <button
                  onClick={nextPage}
                //   disabled={lastIndex >= transaction?.length}
                  className="pagination__selected" 
                >
                  <img src="../Vector.svg" alt="" />
                </button>
              </div>
        </nav> */}
    </div>
  )
}

export default Indices