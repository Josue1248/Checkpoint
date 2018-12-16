import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../../css/w3.css';
import '../../css/w3-theme-blue.css';
import '../../css/mycss.css';

const newEvent ={
  options:[]
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('app'))

class ModalComp extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      noEvents:3
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#085a9d';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  handleAddone(){
    this.setState((prevState)=>{
      return {
        noEvents:prevState.noEvents+1};
    });
  }

  onFormSubmit(e){
    e.preventDefault();

    const name =e.target.elements.name.value;
    const date =e.target.elements.date.value;
    const desc =e.target.elements.desc.value;
    if (name&&date){
      newEvent.options.push(this.state.noEvents);
      newEvent.options.push(name);
      newEvent.options.push(date);
      newEvent.options.push(desc);
      newEvent.options.push(false);
      e.target.elements.name.value=" ";
      e.target.elements.date.value=" ";
      e.target.elements.desc.value=" ";
    }
    this.handleAddone();
    console.log(newEvent.options);
  };
  render() {
    return (
      <div>
        <button className="w3-btn w3-blue" onClick={this.openModal}>Agregar evento</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Agregar evento"
        >

          <h3 ref={subtitle => this.subtitle = subtitle}>Agregar nuevo evento</h3>
          <form onSubmit={this.onFormSubmit}>
                <fieldset>
                    <legend>Nombre:</legend>
                    <input className="w3-input" type="text" name='name' />
                    <legend>Fecha:</legend>
                    <input className="w3-input" type="date" name='date' />
                    <legend>Descripción:</legend>
                    <input className="w3-input" type="text" name='desc' />
              </fieldset>
              <button className="w3-btn w3-blue">Agregar</button>
            </form>
        </Modal>
      </div>
    );
  }
}

export default ModalComp;