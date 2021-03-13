import { updateProperty } from "../../api/property_api_util"



// updates the listing status ex: active, under contract, pending, closed, etc
export function changeStatus(e, selectedLead){
    e.preventDefault()
    selectedLead.status = e.target.value
    updateProperty(selectedLead)
}