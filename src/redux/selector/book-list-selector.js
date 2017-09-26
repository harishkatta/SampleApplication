import { createSelector } from 'reselect';
const getBooks = state => state.books;
export const getBooksListSelector = createSelector([getBooks], (bookSelector) => {
    for(let key in bookSelector){

    }
let result = bookSelector.map((book) => {
    //console.log(book.name)
    if(book && book.name && (book.name).constructor === Array) {
        return book.name.filter((item) => {
            return item.Designation;
        });
    } else{
        return false;
    }
});
let final = result.filter((item) => {
      return (item !== false);
});
let result2=final.map((name) => {
    console.log(name);
    console.log('+++++++++++')
    return  name.map((name) => {
        return  name.Empid;
    });
});
console.log('book selector');
console.log(result)

console.log(final)
    console.log(result2)
    console.log('---')
});
