
import { useState } from 'react';
import './App.css'
import { DataManager } from './components/DataManager/DataManager'
import Filters from './components/Filters/Filters'
import initialGames from './data/initialGames.json'

function App() {
  const [games, setGames] = useState(initialGames);

  return (
    <div className='wrapper'>
      <Filters games={games}  setGames={setGames} />
      <DataManager games={games} />
    </div>
  )
}

export default App
