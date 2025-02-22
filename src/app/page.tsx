
import Image from "next/image";
import Card from './component/card/card'
import './home.css'
import pic from './asserts/book-lover-concept-illustration.png'
import book1 from './asserts/books/6920933-removebg-preview.png'



function Home() {
  return (
    <>
      <div className="homeOverall">
        <div className="leftside">
      
            <p>Learning Platform</p>
            <h1 className="booking">Shop <br></br>Book<br></br> Online</h1>
          <p>Get the best deals on your favorite brands</p> 
          <button>Shop Now</button>
        </div>
        <div className="centerimg">
          <Image src={pic} alt="Book Lover Concept Illustration" className="centerpic" />
        </div>
        <div className="rightside">
          <div className="cardSec">
            <Card booksImg={book1} bookName={"Book1"} bookPrice={"$200"} />
            <Card booksImg={book1} bookName={"Book2"} bookPrice={"$2150"}  />
            <Card booksImg={book1} bookName={ "Book3"}  bookPrice={"$1500"} />
          </div>
          
        </div>
        
    </div>
    </>
  );
}
export default Home;  