import Days from "./days.js";

const diasFaltantes = () => {
    const diasLibres = Days();
    const fechaActual = new Date();
    const convertirMilisegundosADias = (fechaProxima, fechaActual) => {
        let dias = (fechaProxima - fechaActual) / (1000 * 60 * 60 * 24);
        dias = Math.ceil(dias);
        return dias;
    };

    const siguienteDiaMasCercano = (diaCercanoActual) => {
        const posicionActual = diasLibres.indexOf(diaCercanoActual);
        let siguienteDiaLibre = diasLibres[posicionActual + 1];
        const diasSiguienteDia = convertirMilisegundosADias(
            siguienteDiaLibre,
            fechaActual
        );
        return [siguienteDiaLibre, diasSiguienteDia];
    };

    const diaLibreCercano = () => {
        let diasQueFaltan;
        let fechaProxima;
        for (let i = 0; i < diasLibres.length - 1; i++) {
            if (diasLibres[i] > fechaActual) {
                fechaProxima = diasLibres[i];
                diasQueFaltan = convertirMilisegundosADias(
                    diasLibres[i],
                    fechaActual
                );
                break;
            }
        }
        return [diasQueFaltan, fechaProxima];
    };

    let killme = diaLibreCercano(diasLibres);
    killme.push(siguienteDiaMasCercano);
    return killme;
};

export default diasFaltantes;
