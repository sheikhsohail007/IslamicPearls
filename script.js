// Add this at the VERY BEGINNING of your JavaScript file

document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function () {
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
        link.addEventListener('click', function (e) {
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
    languageBtn.addEventListener('click', function () {
        languageMenu.classList.toggle('active');
    });

    // Close language menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!languageBtn.contains(e.target) && !languageMenu.contains(e.target)) {
            languageMenu.classList.remove('active');
        }
    });

    // Language option selection
    languageOptions.forEach(option => {
        option.addEventListener('click', function () {
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
        card.addEventListener('click', function () {
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
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-12px) scale(1.03)';
        });

        card.addEventListener('mouseleave', function () {
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
        card.addEventListener('click', function () {
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
        card.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-12px) scale(1.03)';
            }
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });

    // Luxury button interaction
    luxuryBtn.addEventListener('click', function () {
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
    document.addEventListener('keydown', function (e) {
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
document.addEventListener('DOMContentLoaded', function () {
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');

    newsletterBtn.addEventListener('click', function (e) {
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
        link.addEventListener('click', function (e) {
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
        link.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            this.style.transform = `translateY(-8px) scale(1.1) translate(${x * 0.1}px, ${y * 0.1}px)`;
        });

        link.addEventListener('mouseleave', function () {
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
document.addEventListener('DOMContentLoaded', function () {
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
        card.addEventListener('click', function () {
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
        card.addEventListener('mouseenter', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-4px) scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', function () {
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

document.addEventListener('DOMContentLoaded', function () {
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
        card.addEventListener('click', function () {
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
    backToMoodsBtn.addEventListener('click', function () {
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
    document.addEventListener('DOMContentLoaded', function () {

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
                btn.addEventListener('click', function () {
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
        postCommentBtn.addEventListener('click', function () {
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
document.addEventListener('click', function (e) {
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


// Add this to your existing JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    // Prophet elements
    const prophetsSection = document.getElementById('prophetsSection');
    const prophetDetailSection = document.getElementById('prophetDetailSection');
    const homeSection = document.getElementById('homeSection');
    const backToHomeBtn = document.getElementById('backToHome');
    const backToProphetsBtn = document.getElementById('backToProphets');
    const prophetCards = document.querySelectorAll('.compact-prophet-card');

    // Home card click - Story of Prophets
    const storyOfProphetsCard = document.querySelector('[data-category="prophets"][data-type="stories"]');
    if (storyOfProphetsCard) {
        storyOfProphetsCard.addEventListener('click', function () {
            showProphetsSection();
        });
    }

    // Back navigation buttons
    backToHomeBtn.addEventListener('click', function () {
        hideProphetsSection();
    });

    backToProphetsBtn.addEventListener('click', function () {
        hideProphetDetail();
    });

    // Prophet card clicks
    prophetCards.forEach(card => {
        card.addEventListener('click', function () {
            const prophet = this.getAttribute('data-prophet');
            showProphetDetail(prophet);
        });
    });

    // Show prophets section
    function showProphetsSection() {
        homeSection.classList.remove('active');
        prophetsSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide prophets section
    function hideProphetsSection() {
        prophetsSection.classList.remove('active');
        homeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show prophet detail
    function showProphetDetail(prophetName) {
        const prophetData = prophetDataTemplate[prophetName] || prophetDataTemplate.default;
        populateProphetDetail(prophetData);

        prophetsSection.classList.remove('active');
        prophetDetailSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide prophet detail
    function hideProphetDetail() {
        prophetDetailSection.classList.remove('active');
        prophetsSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Prophet data template (sample for 5 popular prophets)
    const prophetDataTemplate = {
        muhammad: {
            title: 'Muhammad (SAW)',
            subtitle: 'The Final Messenger of Allah',
            icon: 'fas fa-moon',
            story: 'Prophet Muhammad (SAW) was born in Mecca in 570 CE. He was known as Al-Amin (the trustworthy) even before his prophethood. At age 40, he received the first revelation from Angel Jibreel in the Cave of Hira. He spent 23 years spreading the message of Islam, facing persecution in Mecca and later migrating to Medina. He united the Arabian tribes under Islam and established a just society. He passed away in 632 CE, leaving behind the complete message of Islam.',
            arabic: 'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',
            translation: 'And We sent you not, [O Muhammad], except as a mercy to the worlds.',
            reference: 'Quran 21:107',
            lessons: [
                'Honesty and trustworthiness in all dealings',
                'Patience in the face of persecution',
                'Compassion towards all of creation',
                'Justice and equality for all people',
                'The importance of seeking knowledge'
            ],
            timeline: [
                { date: '570 CE', event: 'Born in Mecca during the Year of the Elephant' },
                { date: '610 CE', event: 'First revelation received in Cave of Hira' },
                { date: '622 CE', event: 'Migration (Hijra) to Medina' },
                { date: '630 CE', event: 'Conquest of Mecca and forgiveness of enemies' },
                { date: '632 CE', event: 'Farewell pilgrimage and passing away' }
            ],
            videoTitle: 'The Life of Prophet Muhammad (SAW)',
            videoDescription: 'Complete story of the final messenger of Allah.',
            videoUrl: 'https://www.youtube.com/embed/MUHAMMAD_VIDEO_ID'
        },

        ibrahim: {
            title: 'Ibrahim (AS)',
            subtitle: 'Khalil Allah - The Friend of Allah',
            icon: 'fas fa-kaaba',
            story: 'Prophet Ibrahim (AS) is known as the father of monotheism. Born in Babylon, he questioned his people\'s idol worship from a young age. He famously destroyed the idols in his father\'s shop, demonstrating that they had no power. He was thrown into a fire by King Nimrod but Allah made it cool and safe for him. He migrated to various lands, spreading the message of Tawheed. Along with his son Ismail, he built the Kaaba in Mecca. His willingness to sacrifice his son showed his complete submission to Allah.',
            arabic: 'وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا',
            translation: 'And Allah took Ibrahim as an intimate friend.',
            reference: 'Quran 4:125',
            lessons: [
                'Unwavering faith in Allah despite opposition',
                'Courage to stand against falsehood',
                'Complete submission to Allah\'s commands',
                'Hospitality and kindness to guests',
                'The importance of building places of worship'
            ],
            timeline: [
                { date: '~2000 BCE', event: 'Born in Babylon (modern-day Iraq)' },
                { date: 'Youth', event: 'Destroyed idols and questioned polytheism' },
                { date: 'Early Life', event: 'Survived being thrown into fire by Nimrod' },
                { date: 'Adulthood', event: 'Built the Kaaba with son Ismail in Mecca' },
                { date: 'Later Life', event: 'Prepared to sacrifice Ismail in obedience to Allah' }
            ],
            videoTitle: 'The Story of Prophet Ibrahim (AS)',
            videoDescription: 'The life and trials of Allah\'s beloved friend.',
            videoUrl: 'https://www.youtube.com/embed/IBRAHIM_VIDEO_ID'
        },

        musa: {
            title: 'Musa (AS)',
            subtitle: 'Kalim Allah - The One Who Spoke to Allah',
            icon: 'fas fa-tablets',
            story: 'Prophet Musa (AS) was born during the time when Pharaoh was killing all newborn Hebrew boys. By Allah\'s plan, he was raised in Pharaoh\'s palace. After accidentally killing an Egyptian, he fled to Midian where he married and worked as a shepherd. Allah called him at Mount Sinai and gave him the mission to free the Israelites from slavery. He performed many miracles including turning his staff into a snake and parting the Red Sea. He received the Torah and led his people through 40 years in the desert.',
            arabic: 'وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا',
            translation: 'And Allah spoke to Musa with [direct] speech.',
            reference: 'Quran 4:164',
            lessons: [
                'Allah can turn apparent weakness into strength',
                'Standing up against oppression and tyranny',
                'Patience with difficult people and situations',
                'The importance of following Allah\'s guidance',
                'Trust in Allah during seemingly impossible situations'
            ],
            timeline: [
                { date: '~1400 BCE', event: 'Born in Egypt during Hebrew persecution' },
                { date: 'Infancy', event: 'Saved from Pharaoh\'s decree, raised in palace' },
                { date: 'Adulthood', event: 'Fled to Midian after killing Egyptian taskmaster' },
                { date: 'Age 40', event: 'Received prophethood at Mount Sinai' },
                { date: 'Later', event: 'Led Israelites out of Egypt and through desert' }
            ],
            videoTitle: 'The Story of Prophet Musa (AS)',
            videoDescription: 'From palace to prophethood - the liberation of Israelites.',
            videoUrl: 'https://www.youtube.com/embed/MUSA_VIDEO_ID'
        },

        // Add more prophets as needed...
        // Add these remaining 22 prophets to your existing prophetDataTemplate object:

        isa: {
            title: 'Isa (AS)',
            subtitle: 'Ruh Allah - The Spirit of Allah',
            icon: 'fas fa-heart',
            story: 'Prophet Isa (AS) was born miraculously to Maryam (Mary) without a father. From infancy, he spoke in the cradle defending his mother\'s honor. He was granted many miracles including healing the blind, curing lepers, and bringing the dead back to life by Allah\'s permission. He preached to the Children of Israel, calling them to worship Allah alone. He was given the Injeel (Gospel) and performed numerous miracles. Before his enemies could harm him, Allah raised him to the heavens, and he will return before the Day of Judgment.',
            arabic: 'إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
            translation: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet',
            reference: 'Quran 19:30',
            lessons: [
                'Miracles are signs of Allah\'s power, not the prophet\'s own ability',
                'Speak truth even as a child when defending what is right',
                'Use your abilities to heal and help others',
                'Maintain humility despite extraordinary gifts',
                'Focus on spiritual healing along with physical healing',
                'Remember that all power comes from Allah alone'
            ],
            timeline: [
                { date: '~4 BCE', event: 'Miraculous birth to Maryam in Bethlehem' },
                { date: 'Infancy', event: 'Spoke from the cradle defending his mother' },
                { date: '~30 CE', event: 'Began his prophetic mission to Children of Israel' },
                { date: '~30-33 CE', event: 'Performed miracles and preached monotheism' },
                { date: '~33 CE', event: 'Raised to heavens by Allah before crucifixion' }
            ],
            videoTitle: 'The Miracles and Message of Prophet Isa',
            videoDescription: 'The blessed life and miraculous signs of Jesus in Islam.',
            videoUrl: 'https://www.youtube.com/embed/ISA_VIDEO_ID'
        },

        nuh: {
            title: 'Nuh (AS)',
            subtitle: 'The Patient Preacher - Builder of the Ark',
            icon: 'fas fa-ship',
            story: 'Prophet Nuh (AS) preached to his people for 950 years, calling them to abandon idol worship and turn to Allah. Despite his long efforts, only a few believed. His people mocked him and rejected his message. Allah commanded him to build an ark as a great flood was coming. Nuh built the ark and saved the believers, pairs of every animal species, and his family (except those who disbelieved). The flood destroyed the disbelievers, and Nuh\'s descendants repopulated the earth.',
            arabic: 'وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا',
            translation: 'And We certainly sent Noah to his people, and he remained among them a thousand years minus fifty years',
            reference: 'Quran 29:14',
            lessons: [
                'Persistence and patience in calling people to truth',
                'Never give up on people, even after long periods of rejection',
                'Trust in Allah\'s justice and timing',
                'Prepare for challenges with practical planning',
                'Save those who believe, regardless of their social status',
                'Allah\'s punishment comes after long warnings and opportunities'
            ],
            timeline: [
                { date: '~3000 BCE', event: 'Born and began preaching to his people' },
                { date: '950 years', event: 'Continuously called people to worship Allah alone' },
                { date: 'Later years', event: 'Commanded by Allah to build the ark' },
                { date: 'The Flood', event: 'Great flood destroyed the disbelievers' },
                { date: 'After flood', event: 'Disembarked and repopulated the earth with believers' }
            ],
            videoTitle: 'The 950-Year Mission of Prophet Nuh',
            videoDescription: 'Patience, persistence, and Allah\'s ultimate justice.',
            videoUrl: 'https://www.youtube.com/embed/NUH_VIDEO_ID'
        },

        adam: {
            title: 'Adam (AS)',
            subtitle: 'Abu Bashar - Father of Mankind',
            icon: 'fas fa-seedling',
            story: 'Prophet Adam (AS) was the first human being created by Allah from clay. Allah breathed His spirit into him and taught him the names of all things. He was placed in Paradise with his wife Hawwa (Eve), but Iblis (Satan) deceived them into eating from the forbidden tree. After their mistake, they sincerely repented to Allah, who forgave them and sent them to Earth as the first humans. Adam became the first prophet, teaching his children about Allah and righteous living.',
            arabic: 'فَتَلَقَّىٰ آدَمُ مِن رَّبِّهِ كَلِمَاتٍ فَتَابَ عَلَيْهِ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ',
            translation: 'Then Adam received from his Lord [some] words, and He accepted his repentance. Indeed, it is He who is the Accepting of repentance, the Merciful',
            reference: 'Quran 2:37',
            lessons: [
                'Sincere repentance leads to Allah\'s forgiveness',
                'Learn from mistakes and don\'t repeat them',
                'Satan is the eternal enemy who leads humans astray',
                'Knowledge is a blessed gift from Allah',
                'Take responsibility for your actions',
                'Allah\'s mercy is greater than any sin'
            ],
            timeline: [
                { date: 'Creation', event: 'Created by Allah from clay and given life' },
                { date: 'Paradise', event: 'Lived in Paradise with Hawwa' },
                { date: 'The Test', event: 'Deceived by Satan and ate from forbidden tree' },
                { date: 'Repentance', event: 'Made sincere tawbah and was forgiven by Allah' },
                { date: 'Earth', event: 'Sent to Earth as first prophet and father of humanity' }
            ],
            videoTitle: 'Adam: The First Human and Prophet',
            videoDescription: 'Creation, test, repentance, and the beginning of human guidance.',
            videoUrl: 'https://www.youtube.com/embed/ADAM_VIDEO_ID'
        },

        yusuf: {
            title: 'Yusuf (AS)',
            subtitle: 'The Truthful - Beauty and Wisdom Combined',
            icon: 'fas fa-crown',
            story: 'Prophet Yusuf (AS) was blessed with extraordinary beauty and wisdom. His jealous brothers threw him into a well, and he was sold as a slave in Egypt. Despite facing temptation from his master\'s wife, he remained righteous and was imprisoned for years. Allah granted him the ability to interpret dreams. When he interpreted the king\'s dream about seven years of abundance followed by seven years of famine, he was made the treasurer of Egypt. He eventually forgave his brothers and reunited with his father Yaqub.',
            arabic: 'وَكَذَٰلِكَ يَجْتَبِيكَ رَبُّكَ وَيُعَلِّمُكَ مِن تَأْوِيلِ الْأَحَادِيثِ',
            translation: 'And thus will your Lord choose you and teach you the interpretation of narratives',
            reference: 'Quran 12:6',
            lessons: [
                'Remain steadfast in faith during hardships',
                'Resist temptation even when it seems easy',
                'Forgiveness leads to healing and reconciliation',
                'Use your God-given abilities to serve others',
                'Trust in Allah\'s plan even when it seems unclear',
                'Leadership should be used for justice and helping people'
            ],
            timeline: [
                { date: 'Youth', event: 'Had prophetic dreams about his future greatness' },
                { date: 'Betrayal', event: 'Thrown into well by jealous brothers' },
                { date: 'Egypt', event: 'Sold as slave, worked in Potiphar\'s house' },
                { date: 'Prison', event: 'Falsely accused and imprisoned for years' },
                { date: 'Freedom', event: 'Interpreted king\'s dream and became Egypt\'s treasurer' },
                { date: 'Reunion', event: 'Forgave brothers and reunited with father Yaqub' }
            ],
            videoTitle: 'The Beautiful Patience of Prophet Yusuf',
            videoDescription: 'From slavery to leadership through faith and forgiveness.',
            videoUrl: 'https://www.youtube.com/embed/YUSUF_VIDEO_ID'
        },

        dawud: {
            title: 'Dawud (AS)',
            subtitle: 'The Melodious King - Warrior and Psalmist',
            icon: 'fas fa-crown',
            story: 'Prophet Dawud (AS) was a young shepherd who defeated the giant Jalut (Goliath) with a single stone, showing his complete trust in Allah. He became king of the Israelites and was granted the Zabur (Psalms). His voice was so beautiful that when he recited Allah\'s praises, mountains and birds would join him. He was known for his justice, devotion to worship, and skill in making armor. He worked with his hands despite being a king, teaching the importance of honest labor.',
            arabic: 'وَلَقَدْ آتَيْنَا داوُودَ مِنَّا فَضْلًا يَا جِبَالُ أَوِّبِي مَعَهُ وَالطَّيْرَ',
            translation: 'And We certainly gave David from Us bounty. [We said], "O mountains, repeat [Our] praises with him, and the birds [as well]"',
            reference: 'Quran 34:10',
            lessons: [
                'Trust in Allah can overcome any giant obstacle',
                'Combine worldly leadership with spiritual devotion',
                'Use your talents to glorify Allah',
                'Work with your hands even if you have high status',
                'Justice should be the foundation of all leadership',
                'Express gratitude through beautiful worship'
            ],
            timeline: [
                { date: 'Youth', event: 'Young shepherd chosen by Allah' },
                { date: 'Giant\'s defeat', event: 'Killed Jalut (Goliath) with Allah\'s help' },
                { date: 'Kingship', event: 'Became king of the Children of Israel' },
                { date: 'Zabur revealed', event: 'Received the Psalms from Allah' },
                { date: 'Reign', event: 'Ruled with justice and established strong kingdom' }
            ],
            videoTitle: 'The Warrior-King Prophet Dawud',
            videoDescription: 'From shepherd to king through faith and divine support.',
            videoUrl: 'https://www.youtube.com/embed/DAWUD_VIDEO_ID'
        },

        sulaiman: {
            title: 'Sulaiman (AS)',
            subtitle: 'The Wise King - Master of Jinn and Animals',
            icon: 'fas fa-chess-king',
            story: 'Prophet Sulaiman (AS), son of Dawud, was granted a kingdom unlike any other. Allah gave him power over jinn, animals, and the wind. He could speak with birds and insects, and jinn worked under his command to build magnificent structures. His wisdom was legendary - he resolved disputes with remarkable insight. When the Queen of Sheba heard of his wisdom and power, she came to test him and eventually accepted Islam. Despite his great power, he remained humble and devoted to Allah.',
            arabic: 'وَوَرِثَ سُلَيْمَانُ دَاوُودَ وَقَالَ يَا أَيُّهَا النَّاسُ عُلِّمْنَا مَنطِقَ الطَّيْرِ',
            translation: 'And Solomon inherited David. He said, "O people, we have been taught the language of birds"',
            reference: 'Quran 27:16',
            lessons: [
                'Use power and authority to serve justice',
                'Remain humble despite extraordinary gifts',
                'Wisdom in leadership benefits everyone',
                'All creatures are part of Allah\'s kingdom',
                'Diplomacy and wisdom prevent conflicts',
                'Gratitude for blessings leads to more blessings'
            ],
            timeline: [
                { date: 'Inheritance', event: 'Inherited prophethood and kingdom from Dawud' },
                { date: 'Special powers', event: 'Granted control over jinn, wind, and animals' },
                { date: 'Great buildings', event: 'Jinn built magnificent palaces and temples' },
                { date: 'Queen of Sheba', event: 'Diplomatic victory led to her conversion to Islam' },
                { date: 'Peak reign', event: 'Ruled the greatest kingdom in human history' }
            ],
            videoTitle: 'The Magnificent Kingdom of Prophet Sulaiman',
            videoDescription: 'Divine power, wisdom, and humility in perfect balance.',
            videoUrl: 'https://www.youtube.com/embed/SULAIMAN_VIDEO_ID'
        },

        yunus: {
            title: 'Yunus (AS)',
            subtitle: 'Dhun-Nun - The Man of the Fish',
            icon: 'fas fa-fish',
            story: 'Prophet Yunus (AS) was sent to the people of Nineveh, but they rejected his message. Feeling frustrated, he left them before Allah gave him permission. He boarded a ship, but Allah sent a storm. The crew drew lots to see who was causing their misfortune, and Yunus was chosen. A great fish swallowed him, and in the darkness of the fish\'s belly, he repented and praised Allah with the famous dua. Allah forgave him, the fish released him, and he returned to his people to find they had all believed.',
            arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
            translation: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers',
            reference: 'Quran 21:87',
            lessons: [
                'Patience is required in calling people to truth',
                'Sincere repentance can transform any situation',
                'Don\'t abandon your mission due to frustration',
                'Allah\'s mercy encompasses even prophets\' mistakes',
                'The dua of Yunus removes all distress',
                'Sometimes people need time to accept guidance'
            ],
            timeline: [
                { date: 'Mission', event: 'Sent to preach to the people of Nineveh' },
                { date: 'Rejection', event: 'People rejected his message initially' },
                { date: 'Departure', event: 'Left his people in frustration' },
                { date: 'The fish', event: 'Swallowed by great fish after storm at sea' },
                { date: 'Repentance', event: 'Made famous dua and was forgiven by Allah' },
                { date: 'Return', event: 'Found his people had all embraced faith' }
            ],
            videoTitle: 'The Journey of Prophet Yunus: Patience and Repentance',
            videoDescription: 'Lessons in patience, repentance, and Allah\'s infinite mercy.',
            videoUrl: 'https://www.youtube.com/embed/YUNUS_VIDEO_ID'
        },

        idris: {
            title: 'Idris (AS)',
            subtitle: 'The Elevated One - First to Write',
            icon: 'fas fa-star',
            story: 'Prophet Idris (AS) was among the first prophets after Adam. He was the first human to learn writing with a pen and to study astronomy. Allah taught him many sciences and gave him 30 scrolls. He taught people how to sew clothes, build cities, and various crafts. He was known for his exceptional piety and knowledge. The Quran mentions that Allah raised him to a high station, and many scholars believe he was taken to the heavens alive, similar to Prophet Isa.',
            arabic: 'وَرَفَعْنَاهُ مَكَانًا عَلِيًّا',
            translation: 'And We raised him to a high station',
            reference: 'Quran 19:57',
            lessons: [
                'Seek knowledge as a path to spiritual elevation',
                'Use knowledge to benefit humanity',
                'Writing and record-keeping preserve wisdom',
                'Combine religious devotion with practical skills',
                'Teaching others multiplies your good deeds',
                'Piety and knowledge lead to high spiritual stations'
            ],
            timeline: [
                { date: 'Early prophethood', event: 'Among the first prophets after Adam' },
                { date: 'Knowledge', event: 'First to write and study astronomy' },
                { date: 'Teaching', event: 'Taught crafts, writing, and city building' },
                { date: 'Scrolls', event: 'Received 30 divine scrolls' },
                { date: 'Elevation', event: 'Raised by Allah to a high spiritual station' }
            ],
            videoTitle: 'The Knowledge and Elevation of Prophet Idris',
            videoDescription: 'First teacher of writing, astronomy, and divine knowledge.',
            videoUrl: 'https://www.youtube.com/embed/IDRIS_VIDEO_ID'
        },

        ismail: {
            title: 'Ismail (AS)',
            subtitle: 'The Sacrifice - Son of Ibrahim',
            icon: 'fas fa-hands-praying',
            story: 'Prophet Ismail (AS) was the son of Ibrahim and Hajar. As a baby, he was left with his mother in the desert of Makkah by Allah\'s command. When water ran out, Hajar ran between the hills of Safa and Marwah seeking help, and Allah caused the Zamzam well to spring forth. As Ismail grew, he helped his father build the Kaaba. When Allah tested Ibrahim by commanding him to sacrifice Ismail, the young prophet willingly submitted. Allah replaced him with a ram, and Ismail became the ancestor of the Arabs and Prophet Muhammad.',
            arabic: 'فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ فَانظُرْ مَاذَا تَرَىٰ قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ',
            translation: 'And when he reached with him [the age of] exertion, he said, "O my son, indeed I have seen in a dream that I [must] sacrifice you, so see what you think." He said, "O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast"',
            reference: 'Quran 37:102',
            lessons: [
                'Complete submission to Allah\'s will',
                'Trust Allah even in the most difficult situations',
                'Obedience to righteous parents is obedience to Allah',
                'Allah tests those He loves to elevate their status',
                'Patience and acceptance bring divine rewards',
                'Every trial has wisdom behind it'
            ],
            timeline: [
                { date: 'Infancy', event: 'Left in Makkah desert with mother Hajar' },
                { date: 'Zamzam miracle', event: 'Allah provided Zamzam well for water' },
                { date: 'Childhood', event: 'Grew up in Makkah under Allah\'s protection' },
                { date: 'Kaaba building', event: 'Helped father Ibrahim build the Kaaba' },
                { date: 'The sacrifice', event: 'Submitted to Allah\'s command for sacrifice' },
                { date: 'Legacy', event: 'Became ancestor of Arab tribes and Prophet Muhammad' }
            ],
            videoTitle: 'The Complete Submission of Prophet Ismail',
            videoDescription: 'Perfect obedience, trust, and the foundation of Makkah.',
            videoUrl: 'https://www.youtube.com/embed/ISMAIL_VIDEO_ID'
        },

        ishaq: {
            title: 'Ishaq (AS)',
            subtitle: 'The Blessed Son - Promise Fulfilled',
            icon: 'fas fa-gift',
            story: 'Prophet Ishaq (AS) was the miraculous son born to Ibrahim and Sarah in their old age, fulfilling Allah\'s promise. He was the half-brother of Ismail and continued the prophetic lineage. Ishaq was blessed with wisdom and righteousness, carrying forward his father\'s mission of calling people to monotheism. He became the father of Yaqub (Israel) and maintained the covenant with Allah. His birth was a sign of Allah\'s power to fulfill promises regardless of natural limitations.',
            arabic: 'وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ',
            translation: 'And We gave him good tidings of Isaac - a prophet from among the righteous',
            reference: 'Quran 37:112',
            lessons: [
                'Allah fulfills His promises in His perfect timing',
                'Miracles can happen even in old age',
                'Continue the righteous legacy of your ancestors',
                'Be grateful for being chosen by Allah',
                'Maintain family bonds despite different circumstances',
                'Pass on faith and righteousness to next generations'
            ],
            timeline: [
                { date: 'Prophecy', event: 'Allah promised Ibrahim a son through Sarah' },
                { date: 'Birth', event: 'Born miraculously to elderly parents' },
                { date: 'Prophethood', event: 'Blessed with prophethood and righteousness' },
                { date: 'Family', event: 'Father of Yaqub, continuing prophetic lineage' },
                { date: 'Mission', event: 'Preached monotheism and maintained Allah\'s covenant' }
            ],
            videoTitle: 'The Promised Son Prophet Ishaq',
            videoDescription: 'Allah\'s promise fulfilled and blessings continued.',
            videoUrl: 'https://www.youtube.com/embed/ISHAQ_VIDEO_ID'
        },

        yaqub: {
            title: 'Yaqub (AS)',
            subtitle: 'Israel - The Patient Father',
            icon: 'fas fa-users',
            story: 'Prophet Yaqub (AS), also known as Israel, was the son of Ishaq and grandson of Ibrahim. He was blessed with twelve sons who became the fathers of the twelve tribes of Israel. His most beloved son was Yusuf, whose apparent death caused him great grief for years. Despite this prolonged sadness, Yaqub maintained beautiful patience (sabr jameel) and never lost faith in Allah. When he was finally reunited with Yusuf in Egypt, his joy was immense, and he praised Allah for His mercy.',
            arabic: 'إِنَّمَا أَشْكُو بَثِّي وَحُزْنِي إِلَى اللَّهِ',
            translation: 'I only complain of my suffering and my grief to Allah',
            reference: 'Quran 12:86',
            lessons: [
                'Practice beautiful patience during family trials',
                'Take your complaints to Allah, not to people',
                'Maintain hope even in seemingly hopeless situations',
                'Trust Allah\'s wisdom in family difficulties',
                'Never lose faith despite prolonged hardships',
                'Family reunion and forgiveness bring healing'
            ],
            timeline: [
                { date: 'Birth', event: 'Born to Ishaq, continuing Abrahamic lineage' },
                { date: 'Twelve sons', event: 'Father of twelve sons, founders of tribes of Israel' },
                { date: 'Yusuf\'s loss', event: 'Believed Yusuf was killed by his brothers' },
                { date: 'Years of grief', event: 'Maintained patience and faith despite prolonged sadness' },
                { date: 'Reunion', event: 'Joyfully reunited with Yusuf in Egypt' }
            ],
            videoTitle: 'The Beautiful Patience of Prophet Yaqub',
            videoDescription: 'Family trials, unwavering faith, and ultimate joy.',
            videoUrl: 'https://www.youtube.com/embed/YAQUB_VIDEO_ID'
        },

        lut: {
            title: 'Lut (AS)',
            subtitle: 'The Warner - Nephew of Ibrahim',
            icon: 'fas fa-exclamation-triangle',
            story: 'Prophet Lut (AS) was the nephew of Ibrahim who was sent to the people of Sodom and Gomorrah. These cities had become centers of moral corruption, including the widespread practice of homosexuality. Lut preached against these sins and called his people to righteousness, but they rejected his message and even threatened him. Allah sent angels to rescue Lut and his family before destroying the cities. His wife, who supported the people\'s corruption, was destroyed with them, while Lut and his daughters were saved.',
            arabic: 'وَلُوطًا إِذْ قَالَ لِقَوْمِهِ أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ',
            translation: 'And [mention] Lot, when he said to his people, "Do you commit such immorality as no one has preceded you with from among the worlds?"',
            reference: 'Quran 7:80',
            lessons: [
                'Stand against moral corruption even when outnumbered',
                'Warn people about the consequences of their sins',
                'Don\'t compromise your principles for social acceptance',
                'Sometimes family members may not support righteousness',
                'Allah protects those who uphold moral values',
                'Divine punishment follows persistent moral corruption'
            ],
            timeline: [
                { date: 'Mission', event: 'Sent to the morally corrupt people of Sodom' },
                { date: 'Preaching', event: 'Warned against homosexuality and other sins' },
                { date: 'Rejection', event: 'People rejected his message and threatened him' },
                { date: 'Angels\' visit', event: 'Angels came to save Lut and destroy the cities' },
                { date: 'Destruction', event: 'Sodom and Gomorrah destroyed, Lut and daughters saved' }
            ],
            videoTitle: 'The Moral Courage of Prophet Lut',
            videoDescription: 'Standing for righteousness in corrupt societies.',
            videoUrl: 'https://www.youtube.com/embed/LUT_VIDEO_ID'
        },

        harun: {
            title: 'Harun (AS)',
            subtitle: 'The Eloquent Speaker - Brother of Musa',
            icon: 'fas fa-microphone',
            story: 'Prophet Harun (AS) was the older brother of Musa, blessed with eloquent speech and appointed as his spokesperson and helper. When Musa was called to confront Pharaoh, he asked Allah to send Harun with him due to his excellent communication skills. Harun supported Musa throughout their mission to free the Children of Israel from Pharaoh\'s oppression. When Musa went to Mount Sinai to receive the Torah, Harun was left in charge, but some Israelites created and worshipped a golden calf during this time.',
            arabic: 'وَوَهَبْنَا لَهُ مِن رَّحْمَتِنَا أَخَاهُ هَارُونَ نَبِيًّا',
            translation: 'And We granted him out of Our mercy his brother Aaron as a prophet',
            reference: 'Quran 19:53',
            lessons: [
                'Use your communication skills to serve Allah\'s message',
                'Supporting righteous leadership is a noble role',
                'Brothers should work together for good causes',
                'Eloquent speech is a blessing when used correctly',
                'Leadership requires patience and wisdom',
                'Stand firm against people\'s demands for wrongdoing'
            ],
            timeline: [
                { date: 'Appointment', event: 'Chosen by Allah to assist Musa as prophet and spokesman' },
                { date: 'Pharaoh\'s court', event: 'Spoke to Pharaoh alongside Musa' },
                { date: 'Exodus', event: 'Helped lead Israelites out of Egypt' },
                { date: 'Golden calf', event: 'Tried to prevent idol worship while Musa was away' },
                { date: 'Reunion', event: 'Reconciled with Musa after the golden calf incident' }
            ],
            videoTitle: 'The Supportive Leadership of Prophet Harun',
            videoDescription: 'Eloquent communication and loyal brotherhood in service of Allah.',
            videoUrl: 'https://www.youtube.com/embed/HARUN_VIDEO_ID'
        },

        zakariyya: {
            title: 'Zakariyya (AS)',
            subtitle: 'The Persistent Supplicant - Guardian of Maryam',
            icon: 'fas fa-praying-hands',
            story: 'Prophet Zakariyya (AS) was an elderly prophet who served in the temple and was made the guardian of Maryam (mother of Isa). Seeing Allah\'s miracles in providing for Maryam, he was inspired to ask Allah for a child despite his old age and his wife\'s barrenness. He made sincere, private supplications to Allah, and was blessed with a son, Yahya (John the Baptist), in his very old age. This miraculous birth was a sign of Allah\'s power and a reward for his persistent prayer and righteous life.',
            arabic: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ',
            translation: 'My Lord, do not leave me alone [with no heir], while you are the best of inheritors',
            reference: 'Quran 21:89',
            lessons: [
                'Never give up hope in Allah\'s mercy regardless of age',
                'Make persistent, sincere prayers for your needs',
                'Take care of righteous people under your guardianship',
                'Allah can grant miracles at any age',
                'Private supplications show sincerity and humility',
                'Righteous offspring are among the greatest blessings'
            ],
            timeline: [
                { date: 'Temple service', event: 'Devoted his life to serving in the temple' },
                { date: 'Maryam\'s guardian', event: 'Appointed as guardian of young Maryam' },
                { date: 'Witnessing miracles', event: 'Saw Allah providing miraculously for Maryam' },
                { date: 'Prayer for child', event: 'Asked Allah for righteous offspring in old age' },
                { date: 'Yahya\'s birth', event: 'Blessed with son Yahya despite advanced age' }
            ],
            videoTitle: 'The Persistent Prayers of Prophet Zakariyya',
            videoDescription: 'Faith, hope, and miraculous blessings in old age.',
            videoUrl: 'https://www.youtube.com/embed/ZAKARIYYA_VIDEO_ID'
        },

        yahya: {
            title: 'Yahya (AS)',
            subtitle: 'John the Baptist - The Pure Youth',
            icon: 'fas fa-dove',
            story: 'Prophet Yahya (AS) was the miraculous son of the elderly Zakariyya, born to prepare the way for Isa (Jesus). From childhood, he was given wisdom, purity, and compassion. He lived an ascetic life in the wilderness, wearing simple clothes and eating simple food. He called people to repentance and baptized them in the Jordan River. He fearlessly spoke truth to power, even criticizing King Herod for his unlawful marriage. His righteousness and courage ultimately led to his martyrdom, but his message of purity and repentance continued.',
            arabic: 'يَا يَحْيَىٰ خُذِ الْكِتَابَ بِقُوَّةٍ وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا',
            translation: 'O John, take the Scripture with determination. And We gave him judgement [while yet] a boy',
            reference: 'Quran 19:12',
            lessons: [
                'Wisdom can be granted even to the young',
                'Live simply and focus on spiritual rather than material things',
                'Speak truth even when it\'s dangerous',
                'Prepare people for greater messages to come',
                'Purity and righteousness attract divine blessings',
                'Sometimes righteousness requires sacrifice'
            ],
            timeline: [
                { date: 'Miraculous birth', event: 'Born to elderly Zakariyya and barren wife' },
                { date: 'Childhood wisdom', event: 'Given wisdom and understanding from young age' },
                { date: 'Wilderness life', event: 'Lived ascetic life preparing for mission' },
                { date: 'Baptizing ministry', event: 'Called people to repentance and baptized them' },
                { date: 'Martyrdom', event: 'Killed for speaking truth to corrupt rulers' }
            ],
            videoTitle: 'The Pure Devotion of Prophet Yahya',
            videoDescription: 'Youth, wisdom, courage, and ultimate sacrifice for truth.',
            videoUrl: 'https://www.youtube.com/embed/YAHYA_VIDEO_ID'
        },

        ilyas: {
            title: 'Ilyas (AS)',
            subtitle: 'Elijah - The Zealous Prophet',
            icon: 'fas fa-fire',
            story: 'Prophet Ilyas (AS) was sent to the Northern Kingdom of Israel during a time of widespread idol worship, particularly the worship of Baal. He confronted the corrupt King Ahab and Queen Jezebel, calling them back to the worship of Allah alone. He challenged the prophets of Baal to a contest on Mount Carmel, where Allah demonstrated His power by sending fire from heaven to consume Ilyas\'s sacrifice while the false gods remained silent. Despite his clear victory, he faced persecution and had to flee, but his message of pure monotheism endured.',
            arabic: 'وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ',
            translation: 'And indeed, Elias was from among the messengers',
            reference: 'Quran 37:123',
            lessons: [
                'Stand firmly against idol worship in all its forms',
                'Confront corruption even in high places',
                'Allah demonstrates His power to support truth',
                'Sometimes righteous people face persecution',
                'Pure monotheism is worth any sacrifice',
                'Divine support comes to those who defend faith'
            ],
            timeline: [
                { date: 'Mission begins', event: 'Sent to combat Baal worship in Israel' },
                { date: 'Confronting kings', event: 'Challenged corrupt King Ahab and Queen Jezebel' },
                { date: 'Mount Carmel', event: 'Contest with Baal prophets proved Allah\'s power' },
                { date: 'Persecution', event: 'Fled from Queen Jezebel\'s threats' },
                { date: 'Continued mission', event: 'Maintained call to pure monotheism despite opposition' }
            ],
            videoTitle: 'The Zealous Faith of Prophet Ilyas',
            videoDescription: 'Confronting idolatry with courage and divine power.',
            videoUrl: 'https://www.youtube.com/embed/ILYAS_VIDEO_ID'
        },

        alyasa: {
            title: 'Al-Yasa (AS)',
            subtitle: 'Elisha - The Miracle Worker',
            icon: 'fas fa-hands',
            story: 'Prophet Al-Yasa (AS) was the successor and student of Ilyas, continuing his mission to call the Israelites to pure worship of Allah. He was granted numerous miracles including healing the sick, multiplying food for the hungry, and even raising the dead by Allah\'s permission. His ministry was marked by compassion and service to people in need. He worked tirelessly to maintain the message of monotheism and helped establish communities of believers. His life exemplified how to serve Allah through serving His creation.',
            arabic: 'وَاذْكُرْ إِسْمَاعِيلَ وَالْيَسَعَ وَذَا الْكِفْلِ وَكُلٌّ مِّنَ الْأَخْيَارِ',
            translation: 'And remember Ishmael, Al-Yasa, and Dhul-Kifl. And all are among the outstanding',
            reference: 'Quran 38:48',
            lessons: [
                'Continue the good work started by your predecessors',
                'Use miraculous gifts to help people in need',
                'Combine preaching with practical service',
                'Healing and helping others draws people to truth',
                'Build communities of believers through service',
                'Remain humble despite extraordinary abilities'
            ],
            timeline: [
                { date: 'Discipleship', event: 'Became student and successor of Ilyas' },
                { date: 'Miraculous ministry', event: 'Granted power to heal, feed, and even resurrect' },
                { date: 'Community building', event: 'Established groups of believing followers' },
                { date: 'Continued mission', event: 'Maintained call to monotheism through service' },
                { date: 'Legacy', event: 'Left behind strong communities of faithful believers' }
            ],
            videoTitle: 'The Compassionate Service of Prophet Al-Yasa',
            videoDescription: 'Continuing divine mission through miracles and service.',
            videoUrl: 'https://www.youtube.com/embed/ALYASA_VIDEO_ID'
        },

        hud: {
            title: 'Hud (AS)',
            subtitle: 'Warner to the Ad - The Faithful Messenger',
            icon: 'fas fa-mountain',
            story: 'Prophet Hud (AS) was sent to the tribe of Ad, who lived in the region of Ahqaf (in present-day Yemen and Oman). The people of Ad were known for their physical strength, tall stature, and impressive architecture, building great monuments and cities. However, they became arrogant and turned to idol worship, oppressing the weak and denying Allah. Hud called them to abandon idols and worship Allah alone, but they ridiculed him. Eventually, Allah destroyed them with a devastating wind, while Hud and his followers were saved.',
            arabic: 'وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ أَفَلَا تَتَّقُونَ',
            translation: 'And to [the tribe of] Ad [We sent] their brother Hud. He said, "O my people, worship Allah; you have no deity other than Him. Then will you not fear Him?"',
            reference: 'Quran 11:50',
            lessons: [
                'Physical strength should not lead to spiritual arrogance',
                'Impressive achievements mean nothing without faith',
                'Don\'t oppress others due to your power or abilities',
                'Mockery of divine messengers brings consequences',
                'True strength comes from submission to Allah',
                'Material progress without spiritual guidance leads to destruction'
            ],
            timeline: [
                { date: 'Mission', event: 'Sent to the powerful tribe of Ad' },
                { date: 'Preaching', event: 'Called them to abandon idols and worship Allah' },
                { date: 'Rejection', event: 'People mocked him and refused his message' },
                { date: 'Warning', event: 'Warned of divine punishment for their arrogance' },
                { date: 'Destruction', event: 'Devastating wind destroyed the Ad while Hud was saved' }
            ],
            videoTitle: 'The Warning of Prophet Hud to the Mighty Ad',
            videoDescription: 'True strength vs. arrogance, and divine justice.',
            videoUrl: 'https://www.youtube.com/embed/HUD_VIDEO_ID'
        },

        saleh: {
            title: 'Saleh (AS)',
            subtitle: 'The Righteous - Prophet of the She-Camel',
            icon: 'fas fa-tree',
            story: 'Prophet Saleh (AS) was sent to the tribe of Thamud, who lived in the rocky region of Hijr (in present-day Saudi Arabia). They were skilled in carving homes and monuments from mountains but had turned to idol worship. When they demanded a miracle, Allah sent them a magnificent she-camel as a sign. Saleh told them the camel was sacred and should be allowed to drink freely. Despite the warning, some arrogant leaders killed the camel. As punishment, Allah destroyed the Thamud with a mighty blast, while Saleh and the believers were saved.',
            arabic: 'وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا قَالَ يَا قَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ',
            translation: 'And to [the tribe of] Thamud [We sent] their brother Salih. He said, "O my people, worship Allah; you have no deity other than Him"',
            reference: 'Quran 11:61',
            lessons: [
                'Respect Allah\'s signs and miracles in creation',
                'Don\'t destroy Allah\'s blessings due to arrogance',
                'Skill in worldly crafts should be combined with faith',
                'Leaders who corrupt others face severe accountability',
                'Environmental destruction can bring divine punishment',
                'Protect and preserve what Allah has blessed you with'
            ],
            timeline: [
                { date: 'Mission', event: 'Sent to the Thamud tribe who carved homes from mountains' },
                { date: 'Miracle requested', event: 'People demanded a sign to prove his prophethood' },
                { date: 'She-camel sent', event: 'Allah sent miraculous she-camel as a sign' },
                { date: 'Warning given', event: 'Told people to respect the camel and let it graze freely' },
                { date: 'Camel killed', event: 'Arrogant leaders killed the sacred camel' },
                { date: 'Punishment', event: 'Mighty blast destroyed Thamud, Saleh and believers saved' }
            ],
            videoTitle: 'The Sacred She-Camel of Prophet Saleh',
            videoDescription: 'Divine signs, environmental respect, and the consequences of arrogance.',
            videoUrl: 'https://www.youtube.com/embed/SALEH_VIDEO_ID'
        },

        shuayb: {
            title: 'Shu\'ayb (AS)',
            subtitle: 'The Eloquent Preacher - Champion of Justice',
            icon: 'fas fa-balance-scale',
            story: 'Prophet Shu\'ayb (AS) was sent to the people of Madyan and the dwellers of Al-Aikah, who were known for their dishonest business practices. They would cheat in weights and measures, rob travelers, and spread corruption. Shu\'ayb was known for his eloquent speech and was called "Khatib al-Anbiya" (the preacher of prophets). He called them to worship Allah and practice honesty in trade. When they rejected his message and threatened him, Allah destroyed them with a mighty blast and earthquake, while Shu\'ayb and his followers were saved.',
            arabic: 'أَوْفُوا الْكَيْلَ وَلَا تَكُونُوا مِنَ الْمُخْسِرِينَ',
            translation: 'Give full measure and do not be of those who cause loss',
            reference: 'Quran 26:181',
            lessons: [
                'Honesty in business is a fundamental religious principle',
                'Use eloquent speech to promote justice and truth',
                'Economic corruption destroys society\'s moral fabric',
                'Stand against cheating and fraudulent practices',
                'Combine worship of Allah with ethical business conduct',
                'Divine punishment follows persistent economic injustice'
            ],
            timeline: [
                { date: 'Mission', event: 'Sent to dishonest merchants of Madyan' },
                { date: 'Preaching justice', event: 'Called for honest weights, measures, and fair trade' },
                { date: 'Eloquent warnings', event: 'Used excellent oratory skills to warn of consequences' },
                { date: 'Rejection', event: 'People rejected his message and threatened expulsion' },
                { date: 'Divine punishment', event: 'Earthquake and blast destroyed the corrupt community' }
            ],
            videoTitle: 'The Just Commerce of Prophet Shu\'ayb',
            videoDescription: 'Eloquent preaching for business ethics and divine justice.',
            videoUrl: 'https://www.youtube.com/embed/SHUAYB_VIDEO_ID'
        },

        ayub: {
            title: 'Ayub (AS)',
            subtitle: 'Job the Patient - The Tested Believer',
            icon: 'fas fa-heart-broken',
            story: 'Prophet Ayub (AS) was a wealthy and righteous man blessed with large herds, vast lands, and a loving family. Satan challenged Allah that Ayub\'s faith would crumble if he faced hardship. Allah permitted Satan to test Ayub, who lost his wealth, children, and health, suffering from painful diseases. Despite his tremendous suffering, Ayub never cursed Allah or lost faith, instead praising Him and maintaining patience. After years of trial, Allah restored his health, wealth, and family twofold, making his story a perfect example of patience during adversity.',
            arabic: 'وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
            translation: 'And [mention] Job, when he called to his Lord, "Indeed, adversity has touched me, and you are the most merciful of the merciful"',
            reference: 'Quran 21:83',
            lessons: [
                'True faith is proven through hardship, not just ease',
                'Patience during suffering leads to great rewards',
                'Never lose hope in Allah\'s mercy during trials',
                'Wealth and health are tests, not permanent possessions',
                'Complaints should be made to Allah, not against Him',
                'After every difficulty, Allah provides relief and reward'
            ],
            timeline: [
                { date: 'Prosperity', event: 'Blessed with wealth, family, and perfect health' },
                { date: 'Satan\'s challenge', event: 'Satan requested permission to test Ayub\'s faith' },
                { date: 'Loss begins', event: 'Lost livestock, property, and children in disasters' },
                { date: 'Illness strikes', event: 'Afflicted with painful skin disease' },
                { date: 'Years of patience', event: 'Maintained faith and patience despite extreme suffering' },
                { date: 'Divine restoration', event: 'Allah restored health, wealth, and family in double measure' }
            ],
            videoTitle: 'The Magnificent Patience of Prophet Ayub',
            videoDescription: 'Ultimate test of faith and the reward of unwavering patience.',
            videoUrl: 'https://www.youtube.com/embed/AYUB_VIDEO_ID'
        },

        dhulkifl: {
            title: 'Dhul-Kifl (AS)',
            subtitle: 'The Guarantor - Man of Promise',
            icon: 'fas fa-handshake',
            story: 'Prophet Dhul-Kifl (AS) is mentioned briefly in the Quran as one of the patient and righteous prophets. His name suggests someone who takes responsibility and guarantees to fulfill commitments. According to some traditions, he was given this name because he guaranteed to fast during the day, pray at night, and never get angry while judging between people. He is believed to have been a prophet who lived in Iraq, calling people to righteousness and maintaining justice in his community. His story emphasizes the importance of keeping promises and being reliable.',
            arabic: 'وَإِسْمَاعِيلَ وَإِدْرِيسَ وَذَا الْكِفْلِ كُلٌّ مِّنَ الصَّابِرِينَ',
            translation: 'And [mention] Ishmael and Idris and Dhul-Kifl; all were of the patient',
            reference: 'Quran 21:85',
            lessons: [
                'Keep all promises and commitments you make',
                'Be someone others can rely on completely',
                'Control your anger, especially when in positions of authority',
                'Regular worship and fasting build spiritual strength',
                'Justice requires patience and emotional control',
                'Reliability and trustworthiness are prophetic qualities'
            ],
            timeline: [
                { date: 'Prophethood', event: 'Called to serve as prophet and judge' },
                { date: 'Guarantees made', event: 'Promised to fast by day, pray by night, never anger' },
                { date: 'Just leadership', event: 'Served as fair and patient judge for his people' },
                { date: 'Consistent worship', event: 'Maintained his spiritual commitments throughout life' },
                { date: 'Legacy', event: 'Remembered for reliability and keeping promises' }
            ],
            videoTitle: 'The Reliable Promise-Keeping of Prophet Dhul-Kifl',
            videoDescription: 'Trustworthiness, patience, and spiritual discipline.',
            videoUrl: 'https://www.youtube.com/embed/DHULKIFL_VIDEO_ID'
        },


        default: {
            title: 'Prophet of Allah',
            subtitle: 'Messenger and Guide',
            icon: 'fas fa-user',
            story: 'This prophet was chosen by Allah to guide his people to the straight path. Like all prophets, he called people to worship Allah alone and live righteously.',
            arabic: 'وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ',
            translation: 'And We send not the messengers except as bringers of good tidings and warners.',
            reference: 'Quran 18:56',
            lessons: [
                'Worship Allah alone without partners',
                'Live a life of righteousness and justice',
                'Be patient in calling others to truth',
                'Trust in Allah\'s wisdom and timing'
            ],
            timeline: [
                { date: 'Birth', event: 'Born into a community needing guidance' },
                { date: 'Prophethood', event: 'Received message from Allah' },
                { date: 'Mission', event: 'Called people to worship Allah alone' },
                { date: 'Legacy', event: 'Left behind lessons for future generations' }
            ],
            videoTitle: 'Stories of Prophets in Islam',
            videoDescription: 'Learn from the lives of Allah\'s chosen messengers.',
            videoUrl: 'https://www.youtube.com/embed/DEFAULT_PROPHET_VIDEO_ID'
        }
    };

    // Populate prophet detail page
    function populateProphetDetail(data) {
        document.getElementById('prophetTitle').textContent = data.title;
        document.getElementById('prophetSubtitle').textContent = data.subtitle;
        document.getElementById('prophetIcon').innerHTML = `<i class="${data.icon}"></i>`;

        document.getElementById('prophetStory').textContent = data.story;
        document.getElementById('prophetArabic').textContent = data.arabic;
        document.getElementById('prophetTranslation').textContent = data.translation;
        document.getElementById('prophetReference').textContent = '- ' + data.reference;

        // Populate lessons
        const lessonsList = document.getElementById('prophetLessons');
        lessonsList.innerHTML = data.lessons.map(lesson => `
            <div class="lesson-item">
                <i class="fas fa-check-circle"></i>
                <span>${lesson}</span>
            </div>
        `).join('');

        // Populate timeline
        const timelineList = document.getElementById('prophetTimeline');
        timelineList.innerHTML = data.timeline.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-event">${item.event}</div>
            </div>
        `).join('');

        document.getElementById('prophetVideoTitle').textContent = data.videoTitle;
        document.getElementById('prophetVideoDescription').textContent = data.videoDescription;

        // Handle video URL
        const youtubeIframe = document.getElementById('prophetYoutubeVideo');
        const videoThumbnail = document.querySelector('#prophetVideoContainer .video-thumbnail');

        if (data.videoUrl) {
            youtubeIframe.src = data.videoUrl;
            youtubeIframe.style.display = 'block';
            videoThumbnail.style.display = 'none';
        } else {
            youtubeIframe.style.display = 'none';
            videoThumbnail.style.display = 'flex';
        }
    }
});

// Add this to your existing JavaScript file

document.addEventListener('DOMContentLoaded', function () {
    // Wisdom elements
    const wisdomSection = document.getElementById('wisdomSection');
    const wisdomDetailSection = document.getElementById('wisdomDetailSection');
    const homeSection = document.getElementById('homeSection');
    const backToHomeFromWisdomBtn = document.getElementById('backToHomeFromWisdom');
    const backToWisdomBtn = document.getElementById('backToWisdom');
    const wisdomCards = document.querySelectorAll('.compact-wisdom-card');

    // Home card click - Prophetic Wisdom
    const propheticWisdomCard = document.querySelector('[data-category="prophets"][data-type="wisdom"]');
    if (propheticWisdomCard) {
        propheticWisdomCard.addEventListener('click', function () {
            showWisdomSection();
        });
    }

    // Back navigation buttons
    backToHomeFromWisdomBtn.addEventListener('click', function () {
        hideWisdomSection();
    });

    backToWisdomBtn.addEventListener('click', function () {
        hideWisdomDetail();
    });

    // Wisdom card clicks
    wisdomCards.forEach(card => {
        card.addEventListener('click', function () {
            const prophet = this.getAttribute('data-prophet');
            showWisdomDetail(prophet);
        });
    });

    // Show wisdom section
    function showWisdomSection() {
        homeSection.classList.remove('active');
        wisdomSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide wisdom section
    function hideWisdomSection() {
        wisdomSection.classList.remove('active');
        homeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show wisdom detail
    function showWisdomDetail(prophetName) {
        const wisdomData = wisdomDataTemplate[prophetName] || wisdomDataTemplate.default;
        populateWisdomDetail(wisdomData);

        wisdomSection.classList.remove('active');
        wisdomDetailSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide wisdom detail
    function hideWisdomDetail() {
        wisdomDetailSection.classList.remove('active');
        wisdomSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Wisdom data template (sample for few prophets)
    const wisdomDataTemplate = {
        muhammad: {
            title: 'Wisdom of Muhammad (SAW)',
            subtitle: 'The pinnacle of prophetic wisdom and guidance',
            icon: 'fas fa-moon',
            introduction: 'Prophet Muhammad (SAW) represents the perfect example of wisdom in action. His teachings cover every aspect of human life, from personal conduct to social justice, from family relations to business ethics. His wisdom transforms not just individual lives but entire societies.',
            teachings: [
                'Speak truthfully even if it harms you',
                'Treat your neighbors with kindness and respect',
                'Seek knowledge from cradle to grave',
                'Practice moderation in all affairs',
                'Judge with justice and fairness',
                'Show mercy to gain Allah\'s mercy'
            ],
            hadith: 'The best of people are those who benefit others the most.',
            hadithSource: 'Prophet Muhammad (PBUH), Ahmad',
            practicalTips: [
                'Start each day with gratitude and positive intentions',
                'Practice active listening in conversations',
                'Resolve conflicts through patient dialogue',
                'Give charity regularly, even if small amounts',
                'Maintain honesty in all business dealings',
                'Show respect to elders and kindness to children'
            ],
            videoTitle: 'Prophetic Wisdom for Modern Life',
            videoDescription: 'How to apply the Prophet\'s teachings in today\'s world.',
            videoUrl: 'https://www.youtube.com/embed/MUHAMMAD_WISDOM_VIDEO_ID'
        },

        ibrahim: {
            title: 'Wisdom of Ibrahim (AS)',
            subtitle: 'The Friend of Allah\'s guidance on faith and sacrifice',
            icon: 'fas fa-kaaba',
            introduction: 'Prophet Ibrahim (AS) teaches us about unwavering faith and complete trust in Allah. His wisdom shows us how to prioritize spiritual values over material attachments and how to build strong foundations for future generations.',
            teachings: [
                'Question false beliefs with wisdom and logic',
                'Put complete trust in Allah during trials',
                'Build lasting legacies for future generations',
                'Practice hospitality and generosity',
                'Make sacrifices for higher principles',
                'Establish places of worship and remembrance'
            ],
            hadith: 'Ibrahim was indeed a model of virtue, obedient to Allah and true in faith.',
            hadithSource: 'Quran 16:120',
            practicalTips: [
                'Question societal norms that contradict Islamic values',
                'Make decisions based on long-term spiritual benefits',
                'Welcome guests with genuine warmth and generosity',
                'Invest in building strong family foundations',
                'Be willing to sacrifice comfort for principles',
                'Create spaces for worship and reflection in your home'
            ],
            videoTitle: 'Ibrahim\'s Model of Faith and Sacrifice',
            videoDescription: 'Learning unwavering faith from Allah\'s beloved friend.',
            videoUrl: 'https://www.youtube.com/embed/IBRAHIM_WISDOM_VIDEO_ID'
        },

        yusuf: {
            title: 'Wisdom of Yusuf (AS)',
            subtitle: 'Lessons in forgiveness, patience, and leadership',
            icon: 'fas fa-crown',
            introduction: 'Prophet Yusuf (AS) demonstrates how to maintain righteousness through adversity, practice forgiveness toward those who wrong us, and use positions of power for justice and mercy. His wisdom teaches emotional intelligence and moral leadership.',
            teachings: [
                'Maintain purity and righteousness despite temptation',
                'Use hardships as opportunities for growth',
                'Forgive those who wronged you in the past',
                'Lead with wisdom and justice when given authority',
                'Trust in Allah\'s plan even in difficult times',
                'Help others without expecting recognition'
            ],
            hadith: 'The believer is not one who eats his fill while his neighbor goes hungry.',
            hadithSource: 'Prophet Muhammad (PBUH), relating to Yusuf\'s character',
            practicalTips: [
                'Resist temptations by remembering Allah\'s presence',
                'View challenges as tests that strengthen character',
                'Practice forgiveness to heal your own heart',
                'Use any leadership position to serve others',
                'Look for wisdom and lessons in difficult experiences',
                'Help those in need without seeking praise'
            ],
            videoTitle: 'Yusuf\'s Journey: From Hardship to Leadership',
            videoDescription: 'How adversity shapes wise and compassionate leaders.',
            videoUrl: 'https://www.youtube.com/embed/YUSUF_WISDOM_VIDEO_ID'
        },

        // Add more prophets as needed...
        // Add these remaining prophets to your existing wisdomDataTemplate object:

        musa: {
            title: 'Wisdom of Musa (AS)',
            subtitle: 'The Kalim Allah - Leadership and divine communication',
            icon: 'fas fa-tablets',
            introduction: 'Prophet Musa (AS) demonstrates the wisdom of courageous leadership against oppression. His teachings show us how to stand up for justice, communicate effectively with different audiences, and maintain patience during long struggles for truth.',
            teachings: [
                'Stand courageously against oppression and tyranny',
                'Use clear communication to convey divine messages',
                'Practice patience during long-term missions',
                'Seek Allah\'s guidance in decision-making',
                'Unite people under just leadership',
                'Never compromise on principles for temporary gains'
            ],
            hadith: 'Musa was a shy and modest person who used to cover his body completely.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Speak truth to power without fear',
                'Prepare thoroughly before confronting challenges',
                'Build strong support systems in your community',
                'Use patience as a tool for long-term success',
                'Practice humility despite positions of authority',
                'Seek Allah\'s help through regular prayer and supplication'
            ],
            videoTitle: 'Leadership Lessons from Prophet Musa',
            videoDescription: 'How to lead with courage and divine guidance.',
            videoUrl: 'https://www.youtube.com/embed/MUSA_WISDOM_VIDEO_ID'
        },

        isa: {
            title: 'Wisdom of Isa (AS)',
            subtitle: 'The Ruh Allah - Compassion and spiritual healing',
            icon: 'fas fa-heart',
            introduction: 'Prophet Isa (AS) teaches us the wisdom of compassion, spiritual healing, and living simply. His message emphasizes love for Allah, caring for the less fortunate, and focusing on spiritual rather than material wealth.',
            teachings: [
                'Show compassion to all of Allah\'s creation',
                'Heal others through prayer and spiritual connection',
                'Live simply and avoid attachment to worldly possessions',
                'Teach through example and gentle guidance',
                'Practice forgiveness even toward enemies',
                'Focus on spiritual development over material gain'
            ],
            hadith: 'Jesus will descend and will kill the pig and break the cross.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Practice daily acts of compassion and kindness',
                'Simplify your lifestyle and reduce material desires',
                'Use gentle speech when giving advice to others',
                'Volunteer to help those in need in your community',
                'Focus on healing relationships through forgiveness',
                'Spend time in spiritual reflection and prayer'
            ],
            videoTitle: 'The Compassionate Wisdom of Prophet Isa',
            videoDescription: 'Learning spiritual healing and simple living.',
            videoUrl: 'https://www.youtube.com/embed/ISA_WISDOM_VIDEO_ID'
        },

        nuh: {
            title: 'Wisdom of Nuh (AS)',
            subtitle: 'The Patient Caller - Perseverance through adversity',
            icon: 'fas fa-ship',
            introduction: 'Prophet Nuh (AS) exemplifies the wisdom of patience and perseverance. For 950 years, he called his people to Allah, teaching us that consistent effort over time, even with small results, is more valuable than quick victories.',
            teachings: [
                'Practice extraordinary patience in calling others to truth',
                'Never give up on people, even after repeated rejections',
                'Prepare for challenges with practical planning',
                'Trust Allah\'s timing and wisdom in all outcomes',
                'Maintain hope despite overwhelming opposition',
                'Focus on your duty rather than immediate results'
            ],
            hadith: 'Noah remained among his people for a thousand years minus fifty years.',
            hadithSource: 'Quran 29:14',
            practicalTips: [
                'Set long-term goals and work consistently toward them',
                'Don\'t lose hope when facing repeated setbacks',
                'Prepare thoroughly for challenges you can foresee',
                'Focus on continuous effort rather than immediate success',
                'Maintain strong faith during periods of opposition',
                'Support others who are working toward righteous goals'
            ],
            videoTitle: 'The Patience of Prophet Nuh Through Adversity',
            videoDescription: 'Learning perseverance through long-term challenges.',
            videoUrl: 'https://www.youtube.com/embed/NUH_WISDOM_VIDEO_ID'
        },

        adam: {
            title: 'Wisdom of Adam (AS)',
            subtitle: 'The First Human - Repentance and new beginnings',
            icon: 'fas fa-seedling',
            introduction: 'Prophet Adam (AS) teaches us the wisdom of sincere repentance, accepting responsibility for our mistakes, and the power of new beginnings. His story shows that even after falling, we can rise again through Allah\'s mercy.',
            teachings: [
                'Accept responsibility for your mistakes without excuses',
                'Seek immediate forgiveness when you err',
                'Trust in Allah\'s mercy and capacity for forgiveness',
                'Learn from errors to avoid repeating them',
                'Help others learn from your experiences',
                'Never despair of Allah\'s forgiveness'
            ],
            hadith: 'If the son of Adam were given a valley full of gold, he would want to have two valleys.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Make immediate tawbah when you realize a mistake',
                'Don\'t make excuses or blame others for your errors',
                'Use your experiences to guide and help others',
                'Practice gratitude for Allah\'s continuous mercy',
                'Approach each day as a new opportunity for righteousness',
                'Share your learning experiences to benefit your community'
            ],
            videoTitle: 'Repentance and New Beginnings with Prophet Adam',
            videoDescription: 'The wisdom of sincere repentance and fresh starts.',
            videoUrl: 'https://www.youtube.com/embed/ADAM_WISDOM_VIDEO_ID'
        },

        dawud: {
            title: 'Wisdom of Dawud (AS)',
            subtitle: 'The Melodious King - Justice and spiritual expression',
            icon: 'fas fa-crown',
            introduction: 'Prophet Dawud (AS) combines the wisdom of just leadership with spiritual expression. His Zabur (Psalms) show us how to communicate with Allah through beautiful worship while maintaining justice and fairness in worldly affairs.',
            teachings: [
                'Combine spiritual devotion with practical leadership',
                'Use artistic expression to glorify Allah',
                'Maintain justice and fairness in all judgments',
                'Express gratitude through beautiful worship',
                'Balance worldly responsibilities with spiritual duties',
                'Use your talents in service of Allah and humanity'
            ],
            hadith: 'David used to eat from the earnings of his manual labor.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Develop your creative talents to serve Allah',
                'Make decisions based on justice rather than personal preference',
                'Express your spirituality through art, music, or poetry',
                'Work with your hands and earn through honest labor',
                'Balance leadership responsibilities with personal worship',
                'Use your position to protect and serve the vulnerable'
            ],
            videoTitle: 'The Just Leadership of Prophet Dawud',
            videoDescription: 'Combining spiritual expression with fair governance.',
            videoUrl: 'https://www.youtube.com/embed/DAWUD_WISDOM_VIDEO_ID'
        },

        sulaiman: {
            title: 'Wisdom of Sulaiman (AS)',
            subtitle: 'The Wise King - Power with humility and justice',
            icon: 'fas fa-chess-king',
            introduction: 'Prophet Sulaiman (AS) teaches us the wisdom of using great power with humility and justice. Despite controlling wind, jinn, and animals, he remained humble before Allah and used his abilities to serve truth and justice.',
            teachings: [
                'Use power and authority to serve justice and truth',
                'Remain humble despite great achievements and abilities',
                'Make wise decisions through consultation and reflection',
                'Use resources responsibly for the benefit of all',
                'Seek Allah\'s guidance in all leadership decisions',
                'Balance firmness with compassion in governance'
            ],
            hadith: 'Solomon inherited David in knowledge and prophethood, not in wealth.',
            hadithSource: 'Islamic scholars interpretation',
            practicalTips: [
                'Use any authority you have to benefit others',
                'Make decisions through careful consultation and prayer',
                'Practice gratitude for the abilities Allah has given you',
                'Remain humble regardless of your achievements',
                'Seek wisdom from multiple sources before important decisions',
                'Use your resources to help those who cannot help themselves'
            ],
            videoTitle: 'The Wise Governance of Prophet Sulaiman',
            videoDescription: 'Using power responsibly with divine wisdom.',
            videoUrl: 'https://www.youtube.com/embed/SULAIMAN_WISDOM_VIDEO_ID'
        },

        yunus: {
            title: 'Wisdom of Yunus (AS)',
            subtitle: 'The Man of the Fish - Patience and divine timing',
            icon: 'fas fa-fish',
            introduction: 'Prophet Yunus (AS) teaches us the wisdom of trusting Allah\'s timing and the power of sincere repentance. His experience shows that even when we make mistakes in judgment, Allah\'s mercy can guide us back to the right path.',
            teachings: [
                'Trust Allah\'s timing rather than your own impatience',
                'Sincere repentance can transform any situation',
                'Never lose hope in Allah\'s mercy, even in darkness',
                'Learn patience through difficult experiences',
                'Return to your duties with renewed commitment',
                'Accept that Allah\'s wisdom surpasses human understanding'
            ],
            hadith: 'No one should say that I am better than Yunus ibn Matta.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Practice the dua of Yunus in times of difficulty',
                'Don\'t abandon your responsibilities due to frustration',
                'Trust that Allah\'s timing is always perfect',
                'Use periods of hardship for deep spiritual reflection',
                'Return to your duties with renewed perspective after trials',
                'Remember that Allah\'s mercy is always greater than our mistakes'
            ],
            videoTitle: 'The Journey of Prophet Yunus: Patience and Repentance',
            videoDescription: 'Learning trust in Allah\'s timing through adversity.',
            videoUrl: 'https://www.youtube.com/embed/YUNUS_WISDOM_VIDEO_ID'
        },

        idris: {
            title: 'Wisdom of Idris (AS)',
            subtitle: 'The Elevated One - Knowledge and spiritual ascension',
            icon: 'fas fa-star',
            introduction: 'Prophet Idris (AS) represents the wisdom of seeking knowledge and spiritual elevation. He was among the first to write with a pen and was raised to a high station, teaching us the value of learning and spiritual growth.',
            teachings: [
                'Pursue knowledge as a path to spiritual elevation',
                'Use writing and recording to preserve wisdom',
                'Practice patience and perseverance in learning',
                'Seek closeness to Allah through knowledge and worship',
                'Share knowledge with others for collective benefit',
                'Balance intellectual pursuits with spiritual development'
            ],
            hadith: 'And We raised him to a high station.',
            hadithSource: 'Quran 19:57',
            practicalTips: [
                'Dedicate time daily to learning something new',
                'Record important insights and wisdom you gain',
                'Teach others what you have learned',
                'Combine religious knowledge with practical skills',
                'Use knowledge to draw closer to Allah',
                'Practice patience in your educational journey'
            ],
            videoTitle: 'The Knowledge and Elevation of Prophet Idris',
            videoDescription: 'Seeking spiritual growth through knowledge and learning.',
            videoUrl: 'https://www.youtube.com/embed/IDRIS_WISDOM_VIDEO_ID'
        },

        ismail: {
            title: 'Wisdom of Ismail (AS)',
            subtitle: 'The Willing Sacrifice - Obedience and submission',
            icon: 'fas fa-hands-praying',
            introduction: 'Prophet Ismail (AS) teaches us the wisdom of complete obedience to Allah, even in the most difficult circumstances. His willingness to be sacrificed shows the highest level of submission and trust in Allah\'s wisdom.',
            teachings: [
                'Practice complete submission to Allah\'s will',
                'Show respect and obedience to righteous parents',
                'Face tests with courage and tranquility',
                'Trust that Allah\'s commands contain hidden wisdom',
                'Support others in fulfilling their religious duties',
                'Find peace in surrendering to Allah\'s plan'
            ],
            hadith: 'When the boy reached the age of serious work with him, he said: O my son! I see in vision that I offer you in sacrifice.',
            hadithSource: 'Quran 37:102',
            practicalTips: [
                'Practice saying "Yes" to Allah\'s commands without hesitation',
                'Support family members in their religious obligations',
                'Approach difficult tests with calm and trust',
                'Look for wisdom in Allah\'s commands, even when unclear',
                'Help others fulfill their duties to Allah',
                'Find comfort in submission rather than resistance'
            ],
            videoTitle: 'The Perfect Submission of Prophet Ismail',
            videoDescription: 'Learning complete obedience and trust in Allah.',
            videoUrl: 'https://www.youtube.com/embed/ISMAIL_WISDOM_VIDEO_ID'
        },

        ishaq: {
            title: 'Wisdom of Ishaq (AS)',
            subtitle: 'The Blessed Son - Promise fulfillment and continuity',
            icon: 'fas fa-gift',
            introduction: 'Prophet Ishaq (AS) represents the wisdom of being a blessing to others and maintaining the continuity of righteous legacy. His life shows how Allah fulfills His promises and how we can be part of His greater plan.',
            teachings: [
                'Trust in Allah\'s promises even when they seem delayed',
                'Be a source of blessing and joy to your family',
                'Maintain the religious traditions of your ancestors',
                'Support the continuation of righteous lineages',
                'Practice gratitude for being part of Allah\'s plan',
                'Use your position to benefit future generations'
            ],
            hadith: 'And We gave him glad tidings of Isaac, a prophet from among the righteous.',
            hadithSource: 'Quran 37:112',
            practicalTips: [
                'Work to be a blessing in your family and community',
                'Maintain and pass on righteous family traditions',
                'Trust that Allah\'s promises will be fulfilled in His timing',
                'Invest in the spiritual development of future generations',
                'Practice gratitude for the blessings you\'ve inherited',
                'Use your position to create positive impact for others'
            ],
            videoTitle: 'The Blessed Legacy of Prophet Ishaq',
            videoDescription: 'Being a blessing and maintaining righteous continuity.',
            videoUrl: 'https://www.youtube.com/embed/ISHAQ_WISDOM_VIDEO_ID'
        },

        yaqub: {
            title: 'Wisdom of Yaqub (AS)',
            subtitle: 'Israel - Patience through family trials',
            icon: 'fas fa-users',
            introduction: 'Prophet Yaqub (AS) teaches us the wisdom of maintaining faith and patience through family difficulties. His experience with his sons, especially Yusuf, shows how to handle family conflicts with wisdom and eventual forgiveness.',
            teachings: [
                'Practice patience through family trials and conflicts',
                'Maintain hope even in seemingly hopeless situations',
                'Trust Allah\'s plan when dealing with difficult family members',
                'Use wisdom and diplomacy in family relationships',
                'Practice forgiveness and reconciliation',
                'Maintain prayer and connection with Allah during hardships'
            ],
            hadith: 'I only complain of my distraction and grief to Allah.',
            hadithSource: 'Quran 12:86',
            practicalTips: [
                'Address family conflicts with patience and wisdom',
                'Maintain hope and prayer during family difficulties',
                'Practice forgiveness toward family members who wrong you',
                'Take your complaints and grief to Allah in prayer',
                'Work toward reconciliation rather than perpetual conflict',
                'Trust that family difficulties can eventually lead to blessings'
            ],
            videoTitle: 'Family Wisdom from Prophet Yaqub',
            videoDescription: 'Navigating family trials with patience and faith.',
            videoUrl: 'https://www.youtube.com/embed/YAQUB_WISDOM_VIDEO_ID'
        },

        lut: {
            title: 'Wisdom of Lut (AS)',
            subtitle: 'The Warner - Moral courage and social responsibility',
            icon: 'fas fa-exclamation-triangle',
            introduction: 'Prophet Lut (AS) teaches us the wisdom of moral courage and social responsibility. He stood against the moral corruption of his society, showing us how to maintain righteousness even when surrounded by widespread immorality.',
            teachings: [
                'Stand firm against moral corruption in society',
                'Maintain your principles even when in the minority',
                'Warn others about the consequences of immoral behavior',
                'Protect your family from negative social influences',
                'Seek righteous companions who support your values',
                'Trust Allah for protection when doing what\'s right'
            ],
            hadith: 'And Lot, when he said to his people: Do you commit such immorality as no one has preceded you with from among the worlds?',
            hadithSource: 'Quran 7:80',
            practicalTips: [
                'Speak out against immorality when you encounter it',
                'Choose friends and companions who share your values',
                'Protect your family from negative social influences',
                'Don\'t compromise your principles for social acceptance',
                'Support others who are standing for righteousness',
                'Trust Allah to protect you when you stand for what\'s right'
            ],
            videoTitle: 'The Moral Courage of Prophet Lut',
            videoDescription: 'Standing for righteousness in corrupt societies.',
            videoUrl: 'https://www.youtube.com/embed/LUT_WISDOM_VIDEO_ID'
        },

        harun: {
            title: 'Wisdom of Harun (AS)',
            subtitle: 'The Eloquent Speaker - Support and communication',
            icon: 'fas fa-microphone',
            introduction: 'Prophet Harun (AS) teaches us the wisdom of being an effective supporter and communicator. As Musa\'s brother and spokesman, he shows how to use eloquent speech in service of truth and how to provide loyal support to righteous leaders.',
            teachings: [
                'Use eloquent speech to convey truth clearly',
                'Provide loyal support to righteous leaders',
                'Practice diplomacy and tact in difficult situations',
                'Work as a team member rather than always seeking leadership',
                'Use your communication skills to serve Allah\'s message',
                'Be patient and supportive during long-term missions'
            ],
            hadith: 'And We appointed for him his brother Aaron as a minister.',
            hadithSource: 'Quran 20:29-30',
            practicalTips: [
                'Develop your communication skills to serve good causes',
                'Support righteous leaders in your community',
                'Practice clear and respectful communication',
                'Work well as part of a team toward common goals',
                'Use diplomacy to resolve conflicts and misunderstandings',
                'Be patient and loyal in supporting long-term good works'
            ],
            videoTitle: 'The Supportive Leadership of Prophet Harun',
            videoDescription: 'Effective communication and loyal support for truth.',
            videoUrl: 'https://www.youtube.com/embed/HARUN_WISDOM_VIDEO_ID'
        },

        zakariyya: {
            title: 'Wisdom of Zakariyya (AS)',
            subtitle: 'The Persistent Supplicant - Prayer and hope in old age',
            icon: 'fas fa-praying-hands',
            introduction: 'Prophet Zakariyya (AS) teaches us the wisdom of persistent prayer and maintaining hope even in old age. His sincere supplications for a righteous child show us how to approach Allah with humility and trust in His timing.',
            teachings: [
                'Practice persistent and humble supplication',
                'Maintain hope in Allah\'s mercy regardless of your age',
                'Seek righteous offspring who will continue good work',
                'Trust Allah\'s timing for answering prayers',
                'Combine supplication with righteous action',
                'Express gratitude when prayers are answered'
            ],
            hadith: 'My Lord, do not leave me alone [with no heir], while you are the best of inheritors.',
            hadithSource: 'Quran 21:89',
            practicalTips: [
                'Make consistent, heartfelt dua for your deepest needs',
                'Don\'t give up hope due to age or circumstances',
                'Pray for righteous children and family members',
                'Express gratitude when Allah answers your prayers',
                'Combine prayer with practical action toward your goals',
                'Trust that Allah knows the best timing for everything'
            ],
            videoTitle: 'The Persistent Prayers of Prophet Zakariyya',
            videoDescription: 'Maintaining hope and faith through persistent supplication.',
            videoUrl: 'https://www.youtube.com/embed/ZAKARIYYA_WISDOM_VIDEO_ID'
        },

        yahya: {
            title: 'Wisdom of Yahya (AS)',
            subtitle: 'John the Baptist - Purity and preparation',
            icon: 'fas fa-dove',
            introduction: 'Prophet Yahya (AS) teaches us the wisdom of maintaining purity and preparing others for important spiritual messages. His life of asceticism and dedication shows how to focus completely on spiritual rather than worldly pursuits.',
            teachings: [
                'Maintain purity in thought, word, and action',
                'Prepare others to receive important spiritual messages',
                'Practice asceticism and simplicity in lifestyle',
                'Dedicate your life completely to serving Allah',
                'Stand for truth even at personal cost',
                'Focus on spiritual rather than material development'
            ],
            hadith: 'And We gave him wisdom while yet a child.',
            hadithSource: 'Quran 19:12',
            practicalTips: [
                'Maintain high standards of personal purity',
                'Help prepare others for important spiritual experiences',
                'Simplify your lifestyle to focus on spiritual goals',
                'Use your influence to guide others toward righteousness',
                'Stand for truth regardless of personal consequences',
                'Practice regular fasting and spiritual disciplines'
            ],
            videoTitle: 'The Pure Dedication of Prophet Yahya',
            videoDescription: 'Living with complete spiritual focus and purity.',
            videoUrl: 'https://www.youtube.com/embed/YAHYA_WISDOM_VIDEO_ID'
        },

        ilyas: {
            title: 'Wisdom of Ilyas (AS)',
            subtitle: 'Elijah - Steadfastness against false worship',
            icon: 'fas fa-fire',
            introduction: 'Prophet Ilyas (AS) teaches us the wisdom of steadfast opposition to false worship and idol reverence. His courage in confronting widespread spiritual corruption shows how to maintain monotheistic faith in challenging environments.',
            teachings: [
                'Stand firmly against idol worship and false deities',
                'Maintain pure monotheistic faith in challenging times',
                'Confront spiritual corruption with courage',
                'Trust Allah for support when standing alone for truth',
                'Use dramatic examples to demonstrate Allah\'s power',
                'Remain patient during periods of spiritual isolation'
            ],
            hadith: 'And indeed, Ilyas was from among the messengers.',
            hadithSource: 'Quran 37:123',
            practicalTips: [
                'Identify and avoid any forms of shirk in your life',
                'Stand against practices that compromise pure monotheism',
                'Use clear examples to demonstrate Allah\'s power to others',
                'Remain patient when you feel spiritually isolated',
                'Trust Allah for strength when confronting widespread corruption',
                'Focus on purifying your own worship while guiding others'
            ],
            videoTitle: 'The Steadfast Faith of Prophet Ilyas',
            videoDescription: 'Maintaining pure monotheism against false worship.',
            videoUrl: 'https://www.youtube.com/embed/ILYAS_WISDOM_VIDEO_ID'
        },

        alyasa: {
            title: 'Wisdom of Al-Yasa (AS)',
            subtitle: 'Elisha - Continuation and faithful service',
            icon: 'fas fa-hands',
            introduction: 'Prophet Al-Yasa (AS) teaches us the wisdom of faithful continuation of righteous work. As the successor to Ilyas, he shows how to maintain and build upon the good work of previous generations while serving with dedication.',
            teachings: [
                'Continue and build upon the righteous work of predecessors',
                'Serve with dedication and faithfulness',
                'Maintain the spiritual legacy you inherit',
                'Use your abilities to help and heal others',
                'Practice humility while carrying important responsibilities',
                'Focus on service rather than personal recognition'
            ],
            hadith: 'And Elisha was from among the righteous.',
            hadithSource: 'Quran 6:86',
            practicalTips: [
                'Build upon the good work others have started',
                'Serve your community with dedication and faithfulness',
                'Use your skills and abilities to help those in need',
                'Maintain the positive traditions you inherit',
                'Focus on service rather than seeking personal recognition',
                'Practice humility while carrying important responsibilities'
            ],
            videoTitle: 'The Faithful Service of Prophet Al-Yasa',
            videoDescription: 'Continuing righteous work with dedication and humility.',
            videoUrl: 'https://www.youtube.com/embed/ALYASA_WISDOM_VIDEO_ID'
        },

        hud: {
            title: 'Wisdom of Hud (AS)',
            subtitle: 'Warner to Ad - Humility against arrogance',
            icon: 'fas fa-mountain',
            introduction: 'Prophet Hud (AS) teaches us the wisdom of maintaining humility and warning against the dangers of arrogance and material pride. His message to the people of Ad shows how worldly strength and wealth can lead to spiritual destruction.',
            teachings: [
                'Warn against the spiritual dangers of material arrogance',
                'Maintain humility despite worldly achievements',
                'Remember that all strength comes from Allah',
                'Use your abilities to serve others rather than dominate them',
                'Practice gratitude for material blessings',
                'Focus on spiritual rather than just physical development'
            ],
            hadith: 'And to Ad [We sent] their brother Hud.',
            hadithSource: 'Quran 11:50',
            practicalTips: [
                'Practice humility regardless of your worldly achievements',
                'Use your strengths to help rather than dominate others',
                'Remember that all abilities come from Allah',
                'Warning others against the dangers of pride and arrogance',
                'Focus on spiritual development alongside material progress',
                'Express gratitude for the blessings Allah has given you'
            ],
            videoTitle: 'The Humble Warning of Prophet Hud',
            videoDescription: 'Avoiding arrogance and maintaining humility in success.',
            videoUrl: 'https://www.youtube.com/embed/HUD_WISDOM_VIDEO_ID'
        },

        saleh: {
            title: 'Wisdom of Saleh (AS)',
            subtitle: 'The Righteous One - Signs and sustainable living',
            icon: 'fas fa-tree',
            introduction: 'Prophet Saleh (AS) teaches us the wisdom of recognizing Allah\'s signs in creation and living sustainably. His story with the she-camel shows how to respect Allah\'s creatures and the consequences of destroying what Allah has blessed.',
            teachings: [
                'Recognize and respect Allah\'s signs in creation',
                'Practice sustainable and responsible living',
                'Protect and care for Allah\'s creatures',
                'Avoid destroying blessings due to envy or greed',
                'Live righteously and call others to righteousness',
                'Accept that some people will reject clear guidance'
            ],
            hadith: 'And to Thamud [We sent] their brother Salih.',
            hadithSource: 'Quran 11:61',
            practicalTips: [
                'Practice environmental responsibility and sustainability',
                'Respect and protect animals and natural resources',
                'Recognize Allah\'s signs in the natural world around you',
                'Avoid destroying blessings due to jealousy or greed',
                'Live righteously and encourage others to do the same',
                'Accept that not everyone will accept your good advice'
            ],
            videoTitle: 'The Righteous Environmental Wisdom of Prophet Saleh',
            videoDescription: 'Sustainable living and respect for Allah\'s creation.',
            videoUrl: 'https://www.youtube.com/embed/SALEH_WISDOM_VIDEO_ID'
        },

        shuayb: {
            title: 'Wisdom of Shu\'ayb (AS)',
            subtitle: 'The Eloquent Preacher - Justice in commerce and society',
            icon: 'fas fa-balance-scale',
            introduction: 'Prophet Shu\'ayb (AS) teaches us the wisdom of maintaining justice in business and social dealings. Known for his eloquence, he shows how to combine beautiful speech with practical ethics in commercial and social relationships.',
            teachings: [
                'Maintain complete honesty and fairness in business',
                'Use eloquent speech to convey important messages',
                'Practice justice in all commercial transactions',
                'Combine spiritual guidance with practical ethics',
                'Stand against corruption in society',
                'Use your communication skills to promote righteousness'
            ],
            hadith: 'Give full measure and do not be of those who cause loss.',
            hadithSource: 'Quran 26:181',
            practicalTips: [
                'Always give full measure and fair value in business',
                'Develop your communication skills to serve good causes',
                'Practice complete honesty in all your transactions',
                'Stand against corruption and injustice in your community',
                'Use your influence to promote fair business practices',
                'Combine your spiritual beliefs with ethical behavior'
            ],
            videoTitle: 'The Just Commerce of Prophet Shu\'ayb',
            videoDescription: 'Ethical business practices and eloquent preaching.',
            videoUrl: 'https://www.youtube.com/embed/SHUAYB_WISDOM_VIDEO_ID'
        },

        ayub: {
            title: 'Wisdom of Ayub (AS)',
            subtitle: 'Job the Patient - Endurance through suffering',
            icon: 'fas fa-heart-broken',
            introduction: 'Prophet Ayub (AS) teaches us the wisdom of maintaining faith and patience through extreme suffering. His example shows how to endure loss, illness, and hardship while maintaining trust in Allah\'s ultimate wisdom and mercy.',
            teachings: [
                'Maintain faith and patience through extreme hardships',
                'Trust Allah\'s wisdom even when suffering seems meaningless',
                'Practice gratitude even during times of loss',
                'Avoid complaining and instead turn to Allah in prayer',
                'Help others who are suffering based on your experience',
                'Remember that trials can purify and strengthen faith'
            ],
            hadith: 'Indeed, adversity has touched me, and you are the most merciful of the merciful.',
            hadithSource: 'Quran 21:83',
            practicalTips: [
                'Practice patience and prayer during times of hardship',
                'Avoid complaining about your difficulties to others',
                'Look for wisdom and growth opportunities in trials',
                'Help and comfort others who are going through suffering',
                'Maintain gratitude for whatever blessings remain',
                'Trust that Allah has wisdom in allowing difficulties'
            ],
            videoTitle: 'The Patient Endurance of Prophet Ayub',
            videoDescription: 'Maintaining faith through extreme suffering and loss.',
            videoUrl: 'https://www.youtube.com/embed/AYUB_WISDOM_VIDEO_ID'
        },

        dhulkifl: {
            title: 'Wisdom of Dhul-Kifl (AS)',
            subtitle: 'The Guarantor - Reliability and promise-keeping',
            icon: 'fas fa-handshake',
            introduction: 'Prophet Dhul-Kifl (AS) teaches us the wisdom of reliability and keeping our promises. His name suggests someone who takes responsibility and guarantees to fulfill commitments, showing the importance of trustworthiness in all relationships.',
            teachings: [
                'Always fulfill your promises and commitments',
                'Take responsibility for tasks you agree to undertake',
                'Be reliable and trustworthy in all relationships',
                'Practice patience and perseverance in fulfilling duties',
                'Help others by guaranteeing support when needed',
                'Maintain integrity even when it becomes difficult'
            ],
            hadith: 'And Dhul-Kifl - all were of the patient.',
            hadithSource: 'Quran 21:85',
            practicalTips: [
                'Only make promises you intend to keep',
                'Follow through on all commitments you make',
                'Be someone others can rely on for support',
                'Take responsibility for your duties and obligations',
                'Help others by offering reliable assistance',
                'Maintain your integrity even when it costs you'
            ],
            videoTitle: 'The Reliable Promise-Keeping of Prophet Dhul-Kifl',
            videoDescription: 'Building trust through reliability and keeping commitments.',
            videoUrl: 'https://www.youtube.com/embed/DHULKIFL_WISDOM_VIDEO_ID'
        },


        default: {
            title: 'Prophetic Wisdom',
            subtitle: 'Timeless guidance from Allah\'s messengers',
            icon: 'fas fa-lightbulb',
            introduction: 'Every prophet brought divine wisdom to guide humanity toward righteousness and success in this life and the hereafter. Their teachings provide practical solutions to life\'s challenges while maintaining spiritual focus.',
            teachings: [
                'Worship Allah alone without partners',
                'Treat all people with justice and compassion',
                'Seek knowledge and act upon it',
                'Practice patience during trials',
                'Show gratitude for Allah\'s blessings',
                'Help the poor and needy'
            ],
            hadith: 'The prophets are like brothers from the same father with different mothers - their religion is one.',
            hadithSource: 'Prophet Muhammad (PBUH), Sahih Bukhari',
            practicalTips: [
                'Read and reflect on Quranic stories regularly',
                'Apply prophetic teachings in daily decisions',
                'Seek guidance through prayer and consultation',
                'Learn from the examples of all prophets',
                'Share wisdom with others through kind actions',
                'Build your character on prophetic values'
            ],
            videoTitle: 'Universal Wisdom from All Prophets',
            videoDescription: 'Common themes and lessons from prophetic teachings.',
            videoUrl: 'https://www.youtube.com/embed/DEFAULT_WISDOM_VIDEO_ID'
        }
    };

    // Populate wisdom detail page
    function populateWisdomDetail(data) {
        document.getElementById('wisdomTitle').textContent = data.title;
        document.getElementById('wisdomSubtitle').textContent = data.subtitle;
        document.getElementById('wisdomIcon').innerHTML = `<i class="${data.icon}"></i>`;

        document.getElementById('wisdomIntro').textContent = data.introduction;
        document.getElementById('wisdomHadith').textContent = data.hadith;
        document.getElementById('wisdomHadithSource').textContent = '- ' + data.hadithSource;

        // Populate teachings
        const teachingsList = document.getElementById('keyTeachings');
        teachingsList.innerHTML = data.teachings.map(teaching => `
            <div class="teaching-item">
                <i class="fas fa-check-circle"></i>
                <span>${teaching}</span>
            </div>
        `).join('');

        // Populate practical tips
        const tipsList = document.getElementById('practicalTips');
        tipsList.innerHTML = data.practicalTips.map(tip => `
            <div class="tip-item">
                <i class="fas fa-arrow-right"></i>
                <span>${tip}</span>
            </div>
        `).join('');

        document.getElementById('wisdomVideoTitle').textContent = data.videoTitle;
        document.getElementById('wisdomVideoDescription').textContent = data.videoDescription;

        // Handle video URL
        const youtubeIframe = document.getElementById('wisdomYoutubeVideo');
        const videoThumbnail = document.querySelector('#wisdomVideoContainer .video-thumbnail');

        if (data.videoUrl) {
            youtubeIframe.src = data.videoUrl;
            youtubeIframe.style.display = 'block';
            videoThumbnail.style.display = 'none';
        } else {
            youtubeIframe.style.display = 'none';
            videoThumbnail.style.display = 'flex';
        }
    }
});


// Add this to your existing prophet JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Infographic selector functionality
    const infographicSelector = document.getElementById('prophetInfographicType');
    const infographicItems = document.querySelectorAll('.infographic-item');

    if (infographicSelector) {
        infographicSelector.addEventListener('change', function () {
            const selectedType = this.value;

            // Hide all infographic items
            infographicItems.forEach(item => {
                item.classList.remove('active');
            });

            // Show selected infographic
            const selectedItem = document.querySelector(`[data-type="${selectedType}"]`);
            if (selectedItem) {
                selectedItem.classList.add('active');
            }
        });
    }

    // Update the populateProphetDetail function to include infographic data
    function populateProphetDetail(data) {
        // ... existing code ...

        // Populate timeline points for timeline infographic
        if (data.timeline) {
            const timelinePoints = document.getElementById('timelinePoints');
            if (timelinePoints) {
                timelinePoints.innerHTML = data.timeline.map((item, index) => `
                    <div class="timeline-point" style="top: ${index * 80}px;">
                        <div class="point-marker"></div>
                        <div class="point-content ${index % 2 === 0 ? 'left' : 'right'}">
                            <div class="point-date">${item.date}</div>
                            <div class="point-event">${item.event}</div>
                        </div>
                    </div>
                `).join('');
            }
        }
    }
});

// Add this to ensure scroll areas stay dark
document.addEventListener('DOMContentLoaded', function () {
    // Force dark background on all scrollable elements
    const scrollableElements = document.querySelectorAll('*');
    scrollableElements.forEach(element => {
        if (element.scrollHeight > element.clientHeight ||
            element.scrollWidth > element.clientWidth) {
            element.style.backgroundColor = '#1a1a2e';
        }
    });
});


// Salah System with Multi-language Content
document.addEventListener('DOMContentLoaded', function () {
    // Salah elements
    const salahSection = document.getElementById('salahSection');
    const salahDetailSection = document.getElementById('salahDetailSection');
    const homeSection = document.getElementById('homeSection');
    const backToHomeFromSalahBtn = document.getElementById('backToHomeFromSalah');
    const backToSalahBtn = document.getElementById('backToSalah');
    const salahCards = document.querySelectorAll('.compact-salah-card');
    const langBtns = document.querySelectorAll('.lang-btn');

    let currentLanguage = 'arabic';

    // Home card click - Correct Your Salah
    const salahCard = document.querySelector('[data-category="mood"][data-type="spiritual"]');
    if (salahCard) {
        salahCard.addEventListener('click', function () {
            showSalahSection();
        });
    }

    // Navigation buttons
    if (backToHomeFromSalahBtn) {
        backToHomeFromSalahBtn.addEventListener('click', function () {
            hideSalahSection();
        });
    }

    if (backToSalahBtn) {
        backToSalahBtn.addEventListener('click', function () {
            hideSalahDetail();
        });
    }

    // Prayer card clicks
    salahCards.forEach(card => {
        card.addEventListener('click', function () {
            const prayer = this.getAttribute('data-prayer');
            showSalahDetail(prayer);
        });
    });

    // Language button clicks
    langBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Show salah section
    function showSalahSection() {
        homeSection.classList.remove('active');
        salahSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide salah section
    function hideSalahSection() {
        salahSection.classList.remove('active');
        homeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Show salah detail
    function showSalahDetail(prayerName) {
        const prayerData = salahDataTemplate[prayerName] || salahDataTemplate.default;
        populateSalahDetail(prayerData);

        salahSection.classList.remove('active');
        salahDetailSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hide salah detail
    function hideSalahDetail() {
        salahDetailSection.classList.remove('active');
        salahSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Switch language
    function switchLanguage(lang) {
        currentLanguage = lang;

        // Update active button
        langBtns.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Update content based on current prayer
        const currentPrayer = document.getElementById('salahTitle')?.getAttribute('data-prayer');
        if (currentPrayer && salahDataTemplate[currentPrayer]) {
            updateContentLanguage(salahDataTemplate[currentPrayer], lang);
        }
    }

    // Complete Prayer Data Template with 4 Languages
    const salahDataTemplate = {
        fajr: {
            title: {
                arabic: 'صلاة الفجر',
                english: 'Fajr Prayer',
                hindi: 'फज्र की नमाज़',
                bengali: 'ফজরের নামাজ'
            },
            subtitle: {
                arabic: 'صلاة الصبح - ركعتان',
                english: 'The Dawn Prayer - 2 Rakat',
                hindi: 'सुबह की नमाज़ - 2 रकात',
                bengali: 'ভোরের নামাজ - 2 রাকাত'
            },
            description: {
                arabic: 'صلاة الفجر هي أول صلاة في اليوم، تُصلى من طلوع الفجر الصادق إلى طلوع الشمس. وهي ركعتان فرض، وركعتان سنة قبلها.',
                english: 'Fajr is the first prayer of the day, performed from true dawn until sunrise. It consists of 2 obligatory rakats with 2 sunnah rakats before.',
                hindi: 'फज्र दिन की पहली नमाज़ है, जो सच्चे फज्र से सूर्योदय तक पढ़ी जाती है। इसमें 2 फ़र्ज़ रकात हैं और इससे पहले 2 सुन्नत रकात हैं।',
                bengali: 'ফজর হল দিনের প্রথম নামাজ, যা সত্যিকারের ফজর থেকে সূর্যোদয় পর্যন্ত পড়া হয়। এটি 2 ফরজ রাকাত এবং এর আগে 2 সুন্নাত রাকাত।'
            },
            method: {
                arabic: '1. الوضوء والنية\n2. تكبيرة الإحرام\n3. قراءة الفاتحة وسورة\n4. الركوع والسجود\n5. التشهد والسلام',
                english: '1. Perform Wudu and make intention\n2. Takbir al-Ihram (Opening Allahu Akbar)\n3. Recite Al-Fatiha and another Surah\n4. Perform Ruku and Sujood\n5. Recite Tashahhud and give Salam',
                hindi: '1. वुज़ू और नीयत करें\n2. तकबीर-उल-इहराम (अल्लाहु अकबर)\n3. अल-फ़ातिहा और दूसरी सूरह पढ़ें\n4. रुकू और सजदा करें\n5. तशह्हुद पढ़कर सलाम फेरें',
                bengali: '1. ওযু করুন এবং নিয়ত করুন\n2. তাকবীর-উল-ইহরাম (আল্লাহু আকবার)\n3. আল-ফাতিহা ও অন্য সূরা পড়ুন\n4. রুকু ও সিজদা করুন\n5. তাশাহ্হুদ পড়ে সালাম ফিরান'
            },
            duas: [
                {
                    arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
                    transliteration: 'A\'udhu billahi minash-shaytanir-rajim',
                    translation: {
                        english: 'I seek refuge in Allah from Satan the accursed',
                        hindi: 'मैं अल्लाह की शैतान से पनाह मांगता हूं',
                        bengali: 'আমি অভিশপ্ত শয়তান থেকে আল্লাহর আশ্রয় প্রার্থনা করি'
                    }
                },
                {
                    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                    transliteration: 'Rabbana atina fi\'d-dunya hasanatan wa fi\'l-akhirati hasanatan wa qina \'adhab an-nar',
                    translation: {
                        english: 'Our Lord! Give us good in this world and good in the Hereafter, and save us from the punishment of Fire',
                        hindi: 'हे हमारे रब! हमें दुनिया में भलाई दे और आखिरत में भी भलाई दे और आग के अज़ाब से बचा',
                        bengali: 'হে আমাদের প্রভু! আমাদের দুনিয়াতে কল্যাণ দিন ও আখেরাতে কল্যাণ দিন এবং আগুনের আজাব থেকে রক্ষা করুন'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Fatiha',
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    translation: {
                        english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, the Lord of the worlds...',
                        hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो जगत का पालनहार है...',
                        bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সৃষ্টিকুলের প্রতিপালক...'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ',
                    transliteration: 'Subhan Allah',
                    translation: {
                        english: 'Glory be to Allah',
                        hindi: 'अल्लाह की महिमा है',
                        bengali: 'আল্লাহর পবিত্রতা ও মহিমা'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ',
                    transliteration: 'Alhamdulillah',
                    translation: {
                        english: 'All praise is for Allah',
                        hindi: 'सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'اللَّهُ أَكْبَرُ',
                    transliteration: 'Allahu Akbar',
                    translation: {
                        english: 'Allah is Greatest',
                        hindi: 'अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '34 times'
                }
            ],
            benefits: {
                arabic: ['حماية الله طوال اليوم', 'شهادة الملائكة', 'نور في القلب', 'بركة في الرزق'],
                english: ['Allah\'s protection throughout the day', 'Angels witness the prayer', 'Light in the heart', 'Blessings in sustenance'],
                hindi: ['पूरे दिन अल्लाह की सुरक्षा', 'फरिश्तों की गवाही', 'दिल में नूर', 'रिज़्क में बरकत'],
                bengali: ['সারাদিন আল্লাহর সুরক্ষা', 'ফেরেশতাদের সাক্ষ্য', 'হৃদয়ে আলো', 'রিজিকে বরকত']
            }
        },

        // Add these 4 prayers to your existing salahDataTemplate object:

        dhuhr: {
            title: {
                arabic: 'صلاة الظهر',
                english: 'Dhuhr Prayer',
                hindi: 'ज़ुहर की नमाज़',
                bengali: 'জোহর নামাজ'
            },
            subtitle: {
                arabic: 'صلاة الظهر - أربع ركعات',
                english: 'The Noon Prayer - 4 Rakat',
                hindi: 'दोपहर की नमाज़ - 4 रकात',
                bengali: 'দুপুরের নামাজ - ৪ রাকাত'
            },
            description: {
                arabic: 'صلاة الظهر هي الصلاة الثانية في اليوم، تُصلى بعد زوال الشمس من وسط السماء حتى دخول وقت العصر. وهي أربع ركعات فرض.',
                english: 'Dhuhr is the second prayer of the day, performed after the sun passes its zenith until Asr time begins. It consists of 4 obligatory rakats[1][24].',
                hindi: 'ज़ुहर दिन की दूसरी नमाज़ है, जो सूरज के आकाश के मध्य से गुज़रने के बाद असर के समय तक पढ़ी जाती है। इसमें 4 फ़र्ज़ रकात हैं।',
                bengali: 'জোহর দিনের দ্বিতীয় নামাজ, যা সূর্য আকাশের মধ্যস্থল অতিক্রম করার পর আসর সময় পর্যন্ত পড়া হয়। এতে ৪ ফরজ রাকাত রয়েছে।'
            },
            method: {
                arabic: '1. الوضوء والنية للظهر\n2. تكبيرة الإحرام "الله أكبر"\n3. قراءة الفاتحة وسورة سراً\n4. الركوع والسجود\n5. التشهد الأوسط بعد الركعة الثانية\n6. إكمال الركعتين الأخيرتين\n7. التشهد الأخير والسلام',
                english: '1. Perform Wudu and make intention for Dhuhr\n2. Takbir al-Ihram "Allahu Akbar"\n3. Recite Al-Fatiha and Surah silently\n4. Perform Ruku and Sujood\n5. Middle Tashahhud after 2nd rakat\n6. Complete the last two rakats\n7. Final Tashahhud and Salam[1]',
                hindi: '1. ज़ुहर के लिए वुज़ू और नीयत करें\n2. तकबीर-उल-इहराम "अल्लाहु अकबर"\n3. अल-फ़ातिहा और सूरह चुपचाप पढ़ें\n4. रुकू और सजदा करें\n5. दूसरी रकात के बाद बीच का तशह्हुद\n6. आखिरी दो रकात पूरी करें\n7. अंतिम तशह्हुद और सलाम',
                bengali: '1. জোহরের জন্য ওযু ও নিয়ত করুন\n2. তাকবীর-উল-ইহরাম "আল্লাহু আকবার"\n3. আল-ফাতিহা ও সূরা নিঃশব্দে পড়ুন\n4. রুকু ও সিজদা করুন\n5. ২য় রাকাতের পর মধ্যবর্তী তাশাহ্হুদ\n6. শেষ দুই রাকাত সম্পূর্ণ করুন\n7. শেষ তাশাহ্হুদ ও সালাম'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                    transliteration: 'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',
                    translation: {
                        english: 'O Allah, help me to remember You, thank You, and worship You in the best manner',
                        hindi: 'हे अल्लाह! मुझे अपना ज़िक्र, शुक्र और बेहतरीन इबादत करने में मदद कर',
                        bengali: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও উত্তম ইবাদতে সাহায্য কর'
                    }
                },
                {
                    arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلاَةِ وَمِن ذُرِّيَّتِي',
                    transliteration: 'Rabbi ij\'alni muqimas-salati wa min dhurriyyati',
                    translation: {
                        english: 'My Lord, make me one who establishes prayer, and from my descendants',
                        hindi: 'मेरे रब! मुझे और मेरी संतान को नमाज़ कायम करने वाला बना',
                        bengali: 'আমার প্রভু! আমাকে ও আমার বংশধরদের নামাজ প্রতিষ্ঠাকারী বানাও'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Fatiha',
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    translation: {
                        english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                        hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                        bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
                    }
                },
                {
                    name: 'Al-Ikhlas',
                    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
                    translation: {
                        english: 'Say: He is Allah, the One! Allah, the Eternal, Absolute. He begets not, nor is He begotten. And there is none like unto Him.',
                        hindi: 'कह दो: वह अल्लाह एक है। अल्लाह निरपेक्ष है। न उसकी कोई संतान है, न वह किसी की संतान है। और उसके समान कोई नहीं है।',
                        bengali: 'বলুন: তিনি আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্म দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। এবং তাঁর সমতুল্য কেউ নেই।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ',
                    transliteration: 'Subhan Allah',
                    translation: {
                        english: 'Glory be to Allah',
                        hindi: 'अल्लाह पवित्र है',
                        bengali: 'আল্লাহ পবিত্র'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ',
                    transliteration: 'Alhamdulillah',
                    translation: {
                        english: 'All praise is for Allah',
                        hindi: 'सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'اللَّهُ أَكْبَرُ',
                    transliteration: 'Allahu Akbar',
                    translation: {
                        english: 'Allah is Greatest',
                        hindi: 'अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '34 times'
                }
            ],
            benefits: {
                arabic: ['حماية من النار', 'رحمة الله في وقت فتح أبواب السماء', 'زيادة الحسنات', 'راحة البال'],
                english: ['Protection from Hellfire[24]', 'Allah\'s mercy when heaven gates open[24]', 'Increase in good deeds', 'Peace of mind'],
                hindi: ['जहन्नम से सुरक्षा', 'स्वर्ग के द्वार खुलने के समय अल्लाह की रहमत', 'अच्छे कामों में वृद्धि', 'मन की शांति'],
                bengali: ['জাহান্নাম থেকে সুরক্ষা', 'স্বর্গের দ্বার খোলার সময় আল্লাহর রহমত', 'সৎকর্মে বৃদ্ধি', 'মানসিক শান্তি']
            }
        },

        asr: {
            title: {
                arabic: 'صلاة العصر',
                english: 'Asr Prayer',
                hindi: 'असर की नमाज़',
                bengali: 'আসর নামাজ'
            },
            subtitle: {
                arabic: 'صلاة العصر - أربع ركعات',
                english: 'The Afternoon Prayer - 4 Rakat',
                hindi: 'दोपहर बाद की नमाज़ - 4 रकात',
                bengali: 'বিকেলের নামাজ - ৪ রাকাত'
            },
            description: {
                arabic: 'صلاة العصر هي الصلاة الثالثة في اليوم، تُصلى عندما يصبح ظل الشيء مثل طوله. وهي من أهم الصلوات وأكثرها تأكيداً في القرآن والسنة.',
                english: 'Asr is the third prayer of the day, performed when the shadow of an object equals its length. It holds special importance in the Quran and Sunnah[25][31].',
                hindi: 'असर दिन की तीसरी नमाज़ है, जो किसी वस्तु की छाया उसकी लंबाई के बराबर हो जाने पर पढ़ी जाती है। यह क़ुरआन और सुन्नत में विशेष महत्व रखती है।',
                bengali: 'আসর দিনের তৃতীয় নামাজ, যা কোনো বস্তুর ছায়া তার দৈর্ঘ্যের সমান হলে পড়া হয়। কুরআন ও সুন্নাহতে এর বিশেষ গুরুত্ব রয়েছে।'
            },
            method: {
                arabic: '1. الوضوء والنية للعصر\n2. تكبيرة الإحرام "الله أكبر"\n3. قراءة الفاتحة وسورة سراً\n4. الركوع والسجود\n5. التشهد الأوسط بعد الركعة الثانية\n6. إكمال الركعتين الأخيرتين\n7. التشهد الأخير والسلام',
                english: '1. Perform Wudu and make intention for Asr\n2. Takbir al-Ihram "Allahu Akbar"\n3. Recite Al-Fatiha and Surah silently\n4. Perform Ruku and Sujood[6]\n5. Middle Tashahhud after 2nd rakat\n6. Complete the last two rakats\n7. Final Tashahhud and Salam',
                hindi: '1. असर के लिए वुज़ू और नीयत करें\n2. तकबीर-उल-इहराम "अल्लाहु अकबर"\n3. अल-फ़ातिहा और सूरह चुपचाप पढ़ें\n4. रुकू और सजदा करें\n5. दूसरी रकात के बाद बीच का तशह्हुद\n6. आखिरी दो रकात पूरी करें\n7. अंतिम तशह्हुद और सलाम',
                bengali: '1. আসরের জন্য ওযু ও নিয়ত করুন\n2. তাকবীর-উল-ইহরাম "আল্লাহু আকবার"\n3. আল-ফাতিহা ও সূরা নিঃশব্দে পড়ুন\n4. রুকু ও সিজদা করুন\n5. ২য় রাকাতের পর মধ্যবর্তী তাশাহ্হুদ\n6. শেষ দুই রাকাত সম্পূর্ণ করুন\n7. শেষ তাশাহ্হুদ ও সালাম'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                    transliteration: 'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',
                    translation: {
                        english: 'O Allah, help me to remember You, thank You, and worship You in the best manner',
                        hindi: 'हे अल्लाह! मुझे अपना ज़िक्र, शुक्र और बेहतरीन इबादत करने में मदद कर',
                        bengali: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও উত্তম ইবাদতে সাহায্য কর'
                    }
                },
                {
                    arabic: 'رَحْمَةُ اللَّهِ عَلَى مَنْ صَلَّى أَرْبَعًا قَبْلَ الْعَصْرِ',
                    transliteration: 'Rahmatu Allah ala man salla arba\'an qabla al-Asr',
                    translation: {
                        english: 'May Allah have mercy on the person who prays four rakats before Asr[25]',
                        hindi: 'अल्लाह की रहमत हो उस व्यक्ति पर जो असर से पहले चार रकात पढ़े',
                        bengali: 'আল্লাহর রহমত সেই ব্যক্তির ওপর যে আসরের আগে চার রাকাত পড়ে'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Fatiha',
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    translation: {
                        english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                        hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                        bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
                    }
                },
                {
                    name: 'Al-Asr',
                    arabic: 'وَالْعَصْرِ * إِنَّ الْإِنسَانَ لَفِي خُسْرٍ * إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
                    translation: {
                        english: 'By time, Indeed, mankind is in loss, Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
                        hindi: 'समय की कसम, निःसंदेह इंसान घाटे में है, सिवाय उनके जो ईमान लाए और अच्छे काम किए और एक दूसरे को सच्चाई की नसीहत की और एक दूसरे को धैर्य की नसीहत की।',
                        bengali: 'সময়ের শপথ, নিশ্চয়ই মানুষ ক্ষতিগ্রস্ত, তারা ছাড়া যারা ঈমান এনেছে ও সৎকর্ম করেছে এবং পরস্পরকে সত্যের উপদেশ দিয়েছে ও ধৈর্যের উপদেশ দিয়েছে।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ',
                    transliteration: 'Subhan Allah',
                    translation: {
                        english: 'Glory be to Allah',
                        hindi: 'अल्लाह पवित्र है',
                        bengali: 'আল্লাহ পবিত্র'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ',
                    transliteration: 'Alhamdulillah',
                    translation: {
                        english: 'All praise is for Allah',
                        hindi: 'सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'اللَّهُ أَكْبَرُ',
                    transliteration: 'Allahu Akbar',
                    translation: {
                        english: 'Allah is Greatest',
                        hindi: 'अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '34 times'
                }
            ],
            benefits: {
                arabic: ['الجمع بين العبادة والحياة الدنيا', 'حماية خاصة من الله', 'ثواب عظيم', 'تقوية الروحانية'],
                english: ['Bridge between worship and worldly matters[31]', 'Special protection from Allah', 'Great reward', 'Strengthening spirituality'],
                hindi: ['इबादत और दुनियावी मामलों के बीच संतुलन', 'अल्लाह से विशेष सुरक्षा', 'महान पुण्य', 'आध्यात्मिकता को मजबूत बनाना'],
                bengali: ['ইবাদত ও পার্থিব বিষয়ের মধ্যে সেতু', 'আল্লাহর বিশেষ সুরক্ষা', 'মহান সওয়াব', 'আধ্যাত্মিকতা বৃদ্ধি']
            }
        },

        maghrib: {
            title: {
                arabic: 'صلاة المغرب',
                english: 'Maghrib Prayer',
                hindi: 'मगरिब की नमाज़',
                bengali: 'মাগরিব নামাজ'
            },
            subtitle: {
                arabic: 'صلاة المغرب - ثلاث ركعات',
                english: 'The Sunset Prayer - 3 Rakat',
                hindi: 'सूर्यास्त की नमाज़ - 3 रकात',
                bengali: 'সূর্যাস্তের নামাজ - ৩ রাকাত'
            },
            description: {
                arabic: 'صلاة المغرب هي الصلاة الرابعة في اليوم، تُصلى بعد غروب الشمس مباشرة. وهي ثلاث ركعات فرض، والقراءة فيها جهرية في الركعتين الأوليين.',
                english: 'Maghrib is the fourth prayer of the day, performed immediately after sunset. It consists of 3 obligatory rakats with audible recitation in the first two rakats[7][28].',
                hindi: 'मगरिब दिन की चौथी नमाज़ है, जो सूर्यास्त के तुरंत बाद पढ़ी जाती है। इसमें 3 फ़र्ज़ रकात हैं और पहली दो रकातों में आवाज़ के साथ पढ़ा जाता है।',
                bengali: 'মাগরিব দিনের চতুর্থ নামাজ, যা সূর্যাস্তের সাথে সাথে পড়া হয়। এতে ৩ ফরজ রাকাত রয়েছে এবং প্রথম দুই রাকাতে উচ্চস্বরে পড়া হয়।'
            },
            method: {
                arabic: '1. الوضوء والنية للمغرب\n2. تكبيرة الإحرام "الله أكبر"\n3. قراءة الفاتحة وسورة جهراً في الأولى والثانية\n4. الركوع والسجود\n5. التشهد الأوسط بعد الركعة الثانية\n6. الركعة الثالثة بالفاتحة فقط سراً\n7. التشهد الأخير والسلام',
                english: '1. Perform Wudu and make intention for Maghrib\n2. Takbir al-Ihram "Allahu Akbar"\n3. Recite Al-Fatiha and Surah audibly in 1st and 2nd rakats[28]\n4. Perform Ruku and Sujood\n5. Middle Tashahhud after 2nd rakat\n6. 3rd rakat with only Al-Fatiha silently\n7. Final Tashahhud and Salam',
                hindi: '1. मगरिब के लिए वुज़ू और नीयत करें\n2. तकबीर-उल-इहराम "अल्लाहु अकबर"\n3. पहली और दूसरी रकात में अल-फ़ातिहा और सूरह आवाज़ के साथ\n4. रुकू और सजदा करें\n5. दूसरी रकात के बाद बीच का तशह्हुद\n6. तीसरी रकात में केवल अल-फ़ातिहा चुपचाप\n7. अंतिम तशह्हुद और सलाम',
                bengali: '1. মাগরিবের জন্য ওযু ও নিয়ত করুন\n2. তাকবীর-উল-ইহরাম "আল্লাহু আকবার"\n3. ১ম ও ২য় রাকাতে আল-ফাতিহা ও সূরা উচ্চস্বরে\n4. রুকু ও সিজদা করুন\n5. ২য় রাকাতের পর মধ্যবর্তী তাশাহ্হুদ\n6. ৩য় রাকাতে শুধু আল-ফাতিহা নিঃশব্দে\n7. শেষ তাশাহ্হুদ ও সালাম'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                    transliteration: 'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',
                    translation: {
                        english: 'O Allah, help me to remember You, thank You, and worship You in the best manner',
                        hindi: 'हे अल्लाह! मुझे अपना ज़िक्र, शुक्र और बेहतरीन इबादत करने में मदद कर',
                        bengali: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও উত্তম ইবাদতে সাহায্য কর'
                    }
                },
                {
                    arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا',
                    transliteration: 'Allahumma barik lana fima razaqtana',
                    translation: {
                        english: 'O Allah, bless us in what You have provided for us',
                        hindi: 'हे अल्लाह! जो कुछ तूने हमें दिया है उसमें बरकत दे',
                        bengali: 'হে আল্লাহ! তুমি আমাদের যা দিয়েছ তাতে বরকত দাও'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Fatiha',
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    translation: {
                        english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                        hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                        bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
                    }
                },
                {
                    name: 'Al-Kafirun',
                    arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ * لَا أَعْبُدُ مَا تَعْبُدُونَ * وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ * وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ * وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ * لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
                    translation: {
                        english: 'Say: O you who reject faith! I do not worship what you worship, nor do you worship what I worship...',
                        hindi: 'कह दो: हे काफिरों! मैं उसकी इबादत नहीं करता जिसकी तुम इबादत करते हो, और न तुम उसकी इबादत करते हो जिसकी मैं इबादत करता हूं...',
                        bengali: 'বলুন: হে কাফেরগণ! আমি তার ইবাদত করি না যার ইবাদত তোমরা কর, আর তোমরাও তার ইবাদত কর না যার ইবাদত আমি করি...'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ',
                    transliteration: 'Subhan Allah',
                    translation: {
                        english: 'Glory be to Allah',
                        hindi: 'अल्लाह पवित्र है',
                        bengali: 'আল্লাহ পবিত্র'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ',
                    transliteration: 'Alhamdulillah',
                    translation: {
                        english: 'All praise is for Allah',
                        hindi: 'सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'اللَّهُ أَكْبَرُ',
                    transliteration: 'Allahu Akbar',
                    translation: {
                        english: 'Allah is Greatest',
                        hindi: 'अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '34 times'
                }
            ],
            benefits: {
                arabic: ['التفكر في نهاية اليوم', 'الشكر على النعم', 'الاستعداد للمساء', 'السكينة والطمأنينة'],
                english: ['Reflection on the end of day[7]', 'Gratitude for blessings', 'Preparation for evening', 'Peace and tranquility'],
                hindi: ['दिन के अंत में चिंतन', 'नेमतों के लिए आभार', 'शाम की तैयारी', 'शांति और सुकून'],
                bengali: ['দিনের শেষে চিন্তা-ভাবনা', 'নিয়ামতের জন্য কৃতজ্ঞতা', 'সন্ধ্যার প্রস্তুতি', 'শান্তি ও স্বস্তি']
            }
        },

        isha: {
            title: {
                arabic: 'صلاة العشاء',
                english: 'Isha Prayer',
                hindi: 'इशा की नमाज़',
                bengali: 'এশার নামাজ'
            },
            subtitle: {
                arabic: 'صلاة العشاء - أربع ركعات',
                english: 'The Night Prayer - 4 Rakat',
                hindi: 'रात की नमाज़ - 4 रकात',
                bengali: 'রাতের নামাজ - ৪ রাকাত'
            },
            description: {
                arabic: 'صلاة العشاء هي الصلاة الخامسة والأخيرة في اليوم، تُصلى بعد اختفاء الشفق الأحمر. وهي أربع ركعات فرض، والقراءة فيها جهرية في الركعتين الأوليين.',
                english: 'Isha is the fifth and final prayer of the day, performed after the red twilight disappears completely. It consists of 4 obligatory rakats with audible recitation in the first two rakats[8][26][29].',
                hindi: 'इशा दिन की पांचवीं और अंतिम नमाज़ है, जो लाल संध्या के पूरी तरह गायब होने के बाद पढ़ी जाती है। इसमें 4 फ़र्ज़ रकात हैं और पहली दो रकातों में आवाज़ के साथ पढ़ा जाता है।',
                bengali: 'এশা দিনের পঞ্চম ও শেষ নামাজ, যা লাল গোধূলি সম্পূর্ণ অদৃশ্য হওয়ার পর পড়া হয়। এতে ৪ ফরজ রাকাত রয়েছে এবং প্রথম দুই রাকাতে উচ্চস্বরে পড়া হয়।'
            },
            method: {
                arabic: '1. الوضوء والنية للعشاء\n2. تكبيرة الإحرام "الله أكبر"\n3. قراءة الفاتحة وسورة جهراً في الأولى والثانية\n4. الركوع والسجود\n5. التشهد الأوسط بعد الركعة الثانية\n6. إكمال الركعتين الأخيرتين سراً\n7. التشهد الأخير والسلام',
                english: '1. Perform Wudu and make intention for Isha\n2. Takbir al-Ihram "Allahu Akbar"\n3. Recite Al-Fatiha and Surah audibly in 1st and 2nd rakats[8]\n4. Perform Ruku and Sujood\n5. Middle Tashahhud after 2nd rakat\n6. Complete last two rakats silently\n7. Final Tashahhud and Salam',
                hindi: '1. इशा के लिए वुज़ू और नीयत करें\n2. तकबीर-उल-इहराम "अल्लाहु अकबर"\n3. पहली और दूसरी रकात में अल-फ़ातिहा और सूरह आवाज़ के साथ\n4. रुकू और सजदा करें\n5. दूसरी रकात के बाद बीच का तशह्हुद\n6. आखिरी दो रकात चुपचाप पूरी करें\n7. अंतिम तशह्हुद और सलाम',
                bengali: '1. এশার জন্য ওযু ও নিয়ত করুন\n2. তাকবীর-উল-ইহরাম "আল্লাহু আকবার"\n3. ১ম ও ২য় রাকাতে আল-ফাতিহা ও সূরা উচ্চস্বরে\n4. রুকু ও সিজদা করুন\n5. ২য় রাকাতের পর মধ্যবর্তী তাশাহ্হুদ\n6. শেষ দুই রাকাত নিঃশব্দে সম্পূর্ণ করুন\n7. শেষ তাশাহ্হুদ ও সালাম'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
                    transliteration: 'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',
                    translation: {
                        english: 'O Allah, help me to remember You, thank You, and worship You in the best manner',
                        hindi: 'हे अल्लाह! मुझे अपना ज़िक्र, शुक्र और बेहतरीन इबादत करने में मदद कर',
                        bengali: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও উত্তম ইবাদতে সাহায্য কর'
                    }
                },
                {
                    arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
                    transliteration: 'Allahumma ajirni mina an-naar',
                    translation: {
                        english: 'O Allah, save me from the Hellfire',
                        hindi: 'हे अल्लाह! मुझे जहन्नम की आग से बचा',
                        bengali: 'হে আল্লাহ! আমাকে জাহান্নামের আগুন থেকে রক্ষা কর'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Fatiha',
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    translation: {
                        english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                        hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                        bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
                    }
                },
                {
                    name: 'Al-Isra (17:78)',
                    arabic: 'أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ وَقُرْآنَ الْفَجْرِ إِنَّ قُرْآنَ الْفَجْرِ كَانَ مَشْهُودًا',
                    translation: {
                        english: 'Establish prayer at the decline of the sun until the darkness of the night and [also] the Quran of dawn. Indeed, the recitation of dawn is ever witnessed[29].',
                        hindi: 'सूरज के ढलने से लेकर रात के अंधेरे तक नमाज़ कायम करो और फज्र का क़ुरआन (भी)। निःसंदेह फज्र का क़ुरआन देखा जाता है।',
                        bengali: 'সূর্য ঢলে যাওয়া থেকে রাতের অন্ধকার পর্যন্ত নামাজ কায়েম কর এবং ফজরের কুরআনও। নিশ্চয় ফজরের কুরআন সাক্ষ্য প্রাপ্ত।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ',
                    transliteration: 'Subhan Allah',
                    translation: {
                        english: 'Glory be to Allah',
                        hindi: 'अल्लाह पवित्र है',
                        bengali: 'আল্লাহ পবিত্র'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ',
                    transliteration: 'Alhamdulillah',
                    translation: {
                        english: 'All praise is for Allah',
                        hindi: 'सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'সমস্ত প্রশংসা আল্লাহর জন্য'
                    },
                    count: '33 times'
                },
                {
                    arabic: 'اللَّهُ أَكْبَرُ',
                    transliteration: 'Allahu Akbar',
                    translation: {
                        english: 'Allah is Greatest',
                        hindi: 'अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '34 times'
                }
            ],
            benefits: {
                arabic: ['انضباط الحياة', 'تقوية الأخلاق', 'حماية من الشيطان', 'استعداد للنوم بسكينة'],
                english: ['Life discipline[29]', 'Strengthening morality[29]', 'Protection from Satan', 'Peaceful preparation for sleep'],
                hindi: ['जीवन में अनुशासन', 'नैतिकता को मजबूत बनाना', 'शैतान से सुरक्षा', 'शांति से सोने की तैयारी'],
                bengali: ['জীবনে শৃঙ্খলা', 'নৈতিকতা বৃদ্ধি', 'শয়তান থেকে সুরক্ষা', 'শান্তিপূর্ণ ঘুমের প্রস্তুতি']
            }
        },

        // Add these 5 special event prayers to your existing salahDataTemplate object:

        "eid-fitr": {
            title: {
                arabic: 'صلاة عيد الفطر',
                english: 'Eid ul Fitr Prayer',
                hindi: 'ईद उल फ़ित्र की नमाज़',
                bengali: 'ঈদুল ফিতর নামাজ'
            },
            subtitle: {
                arabic: 'صلاة عيد الفطر - ركعتان',
                english: 'The Festival of Breaking Fast - 2 Rakat',
                hindi: 'रोज़ा खत्म होने की खुशी - 2 रकात',
                bengali: 'রোজা শেষের আনন্দ - ২ রাকাত'
            },
            description: {
                arabic: 'صلاة عيد الفطر تُصلى في صباح أول يوم من شوال بعد انتهاء شهر رمضان. وهي ركعتان مع تكبيرات إضافية، سبع في الأولى وخمس في الثانية.',
                english: 'Eid ul Fitr prayer is performed on the morning of the first day of Shawwal after Ramadan ends. It consists of 2 rakats with additional takbirs: 7 in the first rakat and 5 in the second[1][2].',
                hindi: 'ईद उल फ़ित्र की नमाज़ रमज़ान के बाद शव्वाल के पहले दिन सुबह पढ़ी जाती है। इसमें 2 रकात हैं जिसमें अतिरिक्त तकबीर हैं: पहली में 7 और दूसरी में 5।',
                bengali: 'ঈদুল ফিতরের নামাজ রমজানের পর শাওয়ালের প্রথম দিন সকালে পড়া হয়। এতে ২ রাকাত রয়েছে অতিরিক্ত তাকবীরসহ: প্রথমে ৭টি ও দ্বিতীয়ে ৫টি।'
            },
            method: {
                arabic: '1. النية لصلاة عيد الفطر\n2. تكبيرة الإحرام ثم 6 تكبيرات إضافية\n3. قراءة الفاتحة وسورة الأعلى\n4. الركوع والسجود\n5. في الثانية: 5 تكبيرات ثم الفاتحة والغاشية\n6. إكمال الصلاة بالتشهد والسلام',
                english: '1. Make intention for Eid ul Fitr prayer\n2. Takbir al-Ihram then 6 additional takbirs[2]\n3. Recite Al-Fatiha and Surah Al-A\'la\n4. Perform Ruku and Sujood\n5. In second rakat: 5 takbirs then Al-Fatiha and Al-Ghashiyah[6]\n6. Complete prayer with Tashahhud and Salam',
                hindi: '1. ईद उल फ़ित्र की नमाज़ की नीयत करें\n2. तकबीर-उल-इहराम फिर 6 अतिरिक्त तकबीर\n3. अल-फ़ातिहा और सूरह अल-आला पढ़ें\n4. रुकू और सजदा करें\n5. दूसरी रकात में: 5 तकबीर फिर अल-फ़ातिहा और अल-गाशिया\n6. तशह्हुद और सलाम के साथ नमाज़ पूरी करें',
                bengali: '1. ঈদুল ফিতর নামাজের নিয়ত করুন\n2. তাকবীর-উল-ইহরাম তারপর ৬টি অতিরিক্ত তাকবীর\n3. আল-ফাতিহা ও সূরা আল-আ\'লা পড়ুন\n4. রুকু ও সিজদা করুন\n5. দ্বিতীয় রাকাতে: ৫টি তাকবীর তারপর আল-ফাতিহা ও আল-গাশিয়া\n6. তাশাহ্হুদ ও সালামের সাথে নামাজ সম্পূর্ণ করুন'
            },
            duas: [
                {
                    arabic: 'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ',
                    transliteration: 'Allahu Akbar Allahu Akbar la ilaha illa Allah wa Allahu Akbar Allahu Akbar wa lillahi\'l-hamd',
                    translation: {
                        english: 'Allah is Greatest, Allah is Greatest, there is no god but Allah, and Allah is Greatest, Allah is Greatest, and to Allah belongs all praise[5]',
                        hindi: 'अल्लाह सबसे महान है, अल्लाह सबसे महान है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है, अल्लाह सबसे महान है, और सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ, এবং সমস্ত প্রশংসা আল্লাহর জন্য'
                    }
                },
                {
                    arabic: 'اللَّهُمَّ تَقَبَّلْ مِنَّا صِيَامَنَا وَقِيَامَنَا',
                    transliteration: 'Allahumma taqabbal minna siyamana wa qiyamana',
                    translation: {
                        english: 'O Allah, accept from us our fasting and our standing in prayer',
                        hindi: 'हे अल्लाह! हमारे रोज़े और रात की इबादत को क़बूल फ़रما',
                        bengali: 'হে আল্লাহ! আমাদের রোজা ও রাতের ইবাদত কবুল করুন'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-A\'la',
                    arabic: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى * الَّذِي خَلَقَ فَسَوَّىٰ * وَالَّذِي قَدَّرَ فَهَدَىٰ * وَالَّذِي أَخْرَجَ الْمَرْعَىٰ',
                    translation: {
                        english: 'Glorify the name of your Lord, the Most High, Who created and proportioned, Who determined and guided, Who brings out the pasture[6]',
                        hindi: 'अपने सबसे बुलंद रब के नाम की तस्बीह करो, जिसने पैदा किया और ठीक बनाया, और जिसने अंदाज़ा लगाया फिर राह दिखाई',
                        bengali: 'তোমার প্রভুর নামের পবিত্রতা ও মহিমা ঘোষণা কর, যিনি সর্বোচ্চ, যিনি সৃষ্টি করেছেন ও সুবিন্যস্ত করেছেন'
                    }
                },
                {
                    name: 'Al-Ghashiyah',
                    arabic: 'هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ * وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ * عَامِلَةٌ نَّاصِبَةٌ * تَصْلَىٰ نَارًا حَامِيَةً',
                    translation: {
                        english: 'Has there reached you the report of the Overwhelming [Event]? [Some] faces, that Day, will be humbled, Working [hard] and exhausted[6]',
                        hindi: 'क्या तुम्हें घेरने वाली (क़यामत) की खबर पहुंची है? उस दिन कुछ चेहरे झुके हुए होंगे, मेहनत करने वाले, थके हुए',
                        bengali: 'তোমার কাছে কি সর্বব্যাপী বিপর্যয়ের সংবাদ পৌঁছেছে? সেদিন কিছু মুখমণ্ডল হবে অবনত, পরিশ্রমক্লান্ত ও ক্লান্ত'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'التَّكْبِيرَاتُ',
                    transliteration: 'Takbirat (Eid Takbirs)',
                    translation: {
                        english: 'Special Eid Takbirs to be recited',
                        hindi: 'ईद की विशेष तकबीरें',
                        bengali: 'ঈদের বিশেষ তাকবীর'
                    },
                    count: 'After prayer'
                }
            ],
            benefits: {
                arabic: ['الفرح والسرور المشروع', 'تكفير الذنوب', 'الأجر العظيم', 'الوحدة بين المسلمين'],
                english: ['Legitimate joy and happiness[5]', 'Forgiveness of sins', 'Great reward', 'Unity among Muslims'],
                hindi: ['वैध खुशी और आनंद', 'पापों की माफी', 'महान पुण्य', 'मुसलमानों में एकता'],
                bengali: ['বৈধ আনন্দ ও খুশি', 'গুনাহ মাফ', 'মহান সওয়াব', 'মুসলিমদের মধ্যে ঐক্য']
            }
        },

        "eid-adha": {
            title: {
                arabic: 'صلاة عيد الأضحى',
                english: 'Eid ul Adha Prayer',
                hindi: 'ईद उल अज़हा की नमाज़',
                bengali: 'ঈদুল আজহা নামাজ'
            },
            subtitle: {
                arabic: 'صلاة عيد الأضحى - ركعتان',
                english: 'The Festival of Sacrifice - 2 Rakat',
                hindi: 'क़ुर्बानी की ईद - 2 रकात',
                bengali: 'কুরবানির ঈদ - ২ রাকাত'
            },
            description: {
                arabic: 'صلاة عيد الأضحى تُصلى في العاشر من ذي الحجة تيمناً بحج إبراهيم وذبحه للكبش فداءً لإسماعيل. وهي ركعتان مع تكبيرات إضافية.',
                english: 'Eid ul Adha prayer is performed on the 10th of Dhul Hijjah commemorating Ibrahim\'s pilgrimage and sacrifice. It consists of 2 rakats with additional takbirs[11][16].',
                hindi: 'ईद उल अज़हा की नमाज़ ज़िल्हिज्जा की 10 तारीख को इब्राहीम के हज और क़ुर्बानी की याद में पढ़ी जाती है। इसमें अतिरिक्त तकबीरों के साथ 2 रकात हैं।',
                bengali: 'ঈদুল আজহার নামাজ জিলহজের ১০ তারিখে ইব্রাহিমের হজ ও কুরবানির স্মরণে পড়া হয়। এতে অতিরিক্ত তাকবীরসহ ২ রাকাত রয়েছে।'
            },
            method: {
                arabic: '1. النية لصلاة عيد الأضحى\n2. تكبيرة الإحرام ثم 6 تكبيرات إضافية\n3. قراءة الفاتحة وسورة الأعلى\n4. الركوع والسجود\n5. في الثانية: 5 تكبيرات ثم الفاتحة والغاشية\n6. إكمال الصلاة والاستعداد للخطبة',
                english: '1. Make intention for Eid ul Adha prayer\n2. Takbir al-Ihram then 6 additional takbirs[16]\n3. Recite Al-Fatiha and Surah Al-A\'la\n4. Perform Ruku and Sujood\n5. In second rakat: 5 takbirs then Al-Fatiha and Al-Ghashiyah\n6. Complete prayer and listen to Khutbah',
                hindi: '1. ईद उल अज़हा की नमाज़ की नीयत करें\n2. तकबीर-उल-इहराम फिर 6 अतिरिक्त तकबीर\n3. अल-फ़ातिहा और सूरह अल-आला पढ़ें\n4. रुकू और सजदा करें\n5. दूसरी रकात में: 5 तकबीर फिर अल-फ़ातिहा और अल-गाशिया\n6. नमाज़ पूरी करें और ख़ुत्बा सुनें',
                bengali: '1. ঈদুল আজহা নামাজের নিয়ত করুন\n2. তাকবীর-উল-ইহরাম তারপর ৬টি অতিরিক্ত তাকবীর\n3. আল-ফাতিহা ও সূরা আল-আ\'লা পড়ুন\n4. রুকু ও সিজদা করুন\n5. দ্বিতীয় রাকাতে: ৫টি তাকবীর তারপর আল-ফাতিহা ও আল-গাশিয়া\n6. নামাজ সম্পূর্ণ করুন ও খুতবা শুনুন'
            },
            duas: [
                {
                    arabic: 'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ',
                    transliteration: 'Allahu Akbar Allahu Akbar la ilaha illa Allah wa Allahu Akbar Allahu Akbar wa lillahi\'l-hamd',
                    translation: {
                        english: 'Allah is Greatest, Allah is Greatest, there is no god but Allah, and Allah is Greatest, Allah is Greatest, and to Allah belongs all praise[11]',
                        hindi: 'अल्लाह सबसे महान है, अल्लाह सबसे महान है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है, अल्लाह सबसे महान है, और सारी प्रशंसा अल्लाह के लिए है',
                        bengali: 'আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ, আল্লাহ সর্বশ্রেষ্ঠ, এবং সমস্ত প্রশংসা আল্লাহর জন্য'
                    }
                },
                {
                    arabic: 'اللَّهُمَّ تَقَبَّلْ مِنَّا حَجَّنَا وَقُرْبَانَنَا',
                    transliteration: 'Allahumma taqabbal minna hajjana wa qurbanana',
                    translation: {
                        english: 'O Allah, accept from us our pilgrimage and our sacrifice',
                        hindi: 'हे अल्लाह! हमारे हज और क़ुर्बानी को क़बूल फ़रमा',
                        bengali: 'হে আল্লাহ! আমাদের হজ ও কুরবানি কবুল করুন'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-A\'la',
                    arabic: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى * الَّذِي خَلَقَ فَسَوَّىٰ * وَالَّذِي قَدَّرَ فَهَدَىٰ * وَالَّذِي أَخْرَجَ الْمَرْعَىٰ',
                    translation: {
                        english: 'Glorify the name of your Lord, the Most High, Who created and proportioned, Who determined and guided, Who brings out the pasture',
                        hindi: 'अपने सबसे बुलंद रब के नाम की तस्बीह करो, जिसने पैदा किया और ठीक बनाया, और जिसने अंदाज़ा लगाया फिर राह दिखाई',
                        bengali: 'তোমার প্রভুর নামের পবিত্রতা ও মহিমা ঘোষণা কর, যিনি সর্বোচ্চ, যিনি সৃষ্টি করেছেন ও সুবিন্যস্ত করেছেন'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'التَّكْبِيرَاتُ الْأَيَّامِ',
                    transliteration: 'Takbirat al-Ayyam (Days of Takbir)',
                    translation: {
                        english: 'Takbirs of the days of sacrifice',
                        hindi: 'क़ुर्बानी के दिनों की तकबीरें',
                        bengali: 'কুরবানির দিনগুলোর তাকবীর'
                    },
                    count: 'After each prayer'
                }
            ],
            benefits: {
                arabic: ['تذكر قصة إبراهيم وإسماعيل', 'تعلم التضحية والطاعة', 'وحدة الأمة الإسلامية', 'الأجر العظيم'],
                english: ['Remembrance of Ibrahim and Ismail\'s story', 'Learning sacrifice and obedience', 'Unity of Islamic Ummah', 'Great reward'],
                hindi: ['इब्राहीम और इस्माईल की कहानी की याद', 'त्याग और आज्ञाकारिता की शिक्षा', 'इस्लामी उम्मह की एकता', 'महान पुण्य'],
                bengali: ['ইব্রাহিম ও ইসমাইলের কাহিনীর স্মরণ', 'ত্যাগ ও আনুগত্যের শিক্ষা', 'ইসলামী উম্মাহর ঐক্য', 'মহান সওয়াব']
            }
        },

        tarawih: {
            title: {
                arabic: 'صلاة التراويح',
                english: 'Tarawih Prayer',
                hindi: 'तरावीह की नमाज़',
                bengali: 'তারাবিহ নামাজ'
            },
            subtitle: {
                arabic: 'صلاة التراويح - 8 إلى 20 ركعة',
                english: 'The Ramadan Night Prayer - 8 to 20 Rakat',
                hindi: 'रमज़ान की रात की नमाज़ - 8 से 20 रकात',
                bengali: 'রমজানের রাতের নামাজ - ৮ থেকে ২০ রাকাত'
            },
            description: {
                arabic: 'صلاة التراويح سنة مؤكدة تُصلى كل ليلة في شهر رمضان بعد صلاة العشاء. تُصلى ركعتين ركعتين، وفيها يُقرأ القرآن تدريجياً ليُختم خلال الشهر.',
                english: 'Tarawih is a highly recommended Sunnah prayer performed every night during Ramadan after Isha. It is prayed in sets of 2 rakats, with gradual Quran recitation to complete it during the month[7][12].',
                hindi: 'तरावीह एक अत्यधिक महत्वपूर्ण सुन्नत नमाज़ है जो रमज़ान में हर रात इशा के बाद पढ़ी जाती है। यह 2-2 रकात के सेट में पढ़ी जाती है, जिसमें क़ुरआन को धीरे-धीरे पढ़कर महीने भर में पूरा किया जाता है।',
                bengali: 'তারাবিহ একটি অত্যন্ত গুরুত্वপূর্ণ সুন্নাত নামাজ যা রমজানে প্রতি রাতে এশার পর পড়া হয়। এটি ২-২ রাকাত করে পড়া হয়, যাতে ক্রমশ কুরআন পাঠের মাধ্যমে মাসব্যাপী সম্পূর্ণ করা হয়।'
            },
            method: {
                arabic: '1. صلاة العشاء وسننها أولاً\n2. النية لصلاة التراويح\n3. صلاة ركعتين ركعتين حتى 8 أو 20\n4. راحة قصيرة كل 4 ركعات\n5. قراءة جزء من القرآن تدريجياً\n6. انتهاء بصلاة الوتر',
                english: '1. Pray Isha and its Sunnah first\n2. Make intention for Tarawih prayer[7]\n3. Pray 2 rakats at a time until 8 or 20 total\n4. Short rest after every 4 rakats[7]\n5. Gradual Quran recitation throughout month[12]\n6. End with Witr prayer',
                hindi: '1. पहले इशा और उसकी सुन्नत पढ़ें\n2. तरावीह की नमाज़ की नीयत करें\n3. 2-2 रकात करके कुल 8 या 20 तक पढ़ें\n4. हर 4 रकात के बाद थोड़ा आराम\n5. महीने भर में क़ुरआन का क्रमिक पाठ\n6. वित्र की नमाज़ के साथ समाप्ति',
                bengali: '1. প্রথমে এশা ও তার সুন্নাত পড়ুন\n2. তারাবিহ নামাজের নিয়ত করুন\n3. ২-২ রাকাত করে মোট ৮ বা ২০ পর্যন্ত পড়ুন\n4. প্রতি ৪ রাকাতের পর সামান্য বিশ্রাম\n5. মাসব্যাপী ক্রমশ কুরআন তেলাওয়াত\n6. বিতর নামাজের সাথে সমাপ্তি'
            },
            duas: [
                {
                    arabic: 'سُبْحَانَ ذِي الْمُلْكِ وَالْمَلَكُوتِ سُبْحَانَ ذِي الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْكِبْرِيَاءِ وَالْجَبَرُوتِ',
                    transliteration: 'Subhana dhil-mulki wal-malakut, subhana dhil-\'izzati wal-\'azamati wal-haybati wal-qudrati wal-kibriya\'i wal-jabarut',
                    translation: {
                        english: 'Glory be to the Owner of dominion and sovereignty, glory be to the Owner of honor, greatness, awe, power, pride and might',
                        hindi: 'पवित्र है वह जो राज्य और सम्राज्य का मालिक है, पवित्र है वह जो इज़्ज़त, अज़मत, रोब, कुदरत, किब्रिया और जबरूत का मालिक है',
                        bengali: 'পবিত্র তিনি যিনি রাজত্ব ও সার্বভৌমত্বের মালিক, পবিত্র তিনি যিনি মর্যাদা, মহত্ত্व, ভীতি, শক্তি, গর্ব ও পরাক্রমের মালিক'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Portions of Quran',
                    arabic: 'أجزاء من القرآن الكريم تُقرأ تدريجياً خلال شهر رمضان',
                    translation: {
                        english: 'Portions of the Holy Quran recited gradually throughout Ramadan to complete the entire Quran[12]',
                        hindi: 'पवित्र क़ुरआन के भाग जो रमज़ान के दौरान क्रमिक रूप से पढ़े जाते हैं ताकि पूरा क़ुरआन पूरा हो सके',
                        bengali: 'পবিত্র কুরআনের অংশগুলো যা রমজান জুড়ে ক্রমান্বয়ে পাঠ করা হয় সম্পূর্ণ কুরআন শেষ করার জন্য'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
                    transliteration: 'Subhan Allah wal-hamdu lillah wa la ilaha illa Allah wa Allahu Akbar',
                    translation: {
                        english: 'Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Greatest',
                        hindi: 'अल्लाह पवित्र है, अल्लाह की प्रशंसा है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ পবিত্র, আল্লাহর প্রশংসা, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: 'After each set'
                }
            ],
            benefits: {
                arabic: ['غفران الذنوب الماضية', 'أجر قيام الليل كاملاً', 'تلاوة القرآن جماعة', 'تقوية الروحانية في رمضان'],
                english: ['Forgiveness of past sins[7]', 'Reward of standing entire night in prayer[12]', 'Collective Quran recitation', 'Strengthening spirituality in Ramadan'],
                hindi: ['पिछले पापों की माफी', 'पूरी रात इबादत का पुण्य', 'सामूहिक क़ुरआन पाठ', 'रमज़ान में आध्यात्मिकता को मजबूत बनाना'],
                bengali: ['অতীত পাপের ক্ষমা', 'সারারাত ইবাদতের সওয়াব', 'সামূহিক কুরআন তেলাওয়াত', 'রমজানে আধ্যাত্মিকতা বৃদ্ধি']
            }
        },

        "shabe-barat": {
            title: {
                arabic: 'صلاة ليلة البراءة',
                english: 'Shab e Barat Prayer',
                hindi: 'शब-ए-बरात की नमाज़',
                bengali: 'শবে বরাতের নামাজ'
            },
            subtitle: {
                arabic: 'ليلة النصف من شعبان - نوافل متنوعة',
                english: 'The Night of Forgiveness - Various Nafl Prayers',
                hindi: 'मुक्ति की रात - विभिन्न नफ़्ल नमाज़ें',
                bengali: 'ক্ষমার রাত - বিভিন্ন নফল নামাজ'
            },
            description: {
                arabic: 'ليلة النصف من شعبان ليلة مباركة يُستحب فيها الإكثار من النوافل والدعاء والاستغفار. تُصلى نوافل متعددة بنيات مختلفة للبركة والمغفرة.',
                english: 'The 15th night of Sha\'ban is blessed, recommended for abundant nafl prayers, duas, and seeking forgiveness. Multiple voluntary prayers are performed with different intentions for blessings and forgiveness[8][13].',
                hindi: 'शाबान की 15वीं रात बरकत वाली है, जिसमें बहुत सारी नफ़्ल नमाज़ें, दुआएं और इस्तिग़फ़ार की सिफ़ारिश की जाती है। बरकत और मग़फ़िरत के लिए अलग-अलग नीयतों से कई नफ़्ल नमाज़ें पढ़ी जाती हैं।',
                bengali: 'শাবানের ১৫তম রাত বরকতময়, যাতে প্রচুর নফল নামাজ, দোয়া ও ক্ষমা প্রার্থনার সুপারিশ করা হয়। বরকত ও ক্ষমার জন্য বিভিন্ন নিয়তে একাধিক নফল নামাজ পড়া হয়।'
            },
            method: {
                arabic: '1. صلاة 6 ركعات (2+2+2) بعد المغرب\n2. قراءة سورة يس والإخلاص 21 مرة\n3. صلاة 12 ركعة مع الإخلاص 10 مرات\n4. الإكثار من الدعاء والاستغفار\n5. صلاة 100 ركعة للمغفرة العظمى',
                english: '1. Pray 6 rakats (2+2+2) after Maghrib[8]\n2. Recite Surah Yasin and Ikhlas 21 times[8]\n3. Pray 12 rakats with Ikhlas 10 times each[8]\n4. Abundant duas and seeking forgiveness[13]\n5. 100 rakats for greatest forgiveness[8]',
                hindi: '1. मगरिब के बाद 6 रकात (2+2+2) पढ़ें\n2. सूरह यासीन और इख़्लास 21 बार पढ़ें\n3. हर रकात में इख़्लास 10 बार के साथ 12 रकात\n4. बहुत सारी दुआएं और इस्तिग़फ़ार\n5. सबसे बड़ी मग़फ़िरत के लिए 100 रकात',
                bengali: '1. মাগরিবের পর ৬ রাকাত (২+২+২) পড়ুন\n2. সূরা ইয়াসিন ও ইখলাস ২১ বার পড়ুন\n3. প্রতি রাকাতে ইখলাস ১০ বার সহ ১২ রাকাত\n4. প্রচুর দোয়া ও ক্ষমা প্রার্থনা\n5. সর্বোচ্চ ক্ষমার জন্য ১০০ রাকাত'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ وَالْمُعَافَاةَ الدَّائِمَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
                    transliteration: 'Allahumma inni as\'aluka al-\'afwa wal-\'afiyata wal-mu\'afata ad-da\'imata fi\'d-dunya wal-akhirah',
                    translation: {
                        english: 'O Allah, I ask You for forgiveness, well-being, and lasting protection in this world and the next[8]',
                        hindi: 'हे अल्लाह! मैं तुझसे माफी, आफ़ियत और दुनिया व आख़िरत में हमेशा की सुरक्षा मांगता हूं',
                        bengali: 'হে আল্লাহ! আমি তোমার কাছে ক্ষমা, নিরাপত্তা ও দুনিয়া-আখেরাতে স্থায়ী সুরক্ষা চাই'
                    }
                },
                {
                    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
                    transliteration: 'Allahumma innaka \'afuwwun karimun tuhibbul-\'afwa fa\'fu \'anni',
                    translation: {
                        english: 'O Allah, You are Most Forgiving and Generous, You love forgiveness, so forgive me[13]',
                        hindi: 'हे अल्लाह! तू माफ करने वाला और करीम है, तू माफी को पसंद करता है, सो मुझे माफ कर दे',
                        bengali: 'হে আল্লাহ! তুমি ক্ষমাশীল ও দানশীল, তুমি ক্ষমা পছন্দ কর, তাই আমাকে ক্ষমা কর'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Yasin',
                    arabic: 'يس * وَالْقُرْآنِ الْحَكِيمِ * إِنَّكَ لَمِنَ الْمُرْسَلِينَ * عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ',
                    translation: {
                        english: 'Yasin. By the Quran, full of Wisdom, Indeed you are one of the messengers, On a Straight Path[8]',
                        hindi: 'यासीन। हिकमत वाले क़ुरआन की कसम, बेशक तुम रसूलों में से हो, सीधे रास्ते पर',
                        bengali: 'ইয়াসিন। প্রজ্ঞাপূর্ণ কুরআনের শপথ, নিশ্চয় তুমি রাসূলদের অন্তর্ভুক্ত, সরল পথের উপর'
                    }
                },
                {
                    name: 'Al-Ikhlas',
                    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
                    translation: {
                        english: 'Say: He is Allah, the One! Allah, the Eternal, Absolute. He begets not, nor is He begotten. And there is none like unto Him.',
                        hindi: 'कह दो: वह अल्लाह एक है। अल्लाह निरपेक्ष है। न उसकी कोई संतान है, न वह किसी की संतान है। और उसके समान कोई नहीं है।',
                        bengali: 'বলুন: তিনি আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্म দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। এবং তাঁর সমতুল্য কেউ নেই।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'الْكَلِمَةُ الثَّالِثَةُ وَالرَّابِعَةُ',
                    transliteration: 'Third and Fourth Kalima',
                    translation: {
                        english: 'Recite Third Kalima (Tamjeed) and Fourth Kalima (Tawheed)[8]',
                        hindi: 'तीसरा कलिमा (तमजीद) और चौथा कलिमा (तौहीद) पढ़ें',
                        bengali: 'তৃতীয় কালিমা (তামজীদ) ও চতুর্থ কালিমা (তাওহীদ) পড়ুন'
                    },
                    count: '10 times each'
                }
            ],
            benefits: {
                arabic: ['ترتيب أمور السنة القادمة', 'المغفرة العظمى', 'الحماية من البلاء', 'البركة في الحياة'],
                english: ['Arrangement of next year\'s affairs[8]', 'Greatest forgiveness[13]', 'Protection from calamities[8]', 'Blessings in life[8]'],
                hindi: ['अगले साल के मामलों की व्यवस्था', 'सबसे बड़ी मग़फ़िरत', 'आपदाओं से सुरक्षा', 'जीवन में बरकत'],
                bengali: ['আগামী বছরের বিষয়াদির ব্যবস্থাপনা', 'সর্বোচ্চ ক্ষমা', 'বিপদ থেকে সুরক্ষা', 'জীবনে বরকত']
            }
        },

        "shabe-qadr": {
            title: {
                arabic: 'صلاة ليلة القدر',
                english: 'Shab e Qadr Prayer',
                hindi: 'शब-ए-क़द्र की नमाज़',
                bengali: 'শবে কদরের নামাজ'
            },
            subtitle: {
                arabic: 'ليلة القدر - خير من ألف شهر',
                english: 'The Night of Power - Better than 1000 months',
                hindi: 'शक्ति की रात - हज़ार महीनों से बेहतर',
                bengali: 'শক্তির রাত - হাজার মাসের চেয়ে উত্তম'
            },
            description: {
                arabic: 'ليلة القدر أعظم ليالي السنة، خير من ألف شهر. تقع في العشر الأواخر من رمضان، وفيها نزل القرآن. يُستحب فيها الإكثار من النوافل والدعاء.',
                english: 'Laylatul Qadr is the greatest night of the year, better than 1000 months. It occurs in the last 10 nights of Ramadan when the Quran was revealed. Abundant nafl prayers and duas are recommended[9][14].',
                hindi: 'लैलतुल क़द्र साल की सबसे महान रात है, हज़ार महीनों से बेहतर। यह रमज़ान के आखिरी 10 दिनों में आती है जब क़ुरआन नाज़िल हुआ था। इसमें बहुत सारी नफ़्ल नमाज़ें और दुआएं सुन्नत हैं।',
                bengali: 'লায়লাতুল কদর বছরের সর্বোচ্চ রাত, হাজার মাসের চেয়ে উত্তম। এটি রমজানের শেষ ১০ রাতে আসে যখন কুরআন নাজিল হয়েছিল। এতে প্রচুর নফল নামাজ ও দোয়া সুন্নাত।'
            },
            method: {
                arabic: '1. صلاة 4 ركعات مع قراءة سورة القدر والإخلاص\n2. صلاة 10 ركعات (5×2) مع الإخلاص 21 مرة\n3. الإكثار من الدعاء والاستغفار\n4. قراءة القرآن والتسبيح\n5. صلاة 12 ركعة للمغفرة',
                english: '1. Pray 4 rakats with Surah Qadr and Ikhlas[14]\n2. Pray 10 rakats (5×2) with Ikhlas 21 times[9]\n3. Abundant duas and seeking forgiveness[9]\n4. Quran recitation and dhikr[9]\n5. 12 rakats for complete forgiveness',
                hindi: '1. सूरह क़द्र और इख़्लास के साथ 4 रकात\n2. इख़्लास 21 बार के साथ 10 रकात (5×2)\n3. बहुत सारी दुआएं और इस्तिग़फ़ार\n4. क़ुरआन पाठ और तस्बीह\n5. पूर्ण मग़फ़िरत के लिए 12 रकात',
                bengali: '1. সূরা কদর ও ইখলাসসহ ৪ রাকাত\n2. ইখলাস ২১ বার সহ ১০ রাকাত (৫×২)\n3. প্রচুর দোয়া ও ক্ষমা প্রার্থনা\n4. কুরআন তেলাওয়াত ও জিকির\n5. সম্পূর্ণ ক্ষমার জন্য ১২ রাকাত'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
                    transliteration: 'Allahumma innaka \'afuwwun tuhibbul-\'afwa fa\'fu \'anni',
                    translation: {
                        english: 'O Allah, You are Most Forgiving and You love forgiveness, so forgive me',
                        hindi: 'हे अल्लाह! तू माफ करने वाला है और माफी को पसंद करता है, सो मुझे माफ कर दे',
                        bengali: 'হে আল্লাহ! তুমি ক্ষমাশীল এবং ক্ষমা পছন্দ কর, তাই আমাকে ক্ষমা কর'
                    }
                },
                {
                    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ',
                    transliteration: 'La ilaha illa Allah Muhammadur Rasul Allah',
                    translation: {
                        english: 'There is no god but Allah, Muhammad is the Messenger of Allah[9]',
                        hindi: 'अल्लाह के सिवा कोई माबूद नहीं, मुहम्मद अल्लाह के रसूल हैं',
                        bengali: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, মুহাম্মদ আল্লাহর রাসূল'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Qadr',
                    arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ * وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ * لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ * تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ * سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
                    translation: {
                        english: 'Indeed, We sent the Quran down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months. The angels and the Spirit descend therein by permission of their Lord for every matter. Peace it is until the emergence of dawn[14]',
                        hindi: 'निःसंदेह हमने इसे (क़ुरआन को) शब-ए-क़द्र में नाज़िल किया है। और तुम क्या जानो कि शब-ए-क़द्र क्या है? शब-ए-क़द्र हज़ार महीनों से बेहतर है।',
                        bengali: 'নিশ্চয় আমি এটি (কুরআন) লায়লাতুল কদরে নাজিল করেছি। আর তুমি কি জান লায়লাতুল কদর কী? লায়লাতুল কদর হাজার মাসের চেয়ে উত্তম।'
                    }
                },
                {
                    name: 'Al-Ikhlas',
                    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
                    translation: {
                        english: 'Say: He is Allah, the One! Allah, the Eternal, Absolute. He begets not, nor is He begotten. And there is none like unto Him.',
                        hindi: 'कह दो: वह अल्लाह एक है। अल्लाह निरपेक्ष है। न उसकी कोई संतान है, न वह किसी की संतान है। और उसके समान कोई नहीं है।',
                        bengali: 'বলুন: তিনি আল্লাহ, একক। আল্লাহ অমুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও জন্ম দেওয়া হয়নি। এবং তাঁর সমতুল্য কেউ নেই।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
                    transliteration: 'Subhan Allah wal-hamdu lillah wa la ilaha illa Allah wa Allahu Akbar',
                    translation: {
                        english: 'Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Greatest',
                        hindi: 'अल्लाह पवित्र है, अल्लाह की प्रशंसा है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है',
                        bengali: 'আল্লাহ পবিত্র, আল্লাহর প্রশংসা, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ'
                    },
                    count: '100 times'
                }
            ],
            benefits: {
                arabic: ['أجر ألف شهر من العبادة', 'مغفرة جميع الذنوب', 'قبول الدعوات', 'نزول الملائكة والبركات'],
                english: ['Reward of 1000 months of worship[9]', 'Forgiveness of all sins[9]', 'Acceptance of all prayers', 'Descent of angels and blessings'],
                hindi: ['हज़ार महीने की इबादत का पुण्य', 'सभी पापों की माफी', 'सभी दुआओं की स्वीकृति', 'फरिश्तों का उतरना और बरकत'],
                bengali: ['হাজার মাসের ইবাদতের সওয়াব', 'সব গুনাহের ক্ষমা', 'সব দোয়া কবুল', 'ফেরেশতাদের অবতরণ ও বরকত']
            }
        },


        tahajjud: {
            title: {
                arabic: 'صلاة التهجد',
                english: 'Tahajjud Prayer',
                hindi: 'तहज्जुद की नमाज़',
                bengali: 'তাহাজ্জুদের নামাজ'
            },
            subtitle: {
                arabic: 'صلاة الليل - 2 إلى 12 ركعة',
                english: 'The Night Prayer - 2 to 12 Rakat',
                hindi: 'रात की नमाज़ - 2 से 12 रकात',
                bengali: 'রাতের নামাজ - 2 থেকে 12 রাকাত'
            },
            description: {
                arabic: 'صلاة التهجد سنة مؤكدة تُصلى في الثلث الأخير من الليل بعد النوم. وهي من أفضل النوافل وأقربها إلى الله تعالى.',
                english: 'Tahajjud is a highly recommended Sunnah prayer performed in the last third of the night after sleeping. It is among the best voluntary prayers and closest to Allah.',
                hindi: 'तहज्जुद एक अत्यधिक महत्वपूर्ण सुन्नत नमाज़ है जो रात के अंतिम तिहाई में सोने के बाद पढ़ी जाती है। यह सबसे बेहतरीन नफ़्ल नमाज़ों में से है।',
                bengali: 'তাহাজ্জুদ অত্যন্ত গুরুত্বপূর্ণ সুন্নাত নামাজ যা রাতের শেষ তৃতীয়াংশে ঘুমানোর পর পড়া হয়। এটি সর্বোত্তম নফল নামাজগুলোর অন্যতম।'
            },
            method: {
                arabic: '1. النوم بعد صلاة العشاء\n2. الاستيقاظ في الثلث الأخير\n3. الوضوء والنية\n4. صلاة ركعتين ركعتين\n5. الدعاء والاستغفار',
                english: '1. Sleep after Isha prayer\n2. Wake up in the last third of night\n3. Perform Wudu and make intention\n4. Pray in pairs of 2 rakats\n5. Make dua and seek forgiveness',
                hindi: '1. इशा के बाद सो जाएं\n2. रात के अंतिम तिहाई में उठें\n3. वुज़ू करें और नीयत करें\n4. 2-2 रकात करके पढ़ें\n5. दुआ और इस्तिग़फ़ार करें',
                bengali: '1. ইশার পর ঘুমিয়ে যান\n2. রাতের শেষ তৃতীয়াংশে উঠুন\n3. ওযু করে নিয়ত করুন\n4. 2-2 রাকাত করে পড়ুন\n5. দোয়া ও ইস্তেগফার করুন'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ',
                    transliteration: 'Allahumma laka\'l-hamdu anta nurus-samawati wa\'l-ardi wa man fihinn',
                    translation: {
                        english: 'O Allah, to You belongs all praise. You are the light of the heavens and earth and all that is in them',
                        hindi: 'हे अल्लाह! तेरे लिए ही सब प्रशंसा है। तू आसमानों और ज़मीन और जो कुछ उनमें है सबका नूर है',
                        bengali: 'হে আল্লাহ! সব প্রশংসা তোমারই। তুমি আসমান ও জমিনের এবং এতে যা কিছু আছে সবকিছুর নূর'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Muzammil',
                    arabic: 'يَا أَيُّهَا الْمُزَّمِّلُ * قُمِ اللَّيْلَ إِلَّا قَلِيلًا * نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا * أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
                    translation: {
                        english: 'O you wrapped in garments! Stand (to pray) all night, except a little. Half of it, or a little less than that. Or a little more; and recite the Quran (aloud) in a slow, (pleasant tone and) style.',
                        hindi: 'हे चादर ओढ़ने वाले! रात को (नमाज़ में) खड़े हो सिवाय थोड़ी सी के। आधी रात या उससे कुछ कम करो। या उससे कुछ ज़्यादा करो और क़ुरआन को ठहर-ठहरकर पढ़ो।',
                        bengali: 'হে চাদরাবৃত! রাত জেগে নামাজ পড়ুন সামান্য ছাড়া। অর্ধ রাত্রি অথবা তার চেয়ে কিছু কম। অথবা তার চেয়ে কিছু বেশি এবং কুরআন স্পষ্টভাবে তেলাওয়াত করুন।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                    transliteration: 'La ilaha illa Allah wahdahu la sharika lahu lahul mulku wa lahul hamdu wa huwa ala kulli shayin qadir',
                    translation: {
                        english: 'There is no god but Allah, alone without partner. His is the dominion and His is the praise, and He has power over all things',
                        hindi: 'अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई साझीदार नहीं। उसी का राज्य है और उसी के लिए प्रशंसा है, और वह हर चीज़ पर सक्षम है',
                        bengali: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তার কোনো শরীক নেই। রাজত্व তারই এবং প্রশংসা তারই, আর তিনি সবকিছুর ওপর ক্ষমতাবান'
                    },
                    count: '100 times'
                }
            ],
            benefits: {
                arabic: ['قرب من الله', 'إجابة الدعوات', 'محو الذنوب', 'راحة القلب'],
                english: ['Closeness to Allah', 'Acceptance of prayers', 'Forgiveness of sins', 'Peace of heart'],
                hindi: ['अल्लाह से निकटता', 'दुआओं की स्वीकृति', 'पापों की माफी', 'दिल की शांति'],
                bengali: ['আল্লাহর নৈকট্য', 'দোয়া কবুল', 'গুনাহ মাফ', 'মানসিক শান্তি']
            }
        },

        istikhara: {
            title: {
                arabic: 'صلاة الاستخارة',
                english: 'Istikhara Prayer',
                hindi: 'इस्तिख़ारा की नमाज़',
                bengali: 'ইস্তেখারার নামাজ'
            },
            subtitle: {
                arabic: 'صلاة طلب الخيرة - ركعتان',
                english: 'Prayer for Guidance - 2 Rakat',
                hindi: 'मार्गदर्शन की नमाज़ - 2 रकात',
                bengali: 'পথপ্রদর্শনের নামাজ - 2 রাকাত'
            },
            description: {
                arabic: 'صلاة الاستخارة سنة مؤكدة تُصلى عند الحاجة إلى اتخاذ قرار مهم. يطلب فيها المسلم من الله أن يختار له الخير وييسر له الأمر.',
                english: 'Istikhara is a recommended Sunnah prayer performed when making important decisions. In it, the Muslim asks Allah to choose what is best and make the matter easy.',
                hindi: 'इस्तिख़ारा एक सुन्नत नमाज़ है जो महत्वपूर्ण फ़ैसले लेते समय पढ़ी जाती है। इसमें मुसलमान अल्लाह से बेहतर चुनने और मामले को आसान बनाने की दुआ करता है।',
                bengali: 'ইস্তেখারা একটি সুন্নাত নামাজ যা গুরুত্বপূর্ণ সিদ্ধান্ত নেওয়ার সময় পড়া হয়। এতে মুসলিম আল্লাহর কাছে সর্বোত্তম বেছে নেওয়ার এবং বিষয়টি সহজ করার দোয়া করে।'
            },
            method: {
                arabic: '1. الوضوء والنية للاستخارة\n2. صلاة ركعتين بالفاتحة وسورة\n3. التسليم من الصلاة\n4. قراءة دعاء الاستخارة\n5. النوم والانتظار للرؤية أو الشعور',
                english: '1. Perform Wudu and make intention for Istikhara\n2. Pray 2 rakats with Al-Fatiha and another Surah\n3. Give Salam to end the prayer\n4. Recite the Istikhara dua\n5. Sleep and wait for a dream or feeling',
                hindi: '1. वुज़ू करें और इस्तिख़ारा की नीयत करें\n2. फ़ातिहा और दूसरी सूरह के साथ 2 रकात पढ़ें\n3. सलाम फेरकर नमाज़ समाप्त करें\n4. इस्तिख़ारा की दुआ पढ़ें\n5. सो जाएं और सपने या अहसास का इंतज़ार करें',
                bengali: '1. ওযু করুন এবং ইস্তেখারার নিয়ত করুন\n2. ফাতিহা ও অন্য সূরা দিয়ে 2 রাকাত পড়ুন\n3. সালাম ফিরিয়ে নামাজ শেষ করুন\n4. ইস্তেখারার দোয়া পড়ুন\n5. ঘুমান এবং স্বপ্ন বা অনুভূতির জন্য অপেক্ষা করুন'
            },
            duas: [
                {
                    arabic: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلا أَقْدِرُ وَتَعْلَمُ وَلا أَعْلَمُ وَأَنْتَ عَلامُ الْغُيُوبِ',
                    transliteration: 'Allahumma inni astakheeruka bi\'ilmika wa astaqdiruka biqudratika wa as\'aluka min fadlikal azeem fa\'innaka taqdiru wa la aqdir wa ta\'lamu wa la a\'lam wa anta allamul ghuyoob',
                    translation: {
                        english: 'O Allah, I seek Your guidance through Your knowledge, and I seek Your help through Your power, and I ask You of Your great bounty. For You have power while I have none, and You have knowledge while I have none, and You are the Knower of the unseen',
                        hindi: 'हे अल्लाह! मैं तेरे इल्म के ज़रिए तुझसे भलाई मांगता हूं और तेरी क़ुदरत के ज़रिए तुझसे मदद चाहता हूं और तेरे बड़े फ़ज़्ल से सवाल करता हूं। क्योंकि तू क़ादिर है और मैं क़ादिर नहीं, तू जानता है और मैं नहीं जानता, और तू गै़बों का जानने वाला है',
                        bengali: 'হে আল্লাহ! আমি তোমার জ্ঞানের মাধ্যমে তোমার কাছে কল্যাণ প্রার্থনা করি এবং তোমার ক্ষমতার মাধ্যমে তোমার কাছে সাহায্য চাই এবং তোমার মহান অনুগ্রহ থেকে প্রার্থনা করি। কারণ তুমি ক্ষমতাবান আর আমি ক্ষমতাবান নই, তুমি জান আর আমি জানি না, আর তুমি অদৃশ্যের জ্ঞাতা'
                    }
                }
            ],
            surahs: [
                {
                    name: 'Al-Kafirun',
                    arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ * لَا أَعْبُدُ مَا تَعْبُدُونَ * وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ * وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ * وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ * لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
                    translation: {
                        english: 'Say: O you disbelievers! I worship not that which you worship; Nor worship you that which I worship. And I shall not worship that which you worship. Nor will you worship that which I worship. Unto you your religion, and unto me my religion.',
                        hindi: 'कह दो: हे काफ़िरो! मैं उसकी इबादत नहीं करता जिसकी तुम इबादत करते हो। और न तुम उसकी इबादत करने वाले हो जिसकी मैं इबादत करता हूं। और न मैं उसकी इबादत करने वाला हूं जिसकी तुमने इबादत की है। और न तुम उसकी इबादत करने वाले हो जिसकी मैं इबादत करता हूं। तुम्हारे लिए तुम्हारा दीन और मेरे लिए मेरा दीन।',
                        bengali: 'বলুন: হে কাফিরগণ! আমি তার ইবাদত করি না যার ইবাদত তোমরা কর। এবং তোমরাও তার ইবাদত কর না যার ইবাদত আমি করি। এবং আমি তার ইবাদতকারী নই যার ইবাদত তোমরা করেছ। এবং তোমরাও তার ইবাদতকারী নও যার ইবাদত আমি করি। তোমাদের জন্য তোমাদের দীন এবং আমার জন্য আমার দীন।'
                    }
                }
            ],
            tasbih: [
                {
                    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
                    transliteration: 'Allahumma salli ala Muhammadin wa ala ali Muhammad',
                    translation: {
                        english: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad',
                        hindi: 'हे अल्लाह! मुहम्मद पर और मुहम्मद के परिवार पर रहमत भेज',
                        bengali: 'হে আল্লাহ! মুহাম্মদের উপর এবং মুহাম্মদের পরিবারের উপর রহমত পাঠান'
                    },
                    count: '3 times'
                }
            ],
            benefits: {
                arabic: ['الهداية في القرارات المهمة', 'راحة البال', 'التوفيق من الله', 'تجنب الندم'],
                english: ['Guidance in important decisions', 'Peace of mind', 'Success from Allah', 'Avoiding regret'],
                hindi: ['महत्वपूर्ण फ़ैसलों में मार्गदर्शन', 'मन की शांति', 'अल्लाह से तौफ़ीक़', 'पछतावे से बचना'],
                bengali: ['গুরুত্বপূর্ণ সিদ্ধান্তে পথপ্রদর্শন', 'মানসিক শান্তি', 'আল্লাহর পক্ষ থেকে তওফীক', 'অনুশোচনা থেকে বাঁচা']
            }
        },

        // Add these 6 prayers to your existing salahDataTemplate object:

hajat: {
    title: {
        arabic: 'صلاة الحاجة',
        english: 'Salatul Hajat',
        hindi: 'हाजत की नमाज़',
        bengali: 'হাজাতের নামাজ'
    },
    subtitle: {
        arabic: 'صلاة الحاجة - ركعتان',
        english: 'The Prayer of Need - 2 Rakat',
        hindi: 'आवश्यकता की नमाज़ - 2 रकात',
        bengali: 'প্রয়োজনের নামাজ - ২ রাকাত'
    },
    description: {
        arabic: 'صلاة الحاجة سنة مستحبة تُصلى عند الحاجة إلى شيء من أمور الدنيا أو الآخرة. يدعو فيها المسلم ربه ويطلب منه قضاء حاجته وتفريج كربه.',
        english: 'Salatul Hajat is a recommended Sunnah prayer performed when in need of something from worldly or religious matters. The Muslim supplicates to Allah and asks for fulfillment of needs and relief from distress[23][24].',
        hindi: 'सलातुल हाजत एक मुस्तहब सुन्नत नमाज़ है जो दुनियावी या धार्मिक मामलों में किसी चीज़ की ज़रूरत के समय पढ़ी जाती है। इसमें मुसलमान अपने रब से दुआ करता है और अपनी ज़रूरत पूरी करने की प्रार्थना करता है।',
        bengali: 'সালাতুল হাজাত একটি মুস্তাহাব সুন্নাত নামাজ যা পার্থিব বা ধর্মীয় বিষয়ে কোনো প্রয়োজনের সময় পড়া হয়। এতে মুসলিম আল্লাহর কাছে দোয়া করে এবং প্রয়োজন পূরণের জন্য প্রার্থনা করে।'
    },
    method: {
        arabic: '1. الوضوء الكامل والنية لصلاة الحاجة\n2. صلاة ركعتين بالفاتحة وسورة\n3. التسليم من الصلاة\n4. الصلاة على النبي صلى الله عليه وسلم\n5. قراءة دعاء الحاجة\n6. الدعاء بما يريد من خير الدنيا والآخرة',
        english: '1. Perform complete Wudu and make intention for Hajat prayer[24]\n2. Pray 2 rakats with Al-Fatiha and another Surah\n3. Give Salam to complete the prayer\n4. Send blessings upon Prophet Muhammad (PBUH)[24]\n5. Recite the specific Hajat dua\n6. Make personal supplications for worldly and religious needs',
        hindi: '1. पूरा वुज़ू करें और हाजत की नमाज़ की नीयत करें\n2. फ़ातिहा और दूसरी सूरह के साथ 2 रकात पढ़ें\n3. सलाम फेरकर नमाज़ पूरी करें\n4. नबी صلى الله عليه وسلم पर दरूद भेजें\n5. हाजत की खास दुआ पढ़ें\n6. दुनिया और आख़िरत की भलाई के लिए निजी दुआ करें',
        bengali: '1. সম্পূর্ণ ওযু করুন ও হাজাত নামাজের নিয়ত করুন\n2. ফাতিহা ও অন্য সূরা দিয়ে ২ রাকাত পড়ুন\n3. সালাম ফিরিয়ে নামাজ সম্পূর্ণ করুন\n4. নবী صلى الله عليه وسلم এর ওপর দরূদ পাঠান\n5. হাজাতের বিশেষ দোয়া পড়ুন\n6. দুনিয়া ও আখেরাতের কল্যাণের জন্য ব্যক্তিগত দোয়া করুন'
    },
    duas: [
        {
            arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
            transliteration: 'La ilaha illa Allah al-Haleem al-Kareem, Subhan Allah Rabbi\'l-\'arsh al-\'azeem, al-hamdu lillahi Rabbi\'l-\'alameen',
            translation: {
                english: 'There is no god but Allah, the Forbearing, the Generous. Glory be to Allah, Lord of the Mighty Throne. Praise be to Allah, Lord of the worlds[24]',
                hindi: 'अल्लाह के सिवा कोई माबूद नहीं जो सबर वाला और करीम है। अल्लाह पाक है जो अर्श-ए-अज़ीम का रब है। सारी तारीफ़ अल्लाह के लिए है जो आलमों का रब है',
                bengali: 'আল্লাহ ছাড়া কোনো ইলাহ নেই যিনি ধৈর্যশীল ও দানশীল। আল্লাহ পবিত্র যিনি মহান আরশের প্রভু। সমস্ত প্রশংসা আল্লাহর যিনি জগতসমূহের প্রতিপালক'
            }
        },
        {
            arabic: 'أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ فَإِنَّهُ لَا يَمْلِكُهَا إِلَّا أَنْتَ',
            transliteration: 'As\'aluka min fadlika wa rahmatika fa\'innahu la yamlikuha illa ant',
            translation: {
                english: 'I ask You of Your favor and mercy, for indeed no one possesses them except You[23]',
                hindi: 'मैं तुझसे तेरे फ़ज़्ल और रहमत की दरख्वास्त करता हूं क्योंकि तेरे सिवा किसी के पास यह नहीं है',
                bengali: 'আমি তোমার অনুগ্রহ ও রহমত প্রার্থনা করি, কারণ তুমি ছাড়া কারো কাছে এগুলো নেই'
            }
        }
    ],
    surahs: [
        {
            name: 'Al-Fatiha',
            arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
            translation: {
                english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ',
            transliteration: 'Allahumma salli ala Muhammadin wa ala ali Muhammad',
            translation: {
                english: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad',
                hindi: 'हे अल्लाह! मुहम्मद पर और मुहम्मद के परिवार पर रहमत भेज',
                bengali: 'হে আল্লাহ! মুহাম্মদের উপর এবং মুহাম্মদের পরিবারের উপর রহমত পাঠান'
            },
            count: '3 times'
        }
    ],
    benefits: {
        arabic: ['إجابة الدعوات', 'قضاء الحوائج', 'تفريج الكروب', 'راحة القلب'],
        english: ['Acceptance of supplications[23]', 'Fulfillment of needs[24]', 'Relief from distress', 'Peace of heart'],
        hindi: ['दुआओं की स्वीकृति', 'ज़रूरतों की पूर्ति', 'परेशानियों से राहत', 'दिल की शांति'],
        bengali: ['দোয়া কবুল', 'প্রয়োজন পূরণ', 'সমস্যা থেকে মুক্তি', 'মানসিক শান্তি']
    }
},

tawbah: {
    title: {
        arabic: 'صلاة التوبة',
        english: 'Salatul Tawbah',
        hindi: 'तौबा की नमाज़',
        bengali: 'তওবার নামাজ'
    },
    subtitle: {
        arabic: 'صلاة التوبة - ركعتان',
        english: 'The Prayer of Repentance - 2 Rakat',
        hindi: 'पश्चाताप की नमाज़ - 2 रकात',
        bengali: 'অনুতাপের নামাজ - ২ রাকাত'
    },
    description: {
        arabic: 'صلاة التوبة سنة مشروعة تُصلى عند التوبة من أي ذنب صغير أو كبير. يصليها المسلم ندماً على ما فعل وطلباً للمغفرة من الله تعالى.',
        english: 'Salatul Tawbah is a legislated Sunnah prayer performed when repenting from any sin, whether major or minor. Muslims pray it in regret for their actions and seeking Allah\'s forgiveness[25][31].',
        hindi: 'सलातुल तौबा एक मशरू सुन्नत नमाज़ है जो किसी भी छोटे या बड़े गुनाह से तौबा करते समय पढ़ी जाती है। मुसलमान इसे अपने कार्यों पर पछतावे और अल्लाह की माफी की तलब में पढ़ता है।',
        bengali: 'সালাতুল তওবা একটি বৈধ সুন্নাত নামাজ যা যেকোনো ছোট বা বড় গুনাহ থেকে তওবা করার সময় পড়া হয়। মুসলিমরা নিজেদের কর্মের জন্য অনুশোচনা ও আল্লাহর ক্ষমা প্রার্থনায় এটি পড়ে।'
    },
    method: {
        arabic: '1. الوضوء الكامل بعد ارتكاب الذنب\n2. النية للتوبة وصلاة ركعتين\n3. قراءة الفاتحة وسورة بخشوع\n4. التسليم من الصلاة\n5. الاستغفار والتوبة النصوح\n6. العزم على عدم العودة للذنب',
        english: '1. Perform complete Wudu after committing the sin\n2. Make intention for repentance and pray 2 rakats[31]\n3. Recite Al-Fatiha and Surah with humility\n4. Complete prayer with Salam\n5. Seek forgiveness and sincere repentance[25]\n6. Resolve not to return to the sin',
        hindi: '1. गुनाह करने के बाद पूरा वुज़ू करें\n2. तौबा की नीयत करके 2 रकात पढ़ें\n3. विनम्रता के साथ फ़ातिहा और सूरह पढ़ें\n4. सलाम के साथ नमाज़ पूरी करें\n5. इस्तिग़फ़ार और सच्ची तौबा करें\n6. गुनाह की तरफ़ वापस न जाने का इरादा करें',
        bengali: '1. গুনাহ করার পর সম্পূর্ণ ওযু করুন\n2. তওবার নিয়ত করে ২ রাকাত পড়ুন\n3. বিনয়ের সাথে ফাতিহা ও সূরা পড়ুন\n4. সালামের সাথে নামাজ সম্পূর্ণ করুন\n5. ইস্তেগফার ও সত্যিকারের তওবা করুন\n6. গুনাহের দিকে ফিরে না যাওয়ার সংকল্প করুন'
    },
    duas: [
        {
            arabic: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ',
            transliteration: 'Allahumma inni zalamtu nafsi zulman kathiran wa la yaghfiru\'dh-dhunuba illa ant, faghfir li maghfiratan min \'indika warhamni innaka anta\'l-Ghafur ar-Rahim',
            translation: {
                english: 'O Allah, indeed I have wronged myself with great injustice. And no one can forgive sins except You. So forgive me with forgiveness from Your side and have mercy on me. You are indeed Oft-Forgiving, Most Merciful[25]',
                hindi: 'हे अल्लाह! मैंने अपने नफ़्स पर बहुत ज़ुल्म किया है और तेरे सिवा कोई गुनाहों को माफ नहीं कर सकता। तो अपनी तरफ़ से मुझे माफ कर दे और मुझ पर रहम कर। तू बख़्शने वाला और रहम करने वाला है',
                bengali: 'হে আল্লাহ! আমি নিজের ওপর বড় অন্যায় করেছি এবং তুমি ছাড়া কেউ গুনাহ মাফ করতে পারে না। তাই তোমার পক্ষ থেকে আমাকে ক্ষমা কর ও দয়া কর। তুমি অবশ্যই ক্ষমাশীল ও দয়ালু'
            }
        },
        {
            arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ',
            transliteration: 'Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana \'abduk, wa ana ala \'ahdika wa wa\'dika mastata\'t',
            translation: {
                english: 'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I am upon Your covenant and promise as much as I am able[25]',
                hindi: 'हे अल्लाह! तू मेरा रब है, तेरे सिवा कोई माबूद नहीं। तूने मुझे पैदा किया है और मैं तेरा बंदा हूं, और मैं तेरे अहद और वादे पर हूं जितनी मेरी ताकत है',
                bengali: 'হে আল্লাহ! তুমি আমার প্রভু, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ এবং আমি তোমার বান্দা, আর আমি তোমার প্রতিশ্রুতি ও অঙ্গীকারের ওপর আছি যতটুকু সক্ষম'
            }
        }
    ],
    surahs: [
        {
            name: 'Al-Fatiha',
            arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ * الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ * الرَّحْمَٰنِ الرَّحِيمِ * مَالِكِ يَوْمِ الدِّينِ * إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ * اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
            translation: {
                english: 'In the name of Allah, Most Gracious, Most Merciful. Praise be to Allah, Lord of all the worlds...',
                hindi: 'अल्लाह के नाम से जो दयावान और कृपाशील है। सारी प्रशंसा अल्लाह के लिए है जो सभी जगतों का पालनहार है...',
                bengali: 'পরম করুণাময় ও অসীম দয়ালু আল্লাহর নামে। সমস্ত প্রশংসা আল্লাহর যিনি সকল জগতের প্রতিপালক...'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'أَسْتَغْفِرُ اللَّهَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
            transliteration: 'Astaghfiru Allah alladhi la ilaha illa Huwa\'l-Hayy al-Qayyum wa atubu ilayh',
            translation: {
                english: 'I seek forgiveness from Allah besides whom there is no god, the Living, the Sustainer, and I repent to Him',
                hindi: 'मैं अल्लाह से माफी मांगता हूं जिसके सिवा कोई माबूद नहीं, जो ज़िंदा और कायम रहने वाला है, और मैं उससे तौबा करता हूं',
                bengali: 'আমি আল্লাহর কাছে ক্ষমা প্রার্থনা করি যিনি ছাড়া কোনো ইলাহ নেই, যিনি চিরঞ্জীব ও চিরস্থায়ী, এবং আমি তাঁর কাছে তওবা করি'
            },
            count: '100 times'
        }
    ],
    benefits: {
        arabic: ['محو جميع الذنوب', 'قبول التوبة', 'راحة الضمير', 'القرب من الله'],
        english: ['Erasure of all sins[31]', 'Acceptance of repentance[25]', 'Peace of conscience', 'Closeness to Allah'],
        hindi: ['सभी गुनाहों का मिटना', 'तौबा की स्वीकृति', 'अंतरात्मा की शांति', 'अल्लाह से निकटता'],
        bengali: ['সমস্ত গুনাহ মিটে যাওয়া', 'তওবা কবুল', 'বিবেকের শান্তি', 'আল্লাহর নৈকট্য']
    }
},

tasbih: {
    title: {
        arabic: 'صلاة التسبيح',
        english: 'Salatul Tasbih',
        hindi: 'तसबीह की नमाज़',
        bengali: 'তাসবিহ নামাজ'
    },
    subtitle: {
        arabic: 'صلاة التسبيح - أربع ركعات',
        english: 'The Prayer of Glorification - 4 Rakat',
        hindi: 'तस्बीह की नमाज़ - 4 रकात',
        bengali: 'তাসবিহ নামাজ - ৪ রাকাত'
    },
    description: {
        arabic: 'صلاة التسبيح أربع ركعات يُقرأ فيها تسبيح معين 300 مرة. وهي صلاة عظيمة الأجر تُكفر الذنوب وتجلب البركات، 75 تسبيحة في كل ركعة.',
        english: 'Salatul Tasbih is a 4-rakat prayer with specific glorifications recited 300 times. It is a prayer of great reward that forgives sins and brings blessings, with 75 glorifications in each rakat[28][33][36].',
        hindi: 'सलातुल तसबीह 4 रकात की नमाज़ है जिसमें विशेष तस्बीह 300 बार पढ़ी जाती है। यह महान पुण्य की नमाज़ है जो गुनाहों को माफ करती है और बरकत लाती है, हर रकात में 75 तस्बीह।',
        bengali: 'সালাতুল তাসবিহ ৪ রাকাতের নামাজ যাতে নির্দিষ্ট তাসবিহ ৩০০ বার পড়া হয়। এটি মহান সওয়াবের নামাজ যা গুনাহ মাফ করে ও বরকত আনে, প্রতি রাকাতে ৭৫ তাসবিহ।'
    },
    method: {
        arabic: '1. النية لصلاة التسبيح أربع ركعات\n2. قراءة التسبيح 15 مرة بعد الثناء\n3. قراءة التسبيح 10 مرات بعد القراءة\n4. قراءة التسبيح 10 مرات في الركوع\n5. قراءة التسبيح 10 مرات بعد الركوع\n6. قراءة التسبيح 10 مرات في كل سجدة\n7. قراءة التسبيح 10 مرات بين السجدتين',
        english: '1. Make intention for 4 rakats of Tasbih prayer[28]\n2. Recite tasbih 15 times after opening supplication[36]\n3. Recite tasbih 10 times after Quran recitation[28]\n4. Recite tasbih 10 times in Ruku[36]\n5. Recite tasbih 10 times after Ruku[28]\n6. Recite tasbih 10 times in each Sajdah[36]\n7. Recite tasbih 10 times between two Sajdahs[28]',
        hindi: '1. तसबीह की 4 रकात नमाज़ की नीयत करें\n2. सना के बाद 15 बार तस्बीह पढ़ें\n3. क़ुरआन पढ़ने के बाद 10 बार तस्बीह\n4. रुकू में 10 बार तस्बीह पढ़ें\n5. रुकू के बाद 10 बार तस्बीह\n6. हर सजदे में 10 बार तस्बीह\n7. दो सजदों के बीच 10 बार तस्बीह',
        bengali: '1. তাসবিহ নামাজের ৪ রাকাতের নিয়ত করুন\n2. সানার পর ১৫ বার তাসবিহ পড়ুন\n3. কুরআন পড়ার পর ১০ বার তাসবিহ\n4. রুকুতে ১০ বার তাসবিহ পড়ুন\n5. রুকুর পর ১০ বার তাসবিহ\n6. প্রতি সিজদায় ১০ বার তাসবিহ\n7. দুই সিজদার মাঝে ১০ বার তাসবিহ'
    },
    duas: [
        {
            arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
            transliteration: 'Subhan Allah wal-hamdu lillah wa la ilaha illa Allah wa Allahu Akbar',
            translation: {
                english: 'Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Greatest[28][36]',
                hindi: 'अल्लाह पवित्र है, अल्लाह की प्रशंसा है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है',
                bengali: 'আল্লাহ পবিত্র, আল্লাহর প্রশংসা, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ'
            }
        }
    ],
    surahs: [
        {
            name: 'Any Surah after Al-Fatiha',
            arabic: 'يُستحب قراءة أي سورة بعد الفاتحة في كل ركعة',
            translation: {
                english: 'It is recommended to recite any Surah after Al-Fatiha in each rakat[33]',
                hindi: 'हर रकात में अल-फ़ातिहा के बाद कोई भी सूरह पढ़ना मुस्तहब है',
                bengali: 'প্রতি রাকাতে আল-ফাতিহার পর যেকোনো সূরা পড়া মুস্তাহাব'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
            transliteration: 'Subhan Allah wal-hamdu lillah wa la ilaha illa Allah wa Allahu Akbar',
            translation: {
                english: 'Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Greatest',
                hindi: 'अल्लाह पवित्र है, अल्लाह की प्रशंसा है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है',
                bengali: 'আল্লাহ পবিত্র, আল্লাহর প্রশংসা, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ'
            },
            count: '300 times total'
        }
    ],
    benefits: {
        arabic: ['مغفرة جميع الذنوب السابقة واللاحقة', 'الأجر العظيم', 'محو السيئات', 'رفع الدرجات'],
        english: ['Forgiveness of all past and future sins[33][36]', 'Great reward[28]', 'Erasure of bad deeds', 'Elevation of ranks'],
        hindi: ['पिछले और भविष्य के सभी गुनाहों की माफी', 'महान पुण्य', 'बुराइयों का मिटना', 'दर्जों की बुलंदी'],
        bengali: ['অতীত ও ভবিষ্যতের সব গুনাহের ক্ষমা', 'মহান সওয়াব', 'মন্দ কাজ মিটে যাওয়া', 'মর্যাদা বৃদ্ধি']
    }
},

duha: {
    title: {
        arabic: 'صلاة الضحى',
        english: 'Duha Prayer',
        hindi: 'चाश्त की नमाज़',
        bengali: 'চাশত নামাজ'
    },
    subtitle: {
        arabic: 'صلاة الضحى - 2 إلى 8 ركعات',
        english: 'The Forenoon Prayer - 2 to 8 Rakat',
        hindi: 'दोपहर पूर्व की नमाज़ - 2 से 8 रकात',
        bengali: 'পূর্বাহ্নের নামাজ - ২ থেকে ৮ রাকাত'
    },
    description: {
        arabic: 'صلاة الضحى سنة مؤكدة تُصلى في الضحى بعد ارتفاع الشمس وقبل الزوال. تُصلى من 2 إلى 8 ركعات، وهي صلاة الأوابين التائبين إلى الله.',
        english: 'Duha prayer is a confirmed Sunnah prayed in the forenoon after sunrise and before noon. It ranges from 2 to 8 rakats, and it is the prayer of the Awabeen (those who turn to Allah)[29][32].',
        hindi: 'दुहा की नमाज़ एक सुन्नत-ए-मुअक्किदा है जो सूर्योदय के बाद और दोपहर से पहले पढ़ी जाती है। यह 2 से 8 रकात तक होती है, और यह अव्वाबीन (अल्लाह की तरफ़ रुजू करने वालों) की नमाज़ है।',
        bengali: 'দুহার নামাজ একটি সুন্নাতে মুআক্কাদা যা সূর্যোদয়ের পর ও দুপুরের আগে পড়া হয়। এটি ২ থেকে ৮ রাকাত পর্যন্ত হয়, এবং এটি আওয়াবীনদের (আল্লাহর দিকে প্রত্যাবর্তনকারী) নামাজ।'
    },
    method: {
        arabic: '1. النية لصلاة الضحى\n2. صلاة ركعتين ركعتين حتى 8 ركعات\n3. القراءة سراً في جميع الركعات\n4. الأفضل 4 ركعات أو 6 ركعات\n5. الدعاء بعد الصلاة\n6. الوقت من الإشراق حتى قبل الزوال',
        english: '1. Make intention for Duha prayer[32]\n2. Pray 2 rakats at a time up to 8 total[29]\n3. Recite silently in all rakats\n4. Preferably 4 or 6 rakats[32]\n5. Make dua after prayer\n6. Time: from sunrise until before noon[29]',
        hindi: '1. दुहा की नमाज़ की नीयत करें\n2. 2-2 रकात करके कुल 8 तक पढ़ें\n3. सभी रकातों में चुपचाप पढ़ें\n4. बेहतर यह है कि 4 या 6 रकात पढ़ें\n5. नमाज़ के बाद दुआ करें\n6. समय: सूर्योदय से दोपहर से पहले तक',
        bengali: '1. দুহা নামাজের নিয়ত করুন\n2. ২-২ রাকাত করে মোট ৮ পর্যন্ত পড়ুন\n3. সব রাকাতে নিঃশব্দে পড়ুন\n4. উত্তম হল ৪ বা ৬ রাকাত পড়া\n5. নামাজের পর দোয়া করুন\n6. সময়: সূর্যোদয় থেকে দুপুরের আগে পর্যন্ত'
    },
    duas: [
        {
            arabic: 'اللَّهُمَّ إِنَّ الضُّحَى ضُحَاؤُكَ وَالْبَهَاءَ بَهَاؤُكَ وَالْجَمَالَ جَمَالُكَ وَالْقُوَّةَ قُوَّتُكَ وَالْقُدْرَةَ قُدْرَتُكَ',
            transliteration: 'Allahumma inna\'d-duha duha\'uka wal-baha\'a baha\'uka wal-jamala jamaluka wal-quwwata quwwatuka wal-qudrata qudratuk',
            translation: {
                english: 'O Allah, indeed the forenoon is Your forenoon, the brightness is Your brightness, the beauty is Your beauty, the strength is Your strength, and the power is Your power',
                hindi: 'हे अल्लाह! निःसंदेह चाश्त तेरा चाश्त है, रौनक़ तेरी रौनक़ है, जमाल तेरा जमाल है, ताकत तेरी ताकत है, और कुदरत तेरी कुदरत है',
                bengali: 'হে আল্লাহ! নিশ্চয় পূর্বাহ্ন তোমার পূর্বাহ্ন, উজ্জ্বলতা তোমার উজ্জ্বলতা, সৌন্দর্য তোমার সৌন্দর্য, শক্তি তোমার শক্তি, আর ক্ষমতা তোমার ক্ষমতা'
            }
        }
    ],
    surahs: [
        {
            name: 'Ad-Duha',
            arabic: 'وَالضُّحَىٰ * وَاللَّيْلِ إِذَا سَجَىٰ * مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ * وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ',
            translation: {
                english: 'By the morning brightness, And by the night when it covers with darkness, Your Lord has not taken leave of you, nor has He detested you. And the Hereafter is better for you than the first [life][29]',
                hindi: 'चाश्त की कसम, और रात की कसम जब वह छा जाए, तुम्हारे रब ने तुम्हें नहीं छोड़ा है और न ही नाराज़ हुआ है। और आखिरत तुम्हारे लिए पहले से बेहतर है',
                bengali: 'পূর্বাহ্নের শপথ, আর রাতের শপথ যখন তা স্থির হয়, তোমার প্রভু তোমাকে পরিত্যাগ করেননি এবং অসন্তুষ্টও হননি। আর আখেরাত তোমার জন্য পূর্বের চেয়ে উত্তম'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
            transliteration: 'Subhan Allah wa bihamdih',
            translation: {
                english: 'Glory be to Allah and with His praise',
                hindi: 'अल्लाह पाक है और उसकी तारीफ़ के साथ',
                bengali: 'আল্লাহ পবিত্র ও তাঁর প্রশংসা সহকারে'
            },
            count: '100 times'
        }
    ],
    benefits: {
        arabic: ['أجر حج وعمرة تامة', 'كفاف اليوم كله', 'صدقة عن كل مفصل', 'حماية من الفقر'],
        english: ['Reward of complete Hajj and Umrah[29]', 'Sufficiency for the entire day[32]', 'Charity for every joint[29]', 'Protection from poverty'],
        hindi: ['पूर्ण हज और उमरे का पुण्य', 'पूरे दिन की काफी', 'हर जोड़ के लिए सदका', 'गरीबी से सुरक्षा'],
        bengali: ['পূর্ণ হজ ও উমরার সওয়াব', 'সারাদিনের জন্য যথেষ্ট', 'প্রতি জয়েন্টের জন্য সদকা', 'দারিদ্র্য থেকে সুরক্ষা']
    }
},

awabeen: {
    title: {
        arabic: 'صلاة الأوابين',
        english: 'Awabeen Prayer',
        hindi: 'अव्वाबीन की नमाज़',
        bengali: 'আওয়াবীন নামাজ'
    },
    subtitle: {
        arabic: 'صلاة الأوابين - 6 ركعات',
        english: 'Prayer of the Penitent - 6 Rakat',
        hindi: 'तौबा करने वालों की नमाज़ - 6 रकात',
        bengali: 'অনুতাপকারীদের নামাজ - ৬ রাকাত'
    },
    description: {
        arabic: 'صلاة الأوابين هي النوافل التي تُصلى بين المغرب والعشاء، وقيل هي صلاة الضحى. الأوابون هم التائبون الراجعون إلى الله تعالى.',
        english: 'Awabeen prayer refers to voluntary prayers performed between Maghrib and Isha, though some scholars say it refers to Duha prayer. Awabeen means those who repent and return to Allah[26][35].',
        hindi: 'अव्वाबीन की नमाज़ मगरिब और इशा के बीच पढ़ी जाने वाली नफ़्ल नमाज़ें हैं, हालांकि कुछ उलेमा कहते हैं कि यह दुहा की नमाज़ है। अव्वाबीन का मतलब है तौबा करने वाले और अल्लाह की तरफ़ लौटने वाले।',
        bengali: 'আওয়াবীন নামাজ মাগরিব ও এশার মধ্যে পড়া নফল নামাজ, যদিও কিছু আলেম বলেন এটি দুহার নামাজ। আওয়াবীন মানে তওবাকারী ও আল্লাহর দিকে প্রত্যাবর্তনকারী।'
    },
    method: {
        arabic: '1. النية لصلاة الأوابين بين المغرب والعشاء\n2. صلاة 6 ركعات (2+2+2)\n3. القراءة سراً في جميع الركعات\n4. يمكن زيادتها إلى 20 ركعة\n5. الدعاء والاستغفار بعد الصلاة\n6. الوقت من بعد سنة المغرب إلى العشاء',
        english: '1. Make intention for Awabeen prayer between Maghrib and Isha[26]\n2. Pray 6 rakats (2+2+2)\n3. Recite silently in all rakats\n4. Can be increased up to 20 rakats[26]\n5. Make dua and seek forgiveness after prayer[35]\n6. Time: after Maghrib Sunnah until Isha',
        hindi: '1. मगरिब और इशा के बीच अव्वाबीन की नीयत करें\n2. 6 रकात (2+2+2) पढ़ें\n3. सभी रकातों में चुपचाप पढ़ें\n4. 20 रकात तक बढ़ाया जा सकता है\n5. नमाज़ के बाद दुआ और इस्तिग़फ़ार करें\n6. समय: मगरिब की सुन्नत के बाद से इशा तक',
        bengali: '1. মাগরিব ও এশার মধ্যে আওয়াবীনের নিয়ত করুন\n2. ৬ রাকাত (২+২+২) পড়ুন\n3. সব রাকাতে নিঃশব্দে পড়ুন\n4. ২০ রাকাত পর্যন্ত বাড়ানো যায়\n5. নামাজের পর দোয়া ও ইস্তেগফার করুন\n6. সময়: মাগরিবের সুন্নাতের পর থেকে এশা পর্যন্ত'
    },
    duas: [
        {
            arabic: 'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي',
            transliteration: 'Allahumma ghfir li dhanbi wa wassi\' li fi dari wa barik li fi rizqi',
            translation: {
                english: 'O Allah, forgive my sins, expand my home for me, and bless my sustenance',
                hindi: 'हे अल्लाह! मेरे गुनाहों को माफ कर दे, मेरे घर में कुशादगी दे और मेरे रिज़्क में बरकत दे',
                bengali: 'হে আল্লাহ! আমার গুনাহ মাফ কর, আমার ঘরে প্রশস্ততা দাও এবং আমার রিজিকে বরকত দাও'
            }
        }
    ],
    surahs: [
        {
            name: 'Al-Fatiha and short Surahs',
            arabic: 'يُستحب قراءة الفاتحة والسور القصيرة',
            translation: {
                english: 'It is recommended to recite Al-Fatiha and short Surahs[26]',
                hindi: 'अल-फ़ातिहा और छोटी सूरतें पढ़ना मुस्तहब है',
                bengali: 'আল-ফাতিহা ও ছোট সূরাগুলো পড়া মুস্তাহাব'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
            transliteration: 'Subhan Allah wal-hamdu lillah wa la ilaha illa Allah wa Allahu Akbar',
            translation: {
                english: 'Glory be to Allah, praise be to Allah, there is no god but Allah, and Allah is Greatest',
                hindi: 'अल्लाह पवित्र है, अल्लाह की प्रशंसा है, अल्लाह के सिवा कोई माबूद नहीं, और अल्लाह सबसे महान है',
                bengali: 'আল্লাহ পবিত্র, আল্লাহর প্রশংসা, আল্লাহ ছাড়া কোনো ইলাহ নেই, আর আল্লাহ সর্বশ্রেষ্ঠ'
            },
            count: 'After prayer'
        }
    ],
    benefits: {
        arabic: ['التوبة والرجوع إلى الله', 'تكفير السيئات', 'رفع الدرجات', 'البركة في المساء'],
        english: ['Repentance and return to Allah[35]', 'Expiation of sins', 'Elevation of ranks', 'Blessings in the evening'],
        hindi: ['तौबा और अल्लाह की तरफ़ रुजू', 'गुनाहों का कफ़्फ़ारा', 'दर्जों की बुलंदी', 'शाम में बरकत'],
        bengali: ['তওবা ও আল্লাহর দিকে প্রত্যাবর্তন', 'গুনাহের কাফফারা', 'মর্যাদা বৃদ্ধি', 'সন্ধ্যায় বরকত']
    }
},

ishraq: {
    title: {
        arabic: 'صلاة الإشراق',
        english: 'Ishraq Prayer',
        hindi: 'इश्राक़ की नमाज़',
        bengali: 'ইশরাক নামাজ'
    },
    subtitle: {
        arabic: 'صلاة الإشراق - ركعتان إلى 4',
        english: 'The Sunrise Prayer - 2 to 4 Rakat',
        hindi: 'सूर्योदय की नमाज़ - 2 से 4 रकात',
        bengali: 'সূর্যোদয় নামাজ - ২ থেকে ৪ রাকাত'
    },
    description: {
        arabic: 'صلاة الإشراق نافلة تُصلى بعد شروق الشمس بـ 12-15 دقيقة. لها أجر عظيم يعادل حج وعمرة تامة تامة. هي من أفضل النوافل.',
        english: 'Ishraq prayer is a voluntary prayer performed 12-15 minutes after sunrise. It has great reward equivalent to a complete Hajj and Umrah. It is among the best voluntary prayers[27].',
        hindi: 'इश्राक़ की नमाज़ एक नफ़्ल नमाज़ है जो सूर्योदय के 12-15 मिनट बाद पढ़ी जाती है। इसका महान पुण्य है जो पूरे हज और उमरे के बराबर है। यह सबसे बेहतरीन नफ़्ल नमाज़ों में से है।',
        bengali: 'ইশরাক নামাজ একটি নফল নামাজ যা সূর্যোদয়ের ১২-১৫ মিনিট পর পড়া হয়। এর মহান সওয়াব পূর্ণ হজ ও উমরার সমান। এটি সর্বোত্তম নফল নামাজগুলোর অন্যতম।'
    },
    method: {
        arabic: '1. الجلوس في المصلى بعد صلاة الفجر\n2. الذكر والتسبيح حتى الشروق\n3. الانتظار 12-15 دقيقة بعد الشروق\n4. النية لصلاة الإشراق\n5. صلاة ركعتين أو 4 ركعات\n6. الدعاء بعد الصلاة',
        english: '1. Remain seated in prayer place after Fajr prayer[27]\n2. Do dhikr and tasbih until sunrise\n3. Wait 12-15 minutes after sunrise[27]\n4. Make intention for Ishraq prayer\n5. Pray 2 or 4 rakats[27]\n6. Make dua after prayer',
        hindi: '1. फज्र के बाद नमाज़ की जगह बैठे रहें\n2. सूर्योदय तक ज़िक्र और तस्बीह करें\n3. सूर्योदय के 12-15 मिनट बाद प्रतीक्षा करें\n4. इश्राक़ की नमाज़ की नीयत करें\n5. 2 या 4 रकात पढ़ें\n6. नमाज़ के बाद दुआ करें',
        bengali: '1. ফজরের পর নামাজের জায়গায় বসে থাকুন\n2. সূর্যোদয় পর্যন্ত জিকির ও তাসবিহ করুন\n3. সূর্যোদয়ের ১২-১৫ মিনিট পর অপেক্ষা করুন\n4. ইশরাক নামাজের নিয়ত করুন\n5. ২ বা ৪ রাকাত পড়ুন\n6. নামাজের পর দোয়া করুন'
    },
    duas: [
        {
            arabic: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
            transliteration: 'Allahumma a\'inni ala dhikrika wa shukrika wa husni ibadatik',
            translation: {
                english: 'O Allah, help me to remember You, thank You, and worship You in the best manner',
                hindi: 'हे अल्लाह! मुझे अपना ज़िक्र, शुक्र और बेहतरीन इबादत करने में मदद कर',
                bengali: 'হে আল্লাহ! আমাকে তোমার স্মরণ, কৃতজ্ঞতা ও উত্তম ইবাদতে সাহায্য কর'
            }
        }
    ],
    surahs: [
        {
            name: 'Al-Fatiha and Ash-Shams',
            arabic: 'الفاتحة وسورة الشمس مستحبة',
            translation: {
                english: 'Al-Fatiha and Surah Ash-Shams are recommended[27]',
                hindi: 'अल-फ़ातिहा और सूरह अश-शम्स मुस्तहब है',
                bengali: 'আল-ফাতিহা ও সূরা আশ-শামস মুস্তাহাব'
            }
        }
    ],
    tasbih: [
        {
            arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
            transliteration: 'La ilaha illa Allah wahdahu la sharika lahu lahul mulku wa lahul hamdu wa huwa ala kulli shayin qadir',
            translation: {
                english: 'There is no god but Allah, alone without partner. His is the dominion and His is the praise, and He has power over all things',
                hindi: 'अल्लाह के सिवा कोई माबूद नहीं, वह अकेला है, उसका कोई साझीदार नहीं। उसी का राज्य है और उसी के लिए प्रशंसा है, और वह हर चीज़ पर सक्षम है',
                bengali: 'আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একক, তার কোনো শরীক নেই। রাজত্व তারই এবং প্রশংসা তারই, আর তিনি সবকিছুর ওপর ক্ষমতাবান'
            },
            count: '100 times'
        }
    ],
    benefits: {
        arabic: ['أجر حج وعمرة تامة تامة', 'مغفرة الذنوب الصغيرة', 'غنيمة عظيمة', 'بركة في اليوم'],
        english: ['Reward of complete Hajj and Umrah[27]', 'Forgiveness of minor sins[27]', 'Great spiritual gain[27]', 'Blessings throughout the day'],
        hindi: ['पूर्ण हज और उमरे का पुण्य', 'छोटे गुनाहों की माफी', 'महान आध्यात्मिक लाभ', 'पूरे दिन बरकत'],
        bengali: ['পূর্ণ হজ ও উমরার সওয়াব', 'ছোট গুনাহের ক্ষমা', 'মহান আধ্যাত্মিক লাভ', 'সারাদিন বরকত']
    }
}


        // Add more prayers following the same pattern...
        // You can add all other prayers like dhuhr, asr, maghrib, isha, eid prayers, etc.
    };

    // Populate salah detail page
    function populateSalahDetail(data) {
        document.getElementById('salahTitle').textContent = data.title[currentLanguage];
        document.getElementById('salahTitle').setAttribute('data-prayer', Object.keys(salahDataTemplate).find(key => salahDataTemplate[key] === data));
        document.getElementById('salahSubtitle').textContent = data.subtitle[currentLanguage];

        updateContentLanguage(data, currentLanguage);
    }

    // Update content based on language
    function updateContentLanguage(data, lang) {
        // Update description
        if (data.description && data.description[lang]) {
            document.getElementById('prayerDescription').textContent = data.description[lang];
        }

        // Update method
        if (data.method && data.method[lang]) {
            document.getElementById('prayerMethod').innerHTML = data.method[lang].split('\n').map(step =>
                `<div class="method-step">${step}</div>`
            ).join('');
        }

        // Update duas
        if (data.duas) {
            document.getElementById('prayerDuas').innerHTML = data.duas.map(dua => `
                <div class="dua-item">
                    <div class="dua-arabic">${dua.arabic}</div>
                    <div class="dua-transliteration">${dua.transliteration}</div>
                    <div class="dua-translation">${dua.translation[lang] || dua.translation.english}</div>
                </div>
            `).join('');
        }

        // Update surahs
        if (data.surahs) {
            document.getElementById('prayerSurahs').innerHTML = data.surahs.map(surah => `
                <div class="surah-item">
                    <h4>${surah.name}</h4>
                    <div class="surah-arabic">${surah.arabic}</div>
                    <div class="surah-translation">${surah.translation[lang] || surah.translation.english}</div>
                </div>
            `).join('');
        }

        // Update tasbih
        if (data.tasbih) {
            document.getElementById('prayerTasbih').innerHTML = data.tasbih.map(tasbih => `
                <div class="tasbih-item">
                    <div class="tasbih-arabic">${tasbih.arabic}</div>
                    <div class="tasbih-transliteration">${tasbih.transliteration}</div>
                    <div class="tasbih-translation">${tasbih.translation[lang] || tasbih.translation.english}</div>
                    <div class="tasbih-count">${tasbih.count}</div>
                </div>
            `).join('');
        }

        // Update benefits
        if (data.benefits && data.benefits[lang]) {
            document.getElementById('prayerBenefits').innerHTML = data.benefits[lang].map(benefit => `
                <div class="benefit-item">
                    <i class="fas fa-check-circle"></i>
                    <span>${benefit}</span>
                </div>
            `).join('');
        }
    }
});
