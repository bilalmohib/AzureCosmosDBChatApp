"use client";
import { NextPage } from "next";
import { useState } from "react";
import { BsFilter, BsCameraVideo } from "react-icons/bs";
import { BsPencilSquare, BsPencil } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { TbUsersPlus } from "react-icons/tb";
import { PiArrowSquareUpThin } from "react-icons/pi";
import { PiPhoneCallThin } from "react-icons/pi";
import { PiVideoCameraThin } from "react-icons/pi";
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
            <div className="border-b-[1.5px] border-gray-200 border-solid h-16 flex justify-between items-center px-5">
              <div className="flex h-full justify-center items-center">
                <div className="flex">
                  <Image
                    src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10 block border-2 border-gray-400 border-solid"
                  />
                  <h3 className="font-normal text-2xl mt-1 ml-3 text-[#424242] text-ellipsis overflow-hidden truncate w-72">
                    Team Leads - Sep-Nov&lsquo;23 - AI Projects
                  </h3>
                  <button className="rounded-full w-8 h-8 mt-1 ml-2 flex justify-center items-center text-[#424242] hover:text-[#5b5fc7]">
                    <BsPencil size={20} color="inherit" />
                  </button>
                </div>
                <div className="flex h-full ml-4">
                  <button className="w-8 h-full text-lg font-semibold mt-0 ml-2 flex justify-center items-center text-[#424242] hover:text-[#5b5fc7] border-b-[3px] border-[#5b5fc7] border-solid">
                    Chat
                  </button>
                  <button className="w-8 h-full text-lg mt-0 ml-4 flex justify-center items-center text-[#888888] hover:text-[#5b5fc7] border-b-[3px] border-gray-400 border-solid">
                    Files
                  </button>
                </div>
                <button className="w-8 h-full text-lg mt-1 ml-4 flex justify-center items-center hover:scale-105 transform transition-all duration-200 ease-in-out text-[#7d7d7d] hover:text-[#5b5fc7]">
                  <AiOutlinePlus size={25} color="inherit" />
                </button>
              </div>
              <div className="flex">
                <button
                  disabled={true}
                  className="w-fit h-full text-lg my-auto ml-2 rounded-sm border border-[#c9c8c8] border-solid flex justify-center items-center hover:scale-105 transform transition-all duration-200 ease-in-out text-[#616161] hover:text-[#5b5fc7]
                  disabled:opacity-50 disabled:cursor-default disabled:scale-100
                  "
                >
                  <div className="flex w-fit rounded-md">
                    <div className="mx-0 w-9 h-9 bg-[#f0f0f0] border-[#c9c8c8] border-r-[1px] flex justify-center items-center">
                      <PiVideoCameraThin size={22} color="inherit" />
                    </div>
                    <div className="mx-0 w-9 h-9 bg-[#f0f0f0] flex justify-center items-center">
                      <PiPhoneCallThin size={22} color="inherit" />
                    </div>
                  </div>
                </button>
                <button
                  disabled={true}
                  className="w-8 h-full text-lg my-auto ml-4 flex justify-center items-center hover:scale-105 transform transition-all duration-200 ease-in-out text-[#616161] hover:text-[#5b5fc7]
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
                  "
                >
                  <PiArrowSquareUpThin size={25} color="inherit" />
                </button>
                <button className="w-8 h-full text-lg my-auto ml-4 flex justify-center items-center scale-110 transform transition-all duration-200 ease-in-out text-[#424242] hover:text-[#5b5fc7]">
                  <TbUsersPlus size={20} color="inherit" />
                  <p className="text-sm font-bold">50</p>
                </button>
                <button className="w-8 h-full text-lg my-auto ml-2 flex justify-center items-center hover:scale-105 transform transition-all duration-200 ease-in-out text-[#616161] hover:text-[#5b5fc7]">
                  <GoLinkExternal size={18} color="inherit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
