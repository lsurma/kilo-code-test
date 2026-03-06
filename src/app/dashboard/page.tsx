import Link from "next/link";
import { courses } from "@/lib/data";

const enrolledCourses = [
  { ...courses[0], progress: 65, lastLesson: "Hooks – useEffect" },
  { ...courses[1], progress: 30, lastLesson: "Pandas DataFrames" },
  { ...courses[2], progress: 90, lastLesson: "Prototypowanie w Figma" },
];

const achievements = [
  { icon: "🔥", label: "7-dniowa passa", desc: "Uczysz się 7 dni z rzędu" },
  { icon: "⭐", label: "Pierwsza lekcja", desc: "Ukończyłeś pierwszą lekcję" },
  { icon: "📚", label: "Ambitny student", desc: "Zapiszałeś się na 3 kursy" },
  { icon: "🏆", label: "Certyfikat", desc: "Zdobyłeś pierwszy certyfikat" },
];

const recentActivity = [
  { action: "Ukończyłeś lekcję", item: "useState – zarządzanie stanem", time: "2 godz. temu", icon: "✅" },
  { action: "Dodałeś do listy", item: "AWS Cloud Practitioner", time: "wczoraj", icon: "❤️" },
  { action: "Ukończyłeś lekcję", item: "Pandas – podstawy", time: "wczoraj", icon: "✅" },
  { action: "Zdobyłeś odznakę", item: "7-dniowa passa nauki", time: "3 dni temu", icon: "🔥" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Cześć, Jan! 👋</h1>
        <p className="text-gray-500 mt-1">Kontynuuj naukę tam, gdzie skończyłeś.</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Zapisanych kursów", value: "3", icon: "📚", color: "bg-blue-50 text-blue-600" },
          { label: "Ukończone lekcje", value: "47", icon: "✅", color: "bg-green-50 text-green-600" },
          { label: "Czas nauki (godz.)", value: "28", icon: "⏱️", color: "bg-purple-50 text-purple-600" },
          { label: "Certyfikaty", value: "1", icon: "🏆", color: "bg-yellow-50 text-yellow-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center text-xl mb-3`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My courses */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Moje kursy</h2>
            <Link href="/courses" className="text-indigo-600 text-sm font-medium hover:underline">
              Odkryj więcej →
            </Link>
          </div>

          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl ${course.image} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">Ostatnia lekcja: {course.lastLesson}</p>
                    </div>
                    <span className="text-sm font-bold text-indigo-600 flex-shrink-0">{course.progress}%</span>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">
                        {Math.round(course.lessons * course.progress / 100)} / {course.lessons} lekcji
                      </span>
                      <Link
                        href={`/courses/${course.id}`}
                        className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                      >
                        Kontynuuj →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Learning streak */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🔥</span>
              <h3 className="font-bold text-lg">7-dniowa passa!</h3>
            </div>
            <p className="text-indigo-100 text-sm">Uczysz się każdego dnia. Tak trzymaj!</p>
            <div className="flex gap-1.5 mt-4">
              {["Pn","Wt","Śr","Cz","Pt","So","Nd"].map((day, i) => (
                <div key={day} className="flex-1 text-center">
                  <div className={`w-full aspect-square rounded-lg mb-1 flex items-center justify-center ${i < 7 ? "bg-white/25" : "bg-white/10"}`}>
                    {i < 7 && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
                  </div>
                  <span className="text-xs text-indigo-200">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4">Odznaki</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div key={a.label} className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-1">{a.icon}</div>
                  <div className="text-xs font-semibold text-gray-900">{a.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4">Ostatnia aktywność</h3>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{item.action}:</span>{" "}
                      <span className="text-gray-600 truncate">{item.item}</span>
                    </p>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
