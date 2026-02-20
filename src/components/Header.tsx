import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Icon name="Tractor" size={28} className="text-primary" />
          <span className="text-foreground font-bold text-lg" style={{ fontFamily: "var(--font-montserrat)" }}>
            FS19 Mod Editor
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#features">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              Скачать APK <Icon name="Download" size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
