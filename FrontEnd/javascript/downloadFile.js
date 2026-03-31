function downloadFile(url, callback) {
  console.log("Downloading from:", url);

  setTimeout(() => {
    console.log("Download complete");

    // call the callback
    callback();
  }, 2000);
}

// callback function
function openFile() {
  console.log("File opened");
}

// function call
downloadFile("https://example.com/file", openFile);

function calculate(a, b, operation) {
  return operation(a, b);
}

// callback functions
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// usage
console.log(calculate(5, 3, add));       // 8
console.log(calculate(5, 3, subtract));  // 2