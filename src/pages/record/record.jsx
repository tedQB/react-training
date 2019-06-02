import React, { Component } from 'react';
import { is, fromJS } from 'immutable';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import PublicHeader from '@/components/header/header';
import RecordList from './components/recordList';

import './record.less';

class Record extends Component{ 
    state = { 
        flagBarPos:'17%',
    }

    setFlagBarPos =type=>{ 
        let flagBarPos;
        switch (type) {
            case 'passed':
                flagBarPos = '17%';
                break;
            case 'audited':
                flagBarPos = '50%';
                break;
            case 'failed':
                flagBarPos = '83%';
                break;
            default:
                flagBarPos='17%';
        }
        this.setState({flagBarPos})
    }

    componentWillReceiveProps(nextProps){ 

        let currentType = this.props.location.pathname.split('/')[2];
        let type = nextProps.location.pathname.split('/')[2];
        if(currentType!==type){ 
            this.setFlagBarPos(type);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    componentWillMount(){ 
        let type = this.props.location.pathname.split('/')[2];
        this.setFlagBarPos(type);
    }
    componentDidUpdate() {
        console.log('matchpath', this.props)
    }
    render(){ 
        return (
            <main className='main-con-top'>
                <PublicHeader title='记录' />
                <section className='record-nav-con'>
                <nav className='record-nav'>
                    <NavLink to={`${this.props.match.path}/passed`} className='nav-link'>已通过</NavLink>
                    <NavLink to={`${this.props.match.path}/audited`} className='nav-link'>待审核</NavLink>
                    <NavLink to={`${this.props.match.path}/failed`} className='nav-link'>未通过</NavLink>
                </nav>
                <i className='nav-flag-bar' style={{left:this.state.flagBarPos}}></i>
                </section>
                <Switch>
                    <Route path={`${this.props.match.path}/:type`} component={RecordList} />
                    <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={RecordList} />
                </Switch>
            </main>
        )
    }
}
export default Record