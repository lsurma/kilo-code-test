import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { courses, categories, stats } from "@/lib/data";

export default function HomePage() {
  const featuredCourses = courses.filter((c) => c.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              🎓 Platforma e-learningowa #1 w Polsce
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Ucz się od ekspertówwwwwww.<br />
              <span className="text-yellow-300">Rozwijaj się każdego dnia.</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl">
              Ponad 500 kursów online z zakresu programowania, designu, marketingu i biznesu. Ucz się w swoim tempie i zdobywaj certyfikaty uznawane w branży.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/courses"
                className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors text-center text-lg"
              >
                Przeglądaj kursy
              </Link>
              <Link
                href="/dashboard"
                className="border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-center text-lg"
              >
                Moje kursy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-indigo-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Przeglądaj kategorie</h2>
            <p className="text-gray-500 mt-1">Znajdź kursy dopasowane do Twoich zainteresowań</p>
          </div>
          <Link href="/courses" className="text-indigo-600 font-medium hover:underline hidden sm:inline-flex items-center gap-1">
            Wszystkie <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/courses?category=${encodeURIComponent(cat.name)}`}
              className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{cat.count} kursów</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Polecane kursy</h2>
            <p className="text-gray-500 mt-1">Najpopularniejsze kursy wybrane przez naszych ekspertów</p>
          </div>
          <Link href="/courses" className="text-indigo-600 font-medium hover:underline hidden sm:inline-flex items-center gap-1">
            Zobacz wszystkie <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Why LearnHub */}
      <section className="bg-gradient-to-br from-gray-900 to-indigo-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Dlaczego LearnHub?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Uczymy w sposób, który przynosi realne efekty</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Nauka na żądanie", desc: "Ucz się kiedy i gdzie chcesz – na telefonie, tablecie lub komputerze." },
              { icon: "🏆", title: "Certyfikaty", desc: "Zdobywaj certyfikaty uznawane przez pracodawców i branżę." },
              { icon: "👨‍🏫", title: "Eksperci branżowi", desc: "Kurs prowadzą praktycy z wieloletnim doświadczeniem w swoich dziedzinach." },
              { icon: "💬", title: "Społeczność", desc: "Dołącz do tysięcy studentów, zadawaj pytania i ucz się razem." },
              { icon: "📈", title: "Śledzenie postępów", desc: "Monitoruj swoje postępy i zdobywaj odznaki za ukończone moduły." },
              { icon: "🔄", title: "Zawsze aktualne", desc: "Treści są regularnie aktualizowane, by odpowiadać na zmiany w branży." },
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-indigo-600 rounded-3xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Gotowy, żeby zacząć?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
            Dołącz do ponad 50 000 studentów i zacznij swoją przygodę z nauką już dziś.
          </p>
          <Link
            href="/courses"
            className="bg-white text-indigo-700 font-bold px-10 py-4 rounded-xl hover:bg-indigo-50 transition-colors text-lg inline-block"
          >
            Zacznij za darmo
          </Link>
        </div>
      </section>
    </div>
  );
}
