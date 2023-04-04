import { useEffect } from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";


export default function Signin() {
   const { isSignin } = useSelector((state) => state.app);
   const router = useRouter();
 
   useEffect(() => {
     if(router.isReady) {
       if (isSignin) {
         router.replace(`/`);
       }
     }
   }, [router]);


   return (
     <div> 
        <h1> Loading... </h1>
     </div>
   )
}