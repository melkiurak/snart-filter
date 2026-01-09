
import { useState } from 'react';
import './App.css'
import { DataManager } from './components/DataManager/DataManager'
import Filters from './components/Filters/Filters'

function App() {
    const [date, setDate] = useState();

  return (
    <div className='wrapper'>
      <Filters date={date}/>
      <DataManager setDate={setDate}/>
    </div>
  )
}

export default App
