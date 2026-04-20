"use client";
import Image from "next/image";
import { useState } from 'react';
import Footer from '@/components/Footer'; 
import Eventcard from '@/components/eventcard';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Music', 'Business', 'Arts'];

  const eventsData = [
    {
      month: "OCT",
      day: "24",
      title: "Global AI Summit 2024",
      organizer: "TechNexus Pulse",
      location: "Innovation Center, San Francisco",
      price: 50,
      imageAlt: "AI Summit",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEajJfe23vOBRSCUYrZVK_cPJmOqJ87jAGGgUlm9fIb3Norf1-NiaXt7NqIRuKHtODKLfJhEG6qMxifYTI_mLQw_7hXHC7ZAKmMLdmYsJGKPmJ1dLims5CkAlbyevPEji2Zh6LMJIxJpws3I1JJSG9VGFslppcln_-w52FiE9qsnO0-SzOJrJH1BTd1SlEVhwp03W0Pra2YhTwjGryEDyGPWacmRur84_JAw1Ja27uIaAdD_JEfuIX2aUAShgFaV5uTk9nhTdA_hg"
    },
    {
      month: "OCT",
      day: "26",
      title: "Jazz in the Park",
      organizer: "Echo Entertainment",
      location: "Central Park, New York",
      price: 35,
      imageAlt: "Jazz concert",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOh_hDwOrZc-_Fj-dPl-M895_2O0VH3jxTyZyyiVO10swii0kAa0EPwkhwCF4ylU8866PdcCjFDFht3GMocFD9SvH8uQPIxK9DRwSb6zu6zSubabBygiyxkmmHg2RRU9GgjHa_m1PnagrC1WvCzt8uzNt2Vy1-vWC_9jN14aDh1TJnLvZEjaa0hbE20YFlBgyDjPA4gMvamA1rTh05b2_37TvGIsQyAX0hi-iBQt0tHyaOdDCkOSk7qSYGY6fwyGc0Bbb3rbCsIdA"
    },
    {
      month: "OCT",
      day: "30",
      title: "Modern Canvas Workshop",
      organizer: "Creative Collective",
      location: "Art District Studio, Austin",
      price: 120,
      imageAlt: "Art workshop",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdjq0rMLgN1E8ipoON4YXw7KFKW_L2kmGVZ-d9hnG4BalyHJpIYQ4FbgadrErPTSE6ADxw58faGZWJaPRXmJZ1g4aTN3mhGO3larQucJfJy_Kr5iLHntw1CxozOOzoI1bLQjmhpgXp2sHNZerN3AH0XBXIcpD33YqtCD6P3fIG5SAb_V9mMnP8urDT4HdL1M2TAJZvROFNg8t2YQ-ExAYDgWOZhtzDnPJNzllxheudhtmwUse8UE1ByhzXy7zKJ3n7CLAGgWZjc9U"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] font-sans dark:bg-black">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3525cd] text-2xl">explore</span>
            <span className="text-2xl font-extrabold text-[#3525cd] tracking-tighter">Pulse</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-600 font-semibold hover:text-[#4d44e3] transition-colors">Login</button>
            <button className="bg-[#3525cd] text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-500/20">Sign Up</button>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 bg-white">
        <section className="px-6 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
            Discover Experiences That Matter.
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            Book tickets to the best tech meetups, concerts, and workshops near you.
          </p>

          <div className="relative w-full max-w-2xl mx-auto mb-12">
            <div className="flex items-center bg-white dark:bg-zinc-900 rounded-full p-2 shadow-xl border border-slate-100 dark:border-zinc-800">
              <div className="pl-4 pr-2 text-slate-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 py-3 outline-none" 
                placeholder="Search for events..." 
                type="text"
              />
              <button className="bg-[#3525cd] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">
                Search
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-3 overflow-x-auto no-scrollbar mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#3525cd] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="px-6 max-w-xl mx-auto space-y-8">
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-2xl font-bold text-black tracking-tight">Featured Events</h2>
            <button className="text-[#3525cd] font-semibold text-sm hover:underline">View all</button>
          </div>

          <div className="flex flex-col gap-8">
            {eventsData.map((event, index) => (
              <Eventcard 
                key={index}
                month={event.month}
                day={event.day}
                title={event.title}
                organizer={event.organizer}
                location={event.location}
                price={event.price}
                imageAlt={event.imageAlt}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}