import React,{Component} from 'react'
import UrunOzellikleri from './UrunOzellikleri'
import UrunInfo from './UrunInfo'


class Urun extends Component{
    constructor(){
        super()
        this.state = {UrunInfo : UrunInfo }
    }

    clickEvent(){
        console.log( UrunInfo  [1])
    }



    mapping(x){
            const Ozellik = x.map( Ozellik =>
                <UrunOzellikler
                    key={Ozellik.id}
                    img={Urun.img}
                    name={Urun.name}
                    stok={Urun.stok}
                    fiyat={member.fiyat}
                    
					/>);
            return Ozellik
    }


    render(){
        return(
            <div className="row">
                 <button className="btn btn-primary btn-lg btn-block" onClick={this.clickEvent}>click me!</button>
                {this.mapping(this.state.UrunInfo)}
                </div>
        )
    }
}

export default Urun;


