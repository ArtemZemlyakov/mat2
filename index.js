let correctAnswers = incorrectAnswers = 0; 
const question1 = prompt('Сколько будет 2 + 2?');
switch (question1) {
    case '4':
        alert ('Ответ Верный');
        correctAnswers++;
        break;
        default:
            alert('Ответ не верный');
            incorrectAnswers++;
}
const question2 = prompt('Сколько будет 2 * 2?');
switch (question2) {
    case '4':
        alert ('Ответ Верный');
        correctAnswers++;
        break;
        default:
            alert('Ответ не верный');
            incorrectAnswers++;
}

const question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
switch (question3) {
    case '1':
        alert ('Ответ Верный');
        correctAnswers++;
        break;
        default:
            alert('Ответ не верный');
            incorrectAnswers++;
}

const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
switch (question4) {
    case '12':
        alert ('Ответ Верный');
        correctAnswers++;
        break;
        default:
            alert('Ответ не верный');
            incorrectAnswers++;
}
const question5 = prompt('Сколько будет 2 + 2 * 2?');
switch (question5) {
    case '6':
        alert ('Ответ Верный');
        correctAnswers++;
        break;
        default:
            alert('Ответ не верный');
            incorrectAnswers++;
}


alert(`Конец теста! Правильные ответы - ${correctAnswers}, Неправильные ответы -${incorrectAnswers}` );