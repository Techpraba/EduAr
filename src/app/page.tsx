
import Image from "next/image";
import Card from './component/card/card'
import './home.css'
import pic from './asserts/book-lover-concept-illustration.png'
import book1 from './asserts/books/6920933-removebg-preview.png'
import Books from './component/books/page'

import { FaBookReader ,  FaHandHoldingHeart,FaRecycle} from "react-icons/fa";





function Home() {
  return (
    <>
      <div className="homeOverall">
      <div className="centerimg">
          <Image src={pic} alt="Book Lover Concept Illustration" className="centerpic" />
        </div>
        <div className="leftside">
      
            <p>Learning Platform</p>
            <h1 className="booking">Shop <br></br>Book<br></br> Online</h1>
          <p>Get the best deals on your favorite brands</p> 
          <button className="homebtn">Shop Now</button>
        </div>
       
        <div className="rightside">
          <div className="cardSec">
            <Card booksImg={book1} bookName={"Book1"} bookPrice={"$200"} />
            <Card booksImg={book1} bookName={"Book2"} bookPrice={"$2150"}  />
            <Card booksImg={book1} bookName={ "Book3"}  bookPrice={"$1500"} />
          </div>
          
        </div>
        
      </div>
      {/* Second Part of the website */}
      <div className="secPartOverall">
        <div className="leftside lColor">
          <h1 className="booking">Welcome to Self Book</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nemo sint voluptate nobis exercitationem nihil commodi accusantium earum aliquam, ut voluptatibus minus fuga asperiores. Non dicta sunt minus tempore vel?</p>
          <button className="homebtn">Shop</button>
          <div className="homeicons">
           <div>
              <FaBookReader />
              <h5 className="bookHeadline">Buying a book ? <br />Make Us A Offer</h5>
              <p  className="bookHeadline bookpara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, fugit!</p>
            </div>
            <div>
            <FaHandHoldingHeart />
              <h5 className="bookHeadline">Buying a book ? <br />Make Us A Offer</h5>
              <p  className="bookHeadline bookpara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, fugit!</p>
            </div>
            <div>
            <FaRecycle />
              <h5 className="bookHeadline">Buying a book ? <br />Make Us A Offer</h5>
              <p  className="bookHeadline bookpara">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, fugit!</p>
            </div>
        
        
       
          
          </div>
        </div>
        <div className="rightside rColor">
          <Image src={pic} alt="Book Lover Concept Illustration" className="centerpic" />
        </div>
      </div>
      {/* third Part of the website */}
      <div className="thirdPartOverall">
        <h1>Best Books of 2024</h1>
      <div className="bookDetails">    
          <Books books={book1} bookName={"one Piece"} bookPrice={ "$200"} />
      <Books books={book1} bookName={"one Piece"} bookPrice={ "$200"} />
      <Books books={book1}  bookName={"one Piece"} bookPrice={ "$200"} />
      <Books books={book1} bookName={"one Piece"} bookPrice={ "$200"} />
           
   
        </div>
        </div>
    </>
  );
}
export default Home;  