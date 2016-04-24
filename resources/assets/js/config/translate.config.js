app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'HERO_1': 'Hi, my name is Filip and I make',
        'HERO_2': 'professional',
        'HERO_3': 'websites.',
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
        'DETAILS': 'Details'
    });

    $translateProvider.translations('sk', {
        'HERO_1': 'Ahoj, volám sa Filip a vytvorím Vám',
        'HERO_2': 'profesionálne',
        'HERO_3': 'webstránky.',
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
        'DETAILS': 'Detaily'
    });

    $translateProvider.fallbackLanguage('en');

    $translateProvider.determinePreferredLanguage();
}]);
