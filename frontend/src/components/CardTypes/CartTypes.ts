//All Cards Which are Going to be flipped
import cart1 from "../CardImages/card_1.jpg";
import cart2 from "../CardImages/card_2.jpg";
import cart3 from "../CardImages/card_3.jpg";
import cart4 from "../CardImages/card_4.jpg";
import cart5 from "../CardImages/card_5.jpg";
import cart6 from "../CardImages/card_6.jpg";
import cart7 from "../CardImages/card_7.jpg";
import cart8 from "../CardImages/card_8.jpg";
//cardack
import cardBack from "../CardImages/card_back.jpg";


//types of the cards
export type CardType ={
    id:string,
    flipped:boolean,
    backImage:string,
    frontImage:string,
    clickable:boolean,
    matchingCardId:string
}

const cards:string[]=[cart1,cart2,cart3,cart4,cart5,cart6,cart7,cart8];
export const CreateBoard=():CardType[]=>[...cards,...cards].map((singlecard,i)=>({
id:`card${i}`,
flipped:false,
backImage:cardBack,
frontImage:singlecard,
clickable:true,
matchingCardId:i<singlecard.length?`card${i+cards.length}` : `card${i-cards.length}`
}))