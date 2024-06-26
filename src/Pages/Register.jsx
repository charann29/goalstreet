import React, { useState } from "react";
import Modal from "../Components/Modal";
import { COURSES_DATA } from "../Components/utils";

const Register = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [college, saetCollege] = useState("");
  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState("");
  const [secondDomain, setSecondDomain] = useState("");
  const [passOut, setPassOut] = useState(2024);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState(
    "Some Error Occured.. Please Try Again.. Later"
  );
  const [error, setError] = useState(false);

  const onSubmitHandler = async () => {
    console.log(
      name,
      "-",
      phoneNumber,
      "-",
      college,
      "-",
      email,
      "-",
      domain,
      "-",
      secondDomain,
      "-",
      passOut
    );
    if (
      !name ||
      !phoneNumber ||
      !college ||
      !email ||
      !domain ||
      !secondDomain ||
      !passOut
    ) {
      setModalText("Please Enter all the fields Required!");
      setShowModal(true);
      setError(true);

      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      setModalText("Please Enter a valid email !");
      setShowModal(true);
      setError(true);
      return;
    }
    const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (phoneRegex.test(phoneNumber) === false) {
      setModalText("Please Enter a valid phone number !");
      setShowModal(true);
      setError(true);
      return;
    }
    if (domain === secondDomain) {
      setModalText("Please select different domains !");
      setShowModal(true);
      setError(true);
      return;
    }
    try {
      const requestBody = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        college: college,
        domain: domain,
        secondDomain: secondDomain,
        passOut: passOut,
      }; // Your request body here

      const response = await fetch(
        "https://goalstreetbackend.vercel.app/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin":
              "https://goalstreetbackend.vercel.app/",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log("response from server ", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      console.log(await responseData.message);
      if (!responseData.status) {
        setModalText(responseData.message);
        setShowModal(true);
        setError(true);
        return;
      } else {
        setModalText("Succesfull Registered!");
        setShowModal(true);
        setError(false);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPassOut("");
        setSecondDomain("");
        saetCollege("");
        setDomain("");
        return;
      }
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };

  return (
    <div className="bg-white font-outfit  ">
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          modalText={modalText}
          error={error}
        ></Modal>
      ) : null}
      <main>
        <div className="min-h-[80vh] px-0 bg-gray-100  flex justify-center sm:py-12 ">
          <div className="relative py-3 w-screen sm:w-[100%]  md:w-[600px]  lg:w-[50%] xl:w-[40%] 2xl:w-[35%]">
            <div className="relative bg-blue-500   px-4 md:px-8 py-10 bg-white mx-4 md:mx-8 md:mx-0  shadow rounded-3xl sm:p-10">
              <div className="text-base leading-6 space-y-4  text-gray-700 md:text-lg sm:leading-7">
                <div className="flex items-center space-x-5 ">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    i
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Register</h2>
                    <div className="flex gap-2 ">
                      <a
                        href="/collegeForm"
                        className="text-[14px] underline cursor-pointer text-blue-500"
                      >
                        Join as college
                      </a>
                      <p>/</p>
                      <a
                        href="/hrForm"
                        className="text-[14px] underline cursor-pointer  text-blue-500"
                      >
                        Hire From Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="name-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Full Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="name"
                    id="name"
                    placeholder="Sai Charan"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)

                    }
                    maxLength={25}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="phone-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 font-outfit astro-QYQQ6LVS"
                  >
                    Mobile
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="phoneNumber"
                    id="phone"
                    maxLength={10}
                    placeholder={9878787123}
                  
          
                    type="tel"

                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <p className="text-red-600 font-outfit astro-QYQQ6LVS" />
                </div>
                <div className="flex flex-col group font-outfit astro-QYQQ6LVS">
                  <label
                    id="email-label"
                    className="mb-2 font-outfit text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS"
                  >
                    Your college Email
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="email"
                    id="email"
                    placeholder="20311A05M7@sreenidhi.edu.in"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="text-red-600  font-outfit astro-QYQQ6LVS" />
                </div>

                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="otherCollegeName-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Your college Name
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="college"
                    id="college"
                    placeholder="NIT Trichy"
                    type="text"
                    required
                    value={college}
                    onChange={(e) => saetCollege(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS" />
                </div>

                <div className="flex flex-col group astro-QYQQ6LVS font-outfit">
                  <label
                    id="passOutYear-label"
                    className="mb-2 text-sm transition-colors group-focus-within:text-blue-700 astro-QYQQ6LVS font-outfit"
                  >
                    Passing out year
                  </label>
                  <input
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    name="passOut"
                    id="passOutYear"
                    placeholder={2024}
                    type="number"
                    required
                    value={passOut}
                    onChange={(e) => setPassOut(e.target.value)}
                  />
                  <p className="text-red-600 astro-QYQQ6LVS font-outfit" />
                </div>
                <div className="flex gap-4 ">
                  <div class="flex flex-col gap-2 group w-[50%]">
                    <label
                      class="text-sm transition-colors group-focus-within:text-blue-700"
                      for="softSkills"
                    >
                      Please Select a Domain ?
                    </label>
                    <select
                      value={domain}
                      name="domain"
                      id="softSkills"
                      onChange={(e) => {
                        setDomain(e.target.value);
                      }}
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      {" "}
                      <option>select an option</option>
                      {COURSES_DATA.map((d) => (
                        <option className="text-black" value={d.courseName}>
                          {d.courseName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="flex flex-col gap-2 group w-[50%]">
                    <label
                      class="text-sm transition-colors group-focus-within:text-blue-700"
                      for="softSkills"
                    >
                       Select a 2nd Domain ?
                    </label>
                    <select
                      value={secondDomain}
                      onChange={(e) => {
                        setSecondDomain(e.target.value);
                      }}
                      name="secondDomain"
                      id="language"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    >
                      <option>select an option</option>
                      {COURSES_DATA.map((d) => (
                        <option className="text-black" value={d.courseName}>
                          {d.courseName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={onSubmitHandler}
                  className="block cursor-pointer mx-auto text-white btn font-outfit w-[100%]  p-3 px-6 rounded-md bg-[#252362]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
