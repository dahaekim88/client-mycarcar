import "./Main.css";

import React from "react";

import Home from "./Home/Home";
import LoginForm from "./Login/LoginForm";
import EditForm from "./EditAccount/EditForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import RegisterTerms from "./RegisterTerms/RegisterTerms";
import Rental from "./Rental/Rental";
import SuperAdmin from "./SuperAdmin/SuperAdmin";
import { NotFound } from "./NotFound/NotFound";
import { EstimateForm } from "./EstimateForm/EstimateForm";
import { EstimateList } from "./EstimateList/EstimateList";
import { IHandlePage } from "../../App";

interface IMainProps {
  handlePage: IHandlePage;
}

const Main = (props: IMainProps) => {
  const pathname = location.pathname;
  const handlePage = props.handlePage;

  switch (pathname) {
    case "/":
      return <Home />;
    case "/login":
      return <LoginForm handlePage={handlePage} />;
    case "/terms":
      return <RegisterTerms handlePage={handlePage} />;
    case "/register":
      return <RegisterForm handlePage={handlePage} />;
    case "/edit_account":
      return <EditForm handlePage={handlePage} />;
    case "/rental":
      return <Rental />;
    case "/admin/user_information_management":
      return <SuperAdmin handlePage={handlePage} />;
    case "/estimate_list":
      return <EstimateList handlePage={handlePage} />;
    case "/estimate_form":
      return <EstimateForm />;
    default:
      return <NotFound />;
  }
};

export default Main;
