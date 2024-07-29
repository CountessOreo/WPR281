const courses = [
    // Hayley Treutens (578003) Kyle Smith (577999) Zirong Luo (600287) Jonathan Joubert (578085) Web Programming 281
    {
        title: "Bachelor of Computing (Bcomp)",
        code: "BCOM001",
        duration: "3 years academic, 1 year workplace training",
        description: "Gain fundamental computer skills of diagnosing and developing workable solutions with our Bachelor of Computing degree. Furthermore, by providing best practices and solutions, you will learn how to apply ideas and integrate them in practical settings across many disciplines.You will get solid theoretical understanding based on practical implementations. In addition, the projects and practical assignments you will finish align with standard procedures in the workplace, giving you both soft and business-specific skills. These abilities include the capacity for teamwork, customer satisfaction training, effective communication, and the capacity to mentor others. Additionally, you will finish an internship at a domestic or foreign business. You will also carry out scholarly study and submit your results in an official dissertation.",
        modules: [
            { name: "Mathematics", lecturer: "Dr. Smith", venue: "Room 101", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Mathematics-181-MAT181.pdf", video: "https://www.youtube.com/watch?v=-2OOBEBq9-4&list=PLSQl0a2vh4HBeeP_1yWmG1mB2uGT08N4J" },
            { name: "Linear Programming", lecturer: "Prof. Johnson", venue: "Room 102", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Linear-Programming-181-LPR181.pdf", video: "https://www.youtube.com/watch?v=V7H1oUHXPkg" },
            { name: "Programming", lecturer: "Dr. Doe", venue: "Room 103", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Programming-181-PRG181.pdf", video: "https://www.youtube.com/watch?v=zOjov-2OZ0E" },
            { name: "Statistics", lecturer: "Prof. Lee", venue: "Room 104", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Statistics-181-STA181.pdf", video: "https://www.youtube.com/watch?v=uhxtUt_-GyM&list=PL1328115D3D8A2566" },
            { name: "Web Programming", lecturer: "Dr. White", venue: "Room 105", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Web-Programming-181-WPR181.pdf", video: "https://www.youtube.com/watch?v=gQojMIhELvM&list=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc" }
        ]
    },
    {
        title: "BIT",
        code: "BIT001",
        duration: "3 years",
        description: "This IT degree focuses on information systems modules and will equip you with fundamental understanding of software engineering and business intelligence. You will study a wide variety of topics, including mobile and wireless networks, artificial intelligence, and intelligent systems. \nThe IT degree will change you into a full professional with a variety of exciting options to pursue, including the production of mobile and web-based apps, as well as game development.",
        modules: [
            { name: "Database Sciences", lecturer: "Dr. Emily Johnson", venue: "Alpha Classroom", studyGuide: "study_guide_bit_database.pdf", video: "https://youtu.be/Zc14ZkWVhhs?si=il7svGI0BrQo0AtD" },
            { name: "Networking", lecturer: "Professor David Lee", venue: "Beta Classroom", studyGuide: "study_guide_bit_networking.pdf", video: "https://youtu.be/keeqnciDVOo?si=TM4HZgd13TMviA8r" },
            { name: "Business", lecturer: "Dr. Maria Rodriguez", venue: "Gamma Classroom", studyGuide: "study_guide_bit_business.pdf", video: "https://youtu.be/jffyqZRIcHc?si=RmavyZs8QzsVCQrf" },
            { name: "Maths", lecturer: "Professor James Carter", venue: "Phi Classroom", studyGuide: "study_guide_bit_maths.pdf", video: "https://youtu.be/xX5caFM5xMY?si=PgDpmiWJ9IVv689l" },
            { name: "Information Systems", lecturer: "Dr. Sarah Patel", venue: "Epsilon Classroom", studyGuide: "study_guide_bit_info_systems.pdf", video: "https://youtu.be/Qujsd4vkqFI?si=bTo5mIatJBblZUIS" }
        ]
    },
    {
        title: "Diploma",
        code: "DIP001",
        duration: "2½ years of academic training, 6 months of workplace training",
        description: "This inspiring diploma has trendy specializations that meet the demands of the working world. With these specializations, you'll be able to obtain a degree in high demand and take advantage of a plethora of fascinating employment prospectsThere are two phases to our diploma program in information technology: a general grounding phase and a specialized phase. While the specialization phase is career-oriented, the foundation phase provides knowledge about the realm of information technology.",
        modules: [
            { name: "Computer Architecture", lecturer: "Dr. Violet", venue: "Room 301", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Computer-Architecture-161-COA161.pdf", video: "https://www.youtube.com/watch?v=dV_lf1kyV9M" },
            { name: "Problem Solving", lecturer: "Prof. Indigo", venue: "Room 302", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Problem-Solving-161-PRS161.pdf", video: "https://www.youtube.com/watch?v=E5ENFnMqsHQ" },
            { name: "Internet of Things", lecturer: "Dr. Blue", venue: "Room 303", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Internet-of-Things-161-IOT161.pdf", video: "https://www.youtube.com/watch?v=6mBO2vqLv38" },
            { name: "End User Computing", lecturer: "Prof. Orange", venue: "Room 304", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/End-User-Computing-161-EUC161.pdf", video: "https://www.youtube.com/watch?v=h8tvoLPj8g0" },
            { name: "Business Communication", lecturer: "Dr. Red", venue: "Room 305", studyGuide: "https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Business-Communication-161-BUC161.pdf", video: "https://www.youtube.com/watch?v=5NhOVyjNnTk" }
        ]
    },
    {
        title: "Higher Certificate",
        code: "HIC001",
        duration: "1 year",
        description: "The amount of data around the globe is growing at an exponential rate. The rise of big data has totally revolutionized how businesses conduct themselves and understand their consumers, with organizations analysing massive amounts of data to spot trends and patterns and forecast future consumer behaviour. Given the above, it is unsurprising that the need for professional data gurus with extensive database abilities is growing. This certification will equip you with these abilities and enable you to enter the job market promptly. The information and skills you obtain will enable you to address operational business challenges in the data science domain, helping you to prosper in today's corporate climate.\n\nAfter completing the Higher Certificate: Information Technology (NQF level 6) in Database Development, the student can apply for Recognition of Prior Learning from Belgium Campus iTversity to continue his or her studies in one of the institution's other programs.\n•  Diploma in Information Technology\n•	Bachelor of Information Technology\n•  Bachelor of Computing",
        modules: [
            { name: "Optimising Systems", lecturer: "Professor Laura Adams", venue: "Zeta Classroom", studyGuide: "study_guide_hic_optimising.pdf", video: "https://youtu.be/FYlLqOKdMhE?si=ZDR0hD29WHWiKdyT" },
            { name: "Project Management", lecturer: "Dr. Michael Brown", venue: "Eta Classroom", studyGuide: "study_guide_hic_project_management.pdf", video: "https://youtu.be/XNDePDD_CV4?si=Vd8vRc1U7HjFFz7T" },
            { name: "Security", lecturer: "Professor Karen Lewis", venue: "Theta Classroom", studyGuide: "study_guide_hic_security.pdf", video: "https://youtu.be/SfT4FMkh1-w?si=eVW5Tg0WBQXxpF-f" },
            { name: "Enterprise Systems", lecturer: "Dr. Christopher White", venue: "Iota Classroom", studyGuide: "study_guide_hic_enterprise.pdf", video: "https://youtu.be/c9HfNg4a_Og?si=7V1XWEewDqWwhplx" },
            { name: "Database Models", lecturer: "Professor Rachel Kim", venue: "Kappa Classroom", studyGuide: "study_guide_hic_database.pdf", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ]
    }
];

let completedModules = [];
let selectedCourse = null;

document.getElementById('searchButton').addEventListener('click', function() {
    searchCourses();
});

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        searchCourses();
    }
});

function searchCourses() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    let found = false;

    if (query.length > 0) {
        courses.forEach(course => {
            if (course.title.toLowerCase().includes(query)) {
                found = true;
                const courseItem = document.createElement('div');
                courseItem.className = 'course-item';
                courseItem.innerHTML = `
                    <h3>${course.title}</h3>
                    <p><strong>Code:</strong> ${course.code}</p>
                    <p><strong>Duration:</strong> ${course.duration}</p><br>
                    <p>${course.description}</p>
                `;
                courseItem.addEventListener('click', () => displayCourseDetails(course));
                courseList.appendChild(courseItem);
            }
        });
    }

    if (!found) {
        const noCoursesItem = document.createElement('li');
        noCoursesItem.className = 'no-courses-found';
        noCoursesItem.innerText = 'No courses found';
        courseList.appendChild(noCoursesItem);
    }

    courseList.scrollIntoView({ behavior: 'smooth' });
}



function displayCourseDetails(course) {
    selectedCourse = course;
    toggleVisibility('courseList', false);
    toggleVisibility('courseDetails', true);
    document.getElementById('courseTitle').innerText = course.title;
    document.getElementById('courseDescription').innerText = course.description;

    const moduleTable = document.getElementById('moduleTable').getElementsByTagName('tbody')[0];
    moduleTable.innerHTML = '';

    course.modules.forEach(module => {
        const row = moduleTable.insertRow();
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'complete-checkbox';
        checkbox.checked = completedModules.includes(module.name); // Set checkbox state
        checkbox.addEventListener('change', () => toggleModuleCompletion(module.name));
        
        row.insertCell(0).appendChild(checkbox);
        row.insertCell(0).appendChild(document.createTextNode(` ${module.name}`));
        row.insertCell(1).innerText = module.lecturer;
        row.insertCell(2).innerText = module.venue;
        row.insertCell(3).innerHTML = `
            <a href="${module.studyGuide}" download>Download Guide</a> | 
            <a href="${module.video}" target="_blank">Watch Video</a>
        `;
    });

    document.getElementById('enrollButton').style.display = 'inline-block';
    document.getElementById('viewCompletedModulesButton').style.display = 'inline-block';

    preparePrintableSection(course);
    courseDetails.scrollIntoView({ behavior: 'smooth' });
}

function toggleModuleCompletion(moduleName) {
    const index = completedModules.indexOf(moduleName);
    const checkbox = document.querySelector(`input[type="checkbox"][data-module="${moduleName}"]`);
    
    if (index > -1) {
        completedModules.splice(index, 1);
        checkbox.parentElement.style.backgroundColor = ''; 
    } else {
        completedModules.push(moduleName);
        checkbox.parentElement.style.backgroundColor = '#d3ffd3'; 
    }
}

document.getElementById('printButton').addEventListener('click', () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
        <head>
            <title>Print Course</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f4f4f4; }
            </style>
        </head>
        <body>
            <h1>${document.getElementById('printableCourseTitle').innerText}</h1>
            <p>${document.getElementById('printableCourseDescription').innerText}</p>
            <table>
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Lecturer</th>
                        <th>Venue</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    ${document.getElementById('printableModuleTable').innerHTML}
                </tbody>
            </table>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
});

document.getElementById('enrollButton').addEventListener('click', () => {
    window.location.href = '../enroll/enroll.html';
});

document.getElementById('viewCompletedModulesButton').addEventListener('click', () => {
    toggleVisibility('courseDetails', false);
    toggleVisibility('completedModulesSection', true);

    const completedModulesList = document.getElementById('completedModulesList');
    completedModulesList.innerHTML = ''; // Clear the list

    if (completedModules.length === 0) {
        completedModulesList.innerHTML = '<p class="no-completed-modules">No modules have been completed yet.</p>';
    } else {
        const ol = document.createElement('ol');
        completedModules.forEach(module => {
            const li = document.createElement('li');
            li.innerText = module;
            ol.appendChild(li);
        });
        completedModulesList.appendChild(ol);
    }
});

function toggleVisibility(elementId, shouldDisplay) {
    const element = document.getElementById(elementId);
    element.style.display = shouldDisplay ? 'block' : 'none';
}

document.getElementById('backButton').addEventListener('click', () => {
    toggleVisibility('completedModulesSection', false);
    toggleVisibility('courseDetails', true);
});

// Printable section
function preparePrintableSection(course) {
    document.getElementById('printableCourseTitle').innerText = course.title;
    document.getElementById('printableCourseDescription').innerText = course.description;

    const printableModuleTable = document.getElementById('printableModuleTable');
    printableModuleTable.innerHTML = '';

    course.modules.forEach(module => {
        const row = printableModuleTable.insertRow();
        row.insertCell(0).innerText = module.name;
        row.insertCell(1).innerText = module.lecturer;
        row.insertCell(2).innerText = module.venue;
        row.insertCell(3).innerHTML = `
            <a href="${module.studyGuide}" download>Download Guide</a> | 
            <a href="${module.video}" target="_blank">Watch Video</a>
        `;
    });
}
