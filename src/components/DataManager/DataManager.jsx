import { useState } from 'react'
import initialGames from '../../data/initialGames.json'
export function  DataManager({setDate}) {
    const [games, setGames] = useState(initialGames);
    console.log(games.filter(g => g.releaseDate === setDate))
    return (
        <div className='data-list'>
            {games.map(game => (
                <div className='data-item' key={game.id}>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                </div>
            ))}
        </div>
    )
}