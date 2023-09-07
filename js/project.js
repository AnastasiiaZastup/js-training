var arr = [3, 4, 10, 1000, 2, 7, 40, 0]

for (var i = 0, numbersi = arr.length - 1; i < numbersi; i++) {
    for (var j = 0, numbersj = numbersi - i; j < numbersj; j++) {
        if (arr[j] > arr[j + 1]) {
            var changes = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = changes;
        }
    }
}

console.log(arr);