import { addComma } from "../formatting/formatting"


// finds the potential maximum offer required to keep a deal vaible
export function potentialMaxOffer(arv){
    let arv_int = parseInt(arv.replaceAll(',',''))
    return addComma(Math.floor(arv_int * 0.73))
}