// Define the global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Define the hasKey function
function hasKey(key) {
    // Check if the key exists in sampleObject
    return key in sampleObject;
}

// Example usage
console.log(hasKey("red"));   // Output: true
console.log(hasKey("blue"));  // Output: false
console.log(hasKey("white")); // Output: true

