import {useState} from 'react'
import people from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {

  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];


  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };


  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };



  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  
 
 
  return (
    <section className='w-full bg-cover bg-center flex justify-center items-center rounded-2xl mt-3 relative bg-black-800 bg-opacity-100 my-20 py-10 shadow-md'>
         <div className="flex flex-col justify-center items-center py-6 px-4 w-100">
          <h4 className='mb-2 font-bold text-4xl'>Client Reviews</h4>
          <div className='u'></div>
          <p className='m-auto mt-4 max-w-lg  text-center info-text text-2xl pb-6 px-4 text-black j'>{text} </p>
            <span className='mb-2'>{name}</span>
            <div className='button-container'>
        <button className='prev-btn cursor-pointer text-black px-4' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn text-black px-4' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
        </div>
    </section>
  )
}

export default Reviews