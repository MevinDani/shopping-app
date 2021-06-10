import React from 'react';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import  CollectionPageContainer from '../../pages/collection/collection-container';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {fetchCollectionStart} from '../../redux/shop/shop.action';

class ShopPage extends React.Component {

  componentDidMount() {
    const{fetchCollectionStart} = this.props;
    fetchCollectionStart();
  }

 render() {
   const {match} = this.props;
   return(
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      </div>
   )
 }
} 


const mapDispatchToProps = dispatch => ({
  fetchCollectionStart:() => dispatch(fetchCollectionStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);