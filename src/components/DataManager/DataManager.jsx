import { useState } from 'react'
import initialGames from '../../data/initialGames.json'
export function  DataManager({selectedYears, selectedActives}) {
    const [games, setGames] = useState(initialGames);
    const filterGame = games.filter(g => selectedYears.length === 0 ||  selectedYears.includes(parseInt(g.releaseDate.slice(0,4))))
    return (
        <div className='data-list'>
            {filterGame.map(game => (
                <div className='data-item' key={game.id}>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                </div>
            ))}
        </div>
    )
}