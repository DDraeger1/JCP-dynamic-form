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
  const [arbeitgeberData, setArbeitgeberData] =useState([])
  const [anzahlVp, setAnzahlVp] =useState(1)
const [vertragId, setVertragId] =useState("")
const [isRequiredFilled, setRequiredFilled] =useState({disabled:false, labelsToBeFilled:[]})
const [einkommenGehaltBezuege, setEinkommenGehaltBezuege] =useState({
hinzufuegen:false,
pressedValue:""
})
const [bruttoSum , setBruttoSum] = useState({scrollY:0})
const [gehaltInit, setGehaltInit] = useState(false);
const [bankverbindungen, setBankverbindungen] = useState([])
const [mandantGroup, setMandantGroup] = useState([]) 
const [forceUseEffect, setForceUseEffect] = useState(0)
const [cardClassName, setCardClassName] =useState("card")
const [mandantTabIndex, setMandantTabIndex] = useState(0)
const [productGesellschaftIdLoaded, toggleProductGesellschaftIdLoaded] = useState(false)
const [login, setLogin] = useState("");
const [openDialog, toggleOpenDialog] =useState(true)
const [fullscreenDialog, toggleFullscreenDialog] = useState(false)

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
        vertragId, setVertragId,
        bruttoSum , setBruttoSum,
        gehaltInit, setGehaltInit,
        mandantGroup, setMandantGroup,
        bankverbindungen, setBankverbindungen,
        isRequiredFilled, setRequiredFilled,
        forceUseEffect, setForceUseEffect,
        cardClassName, setCardClassName,
        mandantTabIndex, setMandantTabIndex,
        arbeitgeberData, setArbeitgeberData,
        productGesellschaftIdLoaded, toggleProductGesellschaftIdLoaded,
        login, setLogin,
        openDialog, toggleOpenDialog,
        fullscreenDialog, toggleFullscreenDialog
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
