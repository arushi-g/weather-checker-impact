import React from 'react';
//
//function ZipForm(props) {
//    
//    function clickMethod(zip) {
//        event.preventDefault()
//        props.function(zip)
//    }
//    
//    return (
//        <div>
//            <input placeholder='Enter your Zip Code' />
//            <button onClick="clickMethod(target.value)">Go</button>
//        </div>    
//    )
//}


//function ZipForm(props) {
//    
//    function clickMethod() {
//        event.preventDefault()
//        console.log('click ran')
//        props.function(target.value)
//    }
//    
//    return (
//        <div>
//            <input placeholder='Enter your Zip Code' />
//            <button onClick={this.clickMethod}>Go</button>
//        </div>    
//    )
//}
//
//export default ZipForm;

class ZipForm extends React.Component {
    
    constructor() {
        super();
        this.state = {
        }
        this.clickMethod = this.clickMethod.bind(this);
    }
    
    clickMethod() {
        event.preventDefault();
        const input = document.getElementById('input');
        console.log('click ran');
        this.props.function1(input.value)
        //this.props.function1();
    }
    
    render() {
        return (
            <div>
                <input id='input' placeholder='Enter your Zip Code' />
                <button onClick={this.clickMethod}>Go</button>
            </div>    
        ) 
    }
}

export default ZipForm;