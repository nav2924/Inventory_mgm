import React from "react";
import Navbar from "./(components)/Navbar";
import Sidebar from "./(components)/Sidebar";

type Props = {};

const DashBoardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`light flex min-h-screen w-full text-gray-900 bg-gray-50 md:pl-72`}
    >

      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashBoardWrapper;
