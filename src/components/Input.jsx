// Input.jsx
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function Input({
  icon: Icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  name,
  options,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="flex flex-col mb-4 w-full">
      <div
        className={`flex items-center border ${
          error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
        } rounded-lg px-3 py-2.5 bg-white focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 transition-all`}
      >
        {Icon && <Icon className="text-gray-500 mr-3 shrink-0" size={18} />}
        
        {type === 'select' ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-transparent outline-none text-gray-700 text-sm appearance-none"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={inputType}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full bg-transparent outline-none text-gray-700 text-sm placeholder-gray-400"
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none ml-2 shrink-0"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        )}
      </div>
      {error && <span className="text-red-500 text-xs mt-1.5 ml-1">{error}</span>}
    </div>
  );
}