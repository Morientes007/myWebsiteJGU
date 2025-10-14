// ============================================================================
// SECTIONS LOADER
// Loads section files into placeholders synchronously to maintain layout order
// ============================================================================

(function() {
    // Define sections in order
    const sections = [
        'hero',
        'about',
        'research',
        'publications',
        'talks',
        'teaching',
        'mentoring',
        'contact'
    ];

    // Load sections synchronously
    async function loadSections() {
        for (const section of sections) {
            const placeholder = document.getElementById(`section-placeholder-${section}`);
            if (placeholder) {
                try {
                    const response = await fetch(`sections/${section}.html`);
                    if (response.ok) {
                        const html = await response.text();
                        placeholder.outerHTML = html;
                    } else {
                        console.error(`Failed to load ${section}.html`);
                    }
                } catch (error) {
                    console.error(`Error loading ${section}.html:`, error);
                }
            }
        }

        // Trigger a custom event when all sections are loaded
        // This allows script.js to reinitialize after sections are in the DOM
        document.dispatchEvent(new Event('sectionsLoaded'));
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSections);
    } else {
        loadSections();
    }
})();
