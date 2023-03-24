import { useState } from "react"

export default function Calculator(){
    const [formValues, setFormValues] = useState ({
        summe: 0,
        wert: 0,
        schaden: 0
    });

    const handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setFormValues({
            ...formValues, [name]: value
        })
    };




    return (
        <form>
            <label>Versicherungssumme</label>
            <input type="number" name="summe" value={formValues.summe} onChange={handleOnChange}></input>
            <br></br>
            <label>Versicherungswert</label>
            <input type="number" name="wert" value={formValues.wert} onChange={handleOnChange}></input>
            <br></br>
            <label>Schaden</label>
            <input type="number" name="schaden" value={formValues.schaden} onChange={handleOnChange}></input>
            <br></br>
            <button>Berechnen</button>
        </form>
    )
}
