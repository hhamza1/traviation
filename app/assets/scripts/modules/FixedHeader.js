import $ from 'jquery';
import waypoints  from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class FixedHeader {
    constructor(){
        this.siteHeader = $('.site-header');
        this.trigger = $('.large-hero__title');
        this.headerWayPoint();
    }

    headerWayPoint(){
        var that = this;
        new Waypoint ({
            element: this.trigger[0] ,
            handler: function(direction){
                if(direction == "down"){
                    $(that.siteHeader).addClass('site-header--darker');
                }
                else {
                    $(that.siteHeader).removeClass('site-header--darker');
                }
            }
        });
    }
}


export default FixedHeader;