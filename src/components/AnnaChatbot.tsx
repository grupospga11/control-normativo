import React, { useState, useEffect } from 'react';

interface AnnaChatbotProps {
  message: string;
  isAlert?: boolean;
}

export default function AnnaChatbot({ message, isAlert = false }: AnnaChatbotProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [message]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-4 pointer-events-none">
      {/* Avatar Container */}
      <div className="relative group pointer-events-auto">
        {/* Glow effect */}
        <div className={`absolute -inset-1 rounded-full blur opacity-40 transition duration-500 ${isAlert ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}></div>

        {/* Avatar Circle */}
        <div className={`relative h-16 w-16 rounded-full border-2 bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${isAlert ? 'border-red-400' : 'border-blue-400'}`}>
          <span className="text-2xl" role="img" aria-label="Anna Avatar">
            {isAlert ? '⚠️' : '👩‍💼'}
          </span>

          {/* Status Dot */}
          <div className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${isAlert ? 'bg-red-500' : 'bg-green-500'}`}></div>
        </div>

        {/* Label */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            ANNA AI
        </div>
      </div>

      {/* Speech Bubble */}
      {isVisible && (
        <div className={`relative max-w-xs p-4 rounded-2xl shadow-xl border pointer-events-auto transition-all duration-300 ${
          isAlert
            ? 'bg-red-50 border-red-200 text-red-900'
            : 'bg-white border-zinc-200 text-zinc-800'
        }`}>
          <div className="text-sm leading-relaxed">
            {isAlert && <span className="font-bold block mb-1">¡Aviso importante!</span>}
            {message}
          </div>
          {/* Bubble tail */}
          <div className={`absolute bottom-4 -left-2 w-4 h-4 rotate-45 border-l border-b ${
            isAlert ? 'bg-red-50 border-red-200' : 'bg-white border-zinc-200'
          }`}></div>
        </div>
      )}
    </div>
  );
}
