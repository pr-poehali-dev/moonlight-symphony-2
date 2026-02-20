const HERO_BG = "https://cdn.poehali.dev/projects/50e78ae3-c5bd-4307-a25c-13c9259875dc/files/c69b6882-3481-4de6-8e7e-9a3c5114d374.jpg"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background overflow-hidden">
      <img
        src={HERO_BG}
        alt="Farming Simulator 19"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
    </div>
  )
}
