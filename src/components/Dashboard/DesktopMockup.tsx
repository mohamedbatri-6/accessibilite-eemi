"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import {
  Home,
  Calendar,
  BarChart3,
  Settings,
  Search,
  Plus,
  X,
} from "lucide-react";

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

export default function DesktopMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Quand la modale s’ouvre, on met le focus dedans
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // On rend le focus au bouton "+"
    if (addButtonRef.current) {
      addButtonRef.current.focus();
    }
  };

  const handleModalKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      closeModal();
    }
  };

  return (
    <div className="relative w-[1440px] h-[900px] bg-[#FAFAFA] overflow-hidden">
      {/* HEADER ACCESSIBLE */}
      <header className="absolute top-0 left-0 right-0 h-[70px] bg-white shadow-sm flex items-center px-6 gap-6">
        <div className="flex items-center gap-3" aria-label="Logo du site">
          <div className="w-10 h-10 rounded-lg bg-[#D5D5D5]" />
          <span className="text-sm text-slate-500">Dashboard événements</span>
        </div>

        {/* Barre de recherche avec label invisible */}
        <form
          className="flex-1 max-w-md relative"
          role="search"
          aria-label="Recherche d’évènements"
        >
          <label className="sr-only" htmlFor="dashboard-search">
            Rechercher un évènement
          </label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="dashboard-search"
            type="search"
            placeholder="Rechercher…"
            className="w-full h-10 pl-10 pr-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </form>
      </header>

      {/* SIDEBAR ACCESSIBLE */}
      <aside className="absolute top-[70px] left-0 bottom-0 w-[70px] bg-[#F5F5F5] border-r border-slate-200">
        <nav
          aria-label="Navigation principale"
          className="flex flex-col gap-2 p-3 pt-6"
        >
          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white cursor-pointer hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Accueil"
            aria-current="page"
          >
            <Home className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Calendrier"
          >
            <Calendar className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Statistiques"
          >
            <BarChart3 className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-lg text-slate-500 hover:bg-white cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Paramètres"
          >
            <Settings className="w-5 h-5" />
          </button>
        </nav>
      </aside>

      {/* CONTENU PRINCIPAL ACCESSIBLE */}
      <main
        className="absolute top-[70px] left-[70px] right-0 bottom-0 p-8 overflow-auto"
        aria-labelledby="dashboard-title"
      >
        <header className="mb-6">
          <h1 id="dashboard-title" className="text-2xl font-semibold text-slate-900">
            Mes évènements
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Liste des évènements à venir
          </p>
        </header>

        {/* Liste d’évènements */}
        <section aria-label="Liste d’évènements">
          <div className="grid grid-cols-3 gap-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={`Illustration pour l’évènement ${event.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-base font-medium text-slate-900 mb-1">
                    {event.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">{event.date}</p>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`Voir le détail de l’évènement : ${event.title}`}
                  >
                    Voir
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* BOUTON FLOTTANT ACCESSIBLE */}
      <button
        type="button"
        ref={addButtonRef}
        onClick={openModal}
        className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
        aria-label="Ajouter un nouvel évènement"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* MODALE ACCESSIBLE */}
      {isModalOpen && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-event-title"
          onKeyDown={handleModalKeyDown}
        >
          <div
            ref={modalRef}
            tabIndex={-1}
            className="bg-white rounded-2xl shadow-2xl w-[480px] p-8 relative focus:outline-none"
          >
            {/* Bouton fermer */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
              aria-label="Fermer la fenêtre d’ajout d’évènement"
            >
              <X className="w-4 h-4" />
            </button>

            <h2
              id="add-event-title"
              className="text-xl font-semibold text-slate-900 mb-4"
            >
              Ajouter un évènement
            </h2>

            <p className="text-sm text-slate-500 mb-6">
              Remplissez les champs ci-dessous pour créer un nouvel évènement.
            </p>

            <form
              className="space-y-4 mb-6"
              onSubmit={(event) => {
                event.preventDefault();
                
                closeModal();
              }}
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="event-name"
                  className="text-sm text-slate-700 font-medium"
                >
                  Nom de l’évènement
                </label>
                <input
                  id="event-name"
                  type="text"
                  className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="event-date"
                  className="text-sm text-slate-700 font-medium"
                >
                  Date
                </label>
                <input
                  id="event-date"
                  type="text"
                  placeholder="JJ/MM/AAAA"
                  className="w-full h-12 px-4 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
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
