import React from "react";
import InputField from "../shared/InputField";

const SignUp = () => {
  return (
    <div>
      <h4 className="text-[#1D2226] text-[28px] font-bold">
        Create your <br /> PopX account
      </h4>
      <form className="flex flex-col gap-3 mt-4">
        <InputField
          text={"Full Name"}
          placeholder={"Enter your full name"}
          type={"text"}
          required={"required"}
          name={"name"}
        ></InputField>
        <InputField
          text={"Phone number"}
          placeholder={"Enter your phone number"}
          type={"tel"}
          required={"required"}
          name={"number"}
        ></InputField>
        <InputField
          text={"Email address"}
          placeholder={"Enter your email address"}
          type={"email"}
          required={"required"}
          name={"email"}
        ></InputField>
        <InputField
          text={"Password"}
          placeholder={"Enter your password"}
          type={"password"}
          required={"required"}
          name={"password"}
        ></InputField>
        <InputField
          text={"Company name"}
          placeholder={"Enter your company name"}
          type={"text"}
          name={"company"}
        ></InputField>
        <h3 className="text-[16px]">
          Are You an Agency? <span className="text-red-500">*</span>
        </h3>
        <div className="space-x-6 flex items-center">
          <div className="space-x-3 flex items-center">
            <input
              className="w-[22px] h-[22px] accent-[#642AF5]"
              type="radio"
              id="yes"
              name="agency"
              value="yes"
              required={"required"}
            />
            <label htmlFor="yes">Yes</label>
          </div>

          <div className="space-x-3 flex items-center">
            <input
              className="w-[22px] h-[22px] accent-[#642AF5]"
              type="radio"
              id="no"
              name="agency"
              value="no"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
