document.getElementById('letterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const inputString = document.getElementById('inputString').value;
    const resultDiv = document.getElementById('result');
    
    const count = countLetterA(inputString);
    
    if (count > 0) {
        resultDiv.innerHTML = `<span style="color: green;">A letra 'a' aparece ${count} vezes.</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color: red;">A letra 'a' não aparece na string.</span>`;
    }
});
function countLetterA(str) {
    const regex = /[aA]/g;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
