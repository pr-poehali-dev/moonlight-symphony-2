export default function HeroTextOverlay() {
  return (
    <div className="absolute top-28 md:top-40 left-8 z-10 max-w-md">
      <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1 mb-4">
        <span className="text-primary font-mono text-xs md:text-sm">Android • FS19 • Бесплатно</span>
      </div>
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "4px white",
          paintOrder: "stroke fill",
        }}
      >
        GIANTS
        <br />
        EDITOR
      </h1>
      <p className="text-foreground font-mono text-sm md:text-base max-w-xs tracking-wide">
        Просматривай и редактируй
        <br />
        моды FS19 прямо с телефона
      </p>
    </div>
  )
}
