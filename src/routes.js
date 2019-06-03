import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NoticeFormPage from "./components/noticeFormPage";

export default (routes = [
  {
    path: "/",
    main: () => <NoticeFormPage />
  },
  //   {
  //     path: "/dashboard",
  //     sidebar: () => <div> bubblegum! </div>,
  //     main: () => <DashboardPage/>
  //   },
  {
    path: "/Lost-and-Found",
    // sidebar: () => <div> shoelaces! </div>,
    main: () => <LostFoundPage />
  }
]);
