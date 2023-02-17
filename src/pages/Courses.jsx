import { pageTransition } from "../animations/animations";
import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import {
  useNavigate,
  useLoaderData,
  defer,
  Await,
  useAsyncError,
  redirect
} from "react-router-dom";
import OquvRejaImg from "../components/OquvRejaComponents/OquvRejaImg";
import { getCourse } from "../API_requests/api";
import {useLogOut} from '../hooks/useLogOut'

const ErrorBoundary = () =>{
  const error = useAsyncError()
  // const navigate = useNavigate()
  const {logout} = useLogOut()
  if(error?.response?.status === 401){
    // navigate('/login')
    // return redirect('/login')
    logout()
    console.log(error);
  }
  console.log('errorBoundary:',error?.response?.status)
  return <p>error:{error?.response?.statusText},{error?.response?.data?.detail}</p>
}


const Courses = () => {
  const imgs = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7Iok8CAxZh9-wecRQHchSaET_GtoHCSl1A&usqp=CAU",
      name: "Front-end",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0nHGIHXO6dUYKKmyzd9vBUlBcoFlfUDp7Q&usqp=CAU",
      name: "Backend",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0tMFtdIyXSos2PKQ5YnZwt1QKSuIuhQfNRw&usqp=CAU",
      name: "Android",
    },
  ];
  const courses = useLoaderData()
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full overflow-y-scroll h-[90vh] relative bg-black/30 backdrop-blur-md text-white p-10"
      id="main-page"
    >
      <h1 className="text-3xl text-center font-bold my-10">Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* {imgs.map((img, index) => (
          <OquvRejaImg
            key={index}
            src={img.src}
            index={index}
            title={img.name}
          />
        ))} */}
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={courses.Course}
            errorElement={<ErrorBoundary/>}
          >
            {(Course) => {
              console.log('course',Course.data)
              return Course?.data.map((course, index) => (
                <OquvRejaImg
                  key={course.id}
                  src={course}
                  id={course.id}
                  title={course.name}
                />
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </motion.div>
  );
};

export default Courses;

export const loader = ({ params }) => {
  const coursePromise = getCourse();
  console.log('coursePromise:',coursePromise.data)
  return defer({ Course: coursePromise });
};