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
        <div className="flex flex-col justify-center items-center pt-20 ">
            <div className="flex flex-col border-blue-200 border-[3px] rounded-[50px] p-10 ">
                <label className="text-blue-300 text-xl">Versicherungssumme</label>
                <input className="border-2 border-gray-500 rounded-full px-2"  type="number" name="summe" value={formValues.summe} onChange={handleOnChange}></input>
                <br></br>
                <label className="text-blue-300 text-xl">Versicherungswert</label>
                <input className="border-2 border-gray-500 rounded-full px-2" type="number" name="wert" value={formValues.wert} onChange={handleOnChange}></input>
                <br></br>
                <label className="text-blue-300 text-xl">Schaden</label>
                <input className="border-2 border-gray-500 rounded-full px-2"  type="number" name="schaden" value={formValues.schaden} onChange={handleOnChange}></input>
                <br></br>
                <button className=" bg-blue-100 hover:bg-blue-200 rounded-full p-2 text-l font-bold" onClick={onclick}>Berechnen</button>
                <br></br>
                <p>{formValues.ergebnis}</p>  
            </div>
           
        </div>
    )
}
