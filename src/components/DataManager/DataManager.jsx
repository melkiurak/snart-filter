export function  DataManager({games}) {
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