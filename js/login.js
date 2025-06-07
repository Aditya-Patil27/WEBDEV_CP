document.addEventListener('DOMContentLoaded', () => {
    // Login form validation
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const roleError = document.getElementById('role-error');
    const togglePassword = document.querySelector('.toggle-password');

    // Toggle password visibility
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }

    // Form validation
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Email validation
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Email is required';
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }

            // Password validation
            if (!passwordInput.value.trim()) {
                passwordError.textContent = 'Password is required';
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }

            // Role validation
            if (!roleSelect.value) {
                roleError.textContent = 'Please select a role';
                isValid = false;
            } else {
                roleError.textContent = '';
            }

            if (isValid) {
                // Generate a unique ID based on role and timestamp
                const timestamp = new Date().getTime();
                const randomNum = Math.floor(Math.random() * 1000);
                let uniqueId;
                
                if (roleSelect.value === 'player') {
                    uniqueId = `PLAYER-${timestamp}-${randomNum}`;
                } else if (roleSelect.value === 'coach') {
                    uniqueId = `COACH-${timestamp}-${randomNum}`;
                }
                
                // Simulate login authentication
                const userData = {
                    email: emailInput.value,
                    role: roleSelect.value,
                    uniqueId: uniqueId
                };

                // Store user data in session storage for persistence
                sessionStorage.setItem('user', JSON.stringify(userData));

                // Redirect based on role
                if (roleSelect.value === 'coach') {
                    window.location.href = 'dashboard.html';
                } else {
                    window.location.href = 'dashboard.html';
                }
            }
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Auto-fill form if remember-me was checked
    const storedUser = localStorage.getItem('rememberedUser');
    if (storedUser && emailInput && passwordInput) {
        const user = JSON.parse(storedUser);
        emailInput.value = user.email;
        if (user.role) {
            roleSelect.value = user.role;
        }
        document.getElementById('remember').checked = true;
    }

    // Remember me functionality
    const rememberCheckbox = document.getElementById('remember');
    if (rememberCheckbox) {
        rememberCheckbox.addEventListener('change', () => {
            if (rememberCheckbox.checked && emailInput.value) {
                const userToRemember = {
                    email: emailInput.value,
                    role: roleSelect.value
                };
                localStorage.setItem('rememberedUser', JSON.stringify(userToRemember));
            } else {
                localStorage.removeItem('rememberedUser');
            }
        });
    }
}); 