import Link from "next/link";
import { courses } from "@/lib/data";
import { notFound } from "next/navigation";

const curriculum = [
  {
    section: "Wprowadzenie",
    lessons: [
      { title: "Witaj w kursie!", duration: "5:20", free: true },
      { title: "Co będziemy omawiać?", duration: "8:45", free: true },
      { title: "Instalacja środowiska", duration: "12:10", free: false },
    ],
  },
  {
    section: "Podstawy",
    lessons: [
      { title: "Pierwsze kroki", duration: "15:30", free: false },
      { title: "Kluczowe koncepcje", duration: "20:15", free: false },
      { title: "Praktyczne ćwiczenia", duration: "18:40", free: false },
    ],
  },
  {
    section: "Zaawansowane zagadnienia",
    lessons: [
      { title: "Wzorce projektowe", duration: "25:00", free: false },
      { title: "Optymalizacja", duration: "22:30", free: false },
      { title: "Projekt końcowy", duration: "45:00", free: false },
    ],
  },
];

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) notFound();

  return (
    <div>
      {/* Hero */}
      <div className={`${course.image} text-white`}>
        <div className="bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3 text-sm">
                <Link href="/courses" className="hover:underline opacity-80">Kursy</Link>
                <span className="opacity-60">›</span>
                <span className="opacity-80">{course.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{course.title}</h1>
              <p className="text-lg opacity-90 mb-5">{course.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm mb-5">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className={`w-4 h-4 ${s <= Math.round(course.rating) ? "text-yellow-400" : "text-white/30"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <strong>{course.rating}</strong>
                  <span className="opacity-70">({new Intl.NumberFormat("pl").format(course.reviews)} ocen)</span>
                </div>
                <span>{new Intl.NumberFormat("pl").format(course.students)} studentów</span>
                <span>Poziom: <strong>{course.level}</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {course.instructorAvatar}
                </div>
                <span>Prowadzi: <strong>{course.instructor}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* What you'll learn */}
            <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Czego się nauczysz?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Rozumieć kluczowe koncepcje i wzorce",
                  "Budować prawdziwe projekty od zera",
                  "Stosować najlepsze praktyki branżowe",
                  "Debugować i optymalizować kod",
                  "Pracować z popularnymi narzędziami",
                  "Przygotować się do rozmów o pracę",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Program kursu</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>{curriculum.reduce((a, s) => a + s.lessons.length, 0)} lekcji</span>
                <span>·</span>
                <span>{course.duration} łącznie</span>
              </div>
              <div className="space-y-3">
                {curriculum.map((section) => (
                  <details key={section.section} className="bg-white rounded-xl border border-gray-100 overflow-hidden" open>
                    <summary className="px-5 py-4 font-semibold text-gray-900 cursor-pointer flex items-center justify-between list-none">
                      <span>{section.section}</span>
                      <span className="text-sm text-gray-500 font-normal">{section.lessons.length} lekcji</span>
                    </summary>
                    <div className="border-t border-gray-100">
                      {section.lessons.map((lesson) => (
                        <div
                          key={lesson.title}
                          className="flex items-center justify-between px-5 py-3 text-sm hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {lesson.free ? (
                              <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            )}
                            <span className={lesson.free ? "text-indigo-600 font-medium" : "text-gray-700"}>
                              {lesson.title}
                            </span>
                            {lesson.free && (
                              <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded">Podgląd</span>
                            )}
                          </div>
                          <span className="text-gray-400">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">O instruktorze</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-xl font-bold text-indigo-700 flex-shrink-0">
                  {course.instructorAvatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{course.instructor}</h3>
                  <p className="text-indigo-600 text-sm mb-3">Ekspert w dziedzinie {course.category}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Doświadczony specjalista z wieloletnim stażem w branży. Prowadzi szkolenia i warsztaty dla firm z sektora technologicznego. Pasjonuje się dzieleniem wiedzy i rozwojem innych.
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span>⭐ {course.rating} ocena</span>
                    <span>👥 {new Intl.NumberFormat("pl").format(course.students)} studentów</span>
                    <span>🎓 3 kursy</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky buy card */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sticky top-24">
              <div className={`h-40 ${course.image} rounded-xl mb-5 flex items-center justify-center`}>
                <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="text-3xl font-extrabold text-gray-900 mb-1">{course.price} zł</div>
              <p className="text-sm text-gray-400 mb-4">Dożywotni dostęp · Certyfikat ukończenia</p>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors mb-3">
                Zapisz się na kurs
              </button>
              <button className="w-full border border-gray-200 hover:border-indigo-400 text-gray-700 font-medium py-3 rounded-xl transition-colors">
                Dodaj do listy życzeń
              </button>

              <p className="text-xs text-gray-400 text-center mt-3">30-dniowa gwarancja zwrotu pieniędzy</p>

              <div className="border-t border-gray-100 mt-5 pt-5 space-y-2 text-sm text-gray-600">
                {[
                  { icon: "🎬", text: `${course.duration} materiałów wideo` },
                  { icon: "📝", text: `${course.lessons} lekcji` },
                  { icon: "📱", text: "Dostęp na mobile i desktop" },
                  { icon: "🏆", text: "Certyfikat ukończenia" },
                  { icon: "🔄", text: "Dożywotni dostęp" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {course.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
