function binarySearch(arr: number[], target: number) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        const mid = Math.floor( (high + low) / 2);

        if(arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        }
    }

    return null
}

const theArr = [1,2,3,4,5,6,7,8,9];

console.log(
    binarySearch(
        theArr, 8
    )
);