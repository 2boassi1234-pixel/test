document.addEventListener('DOMContentLoaded', () => {
    // Basic interaction example (not related to filters, as per request)
    // Add event listeners for the "Add to Cart" buttons
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click from triggering
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            console.log(`Product "${productName}" added to the (non-functional) cart!`);

            // You can add a visual feedback here if you wish, e.g.,
            // button.textContent = 'Added!';
            // setTimeout(() => button.textContent = 'Add to Cart', 1000);
        });
    });

    // You could add logic here for image swapping on hover, 
    // or responsiveness features like a mobile menu toggle, if desired.

    // Note: The filter sidebar is intentionally static (HTML/CSS only)
    // as per the requirement to treat them as a "shape" only.

    // Pagination buttons - toggle clicked state
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove clicked class from all buttons
            navButtons.forEach(btn => btn.classList.remove('clicked'));
            // Add clicked class to the clicked button
            this.classList.add('clicked');
        });
    });

    // Product cards - toggle clicked state and reduce button opacity
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking directly on the button
            if (e.target.classList.contains('add-to-cart')) {
                return;
            }
            // Toggle clicked class on the card
            this.classList.toggle('clicked');
        });
    });
});