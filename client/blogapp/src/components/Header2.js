import React, { Component } from 'react';
import {WordTranslation} from './TranslateFunctions';
class Header2 extends Component {
    constructor(props){
        super(props);
        this.state = {category: ""};
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.category !== this.props.match.params.category){
            let category = this.props.match.params.category;
            category = WordTranslation(category);
            this.setState({category});
        }
    }
    componentDidMount(){
        let category = this.props.match.params.category;
        category = WordTranslation(category);
        this.setState({category});
    }
  render() {
    return (
        <div id="header2wrapper">
            <div id="subheader2wrapper">
                {this.state.category}
            </div>
        </div>
    );
  }
}

export default Header2;