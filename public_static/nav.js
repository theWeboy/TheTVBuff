/**
 * Created by Deepak on 23-07-2017.
 */

var $document = $(document),
    $element = $('.navbar'),
    navbarCustom = 'navbar-custom';
    navbarTransparent =  'navbar-transparent';
    fadeInDown = 'fadeInDown';

$document.scroll(function () {
   if ($document.scrollTop() >= 50){
       $element.addClass(navbarCustom);
       $element.removeClass(navbarTransparent);
        $element.addClass(fadeInDown);
   }
   else {
       $element.addClass(navbarTransparent);
       $element.removeClass(navbarCustom);
       $element.removeClass(fadeInDown);
   }
});
