(function($){
    
    $(document).on("ready",  function(){
        
        var html = $('html'),
            imgSrc = new Image(),
            windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        
            
        $(".lazy").lazyload();
            
        // shipping added below cepbox
        function waitForElementToDisplay(selector, time) {
            if(document.querySelector(selector)!=null) {
                $('.shipping-result').html($('.page-simula-frete'));
                return;
            }
            else {
                setTimeout(function() {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
        
        $('.botao-simular-frete, #shippingSimulatorButton').on("click", function() {
            $('.shipping-result').html('');
            waitForElementToDisplay('.page-simula-frete', 1000);
        });
        
        if($.fn.jquery != '1.6.2'){
            
            $('.banner-home-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-prev"><path d="M170.965,363.918l330.214,330.214c3.814,3.961,8.948,5.868,13.937,5.868c4.987,0,10.122-2.054,13.936-5.868c7.775-7.774,7.775-20.244,0-28.019L212.92,349.981L529.051,33.85c7.775-7.775,7.775-20.244,0-28.019	c-7.774-7.775-20.244-7.775-28.019,0L170.819,336.045C163.19,343.674,163.19,356.289,170.965,363.918z"/></svg>',
                nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-next"><path d="M529.18,336.045L198.966,5.831c-7.774-7.775-20.244-7.775-28.019,0c-7.775,7.775-7.775,20.244,0,28.019l316.131,316.131L170.948,666.113c-7.775,7.774-7.775,20.244,0,28.019c3.813,3.814,8.948,5.868,13.936,5.868c4.988,0,10.122-1.907,13.937-5.868l330.214-330.214C536.809,356.289,536.809,343.674,529.18,336.045z"/></svg>',
    
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }]
            });
            
            $(".page-home .showcase-list").slick({
                lazyLoad: 'ondemand',
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false,
                arrows: true,
                prevArrow: '<svg class="carousel-prev" fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 506.936 506.937"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M0 268.966V237.97c.284-1.433.628-2.856.842-4.298 1.756-11.84 2.858-23.817 5.328-35.506C26.91 99.989 110.511 20.18 209.395 3.931 218.879 2.373 228.443 1.298 237.97 0h30.996c1.288.273 2.565.617 3.864.81 11.837 1.749 23.807 2.852 35.496 5.301C406.502 26.678 486.789 110.624 503 209.424c1.555 9.476 2.637 19.029 3.937 28.546v30.996c-.285 1.433-.629 2.857-.844 4.302-1.733 11.67-2.858 23.466-5.252 34.999-20.337 97.961-104.586 178.583-203.272 194.723-9.496 1.552-19.066 2.642-28.603 3.946H237.97c-1.271-.293-2.531-.648-3.814-.868-15.716-2.687-31.749-4.163-47.102-8.219C92.605 472.9 20.225 393.26 3.857 297.024 2.275 287.722 1.271 278.321 0 268.966zm471.085-15.714c-.174-120.271-97.65-217.436-218.078-217.382-119.781.054-217.334 97.898-217.157 217.808.176 120.253 97.731 217.496 218.084 217.389 119.836-.109 217.324-97.896 217.151-217.815z"/><path fill="#FFF" d="M268.966 506.937c9.536-1.305 19.106-2.395 28.603-3.946 98.687-16.141 182.936-96.763 203.271-194.724 2.394-11.532 3.519-23.328 5.252-34.999.215-1.444.559-2.869.844-4.302v237.97l-237.97.001zM506.936 237.97c-1.3-9.518-2.382-19.07-3.937-28.546-16.211-98.8-96.497-182.746-194.673-203.313C296.637 3.662 284.667 2.559 272.83.81c-1.299-.192-2.576-.536-3.864-.81h237.97v237.97zM237.97 0c-9.527 1.298-19.091 2.373-28.576 3.931C110.511 20.18 26.91 99.989 6.169 198.166 3.7 209.854 2.598 221.832.841 233.672c-.214 1.442-.558 2.866-.842 4.298L0 0h237.97zM0 268.966c1.271 9.355 2.275 18.756 3.857 28.058C20.225 393.26 92.605 472.9 187.055 497.85c15.353 4.056 31.386 5.532 47.102 8.219 1.283.22 2.543.575 3.814.868H.001L0 268.966z"/><path fill="#FFF" d="M471.085 253.252c.173 119.918-97.315 217.706-217.151 217.814-120.353.108-217.908-97.135-218.084-217.388-.176-119.91 97.376-217.753 217.158-217.807 120.427-.054 217.904 97.111 218.077 217.381zm-262.279.669c1.757-1.211 3.466-2.048 4.741-3.319a88455.566 88455.566 0 0 0 95.417-95.378c1.646-1.647 3.363-3.271 4.73-5.138 7.327-10.01 2.31-24.603-9.632-27.69-7.436-1.922-13.587.603-18.975 6.008-37.04 37.158-74.169 74.227-111.265 111.329-10.296 10.298-10.265 19.79.099 30.155 36.743 36.748 73.491 73.491 110.243 110.23 1.295 1.294 2.575 2.623 4.003 3.758 10.099 8.025 25.169 3.139 28.358-9.333 1.852-7.241-.559-13.275-5.845-18.543-32.452-32.325-64.813-64.744-97.196-97.138-1.271-1.269-2.473-2.607-4.678-4.941z"/><path d="M208.806 253.921c2.206 2.334 3.408 3.672 4.678 4.942 32.384 32.394 64.744 64.813 97.196 97.138 5.286 5.268 7.696 11.302 5.845 18.543-3.189 12.472-18.26 17.358-28.358 9.333-1.428-1.135-2.708-2.464-4.003-3.758-36.752-36.739-73.5-73.482-110.243-110.23-10.363-10.366-10.395-19.857-.099-30.155 37.096-37.102 74.225-74.17 111.265-111.329 5.388-5.405 11.539-7.93 18.975-6.008 11.941 3.087 16.959 17.68 9.632 27.69-1.367 1.867-3.085 3.491-4.73 5.138a88455.566 88455.566 0 0 1-95.417 95.378c-1.276 1.271-2.984 2.107-4.741 3.318z"/></g></svg>',
                nextArrow: '<svg class="carousel-next" fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 506.936 506.937"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M0 268.966V237.97c.284-1.433.628-2.856.842-4.298 1.756-11.84 2.858-23.817 5.328-35.506C26.91 99.989 110.511 20.18 209.395 3.931 218.879 2.373 228.443 1.298 237.97 0h30.996c1.288.273 2.565.617 3.864.81 11.837 1.749 23.807 2.852 35.496 5.301C406.502 26.678 486.789 110.624 503 209.424c1.555 9.476 2.637 19.029 3.937 28.546v30.996c-.285 1.433-.629 2.857-.844 4.302-1.733 11.67-2.858 23.466-5.252 34.999-20.337 97.961-104.586 178.583-203.272 194.723-9.496 1.552-19.066 2.642-28.603 3.946H237.97c-1.271-.293-2.531-.648-3.814-.868-15.716-2.687-31.749-4.163-47.102-8.219C92.605 472.9 20.225 393.26 3.857 297.024 2.275 287.722 1.271 278.321 0 268.966zm471.085-15.714c-.174-120.271-97.65-217.436-218.078-217.382-119.781.054-217.334 97.898-217.157 217.808.176 120.253 97.731 217.496 218.084 217.389 119.836-.109 217.324-97.896 217.151-217.815z"/><path fill="#FFF" d="M268.966 506.937c9.536-1.305 19.106-2.395 28.603-3.946 98.687-16.141 182.936-96.763 203.271-194.724 2.394-11.532 3.519-23.328 5.252-34.999.215-1.444.559-2.869.844-4.302v237.97l-237.97.001zM506.936 237.97c-1.3-9.518-2.382-19.07-3.937-28.546-16.211-98.8-96.497-182.746-194.673-203.313C296.637 3.662 284.667 2.559 272.83.81c-1.299-.192-2.576-.536-3.864-.81h237.97v237.97zM237.97 0c-9.527 1.298-19.091 2.373-28.576 3.931C110.511 20.18 26.91 99.989 6.169 198.166 3.7 209.854 2.598 221.832.841 233.672c-.214 1.442-.558 2.866-.842 4.298L0 0h237.97zM0 268.966c1.271 9.355 2.275 18.756 3.857 28.058C20.225 393.26 92.605 472.9 187.055 497.85c15.353 4.056 31.386 5.532 47.102 8.219 1.283.22 2.543.575 3.814.868H.001L0 268.966z"/><path fill="#FFF" d="M471.085 253.252c.173 119.918-97.315 217.706-217.151 217.814-120.353.108-217.908-97.135-218.084-217.388-.176-119.91 97.376-217.753 217.158-217.807 120.427-.054 217.904 97.111 218.077 217.381zm-262.279.669c1.757-1.211 3.466-2.048 4.741-3.319a88455.566 88455.566 0 0 0 95.417-95.378c1.646-1.647 3.363-3.271 4.73-5.138 7.327-10.01 2.31-24.603-9.632-27.69-7.436-1.922-13.587.603-18.975 6.008-37.04 37.158-74.169 74.227-111.265 111.329-10.296 10.298-10.265 19.79.099 30.155 36.743 36.748 73.491 73.491 110.243 110.23 1.295 1.294 2.575 2.623 4.003 3.758 10.099 8.025 25.169 3.139 28.358-9.333 1.852-7.241-.559-13.275-5.845-18.543-32.452-32.325-64.813-64.744-97.196-97.138-1.271-1.269-2.473-2.607-4.678-4.941z"/><path d="M208.806 253.921c2.206 2.334 3.408 3.672 4.678 4.942 32.384 32.394 64.744 64.813 97.196 97.138 5.286 5.268 7.696 11.302 5.845 18.543-3.189 12.472-18.26 17.358-28.358 9.333-1.428-1.135-2.708-2.464-4.003-3.758-36.752-36.739-73.5-73.482-110.243-110.23-10.363-10.366-10.395-19.857-.099-30.155 37.096-37.102 74.225-74.17 111.265-111.329 5.388-5.405 11.539-7.93 18.975-6.008 11.941 3.087 16.959 17.68 9.632 27.69-1.367 1.867-3.085 3.491-4.73 5.138a88455.566 88455.566 0 0 1-95.417 95.378c-1.276 1.271-2.984 2.107-4.741 3.318z"/></g></svg>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        
        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }
        
        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }
        
        // open and close filters of smartfilter in catalog and search pages
        $('.open-filters').on("click", function() {
            $('.filters-list').slideToggle();
        });
    
    });
    
     //Topo flutuante
	var $fixedBar = $('.floating');
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 212) {
			$fixedBar.addClass('fixed');
		} else {
			$fixedBar.removeClass('fixed');
		}
	});
	
    // modal login
    $('.modal-login').on("click", function(event) {
       event.preventDefault();
       $('tray-login').show();
    });		
    
})(jQuery);

// menu mobile
(function(){
    var btnMenu = document.getElementsByClassName('trigger-menu')[0];
    var html = document.getElementsByTagName('html')[0];
    var backdropMobile = document.getElementsByClassName('menu-mobile-backdrop')[0];

    btnMenu.addEventListener('touchend', function(){
        html.classList.add('menu-open');
    });

    html.addEventListener('touchend', function(e){
        if(e.target == backdropMobile){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
})();