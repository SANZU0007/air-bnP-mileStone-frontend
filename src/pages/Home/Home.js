import React from "react";
import "./home.css";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/cart/card";

const Home = () => {
  return (
    <div className="Homeclass">
      <Banner />
      <div className="home__section">
        <Card
          className="carts"
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
          description="Unique activities to do from home with Broadway casts and crews."
         
        />
       
        <Card
          className="carts"
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          className="carts"
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section1">
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-876636492232656540/original/e0b811e4-92fc-40b2-8686-cbdf0c264c44.jpeg?im_w=1200"
          title="Gashes Fluss Haus"
          description="Walk back past tall trees, over a small wooden bridge with built-in love seats. Massage tired feet on a polished river-rock shower floor. This rustic 2-story cottage, has whitewashed stone walls and a wood-burning stove."
          price="₹5,563/ night"
        />
        
        <Card
          src="https://a0.muscache.com/im/pictures/fa91c6d9-c37e-4bb3-bdc1-0edb3044adb4.jpg"
          title="Underground Home with a View"
          description="Unique modern tiny 'hobbit house' located on bucolic 9 acre farm in the mountains of Western North Carolina."
          price="₹6,463/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-876636492232656540/original/6524dec4-1be5-47c2-a149-e8b95bce8803.jpeg?im_w=320"
          title="Airstream On The River"
          description="Located within walking distance to Carrier Park, Asheville food park, and the climbing gym. You will be in the middle of it all! West Asheville, the River Arts District, and less than 5 miles from downtown."
          price="₹15,264/ night"
        />
        <Card
          className="carts"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-876636492232656540/original/0be467f7-7b75-4370-9da9-c7b92fd70a77.jpeg?im_w=1200"
          description="Unique activities to do from home with Broadway casts and crews."
         
          price="₹5,563/ night"
        />
        <Card
          className="carts"
          src="https://a0.muscache.com/im/pictures/ec7a55ab-31d6-483b-9386-ad6a213d94db.jpg?im_w=960"
         
          description="Walk back past tall trees, over a small wooden bridge with built-in love seats. Massage tired feet on a polished river-rock shower floor. This rustic 2-story cottage, has whitewashed stone walls and a wood-burning stove."
          price="₹5,563/ night"
        />
      </div>
    </div>
  );
};

export default Home;
