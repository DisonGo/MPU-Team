'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
        this.state.liked = false
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}
class Conteiner extends React.Component{
    constructor(props){
        super(props)

    }
}
class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // Мы закрываем выпадающий список по таймеру setTimeout.  // Это нужно чтобы для дочерних элементов событие выделения  // происходило перед событием получения фокуса.  onBlurHandler() {    this.timeOutId = setTimeout(() => {      this.setState({        isOpen: false      });    });  }  // Не закрывать выпадающий список при получении фокуса дочерним элементом.
    onFocusHandler() {   
       clearTimeout(this.timeOutId);  
    }  
    render() {
    // React помогает нам благодаря всплытию потери фокуса и
    // фокусировке событий на родителе.   
    return (      
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>       
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
let test = <div id = {getRandom(0,100)}> test </div>
let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<BlurExample />, domContainer);