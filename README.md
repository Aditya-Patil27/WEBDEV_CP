# Department of Sports Website

A responsive static website for the Department of Sports, Government of India, serving as a central information hub for players, coaches, and sports enthusiasts.

## 🚀 Features

### Core Features
- **Homepage**: Introduction to the department and latest sports news
- **Login System**: Role-based login for players and coaches with client-side validation
- **Coach Dashboard**: Simulated dashboard with invitation system using EmailJS
- **News Section**: Sports updates and government announcements with filtering capabilities
- **Sports Stars Page**: Two sections showcasing legendary players and current stars with detailed profiles
- **Events & Timetable**: Details of upcoming sports events with filter/sortable schedule
- **Contact Page**: Feedback form and embedded Google Map for office location

### Additional Features
- **Responsive Design**: Mobile-friendly UI that adapts to different screen sizes
- **Dark/Light Mode**: Toggle between dark and light themes
- **Local Storage**: Persistence for user preferences and login information
- **EmailJS Integration**: Send emails directly from the client-side
- **SVG Placeholder Graphics**: Custom vectored graphics for logo and hero backgrounds

## 📁 Project Structure

```
/sports-website/
│
├── index.html              # Homepage
├── login.html              # Login page for coaches/players
├── dashboard.html          # Dashboard after login
├── invite.html             # Email invitation form (coach)
├── players.html            # Sports stars page with legends and current athletes
├── events.html             # Sports events info and schedule
├── news.html               # News and updates
├── contact.html            # Contact & feedback
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   ├── main.js             # Common JavaScript functionality
│   ├── login.js            # Authentication and form validation
│   ├── invite.js           # EmailJS integration for invitations
│   └── data.js             # Data management for players and events
│
├── assets/
│   └── images/             # Image files for the website
│       ├── logo.svg        # SVG logo for the website
│       ├── hero-bg.svg     # Hero background SVG
│       └── about-sports.svg # About section SVG illustration
│
└── README.md               # Project documentation
```

## 🛠️ Technology Stack

- **HTML5**: Content structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactivity, form validation, and dynamic content
- **EmailJS**: Client-side email sending without backend
- **Google Maps API**: Office location display
- **LocalStorage/SessionStorage**: Client-side state persistence
- **SVG Graphics**: Vector images for better scaling and performance

## 🚦 Getting Started

1. Clone the repository
2. Open `index.html` in your browser to view the website
3. No server setup is required as this is a static website

### EmailJS Setup (for Invitation Feature)

To enable the email sending functionality:

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following variables in `js/invite.js`:
   - Replace `YOUR_USER_ID` with your EmailJS user ID
   - Replace `your_service_id` with your EmailJS service ID
   - Replace `your_template_id` with your EmailJS template ID

### Form Submission Setup

To enable the contact form:

1. Create an account on [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form action in `contact.html` with your Formspree form ID

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktops

## 🌙 Dark/Light Mode

The website features a dark/light mode toggle that:
- Persists user preference using localStorage
- Changes the color scheme of the entire website
- Is accessible via the moon/sun icon in the navigation bar

## 👥 User Roles

The website supports two user roles:
- **Player**: Access to training schedules and performance metrics
- **Coach**: Access to team management features and the ability to invite players

## 📷 Placeholder Images

This project includes placeholder images created with SVG:

1. **Logo (logo.svg)**: A simple emblem with circular sports icons and text
2. **Hero Background (hero-bg.svg)**: A gradient background with sports equipment silhouettes
3. **About Section (about-sports.svg)**: Athletic figures showing various sports activities

When implementing in production, replace these placeholders with actual photographs of:
- Indian athletes in action
- Sports facilities
- Department officials
- Event photos

## 📄 License

This project is for educational purposes only. All images and data used are fictional or for demonstration purposes only.

## 👨‍💻 Development Notes

- All form submissions are simulated for demonstration purposes
- In a real-world scenario, these would connect to a backend API
- The player and event data would typically come from a database rather than being hardcoded in JavaScript files 