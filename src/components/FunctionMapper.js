import { Button, TextField } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { Context } from "../context/Context";
import axios from "axios";
import {DeleteForever } from "@material-ui/icons";
function BruttoHinzufuegen({ watch }) {
  const { setEinkommenGehaltBezuege, bruttoSum, setBruttoSum } =
    useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function addBezug(name) {
    let allreadyAdded = false;
    let label = "";
    switch (name) {
      case "VariablerBezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "VariablerBezug",
        });
        break;
      case "Fahrtkosten":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Fahrtkosten",
        });
        break;
      case "Provision":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Provision",
        });
        break;
      case "Feiertagszuschlag":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Feiertagszuschlag",
        });
        break;
      case "Nachtzuschlag":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Nachtzuschlag",
        });
        break;
      case "Dienstwagen":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Dienstwagen",
        });
        break;
      case "Gebuehren":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Gebuehren",
        });
        break;
      case "JobRad":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "JobRad",
        });
        break;
      case "VwLAG":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "VwLAG",
        });
        break;
      case "Sachbezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Sachbezug",
        });
        break;
      case "Sonstiges":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Sonstiges",
        });
        break;
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      >
        BruttoBezug Hinzufügen
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ top: "48px" }}
      >
        <MenuItem onClick={() => addBezug("VariablerBezug")}>
          Variabler bezug
        </MenuItem>
        <MenuItem onClick={() => addBezug("Fahrtkosten")}>Fahrtkosten</MenuItem>
        <MenuItem onClick={() => addBezug("Feiertagszuschlag")}>
          Feiertagszuschlag
        </MenuItem>
        <MenuItem onClick={() => addBezug("Nachtzuschlag")}>
          Nachtzuschlag
        </MenuItem>
        <MenuItem onClick={() => addBezug("Dienstwagen")}>Dienstwagen</MenuItem>
        <MenuItem onClick={() => addBezug("Gebuehren")}>Kita-Gebühren</MenuItem>
        <MenuItem onClick={() => addBezug("JobRad")}>Job Rad</MenuItem>
        <MenuItem onClick={() => addBezug("VwLAG")}>VwL AG</MenuItem>
        <MenuItem onClick={() => addBezug("Sachbezug")}>
          Sachbezug (44€)
        </MenuItem>
        <MenuItem onClick={() => addBezug("Provision")}>Provision</MenuItem>
        <MenuItem onClick={() => addBezug("Sonstiges")}>Sonstiges</MenuItem>
      </Menu>
    </div>
  );
}
function BruttoEntfernen({ variableName, watch }) {
  const { setEinkommenGehaltBezuege, setBruttoSum } = useContext(Context);
  let background = "transparent";
  function removeBezug(name) {
    let allreadyAdded = false;
    let label = "";

    switch (name) {
      case "VariablerBezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "VariablerBezug",
        });
        break;
      case "Fahrtkosten":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Fahrtkosten",
        });
        break;
      case "Provision":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Provision",
        });
        break;
      case "Feiertagszuschlag":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Feiertagszuschlag",
        });
        break;
      case "Nachtzuschlag":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Nachtzuschlag",
        });
        break;
      case "Dienstwagen":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Dienstwagen",
        });
        break;
      case "Gebuehren":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Gebuehren",
        });
        break;
      case "JobRad":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "JobRad",
        });
        break;
      case "VwLAG":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "VwLAG",
        });
        break;
      case "Sachbezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Sachbezug",
        });
        break;
      case "Sonstiges":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Sonstiges",
        });
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <div>
      {variableName === "Gehalt" ? (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          onClick={() => removeBezug(variableName)}
          disabled
        >
          Entfernen
        </Button>
      ) : (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          onClick={() => removeBezug(variableName)}
        >
          Entfernen
        </Button>
      )}
    </div>
  );
}
function NettoHinzufuegen({ watch }) {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege, setBruttoSum } =
    useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function addBezug(name) {
    switch (name) {
      case "SonstigerSachbezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "SonstigerSachbezug",
        });
        break;
      case "AbzuegeVwlGesamt":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "AbzuegeVwlGesamt",
        });
        break;
      case "SonstigerAbzugNetto":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "SonstigerAbzugNetto",
        });
        break;
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      >
        NettoBezug Hinzufügen
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ top: "48px" }}
      >
        <MenuItem onClick={() => addBezug("SonstigerSachbezug")}>
          Sonstiger Sachbezug
        </MenuItem>
        <MenuItem onClick={() => addBezug("AbzuegeVwlGesamt")}>
          Abzüge VwL Gesamt
        </MenuItem>
        <MenuItem onClick={() => addBezug("SonstigerAbzugNetto")}>
          Sonstiger Abzug
        </MenuItem>
      </Menu>
    </div>
  );
}
function NettoEntfernen({ variableName, watch }) {
  const { setEinkommenGehaltBezuege, setBruttoSum } = useContext(Context);

  function removeBezug(name) {
    switch (name) {
      case "SonstigerSachbezug":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "SonstigerSachbezug",
        });
        break;
      case "AbzuegeVwlGesamt":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "AbzuegeVwlGesamt",
        });
        break;
      case "SonstigerAbzugNetto":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "SonstigerAbzugNetto",
        });
        break;
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <div>
      {variableName === "Netto" ? (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          onClick={() => removeBezug(variableName)}
          disabled
        >
          Entfernen
        </Button>
      ) : (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          onClick={() => removeBezug(variableName)}
        >
          Entfernen
        </Button>
      )}
    </div>
  );
}
function SonderzahlungHinzufuegen({ watch }) {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege, setBruttoSum } =
    useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function addBezug(name) {
    switch (name) {
      case "Bonus":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Bonus",
        });
        break;
      case "Urlaubsgeld":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Urlaubsgeld",
        });
        break;
      case "Weihnachtsgeld":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Weihnachtsgeld",
        });
        break;
      case "Gewinnbeteiligung":
        setEinkommenGehaltBezuege({
          hinzufuegen: true,
          pressedValue: "Gewinnbeteiligung",
        });
        break;
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => handleClick(event)}
      >
        Sonderzahlung Hinzufügen
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        style={{ top: "48px" }}
      >
        <MenuItem onClick={() => addBezug("Bonus")}>Bonus</MenuItem>
        <MenuItem onClick={() => addBezug("Urlaubsgeld")}>Urlaubsgeld</MenuItem>
        <MenuItem onClick={() => addBezug("Weihnachtsgeld")}>
          Weihnachtsgeld
        </MenuItem>
        <MenuItem onClick={() => addBezug("Gewinnbeteiligung")}>
          Gewinnbeteiligung
        </MenuItem>
      </Menu>
    </div>
  );
}
function BruttoSumme({ watch }) {
  let summe = 0;

  function checkForUndefined(value, GB) {
    let output = 0;
    if (typeof value !== "undefined" && GB === "J") {
      output = value;
    }
    return output;
  }
  summe =
    checkForUndefined(
      watch().betragMtlTextfieldEinnahmen,
      watch().gesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().variablerBezugBetragMtlTextfieldEinnahmen,
      watch().variablerBezugGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().fahrtkostenBetragMtlTextfieldEinnahmen,
      watch().fahrtkostenGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().feiertagszuschlagBetragMtlTextfieldEinnahmen,
      watch().feiertagszuschlagGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().nachtzuschlagBetragMtlTextfieldEinnahmen,
      watch().nachtzuschlagGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().dienstwagenBetragMtlTextfieldEinnahmen,
      watch().dienstwagenGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().kitaGebuehrenBetragMtlTextfieldEinnahmen,
      watch().kitaGebuehrenGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().jobRadBetragMtlTextfieldEinnahmen,
      watch().jobRadGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().vwlAGBetragMtlTextfieldEinnahmen,
      watch().vwlAGGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().sachbezugBetragMtlTextfieldEinnahmen,
      watch().sachbezugGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().provisionBetragMtlTextfieldEinnahmen,
      watch().provisionGesamtBruttoSelectEinnahmen
    ) +
    checkForUndefined(
      watch().sonstigesBruttoBetragMtlTextfieldEinnahmen,
      watch().sonstigesBruttoGesamtBruttoSelectEinnahmen
    );
  return <p>{"Summe Bruttobezüge (mtl.): " + summe.toFixed(2) + " €"}</p>;
}
function NettoSumme({ watch }) {
  let summe = 0;

  function checkForUndefined(value, isNegative) {
    let output = 0;
    if (typeof value !== "undefined") {
      if (isNegative) {
        output = -value;
      } else {
        output = value;
      }
    }
    return output;
  }
  summe =
    checkForUndefined(watch().nettobezugBetragMtlEinnahmen, false) +
    checkForUndefined(
      watch().sonstigerSachbezugNettobezugBetragMtlEinnahmen,
      false
    ) +
    checkForUndefined(watch().abzuegeVwlGesamtNettobezugEinnahmen, true) +
    checkForUndefined(watch().sonstigerAbzugNettobezugBetragMtlEinnahmen, true);
  return <p>{"Summe Nettobezüge (mtl.): " + summe.toFixed(2) + " €"}</p>;
}
function SonderzahlungEntfernen({ variableName, watch }) {
  const { setEinkommenGehaltBezuege, setBruttoSum } = useContext(Context);
  function removeBezug(name) {
    switch (name) {
      case "Bonus":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Bonus",
        });
        break;
      case "Urlaubsgeld":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Urlaubsgeld",
        });
        break;
      case "Weihnachtsgeld":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Weihnachtsgeld",
        });
        break;
      case "Gewinnbeteiligung":
        setEinkommenGehaltBezuege({
          hinzufuegen: false,
          pressedValue: "Gewinnbeteiligung",
        });
        break;
      default:
        break;
    }
    setBruttoSum({ ...watch(), scrollY: window.scrollY });
  }
  return (
    <Button
      id="basic-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      onClick={() => removeBezug(variableName)}
    >
      Entfernen
    </Button>
  );
}
function SonderzahlungSumme({ watch }) {
  let summe = 0;
  function checkForUndefined(value) {
    let output = 0;
    if (typeof value !== "undefined") {
      output = value;
    }
    return output;
  }
  summe =
    checkForUndefined(watch().sonderzahlungenAuszahlungsmonatEinnahmen) +
    checkForUndefined(
      watch().urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen
    ) +
    checkForUndefined(
      watch().weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmen
    ) +
    checkForUndefined(
      watch().gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmen
    );
  return <p>{"Summe Sonderzahlungen: " + summe.toFixed(2) + " €"}</p>;
}
function SonderzahlungSummeNettoSchnitt({ watch }) {
  let summe = 0;
  function checkForUndefined(value) {
    let output = 0;
    if (typeof value !== "undefined") {
      output = value;
    }
    return output;
  }
  summe =
    ((checkForUndefined(watch().sonderzahlungenAuszahlungsmonatEinnahmen) +
      checkForUndefined(
        watch().urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen
      ) +
      checkForUndefined(
        watch().weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmen
      ) +
      checkForUndefined(
        watch().gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmen
      )) *
      0.5) /
    12.0;
  return (
    <p>{"Sonderzahlungen Schnitt ca. Netto: " + summe.toFixed(2) + " €"}</p>
  );
}

function ArbeitgeberHinzufuegen({ watch }) {
  const { anzahlVp, setAnzahlVp } = useContext(Context);
  console.log(watch());
  function checkForUndefined(value) {
    let output = false;
    if (typeof value === "undefined") {
      output = false;
    } else if (value) {
      console.log("drin");
      output = true;
    } else {
      console.log("why drin");
      output = false;
    }
    return output;
  }
  function addArbeitgeber() {
    if (anzahlVp <= 6) {
      setAnzahlVp(anzahlVp + 1);
      console.log("set " + anzahlVp);
    }
  }
  return (
    <Button
      id="basic-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      onClick={(event) => {
        addArbeitgeber();
      }}
    >
      Neuer Arbeitgeber
    </Button>
  );
}
function RentenPrognose({ watch,setValue }) {
  const {mandantGroup} =useContext(Context)
  function dateFormaterSuite(date) {
    //from dd/mm/yyyy to mm/dd/yyyy
    let output;
    if (date !== null) {
      if (date !== undefined) {
        if (date.length === 10) {
          output =
            date.substring(3, 6) + date.substring(0, 3) + date.substring(6, 10);
        }
      }
    }
    return output;
  }
  function prognostizierteRenteBerechnen() {
    let zahlweise = watch().zahlweiseVWLRiesterrente;
    let beitragForm = watch().beitragVWLRiesterrente;
let beitrag = 0
    switch (zahlweise) {
      case "MONATLICH":
        beitrag=beitragForm
        break;
      case "QUARTAL":
        beitrag=beitragForm * 2 / 12
        break;
      case "HALBJAEHRLICH":
        beitrag=beitragForm * 4 / 12
        break;
      case "JAEHRLICH":
        beitrag=  beitragForm / 12
      break;
        default:
        break;
    }

    let beitragsanteilBU = 0
if (typeof (watch().beitragsanteilBUZRiesterrente) !== "undefined") {
  beitragsanteilBU =  watch().beitragsanteilBUZRiesterrente
}

let buRente = 0
if (typeof (watch().rentenleistungBURiesterrente) !== "undefined") {
  buRente = watch().rentenleistungBURiesterrente;
} 
let mitBU = false
if (typeof (watch().integrierteBURiesterrente) !== "undefined") {
  mitBU = watch().integrierteBURiesterrente;
} 

let mandantVersichert
mandantGroup.map((mandant)=>{
  if(mandant.mandantId === watch().versichertePersonRiesterrente){
    mandantVersichert = mandant
  }
})
console.log(mandantVersichert)
let params={
  klassisch: (watch().artVersichertePersonRiesterrente !== "undefined") ? watch().artVersichertePersonRiesterrente === "klassisch" : false,
  mitBU: mitBU,
  koerperlichTaetig:  mandantVersichert.mandant.eb_anteilKoerperlich > 0 ? true : false,
  buRente: buRente,
  anteilBU: beitragsanteilBU,
  beitrag: beitrag,
  rueckkaufswert: (typeof (watch().aktuellerRueckkaufswertBUZRiesterrente) !== "undefined") ? watch().aktuellerRueckkaufswertBUZRiesterrente : 0,
  beitragVWL: 0,
  versicherungsbeginn: dateFormaterSuite(watch().vertragsbeginnVertragslaufzeitRiesterrente),
  versicherungsende: dateFormaterSuite(watch().vertragsendeVertragslaufzeitRiesterrente),
  geburtsdatum: mandantVersichert.mandant.geburtsdatum,
}
let config = {
  method: 'post',
  url: "http://localhost:8080/build-suite/rechenmodul.json?action=berechnePrognostizierteRente&anteilBU="+params.anteilBU+"&beitrag="+params.beitrag+"&beitragVWL="+params.beitragVWL+"&buRente="+params.buRente+"&geburtsdatum="+params.geburtsdatum+"&klassisch=+"+params.klassisch+"&koerperlichTaetig="+params.koerperlichTaetig+"&mitBU="+params.mitBU+"&rueckkaufswert="+params.rueckkaufswert+"&versicherungsbeginn="+params.versicherungsbeginn+"&versicherungsende="+params.versicherungsende,
  headers: { 
    'Cookie': '59669720A20F69EA54F253BB1263D48B; JSESSIONID=43D4429B33E4468A1A69178B21BD2258'
  }
};

axios(config)
.then(function (response) {
  console.log(response.data);
  setValue("prognostiziertMonatlicheRentenleistungRiesterrente",response.data.result.prognostizierteRente.toFixed(2),{ shouldDirty: true })
})
.catch(function (error) {
  alert(error);
});
//
console.log(params)

}  
  return (
    <Button
      id="prognose-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      onClick={()=>prognostizierteRenteBerechnen()}
    >
      Prognostizierte Rente berechnen
    </Button>
  );
}
function DeleteBankdaten({variableName}){
  const {setDeletionIndex,mandantGroup,deletionIndex} =useContext(Context)


  let index 
return(<Button  onClick={()=>console.log(deletionIndex)}><DeleteForever/></Button>)
}
function FunctionMapper({ functionName, variableName, watch,setValue }) {
  return (
    <div>
      {functionName === "bankAddBrutto" ? (
        <BruttoHinzufuegen watch={watch} />
      ) : null}
      {functionName === "bankRemoveBrutto" ? (
        <BruttoEntfernen variableName={variableName} watch={watch} />
      ) : null}
      {functionName === "bankAddNetto" ? (
        <NettoHinzufuegen watch={watch} />
      ) : null}
      {functionName === "bankRemoveNetto" ? (
        <NettoEntfernen variableName={variableName} watch={watch} />
      ) : null}
      {functionName === "bankAddSonderzahlung" ? (
        <SonderzahlungHinzufuegen watch={watch} />
      ) : null}
      {functionName === "bankRemoveSonderzahlung" ? (
        <SonderzahlungEntfernen variableName={variableName} watch={watch} />
      ) : null}
      {functionName === "summeSonderzahlung" ? (
        <SonderzahlungSumme watch={watch} />
      ) : null}
      {functionName === "summeSonderzahlungNettoSchnitt" ? (
        <SonderzahlungSummeNettoSchnitt watch={watch} />
      ) : null}
      {functionName === "bruttoSumme" ? <BruttoSumme watch={watch} /> : null}
      {functionName === "nettoSumme" ? <NettoSumme watch={watch} /> : null}
      {functionName === "arbeitgeberHinzufuegen" ? (
        <ArbeitgeberHinzufuegen watch={watch} />
      ) : null}
      {functionName === "rentenPrognose" ? (
        <RentenPrognose watch={watch} setValue={setValue} />
      ) : null}
      {functionName === "deleteBankverbindung" ? (
        <DeleteBankdaten variableName={variableName} />
      ) : null}
    </div>
  );
}

export default FunctionMapper;
