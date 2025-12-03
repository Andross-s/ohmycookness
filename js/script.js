// Main JavaScript for Oh My Cookness website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
            this.querySelector('i').classList.toggle('fa-bars');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Sample product data (can be replaced with actual data from a backend)
    const products = [
        {
            id: 1,
            name: 'Organic Honey',
            price: 12.99,
            description: 'Pure, raw honey collected from local beekeepers.',
            image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 2,
            name: 'Extra Virgin Olive Oil',
            price: 24.99,
            description: 'Cold-pressed olive oil from the finest olives.',
            image: 'https://images.unsplash.com/photo-1518594704627-25d6f50e2a1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 3,
            name: 'Homemade Jam',
            price: 8.99,
            description: 'Delicious homemade jam with natural ingredients.',
            image: 'https://images.unsplash.com/photo-1551504738-4c503f779a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 4,
            name: 'Fresh Baked Bread',
            price: 6.99,
            description: 'Artisan bread baked fresh daily.',
            image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 5,
            name: 'Organic Eggs',
            price: 5.99,
            description: 'Farm-fresh organic eggs from free-range chickens.',
            image: 'https://images.unsplash.com/photo-1587486913049-53fc88980bea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 6,
            name: 'Homemade Pasta',
            price: 9.99,
            description: 'Handmade pasta using traditional recipes.',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81111?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 7,
            name: 'Fresh Vegetables Box',
            price: 15.99,
            description: 'Seasonal organic vegetables delivered fresh.',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 8,
            name: 'Artisan Cheese',
            price: 18.99,
            description: 'Handcrafted cheese from local farms.',
            image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 9,
            name: 'Organic Coffee Beans',
            price: 16.99,
            description: 'Premium organic coffee beans, freshly roasted.',
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 10,
            name: 'Fresh Fruits Basket',
            price: 14.99,
            description: 'Mixed seasonal fruits, organically grown.',
            image: 'https://images.unsplash.com/photo-1610832958506-aa83968156f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 11,
            name: 'Premium Tea Collection',
            price: 11.99,
            description: 'Selection of fine organic teas from around the world.',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 12,
            name: 'Organic Spices Set',
            price: 19.99,
            description: 'Premium quality spices, carefully selected.',
            image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        }
    ];
    
    // Load products
    const productsGrid = document.querySelector('.products-grid');
    
    if (productsGrid) {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-card fadeInUp';
            productElement.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="product-description">${product.description}</p>
                    <button class="add-to-cart" data-id="${product.id}" data-i18n="addToCart">Add to Cart</button>
                </div>
            `;
            productsGrid.appendChild(productElement);
        });
    }
    
    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartIcon = document.querySelector('.cart-icon');
    const cartCloseBtn = document.querySelector('.cart-close-btn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    // Load cart from localStorage on page load
    updateCartCount();
    renderCart();
    
    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            if (product) {
                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        ...product,
                        quantity: 1
                    });
                }
                
                saveCart();
                updateCartCount();
                renderCart();
                
                // Show notification with translation
                const currentLang = document.documentElement.getAttribute('lang') || 'en';
                const messages = {
                    en: `${product.name} added to cart!`,
                    ka: `${product.name} დაემატა კალათაში!`,
                    uk: `${product.name} додано до кошика!`
                };
                showNotification(messages[currentLang] || messages.en);
            }
        }
    });
    
    // Cart icon click - open modal
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            cartModal.classList.add('active');
        });
    }
    
    // Close cart modal
    if (cartCloseBtn) {
        cartCloseBtn.addEventListener('click', function() {
            cartModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Update quantity
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quantity-btn')) {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.getAttribute('data-id'));
            const isIncrease = e.target.classList.contains('increase');
            const isDecrease = e.target.classList.contains('decrease');
            
            const item = cart.find(i => i.id === productId);
            
            if (item) {
                if (isIncrease) {
                    item.quantity += 1;
                } else if (isDecrease && item.quantity > 1) {
                    item.quantity -= 1;
                }
                
                saveCart();
                updateCartCount();
                renderCart();
            }
        }
    });
    
    // Remove item from cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('cart-item-remove') || e.target.parentElement.classList.contains('cart-item-remove')) {
            const cartItem = e.target.closest('.cart-item');
            const productId = parseInt(cartItem.getAttribute('data-id'));
            
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCartCount();
            renderCart();
            
            // Show notification with translation
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const messages = {
                en: 'Item removed from cart',
                ka: 'პროდუქტი წაიშალა კალათიდან',
                uk: 'Товар видалено з кошика'
            };
            showNotification(messages[currentLang] || messages.en);
        }
    });
    
    // Clear cart
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const messages = {
                en: {
                    confirm: 'Are you sure you want to clear your cart?',
                    cleared: 'Cart cleared'
                },
                ka: {
                    confirm: 'დარწმუნებული ხართ, რომ გსურთ კალათის გასუფთავება?',
                    cleared: 'კალათა გასუფთავდა'
                },
                uk: {
                    confirm: 'Ви впевнені, що хочете очистити кошик?',
                    cleared: 'Кошик очищено'
                }
            };
            
            const msg = messages[currentLang] || messages.en;
            
            if (cart.length > 0 && confirm(msg.confirm)) {
                cart = [];
                saveCart();
                updateCartCount();
                renderCart();
                showNotification(msg.cleared);
            }
        });
    }
    
    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const messages = {
                en: {
                    empty: 'Your cart is empty',
                    thankYou: 'Thank you for your order! This is a demo site.'
                },
                ka: {
                    empty: 'თქვენი კალათა ცარიელია',
                    thankYou: 'გმადლობთ შეკვეთისთვის! ეს დემო საიტია.'
                },
                uk: {
                    empty: 'Ваш кошик порожній',
                    thankYou: 'Дякуємо за ваше замовлення! Це демонстраційний сайт.'
                }
            };
            
            const msg = messages[currentLang] || messages.en;
            
            if (cart.length === 0) {
                showNotification(msg.empty);
                return;
            }
            
            alert(msg.thankYou);
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
            cartModal.classList.remove('active');
        });
    }
    
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }
    
    function renderCart() {
        if (!cartItems) return;
        
        // Get current language for translations
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const translations = {
            en: {
                emptyCart: 'Your cart is empty',
                removeItem: 'Remove item'
            },
            ka: {
                emptyCart: 'თქვენი კალათა ცარიელია',
                removeItem: 'პროდუქტის წაშლა'
            },
            uk: {
                emptyCart: 'Ваш кошик порожній',
                removeItem: 'Видалити товар'
            }
        };
        
        const t = translations[currentLang] || translations.en;
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>${t.emptyCart}</p>
                </div>
            `;
            if (cartTotal) {
                cartTotal.textContent = '$0.00';
            }
            return;
        }
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" aria-label="${t.removeItem}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (cartTotal) {
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
    }
    
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function showNotification(message) {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message with translation
            const currentLang = document.documentElement.getAttribute('lang') || 'en';
            const messages = {
                en: 'Thank you for your message! We will get back to you soon.',
                ka: 'გმადლობთ თქვენი შეტყობინებისთვის! ჩვენ მალე დაგიკავშირდებით.',
                uk: 'Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.'
            };
            
            alert(messages[currentLang] || messages.en);
            
            // Reset form
            this.reset();
        });
    }
    
    // Listen for language changes to update cart
    document.addEventListener('languageChanged', function() {
        renderCart();
    });
});
