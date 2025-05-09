import React, { useState } from "react";
import { motion } from "framer-motion";

const TechPage: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <main
      className={`${
        dark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-6 py-12 space-y-12 transition-all duration-500 ease-in-out font-sans`}
    >
      {/* Dark Mode Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl border shadow-sm hover:scale-105 transition"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Titre + Intro */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Architecture Technique
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Découvrez la structure technique derrière ElevateFace, pensée pour être robuste,
          sécurisée et évolutive.
        </motion.p>
      </section>

      {/* Stack Backend */}
      <section className="max-w-5xl mx-auto space-y-8">
        {/* Backend Stack */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">🧰 Stack Backend</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>FastAPI</strong> – Framework rapide, documentation Swagger auto-générée.</li>
            <li><strong>Pydantic</strong> – Validation forte et structurée des données.</li>
            <li><strong>JWT / OAuth2</strong> – Authentification sécurisée intégrable.</li>
          </ul>
        </div>

        {/* Modular Architecture */}
        <div className="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">📐 Architecture Modulaire</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fichiers organisés par route : <code>analyze_face</code>, <code>subscribe</code>, <code>get_user_plan</code>.</li>
            <li>Extensible pour de futures fonctionnalités IA, scoring, ou APIs tierces.</li>
            <li>Code clair, scalable, facilement maintenable.</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">🚀 Vision & Scalabilité</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Déploiement prévu : Docker, Railway, Render, Vercel.</li>
            <li>Portail utilisateur à venir (dashboard personnalisé).</li>
            <li>Connexion possible à des APIs sportives / nutritionnelles.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TechPage;
