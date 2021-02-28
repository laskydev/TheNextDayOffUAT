import React, { useState } from "react";
import "./App.css";
import diasFaltantes from "../logic/dayVerification";

const App = (props) => {
    let dias, fecha;
    const [diasQueFaltan, diaLibre, siguienteDiaMasCercano] = diasFaltantes();

    const handleManejadorDeFechas = (dia, mes, anio, diasRestantes) => {
        dias = diasRestantes;
        fecha = `${dia}/${mes}/${anio}`;
    };
    const loadOn = () => {
        handleManejadorDeFechas(
            diaLibre.getDate(),
            diaLibre.getMonth(),
            diaLibre.getFullYear(),
            diasQueFaltan
        );
    };
    loadOn();

    const handleNextDay = (e) => {
        const [siguienteDiaLibre, diaSiguienteDia] = siguienteDiaMasCercano(
            diaLibre
        );

        console.log(
            siguienteDiaLibre.getDate(),
            siguienteDiaLibre.getMonth(),
            siguienteDiaLibre.getFullYear(),
            diaSiguienteDia
        );
    };
    const handleDays = (e) => {};
    const hanldeVacations = (e) => {};
    return (
        <>
            <main>
                <h1 className="text-center margin-top-50">
                    Next Day Off<span>UAT</span>
                </h1>
                <div className="d-flex justify-content-center p-5 navApp">
                    <button onClick={handleDays} className="btn btn-primary">
                        Día libre
                    </button>
                    <button
                        onClick={hanldeVacations}
                        className="ml-3 btn btn-secondary"
                    >
                        Vacaciones
                    </button>
                </div>
                <h2>Primary Text</h2>
                <div className="container">
                    <button>Left</button>
                    <div className="Circle mx-auto">
                        <h2>{dias}</h2>
                        <h3>Días</h3>
                    </div>
                    <button onClick={handleNextDay}>Right</button>
                </div>

                <h2>
                    El próximo día libre es el <span>{fecha}</span>
                </h2>
            </main>
            <footer>
                <p>By LaskyDev</p>
            </footer>
        </>
    );
};

export default App;
