import React from 'react'
import Latex from "./Latex";

const Constants = () => {
    return (
        <div className='container pt-3 pb-3'>
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
        </div>
    )
}

export default Constants