"use client";

import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">STOCKFLOW</h1>
      </div>
      <button
        className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:blue-100"
        title="menu-sidebar"
        onClick={() => {}}
      >
        <Menu className="w-4 h-4" />
      </button>

      <div className="flex-grow mt-8"></div>

      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 StockFlow
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
