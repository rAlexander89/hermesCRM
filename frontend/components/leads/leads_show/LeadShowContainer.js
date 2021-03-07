import { connect } from 'react-redux'
import LeadShow from './LeadShow'
import { fetchProperty } from '../../../actions/property_actions'


const mSTP = ({entities: {properties}}, ownProps) => {

    return{
    }

}

const mDTP = dispatch => {
    return{
        fetchProperty: propertyId => dispatch(fetchProperty(propertyId))
    }
}

export default connect(mSTP, mDTP)(LeadShow)