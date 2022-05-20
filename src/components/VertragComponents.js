import Button from "@mui/material/Button";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

function VertragComponents({
  isNotFiltered,
  toggleOpenVertragHinzufuegen,
  setCard,
  localSearchString,
}) {
  const {
    setVertragId,
    toggleOpenDialog,
    searchString,
    filterContent,
    setFilterContent,
    colorProperties,
  } = useContext(Context);
  // filterSearch("", "arbeitskraftabsicherung", true)
  const [vertragObjekt, setVertragObjekt] = useState({
    arbeitskraftabsicherung:[],
    altersvorsorge:[],
    einnahmenUndAusgaben:[],
    gesundheit:[],
    vermoegenUndVerbindlichkeiten:[],
    pflege:[],
    vermoegenssicherung:[]
  });
  const [altersvorsorge, setAltersvorsorge] = useState([]);
  function initForm(tarifType) {
    setCard(tarifType);
    setVertragId("newVertrag");
    toggleOpenDialog(true);
    toggleOpenVertragHinzufuegen(false);
  }
  const vertraege = [
    {
      name: "Todesfall",
      type: "arbeitskraftabsicherung",
      html: (
        <Button
          onClick={() => initForm("RISIKO")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-bed fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Todesfall
        </Button>
      ),
    },
    {
      name: "BU / EU / GF",
      type: "arbeitskraftabsicherung",
      html: (
        <Button
          onClick={() => initForm("BU")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-wheelchair fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          BU / EU / GF
        </Button>
      ),
    },
    {
      name: "DD / Schwere Krankheiten",
      type: "arbeitskraftabsicherung",
      html: (
        <Button
          onClick={() => initForm("DREADDISEASE")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-bug fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          DD / Schwere Krankheiten
        </Button>
      ),
    },
    {
      name: "Unfallversicherung",
      type: "arbeitskraftabsicherung",
      html: (
        <Button
          onClick={() => initForm("UNFALL")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-accident fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{ width: "230px" }}
        >
          Unfallversicherung
        </Button>
      ),
    },
    {
      name: "Basisrente/Ruerup",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("RUERUP")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                marginLeft: "2px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-oldru fa-lg"
              ></i>
            </div>
          }
          style={{ width: "218px" }}
          className="selectNewVertrag"
        >
          Basisrente/Ruerup
        </Button>
      ),
    },
    {
      name: "Förderrente/Rieser",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("RIESTER")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                marginLeft: "2px",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-oldri fa-lg"
              ></i>
            </div>
          }
          style={{ width: "225px" }}
          className="selectNewVertrag"
        >
          Förderrente/Rieser
        </Button>
      ),
    },
    {
      name: "bAV",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("bAVNEW")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft: "2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-factory fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          bAV
        </Button>
      ),
    },
    {
      name: "Private Altersvorsorge",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("GESETZLICHE_AV")} //Richig? TODO
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft: "2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-old fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Private Altersvorsorge
        </Button>
      ),
    },
    {
      name: "GRV",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("PRIVATRENTE")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                marginLeft: "2px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-paragraph fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          GRV
        </Button>
      ),
    },
    {
      name: "Rente",
      type: "altersvorsorge",
      html: (
        <Button
          onClick={() => initForm("RENTE")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                marginLeft: "2px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-old fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Rente
        </Button>
      ),
    },
    {
      name: "Einkommen / Gehalt",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("EINKOMMEN_GEHALT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                  width: "258px",
                }}
                class="icon icon-fa-font-wallet fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Einkommen / Gehalt
        </Button>
      ),
    },
    {
      name: "Einnahmen",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("EINNAHMEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-cash fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Einnahmen
        </Button>
      ),
    },
    {
      name: "Einkommen aus geringfügiger Beschäftigung",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("EINKOMMEN_MINIJOB")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-job fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Einkommen aus geringfügiger Beschäftigung
        </Button>
      ),
    },
    {
      name: "Einkommen aus selbstständiger Beschäftigung",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("EINKOMMEN_SELBSTAENDIGER")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-work fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Einkommen aus selbstständiger Beschäftigung
        </Button>
      ),
    },
    {
      name: "Lebensunterhaltskosten",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("AUSGABEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="fa fa-shopping-cart fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "278px",
          }}
        >
          Lebensunterhaltskosten
        </Button>
      ),
    },
    {
      name: "Wohnsituation",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("WOHNSITUATION")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-apartment fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Wohnsituation
        </Button>
      ),
    },
    {
      name: "Gas",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("GAS")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="fa fa-fire fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Gas
        </Button>
      ),
    },
    {
      name: "Strom",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("STROM")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plug fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Strom
        </Button>
      ),
    },
    {
      name: "Sonstige Zahlungsverpflichtigungen",
      type: "einnahmenUndAusgaben",
      html: (
        <Button
          onClick={() => initForm("SONSTIGE_ZAHLUNG")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-cash fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "298px",
          }}
        >
          Sonstige Zahlungsverpflichtigungen
        </Button>
      ),
    },
    {
      name: "Pflege",
      type: "pflege",
      html: (
        <Button
          onClick={() => initForm("PFLEGEKOSTEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-doctor fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Pflege
        </Button>
      ),
    },
    {
      name: "Kredit",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("KONSUMKREDIT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="fa fa-credit-card fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Kredit
        </Button>
      ),
    },
    {
      name: "Darlehen",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("DARLEHEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-80%",
                }}
                class="icon icon-fa-font-safe fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Darlehen
        </Button>
      ),
    },
    {
      name: "Bankprodukte",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("BANKPRODUKTE")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-bank fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Bankprodukte
        </Button>
      ),
    },
    {
      name: "Vwl und Bausparen",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("VWL_BAUSPAREN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-home fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Vwl und Bausparen
        </Button>
      ),
    },
    {
      name: "Immobilienbestand",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("IMMOBILIENBESTAND")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-building fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "230px",
          }}
        >
          Immobilienbestand
        </Button>
      ),
    },
    {
      name: "Sachwert",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("SACHWERT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-building fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "160px",
          }}
        >
          Sachwert
        </Button>
      ),
    },
    {
      name: "Beteiligungen / AiF",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("BETEILIGUNGEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-pie fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Beteiligungen / AiF
        </Button>
      ),
    },
    {
      name: "Investment",
      type: "vermoegenUndVerbindlichkeiten",
      html: (
        <Button
          onClick={() => initForm("INVESTMENT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-file fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Investment (to be added LAST)
        </Button>
      ),
    },
    {
      name: "PKV",
      type: "gesundheit",
      html: (
        <Button
          onClick={() => initForm("KVV")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "160px",
          }}
        >
          PKV
        </Button>
      ),
    },
    {
      name: "KV Zusatz",
      type: "gesundheit",
      html: (
        <Button
          onClick={() => initForm("KVZ")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-plaster fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          KV Zusatz
        </Button>
      ),
    },
    {
      name: "GKV",
      type: "gesundheit",
      html: (
        <Button
          onClick={() => initForm("GESETZLICHE_KRANKEN")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-ambulance fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "160px",
          }}
        >
          GKV
        </Button>
      ),
    },
    {
      name: "Privathaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("PRIVATHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-cop fa-lg"
              ></i>
            </div>
          }
          style={{ width: "222px" }}
          className="selectNewVertrag"
        >
          Privathaftpflicht
        </Button>
      ),
    },
    {
      name: "Hausrat",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("HAUSRAT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-bike fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
          sx={{
            width: "180px",
          }}
        >
          Hausrat
        </Button>
      ),
    },
    {
      name: "Wohngebäude",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("WOHNGEBAEUDE")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-thunder fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Wohngebäude
        </Button>
      ),
    },
    {
      name: "Rechtschutz",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("RECHTSSCHUTZ")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-legal fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Rechtschutz
        </Button>
      ),
    },
    {
      name: "KFZ-Versicherung",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-car fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          KFZ-Versicherung
        </Button>
      ),
    },
    {
      name: "Automobilclub",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("AUTOMOBILCLUB")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "middle",
                }}
                class="fa fa-car fa-lg"
              ></i>
            </div>
          }
          className="selectNewVertrag"
        >
          Automobilclub
        </Button>
      ),
    },
    {
      name: "Hundehalterhaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("HUNDEHALTERHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-dog fa-lg"
              ></i>
            </div>
          }
          style={{ width: "278px" }}
          className="selectNewVertrag"
        >
          Hundehalterhaftpflicht
        </Button>
      ),
    },
    {
      name: "Pferdehalterpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("PFERDEHALTERHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-horse fa-lg"
              ></i>
            </div>
          }
          style={{ width: "238px" }}
          className="selectNewVertrag"
        >
          Pferdehalterpflicht
        </Button>
      ),
    },
    {
      name: "Jagdhaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("JAGDHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-hunter fa-lg"
              ></i>
            </div>
          }
          style={{ width: "238px" }}
          className="selectNewVertrag"
        >
          Jagdhaftpflicht
        </Button>
      ),
    },
    {
      name: "Bauherrenhaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("BAUHERRENHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-work fa-lg"
              ></i>
            </div>
          }
          style={{ minWidth: "258px" }}
          className="selectNewVertrag"
        >
          Bauherrenhaftpflicht
        </Button>
      ),
    },
    {
      name: "Wassersporthaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("WASSERSPORTHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-boat fa-lg"
              ></i>
            </div>
          }
          style={{ width: "270px" }}
          className="selectNewVertrag"
        >
          Wassersporthaftpflicht
        </Button>
      ),
    },
    {
      name: "Gewässerschadenhaftpflicht",
      type: "vermoegenssicherung",
      html: (
        <Button
          onClick={() => initForm("GEWAESSERSCHADENHAFTPFLICHT")}
          startIcon={
            <div
              style={{
                backgroundColor: "#565656 ",
                height: "52px",
                width: "52px",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {" "}
              <i
                style={{
                  color: "white",
                  marginTop: "15px",
                  verticalAlign: "-65%",
                }}
                class="icon icon-fa-font-oil fa-lg"
              ></i>
            </div>
          }
          style={{ width: "320px" }}
          className="selectNewVertrag"
        >
          Gewässerschadenhaftpflicht
        </Button>
      ),
    },
  ];
  console.log(altersvorsorge);
  function filterSearch() {
    let output = [];
    let arbeitskraftabsicherungTemp = [];
    let altersvorsorgeTemp = [];
    let einnahmenUndAusgabenTemp =[]
    let gesundheitTemp=[]
    let vermoegenUndVerbindlichkeitenTemp=[]
    let pflegeTemp=[]
    let vermoegenssicherungTemp=[]

let vertragNameTemp = ""
    let outputType = [];
    if (localSearchString.length !== 0) {
      vertraege.map((vertrag) => {
        if (vertrag.name.toUpperCase().includes(localSearchString.toUpperCase())) {
          if (vertrag.type === "arbeitskraftabsicherung") {
            arbeitskraftabsicherungTemp.push(vertrag.html);
          }
          if (vertrag.type === "altersvorsorge") {
            altersvorsorgeTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
          if (vertrag.type === "einnahmenUndAusgaben") {
            einnahmenUndAusgabenTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
          if (vertrag.type === "vermoegenUndVerbindlichkeiten") {
            vermoegenUndVerbindlichkeitenTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
          if (vertrag.type === "pflege") {
            pflegeTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
          if (vertrag.type === "vermoegenssicherung") {
            vermoegenssicherungTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
          if (vertrag.type === "gesundheit") {
            gesundheitTemp.push(vertrag.html);
            console.log(altersvorsorge)
          }
        }
      });
      setVertragObjekt({
        ...vertragObjekt,
        arbeitskraftabsicherung:arbeitskraftabsicherungTemp,
        altersvorsorge:altersvorsorgeTemp,
        einnahmenUndAusgaben:einnahmenUndAusgabenTemp,
        gesundheit:gesundheitTemp,
        vermoegenUndVerbindlichkeiten:vermoegenUndVerbindlichkeitenTemp,
        pflege:pflegeTemp,
        vermoegenssicherung:vermoegenssicherungTemp
      });
    } else {
      vertraege.map((vertrag) => {
        if (vertrag.type === "arbeitskraftabsicherung") {
          arbeitskraftabsicherungTemp.push(vertrag.html);
        }
        if (vertrag.type === "altersvorsorge") {
          altersvorsorgeTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
        if (vertrag.type === "einnahmenUndAusgaben") {
          einnahmenUndAusgabenTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
        if (vertrag.type === "vermoegenUndVerbindlichkeiten") {
          vermoegenUndVerbindlichkeitenTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
        if (vertrag.type === "pflege") {
          pflegeTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
        if (vertrag.type === "vermoegenssicherung") {
          vermoegenssicherungTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
        if (vertrag.type === "gesundheit") {
          gesundheitTemp.push(vertrag.html);
          console.log(altersvorsorge)
        }
      });
      setVertragObjekt({
        ...vertragObjekt,
        arbeitskraftabsicherung:arbeitskraftabsicherungTemp,
        altersvorsorge:altersvorsorgeTemp,
        einnahmenUndAusgaben:einnahmenUndAusgabenTemp,
        gesundheit:gesundheitTemp,
        vermoegenUndVerbindlichkeiten:vermoegenUndVerbindlichkeitenTemp,
        pflege:pflegeTemp,
        vermoegenssicherung:vermoegenssicherungTemp
      });
    }

    return output;
  }
  useEffect(() => {
    filterSearch(isNotFiltered)
  }, [localSearchString]);
  return (
    <div>
      {vertragObjekt.arbeitskraftabsicherung.length === 0 ?
      null
      :
        <div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Arbeitskraftabsicherung
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.arbeitskraftabsicherung.map((vertrag) => {
          return vertrag;
        })}
      </div>
      {vertragObjekt.altersvorsorge.length === 0 ?
      null
      :<div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          {"Altersvorsorge"}
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.altersvorsorge.map((vertrag) => {
          return vertrag
        })}
      </div>
      {vertragObjekt.einnahmenUndAusgaben.length === 0 ?
      null
      :<div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Einnahmen und Ausgaben
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.einnahmenUndAusgaben.map((vertrag) => {
          return vertrag
        })}
      </div>
      {vertragObjekt.pflege.length === 0 ?
      null
      :<div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Pflege
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.pflege.map((vertrag) => {
          return vertrag
        })}
      </div>
     {vertragObjekt.vermoegenUndVerbindlichkeiten.length === 0 ?
      null
      : <div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Vermögen und Verbindlichkeiten
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.vermoegenUndVerbindlichkeiten.map((vertrag) => {
          return vertrag
        })}
      </div>
     {vertragObjekt.gesundheit.length === 0 ?
      null
      : <div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Gesundheit
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.gesundheit.map((vertrag) => {
          return vertrag
        })}
      </div>
      {vertragObjekt.vermoegenssicherung.length === 0 ?
      null
      :<div
        className="balken"
        style={{ backgroundColor: colorProperties.COLOR2 }}
      >
        <Typography
          variant="h6"
          style={{ color: colorProperties.COLOR1 }}
          className="headingVertragHinzufuegen"
        >
          Vermögenssicherung
        </Typography>
      </div>}
      <div className="vertragBox">
        {vertragObjekt.vermoegenssicherung.map((vertrag) => {
          return vertrag
        })}
      </div>
    </div>
  );
}

export default VertragComponents;
