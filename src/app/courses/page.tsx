import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";
import { courses, categories } from "@/lib/data";

export default function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; level?: string; q?: string }>;
}) {
  return <CoursesContent searchParams={searchParams} />;
}

async function CoursesContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; level?: string; q?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;
  const activeLevel = params.level;
  const query = params.q?.toLowerCase();

  const filtered = courses.filter((c) => {
    if (activeCategory && c.category !== activeCategory) return false;
    if (activeLevel && c.level !== activeLevel) return false;
    if (query && !c.title.toLowerCase().includes(query) && !c.description.toLowerCase().includes(query)) return false;
    return true;
  });

  const levels = ["Początkujący", "Średniozaawansowany", "Zaawansowany"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Wszystkie kursy</h1>
        <p className="text-gray-500 mt-1">Odkryj {courses.length} kursów i zacznij naukę już dziś</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-4">Filtry</h2>

            {/* Search */}
            <form method="GET" className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Szukaj</label>
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  defaultValue={query}
                  placeholder="Nazwa kursu..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm pr-9 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="absolute right-2 top-2.5 text-gray-400 hover:text-indigo-600">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Kategoria</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/courses"
                    className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${!activeCategory ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    Wszystkie
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={`/courses?category=${encodeURIComponent(cat.name)}`}
                      className={`flex items-center justify-between px-2 py-1.5 rounded-lg text-sm transition-colors ${activeCategory === cat.name ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                    >
                      <span>{cat.icon} {cat.name}</span>
                      <span className="text-xs text-gray-400">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Level */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Poziom</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href={activeCategory ? `/courses?category=${encodeURIComponent(activeCategory)}` : "/courses"}
                    className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${!activeLevel ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    Wszystkie poziomy
                  </Link>
                </li>
                {levels.map((level) => (
                  <li key={level}>
                    <Link
                      href={`/courses?${activeCategory ? `category=${encodeURIComponent(activeCategory)}&` : ""}level=${encodeURIComponent(level)}`}
                      className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${activeLevel === level ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                    >
                      {level}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Course grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Znaleziono <strong>{filtered.length}</strong> kursów
            </p>
            <select className="border border-gray-200 rounded-lg text-sm px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white">
              <option>Sortuj: popularność</option>
              <option>Sortuj: cena rosnąco</option>
              <option>Sortuj: cena malejąco</option>
              <option>Sortuj: ocena</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Brak wyników</h3>
              <p className="text-gray-500">Spróbuj zmienić filtry lub wyszukaj inną frazę.</p>
              <Link href="/courses" className="mt-4 inline-block text-indigo-600 font-medium hover:underline">Wyczyść filtry</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
