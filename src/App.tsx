import { PathfindingProvider } from "./context/PathfindingContext"
import { SpeedProvider } from "./context/SpeedContext"
import { TileProvider } from "./context/TileContext"


function App() {

  return (
<PathfindingProvider>
  <TileProvider>
    <SpeedProvider>
    <h1 className="text-red-500 text-2xl h-screen w-screen bg-yellow-100 font-bold">
      Hello</h1>
      </SpeedProvider>
      </TileProvider>
  </PathfindingProvider>
  )
}

export default App
