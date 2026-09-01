// ==========================================================================
// F-Gl — Comportements communs à toutes les pages
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    // Navbar : fond au scroll
    const onScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Menu mobile
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
            toggle.classList.toggle('active');
        });
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // Marquage du lien de nav actif selon la page courante
    const current = (window.location.pathname.split('/').pop() || 'index.html');
    document.querySelectorAll('.nav-links a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (href === current || (current === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });

    // Sélecteur de langue (FR / EN / ES)
    const html = document.documentElement;
    const applyTitle = (lang) => {
        const t = html.getAttribute('data-title-' + lang);
        if (t) document.title = t;
    };
    const setActiveLangBtn = (lang) => {
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.lang === lang);
        });
    };
    const initialLang = html.getAttribute('data-lang') || 'fr';
    setActiveLangBtn(initialLang);
    applyTitle(initialLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            html.setAttribute('data-lang', lang);
            html.setAttribute('lang', lang);
            try { localStorage.setItem('fgl-lang', lang); } catch (err) {}
            setActiveLangBtn(lang);
            applyTitle(lang);
        });
    });

    // Révélation au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
