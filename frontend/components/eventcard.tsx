import React from 'react';

// Define the structure of the data this card needs
interface EventCardProps {
  month: string;
  day: string;
  title: string;
  organizer: string;
  location: string;
  price: number;
  imageAlt: string;
  imageUrl?: string; // Optional: in case you have a real URL later
}

const EventCard: React.FC<EventCardProps> = ({
  month,
  day,
  title,
  organizer,
  location,
  price,
  imageAlt,
  imageUrl
}) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-transform hover:-translate-y-1 duration-300 border border-slate-100 dark:border-slate-800">
      <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800">
        {/* If no imageUrl is provided, it shows a placeholder div */}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 p-6 text-center text-xs italic">
            [Image: {imageAlt}]
          </div>
        )}
        
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-center shadow-sm">
          <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{month}</span>
          <span className="block text-xl font-extrabold text-slate-900 leading-tight">{day}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-sans text-[18px] font-bold text-slate-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">
          By {organizer}
        </p>

        <div className="flex items-center text-slate-400 text-xs gap-1 mb-5">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          <span>{location}</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            ${price}
          </span>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 active:scale-95 transition-all">
            Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;