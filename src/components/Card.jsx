import React from "react";

export default function Card({ icon, title, description, onClick }) {
  const Icon = icon; 
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col h-full"
    >
      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#111111] transition-colors duration-300">
        {Icon && (
          <Icon
            size={24}
            className="text-gray-700 group-hover:text-white transition-colors duration-300"
          />
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

      <p className="text-sm text-gray-500 leading-relaxed grow">
        {description}
      </p>
    </div>
  );
}