import * as pro from './action-type'
import Immutable from 'immutable'

let defaultState = { 
    dataList:[]
}

export const proData =(state = defaultState, action)=>{ 
    let imuDataList;
    let imuItem;
    switch (action.type) {
        case pro.GETPRODUCTION:
            return {...state,...action}
        case pro.TOGGLESELECT:
            imuDataList = Immutable.List(state.dataList);
            imuItem = Immutable.Map(state.dataList[action.index]);
            imuItem = imuItem.set('selectStatus', !imuItem.get('selectStatus'));
            imuDataList = imuDataList.set(action.index, imuItem);
            //redux必须返回一个新的state
            return {...state,...{dataList:imuDataList.toJS()}}
        case pro.EDITPRODUCTION:
            imuDataList = Immutable.List(state.dataList);
            imuItem = Immutable.Map(state.dataList[action.index]);
            imuItem = imuItem.set('selectNum', action.selectNum);
            imuDataList = imuDataList.set(action.index, imuItem);
            //redux必须返回一个新的state
            return { ...state, ...{ dataList: imuDataList.toJS() } }
        case pro.CLEARSELECTED:
            imuDataList = Immutable.fromJS(state.dataList);
            for(let i=0;i<state.dataList.length;i++){ 
                imuDataList = imuDataList.update(i,item=>{ 
                    item=item.set('selectStatus',false);
                    item = item.set('selectNum',0);
                    return item
                })
            }
            return {...state,...{dataList:imuDataList.toJS()}}
        default:
            return state;
    }
}