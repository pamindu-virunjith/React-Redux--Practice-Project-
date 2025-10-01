import React, { Component } from 'react'
import { connect } from 'react-redux'

class selectedPost extends Component {
  render() {
    if(!this.props.selectedPost){
        return(
            <h4 style={{textAlign:'center', marginTop:'20px', color:'grey'}}>Click a list item</h4>
        )
    }
    return (
      <div style={{textAlign:'left', marginTop:'20px',}}>
        <h3>Title: {this.props.selectedPost.title}</h3>
        <h4>Id: {this.props.selectedPost.id}</h4>
        <h5>Body:{this.props.selectedPost.body}</h5>
      </div>
    )
  }
}

function mapSateToProps(sate){
    return{
        selectedPost: sate.selectedPost
    }
}

export default connect(mapSateToProps)(selectedPost)