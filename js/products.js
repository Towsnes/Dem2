const products = [
    { name: "premium Straight Leg Jeans White", image: 'images/premium Straight Leg Jeans White.jpg', original: 129.00, sale: 89.00 },
    { name: "Slim Fit Straight Leg Jeans", image: 'images/Slim Fit Straight Leg Jeans.jpg', original: 145.00, sale: 89.00 },
    { name: "Casual Line Square Blazer Grey", image: 'images/Casual Line Square Blazer Grey.jpg', original: 350.00, sale: 299.00 },
    { name: "Classic Denim Jacket", image: 'images/Classic Denim Jacket.jpg', original: 149.00, sale: 129.00 },
    { name: "Coolman Denim Jacket", image: 'images/Coolman Denim Jacket.jpg', original: 450.00, sale: 399.00 },
    { name: "Exclusive Motive Leather Shoes", image: 'images/Exclusive Motive Leather Shoes.jpg', original: 79.00, sale: 59.00 },
    { name: "Premium Motive Leather Shoes", image: 'images/Premium Motive Leather Shoes.jpg', original: 299.00, sale: 249.00 },
    { name: "Leather Rockerman Jacket", image: 'images/Leather Rockerman Jacket.jpg', original: 89.00, sale: 69.00 },
    { name: "BeachBoy Summer Shirt", image: 'images/BeachBoy Summer Shirt.jpg', original: 399.00, sale: 339.00 },
    { name: "Premium Semi Leather Shoes", image: 'images/Premium Semi Leather Shoes.jpg', original: 119.00, sale: 99.00 },
    { name: "Premium Blazer Yellow", image: 'images/Premium Blazer Yellow.jpg', original: 159.00, sale: 129.00 },
    { name: "Armaf Club De Nuit Intensemen", image: 'images/Premium Leather Shoes.jpg', original: 69.00, sale: 49.00 }
];

const sortSelect = document.querySelector('.sort-select');
const productsGrid = document.querySelector('.products-grid');

function renderProducts(sortedProducts) {
    productsGrid.innerHTML = '';
    sortedProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="sale-badge">Sale!</span>
            <div class="product-image" style="background-image: url('${product.image}');"></div>
            <div class="product-name">${product.name}</div>
            <div class="price-container">
                <span class="original-price">${product.original.toFixed(2)}</span>
                <span class="sale-price">${product.sale.toFixed(2)}</span>
            </div>
            <button class="add-to-cart">Add to cart</button>
        `;
        productsGrid.appendChild(card);
    });
}

sortSelect.addEventListener('change', function() {
    let sortedProducts = [...products];
            
    switch(this.value) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.sale - b.sale);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.sale - a.sale);
            break;
        case 'popularity':
            sortedProducts.reverse();
            break;
        default:
            sortedProducts = [...products];
}
            
    renderProducts(sortedProducts);
});