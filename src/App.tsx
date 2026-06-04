import { PathfindingProvider } from "./context/PathfindingContext"


function App() {

  return (
<PathfindingProvider>
    <h1 className="text-red-500 text-2xl h-screen w-screen bg-yellow-100 font-bold">
      Hello</h1>
  </PathfindingProvider>
  )
}

export default App
