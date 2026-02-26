import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glass = false
}) => {
  const baseStyles = "rounded-3xl p-6 md:p-8 transition-all duration-300";
  const bgStyles = glass ? "glass-card dark:bg-slate-800/80 dark:border-slate-700" : "bg-white dark:bg-slate-800 shadow-soft border border-slate-100 dark:border-slate-700";
  const hoverStyles = hoverEffect ? "hover:-translate-y-2 hover:shadow-xl" : "";

  return (
    <div className={`${baseStyles} ${bgStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;