import { NavLink } from 'react-router-dom';

const SideMenu = ({ showDashboard, screenWidth }) => {

  const routes = [
    { to: "/", text: "Bosh Sahifa" },
    { to: "/yangiliklar", text: "Yangiliklar" },
    { to: "/foydalikontent", text: "Foydali kontent" },
    { to: "/oquvreja", text: "O'quv reja" },
    { to: "/boglanish", text: "Bog'lanish" },
    { to: "/savoljavoblar", text:"Savol javoblar" },
  ];

  return (
    <>
      <div
        className={`${
          screenWidth <= 480 &&
          `${
            showDashboard
              ? "w-[80%] absolute top-[10vh] left-[0%] z-10 bg-slate-800 h-[90vh]  duration-700"
              : "w-[80%] absolute top-[10vh] left-[-100%] z-10 bg-slate-800 h-[90vh] duration-700"
          }`
        } ${
          screenWidth > 480 &&
          screenWidth < 1024 &&
          `${
            showDashboard
              ? "w-[60%] absolute top-[10vh] left-[0%] z-10 bg-slate-800 h-[90vh]  duration-700"
              : "w-[60%] absolute top-[10vh] left-[-100%] z-10  bg-slate-800 h-[90vh]  duration-700"
          }`
        } ${
          screenWidth > 1024 &&
          `${"w-[15%] bg-slate-800  h-[90vh] duration-700"}`
        }`}
      >
        <div className="text-white text-xl flex flex-col">
          { routes.map(route=>{
            return (
              <NavLink
                key={route.to}
                to={route.to}
                className={(navData) =>
                  navData.isActive
                    ? "text-blue-500 underline relative border-2 border-white p-1 rounded-md m-2 text-center group overflow-hidden"
                    : "relative border-2 border-white p-1 rounded-md m-2 text-center group overflow-hidden"
                }
                
              >
                <span className="absolute w-0 h-full top-0 left-0 bg-blue-500 group-hover:w-full duration-500"></span>
                <span className="absolute w-0 h-full top-0 left-0 bg-black group-hover:w-full duration-1000"></span>
                <span className="relative">{route.text}</span>
              </NavLink>
            );
          })
            }
        </div>
      </div>
    </>
  );
};

export default SideMenu