import ArcGalleryHero from "@/components/ArcGalleryHero";
import Icon from "@/components/ui/icon";

const arcImages = [
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/961a8199-435a-416d-a97c-77f92360ae94.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/95909427-17a7-41ce-8080-a7989b136003.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/d3aa2358-5c62-4ab8-bf4e-1213a82ce73d.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/fb354131-ce82-4aa1-8288-acc13d36884a.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/206d23cc-9f9e-4561-bad7-81d01a4d15fd.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/698ff008-2b16-4610-95a3-a93e5db2931c.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/c1570784-981b-4e04-88e8-a5441ec45a58.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/6360cedf-3289-44f5-a712-c0ccf5b9cfd4.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/9267dcc6-1f8b-4417-8c82-ebde09cd0202.jpg",
  "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/c67e7d84-2e1b-4ac8-b6ec-fa1824323aa6.jpg",
];

type SectionCardProps = {
  emoji: string;
  title: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const SectionCard = ({ emoji, title, children, image, imageAlt, reverse = false }: SectionCardProps) => (
  <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-6 bg-white rounded-3xl shadow-md overflow-hidden`}>
    <div className="md:w-2/5 flex-shrink-0">
      <img src={image} alt={imageAlt} className="w-full h-56 md:h-full object-cover" />
    </div>
    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{emoji}</span>
        <h2 className="text-xl md:text-2xl font-bold text-primary">{title}</h2>
      </div>
      <div className="text-foreground/80 text-base md:text-lg leading-relaxed space-y-2">{children}</div>
    </div>
  </div>
);

type FactCardProps = {
  emoji: string;
  text: string;
};

const FactCard = ({ emoji, text }: FactCardProps) => (
  <div className="bg-white rounded-2xl shadow p-5 flex items-start gap-4">
    <span className="text-3xl mt-0.5 flex-shrink-0">{emoji}</span>
    <p className="text-base leading-relaxed text-foreground/80">{text}</p>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">

      {/* ——— HERO: дуга с картинками ——— */}
      <ArcGalleryHero
        images={arcImages}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-10"
      />

      {/* Заголовок */}
      <div className="text-center px-4 -mt-24 md:-mt-32 relative z-20 pb-10">
        <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary font-semibold text-sm mb-4 uppercase tracking-widest">
          Презентация для 3 класса
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-primary mb-3">
          🇸🇪 Швеция
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 max-w-xl mx-auto">
          Удивительная северная страна с викингами, северным сиянием и лосями!
        </p>
      </div>

      {/* ——— ОСНОВНЫЕ РАЗДЕЛЫ ——— */}
      <div className="max-w-4xl mx-auto px-4 space-y-8 pb-20">

        {/* 1. Название */}
        <SectionCard
          emoji="🏷️"
          title="Название страны"
          image="https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/961a8199-435a-416d-a97c-77f92360ae94.jpg"
          imageAlt="Швеция"
        >
          <p>Полное официальное название страны — <strong>Королевство Швеция</strong>.</p>
          <p>На шведском языке — <strong>Sverige</strong> (произносится «Сверьє»).</p>
          <p>Жителей страны называют <strong>шведами</strong>, а их язык — <strong>шведским</strong>.</p>
        </SectionCard>

        {/* 2. Столица */}
        <SectionCard
          emoji="🏛️"
          title="Столица — Стокгольм"
          image="https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/c67e7d84-2e1b-4ac8-b6ec-fa1824323aa6.jpg"
          imageAlt="Стокгольм"
          reverse
        >
          <p>Столица Швеции — <strong>Стокгольм</strong>. Это самый большой город страны.</p>
          <p>Город расположен на <strong>14 островах</strong> — прямо посреди воды!</p>
          <p>В нём живёт около <strong>1 миллиона человек</strong>.</p>
        </SectionCard>

        {/* 3. Расположение */}
        <SectionCard
          emoji="🗺️"
          title="Где находится Швеция?"
          image="https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/d3aa2358-5c62-4ab8-bf4e-1213a82ce73d.jpg"
          imageAlt="Карта Швеции"
        >
          <p>Швеция находится в <strong>Северной Европе</strong>, на Скандинавском полуострове.</p>
          <p>Это одна из самых больших стран Европы — примерно как 8 таких стран, как Беларусь!</p>
          <p>На севере страны почти <strong>полгода длится зима</strong>, а летом солнце не заходит.</p>
        </SectionCard>

        {/* 4. Соседи и моря */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌊</span>
              <h2 className="text-xl md:text-2xl font-bold text-primary">Соседи и моря</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Globe" size={20} className="text-primary" />
                  С кем граничит:
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">🇳🇴 <strong>Норвегия</strong> — на западе</li>
                  <li className="flex items-center gap-2">🇫🇮 <strong>Финляндия</strong> — на востоке</li>
                  <li className="flex items-center gap-2">🇩🇰 <strong>Дания</strong> — на юго-западе</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Waves" size={20} className="text-primary" />
                  Какими морями омывается:
                </h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">💧 <strong>Балтийское море</strong> — на востоке</li>
                  <li className="flex items-center gap-2">💧 <strong>Северное море</strong> — на западе</li>
                  <li className="flex items-center gap-2">💧 <strong>Норвежское море</strong> — на севере</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Глава государства */}
        <SectionCard
          emoji="👑"
          title="Глава государства"
          image="https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/fb354131-ce82-4aa1-8288-acc13d36884a.jpg"
          imageAlt="Король Швеции"
          reverse
        >
          <p>Швеция — это <strong>конституционная монархия</strong>. Это значит, страной управляет <strong>король</strong>!</p>
          <p>Сегодня король Швеции — <strong>Карл XVI Густав</strong>. Он правит с 1973 года.</p>
          <p>Также в Швеции есть <strong>премьер-министр</strong>, который руководит правительством.</p>
        </SectionCard>

        {/* 6. Флаг */}
        <SectionCard
          emoji="🚩"
          title="Государственный флаг"
          image="https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/95909427-17a7-41ce-8080-a7989b136003.jpg"
          imageAlt="Флаг Швеции"
        >
          <p>Флаг Швеции — <strong>синий с жёлтым крестом</strong>.</p>
          <p><strong>Синий цвет</strong> символизирует небо и море.</p>
          <p><strong>Жёлтый крест</strong> — символ христианства и королевства.</p>
          <p>Этому флагу уже больше <strong>500 лет!</strong></p>
        </SectionCard>

        {/* 7. Язык */}
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🗣️</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary">Государственный язык</h2>
          </div>
          <p className="text-foreground/80 text-base md:text-lg mb-5">
            Государственный язык — <strong>шведский</strong>. На нём говорят почти 10 миллионов человек в мире.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { ru: "Привет", sv: "Hej 👋", note: "Хей" },
              { ru: "Спасибо", sv: "Tack 🙏", note: "Так" },
              { ru: "Пожалуйста", sv: "Varsågod ✨", note: "Варсогуд" },
              { ru: "Да / Нет", sv: "Ja / Nej", note: "Я / Ней" },
            ].map((word) => (
              <div key={word.ru} className="bg-primary/5 border border-primary/10 rounded-2xl p-4 text-center">
                <div className="text-sm text-foreground/50 mb-1">{word.ru}</div>
                <div className="font-bold text-primary text-lg">{word.sv}</div>
                <div className="text-xs text-foreground/40 mt-1">«{word.note}»</div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Интересные факты */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">✨</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary">Интересные факты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FactCard emoji="🌌" text="В Швеции бывает Северное сияние — разноцветные огни на ночном небе. Это очень красивое природное явление!" />
            <FactCard emoji="🫎" text="В Швеции живёт очень много лосей — их здесь около 300 тысяч! Лось — символ страны." />
            <FactCard emoji="🪆" text="Знаменитые игрушки LEGO придуманы в соседней Дании, а вот IKEA — это шведская компания!" />
            <FactCard emoji="☀️" text="Летом на севере Швеции солнце не заходит несколько недель подряд — это называется «белые ночи»." />
            <FactCard emoji="🍪" text="В Швеции есть традиция «фика» — пить кофе с булочками и разговаривать с друзьями. Это делают каждый день!" />
            <FactCard emoji="🌲" text="Швеция покрыта лесами на 70%! Здесь очень любят природу и охраняют её." />
          </div>
        </div>

        {/* 9. Достопримечательности */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">🏰</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary">Достопримечательности</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                img: "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/c67e7d84-2e1b-4ac8-b6ec-fa1824323aa6.jpg",
                name: "Гамла Стан",
                desc: "Старый город в Стокгольме с разноцветными домами и узкими улочками. Ему почти 800 лет!",
              },
              {
                img: "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/c1570784-981b-4e04-88e8-a5441ec45a58.jpg",
                name: "Музей Васа",
                desc: "Здесь хранится настоящий корабль XVII века, который пролежал на дне моря 333 года!",
              },
              {
                img: "https://cdn.poehali.dev/projects/7c72a99d-80a3-46e7-a89a-213f7463c987/files/206d23cc-9f9e-4561-bad7-81d01a4d15fd.jpg",
                name: "Северное сияние",
                desc: "На севере Швеции можно увидеть волшебные разноцветные огни на небе — зелёные, фиолетовые, розовые.",
              },
            ].map((place) => (
              <div key={place.name} className="bg-white rounded-2xl shadow overflow-hidden">
                <img src={place.img} alt={place.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-1">{place.name}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10. Особенности страны */}
        <div className="bg-gradient-to-br from-primary/10 to-yellow-50 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🌟</span>
            <h2 className="text-xl md:text-2xl font-bold text-primary">Особенности Швеции</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🏅", title: "Нобелевская премия", text: "Знаменитая Нобелевская премия названа в честь шведского учёного Альфреда Нобеля. Каждый год лучшим учёным мира вручают медаль и диплом именно в Стокгольме." },
              { icon: "🎵", title: "Группа ABBA", text: "Знаменитая группа ABBA — шведская! Их музыку знают и любят во всём мире. В Стокгольме есть целый музей, посвящённый этой группе." },
              { icon: "📚", title: "Карлсон и Пеппи", text: "Любимые герои детских книг — Карлсон и Пеппи Длинныйчулок — придуманы шведской писательницей Астрид Линдгрен!" },
              { icon: "♻️", title: "Забота о природе", text: "Шведы очень любят природу. Они перерабатывают почти весь мусор и стараются не загрязнять окружающую среду." },
            ].map((item) => (
              <div key={item.title} className="bg-white/80 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Финальный баннер */}
        <div className="text-center bg-primary rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-5xl mb-4">🇸🇪</div>
          <h2 className="text-2xl md:text-3xl font-black text-yellow-300 mb-3">Швеция — удивительная страна!</h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Страна лосей, северного сияния, вкусных фрикаделек и любимых детских героев — Карлсона и Пеппи!
          </p>
        </div>

      </div>
    </main>
  );
};

export default Index;
