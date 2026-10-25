// The script is deferred, so the page elements exist before initialization.
(() => {
    'use strict';

    const root = document.documentElement;
    const themeButton = document.getElementById('theme-toggle');
    const storageStatus = document.getElementById('storage-status');
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    let chosenTheme = null;

    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') chosenTheme = saved;
    } catch (error) {
        storageStatus.textContent = 'Theme storage is unavailable. You can still switch themes, but your choice may not survive a refresh.';
    }

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        themeButton.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
        themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    }

    applyTheme(chosenTheme || (media.matches ? 'dark' : 'light'));
    themeButton.addEventListener('click', () => {
        chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(chosenTheme);
        try {
            localStorage.setItem('theme', chosenTheme);
            storageStatus.textContent = '';
        } catch (error) {
            storageStatus.textContent = 'Theme changed for this visit only. Enable browser storage to remember it.';
        }
    });
    // Do not save an automatic OS preference as if the visitor explicitly chose it.
    if (media.addEventListener) {
        media.addEventListener('change', event => {
            if (!chosenTheme) applyTheme(event.matches ? 'dark' : 'light');
        });
    }

    const cards = [...document.querySelectorAll('.project-card')];
    const filterButtons = [...document.querySelectorAll('[data-filter]')];
    const search = document.getElementById('project-search');
    const count = document.getElementById('project-count');
    const empty = document.getElementById('empty-state');
    let category = 'all';

    function updateProjects() {
        const query = search.value.trim().toLowerCase();
        let visible = 0;
        cards.forEach(card => {
            const matchesCategory = category === 'all' || card.dataset.category === category;
            const matchesSearch = card.textContent.toLowerCase().includes(query);
            card.hidden = !(matchesCategory && matchesSearch);
            if (!card.hidden) visible += 1;
        });
        count.textContent = `${visible} of ${cards.length} projects shown`;
        empty.hidden = visible > 0;
        filterButtons.forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.filter === category));
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            category = button.dataset.filter;
            updateProjects();
        });
    });
    search.addEventListener('input', updateProjects);
    document.getElementById('reset-filters').addEventListener('click', () => {
        category = 'all';
        search.value = '';
        updateProjects();
        search.focus();
    });
    document.getElementById('project-controls').hidden = false;
    updateProjects();

    const form = document.getElementById('contact-form');
    const fields = ['name', 'email', 'message'].map(id => document.getElementById(id));
    const status = document.getElementById('form-status');
    // Enable custom validation only after the submit handler can be registered.
    form.noValidate = true;
    form.addEventListener('submit', event => {
        event.preventDefault(); // No backend: never send the visitor's form data.
        let firstInvalid = null;
        fields.forEach(field => {
            let error = '';
            const value = field.value.trim();
            if (!value) error = `Please enter your ${field.id}.`;
            else if (field.id === 'email' && field.validity.typeMismatch) error = 'Enter a valid email address, such as name@example.com.';
            else if (field.id === 'message' && value.length < 10) error = 'Please write at least 10 characters in your message.';
            else if (value.length > field.maxLength) error = `Use no more than ${field.maxLength} characters.`;
            field.setAttribute('aria-invalid', String(Boolean(error)));
            document.getElementById(`${field.id}-error`).textContent = error;
            if (error && !firstInvalid) firstInvalid = field;
        });
        status.dataset.state = firstInvalid ? 'error' : 'success';
        // textContent ensures typed content is never interpreted as HTML.
        status.textContent = firstInvalid
            ? 'Please fix the highlighted fields and try again.'
            : `Thanks, ${fields[0].value.trim()}! Your message passed validation. This is a demo: nothing was sent or saved. Use the GitHub link above to connect.`;
        status.classList.remove('feedback-enter');
        void status.offsetWidth; // Restart the small feedback animation.
        status.classList.add('feedback-enter');
        if (firstInvalid) firstInvalid.focus();
    });
    fields.forEach(field => field.addEventListener('input', () => {
        field.removeAttribute('aria-invalid');
        document.getElementById(`${field.id}-error`).textContent = '';
        status.textContent = '';
    }));
    document.getElementById('contact-submit').disabled = false;
    document.getElementById('current-year').textContent = new Date().getFullYear();
})();
