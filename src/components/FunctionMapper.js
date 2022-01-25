import { Button } from "@material-ui/core";
import { useState, useContext } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Context } from "../context/Context";
function BruttoHinzufuegen() {
  const { setEinkommenGehaltBezuege } = useContext(Context);

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
function BruttoEntfernen({ variableName }) {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege } =
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
        console.log(einkommenGehaltBezuege)
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
function NettoHinzufügen() {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege } =
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
    {variableName === "Netto" ? 
    <Button
      id="basic-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      onClick={() => removeBezug(variableName)}
      disabled
    >
      Entfernen
    </Button>
    :
        <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        onClick={() => removeBezug(variableName)}
      >
        Entfernen
      </Button>
}
</div>
  );
}
function SonderzahlungHinzufügen() {
  const { einkommenGehaltBezuege, setEinkommenGehaltBezuege } =
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
        <MenuItem onClick={() => addBezug("Bonus")}>
        Bonus
        </MenuItem>
        <MenuItem onClick={() => addBezug("Urlaubsgeld")}>
        Urlaubsgeld
        </MenuItem>
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
function FunctionMapper({ functionName, variableName }) {
  let htmlField;
  console.log(functionName);

  return (
    <div>
      {functionName === "bankAddBrutto" ? <BruttoHinzufuegen /> : null}
      {functionName === "bankRemoveBrutto" ? (
        <BruttoEntfernen variableName={variableName} />
      ) : null}
      {functionName === "bankAddNetto" ? <NettoHinzufügen /> : null}
      {functionName === "bankRemoveNetto" ? (
        <NettoEntfernen variableName={variableName} />
      ) : null}
      {functionName === "bankAddSonderzahlung" ? <SonderzahlungHinzufügen /> : null}
    </div>
  );
}

export default FunctionMapper;
