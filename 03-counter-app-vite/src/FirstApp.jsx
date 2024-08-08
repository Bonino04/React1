import PropTypes from 'prop-types';

export const FirstApp = ({ title , subTitle}) =>  {

   //console.log(props);
   
    
   return ( 
        <>
        <h1>{ title }</h1>
        <h1>Gonzalo</h1>
        <p>Soy un subtitulo</p>
        <p>{ subTitle }</p>
        </>
    );
}

FirstApp.proptypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: '123',
    name: 'Gonzalo Bonino',
}