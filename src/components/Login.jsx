import React from "react";
import InputField from "../shared/InputField";

const Login = () => {
  return (
    <div>
      <h4 className="text-[#1D2226] text-[28px] font-bold">
        Signin to your <br /> PopX account
      </h4>
      <p className="text-[#1D2226] opacity-60 mt-3 mb-6 text-lg">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <div className="flex flex-col gap-2.5">
        <InputField
          name={`email`}
          text={"Email Address"}
          type={`email`}
          required={"required"}
          placeholder={`Enter your email address`}
        />
        <InputField
          name={`password`}
          text={"Passowrd"}
          type={`password`}
          required={"required"}
          placeholder={`Enter password`}
        />
      </div>
    </div>
  );
};

export default Login;
