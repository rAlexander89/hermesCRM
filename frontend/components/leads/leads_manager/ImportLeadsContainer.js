import { connect } from 'react-redux'
import ImportLeads from './ImportLeads'
import {importProperties} from '../../../actions/property_actions'

const mSTP = state => {
    return{
    }

}

const mDTP = dispatch => {
    return{
        importProperties: csv => dispatch(importProperties(csv))
    }
}

export default connect(mSTP, mDTP)(ImportLeads)