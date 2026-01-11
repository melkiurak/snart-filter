import React from 'react';
export default function Filters ({selectedYears, setSelectedYears, selectedActives, setSelectedActives}) {
    const actives = ["Active", "Archived", "Draft"];
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = 2000; i < currentYear; i++){
        years.push(i)
    };
    const handelChangeYear = (year, e) => {
        const value = parseInt(e.target.value);
        if(e.target.checked){
            setSelectedYears(prev => [...prev, value]);
        }
        else {
            setSelectedYears(selectedYears.filter(y => y !== value));  
        }
    };
    const handelChangeActive = (active, e) => {
        const value = e.target.value;
        if(e.target.checked) {
            setSelectedActives(prev => [...prev, value]);
        } else {
            setSelectedActives(selectedActives.filter(a => a !== value));
        };
    };
    return (
        <div>
            {years.map(year => (
                <lable key={year} style={{display: 'block'}}>
                    <input type="checkbox" value={year} checked={selectedYears.includes(year)} onChange={(e) => handelChangeYear(year, e)}/>
                    <span>{year}</span>
                </lable>
            ))}
            {actives.map(active => (
                <label htmlFor="" key={active}>
                    <input type="checkbox" value={active} checked={selectedActives.includes(active)} onChange={(e) => handelChangeActive(active, e)}/>
                    <span>{active}</span>
                </label>
            ))}
        </div>
    )
}