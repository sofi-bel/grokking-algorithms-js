const list = [1, 3, 5, 7, 8, 9];

function binarySearch(list, item) {
    // В переменных low и high хранятся границы той части списка, в которой выполняется поиск
    let low = 0;
    let high = list.length - 1;

    // Пока эта часть не сократится до одного элемента
    while (low <= high) {
        // проверяем средний элемент
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        // Значение найдено
        if (guess === item) {
            return mid;
        }
        // Много
        if (guess > item) {
            high = mid - 1;
        }
        // Мало
        else {
            low = mid + 1;
        }
    }
    // Значение не существует
    return null;
}

// Вспомните: нумерация элементов начинается с 0. Второй ячейке соответствует индекс 1
console.log(binarySearch(list, 3))
// "None" означает "ничто". Это признак того, что элемент не найден
console.log(binarySearch(list, -1))
