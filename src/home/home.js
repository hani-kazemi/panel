import React from "react";
import '../javascript/javascript'


 function Home() {
    return (
      <div className="bg-black opacity-90 w-full h-full p-4">
        <div className="w-full h-full border border-white rounded-md flex flex-col ">

          <div className="text-white bg-black opacity-100 relative text-center border border-black p-4 rounded-t-md ">
           
            <svg className="absolute right-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg>
            <p> اضافه و ویرایش نقش ها </p>
          </div>

          <div>
              <div class="relative overflow-x-auto p-4 ">
                  <table id="main" class="w-full h-full text-sm text-center text-white rounded-lg   ">
                      <thead class="text-xs bg-black text-center ">
                          <tr className="mb-10 h-full">
                              <th scope="col" class="px-6 py-4 rounded-l-lg">
                                  سوپرادمین
                              </th>

                              <th scope="col" class="px-6 py-4 relative border-l border-l-gray-400 ">
                                  حسابدار
                                  <svg className="absolute top-2 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentcolor"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
                              </th>
                              <th scope="col" class="px-6 py-4 relative border-l border-l-gray-400">
                                  صندوقدار
                                  <svg className="absolute top-2 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentcolor"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
                              </th>

                              <th scope="col" class="px-6 py-4 relative border-l border-l-gray-400">
                                  ادمین
                                  <svg className="absolute top-2 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentcolor"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
                              </th>
                              <th scope="col" class="px-6 py-4 relative border-l border-l-gray-400">
                                  سوپرادمین
                                  <svg className="absolute top-2 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentcolor"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path></svg>
                              </th>
                              
                              
                              <th scope="col" class="px-6 py-4 relative border-l border-l-gray-400">
                                     سوپرادمین
                                    <svg id="dropdownIcon" class="absolute top-2 left-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentcolor">
                                        <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                                        <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
                                    </svg>
                                    <div id="dropdownContent" class="hidden absolute bg-gray-800 border border-gray-200 shadow-lg rounded-md mt-2">
                                        <ul class="py-2 px-10">
                                            <li class="cursor-pointer hover:bg-gray-500 hover:rounded p-1 text-white" id="option1">متن یک </li>
                                            <li class="cursor-pointer hover:bg-gray-500 hover:rounded  p-1 text-white" id="option2">متن دو </li>
                                        </ul>
                                    </div>
                              </th>

                              <th scope="col" class="px-6 py-4 relative text-white rounded-r-lg border-l border-red-500">
                                <button  id="addColumnButton" >
                                  <svg className="top-[-15px] left-[-10px] bg-white absolute cursor-pointer rounded-full text-red-600 hover:text-white hover:bg-red-500" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="currentcolor"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path></svg>
                                </button>
                                  امکانات
                                  
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr id="row" className="bg-gray-700 rounded-tr-lg rounded-lg  ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap rounded-l-lg ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400 ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 rounded-r-lg relative border-l border-red-500">
                                  مدیریت سفارشات 
                                  <svg className="absolute left-16 top-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
                              </td>
                          </tr>

                          <tr className="bg-black  border-b border-solid border-gray-400 ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-4 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                  سفارشات حضوری
                              </td>
                          </tr>

                          <tr className="bg-black  border-b border-solid border-gray-400">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 سفارشات آنلاین
                              </td>
                          </tr>

                          <tr className="bg-black  border-b border-solid border-gray-400 ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td> 
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 سفارشات آنلاین
                              </td>
                          </tr>

                          <tr className="bg-black   ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th> 
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 سفارشات آنلاین
                              </td>
                          </tr>
                          <tr className="bg-slate-700  rounded-tr-lg rounded-lg ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap rounded-l-lg">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 relative rounded-r-lg border-l border-red-500">
                                 مدیریت تخفیفات
                                 <svg className="absolute left-16 top-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
                              </td>
                          </tr>

                          <tr className="bg-black border-b border-solid border-gray-400 ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400 ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 متن تستی
                              </td>
                          </tr>

                          <tr className="bg-black border-b border-solid border-gray-400 ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 متن تستی
                              </td>
                          </tr>
                          <tr className="bg-black border-b border-solid border-gray-400">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500"checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 متن تستی
                              </td>
                          </tr>
                          <tr className="bg-black  ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500" />
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500" checked/>
                              </td>
                              <td class="px-6 py-2 border-l border-red-500">
                                 متن تستی
                                 
                              </td>
                          </tr>

                          <tr className="bg-slate-700 rounded-tr-lg rounded-lg  ">
                              <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap rounded-l-lg ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </th>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400 ">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500"/>
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                <input type="checkbox" className=" w-4 h-4 p-2 accent-red-500" />
                              </td>
                              <td class="px-6 py-2 border-l border-gray-400">
                                  <input type="checkbox" className=" w-4 h-6 p-6 accent-red-500 " checked/>
                              </td>
                              <td class="px-6 py-2 relative rounded-r-lg border-l border-red-500 ">
                                 مدیریت پرسنل
                                 <svg className="absolute left-16 top-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              
              <div className="w-full flex flex-row justify-center items-center"><button  className="px-80  hover:bg-red-700 py-2 bg-red-600 rounded-md text-white "> ذخیره </button></div>
          </div>
          

        </div>
      </div>
    );
  }
  
  export default Home;