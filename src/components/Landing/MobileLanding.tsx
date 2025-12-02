"use client";

import { Menu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1623679116710-78b05d2fe2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Optimisez votre flux de travail",
    description: "Découvrez comment améliorer votre productivité",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Collaboration en temps réel",
    description: "Travaillez ensemble efficacement",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Analyses détaillées",
    description: "Suivez vos performances",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1503418895522-46f9804cda40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Réunions productives",
    description: "Organisez vos réunions facilement",
  },
];

const MobileLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // synchro scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth =
        scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div className="w-[375px] h-[812px] bg-white overflow-auto">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm h-[60px] flex items-center justify-between px-4">
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="w-10 h-10 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
        >
          <Menu className="w-5 h-5 text-slate-600" />
        </button>

        <div className="flex items-center gap-2" aria-label="Logo de l’application">
          <div className="w-8 h-8 rounded-lg bg-[#D5D5D5]" />
          <span className="text-[#D5D5D5] text-sm">Logo</span>
        </div>

        <div className="w-10" aria-hidden="true" />
      </header>

      {/* HERO */}
      <section
        className="relative bg-gradient-to-br from-purple-50 to-pink-50 px-5 py-12"
        aria-labelledby="mobile-hero-title"
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1737868131532-0efce8062b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 text-center">
          <h1
            id="mobile-hero-title"
            className="mb-3 text-slate-800 text-lg font-semibold"
          >
            Transformez votre façon de travailler
          </h1>

          <p className="text-[#7f7f7f] mb-6 text-sm">
            Une plateforme innovante qui révolutionne la gestion de vos projets
          </p>

          <div className="flex flex-col gap-3 items-center">
            <button
              type="button"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Commencer
            </button>

            <button
              type="button"
              className="text-[#7a7a7a] cursor-pointer text-xs underline focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* CARROUSEL FEATURES */}
      <section
        className="py-10 bg-white"
        aria-labelledby="mobile-features-title"
      >
        <h2
          id="mobile-features-title"
          className="text-center mb-6 px-5 text-slate-800 text-lg font-semibold"
        >
          Nos fonctionnalités
        </h2>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 px-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-roledescription="carrousel"
          aria-label="Carrousel des fonctionnalités"
        >
          {carouselItems.map((item, index) => (
            <article
              key={item.id}
              className="min-w-[280px] snap-center bg-white rounded-xl shadow-md overflow-hidden"
              role="group"
              aria-roledescription="slide"
              aria-label={`Fonctionnalité ${index + 1} sur ${
                carouselItems.length
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1.5 text-sm font-medium text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[#7f7f7f] text-xs">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-1.5 mt-5">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                currentSlide === index ? "bg-purple-500" : "bg-slate-300"
              }`}
              aria-label={`Aller à la fonctionnalité ${index + 1}`}
              aria-pressed={currentSlide === index}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="py-10 px-5 bg-gradient-to-br from-slate-50 to-slate-100"
        aria-labelledby="mobile-contact-title"
      >
        <h2
          id="mobile-contact-title"
          className="text-center mb-6 text-slate-800 text-lg font-semibold"
        >
          Contactez-nous
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-5">
          <form
            className="space-y-3"
            aria-describedby="mobile-contact-help"
            onSubmit={(e) => e.preventDefault()}
          >
            <p
              id="mobile-contact-help"
              className="text-xs text-slate-500 mb-1"
            >
              Tous les champs sont obligatoires.
            </p>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="m-contact-name"
                className="text-sm text-slate-800"
              >
                Nom
              </label>
              <input
                id="m-contact-name"
                type="text"
                required
                className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="m-contact-email"
                className="text-sm text-slate-800"
              >
                Email
              </label>
              <input
                id="m-contact-email"
                type="email"
                required
                className="w-full h-10 px-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="m-contact-message"
                className="text-sm text-slate-800"
              >
                Message
              </label>
              <textarea
                id="m-contact-message"
                rows={3}
                required
                className="w-full px-3 py-2 bg-slate-50 rounded-lg border border-slate-200 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer flex items-center justify-center text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-6 px-5">
        <div className="text-center mb-4">
          <p className="text-[#A0A0A0] text-xs mb-3">
            © 2025 Entreprise. Tous droits réservés.
          </p>

          <div className="flex gap-2 justify-center">
            <button className="text-[#A0A0A0] text-[10px] cursor-pointer hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded">
              Confidentialité
            </button>
            <span className="text-[#A0A0A0] text-[10px]">•</span>
            <button className="text-[#A0A0A0] text-[10px] cursor-pointer hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded">
              Conditions
            </button>
            <span className="text-[#A0A0A0] text-[10px]">•</span>
            <button className="text-[#A0A0A0] text-[10px] cursor-pointer hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded">
              Cookies
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <button
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Page Facebook"
          >
            <Facebook className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Page Twitter"
          >
            <Twitter className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Page Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button
            className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Page LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MobileLanding;
