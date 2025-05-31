// Script para interatividade do site MotorWeb

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconHamburger = document.getElementById('icon-hamburger');
    const iconX = document.getElementById('icon-x');
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const currentYearSpan = document.getElementById('currentYear');

    // Atualiza o ano no rodapé
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Lógica para o menu mobile
    if (mobileMenuButton && mobileMenu && iconHamburger && iconX) {
        mobileMenuButton.addEventListener('click', function () {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.classList.toggle('hidden'); // Alterna a classe 'hidden' do Tailwind
            iconHamburger.classList.toggle('hidden');
            iconX.classList.toggle('hidden');
        });
    }

    // Destaca o link de navegação ativo
    const currentPagePath = window.location.pathname.split('/').pop() || 'index.html'; // Pega o nome do arquivo atual

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        // Compara o nome do arquivo do link com o nome do arquivo da página atual
        // Adiciona 'index.html' como caso especial para a raiz ou 'index.html'
        if (linkPath === currentPagePath || (currentPagePath === '' && linkPath === 'index.html')) {
            link.classList.add('active-nav');
        } else {
            link.classList.remove('active-nav');
        }
    });

    // Lógica para o formulário de contato (apenas se estiver na página de contato)
    if (currentPagePath === 'contato.html' || currentPagePath === 'contato') {
        const contactForm = document.getElementById('contactForm');
        const formFeedback = document.getElementById('form-feedback');

        if (contactForm && formFeedback) {
            // Verifica se há parâmetros na URL para preencher o assunto
            const urlParams = new URLSearchParams(window.location.search);
            const subjectFromUrl = urlParams.get('assunto');
            if (subjectFromUrl) {
                const subjectInput = document.getElementById('subject');
                if (subjectInput) {
                    subjectInput.value = subjectFromUrl;
                }
            }


            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();
                formFeedback.textContent = ''; // Limpa feedback anterior
                formFeedback.className = 'mt-4 text-sm'; // Reseta classes

                // Simulação de validação e envio
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();

                if (!name || !email || !subject || !message) {
                    formFeedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                    formFeedback.classList.add('text-red-600');
                    return;
                }
                
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    formFeedback.textContent = 'Por favor, insira um endereço de e-mail válido.';
                    formFeedback.classList.add('text-red-600');
                    return;
                }

                formFeedback.textContent = 'Enviando sua mensagem...';
                formFeedback.classList.add('text-blue-600');

                // Simulação de envio com timeout
                setTimeout(() => {
                    // Simulação de sucesso
                    formFeedback.textContent = `Obrigado por sua mensagem, ${name}! Entraremos em contato em breve.`;
                    formFeedback.classList.remove('text-blue-600');
                    formFeedback.classList.add('text-green-600');
                    contactForm.reset(); // Limpa o formulário

                    // Remove a mensagem de sucesso após alguns segundos
                    setTimeout(() => {
                        formFeedback.textContent = '';
                        formFeedback.className = 'mt-4 text-sm';
                    }, 5000);

                }, 1500);
            });
        }
    }

    // Função para rolar para âncoras, se presentes na URL
    // Isso é útil para links como veiculos.html#veiculo1
    if (window.location.hash) {
        const anchorId = window.location.hash.substring(1); // Remove o '#'
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
            // Pequeno delay para garantir que a página foi totalmente renderizada
            setTimeout(() => {
                anchorElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});
