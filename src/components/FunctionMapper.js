import { Button, TextField } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { Context } from "../context/Context";
import { Tooltip, Typography } from "@mui/material";

import axios from "axios";
import { DeleteForever, Close, Info } from "@material-ui/icons";
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
  function removeBezug(name) {

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
function RentenPrognose({ watch, setValue, tarifTypeIdFromCardState }) {
  const { mandantGroup, beitragGesamtbAV } = useContext(Context);

  function dateFormaterSuite(date) {
    //from dd/mm/yyyy to mm/dd/yyyy
    let output;
    if (typeof date === "string") {
      if (date !== null) {
        if (date !== undefined) {
          if (date.length === 10) {
            output =
              date.substring(3, 6) +
              date.substring(0, 3) +
              date.substring(6, 10);
          }
        }
      }
    } else {
      output = date.toLocaleDateString("de-EU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    }
    return output;
  }
  const { login } = useContext(Context);
  function prognostizierteRenteBerechnenRUERUP() {
    //werte Ruerup klassisch: art, mitBU: integrierteBURuerupRente, koerperlichTaetig:mandant, buRente:rentenleistungBURuerupRente
    // anteilBU: beitragsanteilBUHinterbliebenenZusatzversicherungRuerupRente, beitrag:beitragHinterbliebenenZusatzversicherungRuerupRente,
    // rueckkaufswert: aktuellerRueckkaufswertHinterbliebenenZusatzversicherungRuerupRente, beitragVWL :für liveSuite
    //vers. beginn:vertragsbeginnVertragslaufzeitRuerupRente, vers. ende:vertragsendeVertragslaufzeitRuerupRente, geburtstag:mandant
    let zahlweise =
      watch().zahlweiseHinterbliebenenZusatzversicherungRuerupRente;
    let beitragForm =
      watch().beitragHinterbliebenenZusatzversicherungRuerupRente;
    let beitrag = 0;
    switch (zahlweise) {
      case "MONATLICH":
        beitrag = beitragForm;
        break;
      case "HALBJAEHRLICH":
        beitrag = (beitragForm * 2) / 12;
        break;
      case "QUARTAL":
        beitrag = (beitragForm * 4) / 12;
        break;
      case "JAEHRLICH":
        beitrag = beitragForm / 12;
        break;
      default:
        break;
    }
    let beitragsanteilBU = 0;
    if (
      typeof watch()
        .beitragsanteilBUHinterbliebenenZusatzversicherungRuerupRente !==
      "undefined"
    ) {
      beitragsanteilBU =
        watch().beitragsanteilBUHinterbliebenenZusatzversicherungRuerupRente;
    }

    let buRente = 0;
    if (typeof watch().rentenleistungBURuerupRente !== "undefined") {
      buRente = watch().rentenleistungBURuerupRente;
    } else if (typeof watch().beitragsanteilBUZRuerupRente !== "undefined") {
      buRente = watch().beitragsanteilBUZRuerupRente;
    }
    let mitBU = false;
    if (typeof watch().integrierteBURuerupRente !== "undefined") {
      mitBU = watch().integrierteBURuerupRente;
    }
    let mandantVersichert;
    mandantGroup.map((mandant) => {
      if (mandant.mandantId === watch().versichertePersonRuerupRente) {
        mandantVersichert = mandant;
      }
    });
    let isUndefined = false;
    if (
      typeof watch("vertragsbeginnVertragslaufzeitRuerupRente") === "undefined"
    ) {
      alert("Vertragsbeginn muss beschrieben werden!");
      isUndefined = true;
    }
    if (
      typeof watch("vertragsendeVertragslaufzeitRuerupRente") === "undefined"
    ) {
      alert("vertragsende muss beschrieben werden!");
      isUndefined = true;
    }
    if (typeof watch("integrierteBURuerupRente") === "undefined") {
      alert("Integrierte BU muss beschrieben werden!");
      isUndefined = true;
    }
    if (
      typeof watch("zahlweiseHinterbliebenenZusatzversicherungRuerupRente") ===
      "undefined"
    ) {
      alert("Zahlweise muss beschrieben werden!");
      isUndefined = true;
    }
    if (
      typeof watch("beitragHinterbliebenenZusatzversicherungRuerupRente") ===
      "undefined"
    ) {
      alert("Beitrag muss beschrieben werden!");
      isUndefined = true;
    }
    /*
action: berechnePrognostizierteRente
klassisch: false
mitBU: true
koerperlichTaetig: false
buRente: 42345
anteilBU: 457567
beitrag: 1152248.3333333333
rueckkaufswert: 47465
beitragVWL: 0
versicherungsbeginn: 15.04.2022
versicherungsende: 30.04.2022
geburtsdatum: 21.04.2022

action: berechnePrognostizierteRente
anteilBU: 457567
beitrag: 576124.1666666666
beitragVWL: 0
buRente: 42345
geburtsdatum: 21.04.2022
klassisch:  false
koerperlichTaetig: false
mitBU: true
rueckkaufswert: 47465
versicherungsbeginn: 15.04.2022
versicherungsende: 30.04.2022
*/
    if (!isUndefined) {
      let params = {
        klassisch:
          watch().artVersichertePersonRuerupRente !== "undefined"
            ? watch().artVersichertePersonRuerupRente === "klassisch"
            : false,
        mitBU: mitBU,
        koerperlichTaetig:
          mandantVersichert.mandant.eb_anteilKoerperlich > 0 ? true : false,
        buRente: buRente,
        anteilBU: beitragsanteilBU,
        beitrag: beitrag,
        rueckkaufswert:
          typeof watch()
            .aktuellerRueckkaufswertHinterbliebenenZusatzversicherungRuerupRente !==
          "undefined"
            ? watch()
                .aktuellerRueckkaufswertHinterbliebenenZusatzversicherungRuerupRente
            : 0,
        beitragVWL: 0,
        versicherungsbeginn: dateFormaterSuite(
          watch("vertragsbeginnVertragslaufzeitRuerupRente")
        ),
        versicherungsende: dateFormaterSuite(
          watch("vertragsendeVertragslaufzeitRuerupRente")
        ),
        geburtsdatum: mandantVersichert.mandant.geburtsdatum,
      };
      let config = {
        method: "post",
        url:
          "https://jcp-suite.de/suite/rechenmodul.json?action=berechnePrognostizierteRente&anteilBU=" +
          params.anteilBU +
          "&beitrag=" +
          params.beitrag +
          "&beitragVWL=" +
          params.beitragVWL +
          "&buRente=" +
          params.buRente +
          "&geburtsdatum=" +
          params.geburtsdatum +
          "&klassisch=" +
          params.klassisch +
          "&koerperlichTaetig=" +
          params.koerperlichTaetig +
          "&mitBU=" +
          params.mitBU +
          "&rueckkaufswert=" +
          params.rueckkaufswert +
          "&versicherungsbeginn=" +
          params.versicherungsbeginn +
          "&versicherungsende=" +
          params.versicherungsende,
        headers: {
          Authorization: "Bearer " + login,
        },
      };

      axios(config)
        .then(function (response) {
          if (response.data.result.success) {
            setValue(
              "prognostiziertMonatlicheRentenleistungRuerupRente",
              response.data.result.prognostizierteRente.toFixed(2),
              { shouldDirty: true }
            );
          } else {
            alert(response.data.result.message);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  }
  function prognostizierteRenteBerechnenbAV() {
    //werte Ruerup klassisch: art, mitBU: integrierteBURuerupRente, koerperlichTaetig:mandant, buRente:rentenleistungBURuerupRente
    // anteilBU: beitragsanteilBUHinterbliebenenZusatzversicherungRuerupRente, beitrag:beitragHinterbliebenenZusatzversicherungRuerupRente,
    // rueckkaufswert: aktuellerRueckkaufswertHinterbliebenenZusatzversicherungRuerupRente, beitragVWL :für liveSuite
    //vers. beginn:vertragsbeginnVertragslaufzeitRuerupRente, vers. ende:vertragsendeVertragslaufzeitRuerupRente, geburtstag:mandant
    let zahlweise = watch("zahlweiseBetrieblicheAltersversorgung");
    let beitragForm = beitragGesamtbAV;
    let beitrag = 0;
    switch (zahlweise) {
      case "MONATLICH":
        beitrag = beitragForm;
        break;
      case "HALBJAEHRLICH":
        beitrag = (beitragForm * 2) / 12;
        break;
      case "QUARTAL":
        beitrag = (beitragForm * 4) / 12;
        break;
      case "JAEHRLICH":
        beitrag = beitragForm / 12;
        break;
      default:
        break;
    }
    let beitragsanteilBU = 0;
    if (
      typeof watch().beitragsanteilBUZBetrieblicheAltersversorgung !==
      "undefined"
    ) {
      beitragsanteilBU = watch().beitragsanteilBUZBetrieblicheAltersversorgung;
    }

    let buRente = 0;
    if (typeof watch("renteBUBetrieblicheAltersversorgung") !== "undefined") {
      buRente = watch("renteBUBetrieblicheAltersversorgung");
    } else if (
      typeof watch().beitragsanteilBUZBetrieblicheAltersversorgung !==
      "undefined"
    ) {
      buRente = watch().beitragsanteilBUZBetrieblicheAltersversorgung;
    }
    let mitBU = false;
    if (
      typeof watch("integrierteBUBetrieblicheAltersversorgung") !== "undefined"
    ) {
      mitBU = watch("integrierteBUBetrieblicheAltersversorgung");
    }
    let mandantVersichert;
    mandantGroup.map((mandant) => {
      if (
        mandant.mandantId ===
        watch("versichertePersonBetrieblicheAltersversorgung")
      ) {
        mandantVersichert = mandant;
      }
    });
    let isUndefined = false;
    if (
      typeof watch(
        "vertragsbeginnVertragslaufzeitBetrieblicheAltersversorgung"
      ) === "undefined"
    ) {
      alert("Vertragsbeginn muss beschrieben werden!");
      isUndefined = true;
    }
    if (
      typeof watch(
        "vertragsendeVertragslaufzeitBetrieblicheAltersversorgung"
      ) === "undefined"
    ) {
      alert("vertragsende muss beschrieben werden!");
      isUndefined = true;
    }
    if (
      typeof watch("integrierteBUBetrieblicheAltersversorgung") === "undefined"
    ) {
      alert("Integrierte BU muss beschrieben werden!");
      isUndefined = true;
    }
    if (typeof watch("zahlweiseBetrieblicheAltersversorgung") === "undefined") {
      alert("Zahlweise muss beschrieben werden!");
      isUndefined = true;
    }
    if (beitragGesamtbAV === 0) {
      alert("Beitrag muss beschrieben werden!");
      isUndefined = true;
    }
    /*
action: berechnePrognostizierteRente
klassisch: true x
mitBU: true x
koerperlichTaetig: false
buRente: 5245 x
anteilBU: 5345 x
beitrag: 57345,00 x
rueckkaufswert: 645

versicherungsbeginn: 13.04.2022
versicherungsende: 29.12.2023
geburtsdatum: 21.04.2022

action: berechnePrognostizierteRente
anteilBU: 5345 x
beitrag: 57345 x
buRente: 5245 x
geburtsdatum: 21.04.2022 x
klassisch:  true x
koerperlichTaetig: false x
mitBU: true x
rueckkaufswert: 645 x
versicherungsbeginn: 13.04.2022 x
versicherungsende: 29.12.2023
*/
    if (!isUndefined) {
      let params = {
        klassisch:
          watch().artVersichertePersonBetrieblicheAltersversorgung ===
          "klassisch"
            ? true
            : false,
        mitBU: mitBU,
        koerperlichTaetig:
          mandantVersichert.mandant.eb_anteilKoerperlich > 0 ? true : false,
        buRente: buRente,
        anteilBU: beitragsanteilBU,
        beitrag: beitrag,
        rueckkaufswert:
          typeof watch().aktuellerRKWBUZBetrieblicheAltersversorgung !==
          "undefined"
            ? watch().aktuellerRKWBUZBetrieblicheAltersversorgung
            : 0,
        beitragVWL: 0,
        versicherungsbeginn: dateFormaterSuite(
          watch("vertragsbeginnVertragslaufzeitBetrieblicheAltersversorgung")
        ),
        versicherungsende: dateFormaterSuite(
          watch("vertragsendeVertragslaufzeitBetrieblicheAltersversorgung")
        ),
        geburtsdatum: mandantVersichert.mandant.geburtsdatum,
      };
      let config = {
        method: "post",
        url:
          "https://jcp-suite.de/suite/rechenmodul.json?action=berechnePrognostizierteRente&anteilBU=" +
          params.anteilBU +
          "&beitrag=" +
          params.beitrag +
          "&buRente=" +
          params.buRente +
          "&geburtsdatum=" +
          params.geburtsdatum +
          "&klassisch=" +
          params.klassisch +
          "&koerperlichTaetig=" +
          params.koerperlichTaetig +
          "&mitBU=" +
          params.mitBU +
          "&rueckkaufswert=" +
          params.rueckkaufswert +
          "&versicherungsbeginn=" +
          params.versicherungsbeginn +
          "&versicherungsende=" +
          params.versicherungsende,
        headers: {
          Authorization: "Bearer " + login,
        },
      };

      axios(config)
        .then(function (response) {
          if (response.data.result.success) {
            setValue(
              "prognostiziertMonatlicheRentenleistungBetrieblicheAltersversorgung",
              response.data.result.prognostizierteRente.toFixed(2),
              { shouldDirty: true }
            );
          } else {
            alert(response.data.result.message);
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  }
  function prognostizierteRenteBerechnenRIESTER() {
    let zahlweise = watch().zahlweiseVWLRiesterrente;
    let beitragForm = watch().beitragVWLRiesterrente;
    let beitrag = 0;
    switch (zahlweise) {
      case "MONATLICH":
        beitrag = beitragForm;
        break;
      case "QUARTAL":
        beitrag = (beitragForm * 2) / 12;
        break;
      case "HALBJAEHRLICH":
        beitrag = (beitragForm * 4) / 12;
        break;
      case "JAEHRLICH":
        beitrag = beitragForm / 12;
        break;
      default:
        break;
    }

    let beitragsanteilBU = 0;
    if (typeof watch().beitragsanteilBUZRiesterrente !== "undefined") {
      beitragsanteilBU = watch().beitragsanteilBUZRiesterrente;
    }

    let buRente = 0;
    if (typeof watch().rentenleistungBURiesterrente !== "undefined") {
      buRente = watch().rentenleistungBURiesterrente;
    } else if (typeof watch().beitragsanteilBUZRiesterrente !== "undefined") {
      buRente = watch().beitragsanteilBUZRiesterrente;
    }
    let mitBU = false;
    if (typeof watch().integrierteBURiesterrente !== "undefined") {
      mitBU = watch().integrierteBURiesterrente;
    }

    let mandantVersichert;
    mandantGroup.map((mandant) => {
      if (mandant.mandantId === watch().versichertePersonRiesterrente) {
        mandantVersichert = mandant;
      }
    });
    let params = {
      klassisch:
        watch().artVersichertePersonRiesterrente !== "undefined"
          ? watch().artVersichertePersonRiesterrente === "klassisch"
          : false,
      mitBU: mitBU,
      koerperlichTaetig:
        mandantVersichert.mandant.eb_anteilKoerperlich > 0 ? true : false,
      buRente: buRente,
      anteilBU: beitragsanteilBU,
      beitrag: beitrag,
      rueckkaufswert:
        typeof watch().aktuellerRueckkaufswertBUZRiesterrente !== "undefined"
          ? watch().aktuellerRueckkaufswertBUZRiesterrente
          : 0,
      beitragVWL: 0,
      versicherungsbeginn: dateFormaterSuite(
        watch().vertragsbeginnVertragslaufzeitRiesterrente
      ),
      versicherungsende: dateFormaterSuite(
        watch().vertragsendeVertragslaufzeitRiesterrente
      ),
      geburtsdatum: mandantVersichert.mandant.geburtsdatum,
    };
    let config = {
      method: "post",
      url:
        "https://jcp-suite.de/suite/rechenmodul.json?action=berechnePrognostizierteRente&anteilBU=" +
        params.anteilBU +
        "&beitrag=" +
        params.beitrag +
        "&beitragVWL=" +
        params.beitragVWL +
        "&buRente=" +
        params.buRente +
        "&geburtsdatum=" +
        params.geburtsdatum +
        "&klassisch=" +
        params.klassisch +
        "&koerperlichTaetig=" +
        params.koerperlichTaetig +
        "&mitBU=" +
        params.mitBU +
        "&rueckkaufswert=" +
        params.rueckkaufswert +
        "&versicherungsbeginn=" +
        params.versicherungsbeginn +
        "&versicherungsende=" +
        params.versicherungsende,
      headers: {
        Authorization: "Bearer " + login,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setValue(
          "prognostiziertMonatlicheRentenleistungRiesterrente",
          response.data.result.prognostizierteRente.toFixed(2),
          { shouldDirty: true }
        );
      })
      .catch(function (error) {
        alert(error);
      });
  }
  function isbAV(card) {
    let output;
    switch (card) {
      case "DIREKTZUSAGE":
        output = true;
        break;
      case "PENSIONSFONDS_3":
        output = true;
        break;
      case "DIREKT_40":
        output = true;
        break;
      case "PENSIONSKASSE_3":
        output = true;
        break;
      case "PENSIONSKASSE_40":
        output = true;
        break;
      case "ZUSATZVERSORGUNGSKASSE":
        output = true;
        break;
      case "UNTERSTUETZUNGSKASSE":
        output = true;
        break;
      case "DIREKT_3":
        output = true;
        break;
      case "bAVNEW":
        output = true;
        break;
      default:
        output = false;
        break;
    }
    return output;
  }
  return (
    <Button
      id="prognose-button"
      aria-controls="basic-menu"
      aria-haspopup="true"
      onClick={() => {
        if (tarifTypeIdFromCardState === "RIESTER") {
          prognostizierteRenteBerechnenRIESTER();
        }
        if (tarifTypeIdFromCardState === "RUERUP") {
          prognostizierteRenteBerechnenRUERUP();
        }
        if (isbAV(tarifTypeIdFromCardState)) {
          prognostizierteRenteBerechnenbAV();
        }
      }}
    >
      Prognostizierte Rente berechnen
    </Button>
  );
}

function DeleteBankdaten({ deletionIndex, renderAnzahlVp }) {
  const { setBankverbindungen, bankverbindungen, setAnzahlVp } =
    useContext(Context);
  function deleteBankdatenListener() {
    let output = bankverbindungen;
    output.splice(deletionIndex, 1);
    if (output.length === 1) {
      setBankverbindungen([]);
      console.log("Triggered");
      renderAnzahlVp(output.length);
    } else {
      renderAnzahlVp(output.length);
    }
    setAnzahlVp(output.length);
    console.log(output.length);
  }
  return (
    <Button onClick={() => deleteBankdatenListener()}>
      <DeleteForever />
    </Button>
  );
}

function JahresBrutto({ watch }) {
  let summe = 0;
  function checkForUndefined(value, GB) {
    let output = 0;
    if (typeof value !== "undefined" && GB === "J") {
      output = value;
    }
    return output;
  }
  function checkForUndefinedSonderzahlung(value) {
    let output = 0;
    if (typeof value !== "undefined") {
      output = value;
    }
    return output;
  }
  summe =
    (checkForUndefined(
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
      )) *
      watch().anzahlGehaelterEinnahmen +
    checkForUndefinedSonderzahlung(
      watch().sonderzahlungenAuszahlungsmonatEinnahmen
    ) +
    checkForUndefinedSonderzahlung(
      watch().urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen
    ) +
    checkForUndefinedSonderzahlung(
      watch().weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmen
    ) +
    checkForUndefinedSonderzahlung(
      watch().gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmen
    );
  return <p>{"Jahresbrutto (€): " + summe.toFixed(2) + " €"}</p>;
}

function Tilgung({ watch }) {
  let tilgung = 0;
  const { berechneteRestschuld } = useContext(Context);
  function calculateTilgungBetrag() {
    let tilgungBetrag = 0;
    //ANGUCKEN
    {
      // darlehenshoge beginn x tilgun% / zahlweise
      var restschuldfield = watch("restschuldObjektzuordnungDarlehen");
      var restschuld = watch("restschuldObjektzuordnungDarlehen");

      var rate = watch("rateObjektzuordnungDarlehen");
      var darlehenshohe = watch("darlehenshoeheBeginnObjektzuordnungDarlehen");
      var tilgungProzent = watch("tilgungProzentObjektzuordnungDarlehen");
      var zinssatz = watch("zinssatzObjektzuordnungDarlehen");
      // if there is a restschuld (most of the time), the calculation is different
      if (watch().zahlweiseObjektzuordnungDarlehen) {
        var zahlweiseFactor = 1;
        if (
          watch().zahlweiseObjektzuordnungDarlehen === "MONATLICH" ||
          watch().zahlweiseObjektzuordnungDarlehen === "112"
        ) {
          zahlweiseFactor = 12;
        } else if (
          watch().zahlweiseObjektzuordnungDarlehen === "HALBJAEHRLICH" ||
          watch().zahlweiseObjektzuordnungDarlehen === "12"
        ) {
          zahlweiseFactor = 2;
        } else if (
          watch().zahlweiseObjektzuordnungDarlehen === "QUARTAL" ||
          watch().zahlweiseObjektzuordnungDarlehen === "14"
        ) {
          zahlweiseFactor = 4;
        }
        if (berechneteRestschuld) {
          restschuld = parseInt(berechneteRestschuld);
        } else {
          restschuld = restschuldfield;
        }

        if (restschuld && rate && zinssatz) {
          var rateyearly = rate * 12; //?
          var tilgungBetragYearly = rateyearly - restschuld * (zinssatz / 100);
          tilgungBetrag = tilgungBetragYearly / 12;
        } else if (darlehenshohe && tilgungProzent) {
          tilgungBetrag =
            (darlehenshohe * (tilgungProzent / 100)) / zahlweiseFactor;
        }
      }
    }
    return tilgungBetrag;
  }
  tilgung = calculateTilgungBetrag();

  return (
    <p style={{ textAlign: "center" }}>
      {"Tilgung in (€): " +
        tilgung.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
        " €"}
    </p>
  );
}
function DeleteArbeitgeber({index}) {
  const {mandantGroup,mandantTabIndex,login} = useContext(Context)
  /*
  https://jcp-suite.de/suite/analyseApp
  body: 
  id: c323e1dc-e199-11ec-bdc8-001c4270ffe9
mandantId: e5943e40-9eb4-11ec-a423-001c4270ffe9
action: deleteArbeitgeber
  */
 console.log(index)

  function onClickDeleteArbeitgeber(){
    const deleteArbeitgeberBody = new FormData();
deleteArbeitgeberBody.append("id", mandantGroup[mandantTabIndex].mandant.arbeitgebers[index].id);
deleteArbeitgeberBody.append("mandantId",mandantGroup[mandantTabIndex].mandantId );
  deleteArbeitgeberBody.append("action", "deleteArbeitgeber");

  const deleteArbeitgeberPOST = {
    method: "post",
    url: "https://jcp-suite.de/suite/analyseApp",
      headers: { Authorization: "Bearer " + login },
      data: deleteArbeitgeberBody,
  };
      axios(deleteArbeitgeberPOST).then((result)=>{
        console.log("success")
      }).catch((error)=>{
console.log("error")
console.log(error)
      })
  }
  return (
    <IconButton onClick={()=>onClickDeleteArbeitgeber()}>
      <Close />
    </IconButton>
  );
}
function RestschuldBerechnen({ watch, setValue, value }) {
  const { berechneteRestschuld, setBerechneteRestschuld } = useContext(Context);
  useEffect(() => {
    setBerechneteRestschuld(parseInt(value.replace("€", "").replace(".", "")));
  }, []);

  function dateFormaterSuite(date) {
    let output = "";

    if (typeof date !== "undefined") {
      if (Object.prototype.toString.call(date) === "[object Date]") {
        output = date.toLocaleDateString("de-EU", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        // it is a date
        if (isNaN(date)) {
          // d.getTime() or d.valueOf() will also work
          // date object is not valid
          output = "";
        }
      } else {
        output = date;
      }
    }

    return output;
  }
  function getLaufzeitBisJetzt(date) {
    const aktYear = new Date().getFullYear();
    const aktMonth = new Date().getMonth();
    const vertMonth = date.getMonth();
    const vertYear = date.getFullYear();

    let laufzeit = (aktYear - vertYear) * 12 + (aktMonth - vertMonth);

    return laufzeit;
  }
  function restschuldListener() {
    const darlehenshoeheField = watch(
      "darlehenshoeheBeginnObjektzuordnungDarlehen"
    );
    const zinssatzField = watch("zinssatzObjektzuordnungDarlehen");
    const zahlweiseField = watch("zahlweiseObjektzuordnungDarlehen");
    const versicherungsbeginnField = dateFormaterSuite(
      watch("beginnObjektzuordnungDarlehen")
    );
    const rateField = watch("rateObjektzuordnungDarlehen");
    const tilgungProzentField = watch("tilgungProzentObjektzuordnungDarlehen");

    let darlehenshoehe;
    let zahlweise;
    let laufzeit;
    let zinssatz;
    let rate;
    let tilgung;
    let ersteTilgung;

    if (darlehenshoeheField !== null && darlehenshoeheField !== "") {
      darlehenshoehe = darlehenshoeheField;
    } else {
      alert("Bitte geben Sie die Darlehenshöhe an.");
      return;
    }

    if (zahlweiseField !== null && zahlweiseField !== "") {
      zahlweise = zahlweiseField;
    } else {
      alert("Bitte geben Sie die Zahlweise an.");
      return;
    }

    if (versicherungsbeginnField !== null && versicherungsbeginnField !== "") {
      laufzeit = getLaufzeitBisJetzt(new Date(versicherungsbeginnField));
    } else {
      alert("Bitte geben Sie den Vertragsbeginn an.");
      return;
    }
    if (zinssatzField !== null && zinssatzField !== "") {
      zinssatz = zinssatzField / 100;
    } else {
      alert("Bitte geben Sie den Zinssatz an.");
      return;
    }

    switch (zahlweise) {
      case "MONATLICH":
        zahlweise = 12;
        zinssatz = zinssatz / zahlweise;

        break;
      case "HALBJAEHRLICH":
        zahlweise = 2;
        zinssatz = zinssatz / zahlweise;
        laufzeit = parseInt(laufzeit / 6);

        break;
      case "QUARTAL":
        zahlweise = 4;
        zinssatz = zinssatz / zahlweise;
        laufzeit = parseInt(laufzeit / 3);

        break;
      case "JAEHRLICH":
        zahlweise = 1;
        laufzeit = parseInt(laufzeit / 12);
        break;
    }

    if (rateField !== null) {
      rate = rateField;
      ersteTilgung = rate - darlehenshoehe * zinssatz;
    } else if (tilgungProzentField !== null) {
      tilgung = tilgungProzentField / 100 / zahlweise;
      ersteTilgung = darlehenshoehe * tilgung;
    } else {
      alert("Bitte geben Sie die Rate oder die Tilgung an.");
      return;
    }

    let restschuld =
      darlehenshoehe -
      (ersteTilgung * (Math.pow(1 + zinssatz, laufzeit) - 1)) / zinssatz;

    if (restschuld < 0) {
      restschuld = 0;
    }

    setBerechneteRestschuld(restschuld);
  }
  /*
    var restschuld = watch().restschuldObjektzuordnungDarlehen || 0;
    var tilgungBetrag = watch().tilgungEuroObjektzuordnungDarlehen;

    console.log(watch().voraussichtlichSchuldenfreiObjektzuordnungDarlehen+" date")

    if ((typeof watch().voraussichtlichSchuldenfreiObjektzuordnungDarlehen === "undefined" || watch().voraussichtlichSchuldenfreiObjektzuordnungDarlehen === '') && tilgungBetrag && restschuld && watch().zahlweiseObjektzuordnungDarlehen && watch().standVomObjektzuordnungDarlehen) {
        var zahlweiseFactor = 1;
        if (watch().zahlweiseObjektzuordnungDarlehen === "MONATLICH" || watch().zahlweiseObjektzuordnungDarlehen === "112") {
            zahlweiseFactor = 12;
        } else if (watch().zahlweiseObjektzuordnungDarlehen === "HALBJAEHRLICH" || watch().zahlweiseObjektzuordnungDarlehen === "12") {
            zahlweiseFactor = 2;
        } else if (watch().zahlweiseObjektzuordnungDarlehen === "QUARTAL" || watch().zahlweiseObjektzuordnungDarlehen === "14") {
            zahlweiseFactor = 4;
        }
      }
        var timestopay = restschuld / tilgungBetrag;
        var yearstopay = timestopay / zahlweiseFactor;
        console.log(watch().timestopay+" timestopay")
        console.log(watch().zahlweiseFactor+" zahlweise")

        // add yearstopay to standvom
        console.log(watch().standVomObjektzuordnungDarlehen)
        console.log(watch().standVomObjektzuordnungDarlehen.replace(6,4)+" "+yearstopay)
        console.log(yearstopay)
        setValue("voraussichtlichSchuldenfreiObjektzuordnungDarlehen",watch().standVomObjektzuordnungDarlehen.replace(6,4)+yearstopay)
    }
*/

  return (
    <>
      <p>
        Berechnete Restschuld:{" "}
        {berechneteRestschuld.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") +
          " €"}
      </p>
      <Button
        onClick={() => {
          restschuldListener();
        }}
      >
        Restschuld berechnen
      </Button>
    </>
  );
} //534523
function AddBankVerbindung({ renderAnzahlVp }) {
  const { anzahlVp, setAnzahlVp } = useContext(Context);
  function addBank() {
    setAnzahlVp(anzahlVp + 1);
    renderAnzahlVp(anzahlVp);
  }
  return (
    <Button
      laben="Neue Bankdaten"
      onClick={() => addBank()}
      startIcon={<i class="fa fa-user-plus fa-lg" />}
    ></Button>
  );
}
function SumbAV({ watch }) {
  const { setBeitragGesamtbAV } = useContext(Context);
  let sum =
    parseInt(watch().beitragANAnteilBeitragBetrieblicheAltersversorgung) +
    parseInt(watch().beitragAGAnteilBeitragBetrieblicheAltersversorgung) +
    parseInt(watch().VWLArbeitgeberbeitragBetrieblicheAltersversorgung) +
    parseInt(watch().VWLArbeitnehmerbeitragBetrieblicheAltersversorgung);

  useEffect(() => {
    setBeitragGesamtbAV(sum);
  }, [
    watch("beitragANAnteilBeitragBetrieblicheAltersversorgung"),
    watch("beitragAGAnteilBeitragBetrieblicheAltersversorgung"),
    watch("VWLArbeitgeberbeitragBetrieblicheAltersversorgung"),
    watch("VWLArbeitnehmerbeitragBetrieblicheAltersversorgung"),
  ]);
  return (
    <div style={{ height: "45px" }}>
      <p
        style={{
          color: "#3f51b5",
          top: "0",
          left: "0",
          fontSize: "1rem",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          marginTop: "0px",
        }}
      >
        Beitrag Gesamt (inkl. BU)
      </p>
      <p>{sum}</p>
    </div>
  );
}
// top: 0; left: 0; position: absolute; font-size: 1rem;
//font-family: "Roboto", "Helvetica", "Arial", sans-serif;
//font-weight: 400; line-height: 1; letter-spacing: 0.00938em;
function UnfallCalcVollinvaliditaet({ watch, setValue, functionName }) {
  const personNumber = functionName.substring(
    functionName.length - 1,
    functionName.length
  );
  function calculateVollinvaliditaet(personNumber) {
    let output = watch(functionName);
    let grundsummeValue = 0;
    let progressionValue = 0;
    switch (personNumber) {
      case "l":
        progressionValue = watch("progressionVersichertePersonUnfall");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall");
        break;
      case "2":
        progressionValue = watch("progressionVersichertePersonUnfall2");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall2");
        break;
      case "3":
        progressionValue = watch("progressionVersichertePersonUnfall3");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall3");
        break;
      case "4":
        progressionValue = watch("progressionVersichertePersonUnfall4");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall4");
        break;
      case "5":
        progressionValue = watch("progressionVersichertePersonUnfall5");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall5");
        break;
      case "6":
        progressionValue = watch("progressionVersichertePersonUnfall6");
        grundsummeValue = watch("grundsummeVersichertePersonUnfall6");
        break;
    }
    if(grundsummeValue && progressionValue){
output = grundsummeValue * (progressionValue * 0.01)
} else {
  output = 0
}
    return output;
  }
  return (
    <div>
  <Typography className="MuiFormLabel-root" sx={{color:"black !important",marginTop:"20px !important"}}>{"Vollinvalidität (€): "+ calculateVollinvaliditaet(personNumber).toFixed(2)}</Typography>

  </div>);
}
function FunctionMapper({
  functionName,
  variableName,
  watch,
  setValue,
  renderAnzahlVp,
  tarifTypeIdFromCardState,
  value,
}) {
  let hasVollinvaliditaet = false;
  console.log(functionName)
  if (functionName.includes("vollinvaliditaetVersichertePersonUnfall")) {
    hasVollinvaliditaet = true;
  }
  return (
    <div>
      {hasVollinvaliditaet ? (
        <UnfallCalcVollinvaliditaet
          watch={watch}
          setValue={setValue}
          functionName={functionName}
        />
      ) : null}
      {functionName === "deleteArbeitgeber" ? (
        <DeleteArbeitgeber index={variableName} />
      ) : null}
      {functionName === "addBank" ? (
        <AddBankVerbindung renderAnzahlVp={renderAnzahlVp} />
      ) : null}
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
        <RentenPrognose
          watch={watch}
          setValue={setValue}
          tarifTypeIdFromCardState={tarifTypeIdFromCardState}
        />
      ) : null}
      {functionName === "deleteBankverbindung" ? (
        <DeleteBankdaten
          variableName={variableName}
          renderAnzahlVp={renderAnzahlVp}
        />
      ) : null}
      {functionName === "numberJahresbrutto" ? (
        <JahresBrutto watch={watch} setValue={setValue} />
      ) : null}
      {functionName === "restschuldBerechnen" ? (
        <RestschuldBerechnen watch={watch} setValue={setValue} value={value} />
      ) : null}
      {functionName === "tilgungEuroObjektzuordnungDarlehen" ? (
        <Tilgung watch={watch} />
      ) : null}
      {functionName === "beitragGesamtBeitragBetrieblicheAltersversorgung" ? (
        <SumbAV watch={watch} />
      ) : null}
    </div>
  );
}

export default FunctionMapper;
