import React, { useState,useReducer } from "react";
import einkommenGehalt from "../jsonCards/einnahmenUndAusgaben/einkommenGehalt.json";
export const Context = React.createContext();
//TODO: umbennenen!
const ContextProvider = (props) => {
  const [einkommenGehaltContext, setEinkommenGehaltContext] =
    useState(einkommenGehalt);
  const [jsonValues, setJsonValues] = useState({
    summeBruttobezuegeEinnahmenValue:0
  });
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
const [mobileClassname, setMobileClassname] =useState("")
  const [versicherungsnehmerValue, setVersicherungsnehmerValue] = useState({
    index: 0,
    tarifTypeId: "none",
  });
  const [anzahlVp, setAnzahlVp] =useState(1)
const [vertragId, setVertragId] =useState("")
const [einkommenGehaltBezuege, setEinkommenGehaltBezuege] =useState({
hinzufuegen:false,
pressedValue:""
})
  return (
    <Context.Provider
      value={{
        forceUpdate,
        einkommenGehaltContext,
        setEinkommenGehaltContext,
        jsonValues,
        setJsonValues,
        versicherungsnehmerValue, setVersicherungsnehmerValue,
        anzahlVp, setAnzahlVp,
        einkommenGehaltBezuege, setEinkommenGehaltBezuege,
        mobileClassname, setMobileClassname,
        vertragId, setVertragId
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
