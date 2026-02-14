export default function Home() {
return (
<main className="min-h-screen bg-black text-white font-sans">

{/* HERO */}
<section className="flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-black via-zinc-900 to-black border-b border-yellow-600/20">

<h1 className="text-5xl md:text-7xl font-extrabold tracking-widest text-yellow-500">
Mr Tattz On Deck
</h1>

<p className="mt-4 text-yellow-500 tracking-widest text-sm md:text-base">
HOOD CERTIFIED • PROFESSIONAL STANDARD
</p>

<div className="h-1 w-32 bg-yellow-500 mt-6 mb-6"></div>

<p className="text-lg md:text-xl text-zinc-300 max-w-2xl">
Real Ink • Real Artists • No Gimmicks
</p>

<button className="mt-10 bg-yellow-500 text-black font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition duration-300">
Book Appointment
</button>

</section>

{/* SERVICES */}
<section className="py-20 px-6 bg-zinc-950 text-center">
<h2 className="text-4xl font-bold text-yellow-500 mb-12 tracking-wide">
SERVICES
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-black border border-yellow-600/20 p-8 rounded-lg hover:border-yellow-500 transition duration-300">
<h3 className="text-2xl font-semibold text-yellow-500 mb-4">
Custom Tattoos
</h3>
<p className="text-zinc-400">
Fully custom pieces built around your vision. No copy-paste work.
</p>
</div>

<div className="bg-black border border-yellow-600/20 p-8 rounded-lg hover:border-yellow-500 transition duration-300">
<h3 className="text-2xl font-semibold text-yellow-500 mb-4">
Private Sessions
</h3>
<p className="text-zinc-400">
Focused, distraction-free appointments for serious clients.
</p>
</div>

<div className="bg-black border border-yellow-600/20 p-8 rounded-lg hover:border-yellow-500 transition duration-300">
<h3 className="text-2xl font-semibold text-yellow-500 mb-4">
Flash Drops
</h3>
<p className="text-zinc-400">
Limited designs released at special events. First come, first inked.
</p>
</div>

</div>
</section>

{/* CLIENT STATUS */}
<section className="py-20 px-6 bg-black text-center border-t border-yellow-600/20">
<h2 className="text-4xl font-bold text-yellow-500 mb-6">
CERTIFIED CLIENT STATUS
</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
Loyalty rewards. Priority booking. Early access to flash.
Built for clients who respect the craft.
</p>
</section>

{/* FOOTER */}
<footer className="bg-zinc-950 py-8 text-center text-zinc-500 text-sm">
© {new Date().getFullYear()} Mr Tattz On Deck. All rights reserved.
</footer>

</main>
);
}
