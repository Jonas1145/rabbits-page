import roundnetImage from './assets/roundnet_1.jpg'
import roundnetImage1 from './assets/roundnet_2.jpg'
import roundnetImage3 from './assets/roundnet_3.jpg'
import roundnetImage4 from './assets/roundnet_4.jpg'
import roundnetImage5 from './assets/roundnet_5.jpg'
import Navbar from './components/Navbar'
export default function Mainpage() {
  return (
    <div className="w-full max-w-5xl">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="md:w-1/2">
          <h2 className="text-green-600">Willkommen bei Roundnet-Rabbits Regensburg</h2>
          <p>
            Roundnet, im Volksmund auch bekannt unter dem Namen "Spikeball", ist eine Trendsportart
            aus den USA, welche nun auch seinen Weg in die Donaustadt gefunden hat.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={roundnetImage4} alt="" className="w-full h-auto" />
        </div>
      </div>
      <img src={roundnetImage1} alt="" className="w-full h-auto" />
      <div>
        Wir trainieren sowohl im Sommer als auch im Winter zwei- bis dreimal pro Woche. Im Sommer
        trainieren wir draußen, meistens auf Naturrasen, manchmal auch auf Kunstrasen. Im Winter
        wechseln wir in die Halle. Das Training unterteilt sich jeweils in Wettkampftraining für
        Spieler*innen ab der Niveaustufe intermediate/advanced und Vereinstraining für
        Anfänger*innen und Freizeitspieler*innen. Beide Einheiten werden jeweils von einem Trainer
        geleitet. Damit der Spaß nicht zu kurz kommt, wird immer darauf geachtet, dass genügend Zeit
        für freies Spiel bleibt. Wenn du die Regeln noch nicht kennst, ist das auch kein Problem.
        Wir helfen dir gerne weiter. Das folgende Video macht dich im Handumdrehen mit allem
        Wichtigen vertraut.
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1gQYJl9Y0a4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div>
        Besonders Interessierte finden das ausführliche Regelwerk hier:
        https://roundnetgermany.de/wp-content/uploads/2024/06/240619_Roundnet-Germany-Regelwerk-Offiziell.pdf
        Was brauchst du um mitzumachen? Zunächst einmal nicht viel. Sportschuhe einpacken und los
        geht’s! Bedenke bitte, dass im Hallentraining natürlich Hallenschuhe notwendig sind. Wann
        und wo wird trainiert? Unsere aktuellen Trainingszeiten findest du auf unserer
        Instagramseite oder kontaktiere uns einfach!
      </div>
      <div>
        Liga Die Roundnet Rabbits sind bereits seit der ersten Stunde in der deutschen Roundnet Liga
        vertreten. Dabei haben wir bereits Teams in der Regionalliga, in der 2. und in der 1.
        Bundesliga gestellt. Die Ligasaison ist stets in den Wintermonaten und wird somit
        ausschließlich in der Halle gespielt. Jährlich stellen die Rabbits zwei bis drei Teams,
        bestehend aus jeweils mindestens sechs Spieler*innen auf. Mehr Infos zur deutschen
        Roundnetliga findest du hier: https://roundnetgermany.de/deutsche-roundnet-liga/
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="md:w-1/2">
          <img src={roundnetImage} alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-green-600">Tournaments</h2>
          Ganzjährig werden in ganz Deutschland verschiedene Turniere in allen Kategorien und für
          alle Spielniveaus angeboten. Auch wir haben bereits einige Turniere in Regensburg
          ausgerichtet. Wenn du an einer Turnierteilnahme interessiert bist oder unsicher bist, für
          welches Spielniveau du dich anmelden solltest, sprich uns sehr gerne im Training an, wir
          haben viele Spieler*innen mit jahrelanger Turniererfahrung. Wann und wo das nächste
          Turnier in unserer Nähe stattfindet, erfährt man immer hier:
          https://playerzone.roundnetgermany.de/tournaments/upcoming
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <img src={roundnetImage5} alt="" className="w-full h-auto" />
        <div className="md:w-1/2">
          <h2 className="text-green-600">Neugierig geworden?</h2>
          <p>
            Egal ob du den sportlichen Wettkampf suchst oder einfach nur zum Spaß spielst – Roundnet
            bietet Freude für alle! Komm doch gern zu einem Schnuppertraining vorbei. Wann und wo
            das möglich ist erfährst du auf unserer Instagramseite oder du kontaktierst und einfach!
            Wir freuen uns auf dich!
          </p>
        </div>
        <div className="md:w-1/2"></div>
      </div>

      <img src={roundnetImage3} alt="" className="w-full h-auto" />
    </div>
  )
}
