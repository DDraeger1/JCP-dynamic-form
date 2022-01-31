export function mapAssets(assets){
let ids =[]
let nonVersicherungsnehmerIdIndex=[]
let nonVersichertePersonIdIndex=[]
assets.forEach((asset,index) =>{
if(asset.versicherungsnehmerId !== undefined){
    ids.push({id:asset.versicherungsnehmerId,tarifTypeId:asset.tarifTypeId,vertragId:asset.id})
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
    })
    
//ids.indexOf(asset.analyseId) === -1 ? ids.push(asset.analyseId) : console.log("This item already exists");
return(ids)
}

export function redefineCard(ids, mandantIndex,tarifTypeId,mandantGroup){
console.log(mandantIndex)

    let entryFound =false
    let vertragId= "none"
vertragId= "none"
if(mandantIndex || mandantIndex===0){
ids.forEach((mandantEntry, index)=>{
if(mandantGroup[mandantIndex].mandant.id === mandantEntry.id && tarifTypeId === mandantEntry.tarifTypeId){
    entryFound =true
    vertragId =mandantEntry.vertragId


}


})

if(!entryFound){
    vertragId="newVertrag"
}}else{
    ids.forEach((vertrag, index)=>{
        if(tarifTypeId === vertrag.tarifTypeId && vertrag.versicherungsnehmerBeide){
    entryFound =true
    vertragId =vertrag.vertragId
    console.log(vertrag)
}else{
    vertragId="newVertrag"

}


    })
}

console.log(tarifTypeId)
console.log(vertragId)
return vertragId
}
