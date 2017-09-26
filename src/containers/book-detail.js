import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component{
  render(){
    if(!this.props.selectedBook){
      return <div>select a book to get started</div>;
    }
    return(
      <div>
      <h3>Details for: </h3>
      <div> Title: {this.props.selectedBook.title} </div>
      <div>Pages: {this.props.selectedBook.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    selectedBook:state.activeBook
  }
}
export default connect(mapStateToProps)(BookDetail);
