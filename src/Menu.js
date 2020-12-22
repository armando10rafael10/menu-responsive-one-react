import React,{Component} from "react";
import './Menu.css';
import Imglist from './Imglist';
import img1 from './img/arise.jpg';import img2 from './img/awake.jpg';import img3 from './img/bear.jpg';import img4 from './img/beat.jpg';import img5 from './img/become.jpg';import img6 from './img/begin.jpg';import img7 from './img/bend.jpg';import img8 from './img/bet.jpg';import img9 from './img/bid.jpg';import img10 from './img/bind.jpg';import img11 from './img/bite.jpg';import img12 from './img/bleed.jpg';import img13 from './img/blow.jpg';import img14 from './img/break.jpg';import img15 from './img/breed.jpg';import img16 from './img/bring.jpg';
import img17 from './img/build.jpg';import img18 from './img/burn.jpg';import img19 from './img/cast.jpg';import img20 from './img/catch.jpg';import img21 from './img/choose.jpg';import img22 from './img/cling.jpg';import img23 from './img/come.jpg';
import img24 from './img/cost.jpg';import img25 from './img/creep.jpg';import img26 from './img/cut.jpg';import img27 from './img/deal.jpg';import img28 from './img/do.jpg';import img29 from './img/draw.jpg';import img30 from './img/dream.jpg';
import img31 from './img/drink.jpg';import img32 from './img/drive.jpg';import img33 from './img/eat.jpg';import img34 from './img/fall.jpg';import img35 from './img/feed.jpg';import img36 from './img/feel.jpg';import img37 from './img/fight.jpg';import img38 from './img/find.jpg';import img39 from './img/flee.jpg';import img40 from './img/fly.jpg';
import img41 from './img/forbid.jpg';import img42 from './img/forget.jpg';import img43 from './img/forgive.jpg';import img44 from './img/freeze.jpg';
import Imglist_reverse from "./Imglist_reverse";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            titulo : 'home',
            Imagen : 'pinguino.svg',
            lista : [
                        img1,img2,img3,img4,img5,img6,
                        img7,img8,img9,img10,img11,img12,
                        img13,img14,img15,img16,img17,
                        img18,img19,img20,img21,img22,
                        img23,img24,img25,img26,img27,
                        img28,img29,img30,img31,img32,
                        img33,,img34,img35,img36,img37,
                        img38,img39,img40,img41,img42,
                        img43,img44
            ],
            listaDoce : [
                        img1,img2,img3,img4,img5,img6,
                        img7,img8,img9,img10,img11,img12,
                        img13,img14,img15,img16
            ],
            checked: true
        };
        this.handleImg = this.handleImg.bind(this);
        this.ChangeRandom = this.ChangeRandom.bind(this);
    }

    handleImg(event) {
        this.setState({ 
            checked : !this.state.checked
        });
    }

    ChangeRandom(){
        var a = Math.floor(Math.random() * 6);
        return a;
    }

    render(){
        const lista = this.state.lista;
        const listaTwo = this.state.listaDoce;

        const cardsImg = lista.map( (x)=>{
            return(
                <button class="tarjeta"> 
                    <img src={x} width={'60px'}></img>
                </button>
            )
        });

        const cardsImgTwo = listaTwo.map( (x)=>{
            return(
                <button className="tarjeta"> 
                    <img src={x} width={'60px'}></img>
                </button>
            )
        });

        const card = <button className="tarjeta" onClick={this.handleImg}>  
          <img src={`${process.env.PUBLIC_URL}/assets/images/1.png`} />
        </button>;

        return(
            <div>
                <div className="contenedor" id="lista">
                    <div className="contenedor-tarjeta">   
 

                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()} /> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()} /> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        {
                             this.state.checked ?  <Imglist ch={this.state.checked} ale={this.ChangeRandom()}/> :  <Imglist_reverse ch={this.state.checked}/>
                        }
                        

                        {/* {cardsImgTwo} */}
                    </div>
                </div>

                <br/><hr/><br/>
                
                <div>{this.state.titulo}</div>
            </div>
        );
    }
}

export default Menu; 
