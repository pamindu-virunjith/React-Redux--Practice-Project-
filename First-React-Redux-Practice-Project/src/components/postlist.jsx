import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectPost } from '../actions/postAction'
import '../App.css'

class Postlist extends Component {
    createListItems(){
        return this.props.allPost.map((post)=>{
            return(
                <li key={post.id} onClick={()=>this.props.selectPost(post)} style={{cursor:'pointer', textAlign:'left'}} className='hover-bg'>{post.title} {post.body}</li>
            )
        })
    }
  render() {
    if(!this.props.allPost){
        return(
            <h4 style={{textAlign:'center', marginTop:'20px', color:'grey'}}>Click the button First</h4>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPost: selectPost}, dispatch)
}

export default connect(mapSateToProps, matchDispatchToProps)(Postlist)
