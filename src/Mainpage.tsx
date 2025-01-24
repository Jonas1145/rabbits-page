import roundnetImage from './assets/roundnet_1.jpg'
export default function Mainpage() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="md:w-1/2">
        <h2 className="text-green-600">Willkommen bei Roundnet-Rabbits Regensburg</h2>
        <p>
          Roundnet, im Volksmund auch bekannt unter dem Namen "Spikeball", ist eine Trendsportart
          aus den USA, welche nun auch seinen Weg in die Donaustadt gefunden hat.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={roundnetImage} alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}
