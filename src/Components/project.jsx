import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Gerçek Zamanlı Nesne Tanıma Aracı",
      description:
        "Bu projede, Raspberry Pi 5 kullanılmış ve gerçek zamanlı nesne tanıma yapmak amacıyla bir derin öğrenme modeli geliştirilmiştir. Projede, ResNet gibi gerçek zamanlı nesne tanıma algoritmalarından yararlanılmıştır. Görüntülerdeki nesneler yüksek doğruluk oranıyla tespit edilmekte ve kullanıcıya görsel ya da sesli bildirimlerle sunulmaktadır",
      technologies: ["Python", "ResNet50", "CNN", "Flask "],
      image: "/images/araba.jpg",
      Link: "/pdfs/NesneTanımaRapor.pdf",
      YoutubeLink: "https://www.youtube.com/watch?v=d3Ls1BCTmAE",
    },
    {
      id: 2,
      title: "GYM365 Mobil Uygulama",
      description:
        "Gym365, kullanıcıların haftalık antrenman programlarını kolayca oluşturabileceği ve takip edebileceği bir mobil uygulamadır. Farklı kas gruplarına yönelik egzersizler, detaylı açıklamalarla sunulur. Takvim sistemi sayesinde kullanıcılar, seçtikleri egzersizleri haftalık planlarına ekleyebilir ve ilerlemelerini rahatça takip edebilir. ",
      technologies: ["Flutter", "Dart", "SQLite", "Firebase"],
      image: "/images/gym365z.png",
      Link: "",
      YoutubeLink: "https://www.youtube.com/watch?v=y3n8fahGqN0&t=12s",
    },
    {
      id: 3,
      title: "MLP ile Beyin Tümör Tespiti",
      description:
        "Bu projede, beyin MR görüntülerinden tümör tespiti yapmak amacıyla bir sınıflandırma modeli  geliştirilmiştir. Model, MLP kullanılarak eğitilmiştir. ",
      technologies: ["Python", "TensorFlow", "Keras"],
      image: "/images/beyintespit.png",
      Link: "/pdfs/Beyin Tümör Tespiti Rapor.pdf",
      YoutubeLink: "https://www.youtube.com/watch?v=AuiPxmrUCsk",
    },
    {
      id: 4,
      title: "Sürücü Kursu Web Sitesi",
      description:
        "Sürücü kursu web sitesidir.Sitenin anasayfasında hakkımızda, hizmetlerimiz , başvuru ve iletişim kısımları bulunmaktadır. Hakkımızda ve hizmetlerimiz kısmında sürücü kursu hakkında bilgilendirme yapılmaktadır.  Kursiyer girişi ve Admin girişi olarak iki adet panel bulunmaktadır. Admin kullanıcı, siteyi kullanabilmesi için kursiyer yetkilendirmesi yapmalıdır. Kursiyer girişi kısmından sürücü kursuna kayıtlı kursiyerler ders çalışabilir, test çözebilir ve eğitim videoları izleyebilmektedir.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MongoDB"],
      image: "/images/kurssite.png",
      Link: "/pdfs/Sürücü Kursu Web Sitesi Rapor.pdf",
      YoutubeLink: "",
    },

    {
      id: 5,
      title: "Sürücü Kursu Kayıt Sistemi",
      description:
        " Bu program sürücü kursları için yapılmıştır. Sürücü kursları bu program sayesinde Günlük yapılacak işlemleri bir tabloda ekleyebilir, silebilir.  Aday ekleme işlemleri yapabilir. Eklediği adayların listelerine ulaşabilir, güncelleyebilir ve silebilir. Aynı şekilde personel işlemleri yapabilir. Personel ekleme, silme, güncelleme arama gibi işler yapabilir. Sürücü kursları için adayların bilgilerini saklayabileceği bir programdır. MongoDB kullanılmıştır.",
      technologies: [".NET", "C#", "MongoDB"],
      image: "/images/kurskayıt2.png",
      Link: "/pdfs/Sürücü Kursu Kayıt Sistemi Rapor.pdf",
      YoutubeLink: "",
    },

    {
      id: 6,
      title: "Araç Kiralama Sistemi",
      description:
        "Araç Kiralama Sistemi, kullanıcıların araç kiralama işlemlerini kolayca gerçekleştirebileceği bir platformdur. Kullanıcılar, mevcut araçları görüntüleyebilir, rezervasyon yapabilir ve kiralama sürelerini yönetebilirler. Admin paneli sayesinde yöneticiler, araç ekleme, silme ve güncelleme işlemlerini gerçekleştirebilir. ",
      technologies: [".NET", "C#", "MSSQL"],
      image: "/images/arackiralama.png",
      Link: "/pdfs/Araç Kiralama Rapor.pdf",
      YoutubeLink: "",
    },
  ];

  const makale = [
    {
      id: 1,
      title: "Sağlık Hizmetleri ve Yönetiminde Yapay Zeka",
      description:
        "Bu makale, sağlık hizmetleri ve yönetiminde yapay zekanın gün geçtikçe artan rolünü ve bu teknolojinin sağlık alanında kullanılmasının oluşturduğu kolaylıklar ve zorlukları incelemektedir. Özellikle hastalıkları teşhis etme, kişiye özgü tedavi planları oluşturma, verileri analiz etme, verimliliği arttırma gibi alanlarda Yapay Zeka teknolojilerini kullanmanın getirdiği avantajları konu edinmektedir. Yapay zeka, büyük veri kümelerini hızlıca analiz ederek teşhis ve tedavi sürecinde hekimlere doğru karar verme konusunda yardımcı olmakta ve sağlık çalışanlarının iş yükünü hafifletmektedir.",
      image: "/images/saglık.jpg",
      dosyaadı: "/pdfs/Sağlık Hizmetleri ve Yönetiminde Yapay Zeka.pdf",
    },
    {
      id: 2,
      title: "Biyometrik Ödeme Sistemleri",
      description:
        "Bu makale, son yıllarda finansal teknolojiler alanında hızla öne çıkan biyometrik ödeme sistemlerinin kapsamlı bir incelemesini sunmaktadır. Parmak izi tanıma, yüz tanıma ve iris tarama gibi biyometrik kimlik doğrulama yöntemleri, geleneksel şifre ve kart tabanlı sistemlerin yerini giderek daha fazla almakta ve hem güvenlik hem de kullanıcı deneyimi açısından önemli avantajlar sunmaktadır. Makale, biyometrik teknolojilerin tanımını, geçmişini, mevcut uygulamalarını, teknik altyapısını, güvenlik ve gizlilik yönlerini, kullanıcı kabulünü ve ilgili zorlukları ele almaktadır. ",
      image: "/images/odeme.png",
      dosyaadı: "/pdfs/Biyometrik Ödeme Sistemleri.pdf",
    },
  ];

  return (
    <motion.section
      className="min-h-screen w-full bg-gradient-to-br from-indigo-50 to-fuchsia-100 px-4 py-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dekoratif SVG */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#a5b4fc"
            fillOpacity="0.2"
            d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-900"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projelerim
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.Link && (
                    <a
                      href={project.Link}
                      download
                      className="text-white text-2xl hover:text-indigo-400 transition-colors"
                    >
                      <FiDownload />
                    </a>
                  )}
                  {project.YoutubeLink && (
                    <a
                      href={project.YoutubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-indigo-400 transition-colors"
                    >
                      <FaYoutube />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-900"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Makaleler
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {makale.map((makale, index) => (
            <motion.div
              key={makale.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                <img
                  src={makale.image}
                  alt={makale.title}
                  className="w-full h-53 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={makale.dosyaadı}
                    download
                    className="text-white text-2xl hover:text-indigo-400 transition-colors"
                  >
                    <FiDownload />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  {makale.title}
                </h3>
                <p className="text-gray-600 mb-4">{makale.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
