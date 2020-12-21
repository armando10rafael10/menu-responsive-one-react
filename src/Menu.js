import React,{Component} from "react";
import './Menu.css';
import img1 from './img/arise.jpg';import img2 from './img/awake.jpg';import img3 from './img/bear.jpg';import img4 from './img/beat.jpg';import img5 from './img/become.jpg';import img6 from './img/begin.jpg';import img7 from './img/bend.jpg';import img8 from './img/bet.jpg';import img9 from './img/bid.jpg';import img10 from './img/bind.jpg';import img11 from './img/bite.jpg';import img12 from './img/bleed.jpg';import img13 from './img/blow.jpg';import img14 from './img/break.jpg';import img15 from './img/breed.jpg';import img16 from './img/bring.jpg';
import img17 from './img/build.jpg';import img18 from './img/burn.jpg';import img19 from './img/cast.jpg';import img20 from './img/catch.jpg';import img21 from './img/choose.jpg';
import img22 from './img/cling.jpg';



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
                    img18,img19,img20,img21,img22
           ]
      }
    }
    render(){
        const lista = this.state.lista;
        console.log("esta es la ",lista);
        const valoresImg = lista.map((x) =>
            <img src={x} width={'60px'}></img>
        );
        const logo = require('./favicon.ico');
        return(
            <div>
                <div>
                    {valoresImg}
                    <img src={`${process.env.PUBLIC_URL}/assets/images/arise.jpg`}  />
                </div>
                <div>{this.state.titulo}</div>
            </div>
        );
    }
}

export default Menu; 
