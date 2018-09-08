import $ from "jquery";
import waypoints  from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class DisplayOnScroll {
    constructor(els, offset) {
        this.itemToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWayPoints();
    }

    hideInitially() {
        this.itemToReveal.addClass('display-item');
    }

    createWayPoints() {
        var that = this;
        this.itemToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass('display-item--is-visible');
                },
                offset: that.offsetPercentage
            });
        });
    }

}

export default DisplayOnScroll;