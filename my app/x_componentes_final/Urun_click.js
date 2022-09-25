import React,{Component} from 'react'
import   UrunOzellikler from './  UrunOzellikler'
import Urunler from './Urunler'
import UrunInfo  from './UrunInfo'  


class Urun extends Component{

    
    constructor(){
        super()
        this.state = {
           UrunInfo : UrunInfo,
            UrunInfo  : [],
            counter: 0,
        }
        this.clickEvent = this.clickEvent.bind(this)
    }



    clickEvent(){
        if(this.state.counter < this.state.UrunInfo.length){
            this.state.Urun.push(this.state.UrunInfo[this.state.counter]);
            this.setState(function(prevState){
                return {counter: prevState.counter + 1}
            });
            this.newUrun = this.state.Urun.map(Urun => {
                return <  key={Urun.id} img={Urun.img} name={Urun.name}
                                    positio={Urun.stok} phone={Urun.fyat}
                                    />
            })
        }
    }




    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-primary btn-lg btn-block"
                            onClick={this.clickEvent}>click me!</button>
                </div>
                    {this.UrunInfo}
               
            </div>
        )
    }
}

export default   Urun;

