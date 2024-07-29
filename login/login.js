// Hayley Treutens (578003) Kyle Smith (577999) Zirong Luo (600287) Jonathan Joubert (578085) Web Programming 281 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // List of valid username-password pairs
    const validCredentials = [
        { username: 'admin', password: 'password' },
        { username: 'Jonathan', password: '1' },
        { username: 'Hayley', password: '2' },
        { username: 'Kyle', password: '3' },
        { username: 'Zirong', password: '4' }
    ];

    const isValidUser = validCredentials.some(
        user => user.username === username && user.password === password
    );

    if (isValidUser) {
        window.location.href = '../home/home.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = '../home.html';
});
