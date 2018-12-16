import React from 'react';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import Modal from 'react-modal';
import { basename } from 'path';
import 'moment/locale/nb';

import '../../css/calendarStyle.css';

var items=[{
    _id: 0,
    name:'Evento 1',
    date:'30/06/2018',
    desc:'Trabajando en el proyecto',
    completed: false
  },
  {
    _id: 1,
    name:'Evento 2',
    date:'06/06/2018',
    desc:'Entrega proyecto Fernando',
    completed: false
  },
  {
    _id: 2,
    name:'Evento 3',
    date:'20/06/2018',
    desc:'Vacaciones!!',
    completed: false
  }
  ]

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement(document.getElementById('app'))

  class Events extends React.Component {
      constructor(){
          super();
          this.state = {
            date: moment(),
            modalIsOpen: false,
            events: items.length
          }
          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
          this.handleAddone = this.handleAddone.bind(this);
          this.handleGetEvents = this.handleGetEvents.bind(this);
        }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
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

  handleGetEvents(){
      var z=[];
      for( var i = 0; i < items.length; i++){
          if(!items[i].completed)
              z.push(items[i].date+ ' | '+items[i].name+' - '+items[i].desc)
      }
      return z.map((z)=><li>{z}</li>);
  }

  onFormSubmit(e){
    e.preventDefault();

    const nameS =e.target.elements.name.value;
    const dateS =e.target.elements.date.value;
    const descS =e.target.elements.desc.value;

    items.push({_id: items.length+1, name: nameS, date: dateS, desc: descS, completed: false});
    e.target.elements.name.value=" ";
    e.target.elements.date.value=" ";
    e.target.elements.desc.value=" ";

  }

    render() {
      return (
        <div>
        <div className='contenedor-columna calendar'>
          <h3>Eventos pendientes:</h3>
          <ul>{this.handleGetEvents()}</ul>
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
        </div >
          <div className='contenedor-columna calendar'>
            <Calendar
              onChangeMonth={(date) => this.setState({ date })}
              date={this.state.date}
              onPickDate={(date) => console.log(String(date.format('L')))}
            />
          </div>
        </div>
      );
    }
  }

export default Events;