$( document ).ready(function() {

    $('.card').find('.show').parent().find('.plus').css({
    	'display': 'none'
    });
    $('.card').find('.show').parent().find('.minus').css({
        'display': 'flex'
    });
    
    $('.card button').click(function(){
    	var data = $(this).attr('data');
    	if(data == 'show'){
    		$('.card .plus').css({
		    	'display': 'flex'
		    });
            $('.card .minus').css({
                'display': 'none'
            });
    		$(this).attr('data','');
    	}else{
    		$('.card .plus').css({
		    	'display': 'flex'
		    });
            $('.card .minus').css({
                'display': 'none'
            });
    		 $(this).find('.plus').css({
		    	'display': 'none'
		    });
            $(this).find('.minus').css({
                'display': 'flex'
            });
		    $('.card button').attr('data','');
		    $(this).attr('data','show');
    	}
    });

    $('.home .blocks').mouseover(function(){
        var data = $(this).attr('data');
        var img = 'images/'+data;
        $('.home .home_img').attr('src',img);
    });

    $('.home .blocks > *').mouseover(function(){
        var data = $(this).parent().attr('data');
        var img = 'images/'+data;
        $('.home .home_img').attr('src',img);
    });

    $('header #navbarSupportedContent a').click(function(){
        $('header #navbarSupportedContent a').removeClass('active_modal');
        var current_target = $(this).find('button').attr('data-target');
        $('header #navbarSupportedContent button').each(function(){
            var data_target = $(this).attr('data-target');
            if(current_target !== data_target){
                $(data_target).modal('hide'); 
            }
        })
    })

    $(".modal").on('shown.bs.modal', function(){
        var id = $(this).attr('id');
        var data = "#"+id;
        $('header #navbarSupportedContent button').each(function(){
            var data_target = $(this).attr('data-target');
            if(data == data_target){
                $(this).parent().addClass('active_modal');
            }
        })
    });

    $('.modal').on('hidden.bs.modal', function () {
        if($('body').find('.modal.show').length){
            $('body').addClass('modal-open');
        }
    });

    $.ajax({
        url:"https://restcountries.eu/rest/v2/all",
        method:"get",
        type:"json",
        success:function(response){
            $.each(response,function(key, country){
                var li = $("<li></li>");
                var p = $("<p></p>");
                p.text(country['name']);
                var each_country = li.append(p);
                $('.countries').find('ul').append(each_country);
            })
        }
    })

    $('.dropdown_box').click(function(){
        var data = $(this).attr('data');
        if(data == 'opened'){
            $(this).removeAttr('data');
            $(this).parent().find('.dropdown_menu').css({
                'display' : 'none'
            })
        }else{
            $(this).attr('data','opened');
            $(this).parent().find('.dropdown_menu').css({
                'display' : 'flex'
            })
        } 
    });

    $('.dropdown_box img').click(function(){
        var data = $(this).parent().find('.dropdown_inp').attr('data');
        if(data == 'opened'){
            $(this).parent().find('.dropdown_inp').removeAttr('data');
            $(this).parent().find('.dropdown_menu').css({
                'display' : 'none'
            })
        }else{
            $(this).parent().find('.dropdown_inp').attr('data','opened');
            $(this).parent().find('.dropdown_menu').css({
                'display' : 'flex'
            })
        } 
    });

    $(document).on('click','.dropdown_menu p',function(){
        var text = $(this).text();
        $(this).parents('.dropdown_box').find('.dropdown_inp').val(text);
        $(this).parents('.dropdown_menu').css({
            'display' : 'none'
        })
    })

    $("#navbarSecond a.nav-link").click(function (e) {
        e.preventDefault();

        var id = $(this).attr('href');
        var scrollTo = $(id).offset().top - $(this).height() + 20;

        $('html,body').animate({
            'scrollTop': scrollTo
        }, 1000);
    });

    $(document).scroll(function () {
        highlightSection();
    });

    function highlightSection() {
        // Where's the scroll at?
        var currentPosition = $(this).scrollTop();

        // Loop over each section
        $('.list .list_block').each(function () {
            // Calculate the start and end position of the section
            var sectionStart = $(this).offset().top;
            var sectionEnd = sectionStart + $(this).height();

            // If the current scroll lies between the start and the end of this section
            if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
                // Highlight the corresponding anchors
                $(".nav-item a.nav-link").parent().removeClass('active');
                $(".nav-item a.nav-link[href='#" + $(this).attr('id') + "']").parent().addClass('active');
            }
        });
    };

    highlightSection();

    $('.accord').click(function(event){
        event.preventDefault();
        var data = $(this).attr('data');
        if(data == 'opened'){
            $(this).removeAttr('data');
            $(this).parent().find('.opening_block').css({
                'display' : 'none'
            })
        }else{
            $(this).attr('data','opened');
            $(this).parent().find('.opening_block').css({
                'display' : 'flex'
            })
        } 
    })
});