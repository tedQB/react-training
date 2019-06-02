import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { is, fromJS } from 'immutable';
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './alert.less';

export default class Alert extends Component{ 
  static PropTypes = { 
    closeAlert:PropTypes.func.isRequired,
    alertTip:PropTypes.func.isRequired,
    alertStatus:PropTypes.bool.isRequired
  }

  confirm = ()=>{ 
    console.log('this.props', this.props);
    this.props.closeAlert();
  }

  shouldComponentUpdate(nextProps,nextState){ 
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render(){ 
    return ( 
      <ReactCSSTransitionGroup 
        component={this.FirstChild}
        transitionName = 'alert'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      > 
        { 
          this.props.alertStatus&&<div className='alert-con'>
            <div className='alert-context'>
              <div className='alert-content-detail'>{this.props.alertTip}</div>
              <TouchableOpacity className='confirm-btn' clickCallBack={this.confirm} />
            </div>
          </div>
        }
      </ReactCSSTransitionGroup>
    )
  }
}