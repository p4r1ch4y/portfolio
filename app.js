// Global variables
let particles = [];
let particleContainer;
let isLoaded = false;
let animatedElements = new Set();

// DOM elements
const loadingScreen = document.getElementById('loading-screen');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const typewriter = document.getElementById('typewriter');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const projectModal = document.getElementById('project-modal');

// Data
const projects = [
    {
        title: "Stylus SDK Technical Documentation",
        description: "Comprehensive technical articles and smart contract development guides for Stylus SDK during DevRel Uni Cohort 6. Created detailed documentation to help developers understand and implement smart contracts using the Stylus framework.",
        technologies: ["Stylus SDK", "Smart Contracts", "Technical Writing", "Web3", "Blockchain", "Documentation"],
        features: [
            "Comprehensive SDK documentation",
            "Smart contract development guides",
            "Code examples and tutorials",
            "Developer onboarding materials",
            "Technical writing best practices"
        ],
        challenges: "Breaking down complex blockchain concepts into accessible documentation while maintaining technical accuracy and providing practical implementation examples.",
        liveUrl: "https://bento.me/parichay",
        githubUrl: "#"
    },
    {
        title: "Job Portal - Full Stack Application",
        description: "Full-stack job portal with React frontend and Node.js backend using Mongoose MongoDB Database. College project at IIT Guwahati featuring complete job posting, application, and management system.",
        technologies: ["MongoDB", "Mongoose ODM", "Node.js", "React.js"],
        features: [
            "User authentication and authorization",
            "Job posting and management",
            "Application tracking system",
            "Real-time notifications",
            "Advanced search and filtering",
            "Responsive design"
        ],
        challenges: "Implementing efficient database queries with Mongoose ODM and creating a seamless user experience for both job seekers and employers.",
        liveUrl: "https://job-portal-frontend-parichay.vercel.app/",
        githubUrl: "https://github.com/p4r1ch4y/job-portal"
    },
    {
        title: "LifeWeeks - Your Life in 4,000 Weeks",
        description: "A modern, AI-powered interactive timeline application that visualizes your life week by week. Built during Anveshan Jun 2025 hackathon with a focus on polished UX, advanced AI features, and meaningful personal insights.",
        technologies: ["Next.js", "React.js", "PostgreSQL", "SQL", "Tailwind CSS", "AWS", "Hugging Face", "AI API"],
        features: [
            "Interactive life timeline visualization",
            "AI-powered insights and analysis",
            "Personal milestone tracking",
            "World events integration",
            "Memory celebration features",
            "Advanced data visualization"
        ],
        challenges: "Integrating AI APIs for meaningful life insights while maintaining performance and creating an intuitive interface for complex timeline data.",
        liveUrl: "https://lifeweeks.vercel.app/",
        githubUrl: "https://github.com/p4r1ch4y/FunctionForce_LifeInWeeks"
    },
    {
        title: "SkillSync - Candidate and Recruiter Matching",
        description: "Candidate and Recruiter matching platform reimagined, built during hackathon xto10x. Features intelligent matching algorithms and streamlined recruitment process.",
        technologies: ["Node.js", "SQL", "Team Leadership", "Hackathon Development"],
        features: [
            "Intelligent candidate-recruiter matching",
            "Skills-based filtering system",
            "Real-time communication platform",
            "Application tracking",
            "Analytics dashboard",
            "Mobile-responsive design"
        ],
        challenges: "Developing effective matching algorithms within hackathon time constraints while leading a team and ensuring scalable architecture.",
        liveUrl: "https://skillsynced.vercel.app/",
        githubUrl: "https://github.com/p4r1ch4y/skillsync"
    },
    {
        title: "Digital Signal Processing Suite",
        description: "Comprehensive signal processing toolkit for real-time audio and biomedical signal analysis. Features advanced filtering, spectral analysis, and machine learning-based pattern recognition for various engineering applications.",
        technologies: ["MATLAB", "Python", "NumPy", "SciPy", "DSP", "Signal Processing"],
        features: [
            "Real-time audio signal processing",
            "Biomedical signal analysis (ECG, EEG)",
            "Advanced filtering algorithms",
            "Spectral analysis and visualization",
            "Machine learning pattern recognition",
            "Custom filter design tools"
        ],
        challenges: "Implementing real-time processing with minimal latency while maintaining signal quality and developing robust algorithms for noisy environments.",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Fabrication of Inverter",
        description: "Group project on building a homemade AC-DC inverter that can be used as a portable power solution. Comprehensive electrical engineering project covering circuit design, component selection, and practical implementation.",
        technologies: ["Electrical Engineering", "Electronics", "Circuit Design", "Analog Circuit Design", "Power Electronics"],
        features: [
            "AC to DC power conversion",
            "Portable inverter design",
            "Circuit optimization",
            "Component selection and testing",
            "Safety implementation",
            "Performance analysis"
        ],
        challenges: "Designing efficient power conversion circuits while ensuring safety standards and optimizing for portability and cost-effectiveness.",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Time Delay Relay Circuit using IC555",
        description: "Electronic circuit project implementing time delay functionality using IC555 timer and microcontroller integration for precise timing control. Features programmable delay settings and reliable switching.",
        technologies: ["IC555", "Microcontroller", "8051 Microcontroller", "Electronics", "Integrated Circuits", "Circuit Design"],
        features: [
            "Precise timing control",
            "Programmable delay settings",
            "Microcontroller integration",
            "Reliable relay switching",
            "Circuit optimization",
            "Real-time monitoring"
        ],
        challenges: "Achieving precise timing accuracy with IC555 while integrating microcontroller functionality and ensuring reliable operation under various conditions.",
        liveUrl: "#",
        githubUrl: "#"
    },
    {
        title: "Android Custom ROMs & Hacks",
        description: "Technical articles and tutorials on Android Custom ROMs and system modifications published on XDA Developers forums since 2017. Covering topics from basic ROM installation to advanced system modifications and custom kernel development.",
        technologies: ["Android", "Custom ROMs", "Linux", "Technical Writing", "System Hacking", "Kernel Development"],
        features: [
            "Custom ROM installation guides",
            "System modification tutorials",
            "Kernel development articles",
            "Troubleshooting documentation",
            "Community support and engagement",
            "Advanced Android customization"
        ],
        challenges: "Creating comprehensive guides for complex technical procedures while ensuring safety and compatibility across diverse Android devices and versions.",
        liveUrl: "#",
        githubUrl: "https://bento.me/parichay"
    }
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Force show loading screen
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
    }
    
    // Show loading screen with progress
    showLoadingScreen();
    
    // Initialize components with proper timing
    setTimeout(() => {
        initializeParticles();
        initializeNavigation();
        initializeTypewriter();
        initializeSkillBars();
        initializeProjectFilters();
        initializeContactForm();
        initializeBackToTop();
        initializeStatsCounter();
        initializeModalFunctionality();
        initializeScrollAnimations();
        
        // Hide loading screen after everything is initialized
        setTimeout(() => {
            hideLoadingScreen();
            isLoaded = true;
        }, 500);
    }, 2500);
}

// Loading Screen
function showLoadingScreen() {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        progressBar.style.width = '0%';
        
        // Animate progress bar
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20 + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
            }
            progressBar.style.width = progress + '%';
        }, 150);
    }
}

function hideLoadingScreen() {
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Particle System
function initializeParticles() {
    particleContainer = document.getElementById('particles-container');
    if (!particleContainer) return;

    // Create initial particles
    for (let i = 0; i < 30; i++) {
        createParticle();
    }

    // Animate particles
    animateParticles();
    
    // Add mouse interaction
    document.addEventListener('mousemove', handleMouseMove);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.opacity = Math.random() * 0.4 + 0.1;
    
    const colors = ['#00d4ff', '#7c3aed', '#06ffa5'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    particle.velocity = {
        x: (Math.random() - 0.5) * 1,
        y: (Math.random() - 0.5) * 1
    };
    
    particles.push(particle);
    particleContainer.appendChild(particle);
}

function animateParticles() {
    particles.forEach((particle) => {
        if (!particle.parentNode) return;
        
        const rect = particle.getBoundingClientRect();
        
        // Update position
        particle.velocity.x += (Math.random() - 0.5) * 0.05;
        particle.velocity.y += (Math.random() - 0.5) * 0.05;
        
        // Limit velocity
        particle.velocity.x = Math.max(-1, Math.min(1, particle.velocity.x));
        particle.velocity.y = Math.max(-1, Math.min(1, particle.velocity.y));
        
        let newX = rect.left + particle.velocity.x;
        let newY = rect.top + particle.velocity.y;
        
        // Bounce off edges
        if (newX <= 0 || newX >= window.innerWidth) {
            particle.velocity.x *= -1;
            newX = Math.max(0, Math.min(window.innerWidth - 5, newX));
        }
        if (newY <= 0 || newY >= window.innerHeight) {
            particle.velocity.y *= -1;
            newY = Math.max(0, Math.min(window.innerHeight - 5, newY));
        }
        
        particle.style.left = newX + 'px';
        particle.style.top = newY + 'px';
    });
    
    requestAnimationFrame(animateParticles);
}

function handleMouseMove(e) {
    if (!isLoaded || Math.random() > 0.05) return;
    
    // Create trail effect
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.width = '2px';
    trail.style.height = '2px';
    trail.style.background = '#00d4ff';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '1';
    trail.style.opacity = '0.6';
    trail.style.transition = 'all 0.5s ease-out';
    
    particleContainer.appendChild(trail);
    
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'scale(0)';
        setTimeout(() => {
            if (trail.parentNode) trail.remove();
        }, 500);
    }, 100);
}

// Navigation with smooth scrolling
function initializeNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Smooth scroll navigation with offset
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                // Smooth scroll with custom implementation
                smoothScrollTo(offsetTop, 800);
            }
            
            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Typewriter Effect
function initializeTypewriter() {
    if (!typewriter) return;

    const text = "Subrata Choudhury";
    let index = 0;

    typewriter.textContent = '';

    function typeText() {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 120);
        }
    }

    setTimeout(typeText, 1500);
}

// Skills Animation - Enhanced
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        // Only create progress elements if they don't exist
        if (!bar.querySelector('.skill-progress')) {
            const progressDiv = document.createElement('div');
            progressDiv.className = 'skill-progress';
            
            const fillDiv = document.createElement('div');
            fillDiv.className = 'skill-fill';
            
            progressDiv.appendChild(fillDiv);
            bar.appendChild(progressDiv);
        }
    });
}

function animateSkillBars(container) {
    const skillBars = container.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        const fillDiv = bar.querySelector('.skill-fill');
        
        if (fillDiv) {
            // Reset width first
            fillDiv.style.width = '0%';
            
            setTimeout(() => {
                fillDiv.style.width = level + '%';
            }, index * 150 + 200);
        }
    });
}

// Scroll Animations - Enhanced
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elementId = entry.target.id || entry.target.className;
                
                if (!animatedElements.has(elementId)) {
                    entry.target.classList.add('animate-up');
                    animatedElements.add(elementId);
                    
                    // Trigger specific animations
                    if (entry.target.classList.contains('skill-category')) {
                        setTimeout(() => animateSkillBars(entry.target), 300);
                    }
                    if (entry.target.classList.contains('about-stats')) {
                        setTimeout(() => animateStatsCounter(), 300);
                    }
                    if (entry.target.classList.contains('timeline-item')) {
                        const dot = entry.target.querySelector('.timeline-dot');
                        if (dot) {
                            setTimeout(() => dot.classList.add('active'), 200);
                        }
                    }
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .about-info, .about-interests, .about-stats');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Project Filters - Enhanced
function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                setTimeout(() => {
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    } else {
                        card.classList.add('hidden');
                        setTimeout(() => {
                            if (card.classList.contains('hidden')) {
                                card.style.display = 'none';
                            }
                        }, 300);
                    }
                }, index * 50);
            });
        });
    });
}

// Stats Counter - Enhanced
function initializeStatsCounter() {
    // This will be triggered by intersection observer
}

function animateStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = Math.ceil(target / 60);
        
        setTimeout(() => {
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = current;
            }, 30);
        }, index * 200);
    });
}

// Contact Form - Enhanced
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add input validation styling
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateInput);
        input.addEventListener('focus', clearValidation);
    });
}

function validateInput(e) {
    const input = e.target;
    const value = input.value.trim();
    
    if (input.required && !value) {
        input.style.borderColor = '#ff0000';
    } else if (input.type === 'email' && value && !isValidEmail(value)) {
        input.style.borderColor = '#ff0000';
    } else {
        input.style.borderColor = 'var(--border-glass)';
    }
}

function clearValidation(e) {
    e.target.style.borderColor = 'var(--primary-color)';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = contactForm.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff0000';
        }
    });
    
    if (!isValid) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission with loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.style.display = 'block';
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// Back to Top Button - Enhanced
function initializeBackToTop() {
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo(0, 800);
    });
}

// Modal Functionality - Enhanced
function initializeModalFunctionality() {
    const detailsBtns = document.querySelectorAll('.project-details-btn');
    const modalClose = document.querySelector('.modal-close');
    const downloadResumeBtn = document.getElementById('download-resume');

    // Project detail buttons
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const projectIndex = parseInt(btn.getAttribute('data-project'));
            if (projects[projectIndex]) {
                showProjectModal(projects[projectIndex]);
            }
        });
    });

    // Modal close functionality
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }

    // Resume download
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Create a temporary link to download resume
            const link = document.createElement('a');
            link.href = 'assets/Subrata_Choudhury_Resume.pdf'; // You'll need to add this file
            link.download = 'Subrata_Choudhury_Resume.pdf';
            link.target = '_blank';

            // Check if file exists, if not show notification
            fetch(link.href)
                .then(response => {
                    if (response.ok) {
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        showNotification('Resume download started!', 'success');
                    } else {
                        throw new Error('Resume file not found');
                    }
                })
                .catch(() => {
                    showNotification('Resume file not available yet. Please contact me directly!', 'warning');
                });
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.style.display === 'block') {
            closeModal();
        }
    });
}

function showProjectModal(project) {
    if (!projectModal) return;
    
    const modalBody = document.getElementById('modal-body');
    if (!modalBody) return;
    
    modalBody.innerHTML = `
        <h2 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.5rem;">${project.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">${project.description}</p>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.2rem;">Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem;">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.2rem;">Key Features</h3>
        <ul style="color: var(--text-secondary); margin-bottom: 2rem; padding-left: 1.5rem; line-height: 1.6;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.2rem;">Challenges & Solutions</h3>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6;">${project.challenges}</p>
        
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="${project.liveUrl}" class="btn btn--primary" target="_blank" style="text-decoration: none;">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${project.githubUrl}" class="btn btn--outline" target="_blank" style="text-decoration: none;">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        const modalContent = projectModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.transform = 'translate(-50%, -50%) scale(1)';
            modalContent.style.opacity = '1';
        }
    }, 10);
}

function closeModal() {
    if (!projectModal) return;
    
    const modalContent = projectModal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.transform = 'translate(-50%, -50%) scale(0.9)';
        modalContent.style.opacity = '0';
    }
    
    setTimeout(() => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 200);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `form-message ${type}`;
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '10001';
    notification.style.display = 'block';
    notification.style.minWidth = '200px';
    notification.style.maxWidth = '400px';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler
window.addEventListener('resize', debounce(() => {
    // Recreate particles for new screen size
    if (particleContainer && particles.length > 0) {
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.remove();
            }
        });
        particles = [];
        
        // Create new particles for new screen size
        for (let i = 0; i < 30; i++) {
            createParticle();
        }
    }
}, 250));

// Initialize on page load
window.addEventListener('load', () => {
    // Performance monitoring
    if ('performance' in window && performance.mark) {
        performance.mark('portfolio-loaded');

        // Use modern Performance Observer API
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    if (entry.entryType === 'navigation') {
                        console.log(`Portfolio loaded in ${entry.loadEventEnd - entry.fetchStart}ms`);
                    }
                });
            });
            observer.observe({ entryTypes: ['navigation'] });
        }
    }

    console.log('Portfolio website loaded successfully!');
});

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modal = document.getElementById('project-modal');
        if (modal && modal.style.display === 'block') {
            closeModal();
        }
    }

    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});