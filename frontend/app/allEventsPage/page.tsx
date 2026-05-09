"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import Eventcard from '@/components/eventcard';

export default function AllEventsPage() {

  const eventsData = [
    {
      month: "OCT", day: "24", title: "Global AI Summit 2024",
      organizer: "TechNexus Pulse", location: "Innovation Center, San Francisco",
      price: 50, imageAlt: "AI Summit",
      imageUrl: "https://picsum.photos/seed/ai-summit/800/500"
    },
    {
      month: "OCT", day: "26", title: "Jazz in the Park",
      organizer: "Echo Entertainment", location: "Central Park, New York",
      price: 35, imageAlt: "Jazz concert",
      imageUrl: "https://picsum.photos/seed/jazz-park/800/500"
    },
    {
      month: "OCT", day: "30", title: "Modern Canvas Workshop",
      organizer: "Creative Collective", location: "Art District Studio, Austin",
      price: 120, imageAlt: "Art workshop",
      imageUrl: "https://picsum.photos/seed/canvas-art/800/500"
    },
    {
      month: "NOV", day: "02", title: "Startup Pitch Night",
      organizer: "VentureHub", location: "Downtown Loft, Chicago",
      price: 20, imageAlt: "Startup pitch",
      imageUrl: "https://picsum.photos/seed/startup-pitch/800/500"
    },
    {
      month: "NOV", day: "05", title: "Web Dev Conference",
      organizer: "CodersUnite", location: "Tech Hub, Seattle",
      price: 75, imageAlt: "Web dev conference",
      imageUrl: "https://picsum.photos/seed/webdev-conf/800/500"
    },
    {
      month: "NOV", day: "08", title: "R&B Night Live",
      organizer: "SoundWave Events", location: "The Grove, Los Angeles",
      price: 45, imageAlt: "R&B concert",
      imageUrl: "https://picsum.photos/seed/rnb-night/800/500"
    },
    {
      month: "NOV", day: "12", title: "Photography Masterclass",
      organizer: "Lens & Light Studio", location: "Gallery Row, Miami",
      price: 90, imageAlt: "Photography class",
      imageUrl: "https://picsum.photos/seed/photo-master/800/500"
    },
    {
      month: "NOV", day: "15", title: "Blockchain & Web3 Forum",
      organizer: "CryptoVerse", location: "Fintech Arena, Boston",
      price: 60, imageAlt: "Blockchain forum",
      imageUrl: "https://picsum.photos/seed/blockchain-web3/800/500"
    },
    {
      month: "NOV", day: "18", title: "Classical Piano Evening",
      organizer: "Harmony Arts", location: "Symphony Hall, Vienna",
      price: 55, imageAlt: "Piano concert",
      imageUrl: "https://picsum.photos/seed/piano-evening/800/500"
    },
    {
      month: "NOV", day: "21", title: "Sculpting for Beginners",
      organizer: "Clay & Form", location: "Maker's Space, Portland",
      price: 80, imageAlt: "Sculpting class",
      imageUrl: "https://picsum.photos/seed/sculpt-begin/800/500"
    },
    {
      month: "NOV", day: "25", title: "E-Commerce Growth Expo",
      organizer: "BizScale HQ", location: "Convention Center, Dallas",
      price: 40, imageAlt: "Business expo",
      imageUrl: "https://picsum.photos/seed/ecommerce-expo/800/500"
    },
    {
      month: "DEC", day: "01", title: "Indie Music Festival",
      organizer: "Underground Sounds", location: "Riverside Grounds, Nashville",
      price: 65, imageAlt: "Music festival",
      imageUrl: "https://picsum.photos/seed/indie-festival/800/500"
    },
    {
      month: "DEC", day: "05", title: "UX Design Sprint",
      organizer: "DesignLab Co.", location: "Studio One, Toronto",
      price: 95, imageAlt: "UX design",
      imageUrl: "https://picsum.photos/seed/ux-sprint/800/500"
    },
    {
      month: "DEC", day: "10", title: "Women in Tech Summit",
      organizer: "EmpowerTech", location: "Grand Hall, London",
      price: 30, imageAlt: "Women in tech",
      imageUrl: "https://picsum.photos/seed/women-tech/800/500"
    },
    {
      month: "DEC", day: "14", title: "Holiday Art Fair",
      organizer: "Winter Gallery", location: "City Center, Denver",
      price: 15, imageAlt: "Art fair",
      imageUrl: "https://picsum.photos/seed/holiday-art/800/500"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] font-sans">

      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#3525cd] text-2xl">explore</span>
            <span className="text-2xl font-extrabold text-[#3525cd] tracking-tighter">Pulse</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-600 font-semibold hover:text-[#4d44e3] transition-colors">
    Login
  </Link>
  <Link href="/signup" className="bg-[#3525cd] text-white px-5 py-2 rounded-xl font-semibold shadow-lg shadow-indigo-500/20">
    Sign Up
  </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 bg-white flex-1">
        <section className="px-6 max-w-7xl mx-auto">

        <div className="flex flex-col items-center mb-16">
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <span className="text-slate-500 text-sm font-medium">search</span>
            </div>
            <input
              type="text"
              placeholder="Search for events..."
              className="w-full bg-[#111111] text-white pl-16 pr-32 py-5 rounded-full text-sm focus:outline-none border border-transparent placeholder:text-slate-500"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#3525cd] text-white px-8 rounded-full text-sm font-bold hover:bg-[#4d44e3] transition-colors">
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button className="px-6 py-2 rounded-full text-xs font-bold bg-[#3525cd] text-white border border-[#4d44e3]">Technology</button>
            <button className="px-6 py-2 rounded-full text-xs font-bold bg-white text-slate-500 border border-slate-100 hover:border-slate-300">Music</button>
            <button className="px-6 py-2 rounded-full text-xs font-bold bg-white text-slate-500 border border-slate-100 hover:border-slate-300">Business</button>
            <button className="px-6 py-2 rounded-full text-xs font-bold bg-white text-slate-500 border border-slate-100 hover:border-slate-300">Arts</button>
          </div>
          </div>

          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-black tracking-tight">All Events</h2>
              <p className="text-slate-400 text-sm mt-1">{eventsData.length} events found</p>
            </div>
            <Link
              href="/"
              className="text-[#3525cd] font-semibold text-sm hover:underline flex items-center gap-1"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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