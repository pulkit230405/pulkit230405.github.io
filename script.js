// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation to project cards on hover
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Button click handlers
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.toLowerCase();
        switch(buttonText) {
            case 'highlights':
                window.location.href = '#achievements';
                break;
            case 'resume':
                // Add resume download or view functionality
                alert('Resume download coming soon!');
                break;
            case 'portfolio':
                window.location.href = '#projects';
                break;
        }
    });
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const moonIcon = document.querySelector('.fa-moon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        moonIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle icon
    moonIcon.classList.toggle('fa-moon');
    moonIcon.classList.toggle('fa-sun');
});

// Language Switching
const languageSelect = document.querySelector('.language-select');
const translations = {
    en: {
        home: 'HOME PAGE',
        about: 'ABOUT ME',
        qualifications: 'QUALIFICATIONS',
        projects: 'MY PROJECTS',
        achievements: 'ACHIEVEMENTS',
        contact: 'WORK WITH ME',
        // Add more translations as needed
    },
    hi: {
        home: 'होम पेज',
        about: 'मेरे बारे में',
        qualifications: 'योग्यता',
        projects: 'मेरे प्रोजेक्ट्स',
        achievements: 'उपलब्धियां',
        contact: 'संपर्क करें',
    },
    gu: {
        home: 'હોમ પેજ',
        about: 'મારા વિશે',
        qualifications: 'લાયકાત',
        projects: 'મારા પ્રોજેક્ટ્સ',
        achievements: 'સિદ્ધિઓ',
        contact: 'સંપર્ક કરો',
    }
};

// Check for saved language preference
const savedLanguage = localStorage.getItem('language') || 'en';
languageSelect.value = savedLanguage;
updateLanguage(savedLanguage);

languageSelect.addEventListener('change', (e) => {
    const language = e.target.value;
    updateLanguage(language);
    localStorage.setItem('language', language);
});

function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animations
document.querySelectorAll('.hero-content, .about-container, .project-card, .achievement-content').forEach(el => {
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Project data
const projectData = {
    'stock-market': {
        title: 'Stock Market Price Prediction Using LSTM',
        description: 'A machine learning project that uses Long Short-Term Memory (LSTM) neural networks to predict stock market prices. The model analyzes historical data and patterns to make future price predictions.',
        technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'NumPy', 'Matplotlib'],
        github: 'https://github.com/yourusername/stock-prediction',
        demo: '#',
        image: 'assets/stock-market.png'
    },
    'chess-engine': {
        title: 'Chess Engine With AI and OpenCV',
        description: 'An intelligent chess engine that combines computer vision with AI to play chess. The system can recognize chess pieces through a camera and make strategic moves using advanced algorithms.',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'Chess Engine API', 'Computer Vision'],
        github: 'https://github.com/yourusername/chess-engine',
        demo: '#',
        image: 'assets/chess-engine.png'
    },
    'live-sketch': {
        title: 'Live Sketch Using OpenCV',
        description: 'Real-time sketch generation from camera feed using computer vision techniques. The application processes video input and converts it into artistic sketch-style output.',
        technologies: ['Python', 'OpenCV', 'Image Processing', 'NumPy'],
        github: 'https://github.com/yourusername/live-sketch',
        demo: '#',
        image: 'assets/live-sketch.png'
    },
    'sentiment': {
        title: 'Sentiment Analysis using OpenCV',
        description: 'A sentiment analysis tool that uses computer vision and natural language processing to analyze facial expressions and text for emotion detection.',
        technologies: ['Python', 'OpenCV', 'NLTK', 'Machine Learning', 'NLP'],
        github: 'https://github.com/yourusername/sentiment-analysis',
        demo: '#',
        image: 'assets/sentiment-analysis.png'
    },
    'chrome-dino': {
        title: 'Chrome Dino Game With Hand Gesture',
        description: 'A recreation of the Chrome Dinosaur game controlled through hand gestures. Uses computer vision to detect hand movements and translate them into game controls.',
        technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyGame', 'Computer Vision'],
        github: 'https://github.com/yourusername/chrome-dino-gesture',
        demo: '#',
        image: 'assets/chrome-dino.png'
    }
};

// Project Modal Functionality
const modalContainer = document.querySelector('.modal-container');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-image').src = project.image;
    document.querySelector('.modal-description').textContent = project.description;
    
    // Update tech stack
    const techList = document.querySelector('.tech-list');
    techList.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    
    // Update links
    document.querySelector('.github-link').href = project.github;
    document.querySelector('.demo-link').href = project.demo;
    
    // Show modal
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Add click handlers to project cards
document.querySelectorAll('.project-card').forEach(card => {
    const viewButton = card.querySelector('.view-project');
    viewButton.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

// Close modal handlers
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
        modalContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
        modalContainer.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');

if (hamburger && mobileMenu && closeMobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    closeMobileMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    // Close menu on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}
// Sync theme toggle in mobile menu
const mobileThemeToggle = document.querySelector('.mobile-theme-toggle');
if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', () => {
        themeToggle.click();
    });
}
// Sync language select in mobile menu
const mobileLangSelect = document.querySelector('.mobile-language-select');
if (mobileLangSelect) {
    mobileLangSelect.addEventListener('change', (e) => {
        languageSelect.value = e.target.value;
        languageSelect.dispatchEvent(new Event('change'));
    });
    // Keep mobile select in sync with main select
    languageSelect.addEventListener('change', (e) => {
        mobileLangSelect.value = e.target.value;
    });
}

// Contact Form Handling
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // You can implement your own form submission logic here
    // For example, sending to a backend server or email service

    // Show success message
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.backgroundColor = '#4CAF50';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
    }, 3000);

    return false;
}

// Loading Screen Handler
document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }

    // Initialize all components
    initializeComponents();
});

function initializeComponents() {
    // Initialize project cards
    initializeProjectCards();

    // Add active class to current nav link
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const viewButton = card.querySelector('.view-project');
        if (viewButton) {
            viewButton.addEventListener('click', () => {
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        }
    });
}

// Apple-style scroll-triggered animations
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay');
                if (delay) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, parseInt(delay));
                } else {
                    entry.target.classList.add('animated');
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => observer.observe(el));
}

// Call on DOMContentLoaded and on page load
window.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Fade-in animation for sections
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.section-content').forEach((el) => {
    observer.observe(el);
  });
});

// Project Details Button Functionality
// Add click handlers to new Details buttons
const detailsButtons = document.querySelectorAll('.project-details-btn-apple');
detailsButtons.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        // Find the closest project-apple div
        const projectDiv = btn.closest('.project-apple');
        if (!projectDiv) return;
        // Use the order as the project index (or set a data-project attribute for more robustness)
        const projectOrder = Array.from(document.querySelectorAll('.project-apple')).indexOf(projectDiv);
        // Map order to project keys
        const projectKeys = ['stock-market', 'chess-engine', 'live-sketch', 'sentiment', 'chrome-dino'];
        openProjectModal(projectKeys[projectOrder]);
    });
});

// Parallax effect for hero section
const heroBg = document.querySelector('.hero-bg-parallax');
if (heroBg) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        heroBg.style.backgroundPosition = `${60 + x * 10}% ${40 + y * 10}%`;
    });
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBg.style.backgroundPosition = `60% ${40 + scrollY * 0.03}%`;
    });
}

// Animate testimonials on scroll (reuse animateOnScroll)
// Already handled by [data-animate] observer 