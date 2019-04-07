import React, { Component } from 'react';
import { connect } from 'net';
import PublicHeader from '@/components/header/header';

class Home extends Component { 

    render(){ 
        return (
            <main className='home-container'>
                <PublicHeader title='首页' record />
            </main>
        )
    }

}

export default connect(state=>({
    formData:state.formData,
    proData: state.proData,
}),{ 

})(Home)