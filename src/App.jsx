
import { useState } from 'react';
import './App.css'
import { DataManager } from './components/DataManager/DataManager'
import Filters from './components/Filters/Filters'

function App() {
  const [selectedYears, setSelectedYears] = useState([]);

  return (
    <div className='wrapper'>
      <Filters selectedYears={selectedYears} setSelectedYears={setSelectedYears}/>
      <DataManager selectedYears={selectedYears}/>
    </div>
  )
}

export default App
