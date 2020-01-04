import React, { Component } from "react";
import { connect } from "react-redux";
import BaseLayout from "../components/layouts/BaseLayout";
import { nameUpdate, nameInit } from '../actions/name.actions';
import { ageUpdate } from '../actions/age.actions';
import axios from 'axios';

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFinal: false
        };
        //this.props.nameInit();
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
    };

    static async getInitialProps(ctx) {
        //{store, isServer, pathname, query}
        console.log('ctxx', ctx)
        //ctx.store.dispatch({ type: 'NAME_INIT', payload: [] }); // component will be able to read from store's state when rendered
        //ctx.store.dispatch(nameInit());
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        let data = await response.data.splice(0, 10)
        //this.props.nameInit();
        return { customNew: 'custom', data }; // you can pass some custom props to component from here
    }

    onChangeName(event) {
        let name = event.target.value;
        //console.log("onChangeName", this.props.nameInit())
        this.props.nameUpdate(name);

    }

    onChangeAge(event) {
        let age = event.target.value;
        this.props.ageUpdate(age)
    }

    render() {
        console.log("testTT", this.props, this.props)
        return (
            <BaseLayout>
                <div>
                    <br /><br />
                    <div>
                        Name: <input type="text" onChange={this.onChangeName} value={this.props.name} />
                        Age: <input type="number" onChange={this.onChangeAge} value={this.props.age} />
                    </div>
                    <br></br>
                    <div>
                        <button onClick={() => { this.setState({ isFinal: true }) }}>Final Result</button>
                    </div>
                    {
                        this.state.isFinal ?
                            <div>
                                <label>Name : {this.props.name}</label><br />
                                <label>Age : {this.props.age}</label>
                            </div> : null
                    }
                </div>
            </BaseLayout>
        )
    }
}

// const mapDispatchStateToProps = (dispatch) => {
//     return {
//         nameUpdate, nameInit, ageUpdate
//         //nameUpdate: (name) => nameUpdate(name), // dispatch({ type: 'NAME_UPDATE', payload: `${name}` }),
//         //ageUpdate: (age) => ageUpdate(age) // dispatch({ type: 'AGE_UPDATE', payload: `${age}` })
//     }
// }

const mapStateToProps = (state) => {
    return {
        ...state.nameReducer, ...state.ageReducer
    }
}

//export default connect(mapStateToProps, { nameUpdate })(Page);
export default connect(mapStateToProps, { nameUpdate, ageUpdate })(Page);
//export default connect(state => state)(Page);