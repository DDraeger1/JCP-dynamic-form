import { Controller, useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { forwardRef, useCallback, useImperativeHandle, useContext, useEffect,useState } from "react";
import { Edit } from "@material-ui/icons";
import BezugHinzufuegen from "./BezugHinzufuegen";
import EntferneBezug from "./EntferneBezug";
import { Context } from "../context/Context";
import FunctionMapper from "./FunctionMapper";


function DynamicForm(
  { values, formDefinition, onSubmit, style, disabled, compact = false, mandantGroup,gesellschaft },
  ref
) {
  let inputIndex = 0;
  const [submissionObject, setSubmissionObject ] =useState()
  const { versicherungsnehmerValue, setVersicherungsnehmerValue,setAnzahlVp,    einkommenGehaltBezuege,
    setEinkommenGehaltBezuege } =
    useContext(Context);
/*
  setEinkommenGehaltBezuege(
    {
      brutto:{
        :values.,
        :values.fahrtkosten,
        :values.feiertagszuschlag,
        :values.nachtzuschlag,
        :values.dienstwagen,
        :values.,
        :values.jobRad,
        vwlAG:values.vwlAG,
        :values.sachbezug,
        :values.,
        :values.sonstigesBrutto
      },
      netto:{
        sonstigerSachbezug:values.sonstigerSachbezug,
        abzuegeVwlGesamt:values.abzuegeVwlGesamt,
        sonstigerAbzug:values.sonstigerAbzug
      },
      sonderzahlung:{
      bonus:values.bonus,
      urlaubsgeld:values.urlaubsgeld,
      weihnachtsgeld:values.weihnachtsgeld,
      gewinnbeteiligung:values.gewinnbeteiligung,
      sonstiges:values.sonstigesSonderzahlung,
    }
    }
  )
  console.log(einkommenGehaltBezuege)
   */
  // Definition rekursiv nach Werten absuchen (für 1-dimensionales defaultValues-Objekt)
  const reduceDefinitionValues = (acc = {}, { items, name }) => {
    if (items) return { ...acc, ...items.reduce(reduceDefinitionValues, {}) };
    if (values && values[name]) return { ...acc, [name]: values[name] };
    return acc;
  };
  const defaultValues = formDefinition.reduce(reduceDefinitionValues, {});

  const { control, handleSubmit, watch, formState, reset } = useForm({
    defaultValues,
    mode: "onBlur",
  });

  // Definition rekursiv nach conditions absuchen und entsprechende Watchers einrichten
  const reduceDefinitionWatchers = useCallback(
    (acc = {}, { items, condition }) => {
      let returnVal;
      returnVal = items
        ? { ...acc, ...items.reduce(reduceDefinitionWatchers, {}) }
        : { ...acc };

      if (condition) returnVal[condition] = watch(condition);
      return returnVal;
    },
    [watch]
  );

  const fieldsToWatch = formDefinition.reduce(reduceDefinitionWatchers, []);

  const createFormItemFromDefinitionItem = (item, index) => {
    const {
      section,
      card = false,
      name,
      rows,
      description,
      items = [],
      options = [],
      type,
      label,
      condition,
      unit,
      editWarning,
      infoText,
      tarifType,
      versicherungsnehmerBeide,
      anzahlVp,
      suiteValue,
      rules: { required = false, pattern = "" } = {},
    } = item;
    const itemDisabled = disabled || item.disabled || !!editWarning;
    const props = compact
      ? { ...item.props, xs: 12, sm: 12, md: 12, xl: 12 }
      : item.props;

    if (!values) return null;

    if (condition) {
      // todo: mehr möglichkeiten mit den conditions (aktuell nur boolean)
      if (!fieldsToWatch[condition]) return null;
    }

    if (!name) {
      const cardContent = (
        <>
          {(section || description) && (
            <div style={{ marginBottom: "15px" }}>
              {section && (
                <Typography variant={"h6"} component={"h3"}>
                  {section}
                </Typography>
              )}
              {description && (
                <Typography color={"textSecondary"}>{description}</Typography>
              )}
            </div>
          )}

          <Grid container spacing={compact ? 1 : 2}>
            {(items || []).map(createFormItemFromDefinitionItem)}
          </Grid>
        </>
      );

      return (
        <Grid item xs={12} {...props} key={"k-" + index}>
          {card ? (
            <Card style={{ height: "100%" }} variant={"outlined"}>
              <CardContent>{cardContent}</CardContent>
            </Card>
          ) : (
            cardContent
          )}
        </Grid>
      );
    }

    inputIndex++;
    const focussed = inputIndex === 1;

    return (
      <Grid
        item
        xs={12}
        {...props}
        key={"k-" + index}
        style={{ marginBottom: "6px" }}
      >
        <Controller
          name={name}
          control={control}
          defaultValue={values[name]}
          rules={{
            required,
            pattern: pattern ? new RegExp(pattern) : null,
          }}
          render={({
            field: { onChange, value = "", ref },
            fieldState: { error },
          }) => {
            let helperText;
            if (error) {
              if (!error.message) {
                if (error.type === "required")
                  helperText = "Dieses Feld ist ein Pflichtfeld.";
              } else helperText = error.message;
            } else helperText = description || "";

            function getItemInput() {
              switch (type) {
                case "costumFunction":
                  return(
<FormControl fullWidth size={"small"}>
  <FunctionMapper
  functionName={name}
  variableName={label}
  />
</FormControl>
                  )
                  case "gesellschaft":
                    return(
<FormControl fullWidth size={"small"}>
<InputLabel>Gesellschaft</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        error={!!helperText}
                      >
                        <MenuItem key="o" value={""}>
                         
                        </MenuItem>
                        {gesellschaft.data.map((gesellschaft, index) => (
<MenuItem key={"o-" + index} value={gesellschaft.name}>
                            {gesellschaft.name}
                          </MenuItem>

                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>)}
</FormControl>)
                case "select":
                  return (
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >

                        <MenuItem key="o" value={""}>
                          {" "}
                        </MenuItem>
                        {options.map((option, index) => (
                          anzahlVp === "true"? 
<MenuItem onClick={() =>setAnzahlVp(option.value)} key={"o-" + index} value={option.value}>
                            {option.label}
                          </MenuItem>
                          :
                          <MenuItem key={"o-" + index} value={option.value}>
                            {option.label}
                          </MenuItem>
                      

                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                  );
                  case "personArray":
                    return(
                      <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >
                        <MenuItem key="o" value={""}>
                          {" "}
                        </MenuItem>
                        {options.map((option, index) => (
                          <MenuItem key={"o-" + index} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                    )
                case "selectMandant":
                  return (
                    <div>
                    <FormControl fullWidth size={"small"}>
                      <InputLabel>{label}</InputLabel>
                      <Select
                        autoFocus={focussed}
                        inputRef={ref}
                        value={versicherungsnehmerValue.index}
                        onChange={onChange}
                        label={label}
                        error={!!helperText}
                        disabled={itemDisabled}
                      >
                        {mandantGroup.map((mandantGroup, index) => (
                          <MenuItem onClick={()=>{setVersicherungsnehmerValue({index:index,tarifTypeId:tarifType})}} key={"o-" + index} value={index}>
                            {mandantGroup.mandant.vorname + " " + mandantGroup.mandant.nachname}
                          </MenuItem>
                        ))}
                      {versicherungsnehmerBeide === "true" ? 
                      <MenuItem onClick={()=>{setVersicherungsnehmerValue({index:false,tarifTypeId:tarifType})}} key={"o-versicherungsNehmerBeide"} value={false}>Beide</MenuItem>
                    : null}
                      </Select>
                      {helperText && (
                        <Typography color={"error"} variant={"caption"}>
                          {helperText}
                        </Typography>
                      )}
                    </FormControl>
                    </div>
                  );
                  case "selectVersichert":
                    return (
                      <div>
                      <FormControl fullWidth size={"small"}>
                        <InputLabel>{label}</InputLabel>
                        <Select
                          autoFocus={focussed}
                          inputRef={ref}
                          value={value}
                          onChange={onChange}
                          label={label}
                          error={!!helperText}
                          disabled={itemDisabled}
                        >
                          {mandantGroup.map((mandantGroup, index) => (
                            <MenuItem key={"o-" + index} value={mandantGroup.mandantId}>
                              {mandantGroup.mandant.vorname + " " + mandantGroup.mandant.nachname}
                            </MenuItem>
                          ))}
                        <MenuItem key={"o-sonstige"} value={"sonstige"}>Sonstige</MenuItem>

                        </Select>
                        {helperText && (
                          <Typography color={"error"} variant={"caption"}>
                            {helperText}
                          </Typography>
                        )}
                      </FormControl>
                      </div>
                    );
                case "checkbox":
                  return (
                    <>
                      <FormControlLabel
                        control={
                          <Switch
                            color={"primary"}
                            checked={value}
                            name={name}
                            onChange={onChange}
                            inputRef={ref}
                            disabled={itemDisabled}
                          />
                        }
                        style={{ margin: "-4px -4px 0" }}
                        label={
                          <Typography
                            style={{
                              color: itemDisabled ? "#bbb" : "#444",
                              fontSize: "0.9rem",
                            }}
                          >
                            {label}
                          </Typography>
                        }
                      />
                      {helperText && <Typography>{helperText}</Typography>}
                    </>
                  );

                case "number":
                  return (
                    <TextField
                      autoFocus={focussed}
                      inputRef={ref}
                      label={label}
                      name={name}
                      value={parseFloat(value) || ""}
                      onChange={(e) => {
                        // todo: react-number-format o.ä. einsetzen?
                        let floatValue = parseFloat(e.target.value);
                        if (isNaN(floatValue)) floatValue = 0;
                        onChange(floatValue);
                      }}
                      disabled={itemDisabled}
                      type={"number"}
                      error={!!error}
                      helperText={helperText}
                      fullWidth
                      size={"small"}
                      InputProps={{
                        endAdornment: unit && (
                          <InputAdornment position={"end"}>
                            {unit}
                          </InputAdornment>
                        ),
                      }}
                      {...props}
                    />
                  );

                case "date":
                  return (
                    <KeyboardDatePicker
                      disabled={itemDisabled}
                      autoFocus={focussed}
                      inputRef={ref}
                      disableToolbar
                      format="dd.MM.yyyy"
                      fullWidth
                      size={"small"}
                      label={label}
                      KeyboardButtonProps={{
                        "aria-label": "Datum wählen",
                      }}

                      invalidDateMessage={"Ungültiges Datum invalid"}
                      maxDateMessage={"Ungültiges Datum"}
                      minDateMessage={"Ungültiges Datum mindate"}
                      onChange={onChange}
                      {...props}
                      value={value}
                    />
                  );
                case "paragraph":
                  return (
                    <p style={{ fontSize: "13px" }} {...props}>
                      {label}
                    </p>
                  );
case "paragraphValue":
  return(
    <p  style={{ fontSize: "13px" }} {...props}>{value}</p>
  )
                case "bruttoButton":
                  return (
                    <BezugHinzufuegen {...props}
                    />
                  );
                  case "entferneBezug":
                    return(
                      <EntferneBezug label={label}/>
                    );

                    case "":
                case "text":
                case "textarea":
                  return (
                    <TextField
                      autoFocus={focussed}
                      inputRef={ref}
                      label={label}
                      multiline={type === "textarea"}
                      rows={rows}
                      rowsMax={rows}
                      name={name}
                      value={value}
                      onChange={onChange}
                      disabled={itemDisabled}
                      type={"text"}
                      error={!!error}
                      helperText={helperText}
                      fullWidth
                      size={"small"}
                      InputProps={{
                        endAdornment: unit && (
                          <InputAdornment position={"end"}>
                            {unit}
                          </InputAdornment>
                        ),
                      }}
                      {...props}
                    />
                  );
                case "header":
                  return (
                    <>
                      <Typography {...props}>{label}</Typography>
                    </>
                  );
                case "slider":
                  return (
                    <>
                      <Typography>{label}</Typography>
                      <Slider
                        valueLabelDisplay={"auto"}
                        value={value}
                        marks={true}
                        onChange={(event, newValue) => {
                          onChange(newValue);
                        }}
                        disabled={itemDisabled}
                        title={"Bla"}
                        {...props}
                      />
                    </>
                  );

                default:
                  return <b>Unbekannter Feldtyp '{type}'.</b>;
              }
            }

            return (
              <Grid container>
                <Grid item xs={editWarning ? 11 : 12}>
                  {getItemInput()}
                  {infoText && <FormHelperText>{infoText}</FormHelperText>}
                </Grid>
                {editWarning && (
                  <Grid item xs={1} style={{ padding: 4 }}>
                    <IconButton
                      color={"primary"}
                      size={"small"}
                      onClick={() => {
                        const result = window.prompt(
                          editWarning + "\n\nGeben Sie einen neuen Wert an:",
                          value
                        );
                        if (result !== null) onChange(result);
                      }}
                    >
                      <Edit />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            );
          }}
        />
      </Grid>
    );
  };
 function mapSuiteValues(){
   let output ={}
   let arrayItems=[]
   formDefinition.map((form)=>{
arrayItems =[...arrayItems, ...form.items]
   })   

   arrayItems.forEach(item => {
    Object.entries(values).forEach(([key, value]) =>{
      if(item.name === key ){
        output ={...output, [item.suiteValue]:value}
       // setSubmissionObject({...submissionObject, [item.suiteValue]:it})
      }
    })
   })
   return output
 }
 function addDirtyEntries ( dirtyValues){
  let output ={}
  let arrayItems=[]

  formDefinition.map((form)=>{
    arrayItems =[...arrayItems, ...form.items]
       })   
       
       arrayItems.forEach(item => {
        Object.entries(dirtyValues).forEach(([key, value]) =>{
          if(item.name === key ){
            output ={...output, [item.suiteValue]:value}
           // setSubmissionObject({...submissionObject, [item.suiteValue]:it})
          }
        })
       })
       console.log(output)
       return(output)
 }
  const submitDirtyFields = async (values) => {
    if (Object.keys(formState.dirtyFields).length === 0) return false;

    let valuesToSubmit = mapSuiteValues()

let dirtyValues = {...addDirtyEntries(Object.entries(formState.dirtyFields).reduce(
      (acc, [key, isDirty]) => {
        if (isDirty) return { ...acc, [key]: values[key] };
        return acc;
      },
      {}
    ))}
valuesToSubmit={...valuesToSubmit, ...dirtyValues}
console.log(valuesToSubmit)

    try {
      if (valuesToSubmit && Object.keys(valuesToSubmit).length > 0) {
        let vals = await onSubmit(valuesToSubmit);
        reset(vals, { keepDirty: false });
      }
      return true;
    } catch (e) {
      console.warn(e);
      return false;
    }
  };
 

  useImperativeHandle(
    ref,
    () => {
      const queryUnload = () => {
        return new Promise((resolve, reject) => {
          if (formState.isDirty) {
            if (
              window.confirm(
                "Ihre Änderungen wurden nicht gespeichert. Sollen die Änderungen gespeichert werden, bevor Sie zur gewünschten Seite navigieren?"
              )
            ) {
              handleSubmit(async (object) => {
                try {
                  resolve(submitDirtyFields(values));
                } catch (error) {
                  reject(error);
                }
              }, reject /*validation errors?*/)();
            } else {
              resolve(true);
            }
          } else {
            resolve(true);
          }
        });
      };

      return {
        submit: handleSubmit(submitDirtyFields, (validationErrors) => {
          console.log(validationErrors);
          alert(
            "Fehlerhafte Daten. Bitte überprüfen Sie die markierten Eingabefelder."
          );
          throw validationErrors;
        }),
        queryUnload,
        isDirty: formState.isDirty,
      };
    },
    [formState.isDirty]
  );

  return (
    <form onSubmit={handleSubmit(submitDirtyFields)} style={style}>
      <Grid container spacing={compact ? 1 : 2}>
        {formDefinition.map(createFormItemFromDefinitionItem)}
      </Grid>
    </form>
  );
}

export default forwardRef(DynamicForm);
