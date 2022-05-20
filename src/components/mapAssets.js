import { MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
export function mapAssets(assets) {
  let ids = [];
  let nonVersicherungsnehmerIdIndex = [];
  let nonVersichertePersonIdIndex = [];
  assets.forEach((asset, index) => {
    if (asset.versicherungsnehmerId !== undefined) {
      ids.push({
        id: asset.versicherungsnehmerId,
        tarifTypeId: asset.tarifTypeId,
        vertragId: asset.id,
      });
    } else if (asset.versicherungsnehmerBeide) {
      ids.push({
        id: false,
        tarifTypeId: asset.tarifTypeId,
        vertragId: asset.id,
      });
    }

    /* else{
    ids.push("undefined")
    nonVersicherungsnehmerIdIndex.push(index)
}
})

nonVersicherungsnehmerIdIndex.forEach((index)=>{
if(assets[index].versichertePersonId !== undefined){
    ids.splice(index, 1,{id:assets[index].versichertePersonId,tarifTypeId:assets[index].tarifTypeId})
} else{
    nonVersichertePersonIdIndex.push(index)
}
})
nonVersichertePersonIdIndex.forEach((index)=>{
    if(assets[index].versicherungsnehmerBeide){
        ids.splice(index, 1,{id:"versicherungsnehmerBeide",tarifTypeId:assets[index].tarifTypeId})
    }*/
  });

  //ids.indexOf(asset.analyseId) === -1 ? ids.push(asset.analyseId) : console.log("This item already exists");
  return ids;
}

export function redefineCard(ids, mandantIndex, tarifTypeId, mandantGroup) {
  let entryFound = false;
  let vertragId = "none";
  if (mandantIndex || mandantIndex === 0) {
    ids.forEach((mandantEntry, index) => {
      if (
        mandantGroup[mandantIndex].mandant.id === mandantEntry.id &&
        tarifTypeId === mandantEntry.tarifTypeId
      ) {
        entryFound = true;
        vertragId = mandantEntry.vertragId;
      }
    });

    if (!entryFound) {
      vertragId = "newVertrag";
    }
  } else {
    ids.forEach((vertrag, index) => {
      if (tarifTypeId === vertrag.tarifTypeId && vertrag.id === false) {
        entryFound = true;
        vertragId = vertrag.vertragId;
      }
      if (!entryFound) {
        vertragId = "newVertrag";
      }
    });
  }

  return vertragId;
}
export function checkForKind(mandantGroup, isKindNeeded) {
  let addMenuItem = false;

  if (mandantGroup.art === "MANDANT") {
    addMenuItem = true;
  }
  if (mandantGroup.art === "PARTNER") {
    addMenuItem = true;
  }

  if (mandantGroup.art === "KIND") {
    if (isKindNeeded === "true") {
      addMenuItem = true;
    } else {
      addMenuItem = false;
    }
  }

  return addMenuItem;
}
export function formatMandantName(mandantGroup) {
  let mandantName;

  if (mandantGroup.art === "MANDANT") {
    mandantName =
      "M: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }
  if (mandantGroup.art === "PARTNER") {
    mandantName =
      "P: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }

  if (mandantGroup.art === "KIND") {
    mandantName =
      "K: " +
      mandantGroup.mandant.vorname +
      " " +
      mandantGroup.mandant.nachname;
  }
  return mandantName;
}
export function mapIncomingData(fieldName, assets) {
  let output = [];
  if (fieldName === "zugeordneteImmobilieObjektzuordnungDarlehen") {
    assets.map((asset) => {
      if (asset.tarifTypeId === "IMMOBILIENBESTAND")
        output.push({ value: asset.objektnotizen, label: asset.objektnotizen });
    });
  }
  return output;
}

export function setName(name, tarifType) {
  function tarifTypeCheck(tarifType) {
    let output = "";
    switch (tarifType) {
      case "UNFALL":
        output = "Unfallversicherung";
        break;
      case "BU":
        output = "BU / EU / GF";
        break;
      case "DREADDISEASE":
        output = "DD / Schwere Krankheit";
        break;
      case "RISIKO":
        output = "Todesfall";
        break;
      case "RUERUP":
        output = "Basisrente/Ruerup";
        break;
      case "RIESTER":
        output = "Förderrente/Riester";
        break;
      case "DIREKTZUSAGE":
        output = "bAV - Direktzusage";
        break;
      case "PENSIONSFONDS_3":
        output = "bAV - Pensionfonds (§ 3 Nr. 63 EStG)";
        break;
      case "bAVNEW":
        output = "bAV";
        break;
      case "DIREKT_40":
        output = "bAV - Direktversicherung (§ 40 Nr. 63 EStG)";
        break;
      case "PENSIONSKASSE_3":
        output = "bAV - PK (§ 3,63 EStG)";
        break;
      case "PENSIONSKASSE_40":
        output = "bAV - PK (§ 40b Nr. 63 EStG)";
        break;
      case "ZUSATZVERSORGUNGSKASSE":
        output = "bAV - Zusatzversorgungskasse";
        break;
      case "UNTERSTUETZUNGSKASSE":
        output = "bAV - Unterstützungskasse";
        break;
      case "DIREKT_3":
        output = "bAV - Direktversicherung (§ 3 Nr. 63 EStG)";
        break;
      case "GESETZLICHE_AV":
        output = "GRV";
        break;
      case "GESETZLICHE_KRANKEN":
        output = "Gesetzliche Kranken-/Pflegeversicherung";
        break;
      case "PRIVATHAFTPFLICHT":
        output = "Privathaftpflicht";
        break;
      case "HUNDEHALTERHAFTPFLICHT":
        output = "Hundehalterhaftpflicht";
        break;
      case "PFERDEHALTERHAFTPFLICHT":
        output = "Pferdehalterpflicht";
        break;
      case "HAUSRAT":
        output = "Hausrat";
        break;
      case "RECHTSSCHUTZ":
        output = "Rechtsschutz";
        break;
      case "WOHNGEBAEUDE":
        output = "Wohngebäude";
        break;
      case "KFZ":
        output = "KFZ";
        break;
      case "EINNAHMEN":
        output = "Einnahmen";
        break;
      case "EINKOMMEN_GEHALT":
        output = "Einkommen Gehalt";
        break;
      case "EINKOMMEN_MINIJOB":
        output = "Einkommen aus geringfügiger Beschäftigung (Minijob)";
        break;
      case "EINKOMMEN_SELBSTAENDIGER":
        output = "Einkommen aus selbstständiger Erwerbstätigkeit";
        break;
      case "AUSGABEN":
        output = "Ausgaben";
        break;
      case "AUTOMOBILCLUB":
        output = "Automobilclub";
        break;
      case "SONSTIGE_ZAHLUNG":
        output = "Sonstige Zahlung";
        break;
      case "KONSUMKREDIT":
        output = "Konsumkredit";
        break;
      case "DARLEHEN":
        output = "Darlehen";
        break;
      case "BANKPRODUKTE":
        output = "Bankprodukte";
        break;
      case "VWL_BAUSPAREN":
        output = "VWL und Bausparen";
        break;
      case "IMMOBILIENBESTAND":
        output = "Immobilienbestand";
        break;
      case "SACHWERT":
        output = "Sachwert";
        break;
      case "BETEILIGUNGEN":
        output = "Beteiligung";
        break;
      case "PFLEGEKOSTEN":
        output = "Private Pflegeversicherung";
        break;
      case "PFLEGERENTEN":
        output = "Private Pflegeversicherung";
        break;
      case "PFLEGETAGEGELD":
        output = "Private Pflegeversicherung";
        break;
      case "KVV":
        output = "Private Pflegeversicherung";
        break;
      case "KVZ":
        output = "KV Zusatz";
        break;
      case "KAPITALLEBEN":
        output = "Kapitalleben";
        break;
      case "BEAMTENBEIHILFE":
        output = "Beamtenbeihilfe";
        break;
        break;
      case "BERUFSSTAENDISCHE_VORSORGE":
        output = "Berufsständische Vorsore";
        break;
        break;
      case "BEAMTENVERSORGUNG":
        output = "Beamtenversorgung";
        break;
        break;
      case "BAUHERRENHAFTPFLICHT":
        output = "Bauherrenhaftpflicht";
        break;
        break;
      case "WASSERSPORTHAFTPFLICHT":
        output = "Wassersporthaftpflicht";
        break;
        break;
      case "GEWAESSERSCHADENHAFTPFLICHT":
        output = "Gewässerschadenhaftpflicht";
        break;
      case "JAGDHAFTPFLICHT":
        output = "Jagdhaftpflicht";
        break;
      case "PRIVATRENTE":
        output = "Privatrente PRV";
        break;
      case "FONDSLEBEN":
        output = "Privatrente FLV";
        break;
      case "FONDSRENTEN":
        output = "Privatrente FRV";
        break;
      case "RENTE":
        output = "Rente";
        break;
      case "STROM":
        output = "Strom";
        break;
      case "GAS":
        output = "Gas";
        break;
      default:
        output = tarifType;
        break;
    }
    return output;
  }
  let output = "";
  if (typeof name !== "undefined") {
    if (name.length === 0) {
      //"RISIKO", "BU", "DREADDISEASE","UNFALL"
      output = tarifTypeCheck(tarifType);
    } else {
      output = name;
    }
  }
  if (typeof name === "undefined") {
    //"RISIKO", "BU", "DREADDISEASE","UNFALL"
    output = tarifTypeCheck(tarifType);
  }
  return output;
}
