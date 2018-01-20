jQuery(document).ready(function(){
    var lastMenu = "";
    var TogglePos =1;
    var LastTouchedId = "";

    jQuery("#menu-header  > li").hover(function(){
        lastMenu = jQuery(this).attr("id");
    });

    jQuery('body').on('click',"li.menu-item-has-children > .m-item",function(e){
        e.preventDefault();

        lastMenu = jQuery(this).parent('li');

        var CurId =  lastMenu.attr("id");

        if( LastTouchedId !== CurId){
            //lastMenu.click();
            jQuery(".menu-item-has-children").removeClass('drop');
            LastTouchedId = CurId;
            TogglePos = 1;
            //return false;
        }
        if(TogglePos == 1){
            lastMenu.addClass('drop');
            jQuery("#"+CurId+" .sub-menu").addClass('open');
            TogglePos = 2;
        } else{
            lastMenu.removeClass('drop');
            jQuery("#"+CurId+" .sub-menu").removeClass('open');
            TogglePos = 1;
        }



    });
    jQuery('body').on('click',".menu-item-has-children  ul li  .m-item",function(e) {
        jQuery("#menu-header").removeClass('open');
        console.log("ok");
    });
    console.log("ok");
    jQuery("#menu-header > .menu-item-has-children").append("<span class='close-sub'></span>");
    jQuery("#wrap, .close-sub, .box").click(function(){
        jQuery("#menu-header .menu-item-has-children ").removeClass('drop');
        jQuery("#menu-header .menu-item-has-children .sub-menu").removeClass("open");
        console.log("ok");
    });

});