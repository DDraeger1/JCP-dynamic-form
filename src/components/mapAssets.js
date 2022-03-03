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
export function formatMandantName(mandantGroup, kindAnzahl, setKindAnzahl) {
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
export function mapIncomingData(fieldName,assets){
  let output =[]
  if(fieldName === "zugeordneteImmobilieObjektzuordnungDarlehen"){
    assets.map((asset)=>{
if(asset.tarifTypeId === "IMMOBILIENBESTAND")
output.push({value: asset.objektnotizen, label: asset.objektnotizen})
})
}
  return output
}