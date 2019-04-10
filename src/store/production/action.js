import * as pro from './action-type';

import API from '@/api/api';

//初始化获取商品数据，保存至redux
export const getProData = ()=>{ 

    return async dispatch =>{ 
        try{ 
            let result = await API.getProduction();
            result.map(item=>{ 
               item.selectStatus = true;
               item.selectNum =0;
               return item;
            })
            dispatch({ 
                type:pro.CLEARSELECTED,
                dataList: result,
            })
        } catch (err) {
            console.error(err);
        }
    }
}

export const toSelectPro = index =>{ 
    return {
        type: pro.TOGGLESELECT,
        index,
    }
}

export const editPro = (index, selectNum) => {
    return {
        type: pro.EDITPRODUCTION,
        index,
        selectNum,
    }
}

export const clearSelected = () => {
    return {
        type: pro.CLEARSELECTED,
    }
}