const React = require( 'react' );

const Timer = ( props ) => {
	let secondsLeft = props.timeLeft % 60,
		  minutesLeft = Math.floor( props.timeLeft / 60 );
		  
	if( secondsLeft.toString().length === 1 ) {
		secondsLeft = '0' + secondsLeft;
		
	}
	
	if( props.timeLeft === 0 ) {
		console.log( 'Time\'s up' );
	}
	
	if( props.timeLeft === null || props.timeLeft === 0 ) {
		return <div className='timer'/>;
	}
	
	return (
      <h1 className='timer'>Time Left: { minutesLeft }: { secondsLeft }</h1>
	);
};



module.exports = Timer;