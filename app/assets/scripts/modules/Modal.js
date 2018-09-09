import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }


    events(){
        this.openModalButton.click(this.openModal.bind(this));
        this.closeModalButton.click(this.closeModal.bind(this));
    }

    openModal(){
        this.modal.addClass('modal--is-open');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-open');
        return false;
    }

}   

export default Modal;