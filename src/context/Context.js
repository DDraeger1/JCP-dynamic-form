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
const [bruttoSum , setBruttoSum] = useState(
  {
    negativeBrutto:0,
    bruttoBezug:{
    grundgehalt:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    },
    variablerBezug:{
      betrag:0,
     ST:"",
   SV:"",
     GB:"",
    },
    fahrtkosten:{
      betrag:0,
    ST:"",
     SV:"",
     GB:""
    },
    feiertagszuschlag:{
      betrag:0,
    ST:"",
     SV:"",
     GB:""
    },
    nachtzuschlag:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    },
    dienstwagen:{
      betrag:0,
    ST:"",
    SV:"",
    GB:""
    },
    kitaGebuehren:{
      betrag:0,
   ST:"",
    SV:"",
    GB:""
    }
    ,
    jobRad:{
      betrag:0,
      ST:"",
      SV:"",
    GB:""
    }
    ,
    vwlAG:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    }
    ,
    sachbezug:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    }
    ,
    provision:{
      betrag:0,
     ST:"",
     SV:"",
      GB:""
    }
    ,
    sonstiges:{
      betrag:0,
      ST:"",
      SV:"",
      GB:""
    }
    },
    nettobezuege:{
      netto:{
        isAbzug:false,
        betrag:0
      },
      sonstigerSachbezug:{
        isAbzug:false,
        betrag:0
      },
      abzuegeVwL:{
        isAbzug:true,
        betrag:0
      },
      sonstigerAbzug:{
        isAbzug:true,
        betrag:0
      }
    }
  }
)
const [gehaltInit, setGehaltInit] = useState(false);

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
        gehaltInit, setGehaltInit
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
