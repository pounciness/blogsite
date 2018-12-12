import React, { Component } from 'react';
class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: ""
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.match.params.category !== this.props.match.params.category){
            let category = this.props.match.params.category;
            this.setState({category});
        }
    }
    componentDidMount(){
        let category = this.props.match.params.category;
        this.setState({category});
    }
  render() {
    return (
        <div id="postwrapper">
            <div id="subpostwrapper">
                {this.state.category}
            </div>
        </div>
    );
  }
}

export default Post;
