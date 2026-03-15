export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 border-t-2 border-[var(--color-neon)] rounded-full animate-spin" />
        <div className="absolute inset-2 border-r-2 border-white/50 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        <div className="absolute inset-4 border-b-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '2s' }} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Loading</span>
      </div>
    </div>
  );
}
