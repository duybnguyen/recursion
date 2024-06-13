const merge = (leftArray, rightArray, array) => {
    const leftSize = leftArray.length;
    const rightSize = rightArray.length;
    
    let i = 0, l = 0, r = 0;

    // check the condition for merging
    while (l < leftSize && r < rightSize) {
        if (leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l];
            i++;
            l++;
        } else {
            array[i] = rightArray[r];
            i++;
            r++;
        }
    }

    // copy remaining elements of leftArray
    while (l < leftSize) {
        array[i] = leftArray[l];
        i++;
        l++;
    }

    // copy remaining elements of rightArray
    while (r < rightSize) {
        array[i] = rightArray[r];
        i++;
        r++;
    }
} 

const mergeSort = array => {
    if (array.length <= 1) return;

    const middle = Math.floor(array.length / 2);
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i < middle) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }

    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, array);
}

const array = [8, 4, 0, 1, 9, 12, 95, 83, 20];
mergeSort(array);
console.log(array);
