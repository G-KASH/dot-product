function sumOfDistinctElements(set1, set2) {
    let sum = 0;

    // Combine both sets
    let combined = set1.concat(set2);

    // Check for distinct elements
    for (let i = 0; i < combined.length; i++) {
        let element = combined[i];
        let count = 0;

        // Count how many times the element appears in both sets
        for (let j = 0; j < combined.length; j++) {
            if (element === combined[j]) {
                count++;
            }
        }

        // If appears only once, add to sum
        if (count === 1) {
            sum += element;
        }
    }

    return sum;
}

// Example usage:
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); // Output: 13




// Procedure (function) to calculate dot product
function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}

// Function to check if vectors are orthogonal
function checkOrthogonality(vectors1, vectors2) {
    for (let i = 0; i < vectors1.length; i++) {
        let dp = dotProduct(vectors1[i], vectors2[i]);
        if (dp === 0) {
            console.log(`Vectors at index ${i} are orthogonal.`);
        } else {
            console.log(`Vectors at index ${i} are NOT orthogonal.`);
        }
    }
}

// Example usage:
let vectors1 = [
    [1, 2, 3],
    [0, 1, 0],
    [1, 0, 0]
];
let vectors2 = [
    [4, -5, 6],
    [1, 0, 0],
    [0, 1, 0]
];

checkOrthogonality(vectors1, vectors2);
// Output:
// Vectors at index 0 are NOT orthogonal.
// Vectors at index 1 are orthogonal.
// Vectors at index 2 are orthogonal.
