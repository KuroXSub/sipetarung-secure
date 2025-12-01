import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-50">
      
      {/* Container Utama */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        
        {/* Header / Banner */}
        <div className="bg-blue-600 p-6 text-center">
          <h1 className="text-2xl font-bold text-white">Sistem Secure</h1>
          <p className="text-blue-100 text-sm mt-1">Versi Perbaikan Keamanan (Next.js 16)</p>
        </div>

        {/* Content Body */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Status Keamanan</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium border border-green-200">
                ✅ CSP Active
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium border border-green-200">
                ✅ Anti-Clickjacking
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium border border-green-200">
                ✅ HSTS Ready
              </span>
            </div>
          </div>

          <hr className="my-6 border-gray-100" />

          {/* Form Input */}
          <form className="space-y-4" action={async () => {
            "use server"
            console.log("Form submitted secure");
          }}>
            <div>
              <label htmlFor="userText" className="block text-sm font-medium text-gray-700 mb-1">
                Uji Input Teks
              </label>
              <input
                type="text"
                id="userText"
                name="userText"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-800 placeholder-gray-400"
                placeholder="Masukkan teks percobaan..."
              />
              <p className="text-xs text-gray-500 mt-1">
                *Input ini aman dari XSS & CSRF.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Simpan Data
            </button>
          </form>
        </div>

        {/* Footer Kecil */}
        <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Sistem Informasi &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </main>
  );
}