import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {updateCollections} from '../../redux/shop/shop.action';
import { firestore , convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
state = {
  loading:true
}
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
    const collectionMap = await convertCollectionsSnapshotToMap(snapShot);
    updateCollections(collectionMap);
    this.setState({loading:false})
    })
  }

 render() {
   const {match} = this.props;
   const {loading} = this.state;
   return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
      </div>
   )
 }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections:collectionMap => dispatch(updateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);