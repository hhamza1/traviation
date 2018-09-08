import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import DisplayOnScroll from './modules/DisplayOnScroll';
import FixedHeader from './modules/FixedHeader';

var mobileMenu = new MobileMenu;
var fixedHeader = new FixedHeader;
new DisplayOnScroll($('.feature-item'), "85%");
new DisplayOnScroll($('.testimonial'), "60%");


 