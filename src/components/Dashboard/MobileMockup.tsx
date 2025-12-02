"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Menu, Search, Plus, X } from "lucide-react";

const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Concert",
    date: "15 Décembre 2025",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Concert",
    date: "22 Décembre 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1566735355835-bddb43dc3f63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Concert",
    date: "30 Décembre 2025",
  },
];

export default function MobileMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // focus dans la modale à l'ouverture
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    if (addButtonRef.current) addButtonRef.current.focus();
  };

  const handleModalKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeModal();
    }
  };

  return (
    <div className="relative w-[375px] h-[812px] bg-[#FAFAFA] overflow-hidden">
      {/* HEADER identique visuellement */}
      <header className="absolute top-0 left-0 right-0 bg-white shadow-sm">
        <div className="h-[60px] flex items-center px-4 gap-3">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>

          <div
            className="w-8 h-8 rounded-lg bg-[#D5D5D5]"
            aria-hidden="true"
          ></div>

          <form
            className="flex-1 relative"
            role="search"
            aria-label="Rechercher un évènement"
          >
            <label htmlFor="mobile-search" className="sr-only">
              Rechercher un évènement
            </label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="mobile-search"
              type="search"
              placeholder="Rechercher…"
              className="w-full h-9 pl-9 pr-3 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </form>
        </div>
      </header>

      {/* CONTENU PRINCIPAL – même layout */}
      <main
        className="absolute top-[60px] left-0 right-0 bottom-0 overflow-auto px-4 py-5"
        aria-labelledby="mobile-events-title"
      >
        <h1
          id="mobile-events-title"
          className="mb-5 text-center font-semibold text-slate-800"
        >
          Mes évènements
        </h1>

        <section aria-label="Liste d’évènements">
          <div className="space-y-4">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={`Photo pour l’évènement ${event.title}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="mb-1 text-sm font-medium text-slate-900">
                    {event.title}
                  </h2>
                  <p className="text-[#C8C8C8] mb-3 text-sm">{event.date}</p>

                  <button
                    type="button"
                    className="inline-flex px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`Voir le détail de l’évènement ${event.title}`}
                  >
                    Voir
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* BOUTON FLOTTANT + identique visuellement */}
      <button
        type="button"
        ref={addButtonRef}
        onClick={openModal}
        className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg cursor-pointer flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        aria-label="Ajouter un évènement"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* MODALE – même bottom-sheet mais accessible */}
      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black/30 flex items-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-add-event-title"
          onKeyDown={handleModalKeyDown}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="bg-white rounded-t-3xl shadow-2xl w-full p-6 pb-8 focus:outline-none"
          >
            <div className="mb-1">
              <h2
                id="mobile-add-event-title"
                className="text-base font-semibold text-slate-900"
              >
                Ajouter un évènement
              </h2>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center text-[#D5D5D5] cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
              aria-label="Fermer la fenêtre d’ajout d’évènement"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <form
              className="space-y-3 mt-5 mb-5"
              onSubmit={(e) => {
                e.preventDefault();
                closeModal();
              }}
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="mobile-event-name"
                  className="text-sm text-slate-800"
                >
                  Nom de l’évènement
                </label>
                <input
                  id="mobile-event-name"
                  type="text"
                  className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="mobile-event-date"
                  className="text-sm text-slate-800"
                >
                  Date
                </label>
                <input
                  id="mobile-event-date"
                  type="text"
                  placeholder="JJ/MM/AAAA"
                  className="w-full h-11 px-4 bg-slate-50 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer flex items-center justify-center text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Créer
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
