import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FetchPosts from '../actions/postAction'

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.FetchPosts()}>Click Me</button>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({FetchPosts: FetchPosts}, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonComponent)
