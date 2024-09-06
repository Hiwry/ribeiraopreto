function calcularSoma() {
    let INDICE = 12, SOMA = 0, K = 1;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("resultado").innerHTML = "O valor final de SOMA é: " + SOMA;
}
