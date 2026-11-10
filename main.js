/**
 * PT ALUSTRA PRIME INDONESIA - Official Website Scripts
 * Clean, lightweight, modular JavaScript for interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar & Back to Top Controller
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Mobile Drawer Navigation
  const menuToggle = document.getElementById('menuToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // 3. Portfolio Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 4. Portfolio Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxWaBtn = document.getElementById('lightboxWaBtn');
  const lightboxClose = document.getElementById('lightboxClose');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.portfolio-name')?.innerText || 'Dokumentasi Proyek Alustra';
      const cat = item.querySelector('.portfolio-cat')?.innerText || 'Proyek Aluminium & Kaca';
      const desc = item.querySelector('.portfolio-desc')?.innerText || 'Pekerjaan fabrikasi dan instalasi aluminium dan kaca oleh tim PT Alustra Prime Indonesia.';

      lightboxImg.src = img.src;
      lightboxImg.alt = title;
      lightboxTitle.innerText = title;
      lightboxCat.innerText = cat;
      lightboxDesc.innerText = desc;

      const message = encodeURIComponent(`Halo PT Alustra Prime Indonesia, saya tertarik dengan dokumentasi proyek "${title}" (${cat}). Mohon info estimasi biaya dan spesifikasi teknisnya.`);
      lightboxWaBtn.href = `https://wa.me/6285167182620?text=${message}`;

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // 5. Service Detail Modal
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalClose = document.getElementById('serviceModalClose');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalImg = document.getElementById('serviceModalImg');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalSpecs = document.getElementById('serviceModalSpecs');
  const serviceModalWaBtn = document.getElementById('serviceModalWaBtn');

  // Service database for in-depth specs
  const serviceDetails = {
    'jendela-aluminium': {
      title: 'Kusen & Jendela Aluminium Arsitektural',
      img: 'assets/img/services/jendela-casement-putih.jpg',
      desc: 'Fabrikasi dan pemasangan aneka sistem jendela aluminium berkualitas tinggi mulai dari jendela casement (jungkit/buka samping), jendela sliding (geser hemat ruang), jendela pivot, fixed glass (kaca mati estetis), hingga jendela lengkung/arch kustom. Menggunakan material profil aluminium teruji seperti Inkalum, Alexindo, dan YKK AP dengan ketebalan standar arsitektur dan finishing anodized atau powder coating tahan cuaca.',
      specs: [
        'Pilihan Profil: Inkalum, Alexindo, YKK AP, Dacon, Forta',
        'Pilihan Warna: Anodized Black, Powder Coating White, Dark Brown, Custom RAL',
        'Varian: Casement, Sliding (2/3/4 Daun), Top Hung, French Grid Klasik, Arch / Lengkung',
        'Aksesoris: Engsel gesek stainless steel, rambuncis multi-point lock, karet EPDM kedap air & suara',
        'Aplikasi: Rumah tinggal premium, villa, ruko, gedung perkantoran'
      ]
    },
    'pintu-aluminium': {
      title: 'Pintu Aluminium Modern & Sistem Kaca',
      img: 'assets/img/services/pintu-sliding-kaca-teras.jpg',
      desc: 'Pintu aluminium menghadirkan durabilitas anti-lapuk, anti-rayap, dan tahan karat dengan tampilan modern yang mewah. Tersedia dalam model swing door dengan handle minimalis panjang, sliding door kaca teras berprofil kokoh, hingga french door dengan aksen kisi-kisi kotak industrial modern.',
      specs: [
        'Konfigurasi: Single Swing, Double Swing, Sliding Kaca Teras, Pivot Door',
        'Pilihan Kaca: Kaca Polos 5mm-8mm, Kaca Riben Hitam, Kaca Es / Frosted, Kaca One-Way',
        'Hardware: Mortise lock berkualitas, handle stainless steel SUS 304, floor hinge tugas berat',
        'Kelebihan: Tidak melengkung akibat lembap, kedap suara, mudah dibersihkan dan minim perawatan'
      ]
    },
    'instalasi-kaca': {
      title: 'Pemasangan Aneka Jenis Kaca Komersial & Residensial',
      img: 'assets/img/services/pintu-kaca-swing-frameless.jpg',
      desc: 'Penyediaan dan instalasi aneka jenis kaca datar arsitektur dengan pemotongan presisi tinggi, beveling halus, dan pemasangan sealant struktural yang rapi dan aman. Menjamin kekuatan struktural dan kejernihan optik untuk estetika interior dan eksterior.',
      specs: [
        'Jenis Kaca: Kaca Polos (Clear Float), Kaca Panas / Riben (Dark Grey/Bronze), Kaca Stopsol / One-Way',
        'Finishing: Polishing tepian halus, bevel 1cm - 3cm, sandblast motif / garis privasi',
        'Ketebalan: 5mm, 6mm, 8mm, 10mm, 12mm, 15mm',
        'Penerapan: Bukaan fasad, jendela panoramic, cermin dekoratif, meja resepsionis, pintu frameless'
      ]
    },
    'partisi-kaca': {
      title: 'Partisi Kaca Kantor & Ruang Komersial',
      img: 'assets/img/services/partisi-kaca-kantor-meeting.jpg',
      desc: 'Sistem pembagi ruangan dengan kaca bening atau sandblast yang menciptakan kesan ruangan lapang, terang, dan profesional. Cocok untuk ruang direksi, meeting room kantor, showroom, maupun pembatas ruang tamu hunian mewah dengan isolasi suara yang optimal.',
      specs: [
        'Struktur: Frameless (patch fitting / U-channel) atau Kusen Aluminium Slim 3 inch / 4 inch',
        'Pilihan Kaca: Tempered 10mm / 12mm dengan stiker sandblast privasi kustom (logo perusahaan)',
        'Pintu Terintegrasi: Swing frameless floor hinge, sliding rail gantung aluminium elegan',
        'Fitur: Memberikan transmisi cahaya alami 100%, kedap suara antar ruang, tampilan corporate modern'
      ]
    },
    'kaca-tempered': {
      title: 'Kaca Tempered & Laminated Safety Glass',
      img: 'assets/img/services/partisi-kaca-ruang-kerja.jpg',
      desc: 'Kaca yang diproses melalui pemanasan termal ekstrem hingga 700°C lalu didinginkan secara cepat untuk menghasilkan kekuatan 4 hingga 5 kali lebih tinggi dari kaca biasa. Bila pecah, kaca tempered akan berubah menjadi butiran tumpul yang aman bagi penghuni.',
      specs: [
        'Standar Keamanan: SNI Standar Kaca Pengaman Tempered & Laminated',
        'Ketebalan: 8mm, 10mm, 12mm, 15mm, 19mm serta kombinasi Laminated PVB (5+5, 6+6, 8+8)',
        'Karakteristik: Tahan benturan angin kencang, tahan perubahan suhu termal mendadak, safety break',
        'Penggunaan: Façade gedung, railing tangga/balkon, kanopi, pintu mall, shower screen'
      ]
    },
    'acp-seven': {
      title: 'Aluminium Composite Panel (ACP) Façade & Interior',
      img: 'assets/img/portfolio/pemasangan-acp-seven-ceiling.jpg',
      desc: 'Pemasangan ACP berkualitas tinggi (merk Seven, Alucobond, Marks) untuk pembungkus dinding luar gedung, lisplang ruko, plafon eksterior/interior, pilar kolom, dan cladding bangunan komersial. Menghasilkan tampilan arsitektur yang modern, rapi, dan tahan cuaca tropis puluhan tahun.',
      specs: [
        'Material: ACP Seven / Marks PVDF untuk Eksterior (Tahan UV & Hujan) dan PE untuk Interior',
        'Ketebalan: Total 4mm dengan ketebalan aluminium skin 0.21mm, 0.30mm, hingga 0.50mm',
        'Rangka Dudukan: Rangka hollow besi galvanis / aluminium dengan dynabolt kuat',
        'Finishing: Sambungan antar panel menggunakan backer rod dan sealant netral tahan jamur'
      ]
    },
    'kanopi-kaca': {
      title: 'Kanopi Kaca Tempered / Laminated Mewah',
      img: 'assets/img/services/kanopi-kaca-tempered-teras.jpg',
      desc: 'Kanopi transparan modern yang melindungi area carport, teras, selasar, maupun drop-off gedung dari hujan tanpa menghalangi sinar matahari. Menggunakan kaca tempered atau laminated dengan rangka baja WF / hollow tebal yang kokoh dan tahan gempa.',
      specs: [
        'Kaca Kanopi: Tempered 8mm / 10mm / 12mm atau Laminated 5+5 / 6+6 Clear or Dark Grey',
        'Konstruksi Rangka: Rangka Besi Hollow Galvanis 5x10 / Baja WF / Pipa Baja tebal antikarat',
        'Sistem Sealant: Sealant struktural heavy duty tahan UV & kebocoran air dengan spigot / spider fitting',
        'Keunggulan: Tampilan prestisius, kokoh menahan beban hujan dan angin, pencahayaan alami maksimal'
      ]
    },
    'curtain-wall': {
      title: 'Curtain Wall Fasad Gedung Bertingkat',
      img: 'assets/img/services/curtain-wall-gedung-modern.jpg',
      desc: 'Sistem dinding tirai penutup gedung non-struktural yang terbuat dari rangka aluminium mullion-transom dan panel kaca lebar. Menjadi standar emas bangunan komersial modern, hotel, rumah sakit, dan gedung perkantoran dengan efisiensi energi dan insulasi termal prima.',
      specs: [
        'Sistem: Stick System Curtain Wall & Semi-Unitized System',
        'Profil Mullion & Transom: Aluminium Heavy-Duty Arsitektural (Inkalum / Alexindo / YKK)',
        'Panel Kaca: Stopsol Reflective Blue / Green / Grey, Low-E Insulated Glass Unit (IGU)',
        'Fitur: Menahan tekanan beban angin kencang (wind load), kedap air hujan dengan gasket EPDM, hemat energi AC'
      ]
    },
    'shower-box': {
      title: 'Shower Box & Penyekat Kamar Mandi Kaca',
      img: 'assets/img/services/shower-box-kaca-tempered.jpg',
      desc: 'Penyekat area basah dan kering kamar mandi menggunakan kaca tempered bening dengan hardware stainless steel premium SUS 304 anti karat. Memberikan kesan kamar mandi hotel bintang lima yang bersih, higienis, dan elegan.',
      specs: [
        'Model: Fixed Glass Screen, Swing Door Shower Box, Corner L-Shape, Sliding Shower Screen',
        'Spesifikasi Kaca: Kaca Tempered 8mm atau 10mm Clear dengan perlakuan water-repellent',
        'Hardware: Engsel kaca ke dinding SUS 304, handle towel bar, magnetic seal strip penahan air',
        'Manfaat: Mencegah cipratan air ke area kering, anti-lumut, mudah dibersihkan dan tahan lama'
      ]
    },
    'folding-door-expanda': {
      title: 'Folding Door & Pintu Kassa Baja Expanda',
      img: 'assets/img/services/pintu-lipat-folding-door.jpg',
      desc: 'Solusi bukaan fleksibel untuk menghubungkan ruang keluarga dengan taman belakang atau kolam renang menggunakan pintu lipat aluminium multi-panel. Kami juga memproduksi pintu kassa baja expanda sliding / swing yang memberikan sirkulasi udara bebas sekaligus perlindungan dari serangga dan keamanan ekstra.',
      specs: [
        'Folding Door: Sistem rel gantung atas tugas berat, engsel heavy-duty, kapasitas 3 hingga 8 daun pintu',
        'Pintu Expanda: Kassa baja tebal / expanded metal powder coating kokoh anti-sobek dan anti-karat',
        'Sistem Kunci: Multi-point locking system dengan kunci pengaman ganda',
        'Fungsi: Membuka ruangan hingga 95% secara leluasa, aman dari pembobolan, sirkulasi udara optimal'
      ]
    },
    'custom-works': {
      title: 'Pekerjaan Kustom Aluminium, Kaca & Cermin Bevel',
      img: 'assets/img/portfolio/jendela-lengkung-arch-custom.jpg',
      desc: 'Layanan spesialisasi untuk desain kustom yang membutuhkan ketelitian tinggi, seperti jendela lengkung arch bergaya klasik eropa, dinding cermin bevel dekoratif untuk interior ruang keluarga mewah, railing balkon kaca minimalis, hingga skylight kaca rooftop.',
      specs: [
        'Karya Kustom: Jendela Lengkung (Arch Bending Aluminium), French Window Grid Kotak',
        'Cermin Bevel: Cermin Asahimas 5mm dengan bevel keliling 1.5 - 3cm, susunan pola wajik/kotak',
        'Railing Kaca: Railing tangga & balkon kaca tempered 10mm/12mm dengan tiang stainless atau spigot',
        'Skylight: Atap kaca skylight rooftop tempered laminated penembus cahaya void rumah'
      ]
    }
  };

  const detailButtons = document.querySelectorAll('.service-detail-btn');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceKey = btn.getAttribute('data-service');
      const data = serviceDetails[serviceKey];

      if (data) {
        serviceModalTitle.innerText = data.title;
        serviceModalImg.src = data.img;
        serviceModalImg.alt = data.title;
        serviceModalDesc.innerText = data.desc;

        serviceModalSpecs.innerHTML = `
          <h4>Spesifikasi & Keunggulan Layanan:</h4>
          <ul>
            ${data.specs.map(spec => `<li><i class="fas fa-check-circle"></i> ${spec}</li>`).join('')}
          </ul>
        `;

        const waMsg = encodeURIComponent(`Halo PT Alustra Prime Indonesia, saya ingin berkonsultasi mengenai layanan "${data.title}". Mohon informasi teknis dan estimasi harganya.`);
        serviceModalWaBtn.href = `https://wa.me/6285167182620?text=${waMsg}`;

        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (serviceModalClose) serviceModalClose.addEventListener('click', closeServiceModal);
  if (serviceModal) {
    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        closeServiceModal();
      }
    });
  }

  // 6. Interactive Consultation Form Handler (Direct to WhatsApp)
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nama = document.getElementById('formNama').value.trim();
      const phone = document.getElementById('formPhone').value.trim();
      const email = document.getElementById('formEmail').value.trim() || '-';
      const lokasi = document.getElementById('formLokasi').value.trim();
      const layanan = document.getElementById('formLayanan').value;
      const tipeProyek = document.getElementById('formTipeProyek').value;
      const pesan = document.getElementById('formPesan').value.trim() || 'Mohon jadwal survei dan estimasi penawaran harga.';

      if (!nama || !phone || !lokasi || !layanan) {
        alert('Mohon lengkapi Nama, No. WhatsApp, Lokasi Proyek, dan Jenis Layanan.');
        return;
      }

      const waText = 
`*PERMINTAAN KONSULTASI PROYEK - PT ALUSTRA PRIME INDONESIA*
----------------------------------------
*Nama Klien*: ${nama}
*No. WhatsApp*: ${phone}
*Email*: ${email}
*Lokasi Proyek*: ${lokasi}
*Tipe Bangunan*: ${tipeProyek}
*Kategori Layanan*: ${layanan}
----------------------------------------
*Rincian Kebutuhan*:
"${pesan}"
----------------------------------------
_Dikirim via Formulir Website Resmi Alustra_`;

      const targetUrl = `https://wa.me/6285167182620?text=${encodeURIComponent(waText)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // 7. Keyboard ESC Listener for Modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeServiceModal();
      closeDrawer();
    }
  });
});
