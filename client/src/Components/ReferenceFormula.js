
import React, {useEffect} from 'react'
import Latex from './Latex'
import mydata from './data'
import triangle from '../assets/images/Pharmacokinetic_Triangle.png';


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

            <h1 style={{ color: '#e54726' }}>Constants: Important Equations in Pharmacology</h1>
            <br></br>
            <p><b>Volume of distribution (Vd): <Latex latex_code="A_b = V_d * C_p"></Latex> or </b><Latex latex_code="V_d = \frac{A_b}{C_p}"></Latex></p>
            <br></br>  
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Latex latex_code="Loading\:dose = V_d * C_p \tiny(desired)"></Latex></p>
            <br></br>
            <p><b>Clearance (Cl): <Latex latex_code="RE = Cl * C_p"></Latex> or </b><Latex latex_code="Cl = \frac{RE}{C_p}"></Latex></p>
            <br></br>
            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Latex latex_code="Maintenance\:dose = Cl * C_p"></Latex></p>
            <br></br>
            <p><b>The half life ( <Latex latex_code="t_\frac{1}{2}"></Latex> ):</b> <Latex latex_code="t_\frac{1}{2} = \frac{0.693V_d}{Cl}"></Latex></p>
            <br></br>
            <p><b>Fractional oral availability (F):</b> <Latex latex_code="F = \frac{AUC_{po}}{AUC_{iv}}"></Latex></p>
            <br></br>
            <p><b>Creatinine clearance (CrCl):</b> <Latex latex_code="CrCl\:(mL/s) = \frac{(140-age)\:*\:weight[kg]}{50000\:*\:[creatinine](*\:0.85\:for\:women)}"></Latex></p>
            <br></br>
            <p><b>Dose adjustment in renal failure:</b> <Latex latex_code="\frac{dose\:rate_{patient}}{*dose\:rate_{normal}} = \frac{CrCl_{patient}}{Crcl_{normal}}"></Latex></p>
            <br></br>
            <p><b>Dose adjustment in renal failure when fu &lt; I:</b> <Latex latex_code="\frac{dose\:rate_{patient}}{*dose\:rate_{normal}} = (I\:-\:fu)\:+\:fu\:\times\:\frac{(CrCl_{patient})}{(CrCl_{normal})}"></Latex></p>
            <br></br>
            <img src={triangle} alt="Pharmacokinetic Triangle" height={500} width={500}/>
        </div>
    )
};

export default ReferenceFormula