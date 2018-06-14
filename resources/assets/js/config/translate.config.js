app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'HERO_NAME': 'Filip Hájek',
        'HERO_DESC': 'Webdesigner | Front-end programmer',
        'HERO_BIO': 'I enjoy creating visually pleasing & intuitive websites and apps that are tailored to your business.',
        'CTA': 'Start now',
        'PROJECTS': 'Projects',
        'CONTACT': 'Contact',
        'ABOUT': 'About',
        'CONTACT_P': 'Ready to start a project? Let’s talk about your idea. I like to come prepared for our first conversation, so please fill out the following form with as much detail as possible. The more information you can provide, the quicker I’ll be able to understand your project and the easier it will be to find the right solutions for you.',
        'NAME': 'Name',
        'EMAIL': 'Email',
        'COMPANY': 'Company',
        'PROJECT_TYPE': 'Project type',
        'OTHER': 'Other',
        'BUDGET': 'Budget (in €)',
        'SUBMIT': 'Submit',
        'FORM_SUCCESS': 'Form successfully sent.',
        'FORM_ERROR': 'An error occured while sending the form. Please contact me at flp.hajek@gmail.com',
        'MESSAGE': 'Message',
        'PERSONAL_PROJECT': 'Personal Project',
        'EDOCU_SPEC': 'Front-end + UI Designer',
        'DETAILS': 'Details',
        'PROJECT_DETAIL': {
            'edocu': {
                'TITLE': 'eDocu',
                'BODY': 'I started working in eDocu part-time when I was still in High School. Over the summer break of 2014 and 2015, I worked there almost full-time. My responsibilities included: webpage desgin, design of user interface and the development of multiple AngularJS modules.'
            },
            'readditing': {
                'TITLE': 'Readditing',
                'BODY': 'Readditing.com was a personal project of mine. <a href="http://reddit.com/" target="_blank">reddit.com</a> is a popular social site where users share interesting websites, images and videos with other users. I didn\'t like the website design so I took it upon myself to make a better version. After a few months I released my webpage at readditing.com. The page got popular quite quickly, peaking at 45 000 daily views. I was forced to shut down the site due to reddit.com\'s request.',
            }
        },
        'PROJECT_PREVIEW': 'Page preview'
    });

    $translateProvider.translations('sk', {
        'HERO_NAME': 'Filip Hájek',
        'HERO_DESC': 'Webdizajnér | Front-end programátor',
        'HERO_BIO': 'Rád vytváram zaujímavé a intuitívne webstránky a aplikácie ušité práve pre Váš business.',
        'CTA': 'Začať projekt',
        'PROJECTS': 'Projekty',
        'CONTACT': 'Kontakt',
        'ABOUT': 'O mne',
        'CONTACT_P': 'Ste pripravení začať Váš projekt alebo máte nejakú otázku? Porozprávajme sa o Vašom nápade. Rád prichádzam na prvé stretnutie pripravený a preto by som niečo rád vedel čo najviac detailov o vašom projekte vopred. Čím viac informácií mi poskytnete, tým rýchlejsie budem pre Vás vedieť nájsť ideálne riešenie.',
        'NAME': 'Meno',
        'EMAIL': 'Email',
        'COMPANY': 'Názov spoločnosti',
        'PROJECT_TYPE': 'Typ projektu',
        'OTHER': 'Iné',
        'BUDGET': 'Rozpočet (v €)',
        'SUBMIT': 'Odoslať',
        'FORM_SUCCESS': 'Úspešne odoslané.',
        'FORM_ERROR': 'Chyba pri odosielaní. Kontaktujte ma prosím na flp.hajek@gmail.com',
        'MESSAGE': 'Správa',
        'PERSONAL_PROJECT': 'Osobný projekt',
        'EDOCU_SPEC': 'Front-end + UI Dizajnér',
        'DETAILS': 'Detaily',
        'ABOUT_BODY': 'ioNoin',
        'PROJECT_DETAIL': {
            'edocu': {
                'TITLE': 'eDocu',
                'BODY': 'V eDocu som začal pracovať už popri strednej škole na skrátený úvazok a počas letných prázdnin v roku 2014 a 2015 ako brigádnik. Mal som na starosti dizajn stránky, dizajn ovládacích prvkov (UI) a aj viacerích front-end modulov v AngularJS.'
            },
            'readditing': {
                'TITLE': 'Readditing',
                'BODY': 'Readditing.com bol môj osobný projekt na ktorom som robil vo volnom čase. <a href="http://reddit.com/" target="_blank">reddit.com</a> je populárna stránka kde užívatelia zdielajú zaujímavé stránky/obrázky/videá z internetu. Stránka samotná je však neprehľadná a má zaostalý design. Rozhodol som sa preto ju vylepšit. Za pár mesiacov som túto stránku vydal na adrese readditing.com. Stránka sa za istý čas stala veľmi populárna, dosahujúca až <b>45 000</b> zobrazení denne. Projekt som však musel zrušiť na požiadanie reddit.com.',
            }
        },
        'PROJECT_PREVIEW': 'Náhľad stránky'
    });

    $translateProvider.fallbackLanguage('en');
    $translateProvider.determinePreferredLanguage();
    $translateProvider.useLocalStorage();
}]);
