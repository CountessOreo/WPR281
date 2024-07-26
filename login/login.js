// Hayley Treutens (578003) Kyle Smith (577999) Zirong Luo (600287) Jonathan Joubert (578085) Web Programming 281 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    

    if (username === 'admin' && password === 'password') {
   
        window.location.href = '../home.html';
    } else {
  
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
