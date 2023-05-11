import Calculator from "../components/calculator";

export default function Rechner(){
    return(
        <div>
            <h1 className="flex flex-col items-center text-[40px] text-blue-300" >Schadensrechner</h1>
            <Calculator></Calculator>
            <br></br>
            <h3 className="flex flex-col items-center text-[30px] text-blue-400">Kurze Erklärung</h3>
            <div className="flex flex-col justify-center items-center ">
                <p  className="flex flex-col justify-center items-center text-[20px] text-blue-400 pb-[1rem] text-left w-[450px]">
                    Dieser Rechner berechnet die Summe, die die Versicherung im Falle eines Schaden übernehmen würde.
                    Mit Versicherungssumme ist die Summe gemeint versichert wurde.
                    Mit Versicherungswert ist der akutelle Wert des Hausrats gemeint. </p>  
            </div>
            
        </div>
    )
}