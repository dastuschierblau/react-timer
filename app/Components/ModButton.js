const React = require( 'react' );

function ModButton( props ) {
	return (
	  <button type='button' className='btn'
	    onClick={ props.action }>
		{ props.label }
	  </button>
	);
}



module.exports = ModButton;