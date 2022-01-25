import Button from "@material-ui/core/Button";
import { useContext, useState } from "react";
import { Context } from "../context/Context";

function EntferneBezug ({label}){
    const {einkommenGehaltContext, setEinkommenGehaltContext,forceUpdate}=useContext(Context)

    function removeHandler(){
        let newEinkommenGehalt=einkommenGehaltContext
        for (let i = 0; newEinkommenGehalt.items.length > i; i++) {
            if (newEinkommenGehalt.items[i].label === label) {
            console.log(newEinkommenGehalt.items[i].label);

                newEinkommenGehalt.items.splice(i-5, 6);
                setEinkommenGehaltContext(newEinkommenGehalt)
                setTimeout(() => {
                    forceUpdate(1);
                  }, 500);
            }

    }

      }
    return (<Button onClick={()=>removeHandler()}>Entfernen</Button>)
}
export default EntferneBezug