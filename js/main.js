document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = document.querySelector('.fa-moon');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        moonIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                moonIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                moonIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-nav-active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Modal functionality for homepage
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close');
    
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });
    }
    
    if (closeBtn && loginModal) {
        closeBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }
    
    // Modal login form validation and submission
    const modalLoginForm = document.getElementById('modal-login-form');
    if (modalLoginForm) {
        // Toggle password visibility for modal form
        const modalTogglePassword = document.querySelector('#login-modal .toggle-password');
        const modalPasswordInput = document.getElementById('modal-password');
        
        if (modalTogglePassword && modalPasswordInput) {
            modalTogglePassword.addEventListener('click', () => {
                const type = modalPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                modalPasswordInput.setAttribute('type', type);
                modalTogglePassword.classList.toggle('fa-eye');
                modalTogglePassword.classList.toggle('fa-eye-slash');
            });
        }
        
        modalLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('modal-email').value;
            const password = document.getElementById('modal-password').value;
            const role = document.getElementById('modal-role').value;
            
            // Basic validation
            let isValid = true;
            
            if (!email || !isValidEmail(email)) {
                isValid = false;
                alert('Please enter a valid email address');
            }
            
            if (!password || password.length < 6) {
                isValid = false;
                alert('Password must be at least 6 characters');
            }
            
            if (!role) {
                isValid = false;
                alert('Please select a role');
            }
            
            if (isValid) {
                // Generate a unique ID based on role and timestamp
                const timestamp = new Date().getTime();
                const randomNum = Math.floor(Math.random() * 1000);
                let uniqueId;
                
                if (role === 'player') {
                    uniqueId = `PLAYER-${timestamp}-${randomNum}`;
                } else if (role === 'coach') {
                    uniqueId = `COACH-${timestamp}-${randomNum}`;
                }
                
                // Store user data in session storage
                const userData = {
                    email: email,
                    role: role,
                    uniqueId: uniqueId
                };
                
                sessionStorage.setItem('user', JSON.stringify(userData));
                
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }
        });
    }
    
    // Helper function for email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Check if user is logged in (session storage)
    const userSession = sessionStorage.getItem('user');
    const loginButton = document.getElementById('login-btn');
    
    if (userSession && loginButton) {
        const user = JSON.parse(userSession);
        loginButton.textContent = 'Dashboard';
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }
    
    // Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks2 = document.querySelectorAll('.nav-links a');
    
    navLinks2.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // News loading for homepage
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        fetchNews();
    }
    
    // Function to fetch and display news
    function fetchNews() {
        // Simulated news data (in a real app, this would be fetched from an API)
        const newsData = [
            {
                id: 1,
                title: 'National Sports Awards Announced',
                content: 'The Ministry of Youth Affairs and Sports has announced the National Sports Awards for the year 2024. The awards will be presented on August 29th.',
                date: 'July 15, 2024',
                image: 'assets/images/news1.jpg'
            },
            {
                id: 2,
                title: 'India Wins Gold at Asian Games',
                content: 'Indian athletes secured 5 gold medals at the recent Asian Games, making it the country\'s best performance in the history of the event.',
                date: 'June 28, 2024',
                image: 'assets/images/news2.jpg'
            },
            {
                id: 3,
                title: 'New Training Center Inauguration',
                content: 'A state-of-the-art sports training center has been inaugurated in Delhi, providing facilities for athletes across multiple disciplines.',
                date: 'June 15, 2024',
                image: 'assets/images/news3.jpg'
            }
        ];
        
        // Dynamically create news cards
        newsData.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            
            newsCard.innerHTML = `
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <span class="news-date">${news.date}</span>
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                    <a href="news.html?id=${news.id}" class="read-more">Read More</a>
                </div>
            `;
            
            newsContainer.appendChild(newsCard);
        });
    }
}); 