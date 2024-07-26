
const courses = [
    {
        title: "Bcom",
        code: "BCOM001",
        duration: "3 years",
        description: "Bachelor of Commerce in various fields.",
        modules: [
            { name: "Maths", lecturer: "Dr. Smith", venue: "Room 101", studyGuide: "study_guide_bcom_maths.pdf", video: "https://youtu.be/HeQX2HjkcNo?si=QDDkIuCCIy4j4CCI" },
            { name: "Linear Programming", lecturer: "Prof. Johnson", venue: "Room 102", studyGuide: "study_guide_bcom_linear_programming.pdf", video: "https://youtu.be/Bzzqx1F23a8?si=1lcEk0TvBDHHGzQf" },
            { name: "Programming", lecturer: "Dr. Doe", venue: "Room 103", studyGuide: "study_guide_bcom_programming.pdf", video: "https://youtu.be/SS19Q-_saCc?si=sG3Xba-YKEOh7ob4" },
            { name: "Statistics", lecturer: "Prof. Lee", venue: "Room 104", studyGuide: "study_guide_bcom_statistics.pdf", video: "https://youtu.be/XZo4xyJXCak?si=LfrqLQCvkSLWusth" },
            { name: "Web Programming", lecturer: "Dr. White", venue: "Room 105", studyGuide: "study_guide_bcom_web_programming.pdf", video: "https://youtu.be/G3e-cpL7ofc?si=EtyIaZy2k7w1V89G" }
        ]
    },
    {
        title: "BIT",
        code: "BIT001",
        duration: "3 years",
        description: "Bachelor of Information Technology with specializations.",
        modules: [
            { name: "Database Sciences", lecturer: "Dr. Green", venue: "Room 201", studyGuide: "study_guide_bit_database.pdf", video: "https://youtu.be/Zc14ZkWVhhs?si=il7svGI0BrQo0AtD" },
            { name: "Networking", lecturer: "Prof. Black", venue: "Room 202", studyGuide: "study_guide_bit_networking.pdf", video: "https://youtu.be/keeqnciDVOo?si=TM4HZgd13TMviA8r" },
            { name: "Business", lecturer: "Dr. Brown", venue: "Room 203", studyGuide: "study_guide_bit_business.pdf", video: "https://youtu.be/jffyqZRIcHc?si=RmavyZs8QzsVCQrf" },
            { name: "Maths", lecturer: "Prof. Grey", venue: "Room 204", studyGuide: "study_guide_bit_maths.pdf", video: "https://youtu.be/xX5caFM5xMY?si=PgDpmiWJ9IVv689l" },
            { name: "Information Systems", lecturer: "Dr. Yellow", venue: "Room 205", studyGuide: "study_guide_bit_info_systems.pdf", video: "https://youtu.be/Qujsd4vkqFI?si=bTo5mIatJBblZUIS" }
        ]
    },
    {
        title: "Diploma",
        code: "DIP001",
        duration: "2 years",
        description: "Diploma in various technical fields.",
        modules: [
            { name: "Computer Architecture", lecturer: "Dr. Violet", venue: "Room 301", studyGuide: "study_guide_diploma_architecture.pdf", video: "https://youtu.be/dV_lf1kyV9M?si=R3t4exb3NU67Ewvn" },
            { name: "Problem Solving", lecturer: "Prof. Indigo", venue: "Room 302", studyGuide: "study_guide_diploma_problem_solving.pdf", video: "https://youtu.be/LxgMdjyw8uw?si=U8bvit9_MybfiKpy" },
            { name: "Internet of Things", lecturer: "Dr. Blue", venue: "Room 303", studyGuide: "study_guide_diploma_iot.pdf", video: "https://youtu.be/LVlT4sX6uVs?si=3i34crxVCmn79Usw" },
            { name: "End User Computing", lecturer: "Prof. Orange", venue: "Room 304", studyGuide: "study_guide_diploma_euc.pdf", video: "https://youtu.be/h8tvoLPj8g0?si=pGVuTKeZwMrjfSvW" },
            { name: "Business Communication", lecturer: "Dr. Red", venue: "Room 305", studyGuide: "study_guide_diploma_communication.pdf", video: "https://youtu.be/mvLJuQaLKkg?si=ixdRQH_YyITkcpW8" }
        ]
    },
    {
        title: "Higher Certificate",
        code: "HIC001",
        duration: "1 year",
        description: "Higher Certificate in foundational technology skills.",
        modules: [
            { name: "Optimising Systems", lecturer: "Dr. Cyan", venue: "Room 401", studyGuide: "study_guide_hic_optimising.pdf", video: "https://youtu.be/FYlLqOKdMhE?si=ZDR0hD29WHWiKdyT" },
            { name: "Project Management", lecturer: "Prof. Magenta", venue: "Room 402", studyGuide: "study_guide_hic_project_management.pdf", video: "https://youtu.be/XNDePDD_CV4?si=Vd8vRc1U7HjFFz7T" },
            { name: "Security", lecturer: "Dr. Lavender", venue: "Room 403", studyGuide: "study_guide_hic_security.pdf", video: "https://youtu.be/SfT4FMkh1-w?si=eVW5Tg0WBQXxpF-f" },
            { name: "Enterprise Systems", lecturer: "Prof. Maroon", venue: "Room 404", studyGuide: "study_guide_hic_enterprise.pdf", video: "https://youtu.be/c9HfNg4a_Og?si=7V1XWEewDqWwhplx" },
            { name: "Database Models", lecturer: "Dr. Beige", venue: "Room 405", studyGuide: "study_guide_hic_database.pdf", video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
        ]
    }
];

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    courses.forEach(course => {
        if (course.title.toLowerCase().includes(query)) {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';
            courseItem.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Code:</strong> ${course.code}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p>${course.description}</p>
            `;
            courseItem.addEventListener('click', () => displayCourseDetails(course));
            courseList.appendChild(courseItem);
        }
    });
});

function displayCourseDetails(course) {
    document.getElementById('courseList').style.display = 'none';
    document.getElementById('courseDetails').style.display = 'block';
    document.getElementById('courseTitle').innerText = course.title;
    document.getElementById('courseDescription').innerText = course.description;
    const moduleTable = document.getElementById('moduleTable').getElementsByTagName('tbody')[0];
    moduleTable.innerHTML = '';

    course.modules.forEach(module => {
        const row = moduleTable.insertRow();
        row.insertCell(0).innerText = module.name;
        row.insertCell(1).innerText = module.lecturer;
        row.insertCell(2).innerText = module.venue;
        row.insertCell(3).innerHTML = `
            <a href="${module.studyGuide}" download>Download Guide</a> | 
            <a href="${module.video}" target="_blank">Watch Video</a>
        `;
    });
}

