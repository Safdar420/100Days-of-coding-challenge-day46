//  Q n0 136
for (var i = 1; i <= 5; i++) {
    console.log("iteration ".concat(i, ", i value:,i"));
}
//  Q no 137
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message); // Logs the error message
}
