async function heapSort() {
    console.log('In heapSort()');
    const ele = document.querySelectorAll(".bar");
    let n = ele.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        console.log('In heapify()');
        await heapify(ele, n, i);
    }

    // Heap sort
    for (let i = n - 1; i > 0; i--) {
        console.log('In heap sorting');
        // color
        ele[i].style.background = 'blue';
        ele[0].style.background = 'red';

        await waitforme(delay);

        // Swap root with the last element
        let temp = ele[i].style.height;
        ele[i].style.height = ele[0].style.height;
        ele[0].style.height = temp;

        await waitforme(delay);

        // color
        ele[i].style.background = 'green';
        ele[0].style.background = 'green';

        // Heapify root element
        await heapify(ele, i, 0);
    }
    ele[0].style.background = 'green';
}

async function heapify(ele, n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // color
    ele[i].style.background = 'blue';
    if (l < n) {
        ele[l].style.background = 'yellow';
    }
    if (r < n) {
        ele[r].style.background = 'yellow';
    }

    await waitforme(delay);

    if (l < n && parseInt(ele[l].style.height) > parseInt(ele[largest].style.height)) {
        if (largest !== i) {
            // color
            ele[largest].style.background = 'green';
        }
        largest = l;
    }
    if (r < n && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height)) {
        if (largest !== i) {
            // color
            ele[largest].style.background = 'green';
        }
        largest = r;
    }

    if (largest !== i) {
        // color
        let temp = ele[i].style.height;
        ele[i].style.height = ele[largest].style.height;
        ele[largest].style.height = temp;

        await heapify(ele, n, largest);
    }

    await waitforme(delay);

    // color
    ele[i].style.background = 'green';
    if (l < n) {
        ele[l].style.background = 'green';
    }
    if (r < n) {
        ele[r].style.background = 'green';
    }
}

const heapSortBtn = document.querySelector(".heapSort");
heapSortBtn.addEventListener('click', async function() {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await heapSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();

    document.getElementById("c").innerText = "Sort type: Heap Sort";
    document.getElementById("complexity").innerText = "Time Complexity: O(n*logn)";
    document.getElementById("complexity1").innerText = "Space Complexity: O(1)";
});
