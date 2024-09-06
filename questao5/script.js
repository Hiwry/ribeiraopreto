let luzes = [false, false, false]; // Lâmpadas (apagadas)
let quente = [false, false, false]; // Lâmpadas quentes (esquentam após serem ligadas)
let verificouLuzes = false;
let interruptorLigado = [false, false, false]; // Verifica se os interruptores foram ligados

function ligarInterrupTor(interruptor) {
    if (!verificouLuzes) {
        const switchElement = document.getElementById(`switch${interruptor}`);
        const lampElement = document.getElementById(`lamp${interruptor}`);
        
        // Alterna o estado dos interruptores e lâmpadas
        if (interruptor === 1) {
            luzes[0] = !luzes[0]; // Liga ou desliga a lâmpada 1
            quente[0] = true; // Lâmpada 1 esquenta ao ser ligada
            switchElement.classList.toggle("active-switch");
        } else if (interruptor === 2) {
            luzes[1] = true; // Lâmpada 2 acende
            switchElement.classList.add("active-switch");
        } else if (interruptor === 3) {
            luzes[2] = false; // Lâmpada 3 permanece desligada
            switchElement.classList.toggle("active-switch");
        }

        // Muda o ícone da lâmpada ao clicar no interruptor
        if (luzes[interruptor - 1]) {
            lampElement.classList.add("on");
        } else {
            lampElement.classList.remove("on");
        }
    }
}

function verLuzes() {
    verificouLuzes = true;
    let resultado = '';

    if (luzes[1]) {
        resultado += "A lâmpada conectada ao interruptor 2 está acesa.<br>";
    }

    if (!luzes[0] && quente[0]) {
        resultado += "A lâmpada conectada ao interruptor 1 está quente, mas apagada.<br>";
    }

    if (!luzes[2] && !quente[2]) {
        resultado += "A lâmpada conectada ao interruptor 3 está fria e apagada.<br>";
    }

    document.getElementById('logicaResultado').innerHTML = "<strong>Resultado:</strong>";
    document.getElementById('resultado').innerHTML = resultado;

    // Muda para o modo claro (light mode)
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
}
