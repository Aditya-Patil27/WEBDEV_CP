document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and is a coach
    const userSession = sessionStorage.getItem('user');
    if (!userSession) {
        window.location.href = 'login.html';
        return;
    }

    const user = JSON.parse(userSession);
    if (user.role !== 'coach') {
        window.location.href = 'dashboard.html';
        return;
    }

    // Load players list
    loadPlayers();

    // Handle form submission
    const scheduleForm = document.getElementById('scheduleForm');
    scheduleForm.addEventListener('submit', handleScheduleSubmit);
});

async function loadPlayers() {
    try {
        // In a real application, this would be an API call to get the list of players
        const players = [
            { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com' },
            { id: 2, name: 'Priya Singh', email: 'priya@example.com' },
            { id: 3, name: 'Vikram Sharma', email: 'vikram@example.com' }
        ];

        const playersList = document.getElementById('playersList');
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player-item';
            playerDiv.innerHTML = `
                <input type="checkbox" id="player-${player.id}" name="players" value="${player.id}" data-email="${player.email}">
                <label for="player-${player.id}">${player.name}</label>
            `;
            playersList.appendChild(playerDiv);
        });
    } catch (error) {
        console.error('Error loading players:', error);
        alert('Failed to load players list. Please try again.');
    }
}

async function handleScheduleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const selectedPlayers = Array.from(document.querySelectorAll('input[name="players"]:checked'))
        .map(checkbox => ({
            id: checkbox.value,
            email: checkbox.dataset.email
        }));

    if (selectedPlayers.length === 0) {
        alert('Please select at least one player');
        return;
    }

    const trainingData = {
        type: formData.get('trainingType'),
        date: formData.get('date'),
        startTime: formData.get('startTime'),
        duration: formData.get('duration'),
        location: formData.get('location'),
        description: formData.get('description'),
        players: selectedPlayers
    };

    try {
        // In a real application, this would be an API call to save the training session
        await saveTrainingSession(trainingData);
        
        // Send email notifications
        await sendEmailNotifications(trainingData);
        
        alert('Training session scheduled successfully!');
        window.location.href = 'dashboard.html';
    } catch (error) {
        console.error('Error scheduling training:', error);
        alert('Failed to schedule training session. Please try again.');
    }
}

async function saveTrainingSession(trainingData) {
    // Simulate API call to save training session
    return new Promise((resolve) => {
        setTimeout(() => {
            // Store in localStorage for demo purposes
            const sessions = JSON.parse(localStorage.getItem('trainingSessions') || '[]');
            sessions.push({
                ...trainingData,
                id: Date.now(),
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('trainingSessions', JSON.stringify(sessions));
            resolve();
        }, 1000);
    });
}

async function sendEmailNotifications(trainingData) {
    // In a real application, this would be an API call to send emails
    const emailPromises = trainingData.players.map(player => {
        const emailContent = {
            to: player.email,
            subject: 'New Training Session Scheduled',
            body: `
                Dear ${player.name},
                
                A new training session has been scheduled:
                
                Type: ${trainingData.type}
                Date: ${trainingData.date}
                Time: ${trainingData.startTime}
                Duration: ${trainingData.duration} hours
                Location: ${trainingData.location}
                
                Description:
                ${trainingData.description}
                
                Please make sure to attend.
                
                Best regards,
                Department of Sports
            `
        };

        // Simulate sending email
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Email sent to:', player.email, emailContent);
                resolve();
            }, 500);
        });
    });

    await Promise.all(emailPromises);
} 