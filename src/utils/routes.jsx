import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { loader as VideosLoader } from "../pages/BoshSahifa";
import { loader as VideoLoader } from "../components/BoshSahifaComponents/VideoDetail";
import { loader as YangilikLoader } from "../components/YangiliklarComponents/Yangilik";
import { loader as OquvRejaVideoLoader } from "../components/OquvRejaComponents/OquvRejaVideo";
import { loader as CoursesLoader } from "../pages/Courses";
// const First = lazy(() => import("./pages/First"))

import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import BoshSahifa from "../pages/BoshSahifa";
// const Yangiliklar = lazy(() => import("../pages/Yangiliklar"));
import Yangiliklar from "../pages/Yangiliklar";
import FoydaliKontent from "../pages/FoydaliKontent";
import OquvReja from "../components/OquvRejaComponents/OquvReja";
import Boglanish from "../pages/Boglanish";
import SavolJavoblar from "../pages/SavolJavoblar";
import Yangilik from "../components/YangiliklarComponents/Yangilik";
import NewsLayout from "../layout/NewsLayout";
import VideoDetail from "../components/BoshSahifaComponents/VideoDetail";
import Protected from "../components/Protected";
import VideoLayout from "../layout/VideoLayout";
import OquvRejaLayout from "../layout/OquvRejaLayout";
import OquvRejaVideo from "../components/OquvRejaComponents/OquvRejaVideo";
import OquvRejaVideoLayout from "../layout/OquvRejaVideoLayout";
import Courses from "../pages/Courses";
import Lessons from "../components/OquvRejaComponents/Lessons";
import Authenticated from "../components/Authenticated";

// const tokens = JSON.parse(localStorage.getItem("tokens"));
// const arr = tokens.refresh.split(".");
// const refreshExpiry = new Date(JSON.parse(atob(arr[1])).exp * 1000);
// // console.log("refresh", refreshExpiry);
// const current = new Date()



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route element={<Protected />}>
        <Route path="/" element={<VideoLayout />} errorElement={<ErrorPage />}>
          <Route
            index
            element={
              // <Protected>
              <BoshSahifa />
              // </Protected>
            }
            loader={VideosLoader}
          />
          <Route path=":id" element={<VideoDetail />} loader={VideoLoader} />
        </Route>
        <Route
          path="yangiliklar"
          element={<NewsLayout />}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={
              // <Protected>
              <Yangiliklar />
              // </Protected>
            }
          />
          <Route
            path=":id"
            element={
              // <Protected>
              <Yangilik />
              // </Protected>
            }
            loader={YangilikLoader}
          />
        </Route>
        <Route
          path="foydalikontent"
          element={
            // <Protected>
            <FoydaliKontent />
            // </Protected>
          }
        />
        <Route
          path="oquvreja"
          element={<OquvRejaLayout />}
          errorElement={<ErrorPage />}
        >
          <Route
            index
            element={
              // <Protected>
              <Courses />
              // </Protected>
            }
            loader={CoursesLoader}
            // errorElement={<ErrorBoundary />}
          />
          <Route path=":id" element={<OquvRejaVideoLayout />}>
            <Route index element={<OquvReja />} />
            <Route path=":id" element={<OquvRejaVideoLayout />}>
              <Route index element={<Lessons />} />
              <Route
                path=":id"
                element={<OquvRejaVideo />}
                loader={OquvRejaVideoLoader}
              />
            </Route>
          </Route>
        </Route>
        <Route
          path="boglanish"
          element={
            // <Protected>
            <Boglanish />
            // </Protected>
          }
        />
        <Route
          path="savoljavoblar"
          element={
            // <Protected>
            <SavolJavoblar />
            // </Protected>
          }
        />
        <Route path="*" element={<p className="w-full">Nothing found</p>} />
      </Route>
      <Route
        path="login"
        element={
          <Authenticated>
            <Login />
          </Authenticated>
        }
      />
    </Route>
  )
);
