import React from 'react';
export default function Filters ({date}) {
    //const actives = ["Active", "Archived", "Draft"]
    const currentYear = new Date().getFullYear()
    const years = [];
    for (let i = 2000; i < currentYear; i++){
        years.push(i)
    }
    console.log(years)
    return (
        <div>
            <div>
                <input type="text" name="" id="" value={date} />
            </div>
        </div>
    )
}