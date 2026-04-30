import './hero.css'

const Hero = () => {
  return <section className="mb-16 md:mb-24">
      <div className="relative w-full h-[353px] rounded-xl overflow-hidden mb-8 shadow-2xl">
        <img className="w-full h-full object-cover"
          data-alt="moody high-end restaurant interior with dark stone walls, dim ambient lighting, and elegant table setting with silver cutlery"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNUiRE2dbCLrRn-cH1_w6I4YMpnCGUWUBs2LR7N8wEEiT7aOMStz4px06LGzqSQWPv9_pYP0NtrekB388RfTLgnZRqJDlJJQ1R5krzxyScZBvN0HG9Qdk8EG6iBp8h_6kgxPL5N7hT_qask1fv13lxSZIBIRYo6LQGb3VErtDhBY52RPelgmWk6_K0QWzOhCa1SJQ3kzke4YOZdaAoWfsepOG4CaPOvhNPEUy7KeOLmK7yKaD9e7uDqQu39U-haGfBs7RlDbsR" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="container_text absolute bottom-6 left-6">
          <h2 className="font-headline text-4xl md:text-6xl text-primary color-font tracking-tight">
            Nuestro Menú</h2>
        </div>
      </div>
    </section>
  
};

export default Hero;