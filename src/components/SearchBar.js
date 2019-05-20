import React, { Component } from 'react';
import '../stylesheets/Search.scss';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { 
      termIng: '',
      termHealth:'',
      termTime:'',
      termCaloriesFrom:'',
      termCaloriesTo:'',
      searchError:false,
      shown: true,
      newPosition:false
   };
  }

  onInputChange = e => {
    let {name, value } =e.target;
    this.setState({ [name]: value });
  }

  onFormSubmit = e => {
    e.preventDefault();
    if(this.state.termIng === ''|| this.state.termTime ==='' || this.state.termCaloriesFrom ===''|| this.state.termCaloriesTo ==='' || this.state.termHealth ===''){
      this.setState({
        searchError: true,
        newPosition:true
      })
    } 
   this.props.onTermSubmit(this.state);
  };
 
  render() {
    return (
      <div className="search">
        <div className='search-bar'>
          <h2>Search</h2>
          <form className='ui-form' onSubmit={this.onFormSubmit}>
            <div className='container-input-search'>
              <div className='container-child-searchbar'>
                <input
                  onChange={this.onInputChange}
                  value={this.state.termIng}
                  name='termIng'
                  type='text'
                  className='centerInput'
                  placeholder='banana, yogurt, etc'
                />
                </div>
                <h3>or refine search using filters</h3>
                <h2>Diet</h2>
                  <div className='container-health'>
                    <div  className="healthOptions">
                      <div className="floatBlock">    
                        <label> 
                        <input name="termHealth" 
                          type="radio" 
                          value="vegetarian"
                          onChange={this.onInputChange} 
                          />  Vegetarian  </label>
                      </div>  
                      <div className="floatBlock">
                        <label> 
                        <input  name='termHealth'
                          type="radio" value="vegan" 
                          onChange={this.onInputChange} 
                           />    Vegan    </label>
                     </div>
                    <div className="floatBlock">
                     <label>
                      <input name='termHealth'
                      type="radio" 
                      value='paleo' 
                      onChange={this.onInputChange} 
                      />    Paleo   </label>
                    </div>
                  </div>
               </div>
               <h2>How many minutes</h2>
                <div className='container-health'>
                 <div className='healthOptions'>
                  <div className="floatBlock">
                      <label> 
                      <input name="termTime" 
                       type="radio" 
                       value="15"
                       onChange={this.onInputChange} 
                      />  15 minutes  </label>
                  </div>
                  <div className="floatBlock">
                      <label> 
                      <input name="termTime" 
                      type="radio" 
                      value="30"
                      onChange={this.onInputChange}
                      />  30 minutes  </label>
                  </div>
                  <div className="floatBlock">
                      <label> 
                      <input name="termTime" 
                      type="radio" 
                      value="45"
                      onChange={this.onInputChange}     
                      />  45 minutes  </label>
                  </div>
            </div>
          </div>
          <h2>Calories</h2>
          <div className='container-calories'>
            <label>from:</label>
            <input
              onChange={this.onInputChange}
              value={this.state.termCaloriesFrom}
              name='termCaloriesFrom'
              type='number'
              className='centerInput'
           />
          <label>to:</label>
          <input
            onChange={this.onInputChange}
            value={this.state.termCaloriesTo}
            name='termCaloriesTo'
            type='number'
            className='centerInput'
          />
          </div> 
            <div className='container-btn-search'>
              <button className='btn-search'type='submit' ><p> Search</p></button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export default SearchBar;
