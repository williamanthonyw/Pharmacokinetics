import React from 'react'
import  {useState, useEffect } from 'react'
import './GraphInformation.css'
const GraphInformation = (data) => {
    
    const [halfLife, sethalfLife] = useState(0)
    const [auc, setAuc] = useState(0)
    useEffect(() => {
        console.log(data.data.variables.dose)
        console.log(data.data.variables.Cl)
        console.log(data.data.variables.Vd)
        let auc = 0
        let halfLife = 0
        if (data.data.variables.dose && data.data.variables.Cl) {
            auc = parseFloat(data.data.variables.dose) / parseFloat(data.data.variables.Cl)
            setAuc(auc.toFixed(2))
        }
        if (data.data.variables.Vd && data.data.variables.Cl) {
            halfLife = 0.693 * ( parseFloat(data.data.variables.Vd) / parseFloat(data.data.variables.Cl))
            sethalfLife(halfLife.toFixed(2))
        }
        return () => {
          
        }
      }, [data])
    return (
        <div className='mt-3 '>
            <div className=' p-3 card bg-dark text-light'>
                <h2>Graph Informations</h2>
                <ol>
                    <li>AUC = dose/Cl = {auc}</li>
                    <li>halflife = 0.693 * (Vd/Cl) = {halfLife}</li>
                </ol>  
            </div>
        </div>
    )
}

export default GraphInformation