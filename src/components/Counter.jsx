import { Component } from "react";

class Counter extends Component {



    constructor(props) {
        super(props)

        this.state = {

            count: 0,
            user: []
        }



    }

    handleClik = () => {

        this.setState({ count: this.state.count + 1 })


    }





    render() {


        return (

            <div>


                <span>{this.state.count}</span>
                <button onClick={this.handleClik}>add</button>



            </div>
        )
    }



}


export default Counter