import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const APP_SCREENSHOT = "https://cdn.poehali.dev/projects/50e78ae3-c5bd-4307-a25c-13c9259875dc/files/09b950fb-3300-4364-b7f4-b53b9a5a2dc1.jpg"

const features = [
  {
    icon: "Eye" as const,
    title: "Просмотр модов",
    desc: "Открывай .i3d, .xml и текстуры прямо на телефоне. Удобный превью без ПК.",
  },
  {
    icon: "FileEdit" as const,
    title: "Редактирование XML",
    desc: "Встроенный редактор XML с подсветкой синтаксиса. Меняй параметры техники на лету.",
  },
  {
    icon: "FolderTree" as const,
    title: "Файловый менеджер",
    desc: "Навигация по структуре мода. Быстрый доступ к нужным файлам и папкам.",
  },
  {
    icon: "Settings" as const,
    title: "Настройка техники",
    desc: "Редактируй мощность, скорость, ёмкость и другие параметры транспорта.",
  },
  {
    icon: "Image" as const,
    title: "Просмотр текстур",
    desc: "Встроенный просмотрщик DDS и PNG текстур. Проверяй скины без конвертации.",
  },
  {
    icon: "Share2" as const,
    title: "Экспорт и шаринг",
    desc: "Делись готовыми модами напрямую из приложения. Поддержка ZIP-архивов.",
  },
]

const steps = [
  {
    num: "01",
    icon: "Download" as const,
    title: "Скачай APK",
    desc: "Загрузи установочный файл на своё Android-устройство.",
  },
  {
    num: "02",
    icon: "FolderOpen" as const,
    title: "Открой мод",
    desc: "Выбери папку с модом FS19 или ZIP-архив на устройстве.",
  },
  {
    num: "03",
    icon: "FileEdit" as const,
    title: "Редактируй",
    desc: "Меняй XML-параметры, просматривай текстуры и структуру мода.",
  },
  {
    num: "04",
    icon: "Save" as const,
    title: "Сохрани и играй",
    desc: "Сохрани изменения и закинь мод в игру — готово!",
  },
]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          id="features"
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-16">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-1">
                <h2
                  className="text-foreground text-3xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Мод-редактор
                  <span className="text-primary"> у тебя в кармане</span>
                </h2>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed max-w-lg">
                  Просматривай структуру модов, редактируй XML-файлы и настраивай параметры техники
                  Farming Simulator 19 — всё это прямо с Android-устройства.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={APP_SCREENSHOT}
                  alt="FS19 Mod Editor интерфейс"
                  className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-border shadow-2xl shadow-primary/10"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-background/50 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                      <Icon name={f.icon} size={20} className="text-primary" />
                    </div>
                    <h3 className="text-foreground font-mono text-sm font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-0">
          <h2
            className="text-foreground text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Как <span className="text-primary">пользоваться</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm text-center mb-12 max-w-md mx-auto">
            Четыре простых шага — и ты редактируешь моды прямо с телефона
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full">
                  <span className="text-primary/20 font-bold text-5xl absolute top-4 right-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {s.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                    <Icon name={s.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-mono text-base font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-mono text-xs leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" size={20} className="text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20 px-4 md:px-0">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2
                  className="text-foreground text-2xl md:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Системные требования
                </h2>
                <p className="text-muted-foreground font-mono text-sm">
                  Приложение работает на большинстве Android-устройств
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Smartphone" size={18} className="text-primary" />
                  <div>
                    <p className="text-foreground font-mono text-xs font-semibold">Android</p>
                    <p className="text-muted-foreground font-mono text-xs">6.0+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Cpu" size={18} className="text-primary" />
                  <div>
                    <p className="text-foreground font-mono text-xs font-semibold">RAM</p>
                    <p className="text-muted-foreground font-mono text-xs">2 ГБ+</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="HardDrive" size={18} className="text-primary" />
                  <div>
                    <p className="text-foreground font-mono text-xs font-semibold">Место</p>
                    <p className="text-muted-foreground font-mono text-xs">50 МБ</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Wifi" size={18} className="text-primary" />
                  <div>
                    <p className="text-foreground font-mono text-xs font-semibold">Интернет</p>
                    <p className="text-muted-foreground font-mono text-xs">Не нужен</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
