import React,{Component} from 'react';

//functional component basic component

// const SearchBar= ()=>{
// return <input />;
//
// };
// class based component that
// has more functionality and has more
// aware if any changes occured to it
// ie some input was writen
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={term:''}
  }
  render() {
    return (
      <div className='search-bar header header-cont'>
    <img className='logo'src='https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png' />
      <input value={this.state.term}
       onChange={(event)=>{ this.setState({term:event.target.value})}}
       onChange={event=>this.onInputChange(event.target.value)}
       placeholder="Search"/>

     </div>
  )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
