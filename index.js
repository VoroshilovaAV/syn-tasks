/*
Вопрос 1:
Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м. 
Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз. 
На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать ответ.
*/

function calcDays(distance, up, down) {
    if (distance <= 0 || up <= 0 || down < 0){
        return 'Ошибка: distance и up должны быть больше нуля и входные параметры не должны быть отрицательными';
    }

    let days = 0;
    let distanceCount = 0;    

    while (distanceCount < distance) {
        distanceCount += up;
        days++;
        if (distanceCount >= distance) {
            return days;
        }
        distanceCount -= down;
    }

    return days;
}
    
calcDays(100, 50, 30); // На столб черепашка вряд ли залезет (условие задачи об этом умалчивает), но на вершину холма - на 4 сутки

/*
Вопрос 2:
В комнате находится человек. Через какое-то время в комнату заходит еще один человек и здоровается с первым. 
Людей в комнате становится 2, а счетчик рукопожатий становится равен 1. 
Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате. 
Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д. Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
*/

function calcHandshakes(persons) { 
    if (persons < 0){
        return 'Ошибка: вы ввели отрицательное число';
    }

    let handshakes = 0;      

    for (let i = 0; i < persons; i++) {
        handshakes += i;
    }

    return handshakes;
}

calcHandshakes(10); // 45 рукопожатий для 10 человек

/*
Вопрос 3:
Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка..."). 
Известно, что в строке встречаются повторяющиеся слова. Нужно написать функцию на JS. 
На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.
*/

function removeDuplicates(str) {
    const wordsArray = str.split(',');
    const uniqueWords = [...new Set(wordsArray)];
    return uniqueWords.join(',');
}

removeDuplicates("кошка,собака,лошадь,корова,кошка"); // 'кошка,собака,лошадь,корова'
