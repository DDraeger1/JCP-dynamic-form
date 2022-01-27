let sonstigeEinnahmen = {
  art: "",
  ausserordentlicheEinkuenfte: false,
  beitrag: 0,
  betrag: 0,
  gewerbebetrieb: false,
  jahresBeitrag: 0,
  kapitalvermogen: false,
  landUndForstwirtschaft: false,
  monatsBeitrag: 0,
  nichtselbststaendigeTaetigkeit: false,
  notizen: "",
  selbststaendigeTaetigkeit: false,
  sonstigeEinkuenfte: "",
  sonstigeEinkuenfte22Renten: false,
  steuerfreieEinnahmen: false,
  steuerfreieEinnahmenUnterProgressionsvorbehalt: false,
  vermietungUndVerpachtung: false,
  versicherungsbeginn: "",
  versicherungsende: "",
  zahlweise: "",
};

let einkommenGehalt = {
  angebotsType: "VERTRAG",
  beitrag: 0,
  bonuszahlungAuszahlungsmonat: "",
  dienstwagenGesamtbrutto: "",
  dienstwagenSozialversicherung: "",
  dienstwagenSteuer: "",
  externalProduktId: "",
  fahrtkostenSozialversicherung: "",
  fahrtkostenSteuer: "",
  feiertagszuschlagGesamtbrutto: "",
  feiertagszuschlagSozialversicherung: "",
  feiertagszuschlagSteuer: "",
  gesellschaft: "",
  gewinnbeteiligungAuszahlungsmonat: "", 
  grundgehalt: 0,
  grundgehaltGesamtbrutto: "",
  grundgehaltSozialversicherung: "",
  grundgehaltSteuer: "",
  jahresBeitrag: 0,
  jobradGesamtbrutto: "",
  jobradSozialversicherung: "",
  jobradSteuer: "",
  kitaGesamtbrutto: "",
  kitaSozialversicherung: "",
  kitaSteuer: "",
  lastModified: "",
  lohnAnzahlProJahr: 0,
  lohnBrutto: 0,
  lohnBruttoProJahr: 0,
  monatsBeitrag: 0,
  nachtzuschlagGesamtbrutto: "",
  nachtzuschlagSozialversicherung: "",
  nachtzuschlagSteuer: "",
  notizen: "",
  provisionGesamtbrutto: "",
  provisionSozialversicherung: "",
  provisionSteuer: "",
  sachbezugGesamtbrutto: "",
  sachbezugSozialversicherung: "",
  sachbezugSteuer: "",sonstigerAbzug:"",
  sonstigesAuszahlungsmonat: "",
  sonstigesBruttoGesamtbrutto: "",
  sonstigesBruttoSozialversicherung: "",
  sonstigesBruttoSteuer: "",
  tarifBezeichnung: "",
  tarifTypeId: "EINKOMMEN_GEHALT",
  urlaubsgeldAuszahlungsmonat: "Juni",
  variablerBezugGesamtbrutto: "",
  variablerBezugSozialversicherung: "",
  variablerBezugSteuer: "",
  versicherungsnehmerId: "",
  vwlGesamtbrutto: "",
  vwlSozialversicherung: "",
  vwlSteuer: "",
  weihnachtsgeldAuszahlungsmonat: "",
};
let einkommenGeringverdiener = {
  eigenbeitraegeZurSV: false,
  einkommen: 0,
  anzahlMonateProJahr: 0,
  einkommen: 0,
};
let einkommenSelbststaendig = {
  beitrag: 0,
  jaehrlichVersteuerndesEinkommen: 0,
  jaehrlicherGewinnNachSteuer: 0,
  jaehrlichesEinkommenGewerbebetrieb: 0,
  jahresBeitrag: 0,
  monatlichesEinkommenGewerbebetrieb: 0,
  monatsBeitrag: 0,
  umsatzExklSteuer: 0,
  umsatzInklSteuer: 0,
};
let ausgaben = {
  beitrag: 0,
  jahresBeitrag: 0,
  kostenArzt: 0,
  kostenBus: 0,
  kostenFreizeit: 0,
  kostenHausiere: 0,
  kostenHobbies: 0,
  kostenKfz: 0,
  kostenKfzKraftstoff: 0,
  kostenKfzSteuer: 0,
  kostenKleidung: 0,
  kostenKonsum: 0,
  kostenKosmetik: 0,
  kostenMusikschule: 0,
  kostenSchule: 0,
  kostenSonstiges: 0,
  kostenStrom: 0,
  kostenTV: 0,
  kostenTaschengeld: 0,
  kostenUnterhalt: 0,
  kostenVerein: 0,
  kostenZeitungen: 0,
  lebenshaltung: 0,
  monatsBeitrag: 0,
  nebenkosten: 0,
  tarifTypeId: "AUSGABEN",
};

let automobilclub = {
  ngebotsType: "VERTRAG",
  anzahlVersicherterKfz: 0,
  beitrag: 0,
  createdOn: "",
  externalProduktId: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  monatsBeitrag: 0,
  notizen: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsbeginn: "",
  zahlweise: "",
};
let sonstigeZahlungsverpflichtigungen = {
  analyseId: "",
  angebotsType: "",
  art: "",
  beginZahlung: "",
  beitrag: 0,
  endeZahlung: "",
  externalProduktId: "",
  gesellschaft: "",
  jahresBeitrag: 0,
  monatsBeitrag: 0,
  notizen: "",
  rate: 0,
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsnummer: "",
  verwendungszweck: "",
  zahlweise: "",
};
let konsumKredit = {
  anfangshoehe: 0,
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  anschriftWohnhaft3Jahren: false,
  beitrag: 0,
  beschreibung: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  jahresBeitrag: 0,
  leistung: 0,
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  rate: 0,
  restschuld: 0,
  shortDescription: "",
  standVom: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerBeide: false,
  versicherungsnummer: "",
  versicherungssumme: 0,
  verwendung: "",
  vorherigeAnschrift: "",
  zahlweise: "",
  zinssatzTyp: "",
};

let bankprodukte = {
  angebotsType: "",
  anlageart: "",
  anlageartSonstiges: "",
  beitrag: 0,
  eigenvertrag: false,
  einmalbeitrag: 0,
  externalProduktId: "",
  fremdvertrag: false,
  gesellschaft: "",
  jahresBeitrag: 0,
  logoname: "",
  monatsBeitrag: 0,
  notizen: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerBeide: false,
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  wertZum: "",
  zahlweise: "",
};
let vwl = {
  aganteil: 0,
  analyseId: "",
  ananteil: 0,
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  art: "",
  bausparsumme: 0,
  beitrag: 0,
  beschreibung: "",
  besparungDurch: "",
  besparungPercentage: 0,
  comment: "",
  darlehenszins: 0,
  dauerzulagenantrag: false,
  eigenvertrag: false,
  ersparnis: false,
  fremdvertrag: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  guthaben: 0,
  guthabenzins: 0,
  id: "",
  jahresBeitrag: 0,
  lastModified: "0",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  riesterzulage: "",
  riesterzulageLetztmaligBetrag: 0,
  shortDescription: "",
  sparzulageAN: false,
  tarifBezeichnung: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerBeide: false,
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  vwlJaNein: false,
  wop: false,
  zahlweise: "MONATLICH",
};
let immobilienbestand = {
  aktuellerwert: 0,
  baujahr: "",
  beitrag: 0,
  denkmalschutz: false,
  erwerbsjahr: "",
  externalProduktId: "",
  ferienimmobilie: false,
  garantieProQm: 0,
  gesellschaft: "",
  gleitenderNeuwert: 0,
  hasUeberschuss: false,
  hausgeld: 0,
  immobilienart: "",
  jahresBeitrag: 0,
  kaltmiete: 0,
  kaufpreisEuro: 0,
  mietpool: false,
  mietpoolEnde: "",
  monatlicheMieteinkuenfte: 0,
  monatsBeitrag: 0,
  nettobelastungMtlCa: 0,
  notizen: "",
  nutzung: false,
  objektnotizen: "",
  pflegeimmobilie: false,
  restschuld: false,
  stellplatz: false,
  stellplatzKaufpreis: 0,
  stellplatzMiete: 0,
  tarifBezeichnung: "",
  tarifTypeId: "",
  ueberschussMtlCa: 0,
  versicherungsnehmerBeide: false,
  versicherungsnehmerId: "",
  voraussichtlichSchuldenfrei: "",
  wohnflaeche: 0,
  wohnungsnummer: "",
};
let beteiligungenAiF = {
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anlageform: "",
  anlageformSonstige: "",
  beginnJahr: 0,
  beitrag: 0,
  beschreibung: "",
  beteiligungssumme: 0,
  comment: "",
  createdOn: "17.11.2021 13:47:35",
  eigenvertrag: false,
  einmalbeitrag: 0,
  endeJahr: 0,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  prognose: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsnummer: "",
  verwendungszweck: "",
  wert: 0,
  wertZum: "",
  zahlweise: "",
};
let buEuGfk = {
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "VERTRAG",
  art: "EU",
  beitrag: 0,
  beschreibung: "",
  bruttobeitrag: 0,
  comment: "",
  createdOn: "",
  dynamik: true,
  dynamikProzent: 0,
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  renteGarantiert: 0,
  rentenleistung: 0,
  rueckkaufswert: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "BU",
  versichertePersonId: "",
  versichertePersonSonstige: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnummer: "",
  zahlweise: "",
};
let unfall = {
  anzahlVersichertePersonen: 1,
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anzahlVP: 0,
  anzpers: 0,
  beitrag: 0,
  bergungskosten: 0,
  beschreibung: "",
  comment: "",
  dynamik: false,
  dynamik2: false,
  dynamik3: false,
  dynamik4: false,
  dynamik5: false,
  dynamik6: true,
  dynamikProzent: 0,
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  genesungsgeld: 0,
  gesellschaft: "",
  grundsumme: 0,
  id: "",
  invaliditaetssumme: 0,
  jahresBeitrag: 0,
  krankenhaustagegeld: 0,
  krankentagegeld: 0,
  krankentagegeldtag: 0,
  krankentagegeldtag2: 0,
  krankentagegeldtag3: 0,
  krankentagegeldtag4: 0,
  krankentagegeldtag5: 0,
  krankentagegeldtag6: 0,
  lastModified: "",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  operationen: 0,
  progression: 0,
  risikogruppe: "",
  risikogruppe2: "",
  risikogruppe3: "",
  risikogruppe4: "",
  risikogruppe5: "",
  risikogruppe6: "",
  rueckgewaehr: false,
  rueckkaufswert: 0,
  shortDescription: "",
  sonstigeLeistungen: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "0",
  tarifgruppe2: "0",
  tarifgruppe3: "0",
  tarifgruppe4: "0",
  tarifgruppe5: "0",
  tarifgruppe6: "0",
  teilbeitrag: 0,
  teilbeitrag2: 0,
  teilbeitrag3: 0,
  teilbeitrag4: 0,
  teilbeitrag5: 0,
  teilbeitrag6: 0,
  todesfallsumme: 0,
  uebergangsleistung: 0,
  unfallrente: 0,
  unfallrenteAb50Check: false,
  unfallrenteAb50Check2: false,
  unfallrenteAb50Check3: false,
  unfallrenteAb50Check4: false,
  unfallrenteAb50Check5: false,
  unfallrenteAb50Check6: false,
  unfallrenteAb50Euro: 0,
  unfallrenteAbXCheck: false,
  unfallrenteAbXCheck2: false,
  unfallrenteAbXCheck3: false,
  unfallrenteAbXCheck4: false,
  unfallrenteAbXCheck5: false,
  unfallrenteAbXCheck6: false,
  unfallrenteAbXEuro: 0,
  unfallrenteAbXProzent: 0,
  versichertePerson: { id: "", nachname: "", vorname: "" },
  versichertePersonId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnummer: "",
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  zahlweise: "",
};
let todesfall = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  art: "",
  beitrag: 0,
  beitragsanteilBU: 0,
  beitragsbefreiungBU: false,
  beschreibung: "",
  bruttobeitrag: 0,
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  integrierteBuRenten: false,
  integrierteBuRentenBetrag: 0,
  jahresBeitrag: 0,
  lastModified: "",
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  motorradfahrer: false,
  name: "",
  notizen: "",
  raucher: false,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versichertePersonBeide: false,
  versichertePersonSonstige: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  versicherungssummeLineare: false,
  vertragAbgetreten: false,
  zahlweise: "",
};
let schwereKrankheiten = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  auszahlung: "",
  beitrag: 0,
  beschreibung: "",
  bruttobeitrag: 0,
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistungssummeKrankheit: 0,
  leistungssummeKrankheitAuszahlung: "",
  leistungssummeTod: 0,
  leistungssummeTodAuszahlung: "",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  rueckkaufswert: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versichertePersonId: "",
  versichertePersonSonstige: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  zahlweise: "",
};
let privatePflegeversicherung = {
  ambulantEqStationaer: false,
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  art: "",
  beitrag: 0,
  beschreibung: "",
  comment: "",
  createdOn: "",
  dynamik: false,
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistungIn: "",
  leistungProTag: false,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  pflegebahr: false,
  shortDescription: "",
  staatlichGefoerdert: false,
  tarifBezeichnung: "",
  tarifTypeId: "",
  versichertePersonId: "",
  versichertePersonSonstige: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  zahlweise: "",
};
let gesetzlicheKranken = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  beitrag: 0,
  beschreibung: "",
  bonusprogramm: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  gkvLeistungsbonus: 0,
  gkvZusatz: false,
  gkvZusatzBeitrag: 0,
  gkvZusatzsatz: 0,
  id: "",
  jahresBeitrag: 0,
  kTHoehe: 0,
  kTTag: 0,
  kinder: false,
  lastModified: "",
  logoname: "",
  mitKT: false,
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  shortDescription: "",
  status: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsbeginn: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  zusatzleistungen: "",
};
let privateKranken = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anzahlVP: 0,
  art: "0",
  beitrag: 0,
  beitragVP: 0,
  beschreibung: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  einbettzimmer: "",
  einbettzimmer2: "",
  einbettzimmer3: "",
  einbettzimmer4: "",
  einbettzimmer5: "",
  einbettzimmer6: "",
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: true,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  krankentagegeld1: 0,
  krankentagegeld2: 0,
  krankentagegeldtag1: 0,
  krankentagegeldtag2: 0,
  kurtagegeld: 0,
  lastModified: "",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  primaerarztprinzip: false,
  primaerarztprinzip2: false,
  primaerarztprinzip3: false,
  primaerarztprinzip4: false,
  primaerarztprinzip5: false,
  primaerarztprinzip6: false,
  rueckerstattung: "",
  rueckerstattung2: "",
  rueckerstattung3: "",
  rueckerstattung4: "",
  rueckerstattung5: "",
  rueckerstattung6: "",
  sb: 0,
  sbAmbulant: true,
  sbAmbulant2: true,
  sbAmbulant3: true,
  sbAmbulant4: true,
  sbAmbulant5: true,
  sbAmbulant6: true,
  sbStationaer: true,
  sbStationaer2: true,
  sbStationaer3: true,
  sbStationaer4: true,
  sbStationaer5: true,
  sbStationaer6: true,
  sbZahn: true,
  shortDescription: "",
  tarifBezeichnung: "Tarifbezeichnung",
  tarifTypeId: "KVV",
  tarifgruppe: "7634",
  tarifname: "5321",
  tarifname2: "",
  tarifname3: "",
  tarifname4: "",
  tarifname5: "",
  tarifname6: "",
  versichertePersonId: "",
  versichertePersonSonstige: "",
  versicherungsbeginn: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  zahlweise: "",
  zahnbehandlung: 0,
  zahnersatz: 0,
};
let kvZusatz = {
  altersrueckstellungAmbulant: false,
  altersrueckstellungAmbulant2: false,
  altersrueckstellungAmbulant3: false,
  altersrueckstellungAmbulant4: false,
  altersrueckstellungAmbulant5: false,
  altersrueckstellungAmbulant6: false,
  altersrueckstellungKT: false,
  altersrueckstellungKT2: false,
  altersrueckstellungKT3: false,
  altersrueckstellungKT4: false,
  altersrueckstellungKT5: false,
  altersrueckstellungKT6: false,
  altersrueckstellungStationaer: false,
  altersrueckstellungStationaer2: false,
  altersrueckstellungStationaer3: false,
  altersrueckstellungStationaer4: false,
  altersrueckstellungStationaer5: false,
  altersrueckstellungStationaer6: false,
  altersrueckstellungZahn: false,
  altersrueckstellungZahn2: false,
  altersrueckstellungZahn3: false,
  altersrueckstellungZahn4: false,
  altersrueckstellungZahn5: false,
  altersrueckstellungZahn6: false,
  ambulanteOp: false,
  ambulanteOp2: false,
  ambulanteOp3: false,
  ambulanteOp4: false,
  ambulanteOp5: false,
  ambulanteOp6: false,
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anzahlReinigungenProJahr: 0,
  anzahlVP: 0,
  art: "",
  auslandsreiseKV: false,
  auslandsreiseKV2: false,
  auslandsreiseKV3: false,
  auslandsreiseKV4: false,
  auslandsreiseKV5: false,
  auslandsreiseKV6: false,
  beitrag: 0,
  beitragDental: 0,
  beitragKT: 0,
  beitragStationaer: 0,
  beitragsrueckerstattung: "",
  beitragsrueckerstattung2: "",
  beitragsrueckerstattung3: "",
  beitragsrueckerstattung4: "",
  beitragsrueckerstattung5: "",
  beitragsrueckerstattung6: "",
  beschreibung: "",
  brille: 0,
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersatzkrankenhaustagegeld: 0,
  ersparnis: false,
  erstattung: "",
  erstattung2: "",
  erstattung3: "",
  erstattung4: "",
  erstattung5: "",
  erstattung6: "",
  externalProduktId: "",
  fremdvertrag: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  gkvZuzahlungen: "",
  gkvZuzahlungen2: "",
  gkvZuzahlungen3: "",
  gkvZuzahlungen4: "",
  gkvZuzahlungen5: "",
  gkvZuzahlungen6: "",
  heilpraktiker: false,
  heilpraktiker2: false,
  heilpraktiker3: false,
  heilpraktiker4: false,
  heilpraktiker5: false,
  heilpraktiker6: false,
  heilpraktikerLeistung: 0,
  hilfsmittel: false,
  hilfsmittel2: false,
  hilfsmittel3: false,
  hilfsmittel4: false,
  hilfsmittel5: false,
  hilfsmittel6: false,
  hoergeraete: false,
  hoergeraete2: false,
  hoergeraete3: false,
  hoergeraete4: false,
  hoergeraete5: false,
  hoergeraete6: false,
  hufeland: false,
  hufeland2: false,
  hufeland3: false,
  hufeland4: false,
  hufeland5: false,
  hufeland6: false,
  id: "",
  inklAmbulant: false,
  inklAmbulant2: false,
  inklAmbulant3: false,
  inklAmbulant4: false,
  inklAmbulant5: false,
  inklAmbulant6: false,
  inklKHT: false,
  inklKHT2: false,
  inklKHT3: false,
  inklKHT4: false,
  inklKHT5: false,
  inklKHT6: false,
  inklKT: false,
  inklKT2: false,
  inklKT3: false,
  inklKT4: false,
  inklKT5: false,
  inklKT6: false,
  inklStationaer: false,
  inklStationaer2: false,
  inklStationaer3: false,
  inklStationaer4: false,
  inklStationaer5: false,
  inklStationaer6: false,
  inklZahn: false,
  inklZahn2: false,
  inklZahn3: false,
  inklZahn4: false,
  inklZahn5: false,
  inklZahn6: false,
  jahresBeitrag: 0,
  kieferorthopaedie: false,
  kieferorthopaedie2: false,
  kieferorthopaedie3: false,
  kieferorthopaedie4: false,
  kieferorthopaedie5: false,
  kieferorthopaedie6: false,
  krankenhaustagegeld: 0,
  krankentagegeld1: 0,
  krankentagegeld2: 0,
  krankentagegeldtag1: 0,
  krankentagegeldtag2: 0,
  kuendigungszeitpunkt: "",
  kur: false,
  kur2: false,
  kur3: false,
  kur4: false,
  kur5: false,
  kur6: false,
  lasik: 0,
  lastModified: "",
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  psychotherapie: false,
  psychotherapie2: false,
  psychotherapie3: false,
  psychotherapie4: false,
  psychotherapie5: false,
  psychotherapie6: false,
  regelversorgung: false,
  regelversorgung2: false,
  regelversorgung3: false,
  regelversorgung4: false,
  regelversorgung5: false,
  regelversorgung6: false,
  reinigungLeistung: 0,
  sehhilfe: false,
  sehhilfe2: false,
  sehhilfe3: false,
  sehhilfe4: false,
  sehhilfe5: false,
  sehhilfe6: false,
  sehhilfeJahre: 0,
  shortDescription: "",
  sonstigeErstattung: "",
  sonstigeErstattung2: "",
  sonstigeErstattung3: "",
  sonstigeErstattung4: "",
  sonstigeErstattung5: "",
  sonstigeErstattung6: "",
  stationaer: "",
  stationaer2: "",
  stationaer3: "",
  stationaer4: "",
  stationaer5: "",
  stationaer6: "",
  tarifAmbulant: "",
  tarifAmbulant2: "",
  tarifAmbulant3: "",
  tarifAmbulant4: "",
  tarifAmbulant5: "",
  tarifAmbulant6: "",
  tarifBezeichnung: "",
  tarifKT: "",
  tarifKT2: "",
  tarifKT3: "",
  tarifKT4: "",
  tarifKT5: "",
  tarifKT6: "",
  tarifStationaer: "",
  tarifStationaer2: "",
  tarifStationaer3: "",
  tarifStationaer4: "",
  tarifStationaer5: "",
  tarifStationaer6: "",
  tarifStationair: "",
  tarifTypeId: "",
  tarifZahn: "",
  tarifZahn2: "",
  tarifZahn3: "",
  tarifZahn4: "",
  tarifZahn5: "",
  tarifZahn6: "",
  tarifgruppe: "",
  versichertePersonId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnummer: "",
  zahlweise: "",
  zahnbehandlung: 34,
  zahnersatz: 23,
};
let privathaftpflicht = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  beitrag: 0,
  beschreibung: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  einschlussEhrenamt: false,
  einschlussSchluesselBeruflich: false,
  einschlussSchluesselPrivat: false,
  einschlussTagesmutter: false,
  ersparnis: false,
  externalProduktId: "",
  forderungsausfall: false,
  fremdvertrag: false,
  gefaelligkeitsschaeden: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  inkludiertInBetriebsHV: false,
  jahresBeitrag: 0,
  lastModified: "",
  lehrerhaftpflicht: false,
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  oeffentlicherDienst: false,
  sb: 0,
  schadenersatzrechtsschutz: false,
  schluesselschadenSumme: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  versichertePersonId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  zahlweise: "",
};
let hundehalterhaftpflicht = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anzahl: "",
  beitrag: 0,
  beschreibung: "",
  chipnummer: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  farbe: "",
  fremdvertrag: false,
  geburtsdatum: "",
  gekuendigtDurch: "",
  geschlecht: "",
  gesellschaft: "",
  hunderasse1: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  oeffentlicherDienst: false,
  sb: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  tiername: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  zahlweise: "",
};
let pferdehalterhaftpflicht = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  anzahl: 0,
  beitrag: 0,
  beschreibung: "",
  chipnummer: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  farbe: "",
  fremdvertrag: false,
  geburtsdatum: "",
  gekuendigtDurch: "",
  geschlecht: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  rasse: "",
  reitverein: false,
  sb: 0,
  shortDescription: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  tiername: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  zahlweise: "",
};
let hausrat = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  aquarium: false,
  beitrag: 0,
  beschreibung: "",
  ceran: false,
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  elementar: false,
  ersparnis: false,
  externalProduktId: "",
  fahrrad: "",
  fahrradWert: 0,
  fremdvertrag: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  glasflaeche: false,
  groesse: 0,
  hausnummer: "",
  iart: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  oeffentlicherDienst: false,
  plz: "",
  sb: 0,
  shortDescription: "",
  stadt: "",
  staendigBewohnt: false,
  strasse: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  ueberspannung: "",
  unterversicherungsverzicht: false,
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  wasserbett: false,
  wertsachen: "0",
  wohnflaeche: 0,
  zahlweise: "",
};
let rechtschutz = {
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  beitrag: 0,
  beratung: false,
  beruf: false,
  beschreibung: "",
  comment: "",
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fremdvertrag: false,
  gekuendigtDurch: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  leistung: 0,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  oeffentlicherDienst: false,
  privat: false,
  sb: 0,
  shortDescription: "",
  sonstiges: "",
  strafrechtsschutz: false,
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  telAnwaltErstberatung: false,
  unbegrenzt: false,
  verkehr: false,
  vermieter: false,
  versichertePersonId: "",
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  versicherungssumme: 0,
  vorschaedenAnzahl: 0,
  vorschaedenHoehe: 0,
  vorschaedenNotiz: "",
  wohnungselbst: false,
  wug: false,
  zahlweise: "",
};
let steuern = {
  id: "",
kinderfreibetrag: 0,
kindergeldnummer: "",
kirchensteuer: false,
notizen: "",
sonstFreibetraege: 0,
sonstFreibetraegeFuer: "",
sozialversicherungsnummer: "",
steuerId: "",
steuerberatungDurch: "",
steuerklasse: "",
steuerlicheVeranlagungGemeinsam: true,
steuernummer: "",
unterlagen: false,
zustaendigeFamilienkasse: "",
zustaendigesFinanzamt: ""
}
let wohngebaeude = {
  ableitungsrohre: false,
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  bauartklasse: "",
  baujahr: 0,
  bedachungHart: false,
  bedachungSonstiges: false,
  bedachungSonstigesText: "",
  bedachungWeich: false,
  beitrag: 0,
  beschreibung: "",
  carport: 0,
  comment: "",
  createdOn: "",
  dachart: "",
  eigenbedarf: false,
  eigenvertrag: false,
  elementar: false,
  ersparnis: false,
  externalProduktId: "",
  fertighausgruppe: "",
  feuer: false,
  feuerhemmungFh30: false,
  feuerhemmungFh60: false,
  feuerhemmungSonstiges: false,
  feuerhemmungSonstigesText: "",
  feuerhemmungUnbekannt: false,
  fremdvertrag: false,
  fussbodenheizung: 0,
  garagen: 0,
  garagenSonstige: 0,
  gebaeudeart: "",
  gekuendigtDurch: "",
  gesellschaft: "",
  glasflaeche: false,
  grundstueckszubehoer: "",
  hagel: false,
  hausnummer: "",
  id: "",
  jahresBeitrag: 0,
  keller: false,
  lastModified: "",
  leitungswasser: false,
  logoname: "",
  monatsBeitrag: 0,
  name: "",
  neubausumme: 0,
  notizen: "",
  nutzung: "",
  oeffentlicherDienst: false,
  plz: "",
  qmDachgeschoss: 0,
  qmErdgeschoss: 0,
  qmKellergeschoss: 0,
  qmObergeschoss: "",
  qmObergeschoss2: "",
  qmUnterkellert: "",
  schaeden: "",
  schwimmbadPos: 0,
  shortDescription: "",
  sonstigeLeistungen: "",
  stadt: "",
  staendigBewohnt: false,
  strasse: "",
  sturm: false,
  tarifBezeichnung: "",
  tarifTypeId: "",
  tarifgruppe: "",
  teilunterkellert: false,
  vermietet: false,
  versicherungsbeginn: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  vorschaedenNotiz: "",
  waendeBrennbar: false,
  waendeMassiv: false,
  waendeNichtBrennbar: false,
  waendeNichtMassiv: false,
  waendeSonstiges: false,
  waendeSonstigesText: "",
  wohneinheiten: "",
  wohnflaeche: 0,
  zahlweise: "",
};
let KFZ = {
  akz1: "",
  akz2: "",
  akz3: "",
  analyseId: "",
  angebot_berater: false,
  angebot_gutachten: false,
  angebot_sonstiges: false,
  angebotsType: "",
  automobilclub: "",
  beitrag: 0,
  beschreibung: "",
  car_abs: false,
  car_abstellort_abgeschlossen: false,
  car_anhaengerbetrieb: false,
  car_betriebsausgabe: false,
  car_gap: false,
  car_hsn: "",
  car_schlingerdaempfung: false,
  car_sozius: false,
  car_tsn: "",
  car_vorschaeden_haft: (3)[(0, 0, 0)],
  car_vorschaeden_kasko_teil: (3)[(0, 0, 0)],
  car_vorschaeden_kasko_voll: (3)[(0, 0, 0)],
  car_vorsteuerabzug: false,
  car_wegfahrsperre: false,
  car_zw_sf_haft_erst: "",
  car_zw_sf_kasko_erst: "",
  car_zw_vorschaeden_erst: false,
  comment: "",
  contract_auslandsschutz: false,
  contract_beginn: "",
  contract_fahrerschutz: false,
  contract_rabattschutz: false,
  contract_schutzbrief: false,
  contract_sf_haft: "",
  contract_sf_kasko: "",
  contract_werkstattbindung: false,
  contract_zahlart: 0,
  createdOn: "",
  eigenvertrag: false,
  ersparnis: false,
  externalProduktId: "",
  fahrer_1_bfa: false,
  fahrer_1_familie: false,
  fahrer_1_fs_herkunft: "",
  fahrer_1_vzr: false,
  fahrer_2: false,
  fahrer_2_bfa: false,
  fahrer_2_familie: false,
  fahrer_2_fs_herkunft: "",
  fahrer_2_vzr: false,
  fahrer_3: false,
  fahrer_3_bfa: false,
  fahrer_3_familie: false,
  fahrer_3_fs_herkunft: "",
  fahrer_3_vzr: false,
  fahrer_4: false,
  fahrer_4_bfa: false,
  fahrer_4_familie: false,
  fahrer_4_fs_herkunft: "",
  fahrer_4_vzr: false,
  fahrer_5: false,
  fahrer_5_bfa: false,
  fahrer_5_familie: false,
  fahrer_5_fs_herkunft: "",
  fahrer_5_vzr: false,
  fahrer_Partner: false,
  fahrer_Partner_bfa: false,
  fahrer_Partner_fs_herkunft: "",
  fahrer_Partner_verheiratet_mit_vn: false,
  fahrer_Partner_vzr: false,
  fahrer_Sohn: false,
  fahrer_Sohn_bfa: false,
  fahrer_Sohn_fs_herkunft: "",
  fahrer_Sohn_vzr: false,
  fahrer_Tochter: false,
  fahrer_Tochter_bfa: false,
  fahrer_Tochter_fs_herkunft: "",
  fahrer_Tochter_vzr: false,
  fahrer_VN: true,
  fahrer_VN_bfa: false,
  fahrer_VN_fs_herkunft: "",
  fahrer_VN_vzr: false,
  fahrer_Weitere: false,
  fahrzeugtyp: "",
  fahrzeugtypSonstige: "",
  fremdvertrag: false,
  geschaeftsausgabe: false,
  gesellschaft: "",
  halter_ort: "",
  halter_plz: "",
  herstellerSchl: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  modellSchl: "",
  monatsBeitrag: 0,
  name: "",
  notizen: "",
  shortDescription: "",
  subtype: "",
  tarifBezeichnung: "",
  tarifMitRabattschutz: false,
  tarifTypeId: "",
  tarifgruppe: "",
  toggleSonderausstattung: false,
  toggleWohneigentum: false,
  unterlagen: false,
  versicherungsbeginn: "",
  versicherungsbeginnNeu: "",
  versicherungsende: "",
  versicherungsnehmerId: "",
  versicherungsnummer: "",
  vn_anrede: 0,
  vn_familienstand: 0,
  vn_firmenname: "",
  vn_geburtsdatum: "",
  vn_hausnummer: "",
  vn_nationalitaet: "",
  vn_ort: "",
  vn_plz: "",
  vn_strasse: "",
  vn_weitere_fahrzeuge: false,
  vorschaedenAnzahl: 0,
  zahlweise: "",
};
let wohnsituation = {
  analyseId: "",
  angebotsType: "",
  beitrag: 0,
  createdOn: "",
  externalProduktId: "",
  gesellschaft: "",
  id: "",
  jahresBeitrag: 0,
  lastModified: "",
  monatsBeitrag: 0,
  notizen: "",
  tarifBezeichnung: "",
  tarifTypeId: "",
  versicherungsnehmerBeide: false,
  versicherungsnehmerId: "",
  wohnflaeche: 0,
  wohngeld: 0,
  wohnung: "",
  wohnungKaltmiete: 0,
  wohnungMiete: 0,
  wohnungNebenkosten: 0,
  wohnungZurMiete: false,
};
let bankverbindungen =[{
  bank: "",
bankOrt: null,
bic: "",
blz: "",
createdOn: "",
efpId: null,
geschaeftlich: null,
hauptbankverbindung: true,
iban: "",
id: "",
kontoinhaber: null,
kontonr: "",
lastModified: "",
mandantId: "",
notizen: "",
sepa: null
}]
let altersvorsorge ={
  analyseId: "",
angebotsType: "",
arbeitsjahreGesamt: 0,
beitrag: 0,
createdOn: "",
externalProduktId: "",
gesellschaft: "",
gesellschaftSonstige: "",
heutigerAnspruch: 0,
id: "",
jahrenBerufstaetig: 0,
jahresBeitrag: 0,
lastModified: "",
letzteRenteninformation: "",
monatsBeitrag: 0,
notizen: "",
rentenbeginn: "",
renteninformation: 0,
rentenschaetzungArt: "",
selbstBruttoJahreseinkommen: 0,
selbstBruttoJahreseinkommenJahre: 0,
selbstGRV: false,
selbstGRVSeit: "",
tarifBezeichnung: "",
tarifTypeId: "",
volleErwerbsminderungsrente: 0,
wartezeitErfuellt: false,
wartezeitMonate: 0,
weiterenEinzahlungen: 0
}
let bAV_DIREKT3 ={
  ablaufleistungGarantiert: 0,
ablaufleistungPrognostiziert: 0,
ablaufleistungPrognostiziertBeiProzent: "",
analyseId: "",
angebot_berater: false,
angebot_gutachten: false,
angebot_sonstiges: false,
angebotsType: "",
ansprechpartnerBetrieb: "",
arbeitgeberanteil: 0,
arbeitnehmeranteil: 0,
art: "",
beitrag: 0,
beitragsanteilBU: 0,
beitragsbefreiungBU: true,
beitragsendeBUZ: "",
beschreibung: "",
comment: "",
createdOn: "",
durchfuehrungsweg: "",
dynamikBU: false,
dynamikProzent: 0,
eigenvertrag: false,
ersparnis: false,
externalProduktId: "",
fonds: "",
formWithoutBeitragszahler: false,
fremdvertrag: false,
gekuendigtDurch: "",
gesellschaft: "",
id: "",
integrierteBU: true,
jahresBeitrag: 0,
lastModified: "",
leistungTod: 0,
leistungsendeBUZ: "",
logoname: "",
monatsBeitrag: 0,
name: "",
nettobeitragMtl: 0,
notizen: "",
rahmenvertrag: true,
rentenleistungBU: 0,
rentenleistungGarantiert: 0,
rentenleistungPrognostiziert: 0,
rentenleistungPrognostiziertBeiProzent: "",
rentenleistungRgzJahre: 0,
rueckkaufswertDatum: "",
shortDescription: "",
tarifBezeichnung: "",
tarifTypeId: "",
tarifvertrag: "",
versichertePersonId: "",
versichertePersonSonstige: "",
versicherungsbeginn: "",
versicherungsende: "",
versicherungsnehmerBeide: false,
versicherungsnehmerId: "",
versicherungsnehmerSonstige: "",
versicherungsnummer: "",
vwlArbeitgeber: 0,
vwlArbeitnehmer: 0,
zahlweise: ""
}
let sachwert ={
  aktuellerWert: 0,
analyseId: "",
angebotsType: "",
anschaffungsjahr: "",
art: "",
beitrag: 0,
besparung: "",
createdOn: "",
externalProduktId: "",
gesellschaft: "",
gewicht: "",
id: "",
jahresBeitrag: 0,
lagerung: "",
lastModified: "",
leistung: 0,
monatsBeitrag: 0,
name: "",
notizen: "",
tarifBezeichnung: "",
tarifTypeId: "SACHWERT",
versicherungsnehmerBeide: false,
versicherungssumme: 0,
}
function dateFormater(date) {
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

function booleanFormater(booleanString) {
  let output = false;
  if (booleanString === "true") {
    output = true;
  }
  return output;
}
function test(cardtemplate){
  let key1
  let key2
  Object.entries(cardtemplate).forEach((assetkey, formkey) => {
    console.log(cardtemplate[formkey])
    console.log(formkey)
      console.log(cardtemplate[formkey])
  //  cardtemplate[assetkey] = eval(formkey);    
 });

}
function tarifType(asset, card, changedMandant, mandantGroup) {
  function isMandantDefined(id) {
    let output;
    if (id === "undefined") {
      output = "sonstige";
    } else {
      output = id;
    }
    return output;
  }
  function anzahlPersonen(anzahl, index) {
    let output = false;
    switch (index) {
      case 1:
        if (anzahl >= 1) {
          output = true;
        }
        break;
      case 2:
        if (anzahl >= 2) {
          output = true;
        }
        break;
      case 3:
        if (anzahl >= 3) {
          output = true;
        }
        break;
      case 4:
        if (anzahl >= 4) {
          output = true;
        }
        break;
      case 5:
        if (anzahl >= 5) {
          output = true;
        }
        break;
      case 6:
        if (anzahl >= 6) {
          output = true;
        }
        break;
      default:
        output = false;
        break;
    }
    return output;
  }
  function checkForBeide(asset){
    let output = ""
    if(asset.versicherungsnehmerBeide){
      output = false
} else{
  output = mandantMapper(asset.versicherungsnehmerId)

}
return (output)
  }
  function mandantMapper(versichertePersonId) {
    let output = 0;
    if (versichertePersonId !== undefined) {
      mandantGroup.forEach((mandant, index) => {
        if (versichertePersonId === mandant.mandant.id) {
          output = index;
        }
      });
    }

    return output;
  }
  let output;
  let cardTemplateData;

  function isValueAvailable(key,cardTemplateDataParam){
    let output = false 
    switch(key){
      case "bonus": {
        if(cardTemplateDataParam.bonuszahlung=== undefined){
        }else{
          if(cardTemplateDataParam.bonuszahlung >0){
            output=true
          }
        }
      }
    break;

      case "sonstigerSachbezug": {
        if(cardTemplateDataParam.sonstigerSachbezug=== undefined){
        }else{
          if(cardTemplateDataParam.sonstigerSachbezug >0){
            output=true
          }
        }
      }
    break;

      case "variablerBezug": {
        if(cardTemplateDataParam.variablerBezug=== undefined){
        }else{
          if(cardTemplateDataParam.variablerBezug >0){
            output=true
          }
        }
      }
    break;

      case "fahrtkosten": {


        if(cardTemplateDataParam.fahrtkosten=== undefined){
        }else{
          if(cardTemplateDataParam.fahrtkosten >0){
            output=true
          }
        }
      }
    break;

      case "feiertagszuschlag": {
        if(cardTemplateDataParam.feiertagszuschlag=== undefined){
        }else{
          if(cardTemplateDataParam.feiertagszuschlag >0){
            output=true
          }
        }
      }
    break;

      case "nachtzuschlag": {
        if(cardTemplateDataParam.nachtzuschlag=== undefined){
        }else{
          if(cardTemplateDataParam.nachtzuschlag >0){
            output=true
          }
        }
      }
    break;

    case "dienstwagen": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "kitaGebuehren": {

      if(cardTemplateDataParam.kita=== undefined){
      }else{
        if(cardTemplateDataParam.kita >0){

          output=true
        }
      }
    }
    break;
    case "jobRad": {
      if(cardTemplateDataParam.jobrad=== undefined){
      }else{
        if(cardTemplateDataParam.jobrad >0){
          output=true
        }
      }
    }
    break;
    case "vwlAG": {
      if(cardTemplateDataParam.vwl=== undefined){
      }else{
        if(cardTemplateDataParam.vwl >0){
          output=true
        }
      }
    }
    break;
    case "provision": {
      if(cardTemplateDataParam.provision=== undefined){
      }else{
        if(cardTemplateDataParam.provision >0){
          output=true
        }
      }
    }
    break;
    case "sonstigesBrutto": {
      if(cardTemplateDataParam.sonstigesBrutto=== undefined){
      }else{
        if(cardTemplateDataParam.sonstigesBrutto >0){
          console.log("drin")
          output=true
        }
      }
    }
    break;
    case "abzuegeVwlGesamt": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "sonstigerAbzug": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "bonus": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "urlaubsgeld": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "weihnachtsgeld": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "gewinnbeteiligung": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    case "sachbezug": {
      if(cardTemplateDataParam.sachbezug=== undefined){
      }else{
        if(cardTemplateDataParam.sachbezug >0){
          output=true
        }
      }
    }
    break;
    case "sonstigesSonder": {
      if(cardTemplateDataParam.dienstwagen=== undefined){
      }else{
        if(cardTemplateDataParam.dienstwagen >0){
          output=true
        }
      }
    }
    break;
    default:
      break;
  }
  return (output)
  }
  switch (card) {
case "PFERDEHALTERPFLICHT":
  cardTemplateData=pferdehalterhaftpflicht
  break
    case "SACHWERT":
  cardTemplateData=sachwert
  break;
case "STEUERN":
  cardTemplateData=steuern
  break;
    case "DIREKT_3":
      cardTemplateData=bAV_DIREKT3
      break;
    case "BANKVERBINDUNG":
    cardTemplateData = bankverbindungen  
    break;
    case "EINNAHMEN":
      cardTemplateData = sonstigeEinnahmen;

      break;
    case "EINKOMMEN_GEHALT":
      cardTemplateData = einkommenGehalt;

      break;
    case "EINKOMMEN_MINIJOB":
      cardTemplateData = einkommenGeringverdiener;

      break;
    case "EINKOMMEN_SELBSTAENDIGER":
      cardTemplateData = einkommenSelbststaendig;

      break;
    case "AUSGABEN":
      cardTemplateData = ausgaben;

      break;
    case "AUTOMOBILCLUB":
      cardTemplateData = automobilclub;

      break;
    case "SONSTIGE_ZAHLUNG":
      cardTemplateData = sonstigeZahlungsverpflichtigungen;

      break;
    case "KONSUMKREDIT":
      cardTemplateData = konsumKredit;

      break;
    case "BANKPRODUKTE":
      cardTemplateData = bankprodukte;

      break;
    case "VWL_BAUSPAREN":
      cardTemplateData = vwl;

      break;
    case "IMMOBILIENBESTAND":
      cardTemplateData = immobilienbestand;

      break;
    case "BETEILIGUNGEN":
      cardTemplateData = beteiligungenAiF;

      break;
    case "BU":
      cardTemplateData = buEuGfk;

      break;
    case "UNFALL":
      cardTemplateData = unfall;

      break;
    case "RISIKO":
      cardTemplateData = todesfall;

      break;
    case "DREADDISEASE":
      cardTemplateData = schwereKrankheiten;

      break;
    case "PFLEGEKOSTEN":
      cardTemplateData = privatePflegeversicherung;

      break;
    case "PFLEGERENTEN":
      cardTemplateData = privatePflegeversicherung;

      break;
    case "PFLEGETAGEGELD":
      cardTemplateData = privatePflegeversicherung;

      break;
    case "GESETZLICHE_KRANKEN":
      cardTemplateData = gesetzlicheKranken;

      break;
    case "KVV":
      cardTemplateData = privateKranken;

      break;
    case "PRIVATHAFTPFLICHT":
      cardTemplateData = privathaftpflicht;

      break;
    case "KVZ":
      cardTemplateData = kvZusatz;

      break;
    case "HUNDEHALTERHAFTPFLICHT":
      cardTemplateData = hundehalterhaftpflicht;

      break;
    case "HAUSRAT":
      cardTemplateData = hausrat;

      break;
    case "RECHTSSCHUTZ":
      cardTemplateData = rechtschutz;

      break;
    case "WOHNGEBAEUDE":
      cardTemplateData = wohngebaeude;

      break;
    case "KFZ":
      cardTemplateData = KFZ;

      break;
    case "WOHNSITUATION":
      cardTemplateData = wohnsituation;

      break;
      case "GESETZLICHE_AV":
cardTemplateData= altersvorsorge;
      break
    default:
      break;
      
    }
    if(card === "ARBEITGEBER"){
output={
      firmennameArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].firmenname,
  rechtsformArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].rechtsform,
  straßeArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].strasse,
  nummerArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].hausnummer,
  postleitzahlArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].postleitzahl,
  wohnortArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].ort,
  telefonnummerArbeitgeber: mandantGroup[0].mandant.arbeitgebers[0].tel,
  seitWannbeschaeftigtArbeitgeber: dateFormater(
    mandantGroup[0].mandant.arbeitgebers[0].beschaeftigt
  ),
  inGewerkschaftBAVArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].mitgliedGewerkschaft,
  inWelcheGewerkschaftBAVArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].nameGewerkschaft,
  tarifgebundenBAVArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].tarifgebunden,
  tarifvertragBestehenBAVArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].verbindlicherVertrag,
  unternehmensgrößeBAVArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].unternehmensgroesse,
  ansprechspartnerArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].avAnsprechpartnerName,
  telNrAnsprechspartnerArbeitgeber:
    mandantGroup[0].mandant.arbeitgebers[0].avAnsprechpartnerTelefon,
  emailAnsprechspartnerArbeitgeber: "(Fehlt in localer suite)",}
    }
   else if(card === "AUSWEIS"){
      console.log(mandantGroup[0].mandant.personalausweisGueltigBis)
      output={
      nummerAusweisdaten: mandantGroup[0].mandant.personalausweis,
      ausstellungsdatumAusweisdaten:
        dateFormater(mandantGroup[0].mandant.personalausweisAusstellungsdatum) || "",
      gültigBisAusweisdaten:
        dateFormater(mandantGroup[0].mandant.personalausweisGueltigBis) || "",
      ausstellungsstelleVerwaltungAusweisdaten:
        mandantGroup[0].mandant.personalausweisVerwaltung,
      reisepassNummerAusweisdaten: mandantGroup[0].mandant.reisepass,
      ausstellungsdatumReisepassAusweisdaten:
        dateFormater(mandantGroup[0].mandant.reisepassAusstellungsdatum) || "",
      gueltigBisReisepassReisepassAusweisdaten:
        dateFormater(mandantGroup[0].mandant.reisepassGueltigBis) || "",
      ausstellungsstelleVerwaltungReisepassAusweisdaten:
        mandantGroup[0].mandant.reisepassVerwaltung,
      nummerAufenthaltstitelAusweisdaten:
        mandantGroup[0].mandant.aufenthaltstitelNummer,
      ausstellungsdatumAufenthaltstitelAusweisdaten:
        dateFormater(mandantGroup[0].mandant.aufenthaltstitelAusstellungsdatum) || "",
      gueltigAbAufenthaltstitelAusweisdaten:
        dateFormater(mandantGroup[0].mandant.aufenthaltstitelGueltigAb) || "",
      gueltigBisAufenthaltstitelAusweisdaten:
        dateFormater(mandantGroup[0].mandant.aufenthaltstitelGueltigBis) || ""}
    }
    else if(card === "KOMMUNIKATION"){
output={
  versicherungKommunikation: mandantGroup[0].mandant.contactVersicherungen,
  bankgeschaefteKommunikation: mandantGroup[0].mandant.contactBank,
  steuernKommunikation: mandantGroup[0].mandant.contactSteuern,
  rechtlichesKommunikation: mandantGroup[0].mandant.contactRecht,
  privatTelefonFestnetzKommunikation: mandantGroup[0].mandant.telefon,
  geschaeftlichTelefonFestnetzKommunikation:
    mandantGroup[0].mandant.telefonGeschaeftlich,
  privatMobiltelefonKommunikation: mandantGroup[0].mandant.telefonMobil,
  geschaeftlichMobiltelefonKommunikation:
    mandantGroup[0].mandant.telefonGeschaeftlich,
  privatFaxKommunikation: mandantGroup[0].mandant.telefax,
  geschaeftlichFaxKommunikation: mandantGroup[0].mandant.telefaxGeschaeftlich,
  facebookKommunikation: mandantGroup[0].mandant.facebook,
  xingKommunikation: mandantGroup[0].mandant.xing,
}
    } else if(card === "FUEHRERSCHEIN"){
      console.log(mandantGroup[0].mandant)
    output={
      fuehrerscheinFuehrerschein: mandantGroup[0].mandant.fuehrerscheinNummer,
      ausstellungsDatumFuehrerscheinFuehrerschein: dateFormater(
        mandantGroup[0].mandant.fuehrerscheinAusstellungsDatum
      ),
          fuehrerscheinLandFuehrerschein:  mandantGroup[0].mandant.fuehrerscheinLand,
      klasseBFuehrerschein: mandantGroup[0].mandant.fuehrerscheinB,
      klasseBEFuehrerschein: mandantGroup[0].mandant.fuehrerscheinBE,
      klasseAFuehrerschein: mandantGroup[0].mandant.fuehrerscheinA,
      klasseAEinsFuehrerschein: mandantGroup[0].mandant.fuehrerscheinA1,
      klasseAZweiFuehrerschein: mandantGroup[0].mandant.fuehrerscheinA2,
      klasseCFuehrerschein: mandantGroup[0].mandant.fuehrerscheinC,
      klasseCEinsFuehrerschein: mandantGroup[0].mandant.fuehrerscheinC1,
      klasseCEFuehrerschein: mandantGroup[0].mandant.fuehrerscheinCE,}
    }
    else if(card ==="GESUNDHEIT"){    
     output = {
       groesseGesundheit: mandantGroup[0].mandant.grosse,
      gewichtGesundheit: mandantGroup[0].mandant.gewicht,
      motorradfahrerGesundheit: mandantGroup[0].mandant.motorradfahrer,
      antwortRauchenGesundheit: mandantGroup[0].mandant.raucher,
      seitRauchenGesundheit: mandantGroup[0].mandant.raucherSeit,
      brilleSehvermoegenGesundheit: mandantGroup[0].mandant.sehhilfeBrille,
      kontaktlinsenSehvermoegenGesundheit:
        mandantGroup[0].mandant.sehhilfeKontaklinsen,
      erlaeuterungenSehvermoegenGesundheit: mandantGroup[0].mandant.sehhilfeAngaben,
      linksDioptrienSehvermoegenGesundheit: mandantGroup[0].mandant.sehhilfeLinks,
      rechtsDioptrienSehvermoegenGesundheit: mandantGroup[0].mandant.sehhilfeRechts,
      antwortUnfallbestandGesundheit: mandantGroup[0].mandant.verletzt10,
      zeitraumVonUnfallbestandGesundheit: dateFormater(
        mandantGroup[0].mandant.verletzt10Zeitraum
      ),
      inBehandlungUnfallbestandGesundheit:
        mandantGroup[0].mandant.verletzt10Behandlung,
      beschwerdefreiGeheiltUnfallbestandGesundheit:
        mandantGroup[0].mandant.verletzt10Geheilt,
      behandlungGesundheit: mandantGroup[0].mandant.verletzt10,
      zeitraumUnfallbestandGesundheit: mandantGroup[0].mandant.verletzt10Zeitraum,
      beschwerdefreiGeheiltBehandlungGesundheit:
        mandantGroup[0].mandant.verletzt10Geheilt,
      antwortOperationenGesundheit: mandantGroup[0].mandant.operation10,
      zeitraumVonOperationenGesundheit: dateFormater(
        mandantGroup[0].mandant.operation10Von
      ),
      zeitraumBisOperationenGesundheit: dateFormater(
        mandantGroup[0].mandant.operation10Bis
      ),
      diagnoseOperationenGesundheit: mandantGroup[0].mandant.operation10Diagnose,
      beschwerdefreiGeheiltOperationenGesundheit:
        mandantGroup[0].mandant.operation10Geheilt,
      seitOperationenGesundheit: mandantGroup[0].mandant.operation10GeheiltSeit,
      KHTageOperationenGesundheit: mandantGroup[0].mandant.operation10GeheiltKHTage,
      AUTageOperationenGesundheit: mandantGroup[0].mandant.operation10GeheiltAUTage,
      antwortGesundheitUndArbeitsfaehigkeitGesundheit:
        mandantGroup[0].mandant.arbeitsfaehig,
      notizenGesundheitUndArbeitsfaehigkeitGesundheit:
        mandantGroup[0].mandant.arbeitsfaehigUrsache,
      antwortDerzeitigeZahnbehandlungenGesundheit: mandantGroup[0].mandant.zahnpflege,
      angabenDerzeitigeZahnbehandlungenGesundheit:
        mandantGroup[0].mandant.zahnpflegeAngaben,
      antwortFehlendeZaehneGesundheit: mandantGroup[0].mandant.fehlenZaehne,
      anzahlFehlendeZaehneGesundheit: mandantGroup[0].mandant.fehlenZaehneAnzahl,
      zahnersatzGesundheit: mandantGroup[0].mandant.zahnersatz,
      anzahlZahnersatzGesundheit: mandantGroup[0].mandant.zahnersatzErsetzterZaehne,
      bestehtSeitZahnersatzGesundheit: mandantGroup[0].mandant.zahnersatzJahren,}

    }else if(card === "STEUERN"){
cardTemplateData={
  initMandantValue: mandantMapper(
    mandantGroup[0].mandantId
  ),
  versicherungsnehmerGesetzlicheAltersvorsorge: mandantMapper(
    mandantGroup[0].mandantId
  ),
  steuerklasseSteuern: mandantGroup[0].mandant.steuern.steuerklasse,
  kinderfreibetragSteuern: mandantGroup[0].mandant.steuern.kinderfreibetrag,
  fuerSteuern: mandantGroup[0].mandant.steuern.sonstFreibetraegeFuer,
  steuerlVeranlagungSteuern:
  mandantGroup[0].mandant.steuern.steuerlicheVeranlagungGemeinsam,
  kirchensteuerSteuern: mandantGroup[0].mandant.steuern.kirchensteuer,
  zustFinanzamtSteuern: mandantGroup[0].mandant.steuern.zustaendigesFinanzamt,
  steuernummerSteuern: mandantGroup[0].mandant.steuern.steuernummer,
  steuerIDSteuern: mandantGroup[0].mandant.steuern.steuerId,
  sozialversNummerSteuern:
  mandantGroup[0].mandant.steuern.sozialversicherungsnummer,
  zustFamilienkasseSteuern:
  mandantGroup[0].mandant.steuern.zustaendigeFamilienkasse,
  kindergeldnummerSteuern: mandantGroup[0].mandant.steuern.kindergeldnummer,
  steuerberatungDurchSteuern: mandantGroup[0].mandant.steuern.steuerberatungDurch,}
  } else{
  if (!changedMandant ) {
    asset.map((asset) => {
      if(asset.tarifTypeId.includes("SACHWERT") &&card === "SACHWERT"){
        cardTemplateData = asset;
      }
      if(asset.tarifTypeId.includes("DIREKT_3") &&card === "DIREKT_3"){
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("GESETZLICHE_AV") && card === "GESETZLICHE_AV") {
        cardTemplateData = asset;

      }
      if (asset.tarifTypeId.includes("EINNAHMEN") && card === "EINNAHMEN") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("EINKOMMEN_GEHALT") &&
        card === "EINKOMMEN_GEHALT"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("EINKOMMEN_MINIJOB") &&
        card === "EINKOMMEN_MINIJOB"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("EINKOMMEN_SELBSTAENDIGER") &&
        card === "EINKOMMEN_SELBSTAENDIGER"
      ) {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("AUSGABEN") && card === "AUSGABEN") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("AUTOMOBILCLUB") &&
        card === "AUTOMOBILCLUB"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("SONSTIGE_ZAHLUNG") &&
        card === "SONSTIGE_ZAHLUNG"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("KONSUMKREDIT") &&
        card === "KONSUMKREDIT"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("BANKPRODUKTE") &&
        card === "BANKPRODUKTE"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("VWL_BAUSPAREN") &&
        card === "VWL_BAUSPAREN"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("IMMOBILIENBESTAND") &&
        card === "IMMOBILIENBESTAND"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("BETEILIGUNGEN") &&
        card === "BETEILIGUNGEN"
      ) {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("BU") && card === "BU") {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("UNFALL") && card === "UNFALL") {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("RISIKO") && card === "RISIKO") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("DREADDISEASE") &&
        card === "DREADDISEASE"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("PFLEGEKOSTEN") &&
        card === "PFLEGEKOSTEN"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("PFLEGERENTEN") &&
        card === "PFLEGERENTEN"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("PFLEGETAGEGELD") &&
        card === "PFLEGETAGEGELD"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("GESETZLICHE_KRANKEN") &&
        card === "GESETZLICHE_KRANKEN"
      ) {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("KVV") && card === "KVV") {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("KVZ") && card === "KVZ") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("PRIVATHAFTPFLICHT") &&
        card === "PRIVATHAFTPFLICHT"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("HUNDEHALTERHAFTPFLICHT") &&
        card === "HUNDEHALTERHAFTPFLICHT"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("PFERDEHALTERHAFTPFLICHT") &&
        card === "PFERDEHALTERHAFTPFLICHT"
      ) {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("HAUSRAT") && card === "HAUSRAT") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("RECHTSSCHUTZ") &&
        card === "RECHTSSCHUTZ"
      ) {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("WOHNGEBAEUDE") &&
        card === "WOHNGEBAEUDE"
      ) {
        cardTemplateData = asset;
      }
      if (asset.tarifTypeId.includes("KFZ") && card === "KFZ") {
        cardTemplateData = asset;
      }
      if (
        asset.tarifTypeId.includes("WOHNSITUATION") &&
        card === "WOHNSITUATION"
      ) {
        cardTemplateData = asset;
      }
    });
  } else {
    cardTemplateData = asset;

  }}
  switch (card) {
    case "SACHWERT":
      console.log(
        cardTemplateData
      )
      
      output={
        initMandantValue: false, 
        vertragsinhaberSachwert:false,
        gesellschaftSachwert: cardTemplateData.gesellschaft,
        tarifbezeichnungVertragspartnerSachwert: "",
        vertragsnummerVertragspartnerSachwert: "",
        artVertragspartnerSachwert: "",
        fallsSonstigesVertragspartnerSachwert:"",
        gewichtVertragspartnerSachwert: cardTemplateData.gewicht,
        lagerungVertragspartnerSachwert: "",
        anschaffungsjahrVertragspartnerSachwert: "",
        aktuellerWertVertragspartnerSachwert: "",
        vertragssummeVertragspartnerSachwert: "",
        strinzahlweiseVertragspartnerSachwertg: "",
        beitragVertragspartnerSachwert: "",
      }
      break
    case "STEUERN":
      console.log(cardTemplateData)
    output={
        ...cardTemplateData
      
    }  
    break;
    case "DIREKT_3":
     output={ 
      externalProduktId:cardTemplateData.externalProduktId,
      initMandantValue: mandantMapper(
        cardTemplateData.versicherungsnehmer.id
      ), 
      gesellschaftBetrieblicheAltersversorgung:cardTemplateData.gesellschaft,
      tarifbezeichnungBetrieblicheAltersversorgung: cardTemplateData.tarifBezeichnung,
      vertragsnummerBetrieblicheAltersversorgung: cardTemplateData.versicherungsnummer,
      versicherungsnehmerBetrieblicheAltersversorgung: mandantMapper(cardTemplateData.versicherungsnehmer.id),
      versichertePersonBetrieblicheAltersversorgung:  typeof cardTemplateData.versichertePerson === "undefined"
      ? isMandantDefined("undefined")
      : isMandantDefined(cardTemplateData.versichertePerson.id),
      artVersichertePersonBetrieblicheAltersversorgung: cardTemplateData.art,
      durchfuehrungswegVersichertePersonBetrieblicheAltersversorgung: cardTemplateData.tarifTypeId,
      beitragANAnteilBeitragBetrieblicheAltersversorgung: cardTemplateData.arbeitnehmeranteil,
      beitragAGAnteilBeitragBetrieblicheAltersversorgung: cardTemplateData.arbeitgeberanteil,
      VWLArbeitgeberbeitragBetrieblicheAltersversorgung:cardTemplateData.vwlArbeitnehmer,
      VWLArbeitnehmerbeitragBetrieblicheAltersversorgung:cardTemplateData.vwlArbeitgeber,
      beitragGesamtBeitragBetrieblicheAltersversorgung:cardTemplateData.arbeitnehmeranteil+cardTemplateData.arbeitgeberanteil+
      cardTemplateData.vwlArbeitnehmer+cardTemplateData.vwlArbeitgeber,
      nettobelastungBeitragBetrieblicheAltersversorgung: cardTemplateData.nettobeitragMtl,
      zahlweiseBetrieblicheAltersversorgung: cardTemplateData.zahlweise,
      dynamikBeitragBetrieblicheAltersversorgung: cardTemplateData.dynamikProzent,
      vertragsbeginnVertragslaufzeitBetrieblicheAltersversorgung: dateFormater( cardTemplateData.versicherungsbeginn),
      vertragsendeVertragslaufzeitBetrieblicheAltersversorgung: dateFormater( cardTemplateData.versicherungsende),
      garantiertMonatlicheRentenleistungBetrieblicheAltersversorgung: cardTemplateData.rentenleistungGarantiert,
      prognostiziertMonatlicheRentenleistungBetrieblicheAltersversorgung: cardTemplateData.rentenleistungPrognostiziert,
      beiMonatlicheRentenleistungBetrieblicheAltersversorgung: cardTemplateData.rentenleistungPrognostiziertBeiProzent,
      RGZMonatlicheRentenleistungBetrieblicheAltersversorgung: cardTemplateData.rentenleistungRgzJahre,
      ablaufsleistungGarantiertAblaufleistungBetrieblicheAltersversorgung: cardTemplateData.ablaufleistungGarantiert,
      ablaufsleistungPrognostiziertAblaufleistungBetrieblicheAltersversorgung: cardTemplateData.ablaufleistungPrognostiziert,
      beiAblaufleistungBetrieblicheAltersversorgung: cardTemplateData.ablaufleistungPrognostiziertBeiProzent,
      integrierteBUBetrieblicheAltersversorgung: cardTemplateData.integrierteBU,
      renteBUBetrieblicheAltersversorgung: cardTemplateData.rentenleistungBU,
      dynamikBULeistungBUBetrieblicheAltersversorgung: cardTemplateData.dynamikBU,
      beitragsbefreiungBUBetrieblicheAltersversorgung: cardTemplateData.beitragsbefreiungBU,
      beitragsendeBUZBetrieblicheAltersversorgung: dateFormater(cardTemplateData.beitragsendeBUZ),
      leistungsendeBUZBetrieblicheAltersversorgung: dateFormater(cardTemplateData.leistungsendeBUZ),
      beitragsanteilBUZBetrieblicheAltersversorgung: cardTemplateData.beitragsanteilBU,
      leistungBeiTodBUZBetrieblicheAltersversorgung: cardTemplateData.leistungTod,
      aktuellerRKWBUZBetrieblicheAltersversorgung: cardTemplateData.rueckkaufswert,
      standBUZBetrieblicheAltersversorgung: dateFormater(cardTemplateData.rueckkaufswertDatum),
      ansprechpartnerBetriebBUZBetrieblicheAltersversorgung: cardTemplateData.ansprechpartnerBetrieb,
      rahmenvertragBUZBetrieblicheAltersversorgung: cardTemplateData.rahmenvertrag,
      tarifvertragBUZBetrieblicheAltersversorgung: cardTemplateData.tarifvertrag,
      fondsBUZBetrieblicheAltersversorgung: cardTemplateData.fonds}

      break;
    case "GESETZLICHE_AV":
      console.log(cardTemplateData)
    output={
      initMandantValue: mandantMapper(
        cardTemplateData.versicherungsnehmer.id
      ),
      versicherungsnehmerGesetzlicheAltersvorsorge: mandantMapper(
        cardTemplateData.versicherungsnehmer.id
      ),
      rententraegerGesetzlicheAltersvorsorge: cardTemplateData.gesellschaft,
      fallsSonstigeGesetzlicheAltersvorsorge: cardTemplateData.gesellschaftSonstige,
      datumRentenbeginnGesetzlicheAltersvorsorge: dateFormater(cardTemplateData.rentenbeginn),
      volleErwerbsminderungsrenteGesetzlicheAltersvorsorge: cardTemplateData.volleErwerbsminderungsrente,
      wartezeitGesetzlicheAltersvorsorge: cardTemplateData.wartezeitErfuellt,
      fallsNeinAnzahlMonateWartezeitGesetzlicheAltersvorsorge: cardTemplateData.wartezeitMonate,
      heutigerAnspruchWartezeitGesetzlicheAltersvorsorge: cardTemplateData.renteninformation,
      weitereEinzahlungenWartezeitGesetzlicheAltersvorsorge: cardTemplateData.weiterenEinzahlungen,
      artRentenschaetzungGesetzlicheAltersvorsorge: cardTemplateData.rentenschaetzungArt,
      berufstaetigSeitRentenschaetzungGesetzlicheAltersvorsorge: cardTemplateData.jahrenBerufstaetig,
      gesamtanzahlArbeitsjahreRentenschaetzungGesetzlicheAltersvorsorge: cardTemplateData.arbeitsjahreGesamt,
      rentenschaetzungDurchfuehrenRentenschaetzungGesetzlicheAltersvorsorge:"Buttonfunction",
      datumLetzteRenteninformationBescheidRentenschaetzungGesetzlicheAltersvorsorge:dateFormater(cardTemplateData.letzteRenteninformation),
      weiterhinBeitraegeGRVBeiSelbststaendigenGesetzlicheAltersvorsorge: cardTemplateData.selbstGRV,
      fallsJaBeiSelbststaendigenGesetzlicheAltersvorsorge: cardTemplateData.selbstGRVMtl,
      ununterbrochenSeitBeiSelbststaendigenGesetzlicheAltersvorsorge:dateFormater( cardTemplateData.selbstGRVSeit),
      durchschnittlicheBruttojahrenseinkommenBeiSelbststaendigenGesetzlicheAltersvorsorge:
        cardTemplateData.selbstBruttoJahreseinkommen,
      anzahlJahreBeiSelbststaendigenGesetzlicheAltersvorsorge: cardTemplateData.selbstBruttoJahreseinkommenJahre,
    }
    break;
    case "EINNAHMEN":
      console.log(cardTemplateData);
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),

        personenzuordnungEinnahmen: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        nichtselbststaendigeTaetigkeitEinnahmen:
          cardTemplateData.nichtselbststaendigeTaetigkeit,
        kapitalvermoegenEinnahmen: cardTemplateData.kapitalvermogen,
        vermietungUndVerpachtungEinnahmen:
          cardTemplateData.vermietungUndVerpachtung,
        landUndForstwirtschaftEinnahmen:
          cardTemplateData.landUndForstwirtschaft,
        gewerbebetriebEinnahmen: cardTemplateData.gewerbebetrieb,
        sonstigeEinkünfteEinnahmen: cardTemplateData.sonstigeEinkuenfte22Renten,
        außerordentlicheEinkuenfteEinnahmen:
          cardTemplateData.ausserordentlicheEinkuenfte,
        steuerfreieEinnahmenUnterProgessionsvorbehaltEinnahmen:
          cardTemplateData.steuerfreieEinnahmenUnterProgressionsvorbehalt,
        selbststaendigeTaetigkeitEinnahmen:
          cardTemplateData.selbststaendigeTaetigkeit,
        vonEinnahmen: dateFormater(cardTemplateData.versicherungsbeginn),
        bisEinnahmen: dateFormater(cardTemplateData.versicherungsende),
        zahlweiseEinnahmen: cardTemplateData.zahlweise,
        betragEinnahmen: cardTemplateData.betrag,
      };

      break;
    case "EINKOMMEN_GEHALT":
      output={
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        personenzuordnungEinnahmen:mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        steuerSelectEinnahmen: cardTemplateData.grundgehaltSteuer,
        sozialversicherungSelectEinnahmen: cardTemplateData.grundgehaltSozialversicherung,
        gesamtBruttoSelectEinnahmen: cardTemplateData.grundgehaltGesamtbrutto,
        betragMtlTextfieldEinnahmen: cardTemplateData.grundgehalt,
        anzahlGehaelterEinnahmen: cardTemplateData.lohnAnzahlProJahr,
        nettobezugBetragMtlEinnahmen: cardTemplateData.grundgehaltNetto,
       jahresbruttoEinnahmen: cardTemplateData.lohnBruttoProJahr,
        bruttoEinkommenProJahrEinnahmen: cardTemplateData.lohnBruttoProJahrVorjahr,
        variablerBezug: isValueAvailable("variablerBezug",cardTemplateData),
        variablerBezugSteuerSelectEinnahmen:cardTemplateData.variablerBezugSteuer,
variablerBezugSozialversicherungSelectEinnahmen:cardTemplateData.variablerBezugSozialversicherung,
variablerBezugGesamtBruttoSelectEinnahmen:cardTemplateData.variablerBezugGesamtbrutto,
variablerBezugBetragMtlTextfieldEinnahmen:cardTemplateData.variablerBezug,
        fahrtkosten: isValueAvailable("fahrtkosten",cardTemplateData),
        fahrtkostenSteuerSelectEinnahmen:cardTemplateData.fahrtkostenSteuer,
fahrtkostenSozialversicherungSelectEinnahmen:cardTemplateData.fahrtkostenSozialversicherung,
fahrtkostenGesamtBruttoSelectEinnahmen:cardTemplateData.fahrtkostenGesamtbrutto,
fahrtkostenBetragMtlTextfieldEinnahmen:cardTemplateData.fahrtkosten,
        feiertagszuschlag: isValueAvailable("feiertagszuschlag",cardTemplateData),
        feiertagszuschlagSteuerSelectEinnahmen:cardTemplateData.feiertagszuschlagSteuer,
feiertagszuschlagSozialversicherungSelectEinnahmen:cardTemplateData.feiertagszuschlagSozialversicherung,
feiertagszuschlagGesamtBruttoSelectEinnahmen:cardTemplateData.feiertagszuschlagGesamtbrutto,
feiertagszuschlagBetragMtlTextfieldEinnahmen:cardTemplateData.feiertagszuschlag,
        nachtzuschlag: isValueAvailable("nachtzuschlag",cardTemplateData),
        nachtzuschlagSteuerSelectEinnahmen:cardTemplateData.nachtzuschlagSteuer,
nachtzuschlagSozialversicherungSelectEinnahmen:cardTemplateData.nachtzuschlagSozialversicherung,
nachtzuschlagGesamtBruttoSelectEinnahmen:cardTemplateData.nachtzuschlagGesamtbrutto,
nachtzuschlagBetragMtlTextfieldEinnahmen:cardTemplateData.nachtzuschlag,
        dienstwagen: isValueAvailable("dienstwagen",cardTemplateData),
        dienstwagenSteuerSelectEinnahmen:cardTemplateData.dienstwagenSteuer,
dienstwagenSozialversicherungSelectEinnahmen:cardTemplateData.dienstwagenSozialversicherung,
dienstwagenGesamtBruttoSelectEinnahmen:cardTemplateData.dienstwagenGesamtbrutto,
dienstwagenBetragMtlTextfieldEinnahmen:cardTemplateData.dienstwagen,
        kitaGebuehren: isValueAvailable("kitaGebuehren",cardTemplateData),
        kitaGebuehrenSteuerSelectEinnahmen:cardTemplateData.kitaSteuer,
kitaGebuehrenSozialversicherungSelectEinnahmen:cardTemplateData.kitaSozialversicherung,
kitaGebuehrenGesamtBruttoSelectEinnahmen:cardTemplateData.kitaGesamtbrutto,
kitaGebuehrenBetragMtlTextfieldEinnahmen:cardTemplateData.kita,
        jobRad: isValueAvailable("jobRad",cardTemplateData),
        jobRadSteuerSelectEinnahmen:cardTemplateData.jobradSteuer,
jobRadSozialversicherungSelectEinnahmen:cardTemplateData.jobradSozialversicherung,
jobRadGesamtBruttoSelectEinnahmen:cardTemplateData.jobradGesamtbrutto,
jobRadBetragMtlTextfieldEinnahmen:cardTemplateData.jobrad,
        vwlAG: isValueAvailable("vwlAG",cardTemplateData),
        vwlAGSteuerSelectEinnahmen:cardTemplateData.vwlSteuer,
vwlAGSozialversicherungSelectEinnahmen:cardTemplateData.vwlSozialversicherung,
vwlAGGesamtBruttoSelectEinnahmen:cardTemplateData.vwlGesamtbrutto,
vwlAGBetragMtlTextfieldEinnahmen:cardTemplateData.vwl,
        sachbezug: isValueAvailable("sachbezug",cardTemplateData),
        sachbezugSteuerSelectEinnahmen:cardTemplateData.sachbezugSteuer,
sachbezugSozialversicherungSelectEinnahmen:cardTemplateData.sachbezugSozialversicherung,
sachbezugGesamtBruttoSelectEinnahmen:cardTemplateData.sachbezugGesamtbrutto,
sachbezugBetragMtlTextfieldEinnahmen:cardTemplateData.sachbezug,
        provision: isValueAvailable("provision",cardTemplateData),
        provisionSteuerSelectEinnahmen:cardTemplateData.provisionSteuer,
provisionSozialversicherungSelectEinnahmen:cardTemplateData.provisionSozialversicherung,
provisionGesamtBruttoSelectEinnahmen:cardTemplateData.provisionGesamtbrutto,
provisionBetragMtlTextfieldEinnahmen:cardTemplateData.provision,
        sonstigesBrutto: isValueAvailable("sonstigesBrutto",cardTemplateData),
        sonstigesBruttoSteuerSelectEinnahmen:cardTemplateData.sonstigesBruttoSteuer,
sonstigesBruttoSozialversicherungSelectEinnahmen:cardTemplateData.sonstigesBruttoSozialversicherung,
sonstigesBruttoGesamtBruttoSelectEinnahmen:cardTemplateData.sonstigesBruttoGesamtbrutto,
sonstigesBruttoBetragMtlTextfieldEinnahmen:cardTemplateData.sonstigesBrutto,
        sonstigerSachbezug: isValueAvailable("sonstigerSachbezug",cardTemplateData),
        sonstigerSachbezugNettobezugBetragMtlEinnahmen:cardTemplateData.sonstigerSachbezug,
        abzuegeVwlGesamt: isValueAvailable("abzuegeVwlGesamt",cardTemplateData),
        abzuegeVwlGesamtNettobezugBetragMtlEinnahmen:cardTemplateData.abzuegeVwl,
        sonstigerAbzug: isValueAvailable("sonstigerAbzug",cardTemplateData),
        sonstigerAbzugNettobezugBetragMtlEinnahmen:cardTemplateData.sonstigerAbzug,
        bonus: isValueAvailable("bonus",cardTemplateData),
        sonderzahlungenHinzufügenEinnahmen:cardTemplateData.bonuszahlung,
        sonderzahlungenAuszahlungsmonatEinnahmenSelect:cardTemplateData.bonuszahlungAuszahlungsmonat,
        urlaubsgeld: isValueAvailable("urlaubsgeld",cardTemplateData),
        urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmenSelect:cardTemplateData.urlaubsgeldAuszahlungsmonat,
        urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen:cardTemplateData.urlaubsgeld,
        weihnachtsgeld: isValueAvailable("weihnachtsgeld",cardTemplateData),
        weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmenSelect:cardTemplateData.weihnachtsgeldAuszahlungsmonat,
        weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmen:cardTemplateData.weihnachtsgeld,
        gewinnbeteiligung: isValueAvailable("gewinnbeteiligung",cardTemplateData),
        gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmenSelect:cardTemplateData.gewinnbeteiligungAuszahlungsmonat,
        gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmen:cardTemplateData.gewinnbeteiligung,
        sonstigesSonderzahlung: isValueAvailable("sonstigesSonderzahlung",cardTemplateData),
        sonstigesSonderzahlungSonderzahlungenAuszahlungsmonatEinnahmenSelect:cardTemplateData.sonstigesAuszahlungsmonat,
        sonstigesSonderzahlungSonderzahlungenAuszahlungsmonatEinnahmen:cardTemplateData.sonstigerSachbezug,
      };
      break;
    case "EINKOMMEN_MINIJOB":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        personenzuordnungGeringfuegigeBeschaeftigung: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        einkommenProMonatGeringfuegigeBeschaeftigung:
          cardTemplateData.einkommen,
        anzahlLoehneGehaelterProJahrGeringfuegigeBeschaeftigung:
          cardTemplateData.anzahlMonateProJahr,
        leistenEigenbeitraegeSvGeringfuegigeBeschaeftigung:
          cardTemplateData.eigenbeitraegeZurSV,
      };
      break;
    case "EINKOMMEN_SELBSTAENDIGER":

      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        personenzuordnungEinkommenSelbststaendigeEwerbstaetigkeit:
          mandantMapper(cardTemplateData.versicherungsnehmer.id),
        inklUmsatzsteuerEinkommenSelbststaendigeEwerbstaetigkeit:
          cardTemplateData.umsatzInklSteuer,
        exklUmsatzsteuerEinkommenSelbststaendigeEwerbstaetigkeit:
          cardTemplateData.umsatzExklSteuer,
        gewinnVorSteuernEinkommenSelbststaendigeEwerbstaetigkeit:
          cardTemplateData.jaehrlichesEinkommenGewerbebetrieb,
        gewinnNachSteuernEinkommenSelbststaendigeEwerbstaetigkeit:
          cardTemplateData.jaehrlicherGewinnNachSteuer,
        jaehrlichVersteuerndesEinkommenSelbststaendigeEwerbstaetigkeit:
          cardTemplateData.jaehrlichVersteuerndesEinkommen,

      };

      break;
    case "AUSGABEN":
      console.log(cardTemplateData)
      output = {
        initMandantValue: checkForBeide(cardTemplateData),
        personenzuordnungAusgaben:checkForBeide(cardTemplateData),
        stromAusgaben: cardTemplateData.kostenStrom,
        haushaltKonsumAusgaben: cardTemplateData.kostenKonsum,
        nebenkostenWohneigentumAusgaben: cardTemplateData.nebenkosten,
        kleidungSchuheAusgaben: cardTemplateData.kostenKleidung,
        freizeitAusgaben: cardTemplateData.kostenFreizeit,
        haustiereAusgaben: cardTemplateData.kostenHausiere,
        arztMedikamenteAusgaben: cardTemplateData.kostenArzt,
        zeitungenZeitschriftenAbosAusgaben: cardTemplateData.kostenZeitungen,
        vereinSportAusgaben: cardTemplateData.kostenVerein,
        hobbysAusgaben: cardTemplateData.kostenHobbies,
        tvTelefonInternetAusgaben: cardTemplateData.kostenTV,
        kraftstoffAusgaben: cardTemplateData.kostenKfzKraftstoff,
        steuerKFZAusgaben: cardTemplateData.kostenKfzSteuer,
        PKWWartungAusgaben: cardTemplateData.kostenKfz,
        oeffentlicheVerkehrsmittelAusgaben: cardTemplateData.kostenBus,
        kindergartenSchulgeldAusgaben: cardTemplateData.kostenSchule,
        taschengeldAusgaben: cardTemplateData.kostenTaschengeld,
        musikschuleAusgaben: cardTemplateData.kostenMusikschule,
        unterhaltAusgaben: cardTemplateData.kostenUnterhalt,
        sonstigesAusgaben: cardTemplateData.kostenSonstiges,
      };

      break;
    case "AUTOMOBILCLUB":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        versicherungsnehmerAutomobilclub: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        anzahlVersicherterKFZAutomobilclub:
          cardTemplateData.anzahlVersicherterKfz,
        vertragsbeginnVertragslaufzeitAutomobilclub: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitAutomobilclub: dateFormater(
          cardTemplateData.versicherungsende
        ),
        zahlweiseAutomobilclub: cardTemplateData.zahlweise,
        beitragVersicherterKFZAutomobilclub: cardTemplateData.beitrag,
        clubAutomobilclub: cardTemplateData.club,
      };

      break;
    case "SONSTIGE_ZAHLUNG":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        vertragspartnerSonstigeZahlungsverpflichtigungen: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        artSonstigeZahlungsverpflichtigungen: cardTemplateData.art,
        leasinggeberSonstigeZahlungsverpflichtigungen:
          cardTemplateData.gesellschaft,
        verwendungszweckSonstigeZahlungsverpflichtigungen:
          cardTemplateData.verwendungszweck,
        vertragsnummerSonstigeZahlungsverpflichtigungen:
          cardTemplateData.versicherungsnummer,
        beginnZahlungSonstigeZahlungsverpflichtigungen: dateFormater(
          cardTemplateData.beginZahlung
        ),
        endeZahlungSonstigeZahlungsverpflichtigungen: dateFormater(
          cardTemplateData.endeZahlung
        ),
        rateSonstigeZahlungsverpflichtigungen: cardTemplateData.rate,
        zahlweiseSonstigeZahlungsverpflichtigungen: cardTemplateData.zahlweise,
      };

      break;
    case "KONSUMKREDIT":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        kreditnehmerKonsumkredit: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftKonsumkredit: cardTemplateData.gesellschaft,
        tarifbezeichnungKonsumkredit: cardTemplateData.tarifBezeichnung,
        vertragsnummerKonsumkredit: cardTemplateData.versicherungsnummer,
        verwendungsKonsumkredit: cardTemplateData.verwendung,
        beginnKonsumkredit: dateFormater(cardTemplateData.versicherungsbeginn),
        ablaufKonsumkredit: dateFormater(cardTemplateData.versicherungsende),
        zahlweiseKonsumkredit: cardTemplateData.zahlweise,
        rateMtlKonsumkredit: cardTemplateData.rate,
        anfangshoeheMtlKonsumkredit: cardTemplateData.anfangshoehe,
        restschuldKonsumkredit: cardTemplateData.restschuld,
        standVomKonsumkredit: dateFormater(cardTemplateData.standVom),
        zinssatzSelectKonsumkredit: cardTemplateData.zinssatzTyp,
        zinssatzKonsumkredit: cardTemplateData.zinssatz,
        zinsfestschreibungKonsumkredit: dateFormater(
          cardTemplateData.zinsfestschreibung
        ),
      };
      test(output)

      break;
    case "PFERDEHALTERHAFTPFLICHT":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        versicherungsnehmerPferdehalterpflicht: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftPferdehalterpflicht: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftPferdehalterpflicht:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftPferdehalterpflicht:
          cardTemplateData.versicherungsnummer,
        versicherungssummePferdehalterpflicht:
          cardTemplateData.versicherungssumme,
        selbstbeteiligungPferdehalterpflicht: cardTemplateData.sb,
        anzahlPferdePferdehalterpflicht: cardTemplateData.anzahl,
        mitgliedReitvereinPferdehalterpflicht: cardTemplateData.reitverein,
        tarifgruppePferdehalterpflicht: cardTemplateData.tarifgruppe,
        vertragsbeginnVertragslaufzeitPferdehalterpflicht: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        VertragsendeVertragslaufzeitPferdehalterpflicht: dateFormater(
          cardTemplateData.versicherungsende
        ),
        BeitragVertragslaufzeitPferdehalterpflicht: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitPferdehalterpflicht:
          cardTemplateData.zahlweise,
        chipnummerDetailsPferdehalterpflicht: cardTemplateData.chipnummer,
        geburtsdatumDetailsPferdehalterpflicht: dateFormater(
          cardTemplateData.geburtsdatum
        ),
        nameDetailsPferdehalterpflicht: cardTemplateData.tiername,
        farbeDetailsPferdehalterpflicht: cardTemplateData.farbe,
        rasseDetailsPferdehalterpflicht: cardTemplateData.rasse,
        geschlechtDetailsPferdehalterpflicht: cardTemplateData.geschlecht,
        anzahlVorschaedenPferdehalterpflicht:
          cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenPferdehalterpflicht: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenPferdehalterpflicht: cardTemplateData.vorschaedenNotiz,
      };
      break;
    case "BANKPRODUKTE":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftBankprodukte: cardTemplateData.gesellschaft,
        tarifbezeichnungBankprodukte: cardTemplateData.tarifBezeichnung,
        vertragsnummerBankprodukte: cardTemplateData.versicherungsnummer,
        vertragsinhaberBankprodukte: "Placeholder",
        artVertragsinhaberBankprodukte: cardTemplateData.anlageart,
        aktuellerWertVertragsinhaberBankprodukte: cardTemplateData.wert,
        einmalbetraegeVertragsinhaberBankprodukte:
          cardTemplateData.einmalbeitrag,
        beitragVertragsinhaberBankprodukte: cardTemplateData.beitrag,
        zahlweiseVertragsinhaberBankprodukte: cardTemplateData.zahlweise,
        zinsVertragsinhaberBankprodukte: cardTemplateData.zins,
        VWLBankprodukte: cardTemplateData.vwlJaNein,
        arbeitgeberanteilVWLBankprodukte: cardTemplateData.aganteil,
        arbeitnehmeranteilVWLBankprodukte: cardTemplateData.ananteil,
        summeVWLBankprodukte: vwl.ananteil + cardTemplateData.aganteil,
        vertragsbeginnVertragslaufzeitBankprodukte: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitBankprodukte: dateFormater(
          cardTemplateData.versicherungsende
        ),
      };

      break;
    case "VWL_BAUSPAREN":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftVwlUndBausparen: cardTemplateData.gesellschaft,
        tarifbezeichnungVwlUndBausparen: cardTemplateData.tarifBezeichnung,
        vertragsnummerVwlUndBausparen: cardTemplateData.versicherungsnummer,
        vertragsinhaberVwlUndBausparen: "Placeholder",
        artVertragsinhaberVwlUndBausparen: cardTemplateData.art,
        besparungDurchVertragsinhaberVwlUndBausparen:
          cardTemplateData.besparungDurch,
        bausparsummeVertragsinhaberVwlUndBausparen:
          cardTemplateData.bausparsumme,
        vertragsnummerVertragsinhaberVwlUndBausparen:
          cardTemplateData.beitrag,
        dauerzulagenantragVertragsinhaberVwlUndBausparen:
          cardTemplateData.dauerzulagenantrag,
        WOPVertragsinhaberVwlUndBausparen: cardTemplateData.wop,
        ANSparzulageVertragsinhaberVwlUndBausparen:
          cardTemplateData.sparzulageAN,
        aktuellerWertVertragsinhaberVwlUndBausparen: cardTemplateData.beitrag,
        zahlweiseVertragsinhaberVwlUndBausparen: cardTemplateData.zahlweise,
        eigenanteilBeitragszahlerVwlUndBausparen: cardTemplateData.eigenanteil,
        vertragsbeginnVertragslaufzeitVwlUndBausparen: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitVwlUndBausparen: dateFormater(
          cardTemplateData.versicherungsende
        ),
        zahlungLetzteZulageVwlUndBausparen:
          cardTemplateData.riesterzulageLetztmaligBetrag,
        gebuchtAmZahlungLetzteZulageVwlUndBausparen: dateFormater(
          cardTemplateData.riesterzulage
        ),
        guthabenszinsZahlungLetzteZulageVwlUndBausparen:
          cardTemplateData.guthabenzins,
        darlehenszinsZahlungLetzteZulageVwlUndBausparen:
          cardTemplateData.darlehenszins,
        besparungInProzentZahlungLetzteZulageVwlUndBausparen:
          cardTemplateData.besparungPercentage,
        voraussichtlicheZuteilungZahlungLetzteZulageVwlUndBausparen:
          "Placeholder",
        VwlVwlVwlUndBausparen: cardTemplateData.vwlJaNein,
        arbeitgeberanteilVwlVwlUndBausparen: cardTemplateData.aganteil,
        arbeitnehmeranteilVwlVwlUndBausparen: cardTemplateData.ananteil,
        summeVwlVwlUndBausparen:
          cardTemplateData.ananteil + cardTemplateData.aganteil,
      };

      break;
    case "IMMOBILIENBESTAND":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        eigentuemerImmobilienbestand: "Placeholder",
        objektzuordnungEigentuemerImmobilienbestand:
          cardTemplateData.objektnotizen,
        immobilienartEigentuemerImmobilienbestand:
          cardTemplateData.immobilienart,
        nutzungEigentuemerImmobilienbestand: cardTemplateData.nutzung,
        wohnflaecheEigentuemerImmobilienbestand: cardTemplateData.wohnflaeche,
        kaufpreisOhneStellplatzEigentuemerImmobilienbestand:
          cardTemplateData.kaufpreisEuro,
        preisProQmEigentuemerImmobilienbestand:
          cardTemplateData.kaufpreisEuro / cardTemplateData.wohnflaeche,
        stellplatzEigentuemerImmobilienbestand: cardTemplateData.stellplatz,
        kaufpreisStellplatzEigentuemerImmobilienbestand:
          cardTemplateData.stellplatzKaufpreis,
        aktuellerWertEigentuemerImmobilienbestand:
          cardTemplateData.aktuellerwert,
        mieteinnahmeWarmEigentuemerImmobilienbestand:
          cardTemplateData.monatlicheMieteinkuenfte,
        mieteinnahmeKaltEigentuemerImmobilienbestand:
          cardTemplateData.kaltmiete,
        mieteinnahmeStellplatzEigentuemerImmobilienbestand:
          cardTemplateData.stellplatzMiete,
        hausgeldEigentuemerImmobilienbestand: cardTemplateData.hausgeld,
        jahrDesErwerbsEigentuemerImmobilienbestand:
          cardTemplateData.erwerbsjahr,
        belastungUeberschussImmobilienbestand: cardTemplateData.hasUeberschuss,
        nettobelastungMtlEigentuemerImmobilienbestand:
          cardTemplateData.nettobelastungMtlCa,
        restschuldEigentuemerImmobilienbestand: cardTemplateData.restschuld,
        pflegeimmobilieEigentuemerImmobilienbestand:
          cardTemplateData.pflegeimmobilie,
        ferienimmobilieEigentuemerImmobilienbestand:
          cardTemplateData.ferienimmobilie,
        denkmalschutzEigentuemerImmobilienbestand:
          cardTemplateData.denkmalschutz,
        mietpoolEigentuemerImmobilienbestand: cardTemplateData.mietpool,
        endeMietpoolEigentuemerImmobilienbestand: dateFormater(
          cardTemplateData.mietpoolEnde
        ),
        garabtieProQmEigentuemerImmobilienbestand:
          cardTemplateData.garantieProQm,
        voraussichtlichSchuldenfreiEigentuemerImmobilienbestand: dateFormater(
          cardTemplateData.voraussichtlichSchuldenfrei
        ),
        wohnungsnummerEigentuemerImmobilienbestand:
          cardTemplateData.wohnungsnummer,
        baujahrEigentuemerImmobilienbestand: cardTemplateData.baujahr,
      };
      break;
    case "BETEILIGUNGEN":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftBeteiligungenAiF: cardTemplateData.gesellschaft,
        tarifbezeichnungBeteiligungenAiF: cardTemplateData.tarifBezeichnung,
        vertragsnummerBeteiligungenAiF: cardTemplateData.versicherungsnummer,
        verwendungszweckBeteiligungenAiF: cardTemplateData.verwendungszweck,
        vertragsinhabergesellschaftBeteiligungenAiF: "Placeholder",
        investitionsthemaVertragsinhabergesellschaftBeteiligungenAiF: "",
        zeichnungssummeVertragsinhabergesellschaftBeteiligungenAiF: "",
        beginnVertragsinhabergesellschaftBeteiligungenAiF: "",
        endeVertragsinhabergesellschaftBeteiligungenAiF: "",
        einmalbeitragVertragsinhabergesellschaftBeteiligungenAiF:
          cardTemplateData.einmalbeitrag,
        beitragVertragsinhabergesellschaftBeteiligungenAiF:
          cardTemplateData.beitrag,
        jaehrlAusschuettungVertragsinhabergesellschaftBeteiligungenAiF:
          cardTemplateData.prognose,
        aktuellerWertVertragsinhabergesellschaftBeteiligungenAiF:
          cardTemplateData.wert,
        zumVertragsinhabergesellschaftBeteiligungenAiF: dateFormater(
          cardTemplateData.wertZum
        ),
      };
      break;
    case "BU":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftBuEuGjk: cardTemplateData.gesellschaft,
        tarifbezeichnungBuEuGjk: cardTemplateData.tarifBezeichnung,
        vertragsnummerBuEuGjk: cardTemplateData.versicherungsnummer,
        versicherungsnehmerBuEuGjk: cardTemplateData.versicherungsnehmer.id,
        versichertePersonBuEuGjk: cardTemplateData.versichertePersonId,
        artVersichertePersonBuEuGjk: cardTemplateData.art,
        vertragsbeginnVertragslaufzeitBuEuGjk: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitBuEuGjk: dateFormater(
          cardTemplateData.versicherungsende
        ),
        bruttobeitragVertragslaufzeitBuEuGjk: cardTemplateData.bruttobeitrag,
        nettozahlbeitragVertragslaufzeitBuEuGjk: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitBuEuGjk: cardTemplateData.zahlweise,
        rentenleistungMonatVertragslaufzeitBuEuGjk:
          cardTemplateData.rentenleistung,
        dynamikVertragslaufzeitBuEuGjk: cardTemplateData.dynamik,
        garantierteRentensteigerungVertragslaufzeitBuEuGjk:
          cardTemplateData.renteGarantiert,
        rueckkaufswertAktuellVertragslaufzeitBuEuGjk:
          cardTemplateData.rueckkaufswert,
      };
      break;
    case "UNFALL":
      console.log(cardTemplateData);
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftUnfall: cardTemplateData.gesellschaft,
        versicherungsnummerGesellschaftUnfall:cardTemplateData.versicherungsnummer,
        versicherungsnehmerUnfall: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        vertragsbeginnVertragslaufzeitUnfall: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitUnfall: dateFormater(
          cardTemplateData.versicherungsende
        ),
        gesamtbeitragVertragslaufzeitUnfall: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitUnfall: cardTemplateData.zahlweise,
        beitragsrueckerstattungVertragslaufzeitUnfall:
          cardTemplateData.rueckgewaehr,
        zusatzleistungenVertragslaufzeitUnfall:
          cardTemplateData.sonstigeLeistungen,
        anzahlVorschaedenUnfall: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenUnfall: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenUnfall: cardTemplateData.vorschaedenNotiz,
        anzahlVersichertePersonen: cardTemplateData.anzahlVP,
        versichertePersonVersichertePersonUnfall:
          typeof cardTemplateData.versichertePerson === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson.id),
        tarifgruppeVersichertePersonUnfall: cardTemplateData.tarifgruppe,
        risikogruppeVersichertePersonUnfall: cardTemplateData.risikogruppe,
        grundsummeVersichertePersonUnfall: cardTemplateData.grundsumme,
        progressionVersichertePersonUnfall: cardTemplateData.progression,
        vollinvaliditaetVersichertePersonUnfall:
          cardTemplateData.invaliditaetssumme,
        todesfallVersichertePersonUnfall: cardTemplateData.todesfallsumme,
        kosmetischeOperationVersichertePersonUnfall:
          cardTemplateData.operationen,
        bergungskostenVersichertePersonUnfall: cardTemplateData.bergungskosten,
        uebergangsleistungVersichertePersonUnfall:
          cardTemplateData.uebergangsleistung,
        rueckkaufswertVersichertePersonUnfall: cardTemplateData.rueckkaufswert,
        teilbeitragVersichertePersonUnfall: cardTemplateData.teilbeitrag,
        krankenhaustagegeldleistungenUnfall:
          cardTemplateData.krankenhaustagegeld,
        genesungsgeldLeistungenUnfall: cardTemplateData.genesungsgeld,
        unfallKrankentagegeldLeistungenUnfall: cardTemplateData.krankentagegeld,
        wieVielterTagLeistungenUnfall: cardTemplateData.krankentagegeldtag,
        abFuenfzigUVRenteUnfall: cardTemplateData.unfallrenteAb50Check,
        abUVRenteUnfall: cardTemplateData.unfallrenteAbXCheck,
        prozentAbUVRenteUnfall: cardTemplateData.unfallrenteAbXProzent,
        betragUVRenteUnfall: cardTemplateData.unfallrenteAbXEuro,
        dynamikUVRenteUnfall: cardTemplateData.dynamik,
        dynamikProzentUVRenteUnfall: cardTemplateData.dynamikProzent,

        selected2Persons: anzahlPersonen(cardTemplateData.anzahlVP, 2),
        versichertePersonVersichertePersonUnfall2:
          typeof cardTemplateData.versichertePerson2 === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson2.id),
        tarifgruppeVersichertePersonUnfall2: cardTemplateData.tarifgruppe2,
        risikogruppeVersichertePersonUnfall2:cardTemplateData.risikogruppe2,
        grundsummeVersichertePersonUnfall2: cardTemplateData.grundsumme2,
        progressionVersichertePersonUnfall2: cardTemplateData.progression2,
        vollinvaliditaetVersichertePersonUnfall2:
          cardTemplateData.invaliditaetssumme2,
        todesfallVersichertePersonUnfall2: cardTemplateData.todesfallsumme2,
        kosmetischeOperationVersichertePersonUnfall2:
          cardTemplateData.operationen2,
        bergungskostenVersichertePersonUnfall2:
          cardTemplateData.bergungskostenVersichertePersonUnfall2,
        uebergangsleistungVersichertePersonUnfall2:
          cardTemplateData.uebergangsleistung2,
        rueckkaufswertVersichertePersonUnfall2: cardTemplateData.rueckkaufswert2,
        teilbeitragVersichertePersonUnfall2: cardTemplateData.teilbeitrag2,
        krankenhaustagegeldleistungenUnfall2:
          cardTemplateData.krankenhaustagegeld2,
        genesungsgeldLeistungenUnfall2: cardTemplateData.genesungsgeld2,
        unfallKrankentagegeldLeistungenUnfall2:cardTemplateData.krankentagegeld2,
        wieVielterTagLeistungenUnfall2:cardTemplateData.krankentagegeldtag2,
        abFuenfzigUVRenteUnfall2: cardTemplateData.unfallrenteAb50Check2,
        abUVRenteUnfall2: cardTemplateData.unfallrenteAbXCheck2,
        prozentAbUVRenteUnfall2: cardTemplateData.unfallrenteAbXProzent2,
        betragUVRenteUnfall2: cardTemplateData.unfallrenteAbXEuro2,
        dynamikUVRenteUnfall2: cardTemplateData.dynamik2,
        dynamikProzentUVRenteUnfall2: cardTemplateData.dynamikProzent2,

        selected3Persons: anzahlPersonen(cardTemplateData.anzahlVP, 3),
        versichertePersonVersichertePersonUnfall3:
          typeof cardTemplateData.versichertePerson3 === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson3.id),
        tarifgruppeVersichertePersonUnfall3: cardTemplateData.tarifgruppe3,
        risikogruppeVersichertePersonUnfall2:cardTemplateData.risikogruppe3,
        grundsummeVersichertePersonUnfall3: cardTemplateData.grundsumme3,
        progressionVersichertePersonUnfall3: cardTemplateData.progression3,
        vollinvaliditaetVersichertePersonUnfall3:
          cardTemplateData.invaliditaetssumme3,
        todesfallVersichertePersonUnfall3: cardTemplateData.todesfallsumme3,
        kosmetischeOperationVersichertePersonUnfall3:
          cardTemplateData.operationen3,
        bergungskostenVersichertePersonUnfall3:
          cardTemplateData.bergungskostenVersichertePersonUnfall3,
        uebergangsleistungVersichertePersonUnfall3:
          cardTemplateData.uebergangsleistung3,
        rueckkaufswertVersichertePersonUnfall3: cardTemplateData.rueckkaufswert3,
        teilbeitragVersichertePersonUnfall3: cardTemplateData.teilbeitrag3,
        krankenhaustagegeldleistungenUnfall3:
          cardTemplateData.krankenhaustagegeld3,
        genesungsgeldLeistungenUnfall3: cardTemplateData.genesungsgeld3,
        unfallKrankentagegeldLeistungenUnfall: cardTemplateData.krankentagegeld3,
        wieVielterTagLeistungenUnfall: cardTemplateData.krankentagegeldtag3,
        abFuenfzigUVRenteUnfall3: cardTemplateData.unfallrenteAb50Check3,
        abUVRenteUnfall3: cardTemplateData.unfallrenteAbXCheck3,
        prozentAbUVRenteUnfall3: cardTemplateData.unfallrenteAbXProzent3,
        betragUVRenteUnfall3: cardTemplateData.unfallrenteAbXEuro3,
        dynamikUVRenteUnfall3: cardTemplateData.dynamik3,
        dynamikProzentUVRenteUnfall3: cardTemplateData.dynamikProzent3,

        selected4Persons: anzahlPersonen(cardTemplateData.anzahlVP, 4),
        versichertePersonVersichertePersonUnfall4:
          typeof cardTemplateData.versichertePerson4 === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson.id),
        tarifgruppeVersichertePersonUnfall4: cardTemplateData.tarifgruppe4,
        risikogruppeVersichertePersonUnfall2:cardTemplateData.risikogruppe4,
        grundsummeVersichertePersonUnfall4: cardTemplateData.grundsumme4,
        progressionVersichertePersonUnfall4: cardTemplateData.progression4,
        vollinvaliditaetVersichertePersonUnfall4:
          cardTemplateData.invaliditaetssumme4,
        todesfallVersichertePersonUnfall4: cardTemplateData.todesfallsumme4,
        kosmetischeOperationVersichertePersonUnfall4:
          cardTemplateData.operationen4,
        bergungskostenVersichertePersonUnfall4:
          cardTemplateData.bergungskostenVersichertePersonUnfall4,
        uebergangsleistungVersichertePersonUnfall4:
          cardTemplateData.uebergangsleistung4,
        rueckkaufswertVersichertePersonUnfall4: cardTemplateData.rueckkaufswert4,
        teilbeitragVersichertePersonUnfall4: cardTemplateData.teilbeitrag4,
        krankenhaustagegeldleistungenUnfall4:
          cardTemplateData.krankenhaustagegeld4,
        genesungsgeldLeistungenUnfall4: cardTemplateData.genesungsgeld4,
        unfallKrankentagegeldLeistungenUnfall: cardTemplateData.krankentagegeld4,
        wieVielterTagLeistungenUnfall: cardTemplateData.krankentagegeldtag4,
        abFuenfzigUVRenteUnfall4: cardTemplateData.unfallrenteAb50Check4,
        abUVRenteUnfall4: cardTemplateData.unfallrenteAb50Check4,
        prozentAbUVRenteUnfall4: cardTemplateData.unfallrenteAbXProzent4,
        betragUVRenteUnfall4: cardTemplateData.unfallrenteAbXEuro4,
        dynamikUVRenteUnfall4: cardTemplateData.dynamik4,
        dynamikProzentUVRenteUnfall4: cardTemplateData.dynamikProzent4,

        selected5Persons: anzahlPersonen(cardTemplateData.anzahlVP, 5),
        versichertePersonVersichertePersonUnfall5:
          typeof cardTemplateData.versichertePerson5 === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson5.id),
        tarifgruppeVersichertePersonUnfall5: cardTemplateData.tarifgruppe5,
        risikogruppeVersichertePersonUnfall2:cardTemplateData.risikogruppe5,
        grundsummeVersichertePersonUnfall5: cardTemplateData.grundsumme5,
        progressionVersichertePersonUnfall5: cardTemplateData.progression5,
        vollinvaliditaetVersichertePersonUnfall5:
          cardTemplateData.invaliditaetssumme5,
        todesfallVersichertePersonUnfall5: cardTemplateData.todesfallsumme5,
        kosmetischeOperationVersichertePersonUnfall5:
          cardTemplateData.operationen5,
        bergungskostenVersichertePersonUnfall5:
          cardTemplateData.bergungskostenVersichertePersonUnfall5,
        uebergangsleistungVersichertePersonUnfall5:
          cardTemplateData.uebergangsleistung5,
        rueckkaufswertVersichertePersonUnfall5: cardTemplateData.rueckkaufswert5,
        teilbeitragVersichertePersonUnfall5: cardTemplateData.teilbeitrag5,
        krankenhaustagegeldleistungenUnfall5:
          cardTemplateData.krankenhaustagegeld5,
        genesungsgeldLeistungenUnfall5: cardTemplateData.genesungsgeld5,
        unfallKrankentagegeldLeistungenUnfall: cardTemplateData.krankentagegeld5,
        wieVielterTagLeistungenUnfall: cardTemplateData.krankentagegeldtag5,
        abFuenfzigUVRenteUnfall5: cardTemplateData.unfallrenteAb50Check5,
        abUVRenteUnfall5: cardTemplateData.unfallrenteAb50Check5,
        prozentAbUVRenteUnfall5: cardTemplateData.unfallrenteAbXProzent5,
        betragUVRenteUnfall5: cardTemplateData.unfallrenteAbXEuro5,
        dynamikUVRenteUnfall5: cardTemplateData.dynamik5,
        dynamikProzentUVRenteUnfall5: cardTemplateData.dynamikProzent5,

        selected6Persons: anzahlPersonen(cardTemplateData.anzahlVP, 6),
        versichertePersonVersichertePersonUnfall6:
          typeof cardTemplateData.versichertePerson6 === "undefined"
            ? isMandantDefined("undefined")
            : isMandantDefined(cardTemplateData.versichertePerson6.id),
        tarifgruppeVersichertePersonUnfall6: cardTemplateData.tarifgruppe6,
        risikogruppeVersichertePersonUnfall2:cardTemplateData.risikogruppe6,
        grundsummeVersichertePersonUnfall6: cardTemplateData.grundsumme6,
        progressionVersichertePersonUnfall6: cardTemplateData.progression6,
        vollinvaliditaetVersichertePersonUnfall6:
          cardTemplateData.invaliditaetssumme6,
        todesfallVersichertePersonUnfall6: cardTemplateData.todesfallsumme6,
        kosmetischeOperationVersichertePersonUnfall6:
          cardTemplateData.operationen6,
        bergungskostenVersichertePersonUnfall6:
          cardTemplateData.bergungskostenVersichertePersonUnfall6,
        uebergangsleistungVersichertePersonUnfall6:
          cardTemplateData.uebergangsleistung6,
        rueckkaufswertVersichertePersonUnfall6: cardTemplateData.rueckkaufswert6,
        teilbeitragVersichertePersonUnfall6: cardTemplateData.teilbeitrag6,
        krankenhaustagegeldleistungenUnfall6:
          cardTemplateData.krankenhaustagegeld6,
        genesungsgeldLeistungenUnfall6: cardTemplateData.genesungsgeld6,
        unfallKrankentagegeldLeistungenUnfall: cardTemplateData.krankentagegeld,
        wieVielterTagLeistungenUnfall: cardTemplateData.krankentagegeldtag6,
        abFuenfzigUVRenteUnfall6: cardTemplateData.unfallrenteAb50Check6,
        abUVRenteUnfall6: cardTemplateData.unfallrenteAb50Check6,
        prozentAbUVRenteUnfall6: cardTemplateData.unfallrenteAbXProzent6,
        betragUVRenteUnfall6: cardTemplateData.unfallrenteAbXEuro6,
        dynamikUVRenteUnfall6: cardTemplateData.dynamik6,
        dynamikProzentUVRenteUnfall6: cardTemplateData.dynamikProzent6,
      };
      break;
    case "RISIKO":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftTodesfall: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftTodesfall:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftTodesfall:
          cardTemplateData.versicherungsnummer,
        versicherungsnehmerTodesfall: "Placeholder",
        vertragsbeginnVertragslaufzeitTodesfall: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitTodesfall: dateFormater(
          cardTemplateData.versicherungsende
        ),
        bruttobeitragVertragslaufzeitTodesfall: cardTemplateData.bruttobeitrag,
        nettobeitragVertragslaufzeitTodesfall: cardTemplateData.monatsBeitrag,
        zahlweiseVertragslaufzeitTodesfall: cardTemplateData.zahlweise,
        artVertragslaufzeitTodesfall: cardTemplateData.art,
        versicherungssummeTodesfall: cardTemplateData.versicherungssumme,
        summeLinearFallendVersicherungssummeTodesfall:
          cardTemplateData.versicherungssummeLineare,
        vertragAbgetretenVersicherungssummeTodesfall:
          cardTemplateData.vertragAbgetreten,
        MtlBULeistungVersicherungssummeTodesfall:
          cardTemplateData.integrierteBuRentenBetrag,
        beitragsbefreiungBUVersicherungssummeTodesfall:
          cardTemplateData.beitragsbefreiungBU,
        motorradfaherVersicherungssummeTodesfall:
          cardTemplateData.motorradfahrer,
        raucherVersicherungssummeTodesfall: cardTemplateData.raucher,
      };
      break;
    case "DREADDISEASE":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftSchwereKrankheiten: cardTemplateData.gesellschaft,
        TarifbezeichnungGesellschaftSchwereKrankheiten:
          cardTemplateData.tarifBezeichnung,
        versicherungsnehmerSchwereKrankheiten: "Placeholder",
        versichertePersonSchwereKrankheiten:
          cardTemplateData.versichertePersonId,
        vertragsbeginnVertragslaufzeitSchwereKrankheiten: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitSchwereKrankheiten: dateFormater(
          cardTemplateData.versicherungsende
        ),
        bruttobeitragVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.bruttobeitrag,
        nettobeitragVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitSchwereKrankheiten: cardTemplateData.zahlweise,
        leistungenSchwererKrankheitVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.leistungssummeKrankheit,
        artAuszahlungLeistungenSchwererKrankheitVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.leistungssummeKrankheitAuszahlung,
        leistungenTodesfallVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.leistungssummeTod,
        artAuszahlungLeistungenTodesfallVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.leistungssummeTodAuszahlung,
        rueckkaufwertAktuellVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.rueckkaufswert,
        artAuszahlungRueckkaufwertAktuellVertragslaufzeitSchwereKrankheiten:
          cardTemplateData.auszahlung,
      };
      break;
    case "PFLEGEKOSTEN":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftPrivatePflegeversicherung: cardTemplateData.gesellschaft,
        tarifbezeichnungPrivatePflegeversicherung:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerPrivatePflegeversicherung:
          cardTemplateData.versicherungsnummer,
        artPrivatePflegeversicherung: cardTemplateData.art,
        versicherungsnehmerPrivatePflegeversicherung: "Placeholder",
        versichertePersonPrivatePflegeversicherung:
          cardTemplateData.versichertePersonId,
        vertragsbeginnVertragslaufzeitPrivatePflegeversicherung: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitPrivatePflegeversicherung: dateFormater(
          cardTemplateData.versicherungsende
        ),
        zahlweiseVertragslaufzeitPrivatePflegeversicherung:
          cardTemplateData.zahlweise,
        beitragVertragslaufzeitPrivatePflegeversicherung:
          cardTemplateData.beitrag,
        staatlichGeförderVertragslaufzeitPrivatePflegeversicherung:
          cardTemplateData.staatlichGefoerdert,
        leistungPrivatePflegeversicherung: cardTemplateData.leistung,
        tagLeistungPrivatePflegeversicherung: cardTemplateData.leistungProTag,
        monatLeistungPrivatePflegeversicherung:
          !cardTemplateData.leistungProTag,
        dynamikLeistungPrivatePflegeversicherung: cardTemplateData.dynamik,
        fallsDynamikLeistungPrivatePflegeversicherung:
          cardTemplateData.dynamikProzent,
        stationaerAmbulantJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.ambulantEqStationaer,
        EuroJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.leistungIn, // string = "euro"
        prozentJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.leistungIn, // string = "prozent"
        einsJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.pflegegrad1Stationaer,
        zweiJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.pflegegrad2Stationaer,
        dreiJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.pflegegrad3Stationaer,
        vierJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.pflegegrad4Stationaer,
        fuenfJePflegegradStationaerPrivatePflegeversicherung:
          cardTemplateData.pflegegrad5Stationaer,
        nullLeistungJePflegestufePrivatePflegeversicherung:
          cardTemplateData.pflegestufe,
        einsLeistungJePflegestufePrivatePflegeversicherung:
          cardTemplateData.pflegestufe1,
        zweiLeistungJePflegestufePrivatePflegeversicherung:
          cardTemplateData.pflegestufe2,
        dreiLeistungJePflegestufePrivatePflegeversicherung:
          cardTemplateData.pflegestufe3,
      };
      break;
    case "PFLEGERENTEN":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftGesetzlicheKrankenversicherung: cardTemplateData.gesellschaft,
        tarifbezeichnungGesetzlicheKrankenversicherung:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesetzlicheKrankenversicherung:
          cardTemplateData.versicherungsnummer,
        vertragsnehmerGesetzlicheKrankenversicherung: "Placeholder",
        statusGesetzlicheKrankenversicherung: cardTemplateData.status,
        mitKTGGesetzlicheKrankenversicherung: cardTemplateData.mitKT,
        aufKTHoeheVonGesetzlicheKrankenversicherung: cardTemplateData.kTHoehe,
        abDemGesetzlicheKrankenversicherung: cardTemplateData.kTTag,
        GKVLeistungsbonusGesetzlicheKrankenversicherung:
          cardTemplateData.gkvLeistungsbonus,
        vertragsbeginnGesetzlicheKrankenversicherung: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        GKVZusatzbeitragGesetzlicheKrankenversicherung:
          cardTemplateData.gkvZusatz,
        mtlGesetzlicheKrankenversicherung: cardTemplateData.gkvZusatzBeitrag,
        zusatzbeitragInProzentGesetzlicheKrankenversicherung:
          cardTemplateData.gkvZusatzsatz,
        vonBusprogrammGesetzlicheKrankenversicherung:
          cardTemplateData.bonusprogramm,
        zusatzleistungGesetzlicheKrankenversicherung:
          cardTemplateData.zusatzleistungen,
      };
      break;
    case "PFLEGETAGEGELD":
      cardTemplateData = privatePflegeversicherung;

      break;
    case "GESETZLICHE_KRANKEN":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftGesetzlicheKrankenversicherung: cardTemplateData.gesellschaft,
        tarifbezeichnungGesetzlicheKrankenversicherung:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesetzlicheKrankenversicherung:
          cardTemplateData.versicherungsnummer,
        vertragsnehmerGesetzlicheKrankenversicherung: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        statusGesetzlicheKrankenversicherung: cardTemplateData.status,
        mitKTGGesetzlicheKrankenversicherung: cardTemplateData.mitKT,
        aufKTHoeheVonGesetzlicheKrankenversicherung: cardTemplateData.kTHoehe,
        abDemGesetzlicheKrankenversicherung: cardTemplateData.kTTag,
        GKVLeistungsbonusGesetzlicheKrankenversicherung:
          cardTemplateData.gkvLeistungsbonus,
        vertragsbeginnGesetzlicheKrankenversicherung: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        GKVZusatzbeitragGesetzlicheKrankenversicherung:
          cardTemplateData.gkvZusatz,
        mtlGesetzlicheKrankenversicherung: cardTemplateData.monatsBeitrag,
        zusatzbeitragInProzentGesetzlicheKrankenversicherung:
          cardTemplateData.beitrag,
        vonBusprogrammGesetzlicheKrankenversicherung:
          cardTemplateData.bonusprogramm,
        zusatzleistungGesetzlicheKrankenversicherung:
          cardTemplateData.zusatzleistungen,
      };
      break;
    case "KVV":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftPrivateKrankenversicherung: cardTemplateData.gesellschaft,
        tarifbezeichnungPrivateKrankenversicherung:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerPrivateKrankenversicherung:
          cardTemplateData.versicherungsnummer,
        versicherungsnehmerPrivateKrankenversicherung: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        beginnVersicherungsnehmerPrivateKrankenversicherung:dateFormater(cardTemplateData.versicherungsbeginn),
        zahlweiseVersicherungsnehmerPrivatePflegeversicherung:
          cardTemplateData.zahlweise,
        gesamtbeitragVersicherungsnehmerPrivatePflegeversicherung:
          cardTemplateData.beitrag,
        tarifVersicherungsnehmerPrivatePflegeversicherung:
          cardTemplateData.tarifgruppe,
        anzahlVersichertePersonenPrivatePflegeversicherung:
          cardTemplateData.anzahlVP,
        versichertePersonPrivatePflegeversicherung: cardTemplateData.versichertePerson.id,
        sonstigeVersichertePersonPrivatePflegeversicherung:
          cardTemplateData.versichertePersonSonstige,
        tarifVersichertePersonPrivatePflegeversicherung:
          cardTemplateData.tarifname,
        primaerarztprinzipVersichertePersonPrivatePflegeversicherung:
          cardTemplateData.primaerarztprinzip,
        einbettzimmerChefarztVersichertePersonPrivatePflegeversicherung:
          cardTemplateData.einbettzimmer,
        beitragVersichertePersonPrivatePflegeversicherung:
          cardTemplateData.beitragVP,
        zahnbehandlungLeistungsbeschreibungPrivatePflegeversicherung:
          cardTemplateData.zahnbehandlung,
        ambulantLeistungsbeschreibungPrivatePflegeversicherung:
          cardTemplateData.sbAmbulant,
        stationaerLeistungsbeschreibungPrivatePflegeversicherung:
          cardTemplateData.sbStationaer,
        zahnLeistungsbeschreibungPrivatePflegeversicherung:
          cardTemplateData.sbZahn,
        tagEinsPrivatePflegeversicherung: cardTemplateData.krankentagegeldtag1,
        betragEinsPrivatePflegeversicherung: cardTemplateData.krankentagegeld1,
        tagZweiPrivatePflegeversicherung: cardTemplateData.krankentagegeldtag2,
        betragZweiPrivatePflegeversicherung: cardTemplateData.krankentagegeld2,
        kurtagegeldZweiPrivatePflegeversicherung: cardTemplateData.kurtagegeld,
      };
      break;
    case "PRIVATHAFTPFLICHT":
      console.log(cardTemplateData);
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        versicherungsnehmerPrivathaftpflicht: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftPrivathaftpflicht: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftPrivathaftpflicht:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftPrivathaftpflicht:
          cardTemplateData.versicherungsnummer,
        tarifGesellschaftPrivathaftpflicht: cardTemplateData.tarifgruppe,
        inkludiertBetriebshaftpflichtGesellschaftPrivathaftpflicht:
          cardTemplateData.inkludiertInBetriebsHV,
        tarifOeffentlicherDienstGesellschaftPrivathaftpflicht:
          cardTemplateData.oeffentlicherDienst,
        versicherungssummePrivathaftpflicht:
          cardTemplateData.versicherungssumme,
        selbstbeteiligungVersicherungssummePrivathaftpflicht:
          cardTemplateData.sb,
        ehrenamtEinschluessePrivathaftpflicht:
          cardTemplateData.einschlussEhrenamt,
        tagesmutterEinschluessePrivathaftpflicht:
          cardTemplateData.einschlussTagesmutter,
        fremdeSchluesselPrivatEinschluessePrivathaftpflicht:
          cardTemplateData.einschlussSchluesselPrivat,
        fremdeSchlüsselBeruflichEinschluessePrivathaftpflicht:
          cardTemplateData.einschlussSchluesselBeruflich,
        forderungsausfallEinschluessePrivathaftpflicht:
          cardTemplateData.forderungsausfall,
        gefaelligkeitsschaedenEinschluessePrivathaftpflicht:
          cardTemplateData.gefaelligkeitsschaeden,
        schadenersatzrechtsschutzEinschluessePrivathaftpflicht:
          cardTemplateData.schadenersatzrechtsschutz,
        lehrerhaftpflichtEinschluessePrivathaftpflicht:
          cardTemplateData.lehrerhaftpflicht,
        dienstschluesselSummeEinschluessePrivathaftpflicht:
          cardTemplateData.schluesselschadenSumme,
        vertragsbeginnVertragslaufzeitPrivathaftpflicht: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        VertragsendeVertragslaufzeitPrivathaftpflicht: dateFormater(
          cardTemplateData.versicherungsende
        ),
        beitragVertragslaufzeitPrivathaftpflicht: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitPrivathaftpflicht: cardTemplateData.zahlweise,
        anzahlVorschaedenPrivathaftpflicht: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenPrivathaftpflicht: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenPrivathaftpflicht: cardTemplateData.vorschaedenNotiz,
      };

      break;
    case "KVZ":
      console.log(cardTemplateData);
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftKVZusatz: cardTemplateData.gesellschaft,
        tarifbezeichnungKVZusatz: cardTemplateData.tarifBezeichnung,
        vertragsnummerKVZusatz: cardTemplateData.versicherungsnummer,
        versicherungsnehmerKVZusatz: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        beginnVersicherungsnehmerKVZusatz: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        zahlweiseVersicherungsnehmerKVZusatz: cardTemplateData.zahlweise,
        gesamtbeitragVersicherungsnehmerKVZusatz: cardTemplateData.beitrag,
        tarifVersicherungsnehmerKVZusatz: cardTemplateData.tarifgruppe,
        anzahlVersichertePersonenKVZusatz: cardTemplateData.anzahlVP,
        versichertePersonKVZusatz: 
          cardTemplateData.versichertePerson.id,
        ambulantVersichertePersonKVZusatz: cardTemplateData.inklAmbulant,
        stationaerVersichertePersonKVZusatz: cardTemplateData.inklStationaer,
        zahnVersichertePersonKVZusatz: cardTemplateData.inklZahn,
        KTVersichertePersonKVZusatz: cardTemplateData.inklKT,
        kHTVersichertePersonKVZusatz: cardTemplateData.inklKHT,
        tarifLeistungenAmbulantKVZusatz: cardTemplateData.tarifAmbulant,
        altersrueckstellungLeistungenAmbulantKVZusatz:
          cardTemplateData.altersrueckstellungAmbulant,
        sehhilfeLeistungenAmbulantKVZusatz: cardTemplateData.sehhilfe,
        sehhilfeBrilleLeistungenAmbulantKVZusatz: cardTemplateData.brille,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz:
          cardTemplateData.sehhilfeJahre,
        lasikHoeheLeistungenAmbulantKVZusatz: cardTemplateData.lasik,
        heilpraktikerAmbulantKVZusatz: cardTemplateData.heilpraktiker,
        leistungProJahrAmbulantKVZusatz:
          cardTemplateData.leistungProJahrAmbulantKVZusatz,
        hufelandAmbulantKVZusatz: cardTemplateData.hufeland,
        psychotherapieAmbulantKVZusatz: cardTemplateData.psychotherapie,
        kurAmbulantKVZusatz: cardTemplateData.kur,
        hilfsmittelAmbulantKVZusatz: cardTemplateData.hilfsmittel,
        ambulanteOPAmbulantKVZusatz: cardTemplateData.ambulanteOp,
        hoergeraeteAmbulantKVZusatz: cardTemplateData.hoergeraete,
        beitragAmbulantKVZusatz: cardTemplateData.beitragAmbulantKVZusatz,
        tarifLeistungenStationaerKVZusatz: cardTemplateData.tarifStationair,
        altersrueckstellungLeistungenStationaerKVZusatz:
          cardTemplateData.altersrueckstellungStationaer,
        bettzimmerChefarztLeistungenStationaerKVZusatz: cardTemplateData.stationaer,
        erstattungLeistungenStationaerKVZusatz: cardTemplateData.erstattung,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz:
          cardTemplateData.ersatzkrankenhaustagegeld,
        GKVTarifLeistungenStationaerKVZusatz: cardTemplateData.gkvZuzahlungen,
        beitragTarifLeistungenStationaerKVZusatz:
          cardTemplateData.beitragStationaer,
        tarifLeistungenZahnKVZusatz: cardTemplateData.tarifZahn,
        altersrueckstellungLeistungenZahnKVZusatz:
          cardTemplateData.altersrueckstellungZahn,
        regelversorgungLeistungenZahnKVZusatz: cardTemplateData.regelversorgung,
        zahnbehandlungZahnKVZusatz: cardTemplateData.zahnbehandlung,
        zahnersatzZahnKVZusatz: cardTemplateData.zahnersatz,
        kieferorthopaedieLeistungenZahnKVZusatz:
          cardTemplateData.kieferorthopaedie,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz:
          cardTemplateData.anzahlReinigungenProJahr,
        leistungProJahrLeistungenZahnKVZusatz:
          cardTemplateData.reinigungLeistung,
        beitragLeistungenZahnKVZusatz: cardTemplateData.beitragDental,
        tarifKTKVZusatz: cardTemplateData.tarifKT,
        altersrueckstellungKTKVZusatz: cardTemplateData.altersrueckstellungKT,
        tagEinsKTKVZusatz: cardTemplateData.krankentagegeldtag1,
        betragTagEinsKTKVZusatz: cardTemplateData.krankentagegeld1,
        tagZweiKTKVZusatz: cardTemplateData.krankentagegeldtag2,
        betragTagZweiKTKVZusatz: cardTemplateData.krankentagegeld2,
        beitragKTKVZusatz: cardTemplateData.beitragKT,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz:
          cardTemplateData.beitragsrueckerstattung,
        erstattungSonstigeLeistungenKVZusatz: cardTemplateData.erstattung,
        auslandsreiseKVSonstigeLeistungenKVZusatz:
          cardTemplateData.auslandsreiseKV,
        krankenhaustagegeldSonstigeLeistungenKVZusatz:
          cardTemplateData.krankenhaustagegeld,
          artKVZusatz:"1",

          selected2Persons: anzahlPersonen(cardTemplateData.anzahlVP, 2),
          versichertePersonKVZusatz2:  typeof cardTemplateData.versichertePerson2 === "undefined"
          ? isMandantDefined("undefined")
          : isMandantDefined(cardTemplateData.versichertePerson2.id),
        ambulantVersichertePersonKVZusatz2: cardTemplateData.inklAmbulant2,
        stationaerVersichertePersonKVZusatz2: cardTemplateData.inklStationaer2,
        zahnVersichertePersonKVZusatz2: cardTemplateData.inklZahn2,
        KTVersichertePersonKVZusatz2: cardTemplateData.inklKT2,
        kHTVersichertePersonKVZusatz2: cardTemplateData.inklKHT2,
        tarifLeistungenAmbulantKVZusatz2: cardTemplateData.tarifAmbulant2,
        altersrueckstellungLeistungenAmbulantKVZusatz2:
          cardTemplateData.altersrueckstellungAmbulant2,
        sehhilfeLeistungenAmbulantKVZusatz2: cardTemplateData.sehhilfe2,
        sehhilfeBrilleLeistungenAmbulantKVZusatz2: cardTemplateData.brille2,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz2:
          cardTemplateData.sehhilfeJahre2,
        lasikHoeheLeistungenAmbulantKVZusatz2: cardTemplateData.lasik2,
        heilpraktikerAmbulantKVZusatz2: cardTemplateData.heilpraktiker2,
        leistungProJahrAmbulantKVZusatz2:
          cardTemplateData.leistungProJahrAmbulantKVZusatz2,
        hufelandAmbulantKVZusatz2: cardTemplateData.hufeland2,
        psychotherapieAmbulantKVZusatz2: cardTemplateData.psychotherapie2,
        kurAmbulantKVZusatz2: cardTemplateData.kur2,
        hilfsmittelAmbulantKVZusatz2: cardTemplateData.hilfsmittel2,
        ambulanteOPAmbulantKVZusatz2: cardTemplateData.ambulanteOp2,
        hoergeraeteAmbulantKVZusatz2: cardTemplateData.hoergeraete2,
        beitragAmbulantKVZusatz2: cardTemplateData.beitragAmbulantKVZusatz2,
        tarifLeistungenStationaerKVZusatz2: cardTemplateData.tarifStationair2,
        altersrueckstellungLeistungenStationaerKVZusatz2:
          cardTemplateData.altersrueckstellungStationaer2,
        bettzimmerChefarztLeistungenStationaerKVZusatz2: cardTemplateData.stationaer2,
        erstattungLeistungenStationaerKVZusatz2: cardTemplateData.erstattung2,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz2:
          cardTemplateData.ersatzkrankenhaustagegeld2,
        GKVTarifLeistungenStationaerKVZusatz2: cardTemplateData.gkvZuzahlungen2,
        beitragTarifLeistungenStationaerKVZusatz2:
          cardTemplateData.beitragStationaer2,
        tarifLeistungenZahnKVZusatz2: cardTemplateData.tarifZahn2,
        altersrueckstellungLeistungenZahnKVZusatz2:
          cardTemplateData.altersrueckstellungZahn2,
        regelversorgungLeistungenZahnKVZusatz2: cardTemplateData.regelversorgung2,
        zahnbehandlungZahnKVZusatz2: cardTemplateData.zahnbehandlung2,
        zahnersatzZahnKVZusatz2: cardTemplateData.zahnersatz2,
        kieferorthopaedieLeistungenZahnKVZusatz2:
          cardTemplateData.kieferorthopaedie2,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz2:
          cardTemplateData.anzahlReinigungenProJahr2,
        leistungProJahrLeistungenZahnKVZusatz2:
          cardTemplateData.reinigungLeistung2,
        beitragLeistungenZahnKVZusatz2: cardTemplateData.beitragDental2,
        tarifKTKVZusatz2: cardTemplateData.tarifKT2,
        altersrueckstellungKTKVZusatz2: cardTemplateData.altersrueckstellungKT2,
        tagEinsKTKVZusatz2: cardTemplateData.krankentagegeldtag12,
        betragTagEinsKTKVZusatz2: cardTemplateData.krankentagegeld12,
        tagZweiKTKVZusatz2: cardTemplateData.krankentagegeldtag22,
        betragTagZweiKTKVZusatz2: cardTemplateData.krankentagegeld22,
        beitragKTKVZusatz2: cardTemplateData.beitragKT2,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz2:
          cardTemplateData.beitragsrueckerstattung2,
        erstattungSonstigeLeistungenKVZusatz2: cardTemplateData.erstattung2,
        auslandsreiseKVSonstigeLeistungenKVZusatz2:
          cardTemplateData.auslandsreiseKV2,
        krankenhaustagegeldSonstigeLeistungenKVZusatz2:
          cardTemplateData.krankenhaustagegeld2,

          selected3Persons: anzahlPersonen(cardTemplateData.anzahlVP, 3),
          versichertePersonKVZusatz3:  typeof cardTemplateData.versichertePerson3 === "undefined"
          ? isMandantDefined("undefined")
          : isMandantDefined(cardTemplateData.versichertePerson3.id),
        ambulantVersichertePersonKVZusatz3: cardTemplateData.inklAmbulant3,
        stationaerVersichertePersonKVZusatz3: cardTemplateData.inklStationaer3,
        zahnVersichertePersonKVZusatz3: cardTemplateData.inklZahn3,
        KTVersichertePersonKVZusatz3: cardTemplateData.inklKT3,
        kHTVersichertePersonKVZusatz3: cardTemplateData.inklKHT3,
        tarifLeistungenAmbulantKVZusatz3: cardTemplateData.tarifAmbulant3,
        altersrueckstellungLeistungenAmbulantKVZusatz3:
          cardTemplateData.altersrueckstellungAmbulant3,
        sehhilfeLeistungenAmbulantKVZusatz3: cardTemplateData.sehhilfe3,
        sehhilfeBrilleLeistungenAmbulantKVZusatz3: cardTemplateData.brille3,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz3:
          cardTemplateData.sehhilfeJahre3,
        lasikHoeheLeistungenAmbulantKVZusatz3: cardTemplateData.lasik3,
        heilpraktikerAmbulantKVZusatz3: cardTemplateData.heilpraktiker3,
        leistungProJahrAmbulantKVZusatz3:
          cardTemplateData.leistungProJahrAmbulantKVZusatz3,
        hufelandAmbulantKVZusatz3: cardTemplateData.hufeland3,
        psychotherapieAmbulantKVZusatz3: cardTemplateData.psychotherapie3,
        kurAmbulantKVZusatz3: cardTemplateData.kur3,
        hilfsmittelAmbulantKVZusatz3: cardTemplateData.hilfsmittel3,
        ambulanteOPAmbulantKVZusatz3: cardTemplateData.ambulanteOp3,
        hoergeraeteAmbulantKVZusatz3: cardTemplateData.hoergeraete3,
        beitragAmbulantKVZusatz3: cardTemplateData.beitragAmbulantKVZusatz3,
        tarifLeistungenStationaerKVZusatz3: cardTemplateData.tarifStationair3,
        altersrueckstellungLeistungenStationaerKVZusatz3:
          cardTemplateData.altersrueckstellungStationaer3,
        bettzimmerChefarztLeistungenStationaerKVZusatz3: cardTemplateData.stationaer3,
        erstattungLeistungenStationaerKVZusatz3: cardTemplateData.erstattung3,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz3:
          cardTemplateData.ersatzkrankenhaustagegeld3,
        GKVTarifLeistungenStationaerKVZusatz3: cardTemplateData.gkvZuzahlungen3,
        beitragTarifLeistungenStationaerKVZusatz3:
          cardTemplateData.beitragStationaer3,
        tarifLeistungenZahnKVZusatz3: cardTemplateData.tarifZahn3,
        altersrueckstellungLeistungenZahnKVZusatz3:
          cardTemplateData.altersrueckstellungZahn3,
        regelversorgungLeistungenZahnKVZusatz3: cardTemplateData.regelversorgung3,
        zahnbehandlungZahnKVZusatz3: cardTemplateData.zahnbehandlung3,
        zahnersatzZahnKVZusatz3: cardTemplateData.zahnersatz3,
        kieferorthopaedieLeistungenZahnKVZusatz3:
          cardTemplateData.kieferorthopaedie3,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz3:
          cardTemplateData.anzahlReinigungenProJahr3,
        leistungProJahrLeistungenZahnKVZusatz3:
          cardTemplateData.reinigungLeistung3,
        beitragLeistungenZahnKVZusatz3: cardTemplateData.beitragDental3,
        tarifKTKVZusatz3: cardTemplateData.tarifKT3,
        altersrueckstellungKTKVZusatz3: cardTemplateData.altersrueckstellungKT3,
        tagEinsKTKVZusatz3: cardTemplateData.krankentagegeldtag13,
        betragTagEinsKTKVZusatz3: cardTemplateData.krankentagegeld13,
        tagZweiKTKVZusatz3: cardTemplateData.krankentagegeldtag23,
        betragTagZweiKTKVZusatz3: cardTemplateData.krankentagegeld23,
        beitragKTKVZusatz3: cardTemplateData.beitragKT3,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz3:
          cardTemplateData.beitragsrueckerstattung3,
        erstattungSonstigeLeistungenKVZusatz3: cardTemplateData.erstattung3,
        auslandsreiseKVSonstigeLeistungenKVZusatz3:
          cardTemplateData.auslandsreiseKV3,
        krankenhaustagegeldSonstigeLeistungenKVZusatz3:
          cardTemplateData.krankenhaustagegeld3,

          selected4Persons: anzahlPersonen(cardTemplateData.anzahlVP, 4),
          versichertePersonKVZusatz4:  typeof cardTemplateData.versichertePerson4 === "undefined"
          ? isMandantDefined("undefined")
          : isMandantDefined(cardTemplateData.versichertePerson4.id),
        ambulantVersichertePersonKVZusatz4: cardTemplateData.inklAmbulant4,
        stationaerVersichertePersonKVZusatz4: cardTemplateData.inklStationaer4,
        zahnVersichertePersonKVZusatz4: cardTemplateData.inklZahn4,
        KTVersichertePersonKVZusatz4: cardTemplateData.inklKT4,
        kHTVersichertePersonKVZusatz4: cardTemplateData.inklKHT4,
        tarifLeistungenAmbulantKVZusatz4: cardTemplateData.tarifAmbulant4,
        altersrueckstellungLeistungenAmbulantKVZusatz4:
          cardTemplateData.altersrueckstellungAmbulant4,
        sehhilfeLeistungenAmbulantKVZusatz4: cardTemplateData.sehhilfe4,
        sehhilfeBrilleLeistungenAmbulantKVZusatz4: cardTemplateData.brille4,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz4:
          cardTemplateData.sehhilfeJahre4,
        lasikHoeheLeistungenAmbulantKVZusatz4: cardTemplateData.lasik4,
        heilpraktikerAmbulantKVZusatz4: cardTemplateData.heilpraktiker4,
        leistungProJahrAmbulantKVZusatz4:
          cardTemplateData.leistungProJahrAmbulantKVZusatz4,
        hufelandAmbulantKVZusatz4: cardTemplateData.hufeland4,
        psychotherapieAmbulantKVZusatz4: cardTemplateData.psychotherapie4,
        kurAmbulantKVZusatz4: cardTemplateData.kur4,
        hilfsmittelAmbulantKVZusatz4: cardTemplateData.hilfsmittel4,
        ambulanteOPAmbulantKVZusatz4: cardTemplateData.ambulanteOp4,
        hoergeraeteAmbulantKVZusatz4: cardTemplateData.hoergeraete4,
        beitragAmbulantKVZusatz4: cardTemplateData.beitragAmbulantKVZusatz4,
        tarifLeistungenStationaerKVZusatz4: cardTemplateData.tarifStationair4,
        altersrueckstellungLeistungenStationaerKVZusatz4:
          cardTemplateData.altersrueckstellungStationaer4,
        bettzimmerChefarztLeistungenStationaerKVZusatz4: cardTemplateData.stationaer4,
        erstattungLeistungenStationaerKVZusatz4: cardTemplateData.erstattung4,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz4:
          cardTemplateData.ersatzkrankenhaustagegeld4,
        GKVTarifLeistungenStationaerKVZusatz4: cardTemplateData.gkvZuzahlungen4,
        beitragTarifLeistungenStationaerKVZusatz4:
          cardTemplateData.beitragStationaer4,
        tarifLeistungenZahnKVZusatz4: cardTemplateData.tarifZahn4,
        altersrueckstellungLeistungenZahnKVZusatz4:
          cardTemplateData.altersrueckstellungZahn4,
        regelversorgungLeistungenZahnKVZusatz4: cardTemplateData.regelversorgung4,
        zahnbehandlungZahnKVZusatz4: cardTemplateData.zahnbehandlung4,
        zahnersatzZahnKVZusatz4: cardTemplateData.zahnersatz4,
        kieferorthopaedieLeistungenZahnKVZusatz4:
          cardTemplateData.kieferorthopaedie4,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz4:
          cardTemplateData.anzahlReinigungenProJahr4,
        leistungProJahrLeistungenZahnKVZusatz4:
          cardTemplateData.reinigungLeistung4,
        beitragLeistungenZahnKVZusatz4: cardTemplateData.beitragDental4,
        tarifKTKVZusatz4: cardTemplateData.tarifKT4,
        altersrueckstellungKTKVZusatz4: cardTemplateData.altersrueckstellungKT4,
        tagEinsKTKVZusatz4: cardTemplateData.krankentagegeldtag14,
        betragTagEinsKTKVZusatz4: cardTemplateData.krankentagegeld14,
        tagZweiKTKVZusatz4: cardTemplateData.krankentagegeldtag24,
        betragTagZweiKTKVZusatz4: cardTemplateData.krankentagegeld24,
        beitragKTKVZusatz4: cardTemplateData.beitragKT4,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz4:
          cardTemplateData.beitragsrueckerstattung4,
        erstattungSonstigeLeistungenKVZusatz4: cardTemplateData.erstattung4,
        auslandsreiseKVSonstigeLeistungenKVZusatz4:
          cardTemplateData.auslandsreiseKV4,
        krankenhaustagegeldSonstigeLeistungenKVZusatz4:
          cardTemplateData.krankenhaustagegeld4,

          selected5Persons: anzahlPersonen(cardTemplateData.anzahlVP, 5),
          versichertePersonKVZusatz5:  typeof cardTemplateData.versichertePerson5 === "undefined"
          ? isMandantDefined("undefined")
          : isMandantDefined(cardTemplateData.versichertePerson5.id),
        ambulantVersichertePersonKVZusatz5: cardTemplateData.inklAmbulant5,
        stationaerVersichertePersonKVZusatz5: cardTemplateData.inklStationaer5,
        zahnVersichertePersonKVZusatz5: cardTemplateData.inklZahn5,
        KTVersichertePersonKVZusatz5: cardTemplateData.inklKT5,
        kHTVersichertePersonKVZusatz5: cardTemplateData.inklKHT5,
        tarifLeistungenAmbulantKVZusatz5: cardTemplateData.tarifAmbulant5,
        altersrueckstellungLeistungenAmbulantKVZusatz5:
          cardTemplateData.altersrueckstellungAmbulant5,
        sehhilfeLeistungenAmbulantKVZusatz5: cardTemplateData.sehhilfe5,
        sehhilfeBrilleLeistungenAmbulantKVZusatz5: cardTemplateData.brille5,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz5:
          cardTemplateData.sehhilfeJahre5,
        lasikHoeheLeistungenAmbulantKVZusatz5: cardTemplateData.lasik5,
        heilpraktikerAmbulantKVZusatz5: cardTemplateData.heilpraktiker5,
        leistungProJahrAmbulantKVZusatz5:
          cardTemplateData.leistungProJahrAmbulantKVZusatz5,
        hufelandAmbulantKVZusatz5: cardTemplateData.hufeland5,
        psychotherapieAmbulantKVZusatz5: cardTemplateData.psychotherapie5,
        kurAmbulantKVZusatz5: cardTemplateData.kur5,
        hilfsmittelAmbulantKVZusatz5: cardTemplateData.hilfsmittel5,
        ambulanteOPAmbulantKVZusatz5: cardTemplateData.ambulanteOp5,
        hoergeraeteAmbulantKVZusatz5: cardTemplateData.hoergeraete5,
        beitragAmbulantKVZusatz5: cardTemplateData.beitragAmbulantKVZusatz5,
        tarifLeistungenStationaerKVZusatz5: cardTemplateData.tarifStationair5,
        altersrueckstellungLeistungenStationaerKVZusatz5:
          cardTemplateData.altersrueckstellungStationaer5,
        bettzimmerChefarztLeistungenStationaerKVZusatz5: cardTemplateData.stationaer5,
        erstattungLeistungenStationaerKVZusatz5: cardTemplateData.erstattung5,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz5:
          cardTemplateData.ersatzkrankenhaustagegeld5,
        GKVTarifLeistungenStationaerKVZusatz5: cardTemplateData.gkvZuzahlungen5,
        beitragTarifLeistungenStationaerKVZusatz5:
          cardTemplateData.beitragStationaer5,
        tarifLeistungenZahnKVZusatz5: cardTemplateData.tarifZahn5,
        altersrueckstellungLeistungenZahnKVZusatz5:
          cardTemplateData.altersrueckstellungZahn5,
        regelversorgungLeistungenZahnKVZusatz5: cardTemplateData.regelversorgung5,
        zahnbehandlungZahnKVZusatz5: cardTemplateData.zahnbehandlung5,
        zahnersatzZahnKVZusatz5: cardTemplateData.zahnersatz5,
        kieferorthopaedieLeistungenZahnKVZusatz5:
          cardTemplateData.kieferorthopaedie5,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz5:
          cardTemplateData.anzahlReinigungenProJahr5,
        leistungProJahrLeistungenZahnKVZusatz5:
          cardTemplateData.reinigungLeistung5,
        beitragLeistungenZahnKVZusatz5: cardTemplateData.beitragDental5,
        tarifKTKVZusatz5: cardTemplateData.tarifKT5,
        altersrueckstellungKTKVZusatz5: cardTemplateData.altersrueckstellungKT5,
        tagEinsKTKVZusatz5: cardTemplateData.krankentagegeldtag15,
        betragTagEinsKTKVZusatz5: cardTemplateData.krankentagegeld15,
        tagZweiKTKVZusatz5: cardTemplateData.krankentagegeldtag25,
        betragTagZweiKTKVZusatz5: cardTemplateData.krankentagegeld25,
        beitragKTKVZusatz5: cardTemplateData.beitragKT5,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz5:
          cardTemplateData.beitragsrueckerstattung5,
        erstattungSonstigeLeistungenKVZusatz5: cardTemplateData.erstattung5,
        auslandsreiseKVSonstigeLeistungenKVZusatz5:
          cardTemplateData.auslandsreiseKV5,
        krankenhaustagegeldSonstigeLeistungenKVZusatz5:
          cardTemplateData.krankenhaustagegeld5,

          selected6Persons: anzahlPersonen(cardTemplateData.anzahlVP, 6),
          versichertePersonKVZusatz6:  typeof cardTemplateData.versichertePerson6 === "undefined"
          ? isMandantDefined("undefined")
          : isMandantDefined(cardTemplateData.versichertePerson6.id),
        ambulantVersichertePersonKVZusatz6: cardTemplateData.inklAmbulant6,
        stationaerVersichertePersonKVZusatz6: cardTemplateData.inklStationaer6,
        zahnVersichertePersonKVZusatz6: cardTemplateData.inklZahn6,
        KTVersichertePersonKVZusatz6: cardTemplateData.inklKT6,
        kHTVersichertePersonKVZusatz6: cardTemplateData.inklKHT6,
        tarifLeistungenAmbulantKVZusatz6: cardTemplateData.tarifAmbulant6,
        altersrueckstellungLeistungenAmbulantKVZusatz6:
          cardTemplateData.altersrueckstellungAmbulant6,
        sehhilfeLeistungenAmbulantKVZusatz6: cardTemplateData.sehhilfe6,
        sehhilfeBrilleLeistungenAmbulantKVZusatz6: cardTemplateData.brille6,
        sehhilfeZeitraumLeistungenAmbulantKVZusatz6:
          cardTemplateData.sehhilfeJahre6,
        lasikHoeheLeistungenAmbulantKVZusatz6: cardTemplateData.lasik6,
        heilpraktikerAmbulantKVZusatz6: cardTemplateData.heilpraktiker6,
        leistungProJahrAmbulantKVZusatz6:
          cardTemplateData.leistungProJahrAmbulantKVZusatz6,
        hufelandAmbulantKVZusatz6: cardTemplateData.hufeland6,
        psychotherapieAmbulantKVZusatz6: cardTemplateData.psychotherapie6,
        kurAmbulantKVZusatz6: cardTemplateData.kur6,
        hilfsmittelAmbulantKVZusatz6: cardTemplateData.hilfsmittel6,
        ambulanteOPAmbulantKVZusatz6: cardTemplateData.ambulanteOp6,
        hoergeraeteAmbulantKVZusatz6: cardTemplateData.hoergeraete6,
        beitragAmbulantKVZusatz6: cardTemplateData.beitragAmbulantKVZusatz6,
        tarifLeistungenStationaerKVZusatz6: cardTemplateData.tarifStationair6,
        altersrueckstellungLeistungenStationaerKVZusatz6:
          cardTemplateData.altersrueckstellungStationaer6,
        bettzimmerChefarztLeistungenStationaerKVZusatz6: cardTemplateData.stationaer6,
        erstattungLeistungenStationaerKVZusatz6: cardTemplateData.erstattung6,
        ersatzkrankenhausTarifLeistungenStationaerKVZusatz6:
          cardTemplateData.ersatzkrankenhaustagegeld6,
        GKVTarifLeistungenStationaerKVZusatz6: cardTemplateData.gkvZuzahlungen6,
        beitragTarifLeistungenStationaerKVZusatz6:
          cardTemplateData.beitragStationaer6,
        tarifLeistungenZahnKVZusatz6: cardTemplateData.tarifZahn6,
        altersrueckstellungLeistungenZahnKVZusatz6:
          cardTemplateData.altersrueckstellungZahn6,
        regelversorgungLeistungenZahnKVZusatz6: cardTemplateData.regelversorgung6,
        zahnbehandlungZahnKVZusatz6: cardTemplateData.zahnbehandlung6,
        zahnersatzZahnKVZusatz6: cardTemplateData.zahnersatz6,
        kieferorthopaedieLeistungenZahnKVZusatz6:
          cardTemplateData.kieferorthopaedie6,
        anzahlReinigungenProJahrLeistungenZahnKVZusatz6:
          cardTemplateData.anzahlReinigungenProJahr6,
        leistungProJahrLeistungenZahnKVZusatz6:
          cardTemplateData.reinigungLeistung6,
        beitragLeistungenZahnKVZusatz6: cardTemplateData.beitragDental6,
        tarifKTKVZusatz6: cardTemplateData.tarifKT6,
        altersrueckstellungKTKVZusatz6: cardTemplateData.altersrueckstellungKT6,
        tagEinsKTKVZusatz6: cardTemplateData.krankentagegeldtag16,
        betragTagEinsKTKVZusatz6: cardTemplateData.krankentagegeld16,
        tagZweiKTKVZusatz6: cardTemplateData.krankentagegeldtag26,
        betragTagZweiKTKVZusatz6: cardTemplateData.krankentagegeld26,
        beitragKTKVZusatz6: cardTemplateData.beitragKT6,
        beitragsrueckerstattungSonstigeLeistungenKVZusatz6:
          cardTemplateData.beitragsrueckerstattung6,
        erstattungSonstigeLeistungenKVZusatz6: cardTemplateData.erstattung6,
        auslandsreiseKVSonstigeLeistungenKVZusatz6:
          cardTemplateData.auslandsreiseKV6,
        krankenhaustagegeldSonstigeLeistungenKVZusatz6:
          cardTemplateData.krankenhaustagegeld6,
      };

      break;
    case "HUNDEHALTERHAFTPFLICHT":

      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        versicherungsnehmerHundehalterpflicht: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        gesellschaftHundehalterpflicht: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftHundehalterpflicht:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftHundehalterpflicht:
          cardTemplateData.versicherungsnummer,
        tarifOeffentlicherDienstGesellschaftHundehalterpflicht:
          cardTemplateData.oeffentlicherDienst,
        anzahlHundeGesellschaftHundehalterpflicht: cardTemplateData.anzahl,
        versicherungssummeHundehalterpflicht:
          cardTemplateData.versicherungssumme,
        selbstbeteiligungHundehalterpflicht: cardTemplateData.sb,
        vertragsbeginnVertragslaufzeitHundehalterpflicht: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitHundehalterpflicht: dateFormater(
          cardTemplateData.versicherungsende
        ),
        beitragVertragslaufzeitHundehalterpflicht: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitHundehalterpflicht: cardTemplateData.zahlweise,
        detailsHundehalterpflicht: cardTemplateData.hunderasse1,
        chipnummerDetailsHundehalterpflicht: cardTemplateData.chipnummer,
        geburtsdatumDetailsHundehalterpflicht: dateFormater(
          cardTemplateData.geburtsdatum
        ),
        nameDetailsHundehalterpflicht: cardTemplateData.tiername,
        farbeDetailsHundehalterpflicht: cardTemplateData.farbe,
        geschlechtDetailsHundehalterpflicht:
          cardTemplateData.geschlecht,
        anzahlVorschaedenHundehalterpflicht: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenHundehalterpflicht: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenHundehalterpflicht: cardTemplateData.vorschaedenNotiz,
      };

      break;
    case "HAUSRAT":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        versicherungsnehmerHausrat: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        gesellschaftHausrat: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftHausrat: cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftHausrat: cardTemplateData.versicherungsnummer,
        staendigBewohntGesellschaftHausrat: cardTemplateData.staendigBewohnt,
        erhoehungWertsachenEinschluesseHausrat: booleanFormater(
          cardTemplateData.wertsachen
        ),
        ueberspannungEinschluesseHausrat: booleanFormater(
          cardTemplateData.ueberspannung
        ),
        elementarschaedenEinschluesseHausrat: cardTemplateData.elementar,
        versicherungssummeHausrat: cardTemplateData.versicherungssumme,
        selbstbeteiligungVersicherungssummeHausrat: cardTemplateData.sb,
        postleitzahlVersicherungssummeHausrat: cardTemplateData.plz,
        stadtVersicherungssummeHausrat: cardTemplateData.stadt,
        strasseVersicherungssummeHausrat: cardTemplateData.strasse,
        hausnummerVersicherungssummeHausrat: cardTemplateData.hausnummer,
        immobilienartVersicherungssummeHausrat: cardTemplateData.iart,
        wohnflaecheVersicherungssummeHausrat: cardTemplateData.wohnflaeche,
        unterversicherungsverzichtVersicherungssummeHausrat:
          cardTemplateData.unterversicherungsverzicht,
        fahrradVersicherungssummeHausrat: cardTemplateData.fahrrad,
        wertVersicherungssummeHausrat: cardTemplateData.fahrradWert,
        glasversicherungVersicherungssummeHausrat: cardTemplateData.glasflaeche,
        mitCeranKochfeldernVersicherungssummeHausrat: cardTemplateData.ceran,
        aquariumVersicherungssummeHausrat: cardTemplateData.aquarium,
        wasserbettVersicherungssummeHausrat: cardTemplateData.wasserbett,
        tarifgruppeVersicherungssummeHausrat: cardTemplateData.tarifgruppe,
        tarifOeffentlicherDienstVersicherungssummeHausrat:
          cardTemplateData.oeffentlicherDienst,
        anzahlVorschaedenHausrat: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenHausrat: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenHausrat: cardTemplateData.vorschaedenNotiz,
      };

      break;
    case "RECHTSSCHUTZ":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        versicherungsnehmerRechtschutz: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftRechtschutz: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftRechtschutz:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftRechtschutz:
          cardTemplateData.versicherungsnummer,
        tarifGesellschaftRechtschutz: cardTemplateData.tarifgruppe,
        tarifOeffentlicherDienstGesellschaftRechtschutz:
          cardTemplateData.oeffentlicherDienst,
        privatRechtschutzpaketDeckumfangRechtschutz: cardTemplateData.privat,
        berufRechtschutzpaketDeckumfangRechtschutz: cardTemplateData.beruf,
        verkehrRechtschutzpaketDeckumfangRechtschutz: cardTemplateData.verkehr,
        wuGRechtschutzpaketDeckumfangRechtschutz: cardTemplateData.wug,
        beratungRechtschutzpaketDeckumfangRechtschutz:
          cardTemplateData.beratung,
        spezialStrRechtschutzpaketDeckumfangRechtschutz:
          cardTemplateData.strafrechtsschutz,
        vermieterRechtschutzpaketDeckumfangRechtschutz:
          cardTemplateData.vermieter,
        sonstigesRechtschutzpaketDeckumfangRechtschutz: cardTemplateData.sonstiges,
        fallsSonstigesRechtschutzpaketDeckumfangRechtschutz:
          cardTemplateData.sonstiges,
        versichertRechtschutzpaketDeckumfangRechtschutz:
          cardTemplateData.telAnwaltErstberatung,
        versicherungssummeRechtschutz: cardTemplateData.versicherungssumme,
        unbegrenztVersicherungssummeRechtschutz: cardTemplateData.unbegrenzt,
        selbstbeteiligungVersicherungssummeRechtschutz: cardTemplateData.sb,
        vertragsbeginnVertragslaufzeitRechtschutz: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitRechtschutz: dateFormater(
          cardTemplateData.versicherungsende
        ),
        beitragVertragslaufzeitRechtschutz: cardTemplateData.beitrag,
        zahlweiseVertragslaufzeitRechtschutz: cardTemplateData.zahlweise,
        anzahlVorschaedenRechtschutz: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenRechtschutz: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenRechtschutz: cardTemplateData.vorschaedenNotiz,
      };

      break;
    case "WOHNGEBAEUDE":
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        versicherungsnehmerWohngebaude: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        gesellschaftGesellschaftWohngebaeude: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftWohngebaeude:
          cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftWohngebaeude:
          cardTemplateData.versicherungsnummer,
        tarifgruppeVersicherungssummeWohngebaeude: cardTemplateData.tarifgruppe,
        tarifOeffentlicherDienstGesellschaftWohngebaeude:
          cardTemplateData.oeffentlicherDienst,
        feuerAbsicherungWohngebaeude: cardTemplateData.feuer,
        sturmHagelAbsicherungWohngebaeude: cardTemplateData.sturm,
        glasAbsicherungWohngebaeude: cardTemplateData.glasflaeche,
        leitungswasserAbsicherungWohngebaeude: cardTemplateData.leitungswasser,
        elementarschadenAbsicherungWohngebaeude: cardTemplateData.elementar,
        sonstigeLeistungenAbsicherungWohngebaeude:
          cardTemplateData.sonstigeLeistungen,
        bauartklasseGaragenWohngebaeude: cardTemplateData.bauartklasse,
        fertighausgruppeWohnflaecheGaragenWohngebaeude:
          cardTemplateData.fertighausgruppe,
        kellergeschossWohnflaecheGaragenWohngebaeude:
          cardTemplateData.qmKellergeschoss,
        erdgeschossWohnflaecheGaragenWohngebaeude:
          cardTemplateData.qmErdgeschoss,
        ersterObergeschossWohnflaecheGaragenWohngebaeude:
          cardTemplateData.qmObergeschoss,
        zweiterObergeschossWohnflaecheGaragenWohngebaeude:
          cardTemplateData.qmObergeschoss2,
        dachgeschossWohnflaecheGaragenWohngebaeude:
          cardTemplateData.qmDachgeschoss,
        sanierungsmaßnahmenWohnflaecheGaragenWohngebaeude: booleanFormater(
          cardTemplateData.schaeden
        ),
        wohnflaecheWohnflaecheGaragenWohngebaeude: cardTemplateData.wohnflaeche,
        anzahlWohneinheitenWohnflaecheGaragenWohngebaeude:
          cardTemplateData.wohneinheiten,
        anzahlGaragenWohnflaecheGaragenWohngebaeude: cardTemplateData.garagen,
        sonstigeGaragenWohnflaecheGaragenWohngebaeude:
          cardTemplateData.garagenSonstige,
        anzahlCarportsWohnflaecheGaragenWohngebaeude: cardTemplateData.carport,
        anzahlGeschosseWohnflaecheGaragenWohngebaeude:
          cardTemplateData.wohneinheiten,
        gebaeudeartWohnflaecheGaragenWohngebaeude: cardTemplateData.garagen,
        staendigBewohntWohnflaecheGaragenWohngebaeude:
          cardTemplateData.staendigBewohnt,
        ableitungsrohreWohnflaecheGaragenWohngebaeude:
          cardTemplateData.ableitungsrohre,
        dachartWohnflaecheGaragenWohngebaeude: cardTemplateData.dachart,
        grundstueckzubehoerWohnflaecheGaragenWohngebaeude:
          cardTemplateData.grundstueckszubehoer,
        fussbodenheizungWohnflaecheGaragenWohngebaeude:
          cardTemplateData.fussbodenheizung,
        schwimmbadWohnflaecheGaragenWohngebaeude:
          cardTemplateData.schwimmbadPos,
        baujahrWohnflaecheGaragenWohngebaeude: cardTemplateData.baujahr,
        neubauwertWohnflaecheGaragenWohngebaeude: cardTemplateData.neubausumme,
        wertWohnflaecheGaragenWohngebaeude: cardTemplateData.wert1914,
        massivWaendeWohngebaeude: cardTemplateData.waendeMassiv,
        nichtMassivWaendeWohngebaeude: cardTemplateData.waendeNichtMassiv,
        stahlHolzfachwerkNichtBrennbareFuellungWaendeWohngebaeude:
          cardTemplateData.waendeNichtBrennbar,
        stahlHolzfachwerkBrennbareFuellungWaendeWohngebaeude:
          cardTemplateData.waendeBrennbar,
        sonstigesWaendeWohngebaeude: cardTemplateData.waendeSonstiges,
        fallsSonstigesWaendeWohngebaeude: cardTemplateData.waendeSonstigesText,
        FHSechzigFeuerhemmungWohngebaeude: cardTemplateData.feuerhemmungFh60,
        FHDreißigFeuerhemmungWohngebaeude: cardTemplateData.feuerhemmungFh30,
        unbekanntFeuerhemmungWohngebaeude:
          cardTemplateData.feuerhemmungUnbekannt,
        sonstigeFeuerhemmungWohngebaeude:
          cardTemplateData.feuerhemmungSonstiges,
        fallsSonstigesFeuerhemmungWohngebaeude:
          cardTemplateData.feuerhemmungSonstigesText,
        kellerWohngebaeude: cardTemplateData.keller,
        teilunterkellertKellerWohngebaeude: cardTemplateData.teilunterkellert,
        teilunterkellertQmKellerWohngebaeude: cardTemplateData.qmUnterkellert,
        vertragsbeginnVertragslaufzeitWohngebaeude: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitWohngebaeude: dateFormater(
          cardTemplateData.versicherungsende
        ),
        beitragVertragslaufzeitWohngebaeude: cardTemplateData.beitrag,
        versicherungssummeBeitragVertragslaufzeitWohngebaeude:
          cardTemplateData.versicherungssumme,
        zahlweiseVertragslaufzeitWohngebaeude: cardTemplateData.zahlweise,
        anzahlVorschaedenWohngebaeude: cardTemplateData.vorschaedenAnzahl,
        hoeheVorschaedenWohngebaeude: cardTemplateData.vorschaedenHoehe,
        listeVorschaedenWohngebaeude: cardTemplateData.vorschaedenNotiz,
      };

      break;
    case "KFZ":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmer.id
        ),
        fahrzeugtypAllgemeinKFZ: cardTemplateData.fahrzeugtyp,
        fallsSonstigeAllgemeinKFZ: cardTemplateData.fahrzeugtypSonstige,
        versicherungsnehmerKFZ: mandantMapper(cardTemplateData.versicherungsnehmerId),
        gesellschaftKFZ: cardTemplateData.gesellschaft,
        tarifbezeichnungGesellschaftKFZ: cardTemplateData.tarifBezeichnung,
        vertragsnummerGesellschaftKFZ: cardTemplateData.versicherungsnummer,
        tarifGesellschaftKFZ: cardTemplateData.tarifgruppe,
        vertragsbeginnVertragslaufzeitKFZ: dateFormater(
          cardTemplateData.versicherungsbeginn
        ),
        vertragsendeVertragslaufzeitKFZ: dateFormater(
          cardTemplateData.versicherungsende
        ),
        beitragKFZ: cardTemplateData.beitrag,
        beitragGeschaeftsausgabeBeitragKFZ: cardTemplateData.geschaeftsausgabe,
        mitgliedAutomobilclubBeitragKFZ: cardTemplateData.automobilclub,
      };
      break;
    case "WOHNSITUATION":
      console.log(cardTemplateData)
      output = {
        initMandantValue: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        wohnortWohnsituation: cardTemplateData.wohnung,
        mieteEigentumWohnsituation: cardTemplateData.wohnungZurMiete,
        personenzuordnungWohnsituation: mandantMapper(
          cardTemplateData.versicherungsnehmerId
        ),
        warmmieteMieteProMonatWohnsituation: cardTemplateData.wohnungMiete,
        kaltmieteMieteProMonatWohnsituation: cardTemplateData.wohnungKaltmiete,
        nebenkostenMieteProMonatWohnsituation: cardTemplateData.wohnungNebenkosten,
        wohngeldMieteProMonatWohnsituation: cardTemplateData.wohngeld,
      };

      break;
    default:
      break;
  }
  output={...output, externalProduktId:cardTemplateData.externalProduktId}
  return output;
}
export default tarifType;