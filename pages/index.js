import Home from "../components/Home";
import MyHome from "../components/MyHome";

import { useSelector } from "react-redux";


export default function HomePage() {
  const {isSignin} = useSelector((state) => state.app) ;

  if(isSignin) {
    return <MyHome />
  }
  else {
    return <Home />
  }

}
