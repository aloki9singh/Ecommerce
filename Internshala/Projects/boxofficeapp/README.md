import ClassDropdown, {
  optionSelected,
} from "../components/Upload/ClassDropdown";
import IDdraganddrop, { fileURL } from "../components/Student/IDdraganddrop";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/config/firebaseConfig";

export default function profileDetails() {
  const [id, setID] = useState("");
  const router = useRouter();
  const [input, setInput] = useState({
    schoolName: "",
    uniqueId: "",
    rollNo: null,
    selectedDate: null,
    studentName: { firstName: "", middleName: "", lastName: "" },
    stuPhoneNo: "",
    stuAltPhoneNo: "",
    FatherName: { firstName: "", middleName: "", lastName: "" },
    MotherName: { firstName: "", middleName: "", lastName: "" },
    pPhoneNo: "",
    pAltPhoneNo: "",
    fileURL: "",
  });
  // Setting Data in  respective state

  const setData = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      studentName: {
        ...prev.studentName,
        [name]: value,
      },
      FatherName: {
        ...prev.FatherName,
        [name]: value,
      },
      MotherName: {
        ...prev.MotherName,
        [name]: value,
      },
    }));
  };
  


  // const [selectedDate, handleDateChange] = useState(null);

  // const pushdata = async () => {
  //   await fetch(`/api/profileDetails/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       details: input,
  //       displayName: `${input.studentName.firstName} ${input.studentName.middleName} ${input.studentName.lastName}`,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // pushdata();
    setInput({
      schoolName: "",
      uniqueId: "",
      rollNo: null,
      selectedDate: null,
      studentName: { firstName: "", middleName: "", lastName: "" },
      stuPhoneNo: "",
      stuAltPhoneNo: "",
      FatherName: { firstName: "", middleName: "", lastName: "" },
      MotherName: { firstName: "", middleName: "", lastName: "" },
      pPhoneNo: "",
      pAltPhoneNo: "",
      fileURL: "",
    });

    router.push("/profileCongratulation");
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated
        setID(user.uid);
      } else {
        // User is not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full text-white flex flex-col space-y-8 overflow-x-hidden">
      {/* text */}
      <div className="w-full px-16 pt-16">
        <h1 className="w-full font-semibold text-4xl text-[#A145CD] ">
          Profile Details
        </h1>
      </div>

      <div className="w-[92%] h-max mx-auto px-4 py-8 bg-[#222222] rounded-3xl">
        {/* form */}
        <form method="post" action="#" onSubmit={onSubmitHandler}>
          {/* student name */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">Student Name</label>
            <input
              type="text"
              placeholder="First"
              className="w-full md:w-52 h-10 rounded-lg px-2 placeholder:pl-2 focus:outline-none "
              style={{ background: "#333333" }}
              name="studentName.firstName"
              value={input.studentName.firstName}
              onChange={setData}
              required
            />
            <input
              type="text"
              placeholder="Middle"
              className="w-full md:w-52 h-10 rounded-lg px-2 placeholder:pl-2 focus:outline-none"
              style={{ background: "#333333" }}
              name="studentName.middleName"
              value={input.studentName.middleName}
              onChange={setData}
            />
            <input
              type="text"
              placeholder="Last"
              className="w-full md:w-52 h-10 rounded-lg px-2 placeholder:pl-2 focus:outline-none"
              style={{ background: "#333333" }}
              value={input.studentName.lastName}
              name="studentName.lastName"
              onChange={setData}
            />
          </div>

          {/* unique id */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">Unique id</label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 placeholder:pl-2 focus:outline-none"
              style={{ background: "#333333" }}
              name="uniqueId"
              value={input.uniqueId}
              onChange={setData}
              required
            />
          </div>

          {/* school Name */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">School Name</label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 placeholder:pl-2 focus:outline-none"
              style={{ background: "#333333" }}
              name="schoolName"
              value={input.schoolName}
              onChange={setData}
              required
            />
          </div>

          {/* class */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">Class</label>
            <ClassDropdown title="Select Class" />
          </div>

          {/* roll no */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">Roll no</label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-full md:w-36 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="rollNo"
              value={input.rollNo}
              onChange={setData}
              required
            />
          </div>

          {/* dob */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">DOB</label>
            <input
              type='date'
              id="dob"
              placeholderText="DD/MM/YYYY"
              className="w-full md:w-40 h-10 rounded-lg px-2 bg-[#333333] focus:outline-none placeholder:pl-2"
             
              name="selectedDate"
              value={input.selectedDate}
              onChange={setData}
              required
            />
          </div>

          {/* contact number */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">Student mobile number</label>
            <input
              type="tel"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 my-2 focus:outline-none md:mt-2 placeholder:pl-2"
              style={{ background: "#333333" }}
              name="stuPhoneNo"
              value={input.stuPhoneNo}
              onChange={setData}
              required
            />
            <label className="block text-sm font-medium text-white">
              Alternate Phone Number:
            </label>
            <input
              type="tel"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="stuAltPhoneNo"
              value={input.stuAltPhoneNo}
              onChange={setData}
            />
          </div>

          {/* father's details */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">{`Father's`} Name</label>
            <input
              type="text"
              placeholder="First"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="FatherName.firstName"
              value={input.FatherName.firstName}
              onChange={setData}
              required
            />
            <input
              type="text"
              placeholder="Middle"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="FatherName.middleName"
              value={input.FatherName.middleName}
              onChange={setData}
            />
            <input
              type="text"
              placeholder="Last"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="FatherName.lastName"
              value={input.FatherName.lastName}
              onChange={setData}
            />
          </div>

          {/* mother's details */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">{`Mother's`} Name</label>
            <input
              type="text"
              placeholder="First"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="MotherName.firstName"
              value={input.MotherName.firstName}
              onChange={setData}
              required
            />
            <input
              type="text"
              placeholder="Middle"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="MotherName.middleName"
              value={input.MotherName.middleName}
              onChange={setData}
            />
            <input
              type="text"
              placeholder="Last"
              className="w-full md:w-52 h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="MotherName.lastName"
              value={input.MotherName.lastName}
              onChange={setData}
            />
          </div>

          {/* parent's contact number */}
          <div className="w-full md:w-screen flex flex-col md:flex-row justify-start items-start md:items-center gap-y-2 md:gap-x-6 px-4 mb-8">
            <label htmlFor="">{`Parent's`} mobile number</label>
            <input
              type="tel"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 my-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="pPhoneNo"
              value={input.pPhoneNo}
              onChange={setData}
              required
            />
            <label className="block  text-white">Alternate Phone Number:</label>
            <input
              type="text"
              placeholder="Type Here"
              className="w-full md:w-[319px] h-10 rounded-lg px-2 focus:outline-none placeholder:pl-2"
              style={{ background: "#333333" }}
              name="pAltPhoneNo"
              value={input.pAltPhoneNo}
              onChange={setData}
            />
          </div>

          {/* photo and identity proof */}
          <div className="w-full flex flex-col justify-center items-center gap-y-2  px-4 mb-8">
            <label htmlFor="" className="self-start">
              Profile Photo
            </label>
            <IDdraganddrop />
            <label htmlFor="" className="self-start my-2">
              Adhaar Card
            </label>
            <IDdraganddrop />
          </div>

          {/* submit button */}
          <div className="flex justify-center md:justify-end ">
            <button
              type="submit"
              className="text-white  bg-[#AA2769] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-[80px] md:w-[100px]  px-2 py-2 text-center  hover:bg-[#93225a] my-8"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




api profilw details


import { profileDetailscollection } from "../../../components/config/firebaseConfig";
import {
  addDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

async function handler(req, res) {
  const { method } = req;
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  try {
    switch (method) {
      case "GET":
        const querySnapshot = await getDocs(profileDetailscollection);
        const profileDetails = querySnapshot.docs.map((doc) => ({
           id: doc.id,
          ...doc.data(),
        }));
        return res.status(200).json({ success: true, profileDetails });

      case "POST":
        const data = req.body;
        const uid = data.uid; // this is added for user reference if user exists
        const userRef = doc(profileDetailscollection, uid); // searching if user exists or not
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          await updateDoc(userRef, data); // exist condition update the doc
        } else {
          // taking same user reference trying to add user
          await setDoc(userRef, {
            ...data,
            verified: false,
            roles: ["user"],
            details: "",
            createdAt: serverTimestamp(),
          });
        }
        return res
          .status(200)
          .json({ success: true, profileDetails: { ...data, id: docRef.id } });

      default:
        res.status(405).json({ success: false, msg: `${method} not allowed` });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
}

export default handler;



//uid file


import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { profileDetailscollection } from '../../../components/config/firebaseConfig';

export default async function handler(req, res) {
    const { uid } = req.query;

    try {
        switch (req.method) {
            case 'PATCH':
                const data = req.body;
                const userRef = doc(profileDetailscollection, uid);
                await updateDoc(userRef, data);
                return res.status(200).json({ success: true, msg: 'Updated' });

            case 'GET':
                const docRef = doc(profileDetailscollection, uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    return res.status(200).json({ success: true, user: { ...docSnap.data() } });
                } else {
                    // doc.data() will be undefined in this case
                    return res.status(200).json({ success: false, msg: 'Data not found' });
                }

            case 'DELETE':
                await deleteDoc(doc(profileDetailscollection, uid));

                return res.status(200).json({ success: true, msg: 'Deleted' });

            default:
                return res.status(401).json({ success: false, msg: 'Method not allowed' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'Internal Server Error' });
    }
}


user lib>api



export const callUserPostApi = async (data) => {
  const response = await fetch("/api/profileDetails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  // if (!response.ok) {
  //   throw new Error("Failed to Add");
  // }

  return response.json();
};

export const callUserGetApi = async (id) => {
  const response = await fetch(`/api/profileDetails/${id}`);

  // if (!response.ok) {
  //   throw new Error("Failed to Add");
  // }

  return response.json();
};
