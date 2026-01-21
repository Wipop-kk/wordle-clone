export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="w-full max-w-125 flex flex-col items-center gap-8">
        {/* Header/Title */}
        <h1 className="text-4xl font-bold text-white tracking-wider">WORDLE</h1>

        {/* game board (Placeholder) */}
        <div className="w-full space-y-2 text-gray-500 flex flex-col items-center">
          Tile board will be here
        </div>

        {/* Optional: Keyboard placeholder */}
        <div className="text-gray-500 text-sm">
          Keyboard will be here
        </div>
      </div>
    </main>
  );
}
