import React, { useState } from 'react'
import './index.css'
const Forex = () => {
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
        <div className='flex items-center gap-6 my-6'>
            <p className='text-[#848E9C] text-[14px] flex items-center gap-1'>0 Maker Fee <img src="../Vector (32).png" className='h-fit w-fit' alt="" /> 0 Fee</p>
            <div className='flex items-center gap-1'>
            <img src="../Vector (32).png" className='h-fit w-[16px]' alt="" />
            <span className='text-[#2B3139]'> |</span>
            <p className='bg-[#2B3139] px-2 text-[14px] text-[#EAECEF] rounded-lg'>USDT</p>
           <p className='text-[#848E9C] text-[14px]'>FDUSD</p> 
            </div>
            <p className='text-[#848E9C] text-[14px]'>USDC</p>
            <p className='text-[#848E9C] text-[14px]'>TUSD</p>
            <p className='text-[#848E9C] text-[14px]'>BNB</p>
 
            <div className='text-[#848E9C] text-[14px] flex items-center gap-4'>
                <p>ALTS</p>
                <img src="../home-down.svg.png" alt="" className='h-fit'/>
            </div>
            <div className='text-[#848E9C] text-[14px] flex items-center gap-4'>
                <p>FIAT</p>
                <img src="../home-down.svg.png" alt="" className='h-fit'/>
            </div>
        </div>
      
        <table className="w-full text-sm text-left">
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
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>ETH</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BNB</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>SOL</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>USDC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            <tr className=" ">
                <td className="py-4">
                    <div className='flex items-center gap-2 '>
                        <img src="../SVG (30).png" alt="" />
                        <p className='text-[#EAECEF]'>BTC</p>
                        <p className='text-[#EAECEF] text-[10px] '>/USDT</p>
                        <p className='bg-[#2B3139] px-1 text-[11px] text-[#EAECEF] rounded-md'>10x</p>
                    </div>
                </td>
              <td className="py-4 text-[#EAECEF]">66,188.94 / $66,188.94</td>
              <td className="py-4 text-[#0ECB81]">+5.46%</td>
              <td className="py-4 text-[#EAECEF]">66,666.00 / 62,242.42</td>
              <td className="py-4 text-[#EAECEF]">$2.93B</td>
              <td className="py-4">
                    <img src="../SVG (28).png" alt="" />
              </td>
            </tr>
            
          </tbody>
        </table>
        <nav
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
        </nav>
    </div>
  )
}

export default Forex