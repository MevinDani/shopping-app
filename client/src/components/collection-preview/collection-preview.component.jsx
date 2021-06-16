import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

const CollectionPreview = ({items,title,history, match, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
        <div className='collection-pre-btn'>
        <CustomButton onClick={() => history.push(`${match.path}/${routeName}`)}>SHOW MORE</CustomButton>
        </div>
    </div>
)

export default withRouter(CollectionPreview);