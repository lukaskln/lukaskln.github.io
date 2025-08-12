// Navigation functionality for multi-page setup
function initNavigation() {
	// Get current page from URL
	const currentPage = window.location.pathname.split('/').pop() || 'index.html';
	
	// Set active navigation link
	const navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(link => {
		const href = link.getAttribute('href');
		if (href === currentPage || (currentPage === '' && href === 'index.html')) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

// Mobile menu functionality
function toggleMobileMenu() {
	const menu = document.getElementById('nav-menu');
	if (menu) {
		menu.classList.toggle('active');
	}
}

// Close mobile menu when clicking outside
function closeMobileMenuOnClickOutside(event) {
	const menu = document.getElementById('nav-menu');
	const toggle = document.getElementById('menu-toggle');
	
	if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
		menu.classList.remove('active');
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
	// Initialize navigation
	initNavigation();
	
	// Add mobile menu toggle functionality
	const menuToggle = document.getElementById('menu-toggle');
	if (menuToggle) {
		menuToggle.addEventListener('click', toggleMobileMenu);
	}
	
	// Add click outside listener
	document.addEventListener('click', closeMobileMenuOnClickOutside);
	
	// Close mobile menu when navigation link is clicked
	const navLinks = document.querySelectorAll('#nav-menu .nav-link');
	navLinks.forEach(link => {
		link.addEventListener('click', function() {
			const menu = document.getElementById('nav-menu');
			if (menu) {
				menu.classList.remove('active');
			}
		});
	});
});