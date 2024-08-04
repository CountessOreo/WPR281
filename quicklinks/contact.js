const Name =document.getElementById('name');
const Emails =document.getElementById('email');
const Subject =document.getElementById('sbjt');
const Message =document.getElementById('msg');
const submit =document.getElementsByClassName('contactform')[0];

submit.addEventListener('submit', (i)=>{
    i.preventDefault();
    let emailformatting = `
    <h1>Contact Form Entry</h1>
    <h1>Web Programming 281: Hayley Treutens, Kyle G. Smith, Zirong Luo, Jonathan R. Joubert.</h1>
    <br>
    <h2>Sender Information:
    <h2>
    <b>Name: </b>${Name.value}
    <br>
    <b>Email: </b>${Emails.value}
    <br>
    <b>Message: </b>${Message.value}
    </h2>
    `
    Email.send({
        SecureToken : "dc3e1a45-19f0-4e0a-b451-80644edd07d8",
        To : 'rjjoubert007@gmail.com',
        From : "jonathan@wpr181.fibco.co.za",
        Subject : "Subject: " + Subject.value,
        Body : emailformatting
    }).then(window.open('./emailsent.html'));

});
    
