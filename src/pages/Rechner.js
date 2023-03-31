import Calculator from "../components/calculator";

export default function Rechner(){
    return(
        <div>
            <h1>Rechner</h1>
            <p>Schadensdeckung einfach berechnen</p>
            <Calculator></Calculator>
            <p>Versicherungssumme ist der Wert den sie versichert haben.</p>
            <p>Versicherungswert ist der aktuelle Wert ihres Hausrats</p>
        </div>
    )
}