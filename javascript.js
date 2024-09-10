document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Show the loading overlay
    document.querySelector('.loading-overlay').style.display = 'flex';

    // Simulate login process with a delay
    setTimeout(function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('error-message');

        if (username === "user" && password === "pass") {
            // Display success message
            if (errorMessage) {
                errorMessage.textContent = "Login successful!";
                errorMessage.style.color = "green"; // Change color to green for success
            }

            // Hide the loading overlay after a short delay
            setTimeout(function() {
                window.location.href = "ayiee.html";
            }, 1000); // Adjust the delay as needed (1000 ms = 1 second)
        } else {
            // Check if the error message element exists
            if (errorMessage) {
                // Display error message if credentials are incorrect
                errorMessage.textContent = "Invalid username or password!";
                errorMessage.style.color = "red"; 
            }
            // Hide the loading overlay after processing
            document.querySelector('.loading-overlay').style.display = 'none';
        }
    }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
});
