import { AiFillEdit } from "react-icons/ai";
import img from '../../../assets/avatar.jpg'


const Photo = ({name , setEdit}) => {

  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
      <img
        src={img}
        alt=""
        className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center ">
        <p>{name}</p>
        <div className="flex justify-center gap-2 ">
          <AiFillEdit className="cursor-pointer" onClick={()=>setEdit(true)}/>
          <span  className="cursor-pointer" >Edit</span>
        </div>
      </div>
    </div>
  );
};

export default Photo;
