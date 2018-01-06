import React from 'react';
import ZipForm from './ZipForm.jsx';

//const App = function() {
//  return (
//    <div className="container">
//      <h1>What's the weather?</h1>
//      <ZipForm />
//    </div>
//    
//  )
//}

class App extends React.Component {
    
    
// weirdest zip code ever: 34987654326iy
//http://api.wunderground.com/api/216f78f6f0d5cbd9/conditions/q/10004.json

    constructor() {
        super();
        let key: '216f78f6f0d5cbd9';
        this.state = {
            zipcode: null,
            weatherData: null,
        }
        this.updateZipcode = this.updateZipcode.bind(this);
    }
    
    updateZipcode(zip) {
        //this.state.zipcode = zip;
        this.setState({zipcode: zip});

        console.log(zip);
        this.getWeatherData(zip);
    }

    async getWeatherData(zip) {
         try {
           const proxyurl = "https://cors-anywhere.herokuapp.com/";
           let response = await fetch(proxyurl + "http://api.wunderground.com/api/216f78f6f0d5cbd9/conditions/q/" + zip + ".json")
           //let weatherInfo = await response.json()
           this.setState({weatherData: await response.json()});
           console.log(this.state.weatherData)
            console.log('The temperature is ' + this.state.weatherData.current_observation.temperature_string)

         } 
         catch (error) {
           console.log(error)
         }
    }
                  //<h3>The temperature is {this.state.weatherData.current_observation.temperature_string}</h3>
    
    render() {
          return (
            <div className="container">
              <h1>What's the weather?</h1>
              <ZipForm function1={this.updateZipcode} />
            {
              this.state.weatherData == null || this.state.weatherData.current_observation == undefined
                  ?
              <h2>Please enter a valid zipcode</h2> 
                  :
              <div>
                  <h2>You're in {this.state.weatherData.current_observation.display_location.full} {this.state.zipcode}</h2>
                  <h3>The temperature is {this.state.weatherData.current_observation.temperature_string}</h3>
                  <h3>It feels like {this.state.weatherData.current_observation.feelslike_string}</h3>
              </div>
            }
              
            </div>
        )
    }
}

export default App;
