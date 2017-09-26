import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../redux/actions/index";
import { bindActionCreators } from "redux";
import {getBooksListSelector } from '../redux/selector/book-list-selector'

class BookList extends Component {

  renderList(){
    return this.props.books.map((book)=>{
      return(
        //<li key={book.title}
          //onClick={()=>this.props.selectBook(book)}>
            <div key={book.title} onClick = {() => this.props.selectBook(book)}>{book.title} </div>
        //</li>
      );
    });
  }
/*
 <ol type="i"></ol>
 <ol type="1"></ol>
 <ol type="a"></ol>
 <ol type="A"></ol>
*/
  render(){
    return(
      <ol type="i">
      {this.renderList()}
      </ol>
    )
  }
}
function mapStateToProps(state){
  // Whatever is returned will show up as props
  // inside of BookList
  return{
    books:state.books,
      getBooksListSelector:getBooksListSelector(state)
  };
}
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever selectBook is called, the result should be passed
    // to all of our reducers
  return bindActionCreators({selectBook:selectBook},dispatch);
  //return bindActionCreators({selectBook},dispatch);
    //this.props.selectBook(); should be called on booklist
}
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
//export default connect(mapStateToProps,{select_book:selectBook})(BookList);

