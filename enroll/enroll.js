// Hayley Treutens (578003) Kyle Smith (577999) Zirong Luo (600287) Jonathan Joubert (578085) Web Programming 281 
document.getElementById('enrollForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const applicantName = document.getElementById("name").value;
    const courseCode = document.getElementById('course').value;
    const courseStartDates = {
        "HIC001": "2024-09-01",
        "DIP001": "2024-10-01",
        "BIT001": "2024-11-01",
        "BCOM001": "2024-12-01"
    };

    const startDate = new Date(courseStartDates[courseCode]);
    const currentDate = new Date();
    const timeDiff = startDate - currentDate;

    if (timeDiff <= 0) {
        document.getElementById('countdown').innerText = "The course has already started!";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = `Congratulations ${applicantName}!!! You have been successfully enrolled! Course starts in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;

    createFireworks();
});

function createFireworks() {
    const colors = ['color1', 'color2', 'color3', 'color4'];
    for (let i = 0; i < 5; i++) { 
        colors.forEach(color => {
            const firework = document.createElement('div');
            firework.classList.add('firework', color);
            
            document.body.appendChild(firework);

            // Randomize position 
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            firework.style.top = `${Math.random() * viewportHeight}px`;
            firework.style.left = `${Math.random() * viewportWidth}px`;

            setTimeout(() => {
                firework.remove();
            }, 2000); 
        });
    }
}

//Changes "enroll" -> "enrolled" when clicking button
function changeButtonText(){
    if (document.getElementById("name").value != "" || document.getElementById("email").value != ""){
        document.getElementById("btn").innerHTML = "Enrolled";
    }
}

//Clear Button to clear the form and change enrolled back to enroll
function clearForm(){
    if (document.getElementById("name").value != "" || document.getElementById("email").value ==""){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("btn").innerHTML = "Enroll";
    }
}