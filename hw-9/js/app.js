let length = parseInt(prompt("Enter the length of the array:"));
let array = [];

for (let i = 0; i < length; i++) {
    let element = prompt("Enter an element for the array:");
    array.push(element);
}

document.write("Initial array: " + array + "<p>");

array.splice(1, 3);

document.write("Array after removing elements from index 2 to 4 (inclusive): " + array);