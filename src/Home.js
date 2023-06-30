import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className="home">
    
     <img className="home_image" 
  src ="https://techplugged.com/wp-content/uploads/2021/12/prime-video.jpg"
    alt="it's_ok" />
     
     
     <div className="home_row">
      <Product 
        id='12321'
        title="Midnight Blue City Compact Fleet Messenger Bag"
        price={12.78}
        rating={3}
        image="https://images.dailyobjects.com/marche/product-images/undefined/undefined-images/Midnight-Blue-City-Compact-Messenger-Bag.png?tr=cm-pad_resize,v-2,w-768,h-632,dpr-1"
        />
         <Product 
        id='29358'
        title="Amazon Echo Dot (3rd Gen) - New and Improved Smart Speaker with Alexa, Black"
        price={67.99}
        rating={4}
        image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"
        />
        </div>
         <div className="home_row">
         <Product 
        id='67323'
        title="boAt Wave Neo with 1.69 inch , 2.5D Curved Display & Multiple Sports Modes Smartwatch  (Black Strap, Free Size)"
        price={45.59}
        rating={5}
        image="https://rukminim1.flixcart.com/image/416/416/l3ahpjk0/smartwatch/m/k/a/-original-imagegyhhxaszhn9.jpeg?q=70"
        />
        <Product 
        id='34521'
        title="Emerald Floral Rush Sari & Blouse Piece"
        price={80}
        rating={4}
        image="https://cdn.pixabay.com/photo/2014/06/02/14/28/woman-360377_640.jpg"
        />
        <Product 
        id='98765'
        title="AMAZO Men's Running Shoes Blue / 7 / Mesh"
        price={25}
        rating={3}
        image="https://freepngimg.com/thumb/categories/627.png"
        />
        </div>
        <div className="home_row">
        <Product 
        id='12326'
        title="Samsung G5 68.58cm (27 Inches) WQHD QLED Gaming Monitor (AMD FreeSync Premium, HDMI, 144Hz, LC27G55TQWWXXL, Black)"
        price={120}
        rating={5}
        image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631782320/Croma%20Assets/Computers%20Peripherals/Monitor/Images/242197_yv0wvu.png/mxw_2048,f_auto"
        />
       


     </div>
      </div>
  
    
  );
}

export default Home;