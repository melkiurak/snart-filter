import React, { useState } from 'react';
export default function Filters ({date}) {
    const [selectedYears, setSelectedYears] = useState([]);
    //const actives = ["Active", "Archived", "Draft"]
    const currentYear = new Date().getFullYear()
    const years = [];

    for (let i = 2000; i < currentYear; i++){
        years.push(i)
    }
    const handelChangeYear = (year, e) => {
        const value = parseInt(e.target.value);
        if(e.target.checked){
            setSelectedYears(prev => [...prev, value]);
        }
        else {
            setSelectedYears(selectedYears.filter(y => y !== value))        
        }
    }
    return (
        <div>
            {years.map(year => (
                <lable key={year} style={{display: 'block'}}>
                    <input type="checkbox" value={year} checked={selectedYears.includes(year)} onChange={(e) => handelChangeYear(year, e)}/>
                    <span>{year}</span>
                </lable>
            ))}
        </div>
    )
}