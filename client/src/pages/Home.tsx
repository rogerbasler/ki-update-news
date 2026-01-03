import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Play, Pause, ExternalLink, Calendar, Github } from "lucide-react";
import { useState, useRef } from "react";

// News Data (Static for now, but structured for easy updates)
const NEWS_DATA = {
  date: "3. Januar 2026",
  week: "KW 01/2026",
  categories: [
    {
      id: "news-week",
      title: "KI NEWS DER WOCHE",
      emoji: "🧠",
      items: [
        {
          title: "OpenAI's strategische Neuausrichtung auf Audio und Hardware",
          date: "2. Januar 2026",
          source: "TechCrunch",
          url: "#",
          summary: "OpenAI kündigt überraschend eine neue Hardware-Sparte an und fokussiert sich stärker auf Audio-Modelle. Analysten sehen darin einen direkten Angriff auf bestehende Smart-Speaker-Märkte."
        },
        {
          title: "Durchbruch bei Chip-Technologie und Transformer-Architektur",
          date: "1. Januar 2026",
          source: "heise.de",
          url: "#",
          summary: "Forscher haben eine neue Chip-Architektur vorgestellt, die Transformer-Modelle bis zu 50% effizienter ausführen kann. Dies könnte die Kosten für KI-Inferenz drastisch senken."
        },
        {
          title: "Meta übernimmt KI-Startup Manus",
          date: "31. Dezember 2025",
          source: "t3n",
          url: "#",
          summary: "In einem Milliarden-Deal sichert sich Meta die Technologie von Manus. Experten vermuten, dass die Agenten-Technologie direkt in WhatsApp und Instagram integriert wird."
        }
      ]
    },
    {
      id: "tools-startups",
      title: "KI Tools, KI Startups & KI News",
      emoji: "🚀",
      items: [
        {
          title: "Alibaba's Qwen-Image-2512 fordert Google heraus",
          date: "2. Januar 2026",
          source: "t3n",
          url: "#",
          summary: "Das neue Bildmodell von Alibaba übertrifft in ersten Benchmarks die Konkurrenz von Google und Midjourney, besonders bei der Textdarstellung."
        },
        {
          title: "Adobe Firefly und NVIDIA GPUs als Kreativ-Booster",
          date: "30. Dezember 2025",
          source: "Handelsblatt",
          url: "#",
          summary: "Adobe integriert neue NVIDIA-gestützte Funktionen, die Echtzeit-Generierung von Assets in 4K ermöglichen."
        }
      ]
    },
    {
      id: "regulations",
      title: "Regulatorien und Ethik",
      emoji: "🏛️",
      items: [
        {
          title: "China verschärft KI-Regulierung",
          date: "29. Dezember 2025",
          source: "Reuters",
          url: "#",
          summary: "Neue Gesetze in China verlangen eine strikte Kennzeichnung von KI-generierten Inhalten und setzen hohe Hürden für den Export von Algorithmen."
        },
        {
          title: "Instagram's neuer Ansatz gegen Fake-Bilder",
          date: "2. Januar 2026",
          source: "TechCrunch",
          url: "#",
          summary: "Meta führt ein neues 'Community Notes'-ähnliches System für KI-Bilder auf Instagram ein, um Desinformation zu bekämpfen."
        }
      ]
    },
    {
      id: "voices",
      title: "Stimmen und Perspektiven",
      emoji: "🗣️",
      items: [
        {
          title: "DFKI-Chef: Superintelligenz noch in weiter Ferne",
          date: "1. Januar 2026",
          source: "heise.de",
          url: "#",
          summary: "Trotz rasanter Fortschritte warnt der Chef des DFKI vor überzogenen Erwartungen. Echte AGI sei noch Jahrzehnte entfernt."
        },
        {
          title: "TechCrunch-Analyse: 2026 als Jahr des Pragmatismus",
          date: "2. Januar 2026",
          source: "TechCrunch",
          url: "#",
          summary: "Nach dem Hype kommt die Anwendung: 2026 wird sich zeigen, welche KI-Geschäftsmodelle wirklich profitabel sind."
        }
      ]
    },
    {
      id: "business",
      title: "Implications for Business & Society",
      emoji: "💼",
      items: [
        {
          title: "Massiver Stellenabbau im Bankensektor erwartet",
          date: "3. Januar 2026",
          source: "Handelsblatt",
          url: "#",
          summary: "Eine neue Studie prognostiziert, dass bis zu 30% der Backoffice-Jobs in Banken durch KI-Agenten ersetzt werden könnten."
        }
      ]
    }
  ]
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Audio Element */}
      <audio 
        ref={audioRef} 
        src="/ki_update_podcast.wav" 
        onEnded={() => setIsPlaying(false)}
      />

      {/* Header Section */}
      <header className="relative border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="outline" className="font-mono text-xs border-primary/50 text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                  {NEWS_DATA.week}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                  {NEWS_DATA.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                AKTUELLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">KI NEWS</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                Trends, Tools & Insights — powered by <a href="https://www.ki-update.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">KI-Update.com</a>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button 
                onClick={togglePlay}
                className="flex-1 md:flex-none gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6 shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all hover:shadow-[0_0_25px_rgba(217,70,239,0.5)]"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? "Pause Update" : "Podcast hören"}
              </Button>
              
              <Button variant="outline" size="icon" className="rounded-full border-border/50 hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="https://github.com/rogerbasler/ki-news-weekly" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-10 md:py-16 space-y-16">
        
        {NEWS_DATA.categories.map((category) => (
          <section key={category.id} className="space-y-6">
            <div className="flex items-center gap-3 pb-2 border-b border-border/30">
              <span className="text-2xl md:text-3xl filter drop-shadow-lg">{category.emoji}</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">{category.title}</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <Card key={index} className="group border-border/40 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-3 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <Badge variant="secondary" className="font-mono text-[10px] uppercase tracking-wider bg-secondary/50 text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.source}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg md:text-xl leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.summary}
                    </p>
                    <div className="pt-2">
                      <a 
                        href={item.url} 
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
                      >
                        Artikel lesen <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-12 mt-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; 2026 KI-Update.com. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Automated by Manus Agent
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
            <div className="h-4 w-px bg-border/50"></div>
            <span className="flex items-center gap-2 text-xs font-mono text-muted-foreground/80 bg-secondary/30 px-3 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              System Operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
