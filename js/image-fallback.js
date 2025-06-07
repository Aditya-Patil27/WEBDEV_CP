/**
 * Image Fallback Utility
 * Provides SVG placeholders for missing images
 */

// Generate a placeholder SVG for missing images
function generatePlaceholderSVG(title, category) {
    // First try to use static SVG files
    const categories = ['announcement', 'achievement', 'event', 'facility', 'program'];
    
    // If the category is valid, use the static SVG file
    if (category && categories.includes(category)) {
        return `assets/images/svg/${category}.svg`;
    } else {
        return 'assets/images/svg/default.svg';
    }
}

// Function to handle image errors and replace with placeholder
function setupImageFallbacks() {
    document.addEventListener('error', function(event) {
        if (event.target.tagName.toLowerCase() === 'img') {
            const img = event.target;
            const cardElement = img.closest('.event-card, .featured-image');
            
            // Get category from nearby elements
            let category = '';
            
            if (cardElement) {
                // Try to determine category from card class or nearby elements
                if (cardElement.classList.length > 1) {
                    // Get class that is not 'event-card' or 'news-card'
                    for (const cls of cardElement.classList) {
                        if (cls !== 'event-card' && cls !== 'news-card' && cls !== 'featured-image') {
                            category = cls;
                            break;
                        }
                    }
                }
            }
            
            // Replace image with SVG placeholder
            img.src = generatePlaceholderSVG(null, category);
            
            // Mark as placeholder for styling
            img.classList.add('placeholder-image');
        }
    }, true);
}

// Set up an observer to handle dynamically loaded images
function setupDynamicImageObserver() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        const images = node.querySelectorAll('img');
                        images.forEach(function(img) {
                            img.addEventListener('error', function() {
                                const cardElement = img.closest('.event-card, .featured-image');
                                let category = '';
                                
                                if (cardElement) {
                                    if (cardElement.classList.length > 1) {
                                        for (const cls of cardElement.classList) {
                                            if (cls !== 'event-card' && cls !== 'news-card' && cls !== 'featured-image') {
                                                category = cls;
                                                break;
                                            }
                                        }
                                    }
                                }
                                
                                this.src = generatePlaceholderSVG(null, category);
                                this.classList.add('placeholder-image');
                            });
                        });
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupImageFallbacks();
    setupDynamicImageObserver();
}); 