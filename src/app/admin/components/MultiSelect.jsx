"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";

export default function MultiSelect({
  label,
  options,
  selectedIds,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOptions = options.filter((opt) => selectedIds.includes(opt.id));

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm mb-1 text-gray-300">{label}</label>
      
      {/* Input Area */}
      <div
        className="w-full min-h-[42px] rounded border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm cursor-pointer flex flex-wrap gap-2 items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-wrap gap-2">
          {selectedOptions.length === 0 && (
            <span className="text-gray-500">Select {label.toLowerCase()}...</span>
          )}
          {selectedOptions.map((opt) => (
            <span
              key={opt.id}
              className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded-md text-xs flex items-center gap-1 border border-blue-800"
              onClick={(e) => {
                e.stopPropagation(); // Prevent dropdown toggle
                onChange(opt.id);
              }}
            >
              {opt.name}
              <X size={12} className="hover:text-white cursor-pointer" />
            </span>
          ))}
        </div>
        <ChevronDown 
          size={16} 
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-zinc-900 border border-zinc-800 rounded-md shadow-xl max-h-60 overflow-auto">
          {options.length > 0 ? (
            options.map((opt) => {
              const isSelected = selectedIds.includes(opt.id);
              return (
                <div
                  key={opt.id}
                  onClick={() => onChange(opt.id)}
                  className={`px-3 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-zinc-800 transition-colors ${
                    isSelected ? "bg-blue-900/20 text-blue-200" : "text-gray-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {/* Optional: Render icon if available */}
                    {opt.icon && (
                      <img src={opt.icon} alt={`${opt.name} icon`} className="w-4 h-4 object-contain" />
                    )}
                    {opt.name}
                  </span>
                  {isSelected && (
                    <span className="text-blue-400 text-xs">Selected</span>
                  )}
                </div>
              );
            })
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No options available
            </div>
          )}
        </div>
      )}
    </div>
  );
}