import { useState } from 'react'
import initialGames from '../../data/initialGames.json'
export function  DataManager({selectedYears, selectedActives}) {
    const [games, setGames] = useState(initialGames);
    let result = [];
    if(selectedYears.length >= 1){
        result = games.filter(g => selectedYears.includes(parseInt(g.releaseDate.slice(0,4))));
    }
    else if(selectedActives.length >= 1){
        result = games.filter(g => selectedActives.includes(g.status));
    }
    else{
        result = games;
    }
    return (
        <div className='data-list'>
            {result.map(game => (
                <div className='data-item' key={game.id}>
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                </div>
            ))}
        </div>
    )
}