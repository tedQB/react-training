import React,{ Component } from 'react';
import {is,fromJS} from 'immutable';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './header.less';


export default class PublicHeader extends Component{ 
    static PropTypes={ 
        record:PropTypes.any,
        title:PropTypes.string.isRequired,
        confirm:PropTypes.any
    }

    state={ 
        navState:false
    }

    shouldComponentUpdate(nextProps,nextState){ 

    }

    render(){ 
        return (
            <header className='header-container'>
                <span className='header-slide-icon icon-catalog' onClick={this.toggleNave}></span>
                <span className='header-title'>{this.props.title}</span>
                { 
                    this.props.record&&
                    <NavLink to='/record' exact className='header-link icon-jilu'></NavLink>
                }
                { 
                    this.props.confirm&&
                    <NavLink to='/' exact className='header-link header-link-confim'>确定</NavLink>
                }
                <ReactCSSTransitionGroup
                    component={this.FirstChild}
                    transitionName='nav'
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >   
                {
                this.state.navState && <aside key='nav-slide' className="nav-slide-list" onClick={this.toggleNav}>
                    <NavLink to='/' exact className='nav-link icon-jiantou-copy-copy'>首页</NavLink>
                    <NavLink to='/balance' exact className='nav-link icon-jiantou-copy-copy'>提现</NavLink>
                    <NavLink to='/helpcenter' exact className='nav-link icon-jiantou-copy-copy'>帮助中心</NavLink>
                </aside>
                }
                </ReactCSSTransitionGroup>
            </header>
        )
    }
}