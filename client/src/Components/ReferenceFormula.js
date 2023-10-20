
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
            <h1 style={{ color: '#e54726' }}>Constants</h1>
            <p>(Constants page introduction paragraph)</p>
            <hr
                style={{
                    background: 'black',
                    color: 'black',
                    borderColor: 'black',
                    height: '2px',
                }}
            />

            <h3 style={{ color: '#000000' }}>Reference Formula</h3>
            {mydata.map((item, index) => (
                <p><b>
                    {item.formula_name}:
                    <p><Latex latex_code={item.data.latex_eq}></Latex></p>
                </b></p>
            ))}

            <hr
                 style={{
                     background: 'black',
                     color: 'black',
                     borderColor: 'black',
                     height: '2px',
                 }}
            />


            <h3 style={{ color: '#000000' }}>Important Equations in Pharmacology</h3>

            <p><b>Volume of distribution ( <Latex latex_code="V_d"></Latex> ): <Latex latex_code="A_b = V_d * C_p"></Latex> or </b><Latex latex_code="V_d = \frac{A_b}{C_p}"></Latex></p>
            <br></br>

            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Latex latex_code="Loading\:dose = V_d * C_p \tiny(desired)"></Latex></p>
            <br></br>

            <p><b>Clearance ( <Latex latex_code="Cl"></Latex> ): <Latex latex_code="RE = Cl * C_p"></Latex> or </b><Latex latex_code="Cl = \frac{RE}{C_p}"></Latex></p>
            <br></br>

            <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Latex latex_code="Maintenance\:dose = Cl * C_p"></Latex></p>
            <br></br>

            <p><b>The half life ( <Latex latex_code="t_\frac{1}{2}"></Latex> ):</b> <Latex latex_code="t_\frac{1}{2} = \frac{0.693V_d}{Cl}"></Latex></p>
            <br></br>

            <p><b>Fractional oral availability ( <Latex latex_code="F"></Latex> ):</b> <Latex latex_code="F = \frac{AUC_{po}}{AUC_{iv}}"></Latex></p>
            <br></br>

            <p><b>Creatinine clearance ( <Latex latex_code="CrCl"></Latex> ):</b> <Latex latex_code="CrCl\:(mL/min) = \frac{(140-age)\:*\:weight[kg]}{0.814\:*\:serum\:creatinine\:[\mu M]}"></Latex> for adult females, multiply the result of the formula by 0.85</p>
            <br></br>

            <p><b>Dose adjustment in renal failure:</b> <Latex latex_code="\frac{dose\:rate_{patient}}{*dose\:rate_{normal}} = \frac{CrCl_{patient}}{Crcl_{normal}}"></Latex></p>
            <br></br>

            <p><b>Dose adjustment in renal failure when ( <Latex latex_code="fu\:<\:I"></Latex> ):</b> <Latex latex_code="\frac{dose\:rate_{patient}}{*dose\:rate_{normal}} = (I\:-\:fu)\:+\:fu\:\times\:\frac{(CrCl_{patient})}{(CrCl_{normal})}"></Latex></p>
            <br></br>

            <img src={triangle} alt="Pharmacokinetic Triangle" height={500} width={500}/>
            <br></br>

            <p>Image reference: E. J. Begg, Instant Clinical Pharmacology.  (Blackwell Pub., Malden, Mass:, ed. 2nd, 2008).</p>
        </div>
    )
};

export default ReferenceFormula