// Menu Toggle Functionality
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// Email Sending Functionality
function sendMail() {
    // Cache form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input fields
    if (!name || !email || !number || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number (basic validation for digits only)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(number)) {
        alert("Please enter a valid phone number (digits only).");
        return;
    }

    // Parameters to send via EmailJS
    const params = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };

    // Disable the button during the email sending process
    const sendButton = document.querySelector("input[type='submit']");
    sendButton.disabled = true;
    sendButton.value = "Sending...";

    // Send email using EmailJS
    emailjs
        .send("service_6c7axe9", "template_l1lx627", params)
        .then(() => {
            alert("Email sent successfully!");
            // Reset form fields
            document.querySelector("form").reset();
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("Failed to send email. Please try again.");
        })
        .finally(() => {
            // Re-enable the button
            sendButton.disabled = false;
            sendButton.value = "Send Message";
        });
}
