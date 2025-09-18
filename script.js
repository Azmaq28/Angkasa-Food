// Slider functionality
const sliderImages = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.star-dot');
let currentIndex = 0;
let autoSlideInterval;

// Fungsi untuk update slider
function showSlide(idx) {
  sliderImages.forEach(img => img.classList.remove('active'));
  dots.forEach((d, i) => {
      d.classList.remove('active');
      d.src = i === idx ? 'Assets/starfull.png' : 'Assets/starnone.png';
  });
  sliderImages[idx].classList.add('active');
  dots[idx].classList.add('active');
  currentIndex = idx;
}

// Event klik manual
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
      showSlide(idx);
      resetAutoSlide();
  });
});

// Fungsi auto-slide
function autoSlide() {
  autoSlideInterval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % sliderImages.length;
      showSlide(nextIndex);
  }, 3000); // ganti gambar tiap 3 detik
}

// Reset interval jika user klik dot
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

// Data Menu
const menuData = {
  "Nasi Goreng": [
    {
        name: "Nasi Goreng Ayam",
        image: "Assets/menu/Nasigorengayam.jpg",
        description: "Nasi goreng spesial dengan potongan ayam yang gurih dan bumbu rempah pilihan.",
        price: "18K"
    },
    {
        name: "Nasi Goreng Sosis",
        image: "Assets/menu/nasigorengsosis.jpg",
        description: "Nasi goreng lezat dengan sosis premium dan sayuran segar.",
        price: "16K"
    },
    {
        name: "Nasi Goreng Bakso",
        image: "Assets/menu/nasigorengtelor.jpg",
        description: "Nasi goreng dengan campuran bakso segar dan bumbu istimewa.",
        price: "22K"
    },
    {
        name: "Nasi Goreng Telur",
        image: "Assets/menu/nasigorengtelor.jpg",
        description: "Simple, gurih, dan selalu jadi favorit.",
        price: "15K"
    },
    {
        name: "Nasi Goreng Bakso Telur",
        image: "Assets/menu/nasigorengtelor.jpg",
        description: "Kombinasi mantap bakso dan telur.",
        price: "18K"
    },
    {
        name: "Nasi Goreng Sosis Telur",
        image: "Assets/menu/nasigorengtelor.jpg",
        description: "Gurihnya sosis dan telur dalam satu piring.",
        price: "18K"
    },
    {
        name: "Nasi Goreng Pindang",
        image: "Assets/menu/Nasigorengpindang.jpg",
        description: "Nasi goreng khas dengan aroma pindang.",
        price: "15K"
    } 
  ],
  "Mie Goreng": [
    {
      name: "Mie Goreng Sosis",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Mie goreng dengan sosis premium dan bumbu rempah yang menggugah selera.",
      price: "15K"
    },
    {
      name: "Mie Goreng Ayam",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Mie goreng spesial dengan potongan ayam dan sayuran segar.",
      price: "15K"
    },
    {
      name: "Mie Goreng Bakso",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Mie goreng nikmat dengan bakso kenyal.",
      price: "15K"
    },
    {
      name: "Mie Goreng Sapi",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Mie goreng spesial dengan potongan ayam dan sayuran segar.",
      price: "15K"
    },
    {
      name: "Mie Goreng Mie",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Mie goreng spesial dengan potongan ayam dan sayuran segar.",
      price: "15K"
    }
  ],
  "Nasi Lele": [
    {
      name: "Nasi Lele Sambel Meteor",
      image: "Assets/menu/Nasilele.jpg",
      description: "Lele crispy plus sambal pedas membara.",
      price: "18K"
    },
    {
      name: "Nasi Paket Lele + Es Teh",
      image: "Assets/menu/Nasilele.jpg",
      description: "Paket hemat dengan lele goreng dan teh segar.",
      price: "20K"
    },
    {
      name: "Nasi Lele Kremes Sambel Lalap",
      image: "Assets/menu/Nasilele.jpg",
      description: "Lele goreng garing dengan kremes renyah, sambal pedas, dan lalapan segar.",
      price: "habis"
    }
  ],
  "Minuman": [
    {
      name: "Pop Ice",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Minuman populer dengan rasa manis dan asam.",
      price: "5K"
    },
    {
      name: "Es Nutrisari Jeruk",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Es nutrisari jeruk dengan rasa manis dan asam.",
      price: "5K"
    },
    {
      name: "Es Teh",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Es teh dengan rasa manis",
      price: "4K"
    }
  ],
  "Snack": [
    {
      name: "Puding Coklat",
      image: "Assets/menu/puding coklat.jpg",
      description: "Manis lembut dengan rasa coklat pekat.",
      price: "2K"
    },
    {
      name: "Risol Mayo",
      image: "Assets/menu/dadargulung.jpg",
      description: "Risol isi mayo gurih dan lezat.",
      price: "3K"
    },
    {
      name: "Dadar Gulung Mawar",
      image: "Assets/menu/dadargulung.jpg",
      description: "Dadar gulung isi kelapa manis dengan aroma mawar.",
      price: "2K"
    }
  ],
  "Nasi Bakar": [
    {
      name: "Nasi Bakar Ayam",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi bakar dengan ayam suwir berbumbu khas.",
      price: "5K"
    },
    {
      name: "Nasi Bakar Pindang",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi bakar dengan aroma pindang yang menggoda.",
      price: "6K"
    },
  ],
  "Seblak": [
    {
      name: "Seblak Sosis",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Kenikmatan seblak pedas dengan potongan sosis.",
      price: "16K"
    },
    {
      name: "Seblak Bakso",
      image: "Assets/menu/seblakbaso.jpg",
      description: "Seblak berkuah pedas dengan bakso kenyal.",
      price: "15K"
    },
    {
      name: "Seblak Makaroni",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Makaroni pedas gurih khas seblak favorit.",
      price: "14K"
    }
  ],
  "Tomyam": [
    {
      name: "Tomyam Bakso Ikan",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Tomyam pedas segar dengan bakso ikan.",
      price: "habis"
    }
  ],
  "Nasi Kotak": [
    {
      name: "Nasi Kenduri Nilla Bakar",
      image: "Assets/menu/Nasikendurinillabakar.jpg",
      description: "Nasi lengkap dengan ikan nila bakar istimewa.",
      price: "35K"
    },
    {
      name: "Nasi Ayam",
      image: "Assets/menu/Nasiayam.jpg",
      description: "Nasi dengan ayam goreng crispy dan sambal pedas.",
      price: "17K"
    },
    {
      name: "Nasi Paha Bawah",
      image: "Assets/menu/nasikotakpahabawah.jpg",
      description: "Nasi dengan paha ayam bawah goreng renyah.",
      price: "12K"
    }
  ],
  "Nasi Kenduri": [
    {
      name: "Nasi Kenduri Ayam Goreng",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi lengkap dengan ayam goreng crispy dan sambal pedas.",
      price: "35K"
    }
  ],
  "Snack Box": [
    {
      name: "Snack Box",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Item bisa menyesuaikan sesuai harga",
      price: "6K - 10K"
    }
  ],
  "Rice Bowl": [
    {
      name: "Rice Bowl Ayam Suwir",
      image: "Assets/menu/Ricebowlayam.jpg",
      description: "Rice bowl dengan ayam suwir berbumbu lezat.",
      price: "12K"
    },
    {
      name: "Rice Bowl Sosis",
      image: "Assets/menu/Ricebowlsosis.jpg",
      description: "Rice bowl dengan potongan sosis premium.",
      price: "12K"
    },
    {
      name: "Rice Bowl Nugget",
      image: "Assets/menu/Ricebowlnaget.jpg",
      description: "Rice bowl dengan nugget renyah.",
      price: "12K"
    }
  ],
  "Nasi Bento": [
    {
      name: "Nasi Bento Kids",
      image: "Assets/menu/Bentokids.jpg",
      description: "Nasi bento dengan porsi kecil dan lauk favorit anak-anak.",
      price: "10K"
    },
    {
      name: "Nasi Uduk Bento",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi uduk bento dengan lauk lengkap dan lezat.",
      price: "habis"
    }
  ],
  "Hampers": [
    {
      name: "Ayam Bakar Babon Angkrem",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Ayam bakar spesial dengan bumbu babon angkrem dengan bobot 1.5kg.",
      price: "100K"
    },
    {
      name: "Hampers Ingkung Ayam",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Ingkung ayam utuh dengan bumbu khas Angkasa Food.",
      price: "habis"
    },
    {
      name: "Hampers Ayam Kremes",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Ayam kremes gurih dengan sambal spesial.",
      price: "habis"
    }
  ],
  "Tumpeng": [
    {
      name: "Tumpeng Nasi Kuning",
      image: "Assets/menu/Tumpengnasikuning.jpg",
      description: "Tumpeng nasi kuning lengkap dengan lauk pauk tradisional, cocok untuk 8 - 10 porsi.",
      price: "250K"
    },
    {
      name: "Nasi Tumpeng Ingkung Ayam Jawa",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Tumpeng nasi kuning dengan ingkung ayam jawa. Bonus tampah",
      price: "600K"
    },
    {
      name: "Tumpeng Mini",
      image: "Assets/menu/Tumpengmini.jpg",
      description: "Tumpeng mini untuk acara kecil, lengkap dengan lauk pauk. Cocok untuk 4 - 6 porsi.",
      price: "200K"
    }
  ],
  "Nasi Ater-Ater": [
    {
      name: "Nasi Ater-Ater Ayam Goreng",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi ater-ater dengan ayam goreng crispy dan sambal pedas.",
      price: "50K"
    },
    {
      name: "Nasi Ater-Ater Ayam Bakar",
      image: "Assets/menu/miegorengsosis.jpg",
      description: "Nasi ater-ater dengan ayam bakar bumbu khas Angkasa Food.",
      price: "50K"
    }
  ]
};

// Fungsi untuk generate menu HTML
function generateMenuHTML() {
  const menuContainer = document.getElementById('menu-container');
  let menuHTML = '';

  Object.keys(menuData).forEach(category => {
    menuHTML += `
      <div class="menu-category">
        <h3 class="category-title">${category}</h3>
        <div class="menu-grid" id="grid-${category.replace(/\s+/g, '-').toLowerCase()}">
    `;

    // Show only first 4 items in each category
    const itemsToShow = menuData[category].slice(0, 4);
    itemsToShow.forEach(item => {
      menuHTML += createMenuItemHTML(item);
    });

    // Add "Lihat Semua" button if there are more than 4 items
    const showSeeAllButton = menuData[category].length > 4;
    const seeAllButton = showSeeAllButton 
      ? `<button class="see-all-btn" data-category="${category}" data-expanded="false">Lihat Semua</button>` 
      : '';

    menuHTML += `
        </div>
        ${seeAllButton}
      </div>
    `;
  });

  menuContainer.innerHTML = menuHTML;
  
  // Add event listeners to all "Lihat Semua" buttons
  document.querySelectorAll('.see-all-btn').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const isExpanded = this.getAttribute('data-expanded') === 'true';
      const grid = document.getElementById(`grid-${category.replace(/\s+/g, '-').toLowerCase()}`);
      
      if (isExpanded) {
        // Collapse back to 4 items
        const items = menuData[category];
        const visibleItems = items.slice(0, 4);
        grid.innerHTML = visibleItems.map(item => createMenuItemHTML(item)).join('');
        this.textContent = 'Lihat Semua';
        this.setAttribute('data-expanded', 'false');
        // Re-attach event listeners to the new buttons
        const buttons = grid.querySelectorAll('.menu-btn');
        buttons.forEach(btn => {
          btn.addEventListener('click', function() {
            const menuName = btn.getAttribute('data-menu') || 'produk';
            const message = encodeURIComponent(
              `Halo! Saya tertarik dengan menu *${menuName}* dari Warung Kuliner Naiyamie. Bisa saya tanya-tanya lebih lanjut?`
            );
            const whatsappUrl = `https://wa.me/6281210451414?text=${message}`;
            window.open(whatsappUrl, '_blank');
          });
        });
      } else {
        // Show all items
        const items = menuData[category];
        grid.innerHTML = items.map(item => createMenuItemHTML(item)).join('');
        this.textContent = 'Sembunyikan';
        this.setAttribute('data-expanded', 'true');
        // Re-attach event listeners to the new buttons
        const buttons = grid.querySelectorAll('.menu-btn');
        buttons.forEach(btn => {
          btn.addEventListener('click', function() {
            const menuName = btn.getAttribute('data-menu') || 'produk';
            const message = encodeURIComponent(
              `Halo! Saya tertarik dengan menu *${menuName}* dari Warung Kuliner Naiyamie. Bisa saya tanya-tanya lebih lanjut?`
            );
            const whatsappUrl = `https://wa.me/6281210451414?text=${message}`;
            window.open(whatsappUrl, '_blank');
          });
        });
      }
    });
  });
}

// Helper function to create menu item HTML
function createMenuItemHTML(item) {
  return `
    <div class="menu-card">
      <img src="${item.image}" alt="${item.name}" class="menu-img">
      <div class="menu-info">
        <h4 class="menu-nama">${item.name}</h4>
        <hr class="menu-line">
        <p class="menu-desc">${item.description}</p>
        <div class="menu-bottom">
          <button class="menu-btn" data-menu="${item.name}">Beli Sekarang!</button>
          <span class="menu-harga">${item.price}</span>
        </div>
      </div>
    </div>
  `;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// WhatsApp button functionality
function initializeWhatsAppButtons() {
    const whatsappButtons = document.querySelectorAll('.menu-btn');
        
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuName = button.getAttribute('data-menu') || 'produk';
            const message = encodeURIComponent(
                `Halo! Saya tertarik dengan menu *${menuName}* dari Angkasa Food. Bisa saya tanya-tanya lebih lanjut?`
            );
            const whatsappUrl = `https://wa.me/6281210451414?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Burger menu functionality    
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only run for mobile view
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !e.target.closest('.nav-menu') && 
        !e.target.closest('.burger') &&
        navMenu.classList.contains('active')) {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
});

// Testimoni carousel functionality
let currentTestimoniIndex = 1; // Start with middle card (index 1)
let testimoniInterval;
let isTransitioning = false;
let testimoniOrder = [1, 2, 0, 1]; // Urutan: tengah(1) -> kanan(2) -> kiri(0) -> tengah(1)
let orderIndex = 0; // Indeks untuk melacak posisi dalam urutan
let isUserInteracting = false;

function showTestimoni(index) {
    if (isTransitioning) return;
    
    const cards = document.querySelectorAll('.testimoni-card');
    const stars = document.querySelectorAll('.testimoni-star');
    
    if (!cards.length) return;
    
    isTransitioning = true;
    
    // Hapus semua class active
    cards.forEach(card => card.classList.remove('active', 'left', 'right'));
    
    // Tambahkan class active ke card yang dipilih
    cards[index].classList.add('active');
    
    // Atur posisi card kiri dan kanan
    const leftIndex = (index - 1 + cards.length) % cards.length;
    const rightIndex = (index + 1) % cards.length;
    
    cards[leftIndex].classList.add('left');
    cards[rightIndex].classList.add('right');
    
    // Efek bounce pada bintang
    stars.forEach((star, i) => {
        star.classList.remove('bounce');
        setTimeout(() => {
            star.classList.add('bounce');
        }, i * 100);
    });
    
    currentTestimoniIndex = index;
    
    // Reset flag transisi setelah animasi selesai
    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

function nextTestimoni() {
    // Update orderIndex untuk mengikuti urutan yang ditentukan
    orderIndex = (orderIndex + 1) % testimoniOrder.length;
    const nextIndex = testimoniOrder[orderIndex];
    showTestimoni(nextIndex);
}

function startTestimoniRotation() {
    if (!isUserInteracting) {
        testimoniInterval = setInterval(nextTestimoni, 3000); // 3 detik per perpindahan
    }
}

function stopTestimoniRotation() {
    clearInterval(testimoniInterval);
}

// Inisialisasi carousel
document.addEventListener('DOMContentLoaded', () => {
    // Generate menu from JavaScript data
    generateMenuHTML();
    
    // Initialize slider
    showSlide(0);
    autoSlide();
    
    // Inisialisasi testimoni
    const cards = document.querySelectorAll('.testimoni-card');
    if (cards.length > 0) {
        // Set posisi awal
        showTestimoni(1); // Mulai dari tengah
        startTestimoniRotation();
        
        // Tambahkan event listener untuk setiap card
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                // Cari index card yang diklik
                const clickedIndex = parseInt(card.getAttribute('data-index'));
                // Update orderIndex sesuai dengan urutan yang benar
                orderIndex = testimoniOrder.indexOf(clickedIndex);
                // Tampilkan card yang diklik
                showTestimoni(clickedIndex);
                // Reset interval
                stopTestimoniRotation();
                startTestimoniRotation();
            });
        });
        
        // Tambahkan event listener untuk pause saat hover
        const container = document.querySelector('.testimoni-container');
        container.addEventListener('mouseenter', () => {
            isUserInteracting = true;
            stopTestimoniRotation();
        });
        
        container.addEventListener('mouseleave', () => {
            isUserInteracting = false;
            startTestimoniRotation();
        });
    }
    
    // Initialize WhatsApp buttons after menu is generated
    initializeWhatsAppButtons();
    
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    }
});
