import React, { createContext, useState } from "react";

export const adddata = createContext("");
export const updatedata = createContext("");
export const deletedata = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");
  const [edata, setEdata] = useState("");
  const [ddata, setDdata] = useState("");

  return (
    <adddata.Provider value={{ udata, setUdata }}>
      <updatedata.Provider value={{ edata, setEdata }}>
        <deletedata.Provider value={{ ddata, setDdata }}>
          {children}
        </deletedata.Provider>
      </updatedata.Provider>
    </adddata.Provider>
  );
};

export default ContextProvider;
