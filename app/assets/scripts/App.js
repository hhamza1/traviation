import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import DisplayOnScroll from './modules/DisplayOnScroll';

var mobileMenu = new MobileMenu;
new DisplayOnScroll($('.feature-item'), "85%");
new DisplayOnScroll($('.testimonial'), "60%");


 