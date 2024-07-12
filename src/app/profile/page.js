"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
// import { registerNewUser } from "@/services/register";
import { registrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Profile() {
  const { pageLevelLoader, setPageLevelLoader , isAuthUser, user, setUser } = useContext(GlobalContext);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("user")));

  const router = useRouter()

  console.log(formData);
  // console.log(`user: ${user.email}`)

  function isFormValid() {
    return formData &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
      ? true
      : false;
  }

  console.log(isFormValid());

  async function handleUpdateOnSubmit() {
    setPageLevelLoader(true);
    // const data = await registerNewUser(formData);
    // const data = await updateUser(formData);
    setUser({ ...user, name: formData.name, email: formData.email, password: formData.password || user.password });

    if (user) {
      console.log(`user: ${user}`)
      toast.success("Profile updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsUpdated(true);
      setPageLevelLoader(false);
      setFormData(user)
      localStorage.setItem("user", JSON.stringify(formData));
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData(initialFormData);
    }

    console.log(`user-again: ${user}`)
  }

  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                Update your Profile
              </p>
              
              <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                {registrationFormControls.map((controlItem) =>
                  controlItem.componentType === "input" ? (
                    <InputComponent
                      type={controlItem.type}
                      placeholder={controlItem.placeholder}
                      label={controlItem.label}
                      onChange={(event) => {
                        setFormData({
                          ...formData,
                          [controlItem.id]: event.target.value,
                        });
                      }}
                      value={formData[controlItem.id]}
                    />
                  ) : controlItem.componentType === "select" ? (
                    <SelectComponent
                      options={controlItem.options}
                      label={controlItem.label}
                      onChange={(event) => {
                        setFormData({
                          ...formData,
                          [controlItem.id]: event.target.value,
                        });
                      }}
                      value={formData[controlItem.id]}
                    />
                  ) : null
                )}
                <button
                  className=" disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                  "
                  onClick={handleUpdateOnSubmit}
                >
                  {pageLevelLoader ? (
                    <ComponentLevelLoader
                      text={"Registering"}
                      color={"#ffffff"}
                      loading={pageLevelLoader}
                    />
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
