document.getElementById('fibonacciForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const number = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    
    if (isFibonacci(number)) {
        resultDiv.innerHTML = `<span style="color: green;">${number} pertence à sequência de Fibonacci!</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: red;">${number} não pertence à sequência de Fibonacci.</span>`;
    }
});

// Função para verificar se um número pertence à sequência de Fibonacci
function isFibonacci(n) {
    if (n === 0 || n === 1) return true;
    
    let a = 0, b = 1, next = a + b;
    
    while (next <= n) {
        if (next === n) return true;
        a = b;
        b = next;
        next = a + b;
    }
    
    return false;
}
