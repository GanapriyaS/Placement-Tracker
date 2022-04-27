import React from 'react'

const viewJobDetails = () => {
  return (
    <div className="w-full h-full p-5 lg:px-20 mt-8 lg:mt-10   overflow-y-auto ">
    
<div class="flex justify-between ">
  <div class="">
    <a href="#" class="flex items-center text-3xl lg:text-5xl font-bold">
      <span class="text-black ">Job role</span>
    </a>
  </div>
  {/* <div class="">
    <button class="py-3 px-4 w-full bg-black hover:bg-black-600 text-white font-bold rounded transition duration-200">Apply</button>
  </div> */}
  
</div>
<br></br>

<p class="font-bold text-2xl px-2 pb-2">Description</p>
<p class="px-2">job Description  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur sapiente atque, veniam accusantium dignissimos placeat ipsam officia, dicta ut soluta, alias aliquam sint molestias facilis recusandae consequuntur tempore excepturi!</p>

<br></br><br></br>

<p class="text-2xl font-bold pb-3">Job Requirements</p>
<div class="p-5 lg:p-10 bg-white text-black  rounded">
<p class="font-bold text-xl lg:text-2xl px-2">Sam Dow</p>
<p class="px-2">South Apt, East block, west city North 18090</p>
<br></br>
<ul className='list-disc px-3'>
    <li className='pb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium dicta provident saepe veniam aspernatur fuga itaque aliquam vitae nostrum numquam iste fugiat esse quidem, impedit quia laborum maxime ratione.</li>
    <li className='pb-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quod inventore distinctio! Expedita necessitatibus facilis illo saepe asperiores magni cum, laudantium quod consectetur iusto sapiente quis voluptatem maiores laborum fuga.</li>
    <li className='pb-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim maxime, officia harum porro repellendus reiciendis incidunt perferendis recusandae deleniti temporibus expedita quam optio quasi sapiente illum, iusto, laborum necessitatibus sint!</li>
</ul>
</div>
<br></br><br></br>

<p class="text-2xl font-bold pb-2 text-center">Notes</p>
<div className='grid justify-center '>
                <table class="overflow-auto  flex divide-x divide-gray-300 rounded-lg">
                    
                    <tbody class="bg-white divide-y divide-gray-300 font-bold">
                        <tr class="whitespace-nowrap">
                            <td class="px-6 lg:px-10 py-4  text-gray-500 border-x">
                                Domain
                            </td>
                            <td class="px-6 lg:px-10 py-4 border-x">
                                <div class=" text-gray-900">
                                    Jon doe
                                </div>
                            </td>
                           
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 lg:px-10 py-4 text-gray-500 ">
                                Last Date
                            </td>
                            <td class="px-6 lg:px-10 py-4 border-x">
                                <div class="text-gray-900">
                                    23/34/45
                                </div>
                            </td>
                            
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 lg:px-10 py-4  text-gray-500">
                                Type
                            </td>
                            <td class="px-6  lg:px-10 py-4 border-x">
                                <div class="text-gray-900">
                                    Intern
                                </div>
                            </td>
                          
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 lg:px-10 py-4  text-gray-500">
                                Mode
                            </td>
                            <td class="px-6 lg:px-10 py-4 border-x">
                                <div class="text-gray-900">
                                    Online
                                </div>
                            </td>
                          
                        </tr>
                        <tr class="whitespace-nowrap">
                            <td class="px-6 lg:px-10 py-4  text-gray-500">
                                Website
                            </td>
                            <td class="px-6 lg:px-10 py-4 border-x">
                                <div class="text-gray-900">
                                    www.instaggram.com
                                </div>
                            </td>
                          
                        </tr>
                    </tbody>
                </table>
                </div>
                <br></br><br></br>
    <p class="font-bold text-2xl px-2">Other Details</p>
    <p class="px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore commodi quam itaque recusandae animi, provident vero ducimus non unde rerum reiciendis quia quos autem iste dicta, laudantium tempora culpa voluptates.</p>
    <p class="px-2">South Apt, East block, west city North 18090</p>

    </div>
  )
}

export default viewJobDetails