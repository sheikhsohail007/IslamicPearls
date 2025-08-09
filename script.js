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


