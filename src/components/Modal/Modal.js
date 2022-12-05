import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    // componentDidMount() {
    //     console.log("змонтувалася модалка");
    //     console.log(this.props);
    //     window.addEventListener('keydown', e => {
    //         // console.log(e.code);
            
    //         if (e.code === 'Escape') {
    //             console.log("Закрий вже ту модалку");
    //             this.props.onEsc();
    //         }
                
    //     })
    // }
   
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = event =>{
            if (event.code === 'Escape') {
                this.props.onClose();
            }
    };
    handleBackdropClick = event => {
        // console.log('клікнули в бекдроп')
        // console.log('currentTarget', event.currentTarget);
        // console.log('target', event.target);
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }
    render() {
        return createPortal(
        <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
            <div className="Modal__content">{this.props.children}</div>
        </div>,
        modalRoot,
        );
    }
} 

