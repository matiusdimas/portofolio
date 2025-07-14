AOS.init({
    duration: 1000,
    once: true,
});

// Data proyek tambahan
const additionalProjects = [
    {
        title: "Motorcycle Spare Parts Information System",
        subject: "Information System Project Analysis",
        description:
            "Designed a web-based system for motorcycle spare parts sales and transaction recording, including risk analysis and functional requirements.",
        tech: ["CodeIgniter 3", "MySQL", "Figma"],
        role:
            "Developed the system architecture, designed the database and transaction flow, and built the entire application using CodeIgniter.",
        pdf: "./assets/makalah/Makalah Aproksi.pdf",
    },
    {
        title: "August Independence Day Competition Management System",
        subject: "Management Information System",
        description:
            "Created a web-based information system for registration and management of August 17th competitions using CodeIgniter 3.",
        tech: ["CodeIgniter 3", "PHP", "MySQL"],
        role:
            "Designed the registration flow, managed admin and participants, and developed both frontend and backend using the MVC framework.",
        pdf: "./assets/makalah/Makalah Sistem Informasi Manajamen.pdf",
    },
    {
        title: "Business Process of Honey Sales at PT Madu Pramuka",
        subject: "Business Process Observation",
        description:
            "Analyzed PT Madu Pramuka's business processes from production to distribution and marketing using interviews and SWOT analysis.",
        tech: ["SWOT", "Field Observation", "Business Analysis"],
        role:
            "Handled business process documentation and developed a SWOT analysis report including distribution flow and digital accounting system.",
        pdf: "./assets/makalah/Makalah Proses BIsnis.pdf",
    },
    {
        title: "Inpatient Hospital System",
        subject: "Database Application",
        description:
            "Designed ERD, LRS, and database schema for a hospital inpatient system using table relationships and SQL triggers.",
        tech: ["MySQL", "ERD", "LRS"],
        role:
            "Created ERD and LRS, designed table structures, and wrote SQL scripts and triggers to manage data flow and maintain database integrity.",
        pdf: "./assets/makalah/Makalah Aplikasi Basis Data.pdf",
    },
    {
        title: "Community Reporting and Suggestion Program",
        subject: "Program Design",
        description:
            "Developed a simple application-based public service program for RT/RW residents to submit reports and suggestions.",
        tech: ["PHP", "MySQL", "HTML/CSS"],
        role:
            "Designed the system flow, built functionalities for registration/login, report submission, and proposals, and structured pseudocode and initial UI.",
        pdf: "./assets/makalah/Makalah Perancangan Program.pdf",
    },
    {
        title: "Chi & Pang Family: Dimsum, Okonomiyaki, and Lemon Tea Business",
        subject: "Entrepreneurship / Business Plan",
        description:
            "This paper discusses a business plan for a Chinese-Japanese snack brand called Chi & Pang Family. Main products include dimsum, okonomiyaki, and lemon tea. Includes Business Model Canvas, organizational structure, marketing strategy, production cost details, pricing, and Break Even Point (BEP) calculations.",
        role:
            "Responsible for food production and stock management. Contributed heavily to report writing, BEP calculation, and business report design.",
        tech: ["Business Plan", "BMC", "Cost Analysis"],
        pdf: "./assets/makalah/Makalah Enterprenership.pdf",
    },
    {
        title: "Rental System Website Design - REV (HCI)",
        subject: "Human-Computer Interaction",
        description:
            "Designed an electric car rental website using the Design Thinking approach, covering Empathize, Define, Ideate, Prototype, and Test stages. Focused on UI/UX and user-friendly navigation.",
        role:
            "Led UI design using Figma, created wireframes, user flow, and documented the Design Thinking process. Also contributed significantly to paper writing and documentation.",
        tech: ["Figma", "UI/UX", "Black Box Testing"],
        pdf: "./assets/makalah/Makalah IMK.pdf",
    },
    {
        title: "Rental System Website Proposal - REV (ISPM)",
        subject: "Information System Project Management",
        description:
            "Proposed an electric vehicle rental information system including business goals, scope, budget, project timeline, and final outputs such as applications, documentation, and scientific articles.",
        role:
            "Prepared the technical proposal, estimated project budget, analyzed system requirements, and developed implementation documentation and user training materials.",
        tech: ["Project Planning", "Cost Estimation", "System Documentation"],
        pdf: "./assets/makalah/Makalah MPSI.pdf",
    },
];


let isProjectsAdded = false;

function showMoreProjects() {
    if (isProjectsAdded) return;
    const row = document.querySelector(
        ".projects-section > .container > .row"
    );

    additionalProjects.forEach((project, index) => {
        const col = document.createElement("div");
        col.className = "col-lg-6 col-md-6";
        col.setAttribute("data-aos", "fade-up");

        const techTags = project.tech
            .map((tag) => `<span class="tech-tag">${tag}</span>`)
            .join("");

        const roleHTML = project.role
            ? `<p class="project-role"><strong>Role & Contribution:</strong> ${project.role}</p>`
            : "";

        const pdfButtonHTML = project.pdf
            ? `<button class="btn-paper-link" onclick="openPDFModal('${project.pdf}')"><i class="fas fa-eye"></i> View Paper</button>`
            : "";

        col.innerHTML = `
      <div class="project-card">
        <div class="project-card-body">
          <h4 class="project-title">${project.title}</h4>
          <p class="project-subject">${project.subject}</p>
          <p class="project-description">${project.description}</p>
          ${roleHTML}
          <div class="project-tech">
            <div>
            ${techTags}
            </div>
            ${pdfButtonHTML}
          </div>
        </div>
      </div>
    `;
        row.appendChild(col);
    });

    // Sembunyikan tombol setelah menampilkan semua proyek
    document.querySelector(".btn-projects").style.display = "none";

    // Inisialisasi ulang AOS untuk elemen yang baru ditambahkan
    AOS.refresh();

    isProjectsAdded = true;
}
function openPDFModal(pdfPath) {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfViewer");
    iframe.src = pdfPath;
    modal.style.display = "flex";
}

function closePDFModal() {
    const modal = document.getElementById("pdfModal");
    const iframe = document.getElementById("pdfViewer");
    modal.style.display = "none";
    iframe.src = ""; // bersihkan agar tidak terus load
}

// Tutup modal jika klik luar area
window.onclick = function (event) {
    const modal = document.getElementById("pdfModal");
    if (event.target === modal) {
        closePDFModal();
    }
};