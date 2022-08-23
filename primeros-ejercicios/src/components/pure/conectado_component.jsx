import React from 'react';
import PropTypes from 'prop-types';


const ConectadoComponent = ({estado}) => {
    return (
        <div>
            <h4>{estado ? 'En Línea' : 'No Disponible'}</h4>
        </div>
    );
};


ConectadoComponent.propTypes = {
    estado : PropTypes.bool,
};



export default ConectadoComponent;
