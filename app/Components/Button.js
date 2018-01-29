const React = require( 'react' );

function Button( props ) {
	const timeLeft = props.time * 60;
	
	return (
	  <button type='button' className='btn'
	    onClick={ props.startTimer.bind( null, timeLeft ) }>
	  { props.time } minutes
	  </button>
	);
}



module.exports = Button;