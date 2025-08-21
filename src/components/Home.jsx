import { use } from "react";
import Button from "../shared/Button";
import { AuthContext } from "../contexts/AuthCOntext";
import Loader from "../shared/Loader";

const Home = () => {
    const {user,loading} = use(AuthContext)
    if(loading) return <Loader/>
  return (
    <div className="flex h-full justify-end flex-col p-5">
      <h4 className="text-[#1D2226] text-[28px] font-bold">Welcome to PopX</h4>
      <p className="text-[#1D2226] opacity-60 mt-3 mb-6 text-lg">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      {user && <p>{user.displayName}</p>}
      <div className="mb-8 flex flex-col">
        <Button
          text="Create Account"
          bgColor="bg-[#6C25FF]"
          textColor="text-white"
          link="register"
        />
        <Button
          text="Already Registered? Login"
          bgColor="bg-[#6C25FF4B]"
          textColor="text-black"
          link="login"
        />
      </div>
    </div>
  );
};

export default Home;
