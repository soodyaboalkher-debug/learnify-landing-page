
import { useState } from "react";
import { IoArrowUndo } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const CourseCard = ({cours}) => {

  const [isFlipped, setIsFlipped] = useState(false);



  return ( 
    //continer relative
    <div
    className="
    w-full h-96 relative
    "
    >
       

       {/*Enner*/}
        <div
        className={`w-full h-full hover:scale-105 shadow-xl
        [transform-style:preserve-3d] transition duration-300
        ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
        > 

          {/* FRONT */}
          <div className="absolute bg-صاهفث rounded-2xl
           p-1 w-full h-full [backface-visibility:hidden]"
          >
            <img
             src={cours.image} alt="photo the cours" 
             className="w-full h-40 bg-slate-200 rounded-b-lg"/>


           <h2 className="text-xl font-bold h-14">
             Title: {cours.title}
           </h2>

           <div>
                <p className="mt-3 text-gray-500">
                 techer : {cours.instructor}
                </p>
                <p>students: {cours.students}</p>
                <div className="flex justify-between">
                  <p className="flex items-center">{cours.rating}<FaStar/></p>
                  <span>price: ${cours.price}</span>
                </div>
           </div>

           <div className="flex justify-between items-center">

            
                    
            <button className="mt-4 py-2 px-4 bg-gray-900
             rounded-full font-bold text-white transition hover:bg-gray-700"
                onClick={()=>setIsFlipped(true)}>
                Preview
            </button>

            
           </div>




          </div>


          {/* BACK */}
          <div className="
          absolute bg-slate-900 text-white
           p-6 w-full h-full [backface-visibility:hidden]
          [transform:rotateY(180deg)]"
          >

          <div className="flex flex-col">
            <h2 className="text-md font-bold h-30">
              Description: {cours.description}
            </h2>

            <p className="mt-2 text-sm ">
             Level: {cours.level}
            </p>

            <p className="mt-2 text-sm">
             Duration: {cours.duration}
      
            </p>
            <p className="text-sm" >Category: {cours.category}</p>

            <a href="#courses" 
            className="flex items-center gap-3 justify-center 
            mt-4 p-2 bg-slate-200 rounded-full text-black font-bold
            hover:bg-slate-100 transition"
            >

            Start Course
            <FaArrowRight/>
            </a>
          </div>



          <button
          onClick={()=>setIsFlipped(false)}

          className="p-2 mt-4 rounded-full transition hover:bg-gray-800"
        
          >
            Back<IoArrowUndo/>
          </button>
          </div>



        </div>



    </div>
  );
};

export default CourseCard;