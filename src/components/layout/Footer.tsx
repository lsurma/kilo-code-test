import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">LearnHub</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Platforma e-learningowa dla każdego. Ucz się w swoim tempie, zdobywaj certyfikaty i rozwijaj swoje umiejętności.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Platforma</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-white transition-colors">Wszystkie kursy</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Certyfikaty</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Instruktorzy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Wsparcie</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Centrum pomocy</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Polityka prywatności</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Regulamin</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} LearnHub. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
