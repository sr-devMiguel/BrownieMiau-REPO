$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});



document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-whatsapp');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const dish = button.closest('.dish');
      const title = dish.querySelector('.dish-title').textContent.trim();
      const url = `https://wa.me/551120544947?text=Olá,%20gostaria%20de%20fazer%20um%20pedido:%20${encodeURIComponent(title)}`;
      window.open(url, '_blank');
    });
  });
});

document.getElementById('btn-avaliacoes').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDc0MDA4MzMxMDYxNTY3?story_media_id=3685594019098989020_75808293961&igsh=djZmdzZianMxYTZs'; 
})