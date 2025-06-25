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
                    // Add a small delay to ensure DOM is ready
                    await new Promise(resolve => setTimeout(resolve, 10));
                    
                    // Fetch the new page
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
                    
                    // Update the page title
                    document.title = newDoc.title;
                    
                    // Update the main content
                    const newMainContent = newDoc.querySelector('#main-content');
                    const currentMainContent = document.querySelector('#main-content');
                    
                    if (newMainContent && currentMainContent) {
                        // Clear existing content first
                        currentMainContent.innerHTML = '';
                        
                        // Add new content
                        currentMainContent.innerHTML = newMainContent.innerHTML;
                    } else {
                        throw new Error('Main content elements not found');
                    }
                    
                    // Update the URL
                    window.history.pushState({}, '', href);
                    
                    // Small delay before re-initializing scripts
                    await new Promise(resolve => setTimeout(resolve, 50));
                    
                    // Re-initialize any scripts that need to run on the new content
                    setupSidebar();
                    
                    // Re-initialize copy buttons if the function exists
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
                    
                    const newMainContent = newDoc.querySelector('#main-content');
                    const currentMainContent = document.querySelector('#main-content');
                    
                    if (newMainContent && currentMainContent) {
                        currentMainContent.innerHTML = '';
                        currentMainContent.innerHTML = newMainContent.innerHTML;
                    }
                    
                    await new Promise(resolve => setTimeout(resolve, 50));
                    
                    setupSidebar();
                    
                    // Re-initialize copy buttons if the function exists
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

// --------- INITIALIZATION ---------
// Run on initial load
if (typeof document !== 'undefined') {
    setupSidebar();
    enableViewTransitions();
    document.addEventListener('DOMContentLoaded', () => {
        setupSidebar();
        enableViewTransitions();
    });
} 