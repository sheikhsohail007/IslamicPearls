// Language translations
const translations = {
    en: {
        'explore-islamic-wisdom': 'Explore Islamic Wisdom',
        'prophet-stories': 'Prophet Stories',
        'prophet-stories-desc': 'Learn from the lives of holy messengers',
        'prophetic-wisdom': 'Prophetic Wisdom',
        'prophetic-wisdom-desc': 'Timeless guidance and teachings',
        'spiritual-mood': 'Spiritual Mood',
        'spiritual-mood-desc': 'Connect with your inner peace',
        'daily-reflection': 'Daily Reflection',
        'daily-reflection-desc': 'Moments of contemplation and prayer',
        'quran-verses': 'Quran Verses',
        'quran-verses-desc': 'Sacred verses for guidance',
        'daily-ayah': 'Daily Ayah',
        'daily-ayah-desc': 'Your daily dose of divine wisdom',
        'discover-inner-essence': 'Discover your inner essence',
        'peaceful': 'Peaceful',
        'peaceful-desc': 'In harmony with Allah\'s creation',
        'grateful': 'Grateful',
        'grateful-desc': 'Thankful for Allah\'s blessings',
        'seeking': 'Seeking',
        'seeking-desc': 'Searching for spiritual guidance',
        'contemplative': 'Contemplative',
        'contemplative-desc': 'Deep in spiritual reflection',
        'hopeful': 'Hopeful',
        'hopeful-desc': 'Trusting in Allah\'s plan',
        'devoted': 'Devoted',
        'devoted-desc': 'Dedicated to faith and worship',
        'explore-guidance': 'Explore Guidance'
    },
    ur: {
        'explore-islamic-wisdom': 'اسلامی حکمت کو دریافت کریں',
        'prophet-stories': 'انبیاء کی کہانیاں',
        'prophet-stories-desc': 'مقدس پیغمبروں کی زندگی سے سیکھیں',
        'prophetic-wisdom': 'نبوی حکمت',
        'prophetic-wisdom-desc': 'لازوال رہنمائی اور تعلیمات',
        'spiritual-mood': 'روحانی مزاج',
        'spiritual-mood-desc': 'اپنے اندرونی سکون سے رابطہ کریں',
        'daily-reflection': 'روزانہ غور و فکر',
        'daily-reflection-desc': 'تامل اور دعا کے لمحات',
        'quran-verses': 'قرآنی آیات',
        'quran-verses-desc': 'رہنمائی کے لیے مقدس آیات',
        'daily-ayah': 'روزانہ آیت',
        'daily-ayah-desc': 'آپ کی روزانہ الہی حکمت کی خوراک',
        'discover-inner-essence': 'اپنے اندرونی جوہر کو دریافت کریں',
        'peaceful': 'پرامن',
        'peaceful-desc': 'اللہ کی مخلوق کے ساتھ ہم آہنگی میں',
        'grateful': 'شکر گزار',
        'grateful-desc': 'اللہ کی نعمتوں کا شکر گزار',
        'seeking': 'طالب',
        'seeking-desc': 'روحانی رہنمائی کی تلاش میں',
        'contemplative': 'متفکر',
        'contemplative-desc': 'گہری روحانی تامل میں',
        'hopeful': 'امید مند',
        'hopeful-desc': 'اللہ کے منصوبے پر بھروسہ',
        'devoted': 'عبادت گزار',
        'devoted-desc': 'ایمان اور عبادت کے لیے وقف',
        'explore-guidance': 'رہنمائی کا جائزہ لیں'
    },
    ar: {
        'explore-islamic-wisdom': 'اكتشف الحكمة الإسلامية',
        'prophet-stories': 'قصص الأنبياء',
        'prophet-stories-desc': 'تعلم من حياة الرسل المقدسة',
        'prophetic-wisdom': 'الحكمة النبوية',
        'prophetic-wisdom-desc': 'إرشاد وتعاليم خالدة',
        'spiritual-mood': 'الحالة الروحية',
        'spiritual-mood-desc': 'تواصل مع سلامك الداخلي',
        'daily-reflection': 'التأمل اليومي',
        'daily-reflection-desc': 'لحظات التأمل والدعاء',
        'quran-verses': 'آيات القرآن',
        'quran-verses-desc': 'آيات مقدسة للإرشاد',
        'daily-ayah': 'آية اليوم',
        'daily-ayah-desc': 'جرعتك اليومية من الحكمة الإلهية',
        'discover-inner-essence': 'اكتشف جوهرك الداخلي',
        'peaceful': 'مسالم',
        'peaceful-desc': 'في انسجام مع خلق الله',
        'grateful': 'شاكر',
        'grateful-desc': 'شاكر لنعم الله',
        'seeking': 'باحث',
        'seeking-desc': 'يبحث عن الإرشاد الروحي',
        'contemplative': 'متأمل',
        'contemplative-desc': 'في تأمل روحي عميق',
        'hopeful': 'متفائل',
        'hopeful-desc': 'واثق في خطة الله',
        'devoted': 'متعبد',
        'devoted-desc': 'مكرس للإيمان والعبادة',
        'explore-guidance': 'استكشف الإرشاد'
    },
    bn: {
    'explore-islamic-wisdom': 'ইসলামী জ্ঞান অন্বেষণ করুন',
    'prophet-stories': 'নবীদের গল্প',
    'prophet-stories-desc': 'পবিত্র রাসূলদের জীবন থেকে শিক্ষা নিন',
    'prophetic-wisdom': 'নবী প্রজ্ঞা',
    'prophetic-wisdom-desc': 'চিরকালীন দিকনির্দেশনা ও শিক্ষা',
    'spiritual-mood': 'আধ্যাত্মিক মেজাজ',
    'spiritual-mood-desc': 'আপনার অন্তরের শান্তির সাথে সংযোগ করুন',
    'daily-reflection': 'দৈনিক চিন্তাভাবনা',
    'daily-reflection-desc': 'চিন্তা ও প্রার্থনার মুহূর্তসমূহ',
    'quran-verses': 'কুরআনের আয়াত',
    'quran-verses-desc': 'দিকনির্দেশনার জন্য পবিত্র আয়াত',
    'daily-ayah': 'দৈনিক আয়াত',
    'daily-ayah-desc': 'আপনার দৈনিক ঐশী জ্ঞানের খোরাক',
    'discover-inner-essence': 'আপনার অন্তরের সত্তা আবিষ্কার করুন',
    'peaceful': 'শান্তিপূর্ণ',
    'peaceful-desc': 'আল্লাহর সৃষ্টির সাথে সামঞ্জস্যে',
    'grateful': 'কৃতজ্ঞ',
    'grateful-desc': 'আল্লাহর নেয়ামতের জন্য কৃতজ্ঞ',
    'seeking': 'অন্বেষণকারী',
    'seeking-desc': 'আধ্যাত্মিক দিকনির্দেশনা খুঁজছেন',
    'contemplative': 'ধ্যানমগ্ন',
    'contemplative-desc': 'গভীর আধ্যাত্মিক চিন্তায় মগ্ন',
    'hopeful': 'আশাবাদী',
    'hopeful-desc': 'আল্লাহর পরিকল্পনায় আস্থাশীল',
    'devoted': 'নিবেদিতপ্রাণ',
    'devoted-desc': 'ঈমান ও ইবাদতে নিবেদিত',
    'explore-guidance': 'দিকনির্দেশনা অন্বেষণ করুন'
},

    hi: {
        'explore-islamic-wisdom': 'इस्लामी ज्ञान की खोज करें',
        'prophet-stories': 'पैगंबरों की कहानियाँ',
        'prophet-stories-desc': 'पवित्र संदेशवाहकों के जीवन से सीखें',
        'prophetic-wisdom': 'पैगंबर की बुद्धि',
        'prophetic-wisdom-desc': 'कालातीत मार्गदर्शन और शिक्षाएं',
        'spiritual-mood': 'आध्यात्मिक मनोदशा',
        'spiritual-mood-desc': 'अपनी आंतरिक शांति से जुड़ें',
        'daily-reflection': 'दैनिक चिंतन',
        'daily-reflection-desc': 'चिंतन और प्रार्थना के क्षण',
        'quran-verses': 'कुरान की आयतें',
        'quran-verses-desc': 'मार्गदर्शन के लिए पवित्र आयतें',
        'daily-ayah': 'दैनिक आयत',
        'daily-ayah-desc': 'दिव्य ज्ञान की आपकी दैनिक खुराक',
        'discover-inner-essence': 'अपने आंतरिक सार की खोज करें',
        'peaceful': 'शांतिप्रिय',
        'peaceful-desc': 'अल्लाह की सृष्टि के साथ सामंजस्य में',
        'grateful': 'कृतज्ञ',
        'grateful-desc': 'अल्लाह के आशीर्वाद के लिए आभारी',
        'seeking': 'खोजने वाला',
        'seeking-desc': 'आध्यात्मिक मार्गदर्शन की खोज में',
        'contemplative': 'चिंतनशील',
        'contemplative-desc': 'गहरे आध्यात्मिक चिंतन में',
        'hopeful': 'आशावान',
        'hopeful-desc': 'अल्लाह की योजना पर भरोसा',
        'devoted': 'समर्पित',
        'devoted-desc': 'विश्वास और पूजा के लिए समर्पित',
        'explore-guidance': 'मार्गदर्शन का अन्वेषण करें'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    let currentLanguage = 'en';
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Language selector
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const currentLangSpan = document.getElementById('currentLang');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Cards and mood functionality
    const homeCards = document.querySelectorAll('#homeSection .luxury-card');
    const moodCards = document.querySelectorAll('.mood-card');
    const luxuryResult = document.getElementById('luxuryResult');
    const resultText = document.getElementById('resultText');
    const resultDescription = document.getElementById('resultDescription');
    const luxuryBtn = document.getElementById('luxuryBtn');
    
    // Navigation switching
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show target section
            const targetElement = document.getElementById(targetSection + 'Section');
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
    
    // Language selector functionality
    languageBtn.addEventListener('click', function() {
        languageMenu.classList.toggle('active');
    });
    
    // Close language menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('active');
        }
    });
    
    // Language option selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            const langText = this.querySelector('span:last-child').textContent;
            
            currentLanguage = selectedLang;
            currentLangSpan.textContent = langText;
            languageMenu.classList.remove('active');
            
            // Update all text content
            updateLanguage(selectedLang);
        });
    });
    
    // Function to update language
    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-text]');
        elements.forEach(element => {
            const textKey = element.getAttribute('data-text');
            if (translations[lang] && translations[lang][textKey]) {
                element.textContent = translations[lang][textKey];
            }
        });
    }
    
    // Home section cards interaction
    homeCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Add visual feedback
            homeCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            // Create luxury notification based on category
            createCategoryNotification(category);
            
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        });
        
        // Add luxury hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Mood section functionality
    const moodData = {
        peaceful: {
            text: 'Peaceful',
            description: 'You are in harmony with Allah\'s creation. This serene state brings clarity to your prayers and deepens your connection with the divine.',
            gradient: 'linear-gradient(135deg, #20b2aa, #4ecdc4)',
            verse: '"And it is He who sends down rain from heaven, and We produce thereby the vegetation of every kind." - Quran 6:99'
        },
        grateful: {
            text: 'Grateful',
            description: 'Your heart overflows with gratitude for Allah\'s countless blessings. This thankful spirit opens doors to even greater divine gifts.',
            gradient: 'linear-gradient(135deg, #D4AF37, #FFD700)',
            verse: '"If you are grateful, I will certainly give you more." - Quran 14:7'
        },
        seeking: {
            text: 'Seeking',
            description: 'Your soul yearns for spiritual guidance and closeness to Allah. This noble quest leads to wisdom and divine enlightenment.',
            gradient: 'linear-gradient(135deg, #9f7aea, #8b5cf6)',
            verse: '"And whoever seeks guidance - Allah will guide him." - Quran 2:272'
        },
        contemplative: {
            text: 'Contemplative',
            description: 'You are engaged in deep spiritual reflection, pondering the signs of Allah. This thoughtful state reveals hidden truths.',
            gradient: 'linear-gradient(135deg, #4299e1, #3182ce)',
            verse: '"Indeed, in the creation of the heavens and the earth are signs for those who reflect." - Quran 3:190'
        },
        hopeful: {
            text: 'Hopeful',
            description: 'Your heart is filled with trust in Allah\'s perfect plan. This optimistic faith transforms challenges into opportunities for growth.',
            gradient: 'linear-gradient(135deg, #48bb78, #38a169)',
            verse: '"And whoever relies upon Allah - then He is sufficient for him." - Quran 65:3'
        },
        devoted: {
            text: 'Devoted',
            description: 'Your dedication to worship and faith shines brightly. This sincere devotion brings you closer to Allah\'s mercy and love.',
            gradient: 'linear-gradient(135deg, #006633, #38a169)',
            verse: '"And whoever obeys Allah and His Messenger has certainly attained a great attainment." - Quran 33:71'
        }
    };
    
    // Mood cards interaction
    moodCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            moodCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get the selected mood
            const mood = this.getAttribute('data-feeling');
            const data = moodData[mood];
            
            // Update result section with animation
            setTimeout(() => {
                resultText.style.opacity = '0';
                resultDescription.style.opacity = '0';
                
                setTimeout(() => {
                    resultText.textContent = data.text;
                    resultDescription.innerHTML = data.description + '<br><br><em>' + data.verse + '</em>';
                    luxuryResult.classList.add('active');
                    
                    // Animate text back in
                    resultText.style.opacity = '1';
                    resultDescription.style.opacity = '1';
                    
                    // Show luxury button
                    luxuryBtn.style.display = 'inline-flex';
                    luxuryBtn.style.background = data.gradient;
                    
                    // Smooth scroll to result
                    luxuryResult.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 300);
            }, 200);
        });
        
        // Premium hover effects
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-12px) scale(1.03)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Luxury button interaction
    luxuryBtn.addEventListener('click', function() {
        createLuxuryNotification('Your spiritual journey continues with Allah\'s guidance... 🌙');
    });
    
    // Create category notification
    function createCategoryNotification(category) {
        const messages = {
            prophets: 'Exploring the wisdom of Allah\'s messengers... 📜',
            mood: 'Discovering your spiritual state... 💫',
            quran: 'Connecting with divine revelations... 📖'
        };
        
        createLuxuryNotification(messages[category] || 'Spiritual experience activated... ✨');
    }
    
    // Luxury notification system
    function createLuxuryNotification(message) {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 2px solid #D4AF37;
                border-radius: 16px;
                padding: 32px;
                color: #f8f9fa;
                font-family: 'Inter', sans-serif;
                text-align: center;
                box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(20px);
                z-index: 2000;
                animation: luxuryFadeIn 0.5s ease;
                max-width: 400px;
            ">
                <i class="fas fa-star-and-crescent" style="font-size: 2rem; color: #D4AF37; margin-bottom: 16px;"></i>
                <h3 style="margin-bottom: 12px; font-family: 'Playfair Display', serif;">Spiritual Experience</h3>
                <p style="color: #adb5bd;">${message}</p>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'luxuryFadeOut 0.5s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 500);
        }, 3000);
    }
    
    // Add luxury animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes luxuryFadeIn {
            from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        @keyframes luxuryFadeOut {
            from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(style);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Switch sections with Tab key
        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault();
            const activeNav = document.querySelector('.nav-link.active');
            const currentIndex = Array.from(navLinks).indexOf(activeNav);
            const nextIndex = currentIndex === 0 ? navLinks.length - 1 : currentIndex - 1;
            navLinks[nextIndex].click();
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const activeNav = document.querySelector('.nav-link.active');
            const currentIndex = Array.from(navLinks).indexOf(activeNav);
            const nextIndex = (currentIndex + 1) % navLinks.length;
            navLinks[nextIndex].click();
        }
        
        // Number keys for mood cards
        if (e.key >= '1' && e.key <= '6') {
            const activeSection = document.querySelector('.section.active');
            if (activeSection && activeSection.id === 'moodSection') {
                const index = parseInt(e.key) - 1;
                if (moodCards[index]) {
                    moodCards[index].click();
                }
            }
        }
    });
    
    // Initialize with staggered animations
    setTimeout(() => {
        const allCards = document.querySelectorAll('.luxury-card');
        allCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});

// Refined Footer JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Back to Top Button
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
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    newsletterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        
        if (email && isValidEmail(email)) {
            createLuxuryNotification('✨ Thank you for subscribing! Stay blessed.');
            newsletterInput.value = '';
        } else {
            createLuxuryNotification('❌ Please enter a valid email address.');
        }
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Enhanced social link interactions
    const socialLinks = document.querySelectorAll('.animated-social-links .icon-content a');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.getAttribute('data-social');
            
            // Create ripple effect
            const ripple = document.createElement('div');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.position = 'absolute';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            ripple.style.zIndex = '10';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (this.contains(ripple)) {
                    this.removeChild(ripple);
                }
            }, 600);
            
            console.log(`User clicked on ${platform} social link`);
        });
        
        // Magnetic effect
        link.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translateY(-8px) scale(1.1) translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add this to your existing JavaScript for compact mood cards
document.addEventListener('DOMContentLoaded', function() {
    // Compact mood cards functionality
    const compactMoodCards = document.querySelectorAll('.compact-mood-card');
    const luxuryResult = document.getElementById('luxuryResult');
    const resultText = document.getElementById('resultText');
    const resultDescription = document.getElementById('resultDescription');
    const luxuryBtn = document.getElementById('luxuryBtn');
    
    // Basic mood data - you can expand this later
    const basicMoodData = {
        angry: { text: 'Angry', description: 'Transform your anger into positive action with Islamic guidance.' },
        anxious: { text: 'Anxious', description: 'Find peace through prayer and trust in Allah\'s plan.' },
        happy: { text: 'Happy', description: 'Share your joy and gratitude with others around you.' },
        sad: { text: 'Sad', description: 'Remember that after every hardship comes ease.' },
        grateful: { text: 'Grateful', description: 'Your gratitude opens doors to more blessings.' },
        stressed: { text: 'Stressed', description: 'Seek comfort in remembrance of Allah.' },
        peaceful: { text: 'Peaceful', description: 'Maintain this blessed state through regular prayer.' },
        // Add default for other moods
        default: { text: 'Feeling', description: 'Every emotion is a step in your spiritual journey.' }
    };
    
    compactMoodCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            compactMoodCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Get the selected mood
            const mood = this.getAttribute('data-feeling');
            const data = basicMoodData[mood] || basicMoodData.default;
            
            // Update result section
            setTimeout(() => {
                resultText.style.opacity = '0';
                resultDescription.style.opacity = '0';
                
                setTimeout(() => {
                    resultText.textContent = data.text;
                    resultDescription.textContent = data.description;
                    luxuryResult.classList.add('active');
                    
                    // Animate text back in
                    resultText.style.opacity = '1';
                    resultDescription.style.opacity = '1';
                    
                    // Show luxury button
                    luxuryBtn.style.display = 'inline-flex';
                    
                    // Smooth scroll to result
                    luxuryResult.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 300);
            }, 200);
        });
        
        // Hover effects
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-4px) scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Staggered entrance animation
    setTimeout(() => {
        compactMoodCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 500);
});
