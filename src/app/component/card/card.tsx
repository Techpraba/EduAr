import './card.css'
import Image from 'next/image';
export default function Home(books ) {
    return (
      <>
        <div className="card">
          <div className="card-container">
            <Image src={books.books} alt="Avatar" className="card-image" />
           
              <p>Book Name</p>
              <button className='btn'> Add To Cart +</button>

          </div>
       
      </div>
      </>
    );
  }
  