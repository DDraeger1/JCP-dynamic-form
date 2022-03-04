import "./App.css";
import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  useReducer,
} from "react";
import { Context } from "./context/Context";
import DynamicForm from "./components/DynamicForm";
import { mapAssets, redefineCard } from "./components/mapAssets";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import deLocale from "date-fns/locale/de";
import { Save } from "@material-ui/icons";
import { Button,Checkbox } from "@material-ui/core";

import mock from "./mockUI/MockUI.png"

import axios from "axios";
import qs from "query-string";

import personaldaten from "./jsonCards/persoenlicheAngaben/personaldaten.json";
import chooseCard from "./jsonCards/ui/chooseCard.json";

import kindVorhanden from "./jsonCards/persoenlicheAngaben/kinderVorhanden.json";
import kind from "./jsonCards/persoenlicheAngaben/kind.json";
import ausweisdaten from "./jsonCards/persoenlicheAngaben/ausweisdaten.json";
import fuehrerschein from "./jsonCards/persoenlicheAngaben/fuehrerschein.json";
import wohnsituation from "./jsonCards/persoenlicheAngaben/wohnsituation.json";
import ausbildungBeruf from "./jsonCards/persoenlicheAngaben/ausbildungBeruf.json";
import arbeitgeber from "./jsonCards/persoenlicheAngaben/arbeitgeber.json";
import kommunikation from "./jsonCards/persoenlicheAngaben/kommunikation.json";
import bankdaten from "./jsonCards/persoenlicheAngaben/bankdaten.json";
import gesundheit from "./jsonCards/persoenlicheAngaben/gesundheit.json";

import einnahmen from "./jsonCards/einnahmenUndAusgaben/einnahmen.json";
import einkommenGehalt from "./jsonCards/einnahmenUndAusgaben/einkommenGehalt.json";
import einkommenAusGeringfuegigerBeschaefitgung from "./jsonCards/einnahmenUndAusgaben/einkommenAusGeringfuegigerBeschaefitgung.json";
import einkommenAusSelbststaendigerErwerbstaetigkeit from "./jsonCards/einnahmenUndAusgaben/einkommenAusSelbststaendigerErwerbstaetigkeit.json";
import steuer from "./jsonCards/einnahmenUndAusgaben/steuer.json";
import ausgaben from "./jsonCards/einnahmenUndAusgaben/ausgaben.json";
import automobilclub from "./jsonCards/einnahmenUndAusgaben/automobilclub.json";
import sonstigeZahlungsverpflichtungen from "./jsonCards/einnahmenUndAusgaben/sonstigeZahlungsverpflichtigungen.json";

import kredit from "./jsonCards/vermoegenUndVerbindlichkeiten/kredit.json";
import darlehen from "./jsonCards/vermoegenUndVerbindlichkeiten/darlehen.json";
import bankprodukte from "./jsonCards/vermoegenUndVerbindlichkeiten/bankprodukte.json";
import vwlUndBausparen from "./jsonCards/vermoegenUndVerbindlichkeiten/vwlUndBausparen.json";
import immobilienbestand from "./jsonCards/vermoegenUndVerbindlichkeiten/immobilienbestand.json";
import sachwert from "./jsonCards/vermoegenUndVerbindlichkeiten/sachwert.json";
import beteiligungenAiF from "./jsonCards/vermoegenUndVerbindlichkeiten/beteiligungenAiF.json";
import wertpapiere from "./jsonCards/vermoegenUndVerbindlichkeiten/wertpapiere.json";

import buEuGfk from "./jsonCards/arbeitskraftabsicherung/buEuGfk.json";
import unfall from "./jsonCards/arbeitskraftabsicherung/unfall.json";
import todesfall from "./jsonCards/arbeitskraftabsicherung/todesfall.json";
import schwereKrankheiten from "./jsonCards/arbeitskraftabsicherung/schwereKrankheiten.json";

import privatePflegeversicherung from "./jsonCards/pflege/privatePflegeversicherung.json";

import gesetzlicheKrankenversicherung from "./jsonCards/gesundheit/gesetzlicheKranken.json";
import privateKranken from "./jsonCards/gesundheit/privateKranken.json";
import kvZusatz from "./jsonCards/gesundheit/kvZusatz.json";

import privathaftpflicht from "./jsonCards/vermoegenssicherung/privathaftpflicht.json";
import hundehalterpflicht from "./jsonCards/vermoegenssicherung/hundehalterhaftpflicht.json";
import pferdehalterhaftpflicht from "./jsonCards/vermoegenssicherung/pferdehalterhaftpflicht.json";
import hausrat from "./jsonCards/vermoegenssicherung/hausrat.json";
import rechtschutz from "./jsonCards/vermoegenssicherung/rechtsschutz.json";
import wohngebaeude from "./jsonCards/vermoegenssicherung/wohngebaeude.json";
import KFZ from "./jsonCards/vermoegenssicherung/kfz.json";

import gesetzlicheAltersvorsorge from "./jsonCards/altersvorsorge/gesetzlicheAltersvorsorge.json";
import kapitalversicherung from "./jsonCards/altersvorsorge/kapitalversicherung.json";
import riesterrente from "./jsonCards/altersvorsorge/riesterrente.json";
import betrieblicheAltersversorgung from "./jsonCards/altersvorsorge/betrieblicheAltersversorgung.json";
import ruerupRente from "./jsonCards/altersvorsorge/ruerupRente.json";
import { gridColumnsTotalWidthSelector } from "@material-ui/x-grid";

import { useParams} from 'react-router-dom'

import isAssetAvailable from "./components/isAssetAvailable";
//TODO: Arbeite xs und md ein für kleinere bildschirme!!

const betrieblicheAltersversorgungValues = {
  VWLArbeitgeberbeitragBetrieblicheAltersversorgung: "",
  VWLArbeitnehmerbeitragBetrieblicheAltersversorgung: "",
  beitragGesamtBeitragBetrieblicheAltersversorgung: "",
  produktIDBetrieblicheAltersversorgung: "",
  tarifbezeichnungBetrieblicheAltersversorgung: "",
  vertragsnummerBetrieblicheAltersversorgung: "",
  versicherungsnehmerBetrieblicheAltersversorgung: "",
  versichertePersonBetrieblicheAltersversorgung: "",
  artVersichertePersonBetrieblicheAltersversorgung: "",
  durchfuehrungswegVersichertePersonBetrieblicheAltersversorgung: "",
  beitragANAnteilBeitragBetrieblicheAltersversorgung: "",
  beitragAGAnteilBeitragBetrieblicheAltersversorgung: "",
  nettobelastungBeitragBetrieblicheAltersversorgung: "",
  zahlweiseBetrieblicheAltersversorgung: "",
  dynamikBeitragBetrieblicheAltersversorgung: "",
  vertragsbeginnVertragslaufzeitBetrieblicheAltersversorgung: "",
  vertragsendeVertragslaufzeitBetrieblicheAltersversorgung: "",
  garantiertMonatlicheRentenleistungBetrieblicheAltersversorgung: "",
  prognostiziertMonatlicheRentenleistungBetrieblicheAltersversorgung: "",
  beiMonatlicheRentenleistungBetrieblicheAltersversorgung: "",
  RGZMonatlicheRentenleistungBetrieblicheAltersversorgung: "",
  ablaufsleistungGarantiertAblaufleistungBetrieblicheAltersversorgung: "",
  ablaufsleistungPrognostiziertAblaufleistungBetrieblicheAltersversorgung: "",
  beiAblaufleistungBetrieblicheAltersversorgung: "",
  BUBetrieblicheAltersversorgungHeader: "",
  integrierteBUBetrieblicheAltersversorgung: "",
  renteBUBetrieblicheAltersversorgung: "",
  dynamikBULeistungBUBetrieblicheAltersversorgung: "",
  beitragsbefreiungBUBetrieblicheAltersversorgung: "",
  beitragsendeBUZBetrieblicheAltersversorgung: "",
  leistungsendeBUZBetrieblicheAltersversorgung: "",
  beitragsanteilBUZBetrieblicheAltersversorgung: "",
  leistungBeiTodBUZBetrieblicheAltersversorgung: "",
  aktuellerRKWBUZBetrieblicheAltersversorgung: "",
  standBUZBetrieblicheAltersversorgung: "",
  ansprechpartnerBetriebBUZBetrieblicheAltersversorgung: "",
  rahmenvertragBUZBetrieblicheAltersversorgung: "",
  tarifvertragBUZBetrieblicheAltersversorgung: "",
  fondsBUZBetrieblicheAltersversorgung: "",
};
const ruerupRenteValues ={
  externalProduktId: "",
  gesellschaftRuerupRente: "",
  tarifbezeichnungRuerupRente: "",
  vertragsnummerRuerupRente: "",
  versicherungsnehmerRuerupRente: "",
  versichertePersonRuerupRente: "",
  artVersichertePersonRuerupRente: "",
  fondsVersichertePersonRuerupRente: "",
  vertragsbeginnVertragslaufzeitRuerupRente: "",
  vertragsendeVertragslaufzeitRuerupRente: "",
  garantiertMonatlicheRentenleistungRuerupRente: "",
  prognostiziertMonatlicheRentenleistungRuerupRente: "",
  beiMonatlicheRentenleistungRuerupRente: "",
  RGZMonatlicheRentenleistungRuerupRente: "",
  dynamikRuerupRente: "",
  prozentDynamikRuerupRente: "",
  integrierteBURuerupRente: "",
  rentenleistungBURuerupRente: "",
  dynamikBULeistungBURuerupRente: "",
  beitragsbefreiungBURuerupRente: "",
  beitragsendeBUZRuerupRente: "",
  leistungsendeBUZRuerupRente: "",
  beitragsanteilBUZRuerupRente: "",
  deckungskapitalBUZRuerupRente: "",
  zusatzversicherungHinterbliebenenZusatzversicherungRuerupRente: "",
  prozentHinterbliebenenZusatzversicherungRuerupRente: "",
  betragHinterbliebenenZusatzversicherungRuerupRente: "",
  aktuellerRueckkaufswertHinterbliebenenZusatzversicherungRuerupRente: "",
  zahlweiseHinterbliebenenZusatzversicherungRuerupRente: "",
  einmalbeitragHinterbliebenenZusatzversicherungRuerupRente: "",
  beitragHinterbliebenenZusatzversicherungRuerupRente: "",
  beitragsanteilBUHinterbliebenenZusatzversicherungRuerupRente: "",
}
const riesterrenteValues = {
  produktIDRiesterrente: "",
  tarifbezeichnungRiesterrente: "",
  vertragsnummerRiesterrente: "",
  versicherungsnehmerRiesterrente: "",
  versichertePersonRiesterrente: "",
  artVersichertePersonRiesterrente: "",
  vertragsbeginnVertragslaufzeitRiesterrente: "",
  vertragsendeVertragslaufzeitRiesterrente: "",
  leistungTodVertragslaufzeitRiesterrente: "",
  garantiertMonatlicheRentenleistungRiesterrente: "",
  prognostiziertMonatlicheRentenleistungRiesterrente: "",
  beiProzentMonatlicheRentenleistungRiesterrente: "",
  RGZMonatlicheRentenleistungRiesterrente: "",
  dynamikRiesterrente: "",
  prozentDynamikRiesterrente: "",
  integrierteBURiesterrente: "",
  rentenleistungBURiesterrente: "",
  dynamikBULeistungBURiesterrente: "",
  beitragsbefreiungBURiesterrente: "",
  beitragsendeBUZRiesterrente: "",
  leistungsendeBUZRiesterrente: "",
  beitragsanteilBUZRiesterrente: "",
  aktuellerRückkaufswertBUZRiesterrente: "",
  datumBUZRiesterrente: "",
  beitragsendeFondsRiesterrente: "",
  VWLRiesterrente: false,
  arbeitgeberanteilVWLRiesterrente: "",
  arbeitnehmeranteilVWLRiesterrente: "",
  summeVWLRiesterrente: "",
  zahlweiseVWLRiesterrente: "",
  beitragVWLRiesterrente: "",
  dauerzulagenantragVWLRiesterrente: "",
  inHoeheVonZahlungLetzteZulageRiesterrenteHeader: "",
  gebuchtAmLetzteZulageRiesterrenteHeader: "",
  garantiezinsZahlungLetzteZulageRiesterrenteHeader: "",
};

const kapitalversicherungValues = {
  artKapitalversicherung: "",
  versicherungsnehmerKapitalversicherung: "",
  produktIDGesellschaftKapitalversicherung: "",
  tarifbezeichnungGesellschaftKapitalversicherung: "",
  vertragsnummerGesellschaftKapitalversicherung: "",
  verwendungszweckKapitalversicherung: "",
  fallsSonstigesVerwendungszweckKapitalversicherung: "",
  versichertePersonKapitalversicherung: "",
  vertragsbeginnVertragslaufzeitKapitalversicherung: "",
  vertragsendeVertragslaufzeitKapitalversicherung: "",
  versicherungssummeVertragslaufzeitKapitalversicherung: "",
  dynamikKapitalversicherung: "",
  prozentDynamikKapitalversicherung: "",
  fondsDynamikKapitalversicherung: "",
  beitragszahlerDynamikKapitalversicherung: "",
  bezugsrechtTodesfallDynamikKapitalversicherung: "",
  leistungTodDynamikKapitalversicherung: "",
  garantiertMonatlicheRentenleistungKapitalversicherung: "",
  prognostiziertMonatlicheRentenleistungKapitalversicherung: "",
  beiMonatlicheRentenleistungKapitalversicherung: "",
  RGZMonatlicheRentenleistungKapitalversicherung: "",
  garantiertAblaufleistungKapitalversicherung: "",
  prognostiziertAblaufleistungKapitalversicherung: "",
  beiAblaufleistungKapitalversicherung: "",
  inetgrierteBUKapitalversicherung: "",
  rentenleistungBUKapitalversicherung: "",
  beitragsbefreiungBUKapitalversicherung: "",
  beitragsendeBUZKapitalversicherung: "",
  leistungsendeBUZKapitalversicherung: "",
  beitragsanteilBUZKapitalversicherung: "",
  vertagAbgetretenBUZKapitalversicherung: false,
  aktuellerRückkaufswertBUZKapitalversicherung: "",
  datumBUZKapitalversicherung: "",
  garantiezinsBUZKapitalversicherung: "",
  veitragsendeBUZKapitalversicherung: "",
  VWLKapitalversicherung: false,
  arbeitgeberanteilVWLKapitalversicherung: "",
  arbeitnehmeranteilVWLKapitalversicherung: "",
  summeVWLKapitalversicherung: "",
  zahlweiseVWLKapitalversicherung: "",
  einmalbeitragVWLKapitalversicherung: "",
  gesamtzahlbeitragVWLKapitalversicherung: "",
  beitragsanteilVWLKapitalversicherung: "",
};

const gesetzlicheAltersvorsorgeValues = {
  versicherungsnehmerGesetzlicheAltersvorsorge: "",
  rententraegerGesetzlicheAltersvorsorge: "",
  fallsSonstigeGesetzlicheAltersvorsorge: "",
  datumRentenbeginnGesetzlicheAltersvorsorge: "",
  volleErwerbsminderungsrenteGesetzlicheAltersvorsorge: "",
  wartezeitGesetzlicheAltersvorsorge: "",
  fallsNeinAnzahlMonateWartezeitGesetzlicheAltersvorsorge: "",
  heutigerAnspruchWartezeitGesetzlicheAltersvorsorge: "",
  weitereEinzahlungenWartezeitGesetzlicheAltersvorsorge: "",
  artRentenschaetzungGesetzlicheAltersvorsorge: "",
  berufstaetigSeitRentenschaetzungGesetzlicheAltersvorsorge: "",
  gesamtanzahlArbeitsjahreRentenschaetzungGesetzlicheAltersvorsorge: "",
  rentenschaetzungDurchfuehrenRentenschaetzungGesetzlicheAltersvorsorge: "",
  datumLetzteRenteninformationBescheidRentenschaetzungGesetzlicheAltersvorsorge:
    "",
  weiterhinBeitraegeGRVBeiSelbststaendigenGesetzlicheAltersvorsorge: "",
  fallsJaBeiSelbststaendigenGesetzlicheAltersvorsorge: "",
  ununterbrochenSeitBeiSelbststaendigenGesetzlicheAltersvorsorge: "",
  durchschnittlicheBruttojahrenseinkommenBeiSelbststaendigenGesetzlicheAltersvorsorge:
    "",
  anzahlJahreBeiSelbststaendigenGesetzlicheAltersvorsorge: "",
};

const KFZValue = {
  fahrzeugtypAllgemeinKFZ: "",
  fallsSonstigeAllgemeinKFZ: "",
  versicherungsnehmerKFZ: "",
  gesellschaftKFZ: "",
  tarifbezeichnungGesellschaftKFZ: "",
  vertragsnummerGesellschaftKFZ: "",
  tarifGesellschaftKFZ: "",
  vertragsbeginnVertragslaufzeitKFZ: "",
  vertragsendeVertragslaufzeitKFZ: "",
  beitragKFZ: "",
  beitragGeschaeftsausgabeBeitragKFZ: false,
  mitgliedAutomobilclubBeitragKFZ: "",
};

const wohngebaeudeValue = {
  produktIDGesellschaftWohngebaeude: "",
  tarifbezeichnungGesellschaftWohngebaeude: "",
  vertragsnummerGesellschaftWohngebaeude: "",
  tarifgruppeVersicherungssummeWohngebaeude: "",
  tarifOeffentlicherDienstGesellschaftWohngebaeude: false,
  feuerAbsicherungWohngebaeude: false,
  sturmHagelAbsicherungWohngebaeude: false,
  glasAbsicherungWohngebaeude: false,
  leitungswasserAbsicherungWohngebaeude: false,
  elementarschadenAbsicherungWohngebaeude: false,
  sonstigeLeistungenAbsicherungWohngebaeude: "",
  bauartklasseGaragenWohngebaeude: "",
  fertighausgruppeWohnflaecheGaragenWohngebaeude: "",
  kellergeschossWohnflaecheGaragenWohngebaeude: "",
  erdgeschossWohnflaecheGaragenWohngebaeude: "",
  ersterObergeschossWohnflaecheGaragenWohngebaeude: "",
  zweiterObergeschossWohnflaecheGaragenWohngebaeude: "",
  dachgeschossWohnflaecheGaragenWohngebaeude: "",
  sanierungsmaßnahmenWohnflaecheGaragenWohngebaeude: false,
  wohnflaecheWohnflaecheGaragenWohngebaeude: "",
  anzahlWohneinheitenWohnflaecheGaragenWohngebaeude: "",
  anzahlGaragenWohnflaecheGaragenWohngebaeude: "",
  sonstigeGaragenWohnflaecheGaragenWohngebaeude: "",
  anzahlCarportsWohnflaecheGaragenWohngebaeude: "",
  anzahlGeschosseWohnflaecheGaragenWohngebaeude: "",
  gebaeudeartWohnflaecheGaragenWohngebaeude: "",
  staendigBewohntWohnflaecheGaragenWohngebaeude: "",
  ableitungsrohreWohnflaecheGaragenWohngebaeude: "",
  dachartWohnflaecheGaragenWohngebaeude: "",
  grundstueckzubehoerWohnflaecheGaragenWohngebaeude: "",
  fussbodenheizungWohnflaecheGaragenWohngebaeude: "",
  schwimmbadWohnflaecheGaragenWohngebaeude: "",
  baujahrWohnflaecheGaragenWohngebaeude: "",
  neubauwertWohnflaecheGaragenWohngebaeude: "",
  wertWohnflaecheGaragenWohngebaeude: "",
  massivWaendeWohngebaeude: false,
  nichtMassivWaendeWohngebaeude: false,
  stahlHolzfachwerkNichtBrennbareFuellungWaendeWohngebaeude: false,
  stahlHolzfachwerkBrennbareFuellungWaendeWohngebaeude: false,
  sonstigesWaendeWohngebaeude: false,
  fallsSonstigesWaendeWohngebaeude: "",
  FHSechzigFeuerhemmungWohngebaeude: false,
  FHDreißigFeuerhemmungWohngebaeude: false,
  unbekanntFeuerhemmungWohngebaeude: false,
  sonstigeFeuerhemmungWohngebaeude: false,
  fallsSonstigesFeuerhemmungWohngebaeude: "",
  kellerWohngebaeude: false,
  teilunterkellertKellerWohngebaeude: false,
  teilunterkellertQmKellerWohngebaeude: "",
  vertragsbeginnVertragslaufzeitWohngebaeude: "",
  vertragsendeVertragslaufzeitWohngebaeude: "",
  beitragVertragslaufzeitWohngebaeude: "",
  versicherungssummeBeitragVertragslaufzeitWohngebaeude: "",
  beitragVertragslaufzeitWohngebaeude: "",
  zahlweiseVertragslaufzeitWohngebaeude: "",
  anzahlVorschaedenWohngebaeude: "",
  hoeheVorschaedenWohngebaeude: "",
  listeVorschaedenWohngebaeude: "",
};

const rechtschutzValue = {
  versicherungsnehmerRechtschutz: "",
  produktIDGesellschaftRechtschutz: "",
  tarifbezeichnungGesellschaftRechtschutz: "",
  vertragsnummerGesellschaftRechtschutz: "",
  tarifGesellschaftRechtschutz: "",
  tarifOeffentlicherDienstGesellschaftRechtschutz: "",
  privatRechtschutzpaketDeckumfangRechtschutz: false,
  berufRechtschutzpaketDeckumfangRechtschutz: false,
  verkehrRechtschutzpaketDeckumfangRechtschutz: false,
  wuGRechtschutzpaketDeckumfangRechtschutz: false,
  beratungRechtschutzpaketDeckumfangRechtschutz: false,
  spezialStrRechtschutzpaketDeckumfangRechtschutz: false,
  vermieterRechtschutzpaketDeckumfangRechtschutz: false,
  sonstigesRechtschutzpaketDeckumfangRechtschutz: false,
  fallsSonstigesRechtschutzpaketDeckumfangRechtschutz: "",
  versichertRechtschutzpaketDeckumfangRechtschutz: false,
  versicherungssummeRechtschutz: "",
  unbegrenztVersicherungssummeRechtschutz: false,
  selbstbeteiligungVersicherungssummeRechtschutz: "",
  vertragsbeginnVertragslaufzeitRechtschutz: "",
  vertragsendeVertragslaufzeitRechtschutz: "",
  beitragVertragslaufzeitRechtschutz: "",
  zahlweiseVertragslaufzeitRechtschutz: "",
  anzahlVorschaedenRechtschutz: "",
  hoeheVorschaedenRechtschutz: "",
  listeVorschaedenRechtschutz: "",
};

const hausratValue = {
  versicherungsnehmerHausrat: "",
  produktIDGesellschaftHausrat: "",
  tarifbezeichnungGesellschaftHausrat: "",
  vertragsnummerGesellschaftHausrat: "",
  staendigBewohntGesellschaftHausrat: "",
  erhoehungWertsachenEinschluesseHausrat: false,
  ueberspannungEinschluesseHausrat: false,
  elementarschaedenEinschluesseHausrat: false,
  versicherungssummeHausrat: "",
  selbstbeteiligungVersicherungssummeHausrat: "",
  postleitzahlVersicherungssummeHausrat: "",
  stadtVersicherungssummeHausrat: "",
  strasseVersicherungssummeHausrat: "",
  hausnummerVersicherungssummeHausrat: "",
  immobilienartVersicherungssummeHausrat: "",
  wohnflaecheVersicherungssummeHausrat: "",
  unterversicherungsverzichtVersicherungssummeHausrat: "",
  fahrradVersicherungssummeHausrat: "",
  wertVersicherungssummeHausrat: "",
  glasversicherungVersicherungssummeHausrat: "",
  mitCeranKochfeldernVersicherungssummeHausrat: "",
  aquariumVersicherungssummeHausrat: "",
  wasserbettVersicherungssummeHausrat: "",
  tarifgruppeVersicherungssummeHausrat: "",
  tarifOeffentlicherDienstVersicherungssummeHausrat: "",
  anzahlVorschaedenHausrat: "",
  hoeheVorschaedenHausrat: "",
  listeVorschaedenHausrat: "",
};

const pferdehalterhaftpflichtValue = {
  versicherungsnehmerPferdehalterpflicht: "",
  produktIDGesellschaftPferdehalterpflicht: "",
  tarifbezeichnungGesellschaftPferdehalterpflicht: "",
  vertragsnummerGesellschaftPferdehalterpflicht: "",
  tarifOeffentlicherDienstGesellschaftPferdehalterpflicht: false,
  anzahlPferdeGesellschaftPferdehalterpflicht: "",
  versicherungssummePferdehalterpflicht: "",
  selbstbeteiligungPferdehalterpflicht: "",
  anzahlPferdePferdehalterpflicht: "",
  mitgliedReitvereinPferdehalterpflicht: "",
  tarifgruppePferdehalterpflicht: "",
  vertragsbeginnVertragslaufzeitPferdehalterpflicht: "",
  VertragsendeVertragslaufzeitPferdehalterpflicht: "",
  BeitragVertragslaufzeitPferdehalterpflicht: "",
  zahlweiseVertragslaufzeitPferdehalterpflicht: "",
  chipnummerDetailsPferdehalterpflicht: "",
  geburtsdatumDetailsPferdehalterpflicht: "",
  nameDetailsPferdehalterpflicht: "",
  farbeDetailsPferdehalterpflicht: "",
  rasseDetailsPferdehalterpflicht: "",
  geschlechtDetailsPferdehalterpflicht: "",
  anzahlVorschaedenPferdehalterpflicht: "",
  hoeheVorschaedenPferdehalterpflicht: "",
  listeVorschaedenPferdehalterpflicht: "",
};

const hundehalterhaftpflichtValue = {
  versicherungsnehmerHundehalterpflicht: "",
  produktIDGesellschaftHundehalterpflicht: "",
  tarifbezeichnungGesellschaftHundehalterpflicht: "",
  vertragsnummerGesellschaftHundehalterpflicht: "",
  tarifOeffentlicherDienstGesellschaftHundehalterpflicht: false,
  anzahlHundeGesellschaftHundehalterpflicht: "",
  versicherungssummeHundehalterpflicht: "",
  selbstbeteiligungHundehalterpflicht: "",
  vertragsbeginnVertragslaufzeitHundehalterpflicht: "",
  vertragsendeVertragslaufzeitHundehalterpflicht: "",
  beitragVertragslaufzeitHundehalterpflicht: "",
  zahlweiseVertragslaufzeitHundehalterpflicht: "",
  detailsHundehalterpflicht: "",
  chipnummerDetailsHundehalterpflicht: "",
  geburtsdatumDetailsHundehalterpflicht: "",
  nameDetailsHundehalterpflicht: "",
  farbeDetailsHundehalterpflicht: "",
  geschlechtDetailsHundehalterpflicht: "",
  anzahlVorschaedenHundehalterpflicht: "",
  hoeheVorschaedenHundehalterpflicht: "",
  listeVorschaedenHundehalterpflicht: "",
};

const privathaftpflichtValue = {
  versicherungsnehmerPrivathaftpflicht: "",
  produktIDGesellschaftPrivathaftpflicht: "",
  tarifbezeichnungGesellschaftPrivathaftpflicht: "",
  vertragsnummerGesellschaftPrivathaftpflicht: "",
  tarifGesellschaftPrivathaftpflicht: "",
  inkludiertBetriebshaftpflichtGesellschaftPrivathaftpflicht: false,
  tarifOeffentlicherDienstGesellschaftPrivathaftpflicht: false,
  versicherungssummePrivathaftpflicht: "",
  selbstbeteiligungVersicherungssummePrivathaftpflicht: "",
  ehrenamtEinschluessePrivathaftpflicht: false,
  tagesmutterEinschluessePrivathaftpflicht: false,
  fremdeSchluesselPrivatEinschluessePrivathaftpflicht: false,
  fremdeSchlüsselBeruflichEinschluessePrivathaftpflicht: false,
  forderungsausfallEinschluessePrivathaftpflicht: false,
  gefaelligkeitsschaedenEinschluessePrivathaftpflicht: false,
  schadenersatzrechtsschutzEinschluessePrivathaftpflicht: false,
  lehrerhaftpflichtEinschluessePrivathaftpflicht: false,
  dienstschluesselSummeEinschluessePrivathaftpflicht: "",
  vertragsbeginnVertragslaufzeitPrivathaftpflicht: "",
  VertragsendeVertragslaufzeitPrivathaftpflicht: "",
  beitragVertragslaufzeitPrivathaftpflicht: "",
  zahlweiseVertragslaufzeitPrivathaftpflicht: "",
  vorschaedenPrivathaftpflichtHeader: "",
  anzahlVorschaedenPrivathaftpflicht: "",
  hoeheVorschaedenPrivathaftpflicht: "",
  listeVorschaedenPrivathaftpflicht: "",
};

const kvZusatzValue = {
  produktIDKVZusatz: "",
  tarifbezeichnungKVZusatz: "",
  vertragsnummerKVZusatz: "",
  versicherungsnehmerKVZusatz: "",
  beginnVersicherungsnehmerKVZusatz: "",
  zahlweiseVersicherungsnehmerKVZusatz: "",
  gesamtbeitragVersicherungsnehmerKVZusatz: "",
  tarifVersicherungsnehmerKVZusatz: "",
  anzahlVersichertePersonenKVZusatz: "",
  ersichertePersonKVZusatz: "",
  ambulantVersichertePersonKVZusatz: false,
  stationaerVersichertePersonKVZusatz: false,
  zahnVersichertePersonKVZusatz: false,
  KTVersichertePersonKVZusatz: false,
  kHTVersichertePersonKVZusatz: false,
  tarifLeistungenAmbulantKVZusatz: "",
  altersrueckstellungLeistungenAmbulantKVZusatz: "",
  sehhilfeLeistungenAmbulantKVZusatz: "",
  sehhilfeBrilleLeistungenAmbulantKVZusatz: "",
  sehhilfeZeitraumLeistungenAmbulantKVZusatz: "",
  lasikHoeheLeistungenAmbulantKVZusatz: "",
  heilpraktikerAmbulantKVZusatz: "",
  leistungProJahrAmbulantKVZusatz: "",
  hufelandAmbulantKVZusatz: "",
  psychotherapieAmbulantKVZusatz: "",
  kurAmbulantKVZusatz: "",
  hilfsmittelAmbulantKVZusatz: "",
  ambulanteOPAmbulantKVZusatz: "",
  hoergeraeteAmbulantKVZusatz: "",
  beitragAmbulantKVZusatz: "",
  tarifLeistungenStationaerKVZusatz: "",
  altersrueckstellungLeistungenStationaerKVZusatz: "",
  bettzimmerChefarztLeistungenStationaerKVZusatz: "",
  erstattungLeistungenStationaerKVZusatz: "",
  ersatzkrankenhausTarifLeistungenStationaerKVZusatz: "",
  GKVTarifLeistungenStationaerKVZusatz: "",
  beitragTarifLeistungenStationaerKVZusatz: "",
  tarifLeistungenZahnKVZusatz: "",
  altersrueckstellungLeistungenZahnKVZusatz: "",
  regelversorgungLeistungenZahnKVZusatz: "",
  zahnbehandlungZahnKVZusatz: "",
  zahnersatzZahnKVZusatz: "",
  kieferorthopaedieLeistungenZahnKVZusatz: "",
  anzahlReinigungenProJahrLeistungenZahnKVZusatz: "",
  leistungProJahrLeistungenZahnKVZusatz: "",
  beitragLeistungenZahnKVZusatz: "",
  tarifKTKVZusatz: "",
  altersrueckstellungKTKVZusatz: "",
  tagEinsKTKVZusatz: "",
  betragTagEinsKTKVZusatz: "",
  tagZweiKTKVZusatz: "",
  betragTagZweiKTKVZusatz: "",
  beitragKTKVZusatz: "",
  beitragsrueckerstattungSonstigeLeistungenKVZusatz: "",
  erstattungSonstigeLeistungenKVZusatz: "",
  auslandsreiseKVSonstigeLeistungenKVZusatz: "",
  krankenhaustagegeldSonstigeLeistungenKVZusatz: "",
};

const gesetzlicheKrankenversicherungValue = {
  produktIDGesetzlicheKrankenversicherung: "",
  tarifbezeichnungGesetzlicheKrankenversicherung: "",
  vertragsnummerGesetzlicheKrankenversicherung: "",
  vertragsnehmerGesetzlicheKrankenversicherung: "",
  statusGesetzlicheKrankenversicherung: "",
  mitKTGGesetzlicheKrankenversicherung: false,
  aufKTHoeheVonGesetzlicheKrankenversicherung: "",
  abDemGesetzlicheKrankenversicherung: "",
  GKVLeistungsbonusGesetzlicheKrankenversicherung: "",
  vertragsbeginnGesetzlicheKrankenversicherung: "",
  GKVZusatzbeitragGesetzlicheKrankenversicherung: "",
  mtlGesetzlicheKrankenversicherung: "",
  zusatzbeitragInProzentGesetzlicheKrankenversicherung: "",
  vonBusprogrammGesetzlicheKrankenversicherung: "",
  zusatzleistungGesetzlicheKrankenversicherung: "",
};

const privatePflegeversicherungValues = {
  produktIDPrivatePflegeversicherung: "",
  tarifbezeichnungPrivatePflegeversicherung: "",
  vertragsnummerPrivatePflegeversicherung: "",
  artPrivatePflegeversicherung: "",
  versicherungsnehmerPrivatePflegeversicherung: "",
  versichertePersonPrivatePflegeversicherung: "",
  vertragsbeginnVertragslaufzeitPrivatePflegeversicherung: "",
  vertragsendeVertragslaufzeitPrivatePflegeversicherung: "",
  zahlweiseVertragslaufzeitPrivatePflegeversicherung: "",
  beitragVertragslaufzeitPrivatePflegeversicherung: "",
  staatlichGeförderVertragslaufzeitPrivatePflegeversicherung: false,
  leistungPrivatePflegeversicherung: "",
  tagLeistungPrivatePflegeversicherung: false,
  monatLeistungPrivatePflegeversicherung: "",
  dynamikLeistungPrivatePflegeversicherung: "",
  fallsDynamikLeistungPrivatePflegeversicherung: "",
  stationaerAmbulantJePflegegradStationaerPrivatePflegeversicherung: false,
  EuroJePflegegradStationaerPrivatePflegeversicherung: false,
  prozentJePflegegradStationaerPrivatePflegeversicherung: false,
  einsJePflegegradStationaerPrivatePflegeversicherung: "",
  zweiJePflegegradStationaerPrivatePflegeversicherung: "",
  dreiJePflegegradStationaerPrivatePflegeversicherung: "",
  vierJePflegegradStationaerPrivatePflegeversicherung: "",
  fuenfJePflegegradStationaerPrivatePflegeversicherung: "",
  sechsJePflegegradStationaerPrivatePflegeversicherung: "",
  nullLeistungJePflegestufePrivatePflegeversicherung: "",
  einsLeistungJePflegestufePrivatePflegeversicherung: "",
  zweiLeistungJePflegestufePrivatePflegeversicherung: "",
  dreiLeistungJePflegestufePrivatePflegeversicherung: "",
};

const schwereKrankheitenValues = {
  produktIDGesellschaftSchwereKrankheiten: "",
  TarifbezeichnungGesellschaftSchwereKrankheiten: "",
  versicherungsnehmerSchwereKrankheiten: "",
  versichertePersonSchwereKrankheiten: "",
  vertragsbeginnVertragslaufzeitSchwereKrankheiten: "",
  vertragsendeVertragslaufzeitSchwereKrankheiten: "",
  bruttobeitragVertragslaufzeitSchwereKrankheiten: "",
  nettobeitragVertragslaufzeitSchwereKrankheiten: "",
  zahlweiseVertragslaufzeitSchwereKrankheiten: "",
  leistungenSchwererKrankheitVertragslaufzeitSchwereKrankheiten: "",
  artAuszahlungLeistungenSchwererKrankheitVertragslaufzeitSchwereKrankheiten:
    "",
  leistungenTodesfallVertragslaufzeitSchwereKrankheiten: "",
  artAuszahlungLeistungenTodesfallVertragslaufzeitSchwereKrankheiten: "",
  rueckkaufwertAktuellVertragslaufzeitSchwereKrankheitenstring: "",
  artAuszahlungRueckkaufwertAktuellVertragslaufzeitSchwereKrankheiten: "",
};

const todesfallValues = {
  produktIDTodesfall: "",
  tarifbezeichnungGesellschaftTodesfall: "",
  vertragsnummerGesellschaftTodesfall: "",
  versicherungsnehmerTodesfall: "",
  vertragsbeginnVertragslaufzeitTodesfall: "",
  vertragsendeVertragslaufzeitTodesfall: "",
  bruttobeitragVertragslaufzeitTodesfall: "",
  nettobeitragVertragslaufzeitTodesfall: "",
  zahlweiseVertragslaufzeitTodesfall: "",
  artVertragslaufzeitTodesfall: "",
  versicherungssummeTodesfall: "",
  summeLinearFallendVersicherungssummeTodesfall: "",
  vertragAbgetretenVersicherungssummeTodesfall: false,
  MtlBULeistungVersicherungssummeTodesfall: "",
  beitragsbefreiungBUVersicherungssummeTodesfall: false,
  motorradfaherVersicherungssummeTodesfall: false,
  raucherVersicherungssummeTodesfall: false,
};

const unfallValues = {
  anzahlVersichertePersonen: 1,
  produktIDGesellschaftUnfall: "",
  versicherungsnehmerUnfall: "",
  vertragsbeginnVertragslaufzeitUnfall: "",
  vertragsendeVertragslaufzeitUnfall: "",
  gesamtbeitragVertragslaufzeitUnfall: "",
  zahlweiseVertragslaufzeitUnfall: "",
  beitragsrückerstattungVertragslaufzeitUnfall: false,
  zusatzleistungenVertragslaufzeitUnfall: "",
  anzahlVorschaedenUnfall: "",
  hoeheVorschaedenUnfall: "",
  listeVorschaedenUnfall: "",
  versichertePersonVersichertePersonUnfall: "",
  tarifgruppeVersichertePersonUnfall: "",
  risikogruppeVersichertePersonUnfall: "",
  grundsummeVersichertePersonUnfall: "",
  progressionVersichertePersonUnfall: "",
  vollinvaliditaetVersichertePersonUnfall: "",
  todesfallVersichertePersonUnfall: "",
  kosmetischeOperationVersichertePersonUnfall: "",
  bergungskostenVersichertePersonUnfall: "",
  übergangsleistungVersichertePersonUnfall: "",
  rückkaufswertVersichertePersonUnfall: "",
  teilbeitragVersichertePersonUnfall: "",
  krankenhaustagegeldleistungenUnfall: "",
  genesungsgeldLeistungenUnfall: "",
  unfallKrankentagegeldLeistungenUnfall: "",
  wieVielterTagLeistungenUnfall: "",
  abFuenfzigUVRenteUnfall: false,
  abUVRenteUnfall: false,
  prozentAbUVRenteUnfall: "",
  betragUVRenteUnfall: "",
  dynamikUVRenteUnfall: "",
  dynamikProzentUVRenteUnfall: "",

  selected2Persons: true,
  versichertePersonVersichertePersonUnfall2: "",
  tarifgruppeVersichertePersonUnfall2: "",
  grundsummeVersichertePersonUnfall2: "",
  progressionVersichertePersonUnfall2: "",
  vollinvaliditaetVersichertePersonUnfall2: "",
  todesfallVersichertePersonUnfall2: "",
  kosmetischeOperationVersichertePersonUnfall2: "",
  bergungskostenVersichertePersonUnfall2: "",
  übergangsleistungVersichertePersonUnfall2: "",
  rückkaufswertVersichertePersonUnfall2: "",
  teilbeitragVersichertePersonUnfall2: "",
  krankenhaustagegeldleistungenUnfall2: "",
  genesungsgeldLeistungenUnfall2: "",
  abFuenfzigUVRenteUnfall2: false,
  abUVRenteUnfall2: false,
  prozentAbUVRenteUnfall2: "",
  betragUVRenteUnfall2: "",
  dynamikUVRenteUnfall2: "",
  dynamikProzentUVRenteUnfall2: "",

  selected3Persons: false,
  versichertePersonVersichertePersonUnfall3: "",
  tarifgruppeVersichertePersonUnfall3: "",
  grundsummeVersichertePersonUnfall3: "",
  progressionVersichertePersonUnfall3: "",
  vollinvaliditaetVersichertePersonUnfall3: "",
  todesfallVersichertePersonUnfall3: "",
  kosmetischeOperationVersichertePersonUnfall3: "",
  bergungskostenVersichertePersonUnfall3: "",
  übergangsleistungVersichertePersonUnfall3: "",
  rückkaufswertVersichertePersonUnfall3: "",
  teilbeitragVersichertePersonUnfall3: "",
  krankenhaustagegeldleistungenUnfall3: "",
  genesungsgeldLeistungenUnfall3: "",
  abFuenfzigUVRenteUnfall3: false,
  abUVRenteUnfall3: false,
  prozentAbUVRenteUnfall3: "",
  betragUVRenteUnfall3: "",
  dynamikUVRenteUnfall3: "",
  dynamikProzentUVRenteUnfall3: "",

  selected4Persons: false,
  versichertePersonVersichertePersonUnfall4: "",
  tarifgruppeVersichertePersonUnfall4: "",
  grundsummeVersichertePersonUnfall4: "",
  progressionVersichertePersonUnfall4: "",
  vollinvaliditaetVersichertePersonUnfall4: "",
  todesfallVersichertePersonUnfall4: "",
  kosmetischeOperationVersichertePersonUnfall4: "",
  bergungskostenVersichertePersonUnfall4: "",
  übergangsleistungVersichertePersonUnfall4: "",
  rückkaufswertVersichertePersonUnfall4: "",
  teilbeitragVersichertePersonUnfall4: "",
  krankenhaustagegeldleistungenUnfall4: "",
  genesungsgeldLeistungenUnfall4: "",
  abFuenfzigUVRenteUnfall4: false,
  abUVRenteUnfall4: false,
  prozentAbUVRenteUnfall4: "",
  betragUVRenteUnfall4: "",
  dynamikUVRenteUnfall4: "",
  dynamikProzentUVRenteUnfall4: "",

  selected5Persons: false,
  versichertePersonVersichertePersonUnfall5: "",
  tarifgruppeVersichertePersonUnfall5: "",
  grundsummeVersichertePersonUnfall5: "",
  progressionVersichertePersonUnfall5: "",
  vollinvaliditaetVersichertePersonUnfall5: "",
  todesfallVersichertePersonUnfall5: "",
  kosmetischeOperationVersichertePersonUnfall5: "",
  bergungskostenVersichertePersonUnfall5: "",
  übergangsleistungVersichertePersonUnfall5: "",
  rückkaufswertVersichertePersonUnfall5: "",
  teilbeitragVersichertePersonUnfall5: "",
  krankenhaustagegeldleistungenUnfall5: "",
  genesungsgeldLeistungenUnfall5: "",
  abFuenfzigUVRenteUnfall5: false,
  abUVRenteUnfall5: false,
  prozentAbUVRenteUnfall5: "",
  betragUVRenteUnfall5: "",
  dynamikUVRenteUnfall5: "",
  dynamikProzentUVRenteUnfall5: "",

  selected6Persons: false,
  versichertePersonVersichertePersonUnfall6: "",
  tarifgruppeVersichertePersonUnfall6: "",
  grundsummeVersichertePersonUnfall6: "",
  progressionVersichertePersonUnfall6: "",
  vollinvaliditaetVersichertePersonUnfall6: "",
  todesfallVersichertePersonUnfall6: "",
  kosmetischeOperationVersichertePersonUnfall6: "",
  bergungskostenVersichertePersonUnfall6: "",
  übergangsleistungVersichertePersonUnfall6: "",
  rückkaufswertVersichertePersonUnfall6: "",
  teilbeitragVersichertePersonUnfall6: "",
  krankenhaustagegeldleistungenUnfall6: "",
  genesungsgeldLeistungenUnfall6: "",
  abFuenfzigUVRenteUnfall6: false,
  abUVRenteUnfall6: false,
  prozentAbUVRenteUnfall6: "",
  betragUVRenteUnfall6: "",
  dynamikUVRenteUnfall6: "",
  dynamikProzentUVRenteUnfall6: "",
};

const buEuGfkValues = {
  produktIDgesellschaftBuEuGjk: "",
  tarifbezeichnungBuEuGjk: "",
  vertragsnummerBuEuGjk: "",
  versicherungsnehmerBuEuGjk: "",
  versichertePersonBuEuGjk: "",
  artVersichertePersonBuEuGjk: "",
  vertragsbeginnVertragslaufzeitBuEuGjk: "",
  vertragsendeVertragslaufzeitBuEuGjk: "",
  bruttobeitragVertragslaufzeitBuEuGjk: "",
  nettozahlbeitragVertragslaufzeitBuEuGjk: "",
  zahlweiseVertragslaufzeitBuEuGjk: "",
  rentenleistungMonatVertragslaufzeitBuEuGjk: "",
  dynamikVertragslaufzeitBuEuGjk: false,
  garantierteRentensteigerungVertragslaufzeitBuEuGjk: "",
  rueckkaufswertAktuellVertragslaufzeitBuEuGjk: "",
};

const wertpapiereValues = {
  produktIDWertpapiere: "",
  tarifbezeichnungWertpapiere: "",
  vertragsnummerWertpapiere: "",
  vertragspartnerWertpapiere: "",
  WKNISINVertragspartnerWertpapiere: "",
  anzahlVertragspartnerWertpapiere: "",
  anlageartVertragspartnerWertpapiere: "",
  verwendungszweckVertragspartnerWertpapiere: "",
  anlagebetragVertragspartnerWertpapiere: "",
  wertpapiereNameVertragspartnerWertpapiere: "",
  anteileVertragspartnerWertpapiere: "",
  jahrDerZeichnungVertragspartnerWertpapiere: "",
  aktuellerWertVertragspartnerWertpapiere: "",
  vertragsbeginnVertragslaufzeitWertpapiere: "",
  vertragsendeVertragslaufzeitWertpapiere: "",
  VWLWertpapiere: false,
  arbeitnehmeranteilVWLWertpapiere: "",
  arbeitgeberanteilVWLWertpapiere: "",
  summeVWLWertpapiere: "",
  zahlweiseVWLWertpapiere: "",
  beitragVWLWertpapiereHeader: "",
};

const beteiligungenAiFValues = {
  produktIDBeteiligungenAiF: "",
  tarifbezeichnungBeteiligungenAiF: "",
  vertragsnummerBeteiligungenAiF: "",
  verwendungszweckBeteiligungenAiF: "",
  vertragsinhaberProduktIDBeteiligungenAiF: "",
  investitionsthemaVertragsinhaberProduktIDBeteiligungenAiF: "",
  zeichnungssummeVertragsinhaberProduktIDBeteiligungenAiF: "",
  beginnVertragsinhaberProduktIDBeteiligungenAiF: "",
  endeVertragsinhaberProduktIDBeteiligungenAiF: "",
  einmalbeitragVertragsinhaberProduktIDBeteiligungenAiF: "",
  beitragVertragsinhaberProduktIDBeteiligungenAiF: "",
  jaehrlAusschuettungVertragsinhaberProduktIDBeteiligungenAiF: "",
  aktuellerWertVertragsinhaberProduktIDBeteiligungenAiF: "",
  zumVertragsinhaberProduktIDBeteiligungenAiF: "",
};

const sachwertValues = {
  vertragsinhaberSachwert: "",
  produktIDSachwert: "",
  tarifbezeichnungVertragspartnerSachwert: "",
  vertragsnummerVertragspartnerSachwert: "",
  artVertragspartnerSachwert: "",
  fallsSonstigesVertragspartnerSachwert: "",
  gewichtVertragspartnerSachwert: "",
  lagerungVertragspartnerSachwert: "",
  anschaffungsjahrVertragspartnerSachwert: "",
  aktuellerWertVertragspartnerSachwert: "",
  vertragssummeVertragspartnerSachwert: "",
  strinzahlweiseVertragspartnerSachwertg: "",
  beitragVertragspartnerSachwert: "",
};

const immobilienbestandValues = {
  eigentuemerImmobilienbestand: "",
  objektzuordnungEigentuemerImmobilienbestand: "",
  immobilienartEigentuemerImmobilienbestand: "",
  nutzungEigentuemerImmobilienbestand: "",
  wohnflaecheEigentuemerImmobilienbestand: "",
  kaufpreisOhneStellplatzEigentuemerImmobilienbestand: "",
  preisProQmEigentuemerImmobilienbestand: "",
  stellplatzEigentuemerImmobilienbestand: false,
  kaufpreisStellplatzEigentuemerImmobilienbestand: "",
  aktuellerWertEigentuemerImmobilienbestand: "",
  mieteinnahmeWarmEigentuemerImmobilienbestand: "",
  mieteinnahmeKaltEigentuemerImmobilienbestand: "",
  mieteinnahmeStellplatzEigentuemerImmobilienbestand: "",
  hausgeldEigentuemerImmobilienbestand: "",
  jahrDesErwerbsEigentuemerImmobilienbestand: "",
  belastungUeberschussImmobilienbestand: false,
  nettobelastungMtlEigentuemerImmobilienbestand: "",
  restschuldEigentuemerImmobilienbestand: "",
  pflegeimmobilieEigentuemerImmobilienbestand: false,
  ferienimmobilieEigentuemerImmobilienbestand: false,
  denkmalschutzEigentuemerImmobilienbestand: false,
  mietpoolEigentuemerImmobilienbestand: false,
  endeMietpoolEigentuemerImmobilienbestand: "",
  garabtieProQmEigentuemerImmobilienbestand: "",
  voraussichtlichSchuldenfreiEigentuemerImmobilienbestand: "",
  wohnungsnummerEigentuemerImmobilienbestand: "",
  baujahrEigentuemerImmobilienbestand: "",
};

const vwlUndBausparenValues = {
  produktIDVwlUndBausparen: "",
  tarifbezeichnungVwlUndBausparen: "",
  vertragsnummerVwlUndBausparen: "",
  vertragsinhaberVwlUndBausparen: "",
  artVertragsinhaberVwlUndBausparen: "",
  besparungDurchVertragsinhaberVwlUndBausparen: "",
  bausparsummeVertragsinhaberVwlUndBausparen: "",
  vertragsnummerVertragsinhaberVwlUndBausparen: "",
  dauerzulagenantragVertragsinhaberVwlUndBausparen: "",
  WOPVertragsinhaberVwlUndBausparen: "",
  ANSparzulageVertragsinhaberVwlUndBausparen: "",
  aktuellerWertVertragsinhaberVwlUndBausparen: "",
  zahlweiseVertragsinhaberVwlUndBausparen: "",
  eigenanteilBeitragszahlerVwlUndBausparen: "",
  vertragsbeginnVertragslaufzeitVwlUndBausparen: "",
  vertragsendeVertragslaufzeitVwlUndBausparen: "",
  zahlungLetzteZulageVwlUndBausparen: "",
  gebuchtAmZahlungLetzteZulageVwlUndBausparen: "",
  guthabenszinsZahlungLetzteZulageVwlUndBausparen: "",
  darlehenszinsZahlungLetzteZulageVwlUndBausparen: "",
  besparungInProzentZahlungLetzteZulageVwlUndBausparen: "",
  voraussichtlicheZuteilungZahlungLetzteZulageVwlUndBausparen: "",
  VwlVwlVwlUndBausparen: false,
  arbeitgeberanteilVwlVwlUndBausparen: "",
  arbeitnehmeranteilVwlVwlUndBausparen: "",
  summeVwlVwlUndBausparen: "",
};

const bankprodukteValues = {
  ProduktIDBankprodukte: "",
  tarifbezeichnungBankprodukte: "",
  vertragsnummerBankprodukte: "",
  gesselschaftBankprodukte: "",
  vertragsinhaberBankprodukte: "",
  artVertragsinhaberBankprodukte: "",
  aktuellerWertVertragsinhaberBankprodukte: "",
  einmalbetraegeVertragsinhaberBankprodukte: "",
  beitragVertragsinhaberBankprodukte: "",
  zahlweiseVertragsinhaberBankprodukte: "",
  zinsVertragsinhaberBankprodukte: "",
  vertragsbeginnVertragslaufzeitBankprodukte: "",
  vertragsendeVertragslaufzeitBankprodukte: "",
  VWLBankprodukte: false,
  arbeitgeberanteilVWLBankprodukte: "",
  arbeitnehmeranteilVWLBankprodukte: "",
  summeVWLBankprodukte: "",
  aktuellerWertBankprodukte: "",
  zumBankprodukte: "",
  zahlweiseBankprodukte: "",
  einmalbeitragBankprodukte: "",
  beitragBankprodukte: "",
};

const darlehenValues = {
  produktIDDarlehen: "",
  tarifbezeichnungDarlehen: "",
  vertragsnummerDarlehen: "",
  darlehensnehmerDarlehen: "",
  artDarlehen: "",
  zugeordneteImmobilieObjektzuordnungDarlehen: "",
  darlehenshoeheBeginnObjektzuordnungDarlehen: "",
  restschuldBerechnenObjektzuordnungDarlehen: "",
  restschuldObjektzuordnungDarlehen: "",
  standVomObjektzuordnungDarlehen: "",
  rateObjektzuordnungDarlehen: "",
  zahlweiseObjektzuordnungDarlehen: "",
  zinssatzObjektzuordnungDarlehen: "",
  zinsfestschreibungObjektzuordnungDarlehen: "",
  tilgungProzentObjektzuordnungDarlehen: "",
  tilgungEuroObjektzuordnungDarlehen: "",
  sondertilgungProzentObjektzuordnungDarlehen: "",
  beginnObjektzuordnungDarlehen: "",
  strivoraussichtlichSchuldenfreiObjektzuordnungDarlehenng: "",
};

const kreditValues = {
  kreditnehmerKonsumkredit: "",
  produktIDKonsumkredit: "",
  tarifbezeichnungKonsumkredit: "",
  vertragsnummerKonsumkredit: "",
  verwendungsKonsumkredit: "",
  beginnKonsumkredit: "",
  ablaufKonsumkredit: "",
  zahlweiseKonsumkredit: "",
  rateMtlKonsumkredit: "",
  anfangshoeheMtlKonsumkredit: "",
  restschuldKonsumkredit: "",
  standVomKonsumkredit: "",
  zinssatzSelectKonsumkredit: "",
  zinssatzKonsumkredit: "",
  zinsfestschreibungKonsumkredit: "",
};

const sonstigeZahlungsverpflichtigungenValus = {
  vertragspartnerSonstigeZahlungsverpflichtigungen: "",
  artSonstigeZahlungsverpflichtigungen: "",
  leasinggeberSonstigeZahlungsverpflichtigungen: "",
  verwendungszweckSonstigeZahlungsverpflichtigungen: "",
  vertragsnummerSonstigeZahlungsverpflichtigungen: "",
  beginnZahlungSonstigeZahlungsverpflichtigungen: "",
  endeZahlungSonstigeZahlungsverpflichtigungen: "",
  rateSonstigeZahlungsverpflichtigungen: "",
  zahlweiseSonstigeZahlungsverpflichtigungen: "",
};

const automobilclubValues = {
  versicherungsnehmerAutomobilclub: "",
  anzahlVersicherterKFZAutomobilclub: "",
  vertragsbeginnVertragslaufzeitAutomobilclub: "",
  vertragsendeVertragslaufzeitAutomobilclub: "",
  zahlweiseAutomobilclub: "",
  beitragVersicherterKFZAutomobilclub: 0,
  clubAutomobilclub: "",
};

const ausgabenValues = {
  personenzuordnungAusgaben: "",
  stromAusgaben: "",
  haushaltKonsumAusgaben: "",
  nebenkostenWohneigentumAusgaben: "",
  kleidungSchuheAusgaben: "",
  freizeitAusgaben: "",
  haustiereAusgaben: "",
  arztMedikamenteAusgaben: "",
  zeitungenZeitschriftenAbosAusgaben: "",
  vereinSportAusgaben: "",
  hobbysAusgaben: "",
  tvTelefonInternetAusgaben: "",
  kraftstoffAusgaben: "",
  steuerKFZAusgaben: "",
  PKWWartungAusgaben: "",
  oeffentlicheVerkehrsmittelAusgaben: "",
  kindergartenSchulgeldAusgaben: "",
  taschengeldAusgaben: "",
  musikschuleAusgaben: "",
  unterhaltAusgaben: "",
  sonstigesAusgaben: "",
};

const steuerValues = {
  steuerklasseSteuern: "",
  kinderfreibetragSteuern: "",
  fuerSteuern: "",
  steuerlVeranlagungSteuern: "",
  kirchensteuerSteuern: "",
  zustFinanzamtSteuern: "",
  steuernummerSteuern: "",
  steuerIDSteuern: "",
  sozialversNummerSteuern: "",
  zustFamilienkasseSteuern: "",
  kindergeldnummerSteuern: "",
  steuerberatungDurchSteuern: "",
};

const einkommenAusSelbststaendigerErwerbstaetigkeitValues = {
  personenzuordnungEinkommenSelbststaendigeEwerbstaetigkeit: "",
  inklUmsatzsteuerEinkommenSelbststaendigeEwerbstaetigkeit: "",
  exklUmsatzsteuerEinkommenSelbststaendigeEwerbstaetigkeit: "",
  gewinnVorSteuernEinkommenSelbststaendigeEwerbstaetigkeit: "",
  gewinnNachSteuernEinkommenSelbststaendigeEwerbstaetigkeit: "",
  jaehrlichVersteuerndesEinkommenSelbststaendigeEwerbstaetigkeit: "",
};

const einkommenAusGeringuegigerBeschaefitgungValues = {
  personenzuordnungGeringfuegigeBeschaeftigung: "",
  einkommenProMonatGeringfuegigeBeschaeftigung: "",
  anzahlLoehneGehaelterProJahrGeringfuegigeBeschaeftigung: "",
  leistenEigenbeitraegeSvGeringfuegigeBeschaeftigung: "",
};

let einkommenGehaltValues = {
  personenzuordnungEinnahmen: "",
  bruttobezuegeEinnahmen: "",
  gehaltNameEinnahmen: "",
  steuerSelectEinnahmen: "",
  sozialversicherunSelectEinnahmen: "",
  gesamtBruttoSelectEinnahmen: "",
  betragMtlTextfieldEinnahmen: "",
  anzahlGehaelterEinnahmen: "",
  nettobezugEinnahmen: "",
  nettobezugBetragMtlEinnahmen: "",
  sonderzahlungenHinzufügenEinnahmen: "",
  sonderzahlungenAuszahlungsmonatEinnahmen: "",
  jahresbruttoEinnahmen: "",
  bruttoEinkommenProJahrEinnahmen: "",
  variablerBezug: false,
  fahrtkosten: false,
  feiertagszuschlag: false,
  nachtzuschlag: false,
  dienstwagen: false,
  kitaGebuehren: false,
  jobRad: false,
  vwlAG: false,
  sachbezug: false,
  provision: false,
  sonstigesBrutto: false,
  sonstigerSachbezug: false,
  abzuegeVwlGesamt: false,
  sonstigerAbzug: false,
  bonus: false,
  urlaubsgeld: false,
  weihnachtsgeld: false,
  gewinnbeteiligung: false,
  sonstigesSonderzahlung: false,
  variablerBezugSteuerSelectEinnahmen: "",
  variablerBezugSozialversicherungSelectEinnahmen: "",
  variablerBezugGesamtBruttoSelectEinnahmen: "",
  variablerBezugBetragMtlTextfieldEinnahmen: "",
  variablerBezugEntfernenEinnahmen: "",
  fahrtkostenSteuerSelectEinnahmen: "",
  fahrtkostenSozialversicherungSelectEinnahmen: "",
  fahrtkostenGesamtBruttoSelectEinnahmen: "",
  fahrtkostenBetragMtlTextfieldEinnahmen: "",
  fahrtkostenEntfernenEinnahmen: "",
  feiertagszuschlagSteuerSelectEinnahmen: "",
  feiertagszuschlagSozialversicherungSelectEinnahmen: "",
  feiertagszuschlagGesamtBruttoSelectEinnahmen: "",
  feiertagszuschlagBetragMtlTextfieldEinnahmen: "",
  feiertagszuschlagEntfernenEinnahmen: "",
  nachtzuschlagSteuerSelectEinnahmen: "",
  nachtzuschlagSozialversicherungSelectEinnahmen: "",
  nachtzuschlagGesamtBruttoSelectEinnahmen: "",
  nachtzuschlagBetragMtlTextfieldEinnahmen: "",
  nachtzuschlagEntfernenEinnahmen: "",
  dienstwagenSteuerSelectEinnahmen: "",
  dienstwagenSozialversicherungSelectEinnahmen: "",
  dienstwagenGesamtBruttoSelectEinnahmen: "",
  dienstwagenBetragMtlTextfieldEinnahmen: "",
  dienstwagenEntfernenEinnahmen: "",
  kitaGebuehrenSteuerSelectEinnahmen: "",
  kitaGebuehrenSozialversicherungSelectEinnahmen: "",
  kitaGebuehrenGesamtBruttoSelectEinnahmen: "",
  kitaGebuehrenBetragMtlTextfieldEinnahmen: "",
  kitaGebuehrenEntfernenEinnahmen: "",
  jobRadSteuerSelectEinnahmen: "",
  jobRadSozialversicherungSelectEinnahmen: "",
  jobRadGesamtBruttoSelectEinnahmen: "",
  jobRadBetragMtlTextfieldEinnahmen: "",
  jobRadEntfernenEinnahmen: "",
  vwlAGSteuerSelectEinnahmen: "",
  vwlAGSozialversicherungSelectEinnahmen: "",
  vwlAGGesamtBruttoSelectEinnahmen: "",
  vwlAGBetragMtlTextfieldEinnahmen: "",
  vwlAGEntfernenEinnahmen: "",
  sachbezugSteuerSelectEinnahmen: "",
  sachbezugSozialversicherungSelectEinnahmen: "",
  sachbezugGesamtBruttoSelectEinnahmen: "",
  sachbezugBetragMtlTextfieldEinnahmen: "",
  sachbezugEntfernenEinnahmen: "",
  provisionSteuerSelectEinnahmen: "",
  provisionSozialversicherungSelectEinnahmen: "",
  provisionGesamtBruttoSelectEinnahmen: "",
  provisionBetragMtlTextfieldEinnahmen: "",
  provisionEntfernenEinnahmen: "",
  sonstigesBruttoSteuerSelectEinnahmen: "",
  sonstigesBruttoSozialversicherungSelectEinnahmen: "",
  sonstigesBruttoGesamtBruttoSelectEinnahmen: "",
  sonstigesBruttoBetragMtlTextfieldEinnahmen: "",
  sonstigesBruttoEntfernenEinnahmen: "",
  sonstigerSachbezugSteuerSelectEinnahmen: "",
  sonstigerSachbezugSozialversicherungSelectEinnahmen: "",
  sonstigerSachbezugGesamtBruttoSelectEinnahmen: "",
  sonstigerSachbezugBetragMtlTextfieldEinnahmen: "",
  sonstigerSachbezugEntfernenEinnahmen: "",
  abzuegeVwlGesamtSteuerSelectEinnahmen: "",
  abzuegeVwlGesamtSozialversicherungSelectEinnahmen: "",
  abzuegeVwlGesamtGesamtBruttoSelectEinnahmen: "",
  abzuegeVwlGesamtBetragMtlTextfieldEinnahmen: "",
  abzuegeVwlGesamtEntfernenEinnahmen: "",
  sonstigerAbzugSteuerSelectEinnahmen: "",
  sonstigerAbzugSozialversicherungSelectEinnahmen: "",
  sonstigerAbzugGesamtBruttoSelectEinnahmen: "",
  sonstigerAbzugBetragMtlTextfieldEinnahmen: "",
  sonstigerAbzugEntfernenEinnahmen: "",

  sonstigerSachbezugNettobezugBetragMtlEinnahmen: "",
  sonstigerSachbezugNettobezugHinzufuegenParagraph: "",
  abzuegeVwlGesamtNettobezugBetragMtlEinnahmen: "",
  abzuegeVwlGesamtNettobezugHinzufuegenParagraph: "",
  sonstigerAbzugNettobezugBetragMtlEinnahmen: "",
  sonstigerAbzugNettobezugHinzufuegenParagraph: "",
};
/*

bonusSteuerSelectEinnahmen:"",
bonusSozialversicherungSelectEinnahmen:"",
bonusGesamtBruttoSelectEinnahmen:"",
bonusBetragMtlTextfieldEinnahmen:"",
bonusEntfernenEinnahmen:"",
urlaubsgeldSteuerSelectEinnahmen:"",
urlaubsgeldSozialversicherungSelectEinnahmen:"",
urlaubsgeldGesamtBruttoSelectEinnahmen:"",
urlaubsgeldBetragMtlTextfieldEinnahmen:"",
urlaubsgeldEntfernenEinnahmen:"",
weihnachtsgeldSteuerSelectEinnahmen:"",
weihnachtsgeldSozialversicherungSelectEinnahmen:"",
weihnachtsgeldGesamtBruttoSelectEinnahmen:"",
weihnachtsgeldBetragMtlTextfieldEinnahmen:"",
weihnachtsgeldEntfernenEinnahmen:"",
gewinnbeteiligungSteuerSelectEinnahmen:"",
gewinnbeteiligungSozialversicherungSelectEinnahmen:"",
gewinnbeteiligungGesamtBruttoSelectEinnahmen:"",
gewinnbeteiligungBetragMtlTextfieldEinnahmen:"",
gewinnbeteiligungEntfernenEinnahmen:"",
 */
const einkommenAusGeringfuegigerBeschaefitgungValues = {
  personenzuordnungGeringfuegigeBeschaeftigung: "",
  einkommenProMonatGeringfuegigeBeschaeftigung: "",
  anzahlLoehneGehaelterProJahrGeringfuegigeBeschaeftigung: "",
  leistenEigenbeitraegeSvGeringfuegigeBeschaeftigung: "",
};
const einnahmenValues = {
  personenzuordnungEinnahmen: false,
  einnahmeartEinnahmen: false,
  nichtselbststaendigeTaetigkeitEinnahmen: false,
  kapitalvermoegenEinnahmen: false,
  vermietungUndVerpachtungEinnahmen: false,
  landUndForstwirtschaftEinnahmen: false,
  gewerbebetriebEinnahmen: false,
  selbststaendigeTaetigkeitEinnahmen: false,
  sonstigeEinkünfteEinnahmen: false,
  außerordentlicheEinkuenfteEinnahmen: false,
  steuerfreieEinnahmenUnterProgessionsvorbehaltEinnahmen: false,
  vonEinnahmen: "",
  bisEinnahmen: "",
  zahlweiseEinnahmen: "",
  betragEinnahmen: "",
};

const gesundheitValues = {
  groesseGesundheit: "",
  gewichtGesundheit: "",
  motorradfahrerGesundheit: "",
  antwortRauchenGesundheit: "",
  seitRauchenGesundheit: "",
  brilleSehvermoegenGesundheit: false,
  kontaktlinsenSehvermoegenGesundheit: false,
  erlaeuterungenSehvermoegenGesundheit: "",
  linksDioptrienSehvermoegenGesundheit: "",
  rechtsDioptrienSehvermoegenGesundheit: "",
  antwortUnfallbestandGesundheit: "",
  zeitraumVonUnfallbestandGesundheit: "",
  zeitraumBisUnfallbestandGesundheit: "",
  inBehandlungUnfallbestandGesundheit: "",
  beschwerdefreiGeheiltUnfallbestandGesundheit: false,
  behandlungGesundheit: "",
  zeitraumVonBehandlungGesundheit: "",
  zeitraumBisBehandlungGesundheit: "",
  beschwerdefreiGeheiltBehandlungGesundheit: false,
  antwortOperationenGesundheit: "",
  zeitraumVonOperationenGesundheit: "",
  zeitraumBisOperationenGesundheit: "",
  diagnoseOperationenGesundheit: "",
  beschwerdefreiGeheiltOperationenGesundheit: false,
  seitOperationenGesundheit: "",
  KHTageOperationenGesundheit: "",
  AUTageOperationenGesundheit: "",
  antwortGesundheitUndArbeitsfaehigkeitGesundheit: "",
  notizenGesundheitUndArbeitsfaehigkeitGesundheit: "",
  derzeitigeZahnbehandlungenGesundheitHeader: "",
  antwortDerzeitigeZahnbehandlungenGesundheit: "",
  angabenDerzeitigeZahnbehandlungenGesundheit: "",
  antwortFehlendeZaehneGesundheit: "",
  anzahlFehlendeZaehneGesundheit: "",
  zahnersatzGesundheit: "",
  anzahlZahnersatzGesundheit: "",
  bestehtSeitZahnersatzGesundheit: "",
};

const bankdatenValues = {
  bankBankdaten: "",
  kontoInhaberBankdaten: "",
  kontonummerBankdaten: "",
  ibanBankdaten: "",
  bicBankdaten: "",
};

const kommunikationValues = {
  versicherungKommunikation: "",
  bankgeschaefteKommunikation: "",
  steuernKommunikation: "",
  rechtlichesKommunikation: "",
  privatTelefonFestnetzKommunikation: "",
  geschaeftlichTelefonFestnetzKommunikation: "",
  privatMobiltelefonKommunikation: "",
  geschaeftlichMobiltelefonKommunikation: "",
  privatFaxKommunikation: "",
  geschaeftlichFaxKommunikation: "",
  facebookKommunikation: "",
  xingKommunikation: "",
};

const arbeitgeberValues = {
  firmennameArbeitgeber: "",
  rechtsformArbeitgeber: "",
  straßeArbeitgeber: "",
  nummerArbeitgeber: "",
  postleitzahlArbeitgeber: "",
  wohnortArbeitgeber: "",
  telefonnummerArbeitgeber: "",
  seitWannbeschaeftigtArbeitgeber: "",
  inGewerkschaftBAVArbeitgeber: 0,
  inWelcheGewerkschaftBAVArbeitgeber: "",
  tarifgebundenBAVArbeitgeber: 0,
  tarifvertragBestehenBAVArbeitgeber: 0,
  inWelcheGewerkschaftBAVArbeitgeber: "",
  unternehmensgrößeBAVArbeitgeber: "",
  ansprechspartnerArbeitgeber: "",
  telNrAnsprechspartnerArbeitgeber: "",
  emailAnsprechspartnerArbeitgeber: "",
};

const ausbildungBerufValues = {
  beschaeftigungsverhaeltnisAusbildungBeruf: 0,
  imODAusbildungBeruf: false,
  ausbildungBeruf: 0,
  erlernterBerufAusbildungBeruf: "",
  berufsbrancheAusbildungBeruf: "",
  ausgeuebterBerufAusbildungBeruf: "",
  nebentaetigkeitenAusbildungBeruf: "",
  ueberwiegendTaetigAusbildungBeruf: 0,
  leitendTaetigAusbildungBeruf: false,
  prozentsatzAusbildungBeruf: 0,
  anzahlMitarbeiterAusbildungBeruf: "",
  reisetaetigkeitAusbildungBeruf: 0,
};

const wohnsituationValues = {
  wohnortWohnsituation: 0,
  mieteEigentumWohnsituation: 0,
  personenzuordnungWohnsituation: 0,
  warmmieteMieteProMonatWohnsituation: "",
  kaltmieteMieteProMonatWohnsituation: "",
  nebenkostenMieteProMonatWohnsituation: "",
  wohngeldMieteProMonatWohnsituation: "",
};

const fuehrerscheinValues = {
  fuehrerscheinFuehrerschein: "",
  ausstellungsDatumFuehrerscheinFuehrerschein: "",
  fuehrerscheinLandFuehrerschein: 0,
  klasseBFuehrerschein: false,
  klasseBEFuehrerschein: false,
  klasseAFuehrerschein: false,
  klasseAEinsFuehrerschein: false,
  klasseAZweiFuehrerschein: false,
  klasseCFuehrerschein: false,
  klasseCEinsFuehrerschein: false,
  klasseCEFuehrerschein: false,
};

const ausweisdatenValues = {
  nummerAusweisdaten: "",
  ausstellungsdatumAusweisdaten: "",
  gueltigBisAusweisdaten: "",
  ausstellungsstelleVerwaltungAusweisdaten: "",
  ortBehoerdeAusweisdaten: "",
  reisepassNummerAusweisdaten: "",
  Ausstellungsdatum: "",
  gueltigBisReisepassReisepassAusweisdaten: "",
  ausstellungsstelleVerwaltungReisepassAusweisdaten: "",
  ortBehoerdeReisepassAusweisdaten: "",
  nummerAufenthaltstitelAusweisdaten: "",
  ausstellungsdatumAufenthaltstitelAusweisdaten: "",
  gueltigAbAufenthaltstitelAusweisdaten: "",
  gueltigBisAufenthaltstitelAusweisdaten: "",
  ortBehoerdeAufenthaltstitelAusweisdaten: "",
};

const kindValues = {
  geschlechtKind: 0,
  vornameKind: "",
  nameKind: "",
  geburtsdatumKind: "",
  geburtsortKind: "",
  gemeinsamesKind: false,
  versichertBeiKind: 0,
  steuerIDKind: "",
  ausbildungsstandKind: 0,
  bisKind: "",
  fachrichtungKind: "",
  berufKind: "",
  kindergeldBisKind: "",
  bezugsberechtigtePersonKindergeldKind: 0,
  bisJahrKinderfreibetragKind: "",
  kinderfreibetragKind: 0,
  bezugsberechtigtePersonKindFreibetragKind: 0,
  kinderzulageRiesterKind: 0,
};

const personaldatenValues = {
  anredePersonendaten: "",
  titelPersonendaten: "",
  vornamePersonendaten: "",
  namePersonendaten: "",
  geburtsdatumPersonendaten: "",
  familienstandPersonendaten: "",
  seitWannPersonendaten: "",
  streetAdressePersonendaten: "",
  PLZAdressePersonendaten: "",
  hausnummerAdressePersonendaten: "",
  cityAdressePersonendaten: "",
  seitWannAdressePersonendaten: "",
  fallschirmspringenHobbysPersonendaten: false,
  motorradHobbysPersonendaten: false,
  karateHobbysPersonendaten: false,
  surfenHobbysPersonendaten: false,
  jagdHobbysPersonendaten: false,
  segelnHobbysPersonendaten: false,
  hobbysMotorbootPersonendaten: false,
  hobbysTauchenPersonendaten: false,
  hobbysKletternPersonendaten: false,
  hobbysBergsteigenPersonendaten: false,
  hobbysSonstigesPersonendaten: false,
};

const privateKrankenValues = {
  produktIDPrivateKrankenversicherung: "",
  tarifbezeichnungPrivateKrankenversicherung: "",
  vertragsnummerPrivateKrankenversicherung: "",
  versicherungsnehmerPrivateKrankenversicherung: "",
  zahlweiseVersicherungsnehmerPrivatePflegeversicherung: "",
  gesamtbeitragVersicherungsnehmerPrivatePflegeversicherung: "",
  tarifVersicherungsnehmerPrivatePflegeversicherung: "",
  anzahlVersichertePersonenPrivatePflegeversicherung: "",
  versichertePersonPrivatePflegeversicherung: "",
  sonstigeVersichertePersonPrivatePflegeversicherung: "",
  tarifVersichertePersonPrivatePflegeversicherung: "",
  primaerarztprinzipVersichertePersonPrivatePflegeversicherung: "",
  einbettzimmerChefarztVersichertePersonPrivatePflegeversicherung: "",
  beitragVersichertePersonPrivatePflegeversicherung: "",
  zahnbehandlungLeistungsbeschreibungPrivatePflegeversicherung: "",
  ambulantLeistungsbeschreibungPrivatePflegeversicherung: false,
  stationaerLeistungsbeschreibungPrivatePflegeversicherung: false,
  zahnLeistungsbeschreibungPrivatePflegeversicherung: false,
  tagEinsPrivatePflegeversicherung: "",
  betragEinsPrivatePflegeversicherung: "",
  tagZweiPrivatePflegeversicherung: "",
  betragZweiPrivatePflegeversicherung: "",
  kurtagegeldZweiPrivatePflegeversicherung: "",
};
// die dem Formular zugrunde liegenden Daten...

function App(props) {
  const [loaded, setLoaded] = useState(false);
  const [initialised, setInitialised] = useState(false);

  const [isMock, toggleMock] = useState({
        active:false,
    style:{padding:"20"},
    showImage:"none"})
  const [isBusy, setIsBusy] = useState(false);
  const [rawData, setRawData] = useState({ success: false });
  const [formData, setFormData] = useState({ success: false });
  const [login, setLogin] = useState("")
  const {

    einkommenGehaltContext,
    versicherungsnehmerValue,
    setVersicherungsnehmerValue,
    anzahlVp,
    einkommenGehaltBezuege,
    setEinkommenGehaltBezuege,
    setVertragId,
    bruttoSum,
    setAnzahlVp,
    setBruttoSum ,
    mandantGroup,
    setMandantGroup,  bankverbindungen, setBankverbindungen
} = useContext(Context);
  /*
  suite mapped:
chooseCard


Values not Mapped 

 = {
    ...kapitalversicherungValues,
  };C:\Users\draeg\Documents\newSuite\JCPIS_ANALYSE\src\main\java\de\jcpis\analyse\presentation\GesellschaftController.java
*/
  //note: Personendaten crashen wegen gesellschaft, suitevalues, einkommen gehalt entfernen taste checken,BETEILIGUNGEN, IMMOBILIENBESTAND, VWL_BAUSPAREN in live suite
  const params = useParams()
  const [card, setCard] = useState(params.card);
  const [id, setId] = useState();
  let jsonForm = [];
  const ref = useRef();

  switch (card) {
    case "DARLEHEN":
      dummyData ={...darlehenValues}
      jsonForm =[darlehen]
      break
    case "RIESTER":
dummyData ={ ...riesterrenteValues}
jsonForm =[riesterrente]
    break
    case "STEUERN":
      dummyData = { ...steuerValues };
      jsonForm = [steuer];
      break;
    case "SACHWERT":
      dummyData = { ...sachwertValues };
      jsonForm = [sachwert];
      //find ich net
      break;
    case "RUERUP":
      dummyData = { ...ruerupRenteValues };
      jsonForm = [ruerupRente];
      break;
    case "wertpapiere":
      //Muss ich noch in suite finden
      dummyData = { ...wertpapiereValues };
      jsonForm = [wertpapiere];
      break;
    case "DIREKTZUSAGE":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
    case "PENSIONSFONDS_3":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
    case "DIREKT_40":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
    case "PENSIONSKASSE_40":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
    case "UNTERSTUETZUNGSKASSE":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
      case "DIREKT_3":
      dummyData = { ...betrieblicheAltersversorgungValues };
      jsonForm = [betrieblicheAltersversorgung];
      break;
    case "BANKVERBINDUNG":
      dummyData = {
        ...bankdatenValues,
      };
      jsonForm = [bankdaten];
      break;
    case "KIND":
      dummyData = {
        ...kindValues,
      };
      jsonForm = [kind];
      break;
    case "GESUNDHEIT":
      dummyData = {
        ...gesundheitValues,
      };
      jsonForm = [gesundheit];
      break;
    case "FUEHRERSCHEIN":
      dummyData = {
        ...fuehrerscheinValues,
      };
      jsonForm = [fuehrerschein];
      break;
    case "AUSBILDUNGBERUF":
      dummyData = { ...ausbildungBerufValues };
      jsonForm = [ausbildungBeruf];
      break;
    case "KOMMUNIKATION":
      dummyData = { ...kommunikationValues };
      jsonForm = [kommunikation];
      break;
    case "ARBEITGEBER":
      dummyData = { ...arbeitgeberValues };
      jsonForm = [arbeitgeber];
      break;
    case "AUSWEIS":
      dummyData = { ...ausweisdatenValues };
      jsonForm = [ausweisdaten];
      break;
    case "PERSONALDATEN":
      dummyData = {
        ...personaldatenValues,
      };
      jsonForm = [personaldaten];
      break;
    case "GESETZLICHE_AV":
      dummyData = { ...gesetzlicheAltersvorsorgeValues };
      jsonForm = [gesetzlicheAltersvorsorge];
      break;
    case "EINNAHMEN":
      dummyData = { ...einnahmenValues };
      jsonForm = [einnahmen];
      break;
    case "EINKOMMEN_GEHALT":
      dummyData = { ...einkommenGehaltValues };
      jsonForm = [einkommenGehalt];
      break;
    case "EINKOMMEN_MINIJOB":
      dummyData = { ...einkommenAusGeringfuegigerBeschaefitgungValues };
      jsonForm = [einkommenAusGeringfuegigerBeschaefitgung];
      break;
    case "EINKOMMEN_SELBSTAENDIGER":
      dummyData = {
        ...einkommenAusSelbststaendigerErwerbstaetigkeitValues,
      };
      jsonForm = [einkommenAusSelbststaendigerErwerbstaetigkeit];
      break;
    case "AUSGABEN":
      dummyData = { ...ausgabenValues };
      jsonForm = [ausgaben];
      break;
    case "AUTOMOBILCLUB":
      dummyData = { ...automobilclubValues };
      jsonForm = [automobilclub];
      break;
    case "SONSTIGE_ZAHLUNG":
      dummyData = { ...sonstigeZahlungsverpflichtigungenValus };
      jsonForm = [sonstigeZahlungsverpflichtungen];
      break;
    case "KONSUMKREDIT":
      dummyData = { ...kreditValues };
      jsonForm = [kredit];
      break;
    case "BANKPRODUKTE":
      dummyData = { ...bankprodukteValues };
      jsonForm = [bankprodukte];
      break;
    case "VWL_BAUSPAREN":
      dummyData = { ...vwlUndBausparenValues };
      jsonForm = [vwlUndBausparen];
      break;
    case "IMMOBILIENBESTAND":
      dummyData = { ...immobilienbestandValues };
      jsonForm = [immobilienbestand];
      break;
    case "BETEILIGUNGEN":
      dummyData = { ...beteiligungenAiFValues };
      jsonForm = [beteiligungenAiF];
      break;
    case "BU":
      dummyData = { ...buEuGfkValues };
      jsonForm = [buEuGfk];
      break;
    case "UNFALL":
      dummyData = { ...unfallValues };
      jsonForm = [unfall];
      break;
    case "RISIKO":
      dummyData = { ...todesfallValues };
      jsonForm = [todesfall];
      break;
    case "DREADDISEASE":
      dummyData = { ...schwereKrankheitenValues };
      jsonForm = [schwereKrankheiten];
      break;
    case "PFLEGEKOSTEN":
      dummyData = { ...privatePflegeversicherungValues };
      jsonForm = [privatePflegeversicherung]; //alles gleich
      break;
    case "PFLEGERENTEN":
      dummyData = { ...gesetzlicheKrankenversicherungValue };
      jsonForm = [privatePflegeversicherung]; //alles gleich
      break;
    case "PFLEGETAGEGELD":
      dummyData = { ...privateKrankenValues };
      jsonForm = [privatePflegeversicherung]; //alles gleich
      break;
    case "GESETZLICHE_KRANKEN":
      dummyData = { ...gesetzlicheKrankenversicherungValue };
      jsonForm = [gesetzlicheKrankenversicherung];
      break;
    case "KVV":
      dummyData = { ...privateKrankenValues };
      jsonForm = [privateKranken];
      break;
    case "KVZ":
      dummyData = { ...kvZusatzValue };
      jsonForm = [kvZusatz];
      break;
    case "PRIVATHAFTPFLICHT":
      dummyData = { ...privathaftpflichtValue };
      jsonForm = [privathaftpflicht];
      break;
    case "HUNDEHALTERHAFTPFLICHT":
      dummyData = { ...hundehalterhaftpflichtValue };
      jsonForm = [hundehalterpflicht];
      break;
    case "PFERDEHALTERHAFTPFLICHT":
      dummyData = { ...pferdehalterhaftpflichtValue };
      jsonForm = [pferdehalterhaftpflicht];
      break;
    case "HAUSRAT":
      dummyData = { ...hausratValue };
      jsonForm = [hausrat];
      break;
    case "RECHTSSCHUTZ":
      dummyData = { ...rechtschutzValue };
      jsonForm = [rechtschutz];
      break;
    case "WOHNGEBAEUDE":
      dummyData = { ...wohngebaeudeValue };
      jsonForm = [wohngebaeude];
      break;
    case "KFZ":
      dummyData = { ...KFZValue };
      jsonForm = [KFZ];
      break;
    case "WOHNSITUATION":
      dummyData = { ...wohnsituationValues };
      jsonForm = [wohnsituation];
      break;
    default:
      jsonForm = [];
  }
  var dummyData;
  const handleSave = async () => {
    if (!isBusy && ref?.current) {
      setIsBusy(true);
      // ruft die dem DynamicForm in onSumbit übergebene Funktion auf (nach Validierung)
      try {
        await ref.current.submit();
        alert("Daten wurden gespeichert");
        setLoaded(false)
        setIsBusy(true)
        if(checkIfPersonendaten(card)){
          setInitialised(false);
          getDataPersonendaten()
          setIsBusy(false);
          setTimeout(()=>{
            setLoaded(true)
          },100)
      } else{
          setInitialised(false);
          getData();
          setIsBusy(false);
          setTimeout(()=>{
          setLoaded(true)
          },100)
      }
      } catch (e) {
        console.warn(e);
        alert("Daten wurden NICHT gespeichert");
      }
      setIsBusy(false);
    }
  };

  const handleSubmit = (data) => {
    console.log("Nun folgende Daten ans Backend übertragen", data);
    let dataPaket = qs.stringify({ ...data, json: JSON.stringify(data.json) });

    //.replace("%5Bobject%20Object%5D", qs.extract("{")+qs.stringify(data.json)+qs.parse("}"))
    // simuliere einen etwas länger dauernden speichervorgang
    console.log(dataPaket);
    axios
      .post(saveAsset.url, dataPaket, saveAsset)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => alert(err));

    setIsBusy(true);
    // die kompletten (evtl. vom backend geänderten) daten an das formular zurückgeben.
    // dadurch wird das formular geupdatet
  };

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
  document.cookie = "JSESSIONID=9A2CC3C93070309D888ACD30294946A6";
  var FormData = require('form-data');
  var dataLogin = new FormData();
  dataLogin.append('action', 'jwtlogin');
 // dataLogin.append('templogin', 'rNrkrCQVMk265cH3zjCACVp4CFkNgSUB');
  
  var loginLiveSuite = {
    method: 'post',
    url: 'https://jcp-suite.de/suite/user.json',
    data : dataLogin
  };
  
    var requestOptionsMandantLiveSuite = (login)=>{
      return (
   {
    method: "get",
    url: "https://jcp-suite.de/suite/mandant.json?action=getMandantById&id="+params.mandantId,
    withCredentials: true,
    headers: {Authorization: "Bearer "+login },
    redirect: "follow",
  })
  };
  var requestOptionsAnalyseAssetsLiveSuite = (login)=>{
    return (
 {
    method: "get",
    url: "https://jcp-suite.de/suite/asset.json?action=getAllAnalyseAssets&mandantId=&analyseId="+params.analyseId,
    withCredentials: true,
    headers: { Authorization: "Bearer "+login },
    redirect: "follow"})
  };
  var requestOptionsMandantGroupLiveSuite = (login)=>{
    return (
 {
    method: "get",
    url: "https://jcp-suite.de/suite/mandant.json?action=getMandantGroup&mandantId="+params.mandantId,
    withCredentials: true,
    headers: { Authorization: "Bearer "+login },
    redirect: "follow",
  })};

  var getLiveSuiteToken =(login)=>{
    return (
 {
    method: "get",
    url: "https://jcp-suite.de/suite/mandant.json?action=getMandantGroup&mandantId="+params.mandantId,
    withCredentials: true,
    headers: { Cookie: document.cookie },
    redirect: "follow",
  })}

  var saveAssetLiveSuite =(login)=>{
    return (
 {
    method: "post",
    url: "https://jcp-suite.de/suite/analyseApp",
    withCredentials: true,
    headers: {

      "Content-Type": "application/x-www-form-urlencoded",Authorization: "Bearer "+login
    },
    redirect: "follow",
  })}
  var getContextIdByIdLiveSuite = (login)=>{
    return (
 {
    method: "post",
    url: "https://jcp-suite.de/suite/context.json?action=getContextById&id="+params.contextId,
    withCredentials: true,
    headers: {
      Authorization: "Bearer "+login,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  })}
  var getProductIdLiveSuite =(login)=>{
    return (
 {
    method: "post",
    url:
      "https://jcp-suite.de/suite/productId.json?action=getProductIds&tarifTypeId=" +
      card,
    withCredentials: true,
    headers: {
      Authorization: "Bearer "+login,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  })}
  var requestOptionsGesellschaftIdLiveSuite = (login)=>{
    return (
 {
    method: "get",
    url:
      "https://jcp-suite.de/suite/gesellschaft.json?action=getAllGesellschaftsByTarifTypeId&tarifTypeId=" +
      card +
      "&contextId="+params.contextId,
    withCredentials: true,
    headers: { Authorization: "Bearer "+login },
    redirect: "follow",
  })}
//192.168.1.181 LÖSCHEN WENN FERTIG!!!
  var requestOptionsMandantGroup = {
    method: "get",
    url: "http://localhost:8080/build-suite/mandant.json?action=getMandantGroup&mandantId="+params.mandantId,
    withCredentials: true,
    headers: { Cookie: document.cookie },
    redirect: "follow",
  };
  var requestOptionsMandant = {
    method: "get",
    url: "http://localhost:8080/build-suite/mandant.json?action=getMandantById&id="+params.mandantId,
    withCredentials: true,
    headers: {
      Cookie: document.cookie,
    },
    redirect: "follow",
  };

  var saveAsset = {
    method: "post",
    url: "http://localhost:8080/build-suite/analyseApp",
    withCredentials: true,
    headers: {
      Cookie: document.cookie,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  };
  var getContextIdById = {
    method: "post",
    url: "http://localhost:8080/build-suite/context.json?action=getContextById&id="+params.contextId,
    withCredentials: true,
    headers: {
      Cookie: document.cookie,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  };
  var getProductId = {
    method: "post",
    url:
      "http://localhost:8080/build-suite/productId.json?action=getProductIds&tarifTypeId=" +
      card,
    withCredentials: true,
    headers: {
      Cookie: document.cookie,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow",
  };
  var requestOptionsAnalyseAssets = {
    method: "get",
    url: "http://localhost:8080/build-suite/asset.json?_dc=1636967969021&action=getAllAnalyseAssets&mandantId="+params.mandantId+"&analyseId="+params.analyseId,
    withCredentials: true,
    headers: { Cookie: document.cookie },
    redirect: "follow",
  };
  var requestOptionsGesellschaftId = {
    method: "get",
    url:
      "http://localhost:8080/build-suite/gesellschaft.json?action=getAllGesellschaftsByTarifTypeId&tarifTypeId=" +
      card +
      "&contextId="+params.contextId,
    withCredentials: true,
    headers: { Cookie: document.cookie },
    redirect: "follow",
  };
  var requestOptionsMandant = {
    method: "get",
    url: "http://localhost:8080/build-suite/mandant.json?action=getMandantById&id="+params.mandantId,
    withCredentials: true,
    headers: {
      Cookie: document.cookie,
    },
    redirect: "follow",
  };

  function checkIfPersonendaten(card){
    let output = false
    if(card==="GEHALT_EINKOMMEN"){
      output = true
    }
    if(card==="BANKVERBINDUNG"){
      output = true
    }if(card==="KIND"){
      output = true
    }if(card==="PERSONALDATEN"){
      output = true
    }if(card==="AUSWEIS"){
      output = true
    }if(card==="KOMMUNIKATION"){
      output = true
    }if(card==="ARBEITGEBER"){
      output = true
    }if(card==="KIND"){
      output = true
    }if(card==="KIND"){
      output = true
    }
    return(output)
  }
  const getDataLiveSuite = () => {
    axios(loginLiveSuite).then((login)=>{
      getDataWithLogin(login.data.data)
    }).catch((error) =>{
      console.log("error")
      console.log(error)})
  

    function getDataWithLogin(login){
     Promise.all([
      axios(requestOptionsMandantLiveSuite(login)),
      axios(requestOptionsAnalyseAssetsLiveSuite(login)),
      axios(requestOptionsMandantGroupLiveSuite(login)),
      axios(requestOptionsGesellschaftIdLiveSuite(login)),
      axios(getContextIdByIdLiveSuite(login)),
      axios(getProductIdLiveSuite(login)),
    ])
      .then((result) => {
        setRawData({
          mandantData: result[0].data.data,
          mandantGroup: result[2].data.data.mandantMandantGroups,
          analyseAssets: result[1].data.data,
          gesellschaft: result[3].data,
          contextProductId: result[4].data.data,
          productId: result[5].data.data,
          success: true,
        });
    setMandantGroup(result[2].data.data.mandantMandantGroups)

    })
      .catch((error) =>{
      console.log("error")
      console.log(error)});
  };
}
const getData = () => {
   Promise.all([
    axios(requestOptionsMandant),
    axios(requestOptionsAnalyseAssets),
    axios(requestOptionsMandantGroup),
    axios(requestOptionsGesellschaftId),
    axios(getContextIdById),
    axios(getProductId),
  ])
    .then((result) => {
      setRawData({
        mandantData: result[0].data.data,
        mandantGroup: result[2].data.data.mandantMandantGroups,
        analyseAssets: result[1].data.data,
        gesellschaft: result[3].data,
        contextProductId: result[4].data.data,
        productId: result[5].data.data,
        success: true,
      });
  setMandantGroup(result[2].data.data.mandantMandantGroups)

  })
    .catch((error) =>{
    console.log("error")
    console.log(error)});
}
  const getDataPersonendaten = () => {
    Promise.all([
      axios(requestOptionsMandant),
      axios(requestOptionsAnalyseAssets),
      axios(requestOptionsMandantGroup),
      axios(getContextIdById)
    ])
      .then((result) => {
        setRawData({
          mandantData: result[0].data.data,
          mandantGroup: result[2].data.data.mandantMandantGroups,
          contextProductId: result[3].data.data,
          analyseAssets: result[1].data.data,
          success: true,
        });
    setMandantGroup(result[2].data.data.mandantMandantGroups)
    setBankverbindungen(result[2].data.data.mandantMandantGroups.mandantData.bankverbindungs)
      })
      .catch((error) =>{
      console.log("error")
      console.log(error)});
  }
  useEffect(() => {
    let mounted = true;
    setIsBusy(true);
    if (mounted) {
if(checkIfPersonendaten(card)){
      getDataPersonendaten()
      setIsBusy(false);


    } else{
      getData();
      setIsBusy(false);
    }
    }

    return () => {
      mounted = false;
    };
  }, []);
  console.log(mandantGroup)

  useEffect(() => {
    if (rawData.success === true && initialised === false) {
      isAssetAvailable(
        rawData,
        setFormData,
        dummyData,
        setLoaded,
        "none",
        card,
        setVersicherungsnehmerValue,
        rawData.contextProductId.contextConfig.desktop.showExternalProductId,
        setAnzahlVp,
        bankverbindungen, setBankverbindungen
      );

      setId(mapAssets(rawData.analyseAssets));
      setInitialised(true);

      setTimeout(() => {
        setLoaded(false);
        
      }, 300);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
  }, [rawData]);
  useEffect(() => {
    if (rawData.success === true && initialised === true) {
      console.log("gerufen")
      isAssetAvailable(
        rawData,
        setFormData,
        dummyData,
        setLoaded,
        redefineCard(
          id,
          versicherungsnehmerValue.index,
          versicherungsnehmerValue.tarifTypeId,
          rawData.mandantGroup
        ),
        card,
        setVersicherungsnehmerValue,
        rawData.contextProductId.contextConfig.desktop.showExternalProductId,
        setAnzahlVp,
        bankverbindungen, setBankverbindungen
      );
      setVertragId(
        redefineCard(
          id,
          versicherungsnehmerValue.index,
          versicherungsnehmerValue.tarifTypeId,
          rawData.mandantGroup
        )
      );
      setTimeout(() => {
        setLoaded(false);
      }, 100);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }
  }, [versicherungsnehmerValue]);

  useEffect(() => {
    if (rawData.success === true && initialised === true) {
      //TODO: KVZ und KVV werte auf false setzen!
      switch (anzahlVp) {
        case 1:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 1,
            selected2Persons: false,
            selected3Persons: false,
            selected4Persons: false,
            selected5Persons: false,
            selected6Persons: false,
          });
          break;
        case 2:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 2,
            selected2Persons: true,
            selected3Persons: false,
            selected4Persons: false,
            selected5Persons: false,
            selected6Persons: false,
          });
          break;
        case 3:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 3,
            selected2Persons: true,
            selected3Persons: true,
            selected4Persons: false,
            selected5Persons: false,
            selected6Persons: false,
          });
          break;
        case 4:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 4,
            selected2Persons: true,
            selected3Persons: true,
            selected4Persons: true,
            selected5Persons: false,
            selected6Persons: false,
          });
          break;
        case 5:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 5,
            selected2Persons: true,
            selected3Persons: true,
            selected4Persons: true,
            selected5Persons: true,
            selected6Persons: false,
          });
          break;
        case 6:
          setFormData({
            ...formData,
            anzahlVersichertePersonen: 6,
            selected2Persons: true,
            selected3Persons: true,
            selected4Persons: true,
            selected5Persons: true,
            selected6Persons: true,
          });
          break;
        default:
          break;
      }
      /*
      if(card === "BANKVERBINDUNG"){
        isAssetAvailable(
          rawData,
          setFormData,
          dummyData,
          setLoaded,
          "none",
          card,
          setVersicherungsnehmerValue,
          rawData.contextProductId.contextConfig.desktop.showExternalProductId,
          setAnzahlVp,
          deletionIndex
        );

      }*/
      setTimeout(() => {
        setLoaded(false);
      }, 100);
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    }

  }, [anzahlVp]);
  useEffect(() => {
    if (rawData.success === true && initialised === true) {
      switch (einkommenGehaltBezuege.pressedValue) {
        case "VariablerBezug":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              variablerBezug: true,
              
            });
          } else {
            setFormData({
              ...bruttoSum,
              variablerBezugBetragMtlTextfieldEinnahmen: 0,
              variablerBezug: false,
            });
          }
          break;
        case "Fahrtkosten":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              fahrtkosten: true, 
            });
          } else {
            setFormData({
              ...bruttoSum,
              fahrtkostenBetragMtlTextfieldEinnahmen: 0,
              fahrtkosten: false,
            });
          }
          break;
        case "Provision":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              provision: true, 
            });
          } else {
           
            setFormData({
              ...bruttoSum,
              provisionBetragMtlTextfieldEinnahmen: 0,
              provision: false,
            });
          }
          break;

        case "Feiertagszuschlag":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              feiertagszuschlag: true,
            });
          } else {
           
            setFormData({
              ...bruttoSum,
              feiertagszuschlagBetragMtlTextfieldEinnahmen: 0,
              feiertagszuschlag: false,
            });
          }
          break;

        case "Nachtzuschlag":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              nachtzuschlag: true,
            });
          } else {
            setFormData({
              ...bruttoSum,
              nachtzuschlag: false,
              nachtzuschlagBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "Dienstwagen":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              dienstwagen: true,
            });
          } else {

            setFormData({
              ...bruttoSum,
              dienstwagen: false,
              dienstwagenBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "Gebuehren":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              kitaGebuehren: true
            });
          } else {
            setFormData({
              ...bruttoSum,
              kitaGebuehren: false,
              kitaGebuehrenBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "JobRad":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              jobRad: true,
          })} else {

            setFormData({
              ...bruttoSum,
              jobRad: false,
              jobRadBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "VwLAG":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              vwlAG: true, 
            });
          } else {

            setFormData({
              ...bruttoSum,
              vwlAG: false,
              vwlAGBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "Sachbezug":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              sachbezug: true, 
            });
          } else {

            setFormData({
              ...bruttoSum,
              sachbezug: false,
              sachbezugBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;
        case "Sonstiges":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              sonstigesBrutto: true,
            });
          } else {

            setFormData({
              ...bruttoSum,
              sonstigesBrutto: false,
              sonstigesBruttoBetragMtlTextfieldEinnahmen: 0,
            });
          }
          break;

        case "SonstigerSachbezug":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              sonstigerSachbezug: true,

            });
          } else {

            setFormData({
              ...bruttoSum,
              sonstigerSachbezug: false,
              sonstigerSachbezugNettobezugBetragMtlEinnahmen: 0,
            });
          }
          break;

        case "AbzuegeVwlGesamt":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              abzuegeVwlGesamt: true,
            });
          } else {

            setFormData({
              ...bruttoSum,
              abzuegeVwlGesamt: false,
              abzuegeVwlGesamtNettobezugBetragMtlEinnahmen: 0,
            });
          }
          break;
        case "SonstigerAbzugNetto":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              sonstigerAbzug: true, 

            });
          } else {
            setFormData({
              ...bruttoSum,
              sonstigerAbzug: false,
              sonstigerAbzugNettobezugBetragMtlEinnahmen: 0,
            });
          }
          break;
        case "Bonus":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              bonus: true, 

            });
          } else {
            setFormData({
              ...bruttoSum,
              bonus: false,
              sonderzahlungenAuszahlungsmonatEinnahmenSelect: "",
              sonderzahlungenAuszahlungsmonatEinnahmen: 0,
            });
          }
          break;
        case "Urlaubsgeld":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              urlaubsgeld: true, 

            });
          } else {
            setFormData({
              ...bruttoSum,
              urlaubsgeld: false,
              urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmenSelect: "",
              urlaubsgeldSonderzahlungenAuszahlungsmonatEinnahmen: 0,
            });
          }
          break;
        case "Weihnachtsgeld":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              weihnachtsgeld: true, 

            });
          } else {
            setFormData({
              ...bruttoSum,
              weihnachtsgeld: false,
              weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmenSelect: "",
              weihnachtsgeldSonderzahlungenAuszahlungsmonatEinnahmenSelect: 0,
            });
          }
          break;
        case "Gewinnbeteiligung":
          if (einkommenGehaltBezuege.hinzufuegen) {
            setFormData({
              ...bruttoSum,
              gewinnbeteiligung: true, 

            });
          } else {
            setFormData({
              ...bruttoSum,
              gewinnbeteiligung: false,
              gewinnbeteiligungSonderzahlungenAuszahlungsmonatEinnahmenSelect:
                "",
              sonstigerAbzugNettobezugBetragMtlEinnahmen: 0,
            });
          }
          break;
        default:
          break;
      }

      setTimeout(() => {
        setLoaded(false);

      }, 50);
      setTimeout(() => {
        setLoaded(true);
        window.scrollTo(0,bruttoSum.scrollY)
      }, 60);
    }
  }, [einkommenGehaltBezuege]);

function showMock(){
  if(!isMock.active){
    toggleMock({
      active:true,
     style:{ position:"absolute", top:"9.8vh", width:"57vw",height:"89.7vh", left:"33vw", backgroundColor:"#eeeeee", overflow:"auto", overflowX:"hidden" },
     showImage:"inline"})
  }
 else{
  toggleMock({
    active:false,
   style:{padding:"20"},
   showImage:"none"
  })
}
}
  return ( 
    <div tyle={{ backgroundColor:"#eeeeee"}}>
      {!loaded ? null : (
        <ThemeProvider theme={theme}>

          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale} className="mock4">
          <Checkbox 
          value={isMock}
          onChange={()=>{showMock()}}
          style={{position:"absolute"}}
          label="toggle Mock"
          />
            <img src={mock} style={{display:isMock.showImage}} className="mock" />
            <div style={{...isMock.style}}>
              <DynamicForm
                // Das gesamte Formular kann deaktiviert werden (read-only)
                disabled={isBusy}
                // falls eine kompakte Ansicht gewünscht wird, werden alle Elemente auf voller Breite
                // angezeigt (grid-props werden ignoriert) und einige Abstände werden verkleinert
                // ... z.B. für Formular in Drawern, mobile Ansicht etc.
                compact={false}
                // an das Formular können weitere Styles übergeben werden
                style={{ margin: "0 0 20px" }}
                // benötigt für den submit-button, der sich außerhalb der Komponente befindet
                // siehe useImperativeHandle in DynamicForm.js
                ref={ref}
                // die eigentlichen Daten
                values={formData}
                // die Formular-Definition
                formDefinition={jsonForm}
                mandantGroup={rawData.mandantGroup}
                gesellschaft={rawData.gesellschaft}
                assets ={rawData.analyseAssets}
                // Was soll beim Absenden geschehen?
                // erwartet wird ein Promise, der mit dem kompletten (evtl. modifizierten Datensatz) resolvet
                onSubmit={handleSubmit}
                tarifTypeIdFromCardState={card}
                productId={rawData.productId}
                params={params}
              />
              {ref.isDirty}
              
            </div>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      )}
      <Button
                variant={"outlined"}
                color={"primary"}
                endIcon={<Save />}
                disabled={isBusy}
                onClick={handleSave}
              >
                Angaben speichern
              </Button>
    </div>
  );
}
export default App;