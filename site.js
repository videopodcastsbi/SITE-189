document.getElementById("closeButton").addEventListener("click", function () {
    if (confirm("Are you sure you want to close this file?")) {
        alert("Closing...");
        window.close(); // This might not work in all browsers due to security restrictions.
    } else {
        alert("Action canceled.");
    }
});
