
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


            {mydata.map((item, index) => (
                <h3>
                    {item.formula_name}:

                    <p><Latex latex_code={item.data.latex_eq}></Latex></p>
                </h3>
            ))},

            <br></br>
        </div>
    )
};

export default ReferenceFormula