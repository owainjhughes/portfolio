import Link from "next/link";
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col font-sans">
          <header className="p-0 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-sm">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-black dark:text-white">
                Owain Hughes
              </h1>
              <nav className="flex gap-8">
                <Link
                  href="/"
                  className="font-medium px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="font-medium px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                  Projects
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 bg-white dark:bg-black">{children}</main>
          <footer className="p-4 text-center text-xs text-gray-400 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
            © {new Date().getFullYear()} Owain Hughes
          </footer>
        </div>
      </body>
    </html>
  );
}