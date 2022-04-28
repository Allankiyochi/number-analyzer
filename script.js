const num = document.querySelector("input#input");
const list = document.querySelector("select#insertedNum");
const result = document.querySelector("div#display");
const insertedNumbers = [];

function isNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNum(num.value) && !inList(num.value, insertedNumbers)) {
    insertedNumbers.push(Number(num.value));
    const item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado com sucesso!`;
    list.appendChild(item);
    result.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já está inserido na lista!");
  }
  num.value = "";
  num.focus();
}

function analyse() {
  if (insertedNumbers.length == 0) {
    window.alert("Insira algum número!");
  } else {
    let sum = insertedNumbers.length;
    let highNum = insertedNumbers[0];
    let lessNum = insertedNumbers[0];
    let sumSum = 0;
    let media = 0;
    for (const pos in insertedNumbers) {
      sumSum += insertedNumbers[pos];

      if (insertedNumbers[pos] > highNum) highNum = insertedNumbers[pos];

      if (insertedNumbers[pos] < lessNum) lessNum = insertedNumbers[pos];
    }
    media = sumSum / sum;
    result.innerHTML = "";
    result.innerHTML += `<p>Ao todo, temos ${sum} números cadastrados.</p>`;
    result.innerHTML += `<p>O maior valor inserido foi: ${highNum}.</p>`;
    result.innerHTML += `<p>O menor valor inserido foi: ${lessNum}.</p>`;
    result.innerHTML += `<p>A soma dos valores digitados é: ${sumSum}</p>`;
    result.innerHTML += `<p>A média dos valores digitados é: ${media.toFixed(2)}</p>`;
  }
}
