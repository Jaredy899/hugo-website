// --------- VIEW TRANSITIONS ---------
let isTransitioning = false;

function enableViewTransitions() {
    // Check if View Transitions API is supported
    if (!document.startViewTransition) {
        return;
    }

    // Handle all internal navigation links
    document.addEventListener('click', async (e) => {
        // Prevent multiple simultaneous transitions
        if (isTransitioning) {
            e.preventDefault();
            return;
        }

        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') {
            return;
        }
        
        // Check if it's an internal link
        try {
            // Handle relative URLs like "/"
            let fullUrl;
            if (href.startsWith('/')) {
                fullUrl = window.location.origin + href;
            } else {
                fullUrl = new URL(href, window.location.href).href;
            }
            
            const url = new URL(fullUrl);
            if (url.origin !== window.location.origin) {
                return;
            }
        } catch (e) {
            return;
        }
        
        // Check if we're already on this page
        if (window.location.pathname === href || window.location.href === href) {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        
        // Set transition flag
        isTransitioning = true;
        
        // Start the view transition
        if (!document.startViewTransition) {
            isTransitioning = false;
            window.location.href = href;
            return;
        }

        try {
            const transition = document.startViewTransition(async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 10));
                    
                    const response = await fetch(href, {
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                    }
                    
                    const html = await response.text();
                    const parser = new DOMParser();
                    const newDoc = parser.parseFromString(html, 'text/html');
                    
                    document.title = newDoc.title;
                    
                    // Update header (so logo appears when navigating to blog, and view transition can match jc-logo)
                    const newHeader = newDoc.querySelector('#page-header');
                    const currentHeader = document.querySelector('#page-header');
                    if (newHeader && currentHeader) {
                        currentHeader.innerHTML = newHeader.innerHTML;
                        applyThemeIconVisibility();
                    }
                    
                    // Update body class (e.g. blog-post-page for scroll behavior)
                    document.body.className = newDoc.body.className || '';
                    
                    // When navigating to home, show header (remove scroll-hide state)
                    if (!document.body.classList.contains('blog-post-page')) {
                        document.getElementById('page-header')?.classList.remove('header-hidden');
                    }
                    
                    // Update main content
                    const newMainContent = newDoc.querySelector('#main-content');
                    const currentMainContent = document.querySelector('#main-content');
                    if (newMainContent && currentMainContent) {
                        currentMainContent.innerHTML = newMainContent.innerHTML;
                        currentMainContent.className = newMainContent.className || '';
                    } else {
                        throw new Error('Main content elements not found');
                    }
                    
                    window.history.pushState({}, '', href);
                    window.scrollTo(0, 0);
                    
                    await new Promise(resolve => setTimeout(resolve, 50));
                    
                    setupSidebar();
                    setupBlogHeaderScroll();
                    if (typeof setupCopyButtons === 'function') {
                        setupCopyButtons();
                    }
                } catch (error) {
                    console.error('View transition failed:', error);
                    throw error;
                }
            });
            
            // Handle transition completion
            transition.finished.then(() => {
                isTransitioning = false;
            }).catch((error) => {
                console.error('View transition error:', error);
                isTransitioning = false;
            });
            
            // Add a timeout fallback
            setTimeout(() => {
                if (isTransitioning) {
                    isTransitioning = false;
                }
            }, 5000);
            
        } catch (error) {
            console.error('View transition failed:', error);
            isTransitioning = false;
            // Fallback to normal navigation
            window.location.href = href;
        }
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', async (e) => {
        if (isTransitioning) {
            return;
        }
        
        if (!document.startViewTransition) {
            return;
        }

        isTransitioning = true;

        try {
            const transition = document.startViewTransition(async () => {
                try {
                    await new Promise(resolve => setTimeout(resolve, 10));
                    
                    const response = await fetch(window.location.href, {
                        headers: {
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                    }
                    
                    const html = await response.text();
                    const parser = new DOMParser();
                    const newDoc = parser.parseFromString(html, 'text/html');
                    
                    document.title = newDoc.title;
                    
                    const newHeader = newDoc.querySelector('#page-header');
                    const currentHeader = document.querySelector('#page-header');
                    if (newHeader && currentHeader) {
                        currentHeader.innerHTML = newHeader.innerHTML;
                        applyThemeIconVisibility();
                    }
                    
                    document.body.className = newDoc.body.className || '';
                    
                    if (!document.body.classList.contains('blog-post-page')) {
                        document.getElementById('page-header')?.classList.remove('header-hidden');
                    }
                    
                    const newMainContent = newDoc.querySelector('#main-content');
                    const currentMainContent = document.querySelector('#main-content');
                    if (newMainContent && currentMainContent) {
                        currentMainContent.innerHTML = newMainContent.innerHTML;
                        currentMainContent.className = newMainContent.className || '';
                    }
                    
                    window.scrollTo(0, 0);
                    
                    await new Promise(resolve => setTimeout(resolve, 50));
                    
                    setupSidebar();
                    setupBlogHeaderScroll();
                    if (typeof setupCopyButtons === 'function') {
                        setupCopyButtons();
                    }
                } catch (error) {
                    console.error('Popstate view transition failed:', error);
                    throw error;
                }
            });
            
            transition.finished.then(() => {
                isTransitioning = false;
            }).catch((error) => {
                console.error('Popstate view transition failed:', error);
                isTransitioning = false;
                window.location.reload();
            });
            
        } catch (error) {
            console.error('Popstate view transition failed:', error);
            isTransitioning = false;
            window.location.reload();
        }
    });
}

// --------- THEME TOGGLE ---------
function applyThemeIconVisibility() {
    const isDark = document.documentElement.classList.contains('dark');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    if (sunIcon && moonIcon) {
        if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
}

// Delegated click so theme toggle works after header is replaced (view transition)
document.addEventListener('click', (e) => {
    if (!e.target.closest('#theme-toggle')) return;
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    applyThemeIconVisibility();
});

// --------- SIDEBAR TOGGLE ---------
const handleSidebarToggleClick = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    
    if (sidebar && overlay) {
        const isOpen = sidebar.classList.contains('open');
        
        if (isOpen) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        } else {
            sidebar.classList.add('open');
            overlay.classList.add('active');
        }
    }
};

const handleOverlayClick = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
};

const setupSidebar = () => {
    const sidebarToggleButton = document.getElementById("sidebar-toggle");
    const overlay = document.getElementById("sidebar-overlay");

    if (sidebarToggleButton) {
        sidebarToggleButton.removeEventListener("click", handleSidebarToggleClick);
        sidebarToggleButton.addEventListener("click", handleSidebarToggleClick);
    }
    if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
        overlay.addEventListener("click", handleOverlayClick);
    }
};

// --------- BLOG HEADER SCROLL (match Nuxt: hide on scroll down, show on scroll up) ---------
let lastScrollY = 0;
let blogHeaderScrollBound = false;

function handleBlogHeaderScroll() {
    if (!document.body.classList.contains('blog-post-page')) return;
    const header = document.getElementById('page-header');
    if (!header) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY < 100) {
        header.classList.remove('header-hidden');
    } else if (currentScrollY > lastScrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
}

function setupBlogHeaderScroll() {
    if (!document.body.classList.contains('blog-post-page')) return;
    if (!document.getElementById('page-header')) return;
    if (!blogHeaderScrollBound) {
        blogHeaderScrollBound = true;
        window.addEventListener('scroll', handleBlogHeaderScroll, { passive: true });
    }
    lastScrollY = window.scrollY;
    handleBlogHeaderScroll();
}

// --------- INITIALIZATION ---------
// Run on initial load
if (typeof document !== 'undefined') {
    setupSidebar();
    enableViewTransitions();
    setupBlogHeaderScroll();
    document.addEventListener('DOMContentLoaded', () => {
        setupSidebar();
        enableViewTransitions();
        setupBlogHeaderScroll();
    });
} 