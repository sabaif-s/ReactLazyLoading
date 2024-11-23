import React from 'react';
import imageOne from './images/13514304_SL.111019.24830.39.jpg';
import imageTwo from './images/170670446_10252808.png';
import imageThree from './images/360524525_11429953.png';
import imageFour from './images/shakeBulbBack.jpg';
import imageFive from './images/backDeskImage.jpg';
const  ImageAsset = () => {
    const images=[imageOne,imageThree,imageTwo,imageFive,imageFour];
    return (
       <>
       {
        images.map((source,index)=>{
            return (
                <img src={source} key={index} style={{width:"300px",height:"400px"}} alt="images" />
            )
         
        })
       }
       </>
    );
};

export default  ImageAsset;