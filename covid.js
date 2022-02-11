import React, { useEffect, useState } from 'react';
import Classes from './covid.module.css';

const Covid=()=>{
    const[data, setdata]=useState([]);
    const getCovidData=async ()=>{
      const res= await  fetch("https://disease.sh/v3/covid-19/countries");
      const actualdata= await res.json();
      console.log(actualdata);
      setdata(actualdata);
    }
    useEffect(()=>{
getCovidData();
    },[])
    return (
    <>
    <div className={Classes.main}>
        <h1>India Covid-19 DashBoard</h1>
        <div className={Classes.main1}>
        <table className={Classes.table_hover}>
      <thead className={Classes.t_dark}>
          
         <tr className={Classes.t_row}>
            
             <th>State </th>
             <th>Population </th>
             <th>recovered </th>
             <th>deaths </th>
             <th>active </th>
             <th>update</th>
         </tr>
         
      </thead>
      <tbody>
          {
              data.map((val,index)=>{
            
                return(  <tr className={Classes.t_row} key={index}>
            
            <td>{val.country} </td>
            <td>{val.population} </td>
            <td>{val.recovered} </td>
            <td>{val.deaths} </td>
            <td>{val.active} </td>
            <td>{val.updated}</td>
        </tr> 
                )    
              })
          }
      
        
      </tbody>
       </table> 
        </div>
    </div>
    </>
    )
}
export default Covid;