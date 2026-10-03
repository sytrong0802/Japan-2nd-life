export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-4">
      <div className="rounded-[2rem] border border-stone-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">404</p>
        <h1 className="mt-3 text-3xl font-black text-stone-900">Page not found</h1>
        <p className="mt-3 text-base text-stone-600">The page you requested does not exist or has moved.</p>
      </div>
    </main>
  );
}
