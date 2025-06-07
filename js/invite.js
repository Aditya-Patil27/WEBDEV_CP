document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    // Note: You would need to replace 'YOUR_USER_ID' with an actual EmailJS public key
    emailjs.init("YOUR_USER_ID");
    
    const inviteForm = document.getElementById('invite-form');
    const playerNameInput = document.getElementById('player-name');
    const toEmailInput = document.getElementById('to-email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('success-message');
    
    if (inviteForm) {
        inviteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Validate form
            if (!validateForm()) {
                return;
            }
            
            // Replace placeholder with actual player name in the message
            const message = messageInput.value.replace('{{player_name}}', playerNameInput.value);
            
            // Prepare template parameters for EmailJS
            const templateParams = {
                to_email: toEmailInput.value,
                player_name: playerNameInput.value,
                subject: subjectInput.value,
                message: message,
                from_name: 'Department of Sports, Government of India',
                reply_to: 'info@sports.gov.in'
            };
            
            // Show loading state
            document.querySelector('.submit-btn').textContent = 'Sending...';
            document.querySelector('.submit-btn').disabled = true;
            
            // Send email using EmailJS
            // Note: Replace 'your_service_id' and 'your_template_id' with actual values
            emailjs.send('your_service_id', 'your_template_id', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    
                    // Show success message
                    inviteForm.reset();
                    inviteForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form after 3 seconds
                    setTimeout(function() {
                        successMessage.style.display = 'none';
                        inviteForm.style.display = 'block';
                        document.querySelector('.submit-btn').textContent = 'Send Invitation';
                        document.querySelector('.submit-btn').disabled = false;
                    }, 3000);
                    
                }, function(error) {
                    console.log('Failed to send email:', error);
                    alert('Failed to send invitation. Please try again later.');
                    document.querySelector('.submit-btn').textContent = 'Send Invitation';
                    document.querySelector('.submit-btn').disabled = false;
                });
        });
    }
    
    // Form validation
    function validateForm() {
        let isValid = true;
        const emailError = document.getElementById('email-error');
        
        // Email validation
        if (!toEmailInput.value.trim()) {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(toEmailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        return isValid;
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Message template preview update (real-time)
    if (playerNameInput) {
        playerNameInput.addEventListener('input', function() {
            updateMessagePreview();
        });
    }
    
    function updateMessagePreview() {
        if (messageInput.value.includes('{{player_name}}')) {
            const playerName = playerNameInput.value || '{{player_name}}';
            const previewText = messageInput.value.replace('{{player_name}}', playerName);
            
            // Create a temporary element to avoid directly manipulating the textarea
            const tempElement = document.createElement('div');
            tempElement.textContent = previewText;
            
            // You could show this preview somewhere if needed
            // console.log(tempElement.textContent);
        }
    }
}); 