import React, { useContext } from "react";
import InputField from "../shared/InputField";
import { AuthContext } from "../contexts/AuthCOntext";
import { useNavigate } from "react-router";

const Login = () => {
     const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        navigate("/myProfile");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4 className="text-[#1D2226] text-[28px] font-bold">
        Signin to your <br /> PopX account
      </h4>
      <p className="text-[#1D2226] opacity-60 mt-3 mb-6 text-lg">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <InputField
          name={`email`}
          text={"Email Address"}
          type={`email`}
          required={"required"}
          placeholder={`Enter your email address`}
        />
        <InputField
          name={`password`}
          text={"Password"}
          type={`password`}
          required={"required"}
          placeholder={`Enter password`}
        />
        <button className="bg-[#CBCBCB] cursor-pointer text-white text-center w-full mb-3 py-2 rounded font-medium">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
