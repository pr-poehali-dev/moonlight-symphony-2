import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="w-full px-6 relative py-[0] mt-28 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-primary text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-primary text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-primary text-xl">+</div>
      <div className="absolute top-16 right-32 text-primary text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-primary text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 max-w-lg mt-8">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Всё для модов FS19.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">*</span>
                <p className="text-sm">Поддержка всех типов модов: техника, инструменты, объекты и скрипты.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">*</span>
                <p className="text-sm">Работает оффлайн — редактируй моды где угодно, без интернета.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">*</span>
                <p className="text-sm">Никакого редактора карт — только моды, быстро и удобно.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center relative">
            <div className="relative flex flex-col items-center gap-4 mt-8">
              <div className="w-32 h-32 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon name="Tractor" size={56} className="text-primary" />
              </div>
              <div className="flex gap-3">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <Icon name="FileCode" size={24} className="text-primary" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <Icon name="Image" size={24} className="text-primary" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact" className="w-full px-6 py-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 border-t border-border mt-16">
          <div className="flex flex-col md:flex-row gap-2 text-center md:text-left">
            <h2 className="text-foreground font-mono text-xl font-bold">Giants Editor FS19</h2>
            <p className="text-foreground font-mono font-normal text-base">Мод-редактор для Android</p>
          </div>

          <a href="#features">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2">
              Скачать APK
              <Icon name="Download" size={20} />
            </button>
          </a>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row">
          <p className="text-muted-foreground text-sm font-mono">2025 FS19 Mod Editor</p>
          <p className="text-muted-foreground text-sm font-mono">poehali.dev</p>
        </div>
      </div>
    </footer>
  )
}
