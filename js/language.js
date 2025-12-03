// Language handler for Oh My Cookness website

document.addEventListener('DOMContentLoaded', function() {
    // Define translations
    const translations = {
        en: {
            // Navigation
            'home': 'Home',
            'products': 'Products',
            'about': 'About Us',
            'contact': 'Contact',
            'addToCart': 'Add to Cart',
            
            // Hero section
            'heroTitle': 'Premium Quality Food Products',
            'heroSubtitle': 'Discover the finest selection of organic and delicious food items',
            'shopNow': 'Shop Now',
            
            // Products section
            'featuredProducts': 'Featured Products',
            
            // About section
            'aboutTitle': 'About Oh My Cookness',
            'aboutText1': 'We are passionate about bringing you the highest quality food products from trusted sources. Our mission is to provide healthy, delicious options for every meal.',
            'aboutText2': 'With years of experience in the food industry, we carefully select each product to ensure it meets our high standards of quality and taste.',
            
            // Contact section
            'contactUs': 'Contact Us',
            'address': 'Address',
            'phone': 'Phone',
            'workingHours': 'Working Hours',
            'workingHoursValue': 'Monday - Sunday: 9:00 - 21:00',
            'yourName': 'Your Name',
            'yourEmail': 'Your Email',
            'yourMessage': 'Your Message',
            'sendMessage': 'Send Message',
            
            // Footer
            'footerSlogan': 'Delicious food for everyone',
            'quickLinks': 'Quick Links',
            'allRightsReserved': 'All rights reserved.',
            
            // Cart
            'cartTitle': 'Shopping Cart',
            'total': 'Total',
            'checkout': 'Checkout',
            'clearCart': 'Clear Cart'
        },
        ka: {
            // Navigation
            'home': 'მთავარი',
            'products': 'პროდუქცია',
            'about': 'ჩვენ შესახებ',
            'contact': 'კონტაქტი',
            'addToCart': 'კალათში დამატება',
            
            // Hero section
            'heroTitle': 'პრემიური ხარისხის სასურსათო პროდუქტები',
            'heroSubtitle': 'აღმოაჩინეთ ორგანული და გემრიელი საკვები პროდუქტების ფართო არჩევანი',
            'shopNow': 'იყიდე ახლავე',
            
            // Products section
            'featuredProducts': 'ფიჩერი პროდუქტები',
            
            // About section
            'aboutTitle': 'ჩვენს შესახებ',
            'aboutText1': 'ჩვენ ვართ დაინტერესებული იმით, რომ მოგაწოდოთ უმაღლესი ხარისხის სასურსათო პროდუქტები სანდო წყაროებიდან. ჩვენი მისიაა უზრუნველვყოთ ჯანსაღი და გემრიელი საკვები ყოველი ვადალი.',
            'aboutText2': 'საკვების ინდუსტრიაში მრავალწლიანი გამოცდილებით, ჩვენ ყურადღებით ვირჩევთ თითოეულ პროდუქტს, რათა დავრწმუნდეთ, რომ ის შეესაბამება ჩვენს მაღალ სტანდარტებს ხარისხისა და გემოვნების თვალსაზრისით.',
            
            // Contact section
            'contactUs': 'დაგვიკავშირდით',
            'address': 'მისამართი',
            'phone': 'ტელეფონი',
            'workingHours': 'სამუშაო საათები',
            'workingHoursValue': 'ორშაბათი - კვირა: 09:00 - 21:00',
            'yourName': 'თქვენი სახელი',
            'yourEmail': 'თქვენი ელ. ფოსტა',
            'yourMessage': 'თქვენი შეტყობინება',
            'sendMessage': 'შეტყობინების გაგზავნა',
            
            // Footer
            'footerSlogan': 'გემრიელი საკვები ყველასთვის',
            'quickLinks': 'სწრაფი ბმულები',
            'allRightsReserved': 'ყველა უფლება დაცულია.',
            
            // Cart
            'cartTitle': 'საყიდლების კალათა',
            'total': 'სულ',
            'checkout': 'გადახდა',
            'clearCart': 'კალათის გასუფთავება'
        },
        uk: {
            // Navigation
            'home': 'Головна',
            'products': 'Продукти',
            'about': 'Про нас',
            'contact': 'Контакти',
            'addToCart': 'Додати в кошик',
            
            // Hero section
            'heroTitle': 'Продукти харчування преміум якості',
            'heroSubtitle': 'Відкрийте для себе найкращий вибір органічних та смачних продуктів харчування',
            'shopNow': 'Купити зараз',
            
            // Products section
            'featuredProducts': 'Рекомендовані товари',
            
            // About section
            'aboutTitle': 'Про нас',
            'aboutText1': 'Ми прагнемо надавати вам найякісніші продукти харчування з перевірених джерел. Наша місія - забезпечити здорові та смачні варіанти для кожного прийому їжі.',
            'aboutText2': 'Маючи багаторічний досвід у харчовій промисловості, ми ретельно відбираємо кожен продукт, щоб переконатися, що він відповідає нашим високим стандартам якості та смаку.',
            
            // Contact section
            'contactUs': 'Контакти',
            'address': 'Адреса',
            'phone': 'Телефон',
            'workingHours': 'Графік роботи',
            'workingHoursValue': 'Понеділок - Неділя: 09:00 - 21:00',
            'yourName': 'Ваше ім\'я',
            'yourEmail': 'Ваш email',
            'yourMessage': 'Ваше повідомлення',
            'sendMessage': 'Надіслати повідомлення',
            
            // Footer
            'footerSlogan': 'Смачна їжа для всіх',
            'quickLinks': 'Швидкі посилання',
            'allRightsReserved': 'Всі права захищені.',
            
            // Cart
            'cartTitle': 'Кошик покупок',
            'total': 'Всього',
            'checkout': 'Оформити замовлення',
            'clearCart': 'Очистити кошик'
        }
    };

    // Function to update the content with translations
    function updateContent(lang) {
        // Get all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            if (translations[lang] && translations[lang][key]) {
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'IMG') {
                    element.alt = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);
        
        // Store the selected language in localStorage
        localStorage.setItem('preferredLanguage', lang);
        
        // Dispatch language change event for other scripts
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    }
    
    // Set the initial language
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    updateContent(currentLang);
    
    // Add event listeners to language buttons
    const languageButtons = document.querySelectorAll('.language-btn');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            updateContent(lang);
            
            // Update active state
            languageButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Set active language button on page load
    const activeButton = document.querySelector(`.language-btn[data-lang="${currentLang}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
});
