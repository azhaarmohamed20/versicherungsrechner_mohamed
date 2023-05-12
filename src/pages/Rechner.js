import Calculator from "../components/calculator";

export default function Rechner(){
    return(
        <div>
            <h1 className="flex flex-col items-center text-[22px] text-blue-600 pt-3 font-bold" >Schadensrechner</h1>
            <Calculator></Calculator>
            <br></br>
            <h3 className="flex flex-col items-center text-[20px] text-blue-600 font-bold">Kurze Erklärung</h3>
            <div className="flex flex-col justify-center items-center">
                <p  className="flex flex-col justify-center items-center text-[18px] text-blue-600 pb-[1rem] text-left w-[450px] ">
                    Dieser Rechner berechnet die Summe, die die Versicherung im Falle eines Schaden übernehmen würde.
                    Mit Versicherungssumme ist die Summe gemeint versichert wurde.
                    Mit Versicherungswert ist der akutelle Wert des Hausrats gemeint. </p>  
                    <br></br>
            </div>
        </div>
    )
}