import './card.css'
import Image from 'next/image';
interface BooksProps {
  books: string;
}

export default function Home({ books }: BooksProps) {
    return (
      <>
        <div className="card">
          <div className="card-container">
            <Image src={books} alt="Avatar" className="card-image" />
           
              <p>Book Name</p>
              <button className='btn'> Add To Cart +</button>

          </div>
       
      </div>
      </>
    );
  }
  