
import React, {useEffect} from 'react'
import Latex from './Latex'
import mydata from './data'


const ReferenceFormula = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container pt-3 pb-3'>
            <h1 style={{ color: '#e54726' }}>Reference Formula</h1>
            <br></br>
            <ul>
                {mydata.map((item, index) => (
                    <h3>
                        <li key={index}>{item.formula_name}</li>
                        <p><li><Latex latex_code={item.data.latex_eq}></Latex></li></p>
                    </h3>
                ))},
            </ul>
        </div>
    )
};

export default ReferenceFormula