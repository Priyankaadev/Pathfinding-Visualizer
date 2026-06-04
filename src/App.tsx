import { PathfindingProvider } from "./context/PathfindingContext"
import { TileProvider } from "./context/TileContext"


function App() {

  return (
<PathfindingProvider>
  <TileProvider>
    <h1 className="text-red-500 text-2xl h-screen w-screen bg-yellow-100 font-bold">
      Hello</h1>
      </TileProvider>
  </PathfindingProvider>
  )
}

export default App
