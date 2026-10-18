import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <main className="min-h-screen space-y-2 p-2">
      <div className="flex items-center justify-between rounded-lg bg-surface p-6">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted">Lorem ipsum dolor sit amet.</p>
        </div>
        <ThemeToggle />
      </div>
      <div className="flex flex-wrap gap-4 rounded-lg bg-surface p-6">
        <button type="button" className="rounded-full bg-accent px-6 py-3 font-bold text-white transition-colors hover:bg-accent-hover">
          Lorem ipsum
        </button>
        <div className="w-48 rounded-md bg-elevated p-3 shadow-card transition-colors hover:bg-hover">
          <div className="aspect-square rounded bg-gradient-to-br from-accent to-bg" />
          <p className="mt-2 font-bold">Lorem ipsum</p>
          <p className="text-sm text-muted">Dolor sit amet</p>
        </div>
      </div>
    </main>
  )
}

export default App
