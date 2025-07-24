import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className=" relative w-full flex flex-col items-center justify-center text-gray-900   ">
      <motion.img
        src="/images/zeko çizim.png"
        alt="logo"
        className="h-50"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        Merhaba, ben{" "}
        <span className="text-indigo-600">Zekeriya Deniz Uğurlu!</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl mb-6 text-center max-w-xl ml-4 mr-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        Kod yazmayı, öğrenmeyi ve üretmeyi seven bir Bilgisayar Mühendisliği
        öğrencisiyim. Web, mobil ve yazılım teknolojileriyle projeler
        geliştirmekten keyif alıyorum.
      </motion.p>
      <div className="flex gap-4 mb-8">
        <motion.a
          href="https://github.com/Zeko50"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 text-2xl transition"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/zekeriya-deniz-uğurlu-99816a258"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 text-2xl transition"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/deniz.ugurlu50"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 text-2xl transition"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="mailto:zekeriyadenizugurlu@gmail.com"
          className="text-indigo-600 hover:text-indigo-800 text-2xl transition"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, delay: 0.3 }}
      >
        <Link
          to="/project"
          className="relative bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-700 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-105 flex items-center"
        >
          Projelerime Göz At
          <FiArrowRight className="inline ml-2" />
        </Link>
      </motion.div>
      <motion.a
        href="/pdfs/ZekeriyaDenizUgurluCV.pdf"
        download
        className="relative mt-2 mb-10 md:mb-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-700 hover:from-pink-500 hover:to-yellow-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg transition duration-300 hover:scale-105"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.7, delay: 0.3 }}
      >
        CV İndir
        <FiArrowDown className="inline ml-2" />
        <span className="animate-ping absolute right-0 top-0 w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-700"></span>
      </motion.a>
    </section>
  );
}

export default Hero;
