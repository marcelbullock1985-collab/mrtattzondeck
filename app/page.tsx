export default function Home() {
return (
<main className="min-h-screen bg-black text-white font-sans">

{/* HERO SECTION */}
<section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-black to-red-950">
<h1 className="text-5xl md:text-7xl font-bold text-gold mb-6 tracking-widest">
MrTattzOnDeck
</h1>
<p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
Luxury Urban Tattoo Experience. Custom Ink. VIP Sessions. Flash Events.
</p>
<div className="mt-8 flex gap-4">
<button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl text-white font-semibold transition">
Book Appointment
</button>
<button className="border border-gold text-gold px-6 py-3 rounded-xl hover:bg-gold hover:text-black transition">
View Portfolio
</button>
</div>
</section>

{/* SERVICES */}
<section className="py-20 px-6 bg-black text-center">
<h2 className="text-4xl font-bold text-gold mb-12">Services</h2>
<div className="grid md:grid-cols-3 gap-10">

<div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
<h3 className="text-2xl font-semibold text-red-500 mb-4">Custom Tattoos</h3>
<p className="text-gray-400">
Fully personalized tattoo designs tailored to your vision.
</p>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
<h3 className="text-2xl font-semibold text-red-500 mb-4">VIP Sessions</h3>
<p className="text-gray-400">
Private luxury experience with priority booking and exclusive perks.
</p>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
<h3 className="text-2xl font-semibold text-red-500 mb-4">Flash Events</h3>
<p className="text-gray-400">
Limited edition flash designs available during special event drops.
</p>
</div>

</div>
</section>

{/* LOYALTY */}
<section className="py-20 px-6 bg-red-950 text-center">
<h2 className="text-4xl font-bold text-gold mb-6">Loyalty Rewards</h2>
<p className="text-gray-200 max-w-2xl mx-auto">
Earn points for every session. Unlock discounts, priority booking,
and exclusive access to members-only flash drops.
</p>
</section>

{/* CONTACT */}
<section className="py-20 px-6 bg-black text-center">
<h2 className="text-4xl font-bold text-gold mb-6">Book Now</h2>
<p className="text-gray-400 mb-8">
Ready to get inked? Secure your session today.
</p>
<button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-bold text-lg transition">
Schedule Appointment
</button>
</section>

{/* FOOTER */}
<footer className="bg-zinc-950 py-8 text-center text-gray-500">
© {new Date().getFullYear()} MrTattzOnDeck. All rights reserved.
</footer>

</main>
);
}