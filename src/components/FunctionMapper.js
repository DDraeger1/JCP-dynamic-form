import { Button } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Context } from "../context/Context";
function BruttoHinzufuegen({watch}) {
  const { setEinkommenGehaltBezuege,  bruttoSum,
    setBruttoSum } = useContext(Context);
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
    setBruttoSum(watch())
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
function BruttoEntfernen({ variableName,watch }) {
  
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege,setBruttoSum } =
    useContext(Context);
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
    setBruttoSum(watch())
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
function NettoHinzufuegen({watch}) {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege,setBruttoSum } =
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
    setBruttoSum(watch())
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
function NettoEntfernen({ variableName }) {
  const { setEinkommenGehaltBezuege } = useContext(Context);

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
function SonderzahlungHinzufuegen({watch}) {
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
    setBruttoSum(watch())
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
function BruttoSumme({watch}) {
  let summe = 0;

  const {bruttoSum,
  setBruttoSum } = useContext(Context);
function checkForUndefined(value,GB){
let output = 0
if(typeof(value) !== "undefined" && GB === "J"){
output = value
}
return(output)
}
summe =  checkForUndefined(watch().betragMtlTextfieldEinnahmen,watch().gesamtBruttoSelectEinnahmen) + checkForUndefined(watch().variablerBezugBetragMtlTextfieldEinnahmen,watch().variablerBezugGesamtBruttoSelectEinnahmen) + checkForUndefined(watch().fahrtkostenBetragMtlTextfieldEinnahmen,watch().fahrtkostenGesamtBruttoSelectEinnahmen) + checkForUndefined(watch().feiertagszuschlagBetragMtlTextfieldEinnahmen,watch().feiertagszuschlagGesamtBruttoSelectEinnahmen)+
checkForUndefined(watch().nachtzuschlagBetragMtlTextfieldEinnahmen,watch().nachtzuschlagGesamtBruttoSelectEinnahmen) + checkForUndefined(watch().dienstwagenBetragMtlTextfieldEinnahmen,watch().dienstwagenGesamtBruttoSelectEinnahmen) +checkForUndefined(watch().kitaGebuehrenBetragMtlTextfieldEinnahmen,watch().kitaGebuehrenGesamtBruttoSelectEinnahmen) +checkForUndefined(watch().jobRadBetragMtlTextfieldEinnahmen,watch().jobRadGesamtBruttoSelectEinnahmen) +checkForUndefined(watch().vwlAGBetragMtlTextfieldEinnahmen,watch().vwlAGGesamtBruttoSelectEinnahmen)+
checkForUndefined(watch().sachbezugBetragMtlTextfieldEinnahmen,watch().sachbezugGesamtBruttoSelectEinnahmen) + checkForUndefined(watch().provisionBetragMtlTextfieldEinnahmen,watch().provisionGesamtBruttoSelectEinnahmen) + checkForUndefined(watch().sonstigesBruttoBetragMtlTextfieldEinnahmen,watch().sonstigesBruttoGesamtBruttoSelectEinnahmen)
  return <p>{"Summe Bruttobezüge (mtl.): "+summe+ " €"}</p>;
}
function NettoSumme(){
  const {bruttoSum,
    setBruttoSum } = useContext(Context);
let summe = 0
Object.entries(bruttoSum).forEach(([key, value]) => {
  console.log(key)
  if(key === "bruttoBezug"){
  Object.entries(value).forEach(([key, value]) => {

    if (value.GB === "J") {

      Object.entries(value).forEach(([key, value]) => {
        if (value !== undefined) {
          if (typeof value === "number") {
            if (value !== 0) {
              summe = summe + value;
              console.log(summe)
            }
          }
        }
      });
    }
  })}
})
  return(<p>{"Summe Nettobezüge (mtl.): "+summe+ " €"}</p>)
}
function FunctionMapper({
  functionName,
  variableName,
  watch
}) {
  let htmlField;
  console.log()
  return (
    <div>
      {functionName === "bankAddBrutto" ? <BruttoHinzufuegen watch={watch} /> : null}
      {functionName === "bankRemoveBrutto" ? (
        <BruttoEntfernen variableName={variableName} watch={watch} />
      ) : null}
      {functionName === "bankAddNetto" ? <NettoHinzufuegen watch={watch}/> : null}
      {functionName === "bankRemoveNetto" ? (
        <NettoEntfernen variableName={variableName} />
      ) : null}
      {functionName === "bankAddSonderzahlung" ? (
        <SonderzahlungHinzufuegen watch={watch} />
      ) : null}
      {functionName === "bruttoSumme" ? (
        <BruttoSumme  watch={watch}/>
      ) : null}
      {functionName === "nettoSumme" ? (
        <NettoSumme />
      ) : null}
    </div>
  );
}

export default FunctionMapper;
