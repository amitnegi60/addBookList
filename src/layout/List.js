import React,{useState} from 'react';

const List = () => {


const [bookname , setBookName] = useState('');
const [authorname, setAuthorName] = useState('');
const [bookedition, setBookEdition] = useState('');
const [price, setPrice] = useState('');
const [items, setItems] = useState([]);

const handel = (e) => {

  e.preventDefault();
  if(bookname && authorname && bookedition && price){
    const newitems = {bookname: bookname, authorname: authorname, bookedition: bookedition, price: price, id: new Date().getTime().toString()};
    setItems([newitems]);
  }
  setBookName('');
  setAuthorName('');
  setBookEdition('');
  setPrice('');
  
}

return(
  <>
 <article>
   <form className="form">
     <div className="form-control">
       <label htmlFor="bookname">Book Name: </label>
       <input type="text" id="bookname" name="bookname" placeholder="Enter Book Name"
       value = {bookname} onChange={(e) => {setBookName(e.target.value)}}/>
     </div>
     <div className="form-control">
       <label htmlFor="authorname">Author Name: </label>
       <input type="text" id="authorname" name="authorname" placeholder="Enter Author Name" value={authorname} onChange={(e) => {setAuthorName(e.target.value)}}/>
     </div>
     <div className="form-control">
       <label htmlFor="bookedition">Book Edition: </label>
       <input type="number" id="bookedition" name="bookedition" value={bookedition} onChange={(e) => {setBookEdition(e.target.value)}}/>
     </div>
     <div className="form-control">
       <label htmlFor="price">Price: Rs </label>
       <input type="number" id="price" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
     </div>
     <button type="submit" onClick={handel}>Add book to list</button>
   </form>
{items.map((newitems) => {
  const {bookname,authorname,bookedition,price,id} = newitems;
  return(
<div className="item" key={id}>
  <h4>{bookname}</h4>
  <p>By: {authorname}</p>
  <p>Edition: {bookedition}</p>
  <p>Rs{price}</p>
</div>
  );
})}
 </article>
  </>
);

}

export default List;