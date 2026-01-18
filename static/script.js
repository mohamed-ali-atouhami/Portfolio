// Contact form handling - only initialize if form exists
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("forma");
    const emailBtn = document.getElementById("submit-email");
    
    // Only initialize form handler if form elements exist
    if (form && emailBtn) {
        const msg = document.getElementById("msg");
        const inptname = document.getElementById("input-name");
        const inptemail = document.getElementById("input-email");
        const inptmessage = document.getElementById("input-message");
        
        emailBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Show loading state
            if (msg) {
                msg.innerHTML = 'Sending...';
                msg.style.color = '#ff004f';
            }
            
            fetch("/sendEmail", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: inptname.value,
                    email: inptemail.value,
                    message: inptmessage.value
                })
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err || 'Network response was not ok');
                    });
                }
                return response.json();
            })
            .then(data => {
                form.reset();
                if (msg) {
                    msg.innerHTML = 'Message sent successfully!';
                    msg.style.color = '#61b752';
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 3000);
                }
            })
            .catch(err => {
                console.error('Form submission error:', err);
                if (msg) {
                    msg.innerHTML = 'Error sending message. Please check server console for details.';
                    msg.style.color = '#ff004f';
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 5000);
                }
            });
        });
    }
});
