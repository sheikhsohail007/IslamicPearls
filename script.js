// Add this at the VERY BEGINNING of your JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    // Loading screen elements
    const luxuryLoader = document.getElementById('luxuryLoader');
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    const loadingText = document.getElementById('loadingText');
    const subLoadingText = document.getElementById('subLoadingText');
    
    // Loading messages in different languages
    const loadingMessages = [
        {
            main: 'Islamic Experience',
            sub: 'Preparing your spiritual journey...',
            lang: 'English'
        },
        {
            main: 'تجربة إسلامية',
            sub: 'نحن نعد رحلتك الروحية...',
            lang: 'Arabic'
        },
        {
            main: 'اسلامی تجربہ',
            sub: 'آپ کا روحانی سفر تیار کر رہے ہیں...',
            lang: 'Urdu'
        },
        {
            main: 'ইসলামিক অভিজ্ঞতা',
            sub: 'আপনার আধ্যাত্মিক যাত্রা প্রস্তুত করছি...',
            lang: 'Bengali'
        },
        {
            main: 'इस्लामिक अनुभव',
            sub: 'आपकी आध्यात्मिक यात्रा तैयार कर रहे हैं...',
            lang: 'Hindi'
        }
    ];
    
    let currentProgress = 0;
    let currentMessageIndex = 0;
    
    // Start loading sequence
    startLoadingSequence();
    
    function startLoadingSequence() {
        // Initial delay
        setTimeout(() => {
            simulateLoading();
            cycleLoadingMessages();
        }, 500);
    }
    
    // Simulate loading progress
    function simulateLoading() {
        const loadingInterval = setInterval(() => {
            currentProgress += Math.random() * 15 + 5; // Random increment between 5-20
            
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(loadingInterval);
                setTimeout(() => {
                    completeLoading();
                }, 800);
            }
            
            updateProgress(currentProgress);
        }, 200);
    }
    
    // Update progress bar
    function updateProgress(progress) {
        progressFill.style.width = progress + '%';
        progressPercentage.textContent = Math.round(progress) + '%';
    }
    
    // Cycle through loading messages
    function cycleLoadingMessages() {
        const messageInterval = setInterval(() => {
            if (currentProgress >= 100) {
                clearInterval(messageInterval);
                return;
            }
            
            currentMessageIndex = (currentMessageIndex + 1) % loadingMessages.length;
            const message = loadingMessages[currentMessageIndex];
            
            // Fade out
            loadingText.style.opacity = '0';
            subLoadingText.style.opacity = '0';
            
            setTimeout(() => {
                loadingText.textContent = message.main;
                subLoadingText.textContent = message.sub;
                
                // Fade in
                loadingText.style.opacity = '1';
                subLoadingText.style.opacity = '1';
            }, 300);
            
        }, 2000);
    }
    
    // Complete loading and hide loader
    function completeLoading() {
        // Final message
        loadingText.style.opacity = '0';
        subLoadingText.style.opacity = '0';
        
        setTimeout(() => {
            loadingText.textContent = 'Welcome!';
            subLoadingText.textContent = 'اهلا وسهلا - أهلاً وسهلاً';
            loadingText.style.opacity = '1';
            subLoadingText.style.opacity = '1';
            
            setTimeout(() => {
                hideLoader();
            }, 1000);
        }, 300);
    }
    
    // Hide loader with animation
    function hideLoader() {
        luxuryLoader.classList.add('fade-out');
        
        setTimeout(() => {
            luxuryLoader.style.display = 'none';
            
            // Initialize main website
            initMainWebsite();
        }, 800);
    }
    
    // Initialize main website functionality
    function initMainWebsite() {
        // Trigger staggered animations for main content
        const allCards = document.querySelectorAll('.luxury-card, .compact-mood-card');
        allCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
        
        // Show success notification
        setTimeout(() => {
            createLuxuryNotification('🌙 Welcome to your Islamic Experience! ✨');
        }, 1000);
    }
    
    // Preload important assets while loading
    function preloadAssets() {
        const imagesToPreload = [
            // Add any important images here
        ];
        
        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Start preloading
    preloadAssets();
    
    // Rest of your existing JavaScript code goes below this...
});

// Add this function - it was missing!
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
            <p style="color: #adb5bd; margin: 0;">${message}</p>
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


// Add this to your existing JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const compactMoodCards = document.querySelectorAll('.compact-mood-card');
    const moodDetailSection = document.getElementById('moodDetailSection');
    const moodSection = document.getElementById('moodSection');
    const backToMoodsBtn = document.getElementById('backToMoods');
    
    // Mood data template
   // REPLACE your existing moodDataTemplate with this complete version:
const moodDataTemplate = {
    angry: {
        title: 'Angry',
        subtitle: 'Finding peace through patience and Islamic guidance',
        icon: 'fas fa-fire',
        arabic: 'وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ',
        translation: 'Who restrain anger and who pardon the people',
        reference: 'Quran 3:134',
        hadith: 'He is not strong who overcomes people by his strength, but he who controls himself while in anger.',
        hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
        duaArabic: 'اللَّهُمَّ أَذْهِبْ غَيْظَ قَلْبِي',
        duaTranslation: 'O Allah, remove the anger from my heart',
        duaBenefit: 'Recite this when feeling angry to find inner peace.',
        advice: ['Take deep breaths and remember Allah', 'Seek refuge in Allah from Satan', 'Make wudu to calm yourself', 'Remember the reward of patience'],
        videoTitle: 'Controlling Anger in Islam',
        videoDescription: 'Learn Islamic ways to manage and overcome anger.',
        videoUrl: 'https://www.youtube.com/embed/A0koepD3yk4'
    },

    anxious: {
        title: 'Anxious',
        subtitle: 'Finding tranquility through trust in Allah',
        icon: 'fas fa-heart-broken',
        arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        translation: 'And whoever relies upon Allah - then He is sufficient for him',
        reference: 'Quran 65:3',
        hadith: 'No fatigue, nor disease, nor anxiety befalls a Muslim without Allah expiating his sins.',
        hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
        duaArabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ',
        duaTranslation: 'O Allah, I seek refuge in You from anxiety and sorrow',
        duaBenefit: 'This dua brings peace to worried hearts.',
        advice: ['Trust in Allah\'s perfect timing', 'Practice regular dhikr', 'Seek support from fellow Muslims', 'Remember that Allah tests whom He loves'],
        videoTitle: 'Overcoming Anxiety Through Faith',
        videoDescription: 'Islamic guidance for dealing with anxiety and worry.',
        videoUrl: 'https://www.youtube.com/embed/Zy006WE5oiQ'
    },

    happy: {
        title: 'Happy',
        subtitle: 'Expressing gratitude for Allah\'s blessings',
        icon: 'fas fa-smile',
        arabic: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        translation: 'If you are grateful, I will certainly give you more',
        reference: 'Quran 14:7',
        hadith: 'He who does not thank people, does not thank Allah.',
        hadithSource: 'Prophet Muhammad (PBUH), Abu Dawud',
        duaArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        duaTranslation: 'All praise is due to Allah, Lord of the worlds',
        duaBenefit: 'Express gratitude and maintain humility in happiness.',
        advice: ['Share your joy with others', 'Remember to thank Allah', 'Use happiness to spread positivity', 'Help those less fortunate'],
        videoTitle: 'Gratitude and Happiness in Islam',
        videoDescription: 'How to maintain Islamic perspective during happy times.',
        videoUrl: 'https://www.youtube.com/embed/x5SH22rCjZQ'
    },

    sad: {
        title: 'Sad',
        subtitle: 'Finding hope through Allah\'s mercy',
        icon: 'fas fa-sad-tear',
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'Indeed, with hardship comes ease',
        reference: 'Quran 94:6',
        hadith: 'Amazing is the affair of the believer, verily all of his affair is good.',
        hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
        duaArabic: 'لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        duaTranslation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers',
        duaBenefit: 'The dua of Prophet Yunus (AS) for relief from distress.',
        advice: ['Remember that sadness is temporary', 'Turn to Allah in prayer', 'Seek comfort in Quran recitation', 'Connect with supportive friends'],
        videoTitle: 'Finding Hope in Difficult Times',
        videoDescription: 'Islamic guidance for overcoming sadness and depression.',
        videoUrl: 'https://www.youtube.com/embed/APj0fOzNxFU'
    },

    grateful: {
        title: 'Grateful',
        subtitle: 'Appreciating Allah\'s countless blessings',
        icon: 'fas fa-hands-praying',
        arabic: 'وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
        translation: 'And be grateful to Me and do not deny Me',
        reference: 'Quran 2:152',
        hadith: 'Whoever wakes up secure in his property, healthy in his body, having his food for the day, it is as if the whole world has been given to him.',
        hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
        duaArabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        duaTranslation: 'O Allah, help me remember You, thank You, and worship You excellently',
        duaBenefit: 'This dua helps maintain constant gratitude and remembrance.',
        advice: ['Count your daily blessings', 'Help those in need', 'Share your gratitude with others', 'Use blessings responsibly'],
        videoTitle: 'The Power of Gratitude in Islam',
        videoDescription: 'Understanding the importance of being thankful to Allah.',
        videoUrl: 'https://www.youtube.com/embed/Nnd_IM65Ies'
    },

    confident: {
        title: 'Confident',
        subtitle: 'Building inner strength through faith',
        icon: 'fas fa-crown',
        arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        translation: 'And whoever relies upon Allah - then He is sufficient for him',
        reference: 'Quran 65:3',
        hadith: 'The believer is not one who eats his fill while his neighbor goes hungry.',
        hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
        duaArabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
        duaTranslation: 'My Lord, expand for me my breast and ease for me my task',
        duaBenefit: 'Recite this dua to gain confidence and ease in difficult situations.',
        advice: ['Trust in Allah\'s plan and timing', 'Remember your past successes', 'Seek guidance through prayer', 'Surround yourself with positive believers'],
        videoTitle: 'Building Confidence Through Faith',
        videoDescription: 'Learn how Islamic teachings can help build unshakeable confidence.',
        videoUrl: 'https://www.youtube.com/embed/r0ovqckrf2Q'
    },

   bored: {
        title: 'Bored',
        subtitle: 'Finding purpose and meaning in everyday life',
        icon: 'fas fa-clock',
        arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
        translation: 'And I did not create the jinn and mankind except to worship Me',
        reference: 'Quran 51:56',
        hadith: 'Make use of five before five: your youth before your old age, your health before your sickness, your riches before your poverty, your free time before your work, and your life before your death.',
        hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
        duaArabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا أَعْطَيْتَنَا',
        duaTranslation: 'O Allah, bless us in what You have given us',
        duaBenefit: 'Ask Allah to bless your time and make it productive.',
        advice: ['Use free time for worship and learning', 'Help others in your community', 'Read and reflect on Quran', 'Engage in beneficial activities'],
        videoTitle: 'Making Every Moment Count in Islam',
        videoDescription: 'How to use free time productively according to Islam.',
        videoUrl: 'https://www.youtube.com/embed/5WAGK8kH3-U?feature=share'
    },
// Add these moods to your moodDataTemplate object:

confused: {
    title: 'Confused',
    subtitle: 'Seeking clarity through Islamic guidance and prayer',
    icon: 'fas fa-question-circle',
    arabic: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ',
    translation: 'And when My servants ask you about Me - indeed I am near',
    reference: 'Quran 2:186',
    hadith: 'If you are in doubt about something, then leave it for that about which you have no doubt.',
    hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
    duaArabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ',
    duaTranslation: 'O Allah, guide me among those You have guided',
    duaBenefit: 'Seek divine guidance when facing confusion and uncertainty.',
    advice: ['Make istikharah prayer for guidance', 'Consult knowledgeable Muslims', 'Read Quran for clarity', 'Trust in Allah\'s wisdom'],
    videoTitle: 'Finding Clarity Through Islamic Guidance',
    videoDescription: 'How to overcome confusion using Islamic principles and prayer.',
    videoUrl: 'https://www.youtube.com/embed/OxsBQDHkMcI'
},

content: {
    title: 'Content',
    subtitle: 'Finding satisfaction and peace in Allah\'s provisions',
    icon: 'fas fa-smile-beam',
    arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
    translation: 'And whoever fears Allah - He will make for him a way out and will provide for him from where he does not expect',
    reference: 'Quran 65:2-3',
    hadith: 'Riches are not from abundance of worldly goods, but from a contented mind.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ أَغْنِنِي بِحَلَالِكَ عَنْ حَرَامِكَ',
    duaTranslation: 'O Allah, make me content with what You have made lawful and keep me away from what You have forbidden',
    duaBenefit: 'This dua helps maintain contentment with Allah\'s provisions.',
    advice: ['Practice gratitude daily', 'Avoid comparing with others', 'Focus on spiritual wealth', 'Share your contentment with others'],
    videoTitle: 'The Islamic Path to True Contentment',
    videoDescription: 'Understanding how Islam teaches us to find peace and satisfaction.',
    videoUrl: 'https://www.youtube.com/embed/t0u1fYhYDyU'
},

depressed: {
    title: 'Depressed',
    subtitle: 'Finding hope and healing through faith and community',
    icon: 'fas fa-cloud-rain',
    arabic: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ',
    translation: 'And do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people',
    reference: 'Quran 12:87',
    hadith: 'No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim, not even a prick of a thorn, but that Allah expiates some of his sins for that.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحُزْنِ وَالْعَجْزِ وَالْكَسَلِ',
    duaTranslation: 'O Allah, I seek refuge in You from anxiety, sorrow, weakness and laziness',
    duaBenefit: 'This comprehensive dua provides relief from various forms of distress.',
    advice: ['Seek professional help when needed', 'Maintain regular prayers', 'Connect with supportive community', 'Remember Allah\'s mercy is infinite'],
    videoTitle: 'Overcoming Depression with Islamic Support',
    videoDescription: 'Islamic guidance for dealing with depression and finding hope.',
    videoUrl: 'https://www.youtube.com/embed/p2weSp-v1kY'
},

doubtful: {
    title: 'Doubtful',
    subtitle: 'Strengthening faith through knowledge and reflection',
    icon: 'fas fa-balance-scale',
    arabic: 'وَإِن كُنتُمْ فِي رَيْبٍ مِّمَّا نَزَّلْنَا عَلَىٰ عَبْدِنَا فَأْتُوا بِسُورَةٍ مِّن مِّثْلِهِ',
    translation: 'And if you are in doubt about what We have sent down upon Our Servant, then produce a chapter like it',
    reference: 'Quran 2:23',
    hadith: 'Doubt is half of wisdom.',
    hadithSource: 'Islamic wisdom saying',
    duaArabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    duaTranslation: 'My Lord, expand for me my breast and ease for me my task and untie the knot from my tongue that they may understand my speech',
    duaBenefit: 'The dua of Prophet Musa (AS) for clarity and understanding.',
    advice: ['Seek knowledge to dispel doubts', 'Consult scholars and learned people', 'Make dua for clarity', 'Study Quran with understanding'],
    videoTitle: 'Dealing with Doubts in Faith',
    videoDescription: 'How to address religious doubts through Islamic scholarship.',
    videoUrl: 'https://www.youtube.com/embed/QWgpAlFnb5s?feature=share'
},

excited: {
    title: 'Excited',
    subtitle: 'Channeling enthusiasm into positive Islamic action',
    icon: 'fas fa-star',
    arabic: 'وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ',
    translation: 'And hasten to forgiveness from your Lord',
    reference: 'Quran 3:133',
    hadith: 'The one who guides to something good has a reward similar to that of its doer.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
    duaArabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا أَعْطَيْتَنَا وَقِنَا عَذَابَ النَّارِ',
    duaTranslation: 'O Allah, bless us in what You have given us and protect us from the punishment of the Fire',
    duaBenefit: 'Use this dua to seek Allah\'s blessing in your exciting endeavors.',
    advice: ['Channel excitement into worship', 'Share good news with others', 'Use energy for beneficial activities', 'Remember to stay humble'],
    videoTitle: 'Using Positive Energy for Islamic Good',
    videoDescription: 'How to direct excitement and enthusiasm towards beneficial Islamic actions.',
    videoUrl: 'https://www.youtube.com/embed/6vNifPyqlL0'
},

frustrated: {
    title: 'Frustrated',
    subtitle: 'Finding patience and perseverance through Islamic teachings',
    icon: 'fas fa-tired',
    arabic: 'وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
    translation: 'And give good tidings to the patient, Who, when disaster strikes them, say, "Indeed we belong to Allah, and indeed to Him we will return"',
    reference: 'Quran 2:155-156',
    hadith: 'How wonderful is the affair of the believer, for his affairs are all good.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
    duaArabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي وَدُنْيَايَ وَآخِرَتِي',
    duaTranslation: 'O Allah, set right for me my religion, my worldly affairs, and my hereafter',
    duaBenefit: 'Seek Allah\'s help in managing all aspects of life when frustrated.',
    advice: ['Practice deep breathing and dhikr', 'Take breaks for prayer', 'Seek Allah\'s guidance', 'Remember the reward of patience'],
    videoTitle: 'Islamic Ways to Handle Frustration',
    videoDescription: 'Managing frustration and anger through Islamic patience and wisdom.',
    videoUrl: 'https://www.youtube.com/embed/sVfG1SazPs8'
},

greedy: {
    title: 'Greedy',
    subtitle: 'Learning contentment and the dangers of excessive desire',
    icon: 'fas fa-coins',
    arabic: 'وَمَا أُوتِيتُم مِّن شَيْءٍ فَمَتَاعُ الْحَيَاةِ الدُّنْيَا وَزِينَتُهَا',
    translation: 'And whatever you have been given is but [for] enjoyment of worldly life and its adornment',
    reference: 'Quran 28:60',
    hadith: 'If the son of Adam had a valley full of gold, he would want to have two valleys.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
    duaTranslation: 'O Allah, suffice me with Your lawful against Your prohibited, and make me independent of all others besides You',
    duaBenefit: 'This dua helps overcome greed and find satisfaction in halal provisions.',
    advice: ['Practice regular charity (zakat/sadaqah)', 'Reflect on temporary nature of wealth', 'Focus on spiritual riches', 'Help those in need'],
    videoTitle: 'Islam\'s Teachings on Wealth and Greed',
    videoDescription: 'Understanding Islamic perspective on money, wealth and contentment.',
    videoUrl: 'https://www.youtube.com/embed/cCMTBa3nIK8'
},

guilty: {
    title: 'Guilty',
    subtitle: 'Seeking forgiveness and making sincere repentance',
    icon: 'fas fa-praying-hands',
    arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ',
    translation: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah"',
    reference: 'Quran 39:53',
    hadith: 'All the sons of Adam are sinners, but the best of sinners are those who repent.',
    hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
    duaArabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    duaTranslation: 'I seek forgiveness from Allah the Almighty, whom there is no god but He, the Living, the Eternal, and I repent to Him',
    duaBenefit: 'The master formula for seeking Allah\'s forgiveness and mercy.',
    advice: ['Make sincere tawbah (repentance)', 'Perform good deeds to erase bad ones', 'Seek forgiveness from those you\'ve wronged', 'Trust in Allah\'s infinite mercy'],
    videoTitle: 'The Power of Repentance in Islam',
    videoDescription: 'How to seek forgiveness and overcome feelings of guilt through Islamic teachings.',
    videoUrl: 'https://www.youtube.com/embed/wnhuulfcDUg'
},

hopeful: {
    title: 'Hopeful',
    subtitle: 'Maintaining optimism through trust in Allah\'s plan',
    icon: 'fas fa-seedling',
    arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ',
    translation: 'And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose',
    reference: 'Quran 65:3',
    hadith: 'Be mindful of Allah and Allah will protect you. Be mindful of Allah and you will find Him in front of you.',
    hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
    duaArabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    duaTranslation: 'Sufficient for us is Allah, and [He is] the best Disposer of affairs',
    duaBenefit: 'This dua strengthens hope and trust in Allah during challenging times.',
    advice: ['Keep making dua with certainty', 'Work hard while trusting Allah', 'Share hope with others', 'Remember Allah never breaks His promises'],
    videoTitle: 'Maintaining Hope Through Faith',
    videoDescription: 'Islamic teachings on keeping hope alive even in difficult circumstances.',
    videoUrl: 'https://www.youtube.com/embed/yL9McAshD7g'
},

hurt: {
    title: 'Hurt',
    subtitle: 'Healing emotional wounds through Islamic wisdom and forgiveness',
    icon: 'fas fa-heart-broken',
    arabic: 'وَإِن تَعْفُوا وَتَصْفَحُوا وَتَغْفِرُوا فَإِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ',
    translation: 'But if you pardon and overlook and forgive - then indeed, Allah is Forgiving and Merciful',
    reference: 'Quran 64:14',
    hadith: 'Be merciful to others and you will receive mercy. Forgive others and Allah will forgive you.',
    hadithSource: 'Prophet Muhammad (PBUH), Ahmad',
    duaArabic: 'اللَّهُمَّ أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنتَ الشَّافِي',
    duaTranslation: 'O Allah, remove the hardship, O Lord of mankind, and heal, for You are the Healer',
    duaBenefit: 'Seek Allah\'s healing for both physical and emotional pain.',
    advice: ['Practice forgiveness for your own peace', 'Seek support from trusted friends', 'Channel pain into helping others', 'Remember that Allah heals all wounds'],
    videoTitle: 'Healing from Emotional Pain in Islam',
    videoDescription: 'Islamic guidance for overcoming hurt and finding emotional healing.',
    videoUrl: 'https://www.youtube.com/embed/Bolw2Z3I6wM?feature=share'
},

hypocritical: {
    title: 'Hypocritical',
    subtitle: 'Recognizing and correcting contradictions in behavior',
    icon: 'fas fa-masks-theater',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ',
    translation: 'O you who believe! Why do you say that which you do not do?',
    reference: 'Quran 61:2',
    hadith: 'The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks his promise, and when he is entrusted he betrays.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ أَلْهِمْنِي رُشْدِي وَأَعِذْنِي مِن شَرِّ نَفْسِي',
    duaTranslation: 'O Allah, inspire me with guidance and protect me from the evil of my soul',
    duaBenefit: 'Seek Allah\'s help to align your actions with your beliefs.',
    advice: ['Regularly examine your intentions', 'Strive to practice what you preach', 'Be honest about your shortcomings', 'Ask Allah to purify your heart'],
    videoTitle: 'Avoiding Hypocrisy in Islamic Life',
    videoDescription: 'Understanding and overcoming hypocritical behavior through self-reflection.',
    videoUrl: 'https://www.youtube.com/embed/m9xcwWBwXkc'
},

indecisive: {
    title: 'Indecisive',
    subtitle: 'Making decisions through Islamic consultation and prayer',
    icon: 'fas fa-directions',
    arabic: 'وَالَّذِينَ اسْتَجَابُوا لِرَبِّهِمْ وَأَقَامُوا الصَّلَاةَ وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',
    translation: 'And those who have responded to their lord and established prayer and whose affair is [determined by] consultation among themselves',
    reference: 'Quran 42:38',
    hadith: 'He who consults others will not regret and he who is satisfied with his own opinion will regret.',
    hadithSource: 'Prophet Muhammad (PBUH), Tabarani',
    duaArabic: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ',
    duaTranslation: 'O Allah, I seek guidance from Your knowledge, and power from Your might',
    duaBenefit: 'This is the opening of Istikhara prayer for guidance in decision making.',
    advice: ['Pray Salat al-Istikhara for guidance', 'Consult knowledgeable people', 'Research thoroughly before deciding', 'Trust Allah\'s decree after making effort'],
    videoTitle: 'Islamic Decision Making: Consultation and Prayer',
    videoDescription: 'How to make important life decisions using Islamic principles.',
    videoUrl: 'https://www.youtube.com/embed/oSSzv-rTJGo'
},

joyful: {
    title: 'Joyful',
    subtitle: 'Celebrating life\'s blessings with gratitude and moderation',
    icon: 'fas fa-laugh-beam',
    arabic: 'قُلْ بِفَضْلِ اللَّهِ وَبِرَحْمَتِهِ فَبِذَٰلِكَ فَلْيَفْرَحُوا هُوَ خَيْرٌ مِّمَّا يَجْمَعُونَ',
    translation: 'Say, "In the bounty of Allah and in His mercy - in that let them rejoice; it is better than what they accumulate"',
    reference: 'Quran 10:58',
    hadith: 'Allah loves, when His servant is happy, to see the trace of His blessings on him.',
    hadithSource: 'Islamic wisdom',
    duaArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    duaTranslation: 'All praise is due to Allah, Lord of all the worlds',
    duaBenefit: 'Express gratitude to Allah during moments of joy and happiness.',
    advice: ['Share your joy with others', 'Remember the source of all blessings', 'Use happiness to worship Allah better', 'Stay humble in times of joy'],
    videoTitle: 'Expressing Joy the Islamic Way',
    videoDescription: 'How to celebrate life\'s happy moments while maintaining Islamic values.',
    videoUrl: 'https://www.youtube.com/embed/x5SH22rCjZQ'
},

lazy: {
    title: 'Lazy',
    subtitle: 'Finding motivation through Islamic purpose and discipline',
    icon: 'fas fa-bed',
    arabic: 'وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ',
    translation: 'And that there is nothing for man except what he strives for',
    reference: 'Quran 53:39',
    hadith: 'No one eats better food than that which he eats out of the work of his hand.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ',
    duaTranslation: 'O Allah, I seek refuge in You from helplessness and laziness',
    duaBenefit: 'This dua helps overcome laziness and builds motivation for action.',
    advice: ['Start with small, achievable goals', 'Remember your purpose in life', 'Seek Allah\'s help to be productive', 'Focus on worship to build discipline'],
    videoTitle: 'Overcoming Laziness Through Islamic Motivation',
    videoDescription: 'Islamic teachings on productivity, hard work, and purposeful living.',
    videoUrl: 'https://www.youtube.com/embed/avZ3Q6VCU-E'
},

lonely: {
    title: 'Lonely',
    subtitle: 'Finding companionship in Allah and the Muslim community',
    icon: 'fas fa-user-times',
    arabic: 'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ',
    translation: 'And He is with you wherever you are',
    reference: 'Quran 57:4',
    hadith: 'The believer who mixes with people and bears their annoyance with patience will have a greater reward than the believer who does not mix with people.',
    hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
    duaArabic: 'اللَّهُمَّ آنِسْ وَحْشَتِي وَأَصْلِحْ وَحْدَتِي',
    duaTranslation: 'O Allah, comfort my loneliness and rectify my solitude',
    duaBenefit: 'Seek Allah\'s companionship when feeling isolated and alone.',
    advice: ['Connect with your local mosque community', 'Remember Allah is always with you', 'Reach out to fellow Muslims', 'Use solitude for spiritual growth'],
    videoTitle: 'Finding Connection in Islam',
    videoDescription: 'Overcoming loneliness through Islamic community and spiritual connection.',
    videoUrl: 'https://www.youtube.com/embed/EpE7jr5AnnE'
},

loved: {
    title: 'Loved',
    subtitle: 'Appreciating love as a gift from Allah and sharing it with others',
    icon: 'fas fa-heart',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
    translation: 'And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy',
    reference: 'Quran 30:21',
    hadith: 'When Allah loves a servant, He calls Gabriel and says: I love so-and-so, therefore love him.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
    duaTranslation: 'Our Lord, grant us from among our wives and offspring comfort to our eyes',
    duaBenefit: 'Thank Allah for the blessing of love and family in your life.',
    advice: ['Express gratitude for those who love you', 'Show love through actions, not just words', 'Pray for those who care about you', 'Use love to strengthen your faith'],
    videoTitle: 'Love and Relationships in Islam',
    videoDescription: 'Understanding the Islamic perspective on love, family, and relationships.',
    videoUrl: 'https://www.youtube.com/embed/SZhJKNIf9lo'
},

nostalgic: {
    title: 'Nostalgic',
    subtitle: 'Reflecting on the past while focusing on spiritual growth',
    icon: 'fas fa-history',
    arabic: 'وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنفَعُ الْمُؤْمِنِينَ',
    translation: 'And remind, for indeed, the reminder benefits the believers',
    reference: 'Quran 51:55',
    hadith: 'Remember often the destroyer of pleasures: death.',
    hadithSource: 'Prophet Muhammad (PBUH), Tirmidhi',
    duaArabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي وَدُنْيَايَ وَآخِرَتِي',
    duaTranslation: 'O Allah, rectify for me my religion, my worldly life, and my hereafter',
    duaBenefit: 'Balance reflection on the past with preparation for the future.',
    advice: ['Learn from past experiences', 'Focus on present opportunities', 'Use memories to increase gratitude', 'Prepare for the eternal life ahead'],
    videoTitle: 'Balancing Past and Present in Islam',
    videoDescription: 'How to deal with nostalgia while staying focused on spiritual progress.',
    videoUrl: 'https://www.youtube.com/embed/2EMjujJz4vs'
},

optimistic: {
    title: 'Optimistic',
    subtitle: 'Maintaining positive outlook through trust in Allah\'s wisdom',
    icon: 'fas fa-sun',
    arabic: 'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ',
    translation: 'But perhaps you hate a thing and it is good for you',
    reference: 'Quran 2:216',
    hadith: 'How wonderful is the affair of the believer, for his affairs are all good, and this is not the case for anyone except the believer.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
    duaArabic: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا',
    duaTranslation: 'O Allah, nothing is easy except what You have made easy',
    duaBenefit: 'Trust that Allah makes difficulties easy and maintains optimism.',
    advice: ['Always expect good from Allah', 'Share positivity with others', 'Use optimism to motivate good deeds', 'Balance optimism with realism'],
    videoTitle: 'Islamic Optimism and Positive Thinking',
    videoDescription: 'How Islam encourages positive outlook while dealing with life\'s challenges.',
    videoUrl: 'https://www.youtube.com/embed/IrJ2vxJhyNg?feature=share'
},

overwhelmed: {
    title: 'Overwhelmed',
    subtitle: 'Finding peace and organization through Islamic principles',
    icon: 'fas fa-dizzy',
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease',
    reference: 'Quran 94:5-6',
    hadith: 'Take on only as much as you can do of good deeds, for the best of deeds is that which is done consistently, even if it is little.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
    duaArabic: 'اللَّهُمَّ لَا تُكَلِّفْنِي فَوْقَ طَاقَتِي',
    duaTranslation: 'O Allah, do not burden me beyond my capacity',
    duaBenefit: 'Seek Allah\'s help when feeling overwhelmed by life\'s responsibilities.',
    advice: ['Break tasks into smaller parts', 'Prioritize according to Islamic values', 'Take regular breaks for prayer', 'Seek help from others when needed'],
    videoTitle: 'Managing Overwhelming Situations in Islam',
    videoDescription: 'Islamic strategies for dealing with stress and overwhelming circumstances.',
    videoUrl: 'https://www.youtube.com/embed/OVERWHELMED_VIDEO_ID'
},

peaceful: {
    title: 'Peaceful',
    subtitle: 'Maintaining inner tranquility through remembrance of Allah',
    icon: 'fas fa-dove',
    arabic: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    translation: 'Those who believe and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured',
    reference: 'Quran 13:28',
    hadith: 'The world is green and beautiful, and Allah has appointed you as His stewards over it.',
    hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
    duaArabic: 'اللَّهُمَّ أَنتَ السَّلَامُ وَمِنكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    duaTranslation: 'O Allah, You are Peace and from You comes peace, blessed are You, O Possessor of majesty and honor',
    duaBenefit: 'This dua helps maintain and deepen feelings of inner peace.',
    advice: ['Regular dhikr and remembrance of Allah', 'Share your peace with others', 'Use peaceful moments for worship', 'Help create peace in your community'],
    videoTitle: 'Achieving True Peace Through Islam',
    videoDescription: 'Understanding and maintaining inner peace through Islamic teachings and practices.',
    videoUrl: 'https://www.youtube.com/embed/QwHjbVWEvrY'
},

// Add these 22 moods to your existing moodDataTemplate object:

proud: {
    title: 'Proud',
    subtitle: 'Building confidence with humility in Islam',
    icon: 'fas fa-trophy',
    arabic: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُم مُؤْمِنِينَ',
    translation: 'So do not weaken and do not grieve, and you will be superior if you are [true] believers',
    reference: 'Quran 3:139',
    hadith: 'He who humbles himself for the sake of Allah, Allah raises him in status.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'رَبِّ زِدْنِي عِلْمًا',
    duaTranslation: 'My Lord, increase me in knowledge.',
    duaBenefit: 'Pray for continuous growth in humility and knowledge.',
    advice: ['Stay humble despite your achievements', 'Keep worship sincere', 'Avoid arrogance as it leads to downfall', 'Recognize Allah\'s blessings'],
    videoTitle: 'The Balance Between Pride and Humility in Islam',
    videoDescription: 'Understanding how Islam views pride and humility.',
    videoUrl: 'https://www.youtube.com/embed/za2YjQ18Gyk?feature=share'
},

regretful: {
    title: 'Regretful',
    subtitle: 'Seeking forgiveness and learning from mistakes',
    icon: 'fas fa-heart-broken',
    arabic: 'وَالَّذِينَ إِذَا فَعَلُوا فَاحِشَةً أَوْ ظَلَمُوا أَنفُسَهُمْ ذَكَرُوا اللَّهَ فَاسْتَغْفَرُوا لِذُنُوبِهِمْ',
    translation: 'And those who, when they commit an immorality or wrong themselves, remember Allah and seek forgiveness for their sins',
    reference: 'Quran 3:135',
    hadith: 'The one who repents from sin is like one who did not sin.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'أَسْتَغْفِرُ اللَّهَ',
    duaTranslation: 'I seek forgiveness from Allah.',
    duaBenefit: 'Regularly seek forgiveness to purify your heart.',
    advice: ['Reflect sincerely on your actions', 'Make sincere repentance (tawbah)', 'Do good deeds to erase past sins', 'Keep hope in Allah\'s mercy'],
    videoTitle: 'Repentance and Mercy in Islam',
    videoDescription: 'How to seek forgiveness and transform through Islam.',
    videoUrl: 'https://www.youtube.com/embed/wVDaRdkModI'
},

relaxed: {
    title: 'Relaxed',
    subtitle: 'Finding peace through trust and remembrance of Allah',
    icon: 'fas fa-spa',
    arabic: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ',
    translation: 'Those who have believed and whose hearts are assured by the remembrance of Allah',
    reference: 'Quran 13:28',
    hadith: 'Verily, in the remembrance of Allah do hearts find rest.',
    hadithSource: 'Quran 13:28',
    duaArabic: 'اللهم إني أسألك الرضا والسكينة',
    duaTranslation: 'O Allah, I ask You for satisfaction and tranquility.',
    duaBenefit: 'Recite this dua for calming and relaxing your heart.',
    advice: ['Practice regular dhikr', 'Take time for nature and reflection', 'Maintain consistent prayers', 'Avoid stress with tawakkul (trust)'],
    videoTitle: 'Relaxation and Peace Through Islam',
    videoDescription: 'Discover Islamic methods to relax and find peace.',
    videoUrl: 'https://www.youtube.com/embed/hjKpDvAKdaw?feature=share'
},

scared: {
    title: 'Scared',
    subtitle: 'Seeking protection and courage from Allah',
    icon: 'fas fa-shield-alt',
    arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
    translation: 'Sufficient for us is Allah, and [He is] the best Disposer of affairs',
    reference: 'Quran 3:173',
    hadith: 'Fear Allah wherever you are and follow up a bad deed with a good deed and it will erase it.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ شَرِّ مَا خَلَقَ',
    duaTranslation: 'I seek refuge in the perfect words of Allah from the evil of what He created.',
    duaBenefit: 'Use this dua to seek protection from fear and harm.',
    advice: ['Remember Allah\'s power and mercy', 'Perform regular protective prayers', 'Seek solace in Quran recitation', 'Avoid unnecessary fear'],
    videoTitle: 'Overcoming Fear Through Faith',
    videoDescription: 'Islamic guidance to conquer fear and anxiety.',
    videoUrl: 'https://www.youtube.com/embed/42qLuXilER8'
},

stressed: {
    title: 'Stressed',
    subtitle: 'Finding ease and patience through Islamic teachings',
    icon: 'fas fa-heartbeat',
    arabic: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease',
    reference: 'Quran 94:6',
    hadith: 'No fatigue, nor disease, nor sorrow nor sadness affects a Muslim except that it expiates his sins.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ أَلْهِمْنِي الصَّبْرَ وَالْحِكْمَةَ',
    duaTranslation: 'O Allah, inspire me with patience and wisdom.',
    duaBenefit: 'This dua helps strengthen patience under stress.',
    advice: ['Practice regular prayers', 'Make dhikr to calm the heart', 'Divide tasks into manageable steps', 'Trust in Allah\'s plan'],
    videoTitle: 'Managing Stress with Islamic Teachings',
    videoDescription: 'Learn how Islam encourages patience and reliance on Allah.',
    videoUrl: 'https://www.youtube.com/embed/ZqU5h6EQ790'
},

surprised: {
    title: 'Surprised',
    subtitle: 'Embracing the unexpected with gratitude',
    icon: 'fas fa-exclamation-circle',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    translation: 'Glory be to Allah and praise Him',
    reference: 'Sahih Bukhari',
    hadith: 'Whoever says "Subhan Allah wa bihamdihi" one hundred times during the day, his sins are wiped away, even if they are like the foam of the sea.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'سُبْحَانَ اللَّهِ',
    duaTranslation: 'Glory be to Allah.',
    duaBenefit: 'Use this to express awe and submission to Allah\'s will.',
    advice: ['Practice patience and gratitude', 'Seek knowledge to understand events', 'Avoid impulsive reactions', 'Reflect on Allah\'s wisdom'],
    videoTitle: 'Accepting the Unexpected in Islam',
    videoDescription: 'Learn to be calm and thankful when surprised by events.',
    videoUrl: 'https://www.youtube.com/embed/8SM8b3tQZf4'
},

thankful: {
    title: 'Thankful',
    subtitle: 'Expressing gratitude for Allah\'s blessings',
    icon: 'fas fa-praying-hands',
    arabic: 'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
    translation: 'If you are grateful, I will surely increase you [in favor]',
    reference: 'Quran 14:7',
    hadith: 'Whoever is not grateful to people, he is not grateful to Allah.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'الْحَمْدُ لِلَّهِ',
    duaTranslation: 'Praise be to Allah.',
    duaBenefit: 'Regular gratitude increases blessings.',
    advice: ['Count your blessings daily', 'Thank Allah in prayers', 'Share your blessings', 'Help others generously'],
    videoTitle: 'The Power of Gratitude in Islam',
    videoDescription: 'Discover the importance of being thankful.',
    videoUrl: 'https://www.youtube.com/embed/ALiIb3B5jqU'
},

tired: {
    title: 'Tired',
    subtitle: 'Seeking energy and strength from Allah',
    icon: 'fas fa-bed',
    arabic: 'وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا',
    translation: 'And made your sleep [a means for] rest',
    reference: 'Quran 78:9',
    hadith: 'The strong believer is better and more beloved to Allah than the weak believer.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ',
    duaTranslation: 'O Allah, I seek refuge in You from helplessness and laziness.',
    duaBenefit: 'Dua to regain strength and reduce fatigue.',
    advice: ['Ensure adequate rest', 'Make dua for energy', 'Avoid excessive lethargy', 'Keep regular prayers'],
    videoTitle: 'Finding Strength and Energy in Islam',
    videoDescription: 'How to regain energy through faith and practice.',
    videoUrl: 'https://www.youtube.com/embed/ifz4ni6Os0E'
},

uncertain: {
    title: 'Uncertain',
    subtitle: 'Finding clarity and certainty through trust in Allah',
    icon: 'fas fa-question',
    arabic: 'فَاصْبِرْ صَبْرًا جَمِيلًا',
    translation: 'So be patient with gracious patience.',
    reference: 'Quran 70:5',
    hadith: 'The best of affairs is that which is moderate.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ',
    duaTranslation: 'O Allah, I ask You for steadfastness.',
    duaBenefit: 'Dua for patience and determination.',
    advice: ['Make istikhara prayer', 'Seek advice from trusted people', 'Reflect on Quranic teachings', 'Trust Allah\'s wisdom'],
    videoTitle: 'Finding Certainty in Islam',
    videoDescription: 'Ways to gain certainty through faith and knowledge.',
    videoUrl: 'https://www.youtube.com/embed/D52X4Ak7Z0M'
},

worried: {
    title: 'Worried',
    subtitle: 'Relieving anxiety and seeking comfort from Allah',
    icon: 'fas fa-heartbeat',
    arabic: 'الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ',
    translation: 'Those who believe and whose hearts are assured by the remembrance of Allah',
    reference: 'Quran 13:28',
    hadith: 'Remember Allah often and you will find peace.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ أَذْهِبْ هَمِّي',
    duaTranslation: 'O Allah, remove my anxiety.',
    duaBenefit: 'Dua for removing worries and anxiety.',
    advice: ['Make dhikr regularly', 'Share worries with trusted friends', 'Pray for ease', 'Remember Allah\'s mercy'],
    videoTitle: 'Relieving Worry with Faith',
    videoDescription: 'Islamic methods to ease anxiety and stress.',
    videoUrl: 'https://www.youtube.com/embed/XnxNV2SNzbQ'
},

motivated: {
    title: 'Motivated',
    subtitle: 'Harnessing energy and purpose through Islamic teachings',
    icon: 'fas fa-bolt',
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease',
    reference: 'Quran 94:6',
    hadith: 'The strong believer is better than the weak one.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ اجْعَلْنِي مِنَ الْمُتَوَكِّلِينَ',
    duaTranslation: 'O Allah, make me among those who rely on You.',
    duaBenefit: 'Dua for relying on Allah and staying motivated.',
    advice: ['Set clear goals', 'Make sincere dua', 'Stay connected to community', 'Practice gratitude'],
    videoTitle: 'Staying Motivated with Islamic Faith',
    videoDescription: 'Learn to maintain motivation with reliance on Allah.',
    videoUrl: 'https://www.youtube.com/embed/WwGXivS_4JY'
},

inspired: {
    title: 'Inspired',
    subtitle: 'Drawing inspiration from the Quran and Sunnah',
    icon: 'fas fa-lightbulb',
    arabic: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    translation: 'And say, "My Lord, increase me in knowledge."',
    reference: 'Quran 20:114',
    hadith: 'Seeking knowledge is an obligation upon every Muslim.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ اجْعَلْنِي مِنَ الْعَالِمِينَ',
    duaTranslation: 'O Allah, make me among the knowledgeable.',
    duaBenefit: 'Pray for knowledge and inspiration in life.',
    advice: ['Read Quran and Hadith regularly', 'Surround yourself with scholars', 'Act on knowledge gained', 'Share knowledge with others'],
    videoTitle: 'Inspiration Through Islamic Knowledge',
    videoDescription: 'How to stay inspired by Islamic teachings.',
    videoUrl: 'https://www.youtube.com/embed/INSPIRED_VIDEO_ID'
},

embarrassed: {
    title: 'Embarrassed',
    subtitle: 'Overcoming shame with repentance and trust',
    icon: 'fas fa-face-flushed',
    arabic: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ',
    translation: 'And do not despair of the mercy of Allah',
    reference: 'Quran 39:53',
    hadith: 'The best of sinners are those who repent.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي',
    duaTranslation: 'My Lord, forgive me and have mercy on me.',
    duaBenefit: 'Dua for seeking forgiveness and feeling comforted.',
    advice: ['Make sincere tawbah', 'Remember Allah\'s mercy is vast', 'Avoid situations causing shame', 'Seek support from trusted people'],
    videoTitle: 'Overcoming Embarrassment in Islam',
    videoDescription: 'Learn how to deal with feelings of shame in light of Islamic teachings.',
    videoUrl: 'https://www.youtube.com/embed/WtoHUGJbvlY?feature=share'
},

disappointed: {
    title: 'Disappointed',
    subtitle: 'Finding hope and acceptance in life\'s trials',
    icon: 'fas fa-frown',
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'Indeed, with hardship comes ease',
    reference: 'Quran 94:6',
    hadith: 'The believer\'s calamities remove his sins.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً',
    duaTranslation: 'Our Lord, give us good in this world.',
    duaBenefit: 'Plea for goodness and relief during disappointment.',
    advice: ['Remember Allah\'s mercy', 'Make dua for relief', 'Maintain patience during trials', 'Seek support from community'],
    videoTitle: 'Coping with Disappointment in Islam',
    videoDescription: 'Islamic perspectives on handling disappointment.',
    videoUrl: 'https://www.youtube.com/embed/YAKZ2jhG7T8'
},

curious: {
    title: 'Curious',
    subtitle: 'Desiring knowledge and understanding in Islam',
    icon: 'fas fa-search',
    arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ',
    translation: 'Read in the name of your Lord',
    reference: 'Quran 96:1',
    hadith: 'Seeking knowledge is a duty upon every Muslim.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي',
    duaTranslation: 'O Allah, benefit me with what You have taught me.',
    duaBenefit: 'Supplication for benefiting from knowledge.',
    advice: ['Ask questions respectfully', 'Study Quran and Hadith', 'Learn from scholars', 'Apply knowledge in daily life'],
    videoTitle: 'Cultivating Curiosity in Islam',
    videoDescription: 'Encouragement to seek knowledge and understanding in Islam.',
    videoUrl: 'https://www.youtube.com/embed/8mUIS2vyT-Q'
},

creative: {
    title: 'Creative',
    subtitle: 'Using talents to serve Allah and humanity',
    icon: 'fas fa-paint-brush',
    arabic: 'وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ',
    translation: 'And it is He who created the heavens and earth in truth',
    reference: 'Quran 6:73',
    hadith: 'Allah loves when His servant makes use of his talents.',
    hadithSource: 'Islamic wisdom',
    duaArabic: 'رَبِّ اجْعَلْنِي مُبْتَكِرًا',
    duaTranslation: 'My Lord, make me innovative.',
    duaBenefit: 'Pray for inspiration and ability to create good.',
    advice: ['Use creativity for beneficial projects', 'Avoid wasting talents', 'Share your creations', 'Remember Allah as the ultimate Creator'],
    videoTitle: 'Creativity and Innovation in Islam',
    videoDescription: 'How to use creativity in accordance with Islamic values.',
    videoUrl: 'https://www.youtube.com/embed/73t-v_0HL8M'
},

energetic: {
    title: 'Energetic',
    subtitle: 'Channeling energy productively with Islamic teachings',
    icon: 'fas fa-bolt',
    arabic: 'فَإِذَا قَضَيْتُمُ الصَّلَاةَ فَاذْكُرُوا اللَّهَ قِيَامًا وَقُعُودًا',
    translation: 'And when you have completed the prayer, remember Allah standing and sitting',
    reference: 'Quran 4:103',
    hadith: 'The strong believer is better and more beloved to Allah.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
    duaTranslation: 'O Allah, help me remember You, thank You, and worship You excellently.',
    duaBenefit: 'Pray for vitality and productive energy.',
    advice: ['Exercise regularly', 'Engage in beneficial activities', 'Maintain spiritual vitality', 'Balance rest and work'],
    videoTitle: 'Productive Energy in Islam',
    videoDescription: 'Islamic teachings on maintaining energy and stamina.',
    videoUrl: 'https://www.youtube.com/embed/bcglgTOpSxU'
},

focused: {
    title: 'Focused',
    subtitle: 'Achieving concentration and mindfulness in worship',
    icon: 'fas fa-bullseye',
    arabic: 'وَقُلْ رَبِّ زِدْنِي عِلْمًا',
    translation: 'And say: My Lord, increase me in knowledge',
    reference: 'Quran 20:114',
    hadith: 'The best of people are those who are most beneficial to others.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ زِدْنِي فِي الْعِلْمِ وَالْحِكْمَةِ',
    duaTranslation: 'O Allah, increase me in knowledge and wisdom.',
    duaBenefit: 'Pray for focus and increased knowledge.',
    advice: ['Minimize distractions during worship', 'Pray for guidance', 'Study regularly', 'Apply knowledge diligently'],
    videoTitle: 'Maintaining Focus in Islam',
    videoDescription: 'How to focus and concentrate during prayers and life.',
    videoUrl: 'https://www.youtube.com/embed/FOCUSED_VIDEO_ID'
},

determined: {
    title: 'Determined',
    subtitle: 'Persevering through challenges with faith and resolve',
    icon: 'fas fa-flag-checkered',
    arabic: 'وَاصْبِرُوا وَصَابِرُوا وَرَابِطُوا',
    translation: 'Be patient and persevere and remain stationed',
    reference: 'Quran 3:200',
    hadith: 'The strong believer is better and more beloved to Allah than the weak.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ اجْعَلْنِي مِنَ الصَّابِرِينَ',
    duaTranslation: 'O Allah, make me among the patient.',
    duaBenefit: 'Dua for patience and determination to overcome trials.',
    advice: ['Set clear goals', 'Seek Allah\'s help', 'Maintain steady effort', 'Trust the results to Allah'],
    videoTitle: 'Perseverance and Determination in Islam',
    videoDescription: 'Tips for perseverance in the light of Islamic teachings.',
    videoUrl: 'https://www.youtube.com/embed/DETERMINED_VIDEO_ID'
},

annoyed: {
    title: 'Annoyed',
    subtitle: 'Managing irritation and anger with Islamic patience',
    icon: 'fas fa-angry',
    arabic: 'وَالْكَاظِمِينَ الْغَيْظَ',
    translation: 'And those who repress their anger',
    reference: 'Quran 3:134',
    hadith: 'Whoever controls his anger at the time when he has the means to act upon it, Allah will fill his heart with contentment.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ أَعِنِّي عَلَى كَظْمِ الْغَيْظِ',
    duaTranslation: 'O Allah, help me control my anger.',
    duaBenefit: 'A powerful dua for controlling anger and irritation.',
    advice: ['Practice deep breathing', 'Avoid harsh words', 'Seek forgiveness', 'Reflect on the rewards of patience'],
    videoTitle: 'Controlling Anger and Annoyance',
    videoDescription: 'Islamic ways to manage anger and stay calm.',
    videoUrl: 'https://www.youtube.com/embed/ANNOYED_VIDEO_ID'
},

blessed: {
    title: 'Blessed',
    subtitle: 'Recognizing and appreciating Allah\'s blessings',
    icon: 'fas fa-gem',
    arabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
    translation: 'So remember Me; I will remember you. And be grateful to Me and do not deny Me.',
    reference: 'Quran 2:152',
    hadith: 'He who does not thank people, does not thank Allah.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
    duaTranslation: 'Praise be to Allah, Lord of the worlds.',
    duaBenefit: 'Keep your heart thankful to increase blessings.',
    advice: ['Keep gratitude in every situation', 'Share blessings with others', 'Pray to maintain thankfulness', 'Spread kindness and charity'],
    videoTitle: 'The Importance of Gratitude',
    videoDescription: 'Exploring the virtues of gratitude in Islam.',
    videoUrl: 'https://www.youtube.com/embed/MGVX8rpa3gc'
},

spiritual: {
    title: 'Spiritual',
    subtitle: 'Growing closer to Allah through worship and reflection',
    icon: 'fas fa-praying-hands',
    arabic: 'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ',
    translation: 'Indeed, the patient will be given their reward without account.',
    reference: 'Quran 39:10',
    hadith: 'The best of people are those with the most beneficial impact on others.',
    hadithSource: 'Prophet Muhammad (PBUH)',
    duaArabic: 'اللَّهُمَّ زِدْنِي عِلْمًا وَهُدًى',
    duaTranslation: 'O Allah, increase me in knowledge and guidance.',
    duaBenefit: 'Continue to seek spiritual knowledge and keep worship sincere.',
    advice: ['Be consistent in worship', 'Seek knowledge regularly', 'Reflect on Allah\'s signs', 'Spread good deeds'],
    videoTitle: 'Enhancing Spirituality in Islam',
    videoDescription: 'Tips for increasing spiritual connection through Islamic teachings.',
    videoUrl: 'https://www.youtube.com/embed/SPIRITUAL_VIDEO_ID'
},

    // Continue this pattern for ALL 50 moods...
    // I can provide more if you need, but this gives you the structure

    // Default fallback
    default: {
        title: 'Spiritual Journey',
        subtitle: 'Finding peace through Islamic guidance',
        icon: 'fas fa-heart',
        arabic: 'وَاللَّهُ مَعَ الصَّابِرِينَ',
        translation: 'And Allah is with the patient',
        reference: 'Quran 2:249',
        hadith: 'Amazing is the affair of the believer, verily all of his affair is good.',
        hadithSource: 'Prophet Muhammad (PBUH), Sahih Muslim',
        duaArabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        duaTranslation: 'O Allah, help me remember You, thank You, and worship You excellently',
        duaBenefit: 'This dua helps in maintaining spiritual connection and gratitude.',
        advice: ['Maintain regular prayer and dhikr', 'Seek knowledge of Islamic teachings', 'Practice patience and gratitude', 'Connect with the Muslim community'],
        videoTitle: 'Islamic Guidance for Life',
        videoDescription: 'Discover how Islamic principles guide us through life\'s challenges.',
        videoUrl: 'https://www.youtube.com/embed/DEFAULT_VIDEO_ID'
    }
};

    // Handle mood card clicks
    // 👇 UPDATE करें - Mood Card Click Handlers 👇

compactMoodCards.forEach(card => {
    card.addEventListener('click', function() {
        // Remove active class from all cards
        compactMoodCards.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked card
        this.classList.add('active');
        
        // Get mood and show detail page
        const mood = this.getAttribute('data-feeling');
        currentMood = mood; // 👈 ADD this line
        const moodData = moodDataTemplate[mood] || moodDataTemplate.default;
        
        // Populate mood detail page
        populateMoodDetail(moodData);
        
        // Show mood detail page
        showMoodDetail();
    });
});

// 👇 UPDATE showMoodDetail function 👇
function showMoodDetail() {
    moodSection.classList.remove('active');
    moodDetailSection.classList.add('active');
    
    // 👇 ADD these lines 👇
    // Set current mood for comments
    if (window.setCurrentMoodForComments) {
        window.setCurrentMoodForComments(currentMood);
    }
    // 👆 ADD until here 👆
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 👆 यहाँ तक UPDATE करें 👆

    
    // Back to moods button
    backToMoodsBtn.addEventListener('click', function() {
        hideMoodDetail();
    });
    
    // Populate mood detail content
    function populateMoodDetail(data) {
        document.getElementById('moodTitle').textContent = data.title;
        document.getElementById('moodSubtitle').textContent = data.subtitle;
        document.getElementById('moodIcon').innerHTML = `<i class="${data.icon}"></i>`;
        
        document.getElementById('arabicVerse').textContent = data.arabic;
        document.getElementById('verseTranslation').textContent = data.translation;
        document.getElementById('verseReference').textContent = data.reference;
        
        document.getElementById('hadithText').textContent = data.hadith;
        document.getElementById('hadithSource').textContent = data.hadithSource;
        
        document.getElementById('duaArabic').textContent = data.duaArabic;
        document.getElementById('duaTranslation').textContent = data.duaTranslation;
        document.getElementById('duaBenefit').textContent = data.duaBenefit;
        
        // Populate advice list
        const adviceList = document.getElementById('adviceList');
        adviceList.innerHTML = data.advice.map(advice => `
            <div class="advice-item">
                <i class="fas fa-check-circle"></i>
                <span>${advice}</span>
            </div>
        `).join('');
        
        document.getElementById('videoTitle').textContent = data.videoTitle;
        document.getElementById('videoDescription').textContent = data.videoDescription;
    
        const youtubeIframe = document.getElementById('youtubeVideo');
    const videoThumbnail = document.querySelector('.video-thumbnail');
    
    if (data.videoUrl) {
        youtubeIframe.src = data.videoUrl;
        youtubeIframe.style.display = 'block';
        videoThumbnail.style.display = 'none';
    } else {
        youtubeIframe.style.display = 'none';
        videoThumbnail.style.display = 'flex';
    }
}
    
    // Show mood detail page
    function showMoodDetail() {
        moodSection.classList.remove('active');
        moodDetailSection.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Hide mood detail page
    function hideMoodDetail() {
        moodDetailSection.classList.remove('active');
        moodSection.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Comment functionality
    // Complete Working Comment System - Replace everything
document.addEventListener('DOMContentLoaded', function() {
    
    // Comment elements
    const postCommentBtn = document.getElementById('postComment');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
    const commentCount = document.getElementById('commentCount');
    
    if (!postCommentBtn || !commentInput || !commentsList) {
        console.log('Comment elements not found');
        return;
    }
    
    let currentMood = 'general';
    
    // Get user name
    function getUserName() {
        let userName = localStorage.getItem('userName');
        if (!userName) {
            userName = prompt('Enter your name for comments:') || 'Anonymous';
            localStorage.setItem('userName', userName);
        }
        return userName;
    }
    
    // Get stored comments
    function getComments() {
        const comments = localStorage.getItem('comments_' + currentMood);
        return comments ? JSON.parse(comments) : [];
    }
    
    // Save comments
    function saveComments(comments) {
        localStorage.setItem('comments_' + currentMood, JSON.stringify(comments));
    }
    
    // Add new comment
    function addComment(text) {
        const comments = getComments();
        const newComment = {
            id: Date.now(),
            text: text,
            userName: getUserName(),
            time: new Date().toLocaleString(),
            likes: 0
        };
        
        comments.unshift(newComment); // Add to beginning
        saveComments(comments);
        displayComments();
        updateCommentCount();
    }
    
    // Display comments
    function displayComments() {
        const comments = getComments();
        commentsList.innerHTML = '';
        
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment-item';
            commentDiv.innerHTML = `
                <div class="user-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="username">${comment.userName}</span>
                        <span class="comment-time">${comment.time}</span>
                    </div>
                    <p class="comment-text">${comment.text}</p>
                    <div class="comment-actions">
                        <button class="like-btn" data-id="${comment.id}">
                            <i class="fas fa-heart"></i>
                            <span>${comment.likes}</span>
                        </button>
                    </div>
                </div>
            `;
            commentsList.appendChild(commentDiv);
        });
        
        // Add like functionality
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentId = parseInt(this.dataset.id);
                likeComment(commentId);
            });
        });
    }
    
    // Like comment
    function likeComment(commentId) {
        const comments = getComments();
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.likes += 1;
            saveComments(comments);
            displayComments();
        }
    }
    
    // Update comment count
    function updateCommentCount() {
        const comments = getComments();
        const total = comments.length + 3; // +3 for existing default comments
        commentCount.textContent = `${total} Comment${total !== 1 ? 's' : ''}`;
    }
    
    // Set current mood
    function setCurrentMood(mood) {
        currentMood = mood;
        displayComments();
        updateCommentCount();
    }
    
    // Post comment button
    postCommentBtn.addEventListener('click', function() {
        const text = commentInput.value.trim();
        if (text) {
            addComment(text);
            commentInput.value = '';
            createLuxuryNotification('✨ Comment posted successfully!');
        } else {
            createLuxuryNotification('❌ Please write a comment first.');
        }
    });
    
    // Initialize
    displayComments();
    updateCommentCount();
    
    // Make setCurrentMood available globally
    window.setCurrentMood = setCurrentMood;
});

    
    // Call when mood detail page opens
    window.setCurrentMoodForComments = setCurrentMood;
    
    // Initialize default comments
    initializeDefaultComments();
});

    // Like button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            const likeBtn = e.target.closest('.like-btn');
            const countSpan = likeBtn.querySelector('span');
            const currentCount = parseInt(countSpan.textContent);
            
            if (likeBtn.classList.contains('active')) {
                likeBtn.classList.remove('active');
                countSpan.textContent = currentCount - 1;
            } else {
                likeBtn.classList.add('active');
                countSpan.textContent = currentCount + 1;
            }
        }
    });


// 👇 JavaScript file के बिल्कुल अंत में ADD करें 👇

// Set current mood (call this when opening mood detail page)
function setCurrentMood(mood) {
    currentMood = mood;
    currentCommentsShown = 3;
    loadCommentsForMood(mood);
}

// Add this function - it was missing!
function initializeDefaultComments() {
    // This function sets up default comments for demonstration
    // You can leave it empty for now or add default comments
    console.log('Default comments initialized');
    
    // Optional: Add some default comments
    const defaultComments = {
        confident: [
            {
                id: 'default_1',
                text: 'This really helped me build confidence through faith. JazakAllah!',
                userName: 'Ahmad Ali',
                timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                likes: 5,
                likedBy: []
            }
        ]
    };
    
    // Check if no comments exist, then add defaults
    const existingComments = localStorage.getItem('islamicExperienceComments');
    if (!existingComments) {
        localStorage.setItem('islamicExperienceComments', JSON.stringify(defaultComments));
    }
}
