import React,{Component} from "react";
import img1 from './img/arise.jpg';import img2 from './img/awake.jpg';import img3 from './img/bear.jpg';import img4 from './img/beat.jpg';import img5 from './img/become.jpg';import img6 from './img/begin.jpg';import img7 from './img/bend.jpg';import img8 from './img/bet.jpg';import img9 from './img/bid.jpg';import img10 from './img/bind.jpg';import img11 from './img/bite.jpg';import img12 from './img/bleed.jpg';import img13 from './img/blow.jpg';import img14 from './img/break.jpg';import img15 from './img/breed.jpg';import img16 from './img/bring.jpg';
import img17 from './img/build.jpg';import img18 from './img/burn.jpg';import img19 from './img/cast.jpg';import img20 from './img/catch.jpg';import img21 from './img/choose.jpg';import img22 from './img/cling.jpg';import img23 from './img/come.jpg';
import img24 from './img/cost.jpg';import img25 from './img/creep.jpg';import img26 from './img/cut.jpg';import img27 from './img/deal.jpg';import img28 from './img/do.jpg';import img29 from './img/draw.jpg';import img30 from './img/dream.jpg';
import img31 from './img/drink.jpg';import img32 from './img/drive.jpg';import img33 from './img/eat.jpg';import img34 from './img/fall.jpg';import img35 from './img/feed.jpg';import img36 from './img/feel.jpg';import img37 from './img/fight.jpg';import img38 from './img/find.jpg';import img39 from './img/flee.jpg';import img40 from './img/fly.jpg';
import img41 from './img/forbid.jpg';import img42 from './img/forget.jpg';import img43 from './img/forgive.jpg';import img44 from './img/freeze.jpg';
import Imglist_reverse from "./Imglist_reverse";

class Img extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaDoce : [
                img1,img2,img3,img4,img5,img6,
                img7,img8,img9,img10,img11,img12,
                img13,img14,img15,img16,img17
            ],
            checked : this.props.ch,
            aleatorio : this.props.ale
        };
        this.handleImg = this.handleImg.bind(this);
    }

    handleImg(event) {
        this.setState({ 
            checked : !this.state.checked
        });
    }

    render(){
        const valorx = <button className="tarjeta" onClick={this.handleImg}> 
                          <img src={this.state.listaDoce[this.state.aleatorio]} width={'60px'}></img>
                      </button>;
        
        console.log(" este es el check = ",this.state.checked)
        return(
            <div>
                 {
                    this.state.checked ?  <Imglist_reverse ch={this.state.checked} ale={this.state.aleatorio}/> : valorx
                 }
            </div>
        )
    }
}
export default Img;