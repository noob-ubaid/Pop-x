import React, { useContext } from "react";
import InputField from "../shared/InputField";
import { AuthContext } from "../contexts/AuthCOntext";
import { useNavigate } from "react-router";

const SignUp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const phone = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const company = form.company.value;
    const agency = form.agency.value;

    createUser(email, password)
      .then((result) => {
        const userData = result.user;
        updateUser({ displayName: userName })
          .then(() => {
            setUser({ ...userData, displayName: userName });
            navigate("/myProfile");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    console.log({ userName, phone, email, password, company, agency });
  };
  return (
      <form
        onSubmit={handleSignUp}
        className="h-full flex flex-col justify-between p-5"
      >
        <div>
          <h4 className="text-[#1D2226] text-[28px] font-bold">
            Create your <br /> PopX account
          </h4>
          <div className="flex flex-col gap-3 mt-4">
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
          </div>
        </div>
        <button className="bg-[#6C25FF] cursor-pointer text-white text-center w-full mb-3 py-2 rounded font-medium">
          Create Account
        </button>
      </form>
  );
};

export default SignUp;
