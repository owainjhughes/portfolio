import Navigation from '@/components/navigation';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="min-h-screen flex flex-col font-sans">
          <header className="fixed top-0 left-0 right-0 z-50 p-0 border-b border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-6">
              <h1 className="text-2xl font-extrabold tracking-tight text-black dark:text-white">
                Owain Hughes
              </h1>
              <Navigation />
            </div>
          </header>
          <main className="flex-1 bg-white dark:bg-black pt-20">{children}</main>
          <footer className="p-4 text-center text-xs text-gray-400 border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
            © {new Date().getFullYear()} Owain Hughes
          </footer>
        </div>
      </body>
    </html>
  );
}