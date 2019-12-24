$( document ).ready(function() {

    // XMAS THINGIE //
    var date = new Date();
    var month = date.getMonth();

    if ( month == 11 ){
        $.fn.snowit();

        $('.parralax').attr('src','./src/minecraft__xmas.png');  
        $('.introduction').addClass('-xmas');
        $('.panda').attr('src','./src/Panda__xmas.png');
        $('.elytra').attr('src','./src/elytra__xmas.png');
    }

    var scroll;

    $('.icon__down').click(function(){
        //$(window).scrollTop(0);
        $('html, body').animate({
            scrollTop: $(".introduction").offset().top
        }, 1000);
    });
    
    //Parralax thingie
    $(window).scroll(function() {
        scroll = $(window).scrollTop();
        //console.log(scroll);

        if (scroll <= 900){
            $('.parralax').css('bottom', -scroll / 10);
        }

        $('.panda').css('bottom', -(scroll - $(".map").offset().top) / 10);

        if (scroll >= $(".members").offset().top){
            // console.log(scroll);
            $('.elytra').css('bottom', -(scroll - ($(".members").offset().top) * 1.2) / 10);
        }
    });

    // Members showcase
    var members = "ThiccDqddy,The6BitGamer,CVIPERB,Gallowheen,Pamperito,MrOwlidian,KaiRez,_kimmey_,SirBuzzy,FloJo97,Sovica,TheDrowningSun,XanderSYLX,jamesfelicia,Cesiei,Alduram,Rascotty,hamerguay,calmilamsy,purefmwc,Garrford,Consequenced,Illunarnati,lakalaka,Rasmasoty,LazyAngell,oniziaka,Ghrane,c6d14aa8cbe4eb72,KillerKing6,isballs,Blockosaur";
    var memberList = members.split(",");
    var memberCount = 0;
    var memberRealCount = 0;

    memberList.forEach(member => {
        // console.log(member);

        if (member == "Sovica" || member == "SirBuzzy"){
            var div = $('<div class="admin__container"><div class="avatar__container"></div></div>');
            div.appendTo('.admins__container');

            var div__child = $('<div class="admin__avatar"></div>');
            div__child.appendTo('.avatar__container:last-child');

            if (member == "Sovica"){
                var span = $('<span class="member__name -host">'+member+'</span>');
                span.appendTo('.avatar__container:last-child');
            }else{
                var span = $('<span class="member__name -admin">'+member+'</span>');
                span.appendTo('.avatar__container:last-child');
            }
        
            var img = $('<img class="member__img">');
            img.attr('src', "https://minotar.net/avatar/" + member);
            img.appendTo('.avatar__container:last-child');

            //if(member == "Ekkin0x"){
                //var div = $('<div class="description__container ekkin0x"></div>');
                //div.appendTo('.admin__container:last-child');

                //var div = $("<div class='description'><div class='description__wrapper'><span class='admin'>Admin</span><span> -  Said he wasn't gonna play all the time, still plays all the time. Can be bribed by chocolate. Weeb, but not obsessed. TRILOBITE!</span></div></div>");
                //div.appendTo('.ekkin0x');
                // console.log('panda');
            //}
            if(member == "SirBuzzy"){
                var div = $('<div class="description__container thepaintedwolf"></div>');
                div.appendTo('.admin__container:last-child');

                var div = $('<div class="description"><div class="description__wrapper"><span class="admin">Admin</span><span> - Likes his jungle base, sports and dogs. Creating a lemur army. Changes his skin every month.</span></div></div>');
                div.appendTo('.thepaintedwolf');
                // console.log('Lemur');
            }
            if(member == "Sovica"){
                var div = $('<div class="description__container sovica"></div>');
                div.appendTo('.admin__container:last-child');

                var div = $('<div class="description"><div class="description__wrapper"><span class="host">Host</span><span> - Does everything important. Easily bribed with owl statues. Cant decide on a base.</span></div></div>');
                div.appendTo('.sovica');
                // console.log('owl');
            }
        }else{
            var div = $('<div class="scene"><div class="cube" data-active="0" data-id="'+ memberRealCount+'"></div></div>');
            div.appendTo('.members__container');

            var cubeDiv = $('<div class="cube__face cube__face--front"></div><div class="cube__face cube__face--back"></div><div class="cube__face cube__face--right"></div><div class="cube__face cube__face--left"></div><div class="cube__face cube__face--top"></div><div class="cube__face cube__face--bottom"></div>');
            cubeDiv.appendTo('.scene:last-child .cube');
            
            var span = $('<span class="member__name">'+member+'</span>');
            span.appendTo('.scene:last-child .cube__face--right');

            var img = $('<img class="member__img">');
            img.attr('src', "https://minotar.net/avatar/" + member);
            img.appendTo('.scene:last-child .cube__face--front');

            memberRealCount += 1;
        }

        memberCount += 1;
    });

    $('.cube').mouseover(function(){
        
        $(this).addClass('show-right');
        let index = $(this).data('id');
    
        if($(this).data('active') == 0){
            $(this).data('active',1);

            var number = Math.floor((Math.random() * 51) + 50);

            setTimeout(function(){

                $('.cube').eq(index).removeClass('show-right');
                $('.cube').eq(index).data('active',0);

            },20 * number);
        } 
    })

    // Screenshot showcase
    
    // Can't find a way to count the number of images without throwing 404 erros
    // Number of image are static then :/

    let imgS2 = 8;

    for ( i = 1; i <= imgS2; i++){
        var img = $('<img class="gallery__img" src="./src/s2/'+ i +'.png"'+'/>');
        img.appendTo('.season2 .season__container');
    }

    let imgS1 = 8;

    for ( i = 1; i <= imgS1; i++){
        var img = $('<img class="gallery__img" src="./src/s1/'+ i +'.png"'+'/>');
        img.appendTo('.season1 .season__container');
    }

    $('.gallery__img').click(function(){

        let toTop = scroll;
        // console.log(toTop);
        $('.fullscreen__viewer').css('top',toTop);
        $('.fullscreen__viewer').css('z-index','7000');
        $('body').css('overflow-y','hidden');

        let param = $(this).attr('src');

        var img = $('<img class="img__fullscreen" src="'+param+'"/>');
        img.appendTo('.fullscreen__viewer');

        setTimeout(function(){
            $('.fullscreen__viewer').css('background','rgba(0,0,0,0.9)');
            $('.img__fullscreen').css('transform','scale(1)');
            $('.img__fullscreen').css('filter','blur(0px)');

            if($(window).width() <= 576 ){
                $('.img__fullscreen').css({'transform':'scale(1)','transform' : 'rotate(90deg)'});
                $('.img__fullscreen').css('width','80vh');
            }
        },500);

        $('.img__fullscreen').click(function(){
            $('.fullscreen__viewer').css('background','none');
            $('.img__fullscreen').css('transform','scale(0)');
            $('.img__fullscreen').css('filter','blur(5px)');

            setTimeout(function(){
                $('.fullscreen__viewer').css('z-index','-1');
                $('.fullscreen__viewer').children().eq(0).remove();
                $('body').css('overflow-y','scroll');
            },500);
            
        });

        $('.fullscreen__viewer').click(function(){
            $('.fullscreen__viewer').css('background','none');
            $('.img__fullscreen').css('transform','scale(0)');
            $('.img__fullscreen').css('filter','blur(5px)');

            setTimeout(function(){
                $('.fullscreen__viewer').css('z-index','-1');
                $('.fullscreen__viewer').children().eq(0).remove();
                $('body').css('overflow-y','scroll');
            },500);
            
        });
    });


    // ----------------------------------------
    // EASTER EGG'S 
    // WILL TRIGGER WITH A CERTAIN PROBABILITY
    // ----------------------------------------
    
    var number = Math.floor(Math.random() * 101);
    //console.log(number);

    // Ekkin0x's easter egg because why not ?!
    // 5% change to trigger
    // As Ekki's is now a member again, this is useless :p

    // if (number >= 96 && number <= 100){
    //     var div = $('<div class="member__container"</div>');
    //     div.appendTo('.members__container');

    //     var span = $("<span class='member__name -ekkin0x'>Ekkin0x's soul</span>");
    //     span.appendTo('.member__container:last-child');

    //     var img = $('<img class="member__img -ekkin0x">');
    //     img.attr('src', "https://minotar.net/avatar/" + 'Ekkin0x');
    //     img.appendTo('.member__container:last-child');

    //     $('.member__img').last().hover(function(){
    //         $('.member__name').last().css("opacity","1");
    //     },
    //     function(){
    //         $('.member__name').last().css("opacity","0");
    //     });
    
    // }

    var easterEgg = ["OWL > PANDA","OWLCRAFT WHEN ?!","TAG ! YOU'RE IN !","Merry XMAS !"];

    //25%

    if ( month == 11 ){
        $('.reddit').html('MERRY CHRISTMAS !');
    }
    else{
        if (number >= 0 && number <= 24){
            var number2 = Math.floor(Math.random() * easterEgg.length);
            //console.log(number2);
            $('.reddit').html(easterEgg[number2]);
    
            if($('.reddit').text().length <= 11)
                $('.reddit').css('left','65%');
        }
    }

    // --------------------------------------- 

    // Plugins aka datapack because I'm a Pepege
    var x = 0;

    $('.icon__left').click(function(){
        x-= 1;

        if (x < 0){
            x = 0;
        }

        changePlugin(x, "left");
    });

    $('.icon__right').click(function(){
        x+= 1;

        if (x > $('.plugins__container').children().length){
            x = $('.plugins__container').children().length;
        }

        changePlugin(x, "right");
    });

    // Change datapack view
    // parameter 1 : the index 
    // parameter 2 : left or right ?
    function changePlugin(element, direction){

        if (direction == "left"){
            $('.plugin__container').eq(element+1).removeClass('-selected');
            $('.plugin__container').eq(element).addClass('-selected');
        }else{
            $('.plugin__container').eq(element-1).removeClass('-selected');
            $('.plugin__container').eq(element).addClass('-selected');
        }
        if (x <= $('.plugins__container').children().length - 2)
            $('.plugins__container').css('transform','translateX('+ - (element * ($('.plugin__container').width() + 12))+'px)');
    }

    // Discord thingies
    // May be usefull later ?!
    $.ajax({
        url : 'https://discordapp.com/api/guilds/516232391203749907/widget.json',
        type : 'GET',
        dataType : 'json',
        success : function(data){
            //console.log(data);
        }
    });

    // Fuck retina but whatever
    if (window.devicePixelRatio > 1) {

        var images = $('.gallery__img');

        images.each(function(i) {

            var lowres = $(this).attr('src');

            var highres = lowres.replace(".png", "@2x.png");

            $(this).attr('src', highres);

        });

    }
    
});
