(function(){

    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');

    let ariaControl = $btn.getAttribute('aria-controls');

    let $menu = document.getElementById(ariaControl);
    
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');

        let ariaExpanded = this.getAttribute('aria-expanded') === "true";

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);
    })
})()