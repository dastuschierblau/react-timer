let React = require( 'react' ),
    ReactDOM = require( 'react-dom' ),
	ReactRouter = require( 'react-router-dom' ),
	Router = ReactRouter.BrowserRouter,
	Route = ReactRouter.Route,
	Button = require( './Components/Button.js' ),
	Timer = require( './Components/Timer.js' ),
	ModButton = require( './Components/ModButton.js' );
	
require( './index.css' );

class App extends React.Component {
	constructor( props ) {
		super( props );
		
		this.state = {
			timeLeft: null,
			timer: null,
			okToPause: null,
			originalTime: null
		};
		
		this.startTimer = this.startTimer.bind( this );
		this.pauseResume = this.pauseResume.bind( this );
		this.cancelTimer = this.cancelTimer.bind( this );
		this.resetTimer = this.resetTimer.bind( this );
	}
	
	componentDidMount() {
		this.setState( () => ({ okToPause: true }));
	}
	
	startTimer( timeLeft ) {
		clearInterval( this.state.timer );
		let timer = setInterval( () => {
			let timeLeft = this.state.timeLeft - 1;
			if( timeLeft === 0 ) clearInterval( timer );
			this.setState(() => ({ timeLeft: timeLeft }));
		}, 1000 );
		return this.setState(() => ({ timeLeft: timeLeft, timer: timer, originalTime: timeLeft }));
	}
	
	pauseResume() {
		if( this.state.okToPause ) {
			let placeheldTimer = this.state.timer,
			    placeheldTimeLeft = this.state.timeLeft;
			clearInterval( this.state.timer );
			return this.setState(() => ({ okToPause: false, timer: placeheldTimer, timeLeft: placeheldTimeLeft }));
		}
		
		if( !this.state.okToPause ) {
			this.startTimer( this.state.timeLeft );
			return this.setState(() => ({ okToPause: true }));
		}
	}
	
	cancelTimer() {
		clearInterval( this.state.timer );
		this.setState( () => ({ okToPause: true, timeLeft: null }) );
	}
	
	resetTimer() {
		clearInterval( this.state.timer );
		this.startTimer( this.state.originalTime );
	}
	
	render() {
		return (
		  <div className='container'>
		    <div className='container-top'>
		    <h1>Timer</h1>
			<div className='btn-group'>
			  <Button time='5' startTimer={ this.startTimer }/>
			  <Button time='10' startTimer={ this.startTimer }/>
			  <Button time='15' startTimer={ this.startTimer }/>
			</div>
			<Timer timeLeft={ this.state.timeLeft }/>
			</div>
			<div className='container-bottom'>
			<div className='btn-group mod-btn'>
			  <ModButton label='Reset' action={ this.resetTimer }/>
			  <ModButton label='Cancel' action={ this.cancelTimer }/>
              <ModButton label='Pause/Resume' action={ this.pauseResume }/>
			</div>
			</div>
		  </div>
		);
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );