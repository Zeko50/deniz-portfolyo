import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaPython,
  FaHtml5,
  FaDatabase,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiDotnet } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="min-h-screen w-full bg-gradient-to-tl from-indigo-50 to-fuchsia-100 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden rounded-3xl mt-2.5 mb-2.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* SVG arka plan dalga */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg
          className="w-full h-32"
          viewBox="0 10 1440 250"
          preserveAspectRatio="none"
        >
          <path
            fill="#a5b4fc"
            fillOpacity="0.5"
            d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Profil Kartı */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-4 md:p-7 flex flex-col items-center justify-center relative z-10 w-full md:w-auto max-w-sm mx-auto mb-8 md:mb-0"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/download.jpg"
            alt="Profil"
            className="w-20 h-20 md:w-25 md:h-30 rounded-full border-4 border-indigo-400 mb-2"
          />
          <h2 className="text-lg font-bold text-indigo-700">
            Zekeriya Deniz Uğurlu
          </h2>
          <div className="flex gap-2 text-indigo-600 mt-2">
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
        </motion.div>
        <motion.div
          className="flex flex-col lg:flex-row items-start justify-center w-full gap-6 lg:gap-12 mt-8 lg:mt-16"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Timeline (Eğitim + İş Geçmişi) */}
          <div className="border-l-4 border-indigo-300 pl-4 md:pl-8 w-full lg:w-auto min-w-[250px] flex flex-col items-center">
            {/* Eğitim */}
            <div className="relative flex items-center justify-center text-xl font-bold text-blue-900 mb-4 w-full group">
              <span className="relative">
                Eğitim
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-rose-400 to-indigo-500 rounded-full"></span>
              </span>
            </div>

            <div className="mb-8 flex flex-col items-center text-center w-full">
              <div className="text-indigo-700 font-bold">2022 - Günümüz</div>
              <div className="text-lg font-semibold">
                Bilgisayar Mühendisliği
              </div>
              <div className="text-gray-500 text-sm">
                İstanbul Topkapı Üniversitesi
              </div>
              <div className="text-gray-500 text-sm">GNO: 3,15</div>
            </div>

            <div className="mb-8 flex flex-col items-center text-center w-full">
              <div className="text-indigo-700 font-bold">2022</div>
              <div className="text-lg font-semibold">Lise Mezuniyeti</div>
              <div className="text-gray-500 text-sm">
                Yedikule Anadolu Lisesi
              </div>
            </div>

            {/* İş Geçmişi */}
            <div className="relative flex items-center justify-center text-xl font-bold text-blue-900 mb-4 mt-8 w-full group">
              <span className="relative">
                İş Geçmişi
                <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-rose-400 to-indigo-500 rounded-full"></span>
              </span>
            </div>

            <div className="mb-8 flex flex-col items-center text-center w-full">
              <div className="text-indigo-700 font-bold">2022-2025</div>
              <div className="text-lg font-semibold">Vatan Sürücü Kursu</div>
              <div className="text-gray-500 text-sm">Ofis Memuru</div>
            </div>
          </div>

          {/* Hakkımda Metni */}
          <div className="max-w-2xl w-full text-gray-700 text-base md:text-lg px-4 md:px-6 space-y-4">
            <p className="text-justify">
              Merhaba! Ben Zekeriya Deniz Uğurlu. İstanbul Topkapı Üniversitesi
              Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web ve mobil
              uygulama geliştirme konularında tutkuluyum. React, Flutter, Python
              gibi teknolojilerle projeler geliştirdim.
            </p>

            <p className="text-justify">
              Yapay zeka, makine öğrenimi ve veri bilimi konularına ilgi
              duyuyorum. Yapay Sinir Ağları teknolojileri ile Nesne Tanıma ve
              Görüntü İşleme projeleri üzerinde çalıştım.
            </p>

            <p className="text-justify">
              Windows Form Uygulamaları ve ASP.NET Core ile masaüstü kurs kayıt
              uygulamaları geliştirdim.
            </p>

            <p className="text-justify">
              Aynı zamanda MongoDB, Firebase ve SQL gibi veri tabanı
              teknolojileriyle çalışarak projelerime güçlü veri altyapıları
              kazandırdım.
            </p>

            <p className="text-justify">
              Takım çalışmasına yatkın bir yapım var. Kullanıcı deneyimine önem
              veriyor, sade ve işlevsel arayüzler tasarlamaya özen gösteriyorum.
            </p>

            <p className="text-justify">
              Hedefim; yazılım dünyasında kendimi sürekli geliştirerek hem
              bireysel hem de ekip içerisinde değer üreten bir mühendis olmak.
              Öğrenmeye açık yapım sayesinde yeni teknolojileri hızlıca adapte
              edebiliyor, her gün yeni bir şeyler üretmenin heyecanını
              yaşıyorum.
            </p>
          </div>
          {/* Yetenekler */}
          <div className="flex flex-row flex-wrap lg:flex-col gap-4 md:gap-6 justify-center items-center lg:items-start">
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-blue-400" />
              <span className="mt-2 font-medium">React</span>
            </div>

            <div className="flex flex-col items-center">
              <FaPython className="text-4xl text-green-600" />
              <span className="mt-2 font-medium">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-orange-500" />
              <span className="mt-2 font-medium">HTML/CSS</span>
            </div>
            {/* Tailwind */}
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl text-sky-400" />
              <span className="mt-2 font-medium">Tailwind</span>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center">
              <FaDatabase className="text-4xl text-indigo-500" />
              <span className="mt-2 font-medium">SQL</span>
            </div>
            {/* Flutter */}
            <div className="flex flex-col items-center">
              <SiFlutter className="text-4xl text-blue-500" />
              <span className="mt-2 font-medium">Flutter</span>
            </div>

            {/* .NET */}
            <div className="flex flex-col items-center">
              <SiDotnet className="text-4xl text-indigo-700" />
              <span className="mt-2 font-medium">C# / .NET</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
