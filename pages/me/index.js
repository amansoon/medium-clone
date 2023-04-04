import { useEffect } from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Me() {
  const { isSignin } = useSelector((state) => state.app);
  const { username } = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if(router.isReady) {
      if (isSignin) {
        router.replace(`/${username}`);
      }
      else {
        router.replace(`/signin`)
      }
    }
  }, [router]);

  return (
    <div>
      <h1> Me - Index </h1>
    </div>
  )

}
