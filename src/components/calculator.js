import { useState } from "react"
import './style.css';

export default function Calculator(){
    const [formValues, setFormValues] = useState ({
        summe: 0,
        wert: 0,
        schaden: 0,
        ergebnis: 0
    });

    const handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({
            ...formValues, [name]: value
        })
    };

    function onclick(){
       let calc = formValues.summe/ formValues.wert * formValues.schaden;
       if(formValues.schaden <= calc){
        setFormValues({
            ...formValues, ergebnis: formValues.schaden
        })
       } else {
        setFormValues({
            ...formValues, ergebnis: formValues.summe/ formValues.wert * formValues.schaden
        })
       }
      
    }

    

    return (
        <div className="calculator">
            <label>Versicherungssumme</label>
            <input type="number" name="summe" value={formValues.summe} onChange={handleOnChange}></input>
            <br></br>
            <label>Versicherungswert</label>
            <input type="number" name="wert" value={formValues.wert} onChange={handleOnChange}></input>
            <br></br>
            <label>Schaden</label>
            <input type="number" name="schaden" value={formValues.schaden} onChange={handleOnChange}></input>
            <br></br>
            <button onClick={onclick}>Berechnen</button>
            <p>{formValues.ergebnis}</p>
        </div>
    )
}
