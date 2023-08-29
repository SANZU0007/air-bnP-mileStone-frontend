import React from 'react'

import SearchResult from './SearchResult'
import "./Search.css"
import {useNavigate } from 'react-router-dom'

const Search = () => {

  const navigate = useNavigate();
  const handle=()=>{
    navigate("/")
  }
  return (
    <div className='searchpage'>
       <div className="searchPage__info">
        <br></br>
        <br></br>
       
        <p>62 stays • 26 August to 30 August • 2 guest</p>
        <h1>Stays nearby</h1>
        <div className='logo'>
        <img src='https://cdn-icons-png.flaticon.com/128/3175/3175199.png' alt='no image' onClick={handle} ></img>
        <img src='https://cdn-icons-png.flaticon.com/128/2897/2897350.png' alt='no image'onClick={handle} ></img>
        <img src='https://cdn-icons-png.flaticon.com/128/1944/1944671.png'alt='no image' onClick={handle}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/3660/3660499.png' alt='no image'onClick={handle} ></img>
        <img src='https://cdn-icons-png.flaticon.com/128/6676/6676575.png'alt='no image' onClick={handle}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/3660/3660349.png'alt='no image' onClick={handle}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/7577/7577410.png' alt='no image'  onClick={handle}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/1813/1813617.png' alt='no image '  onClick={handle}></img>
        <img src='https://cdn-icons-png.flaticon.com/128/6330/6330092.png' alt='no image'  onClick={handle}></img>
        </div>
      </div>

      <SearchResult
        img="https://consumerist.com/consumermediallc.files.wordpress.com/2015/04/hotel.png%3Fw=1060"
        location="Private Rooms in Bangalore"
        title="Stay at this spacious Golorian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.73} 
        price="$20 / night"
        total="$130 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-737471759834870714/original/fa0d3d17-d1de-43a4-baa5-b3880357035a.jpeg?im_w=720"
        location="Private Rooms in Los Altos"
        title="Rent this Spacious Apartment"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={3.93}
        price="$10 / night"
        total="$110 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-727571134977149744/original/96343d7c-186d-4351-93ac-ede4b960bb6d.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-53036253/original/3480ec52-d4ff-4863-9255-003fffa437e0.jpeg?im_w=720"
        location="Rooms in Himalayas"
        title="Stay at this Mount Top Room"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.42}
        price="$30 / night"
        total="$170 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-646372962939615649/original/a3f584cb-e6ae-4d8f-be9f-5f607d307e25.jpeg?im_w=720"
        location="Private Rooms in Hyderabad"
        title="Grounded Farm house with swimming pool"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.33}
        price="$70 / night"
        total="$430 total"
      />
      
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-766198406196646410/original/9fb30c51-27fa-49dc-a75e-882c93e050ce.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-596002226580488059/original/e5d99319-f0e4-4916-9a80-e0f17f0fcfb1.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-751075208649563933/original/d1c28319-ea70-46c9-adf1-51b0b90677ce.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-701944223706240100/original/0433e511-a5f0-4809-a105-51f34b1d796e.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-746760978348525252/original/c588fdb3-1f6f-482f-baca-318053d1c0ad.jpeg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/6998eeac-ec37-4fb9-b387-b892a403d56d.jpg?im_w=720"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        total="$260 total"
      />
      <SearchResult
        img="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
        location="Private Rooms in Kolkata"
        title="Open space Medlian Roof Toof House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • Wifi • Kitchen • Free parking • Washing Machine"
        star={4.26}
        price="$40 / night"
        
        total="$260 total"
      />
      
    </div>
  )
}

export default Search
