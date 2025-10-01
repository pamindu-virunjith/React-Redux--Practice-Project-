import React, { Component } from 'react'
import { connect } from 'react-redux'

class Postlist extends Component {
    createListItems(){
        return this.props.allPost.map((post)=>{
            return(
                <li key={post.id}>{post.title} {post.body}</li>
            )
        })
    }
  render() {
    if(!this.props.allPost){
        return(
            <h1>Click the button First</h1>
        )
    }
    return (
      <div>
        <ul>
            {this.createListItems()}
        </ul>
      </div>
    )
  }
}

function mapSateToProps(state){
    return{
        allPost: state.allPost
    }
}

export default connect(mapSateToProps)(Postlist)
