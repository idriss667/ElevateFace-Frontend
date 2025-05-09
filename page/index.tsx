import React, { useState } from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <main
      className={`${
        dark ? "bg-black text-white" : "bg-white text-gray-900"
      } min-h-screen px-6 py-12 space-y-16 transition-all duration-500 ease-in-out font-sans`}
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

      {/* Hero Section */}
      <section className="text-center space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ElevateFace
        </motion.h1>

        <motion.p
          className="text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Révélez votre plein potentiel. Apparence, force, hygiène de vie structurées.
        </motion.p>

        <motion.button
          className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Découvrir le programme
        </motion.button>

        <div className="text-sm text-gray-500 dark:text-gray-400 italic mt-4">
          ✨ L’élégance naturelle, révélée pas à pas ✨
        </div>
      </section>

      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

      {/* Video Demo */}
      <section className="max-w-3xl mx-auto text-center mt-10">
        <h2 className="text-3xl font-semibold mb-4">🎥 Démo Vidéo</h2>
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            className="w-full h-full rounded-xl shadow-lg"
            allowFullScreen
            title="ElevateFace Demo"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Home;
