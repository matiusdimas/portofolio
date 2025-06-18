AOS.init({
    duration: 1000,
    once: true,
});

// Data proyek tambahan
const additionalProjects = [
    {
        title: "Sistem Informasi Toko Spare Part",
        subject: "Analisa Proyek Sistem Informasi",
        description:
            "Merancang sistem penjualan dan pencatatan transaksi sparepart motor berbasis web dengan analisis risiko dan kebutuhan fungsional.",
        tech: ["CodeIgniter 3", "MySQL", "Figma"],
        role: "Mengembangkan arsitektur sistem, merancang database dan alur transaksi, serta membangun aplikasi berbasis CodeIgniter secara menyeluruh.",
        pdf: "./assets/makalah/Makalah Aproksi.pdf",
    },
    {
        title: "Sistem Informasi Manajemen Lomba Agustusan",
        subject: "Sistem Informasi Manajemen",
        description:
            "Membuat sistem informasi berbasis web untuk pendaftaran dan manajemen lomba 17 Agustus berbasis CodeIgniter 3.",
        tech: ["CodeIgniter 3", "PHP", "MySQL"],
        role: "Membuat alur sistem pendaftaran, pengelolaan admin dan peserta, serta mengembangkan frontend dan backend menggunakan framework MVC.",
        pdf: "./assets/makalah/Makalah Sistem Informasi Manajamen.pdf",
    },
    {
        title: "Proses Bisnis Penjualan Madu PT Madu Pramuka",
        subject: "Observasi Proses Bisnis",
        description:
            "Analisis proses bisnis PT Madu Pramuka mulai dari produksi, distribusi, hingga pemasaran dengan pendekatan wawancara dan SWOT.",
        tech: ["SWOT", "Observasi Lapangan", "Business Analysis"],
        role: "Menangani dokumentasi proses bisnis dan menyusun laporan analisis SWOT, termasuk alur distribusi dan sistem akuntansi digital.",
        pdf: "./assets/makalah/Makalah Proses BIsnis.pdf",
    },
    {
        title: "Sistem Rawat Inap Rumah Sakit",
        subject: "Aplikasi Basis Data",
        description:
            "Perancangan ERD, LRS, dan skema database untuk sistem rawat inap rumah sakit menggunakan trigger dan relasi antar tabel.",
        tech: ["MySQL", "ERD", "LRS"],
        role: "Membuat ERD, LRS, merancang struktur tabel, serta menulis skrip SQL dan trigger untuk mengatur alur data dan integritas basis data.",
        pdf: "./assets/makalah/Makalah Aplikasi Basis Data.pdf",
    },
    {
        title: "Program Pelaporan & Usulan Masyarakat",
        subject: "Perancangan Program",
        description:
            "Membangun program layanan masyarakat berbasis aplikasi sederhana untuk menyalurkan laporan dan usulan warga RT/RW.",
        tech: ["PHP", "MySQL", "HTML/CSS"],
        role: "Mendesain alur sistem, membangun fungsionalitas register/login, input laporan dan usulan serta mengatur pseudocode dan UI awal.",
        pdf: "./assets/makalah/Makalah Perancangan Program.pdf",
    },
    {
        title:
            "Chi & Pang Family: Bisnis Kuliner Dimsum, Okonomiyaki, dan Lemon Tea",
        subject: "Kewirausahaan / Business Plan",
        description:
            "Makalah ini membahas perencanaan bisnis makanan ringan khas Cina dan Jepang dengan nama brand Chi & Pang Family. Produk utama meliputi dimsum, okonomiyaki, dan lemon tea. Disusun lengkap dengan analisis Business Model Canvas, struktur organisasi, strategi pemasaran, rincian biaya produksi, harga jual, hingga perhitungan Break Even Point (BEP).",
        role: "Bertanggung jawab dalam proses produksi makanan dan manajemen stok. Juga berkontribusi besar dalam penyusunan isi laporan, perhitungan BEP, serta desain laporan bisnis.",
        tech: ["Business Plan", "BMC", "Analisis Biaya"],
        pdf: "./assets/makalah/Makalah Enterprenership.pdf",
    },
    {
        title: "Perancangan Sistem Rental Website REV (IMK)",
        subject: "Interaksi Manusia dan Komputer",
        description:
            "Perancangan sistem rental mobil listrik berbasis web dengan pendekatan design thinking yang mencakup tahapan Empathize, Define, Ideate, Prototype, dan Test. Fokusnya pada UI/UX serta efisiensi navigasi dan user experience.",
        role: "Berperan dalam perancangan UI menggunakan Figma, menyusun wireframe, user flow, serta dokumentasi proses design thinking. Dominan juga dalam penulisan dan dokumentasi makalah.",
        tech: ["Figma", "UI/UX", "Black Box Testing"],
        pdf: "./assets/makalah/Makalah IMK.pdf",
    },
    {
        title: "Perancangan Sistem Rental Website REV (MPSI)",
        subject: "Manajemen Proyek Sistem Informasi",
        description:
            "Proposal proyek sistem informasi rental mobil listrik mencakup tujuan bisnis, ruang lingkup, biaya, jadwal proyek, serta luaran berupa sistem aplikasi, dokumen, dan artikel ilmiah.",
        role: "Menyusun proposal teknis, merancang anggaran proyek, menganalisis kebutuhan sistem, serta menyusun dokumentasi implementasi dan pelatihan pengguna.",
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
            ? `<p class="project-role"><strong>Peran & Kontribusi:</strong> ${project.role}</p>`
            : "";

        const pdfButtonHTML = project.pdf
            ? `<button class="btn-paper-link" onclick="openPDFModal('${project.pdf}')"><i class="fas fa-eye"></i> Lihat Makalah</button>`
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