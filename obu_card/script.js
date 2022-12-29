$(document).ready(function() {
    
    $('input').prop("checked", false);

    var i = 0;
    
    var count = $("ul li").length;
    $('#count').val(count);

    //var stat_count;

    var ap_password = "admin1610";
    var password = "00000000";

    //$('.admin-space').show();
    //$('.admin-login').show();

    $('.rec').click(function() {
        i++;
        if (i >= 5) {
            $('.admin-login').slideDown();
            $('.rec').remove();
            i = 0;
        }
    })

    $(function() {
        $("input:password").on('keyup', function() {
            password = $("input:password").val();

            if (password.length >= 8) {
                if (password != ap_password)
                    $("#CheckPasswordMatch").html("Incorrect!").css("color", "red");
                else
                    $("#CheckPasswordMatch").html("Correct!").css("color", "green");
            } else $("#CheckPasswordMatch").html("").css("color", "red");
        });

        $('input:button').click(function() {
            if (password == ap_password) {
                $('.admin').slideDown();
                $('.admin').css('display','flex');
                $('.admin-login').slideUp();
            } else $("#CheckPasswordMatch").html("Пустое поле").css("color", "red");
        });
    });

    $('.admin form input:button').click(function() {
        var name = $("form input:text").eq(0).val();
        var des = $("form input:text").eq(1).val();

        if (name != "") {
            $(".title .name").html(name).css('text-transform', 'capitalize');
        }
        if (des != "") {
            $(".title .caption").html(des);
        }
    });

    var img;

    $('#ic input:file').change(function () {
        const file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) { img = event.target.result };
            reader.readAsDataURL(file);
        }
    });

    $('#ic input:button').click(function(){
        var name = $("#ic input:text").eq(0).val();
        var link = $("#ic input:text").eq(1).val();

        var ic4 = '<a href="' + link +'" class="icon_card"><img src="' + img + '" alt=""><span class="name">' + name + '</span></a>';
        $('.row').append(ic4);
    });

    var icon;

    $('#ic2 input:file').eq(0).change(function () {
        const file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) { icon = event.target.result };
            reader.readAsDataURL(file);
        }
    });

    var bg;

    $('#ic2 input:file').eq(1).change(function () {
        const file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) { bg = event.target.result };
            reader.readAsDataURL(file);
        }
    });

    $('#ic2 input:button').click(function(){
        var name = $("#ic2 input:text").eq(0).val();
        var link = $("#ic2 input:text").eq(1).val();

        var ic4 = '<a href="' + link +'"><div class="item_card bg" style="background-image: url('+ bg +')"><img src="' + icon + '" alt=""><span class="name">' + name + '</span></div></a>';
        $('.column').append(ic4);
    });
    
    $(".hide").click(function() {
        //$(".admin ul").animate({ height: "toggle", opacity: "0" }, 'slow');
        $(".admin ul").animate({
            opacity: 0
        }, 256).slideToggle(512);
        $(this).hide();
        $(".show").show();
        $("#count").css("opacity", "1");
    })

    $(".show").click(function() {
        //$(".admin ul").animate({ height: "toggle", opacity: "1" }, 'slow');
        $(".admin ul").slideToggle(512).animate({
            opacity: 1
        }, 256);
        $(this).hide();
        $(".hide").show();
        $("#count").css("opacity", "0");
    })

    $(".admin input:checkbox").eq(0).click(function() {
        $(".bs-card").toggleClass("solid");
        $(".bs-card").toggleClass("glass");
    })
    $(".admin input:checkbox").eq(1).click(function() {
        $(".promote").toggleClass("alt");
    })
    $(".admin input:checkbox").eq(2).click(function() {
        $(".item_card").toggleClass("bg");
    })
    $(".admin input:checkbox").eq(3).click(function() {

        if ($("input:checkbox").eq(0).is(':checked')) {
            $("input:checkbox").eq(0).click();
        }
        if ($("input:checkbox").eq(1).is(':checked')) {
            $("input:checkbox").eq(1).click();
        }
        if ($("input:checkbox").eq(2).is(':checked')) {
            $("input:checkbox").eq(2).click();
        }

        if ($(this).is(':checked')) {
            $("input:checkbox").eq(0).prop("disabled", true);
            $('li').eq(0).css('color', '#64646440');

            $("input:checkbox").eq(1).prop("disabled", true);
            $('li').eq(1).css('color', '#64646440');

            $("input:checkbox").eq(2).prop("disabled", true);
            $('li').eq(2).css('color', '#64646440');
        } else {
            $("input:checkbox").eq(0).prop("disabled", false);
            $('li').eq(0).css('color', '#212121');

            $("input:checkbox").eq(1).prop("disabled", false);
            $('li').eq(1).css('color', '#212121');

            $("input:checkbox").eq(2).prop("disabled", false);
            $('li').eq(2).css('color', '#212121');
        };

        $(".bs-card").toggleClass("solid");
        $(".bs-card").toggleClass("glass");
        $(".item_card").toggleClass("bg");

        if ($('.admin input:checkbox').eq(4).is(':checked')) {
            $(".item_card").toggleClass("alt");
            $(".icon_card").toggleClass("alt");
            $(".title").toggleClass("alt");
        }
    });

    $('.admin input:checkbox').eq(4).click(function() {
        $(".bg-container").toggleClass("alt");

        if ($('.admin input:checkbox').eq(3).is(':checked')) {
            $(".item_card").toggleClass("alt");
            $(".icon_card").toggleClass("alt");
            $(".title").toggleClass("alt");
        }
    });
    /*
    $('.promote a').click(function(){
        i++;
        stat_count =+ i;
        $('.count').val(stat_count);
        alert(stat_count);
    })*/
})