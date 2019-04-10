import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { is, fromJS } from 'immutable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './alert.less'

export default class Alert extends Component{ 
    static propTypes = { 
        closeAlert:PropTypes.func.isRequired,
    }
}