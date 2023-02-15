import { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default useWindowSize;



// ${
//           screenWidth < 1024  && showDashboard
//             ? "w-[60%] absolute top-0 left-[0%] z-10 bg-slate-800  h-[90vh] duration-700"
//             : "w-[60%] absolute top-0 left-[-100%] z-10  bg-slate-800  h-[90vh] duration-700"
//         }
//       ${
//         screenWidth < 480 && showDashboard
//           ? "w-[90%] absolute top-0 left-[0%] z-10 bg-slate-800  h-[90vh] duration-700"
//           : "w-[90%] absolute top-0 left-[-100%] z-10 bg-slate-800  h-[90vh] duration-700"
//       }
//       ${screenWidth > 1024 && "w-[15%] bg-slate-800  h-[90vh] duration-700"}
