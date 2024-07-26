
document.getElementById('enrollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const course = document.getElementById('course').value;
    const countdown = document.getElementById('countdown');
    let startDate;
    
    switch(course) {
        case 'higher-certificate':
            startDate = new Date('2024-09-01');
            break;
        case 'diploma':
            startDate = new Date('2024-10-01');
            break;
        case 'bit':
            startDate = new Date('2024-11-01');
            break;
        case 'bcom':
            startDate = new Date('2024-12-01');
            break;
    }
    
    const now = new Date();
    const timeDiff = startDate - now;
    
    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        countdown.textContent = `Course starts in ${days} days!`;
    } else {
        countdown.textContent = 'Course has already started or the date is invalid.';
    }
});
