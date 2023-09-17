"use client";
import { NextPage } from "next";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import Image from "next/image";

const Home: NextPage = () => {
  const [currentSelectedChat, setCurrentSelectedChat] = useState<number>(0);

  return (
    <main>
      <div className="rounded-none min-h-screen">
        <div className="bg-primary-50 w-full h-14"></div>
        <div className="w-full h-[calc(100vh-56px)] flex">
          <div className="w-72 bg-[#f0f0f0] h-full">
            <div className="border-b-[1.5px] border-gray-300 border-solid h-16 flex flex-col justify-center items-center">
              <div className="flex justify-between w-full pl-4 pr-3">
                <h3 className="text-2xl font-semibold">Chat</h3>
                <div className="flex justify-end items-end ml-4">
                  <button className="rounded-full w-8 h-8 flex justify-center items-center hover:scale-110 transform transition-all duration-200 ease-in-out text-[#424242] hover:text-[#5b5fc7]">
                    <BsFilter size={25} color="inherit" />
                  </button>
                  <button className="rounded-full w-8 h-8 flex justify-center items-center hover:scale-110 transform transition-all duration-200 ease-in-out text-[#424242] hover:text-[#5b5fc7]">
                    <BsPencilSquare size={20} color="inherit" />
                  </button>
                </div>
              </div>
            </div>
            {[0, 1, 2, 3, 4, 5].map((item, index) => {
              return (
                <div
                  key={item}
                  className={`h-12 flex flex-col justify-center items-center px-1`}
                >
                  <div
                    className={`flex justify-between w-full pl-4 pr-3 h-full cursor-pointer rounded-md ${
                      currentSelectedChat === index
                        ? "hover:bg-white"
                        : "hover:bg-[#fafafa]"
                    } 
                  ${currentSelectedChat === index ? "bg-white" : ""}
                  `}
                    onClick={() => setCurrentSelectedChat(index)}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex">
                        <Image
                          src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
                          alt="Picture of the author"
                          width={30}
                          height={30}
                          className="rounded-full w-8 h-8 block border-2 border-gray-400 border-solid"
                        />
                        <h3 className="font-normal mt-[2.5px] ml-3 text-[#424242]">
                          John Doe
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="m-0 text-sm -mt-[2px] text-gray-500 font-normal">
                        2:30 PM
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="shadow-2xl w-[calc(100vw-288px)] bg-[#f5f5f5] h-full">
            <div className="border-b-[1.5px] border-gray-200 border-solid h-16 flex justify-between items-center px-4">
              <h3 className="text-2xl">
                {currentSelectedChat === 0
                  ? "John Doe"
                  : currentSelectedChat === 1
                  ? "Jane Doe"
                  : currentSelectedChat === 2
                  ? "John Doe"
                  : currentSelectedChat === 3
                  ? "Jane Doe"
                  : currentSelectedChat === 4
                  ? "John Doe"
                  : currentSelectedChat === 5
                  ? "Jane Doe"
                  : ""}
              </h3>
              <h3 className="text-2xl">
                Right Side
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
