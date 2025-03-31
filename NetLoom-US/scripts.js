document.addEventListener('DOMContentLoaded', function() {
  // Navigation scroll effect
  const nav = document.querySelector('nav');
  const scrollThreshold = 50;

  function checkScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check on initial load

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Service cards hover effect
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (menuToggle && menuToggle.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
        }
      }
    });
  });

  // Animate elements on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkVisibility() {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check on initial load
  
  // Form validation for contact form
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = this.querySelector('#name');
      const emailInput = this.querySelector('#email');
      const messageInput = this.querySelector('#message');
      
      // Basic validation
      if (!nameInput.value.trim()) {
        markInvalid(nameInput, 'Por favor ingrese su nombre');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!emailInput.value.trim()) {
        markInvalid(emailInput, 'Por favor ingrese su email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        markInvalid(emailInput, 'Por favor ingrese un email válido');
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput, 'Por favor ingrese su mensaje');
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      if (isValid) {
        // Show success message (in a real implementation this would submit to a server)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        
        // Simulate server request
        setTimeout(() => {
          const successMessage = document.createElement('div');
          successMessage.className = 'success-message';
          successMessage.textContent = 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.';
          
          this.insertAdjacentElement('afterend', successMessage);
          this.reset();
          
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          
          // Remove success message after a delay
          setTimeout(() => {
            successMessage.remove();
          }, 5000);
        }, 1500);
      }
    });
  }
  
  function markInvalid(input, message) {
    input.classList.add('invalid');
    
    let errorMsg = input.nextElementSibling;
    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
      errorMsg = document.createElement('div');
      errorMsg.className = 'error-message';
      input.insertAdjacentElement('afterend', errorMsg);
    }
    
    errorMsg.textContent = message;
  }
  
  function markValid(input) {
    input.classList.remove('invalid');
    
    const errorMsg = input.nextElementSibling;
    if (errorMsg && errorMsg.classList.contains('error-message')) {
      errorMsg.remove();
    }
  }
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}); 