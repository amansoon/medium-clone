import css from "../styles/layout.module.css";

import { useSelector } from "react-redux";

import Header from "../components/common/header/Header";
import Bottombar from "../components/common/bottombar/Bottombar";
import Leftbar from "../components/common/leftbar/Leftbar";

import SigninDialog from "../components/dialogs/signin/Dialog";
import FollowersDialog from "../components/dialogs/followers/Dialog";
import FollowingDialog from "../components/dialogs/following/Dialog";

const Layout = ({ children }) => {
  const {
    isSignin,
    isDialog,
    isSigninDialog,
    isFollowingDialog,
    isFollowersDialog,
  } = useSelector((state) => state.app);

  console.log(isSigninDialog);

  return (
    <div className={`${css.container} ${isDialog ? css.dialog : ""}`}>
      <div className={css.layout}>
        {/* ======= dialogs ======== */}

        {isSigninDialog ? <SigninDialog /> : ""}
        {isFollowersDialog ? <FollowersDialog /> : ""}
        {isFollowingDialog ? <FollowingDialog /> : ""}

        {/* ========== Common Components ========== */}

        <Header />
        <Bottombar />
        <Leftbar />

        {/* Based upon pages */}

        {children}
      </div>
    </div>
  );
};

export default Layout;
