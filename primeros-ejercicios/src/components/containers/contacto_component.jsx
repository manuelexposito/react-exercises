import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ConectadoComponent from '../pure/conectado_component';


const ContactoComponent = ({contacto}) => {

    return (
        <div>
        <h2>
         {`Nombre : ${contacto.nombre} ${contacto.apellido}`}
        </h2>
        <h3>{`Email: ${contacto.apellido}`}</h3>
        <ConectadoComponent estado={contacto.conectado}></ConectadoComponent>
      </div>
    );
};


ContactoComponent.propTypes = {
    contacto : PropTypes.instanceOf(Contacto),
};


export default ContactoComponent;
