import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
function Location() {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3lsdmlhNDEwIiwiYSI6ImNtN3ByZWVvbjByNG4yanE0bThsMWcwYzQifQ.Eyvikj4vmT_5f9VVh_dICQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [114.167216, 22.32], // starting position [lng, lat]
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 9 // starting zoom
    });

    new mapboxgl.Marker({ color: 'black' })
      .setLngLat([114.18821653955274, 22.3821297743702])
      .addTo(mapRef.current);


    new mapboxgl.Marker({ color: 'gray' })
      .setLngLat([114.03491020525726, 22.452561052252967])
      .addTo(mapRef.current);

      new mapboxgl.Marker({ color: 'gray' })
      .setLngLat([114.13598892527956, 22.378650721812622])
      .addTo(mapRef.current);

      new mapboxgl.Marker({ color: 'gray' })
      .setLngLat([114.13967752318426, 22.314269524376392])
      .addTo(mapRef.current);


  });

  return (
    <div className="location-page ">
      <img className="w-full" src="../images/StatusBar.png" alt="status"></img>
      <div className='flex border-b-1 py-4 border-gray-200'>
        <img className='ml-2 h-7' src='../images/arrow-left.svg' alt='/'></img>
        <div className='font-semibold text-xl ml-18 '>Provided Locations</div>
      </div>
      <div className="flex border-b-1 py-5 border-gray-300 justify-between">
        <div className='ml-5 font-medium'>AREA</div>
        <div className='ml-18'>New Territories</div>
        <img className='mr-5 h-6' src='../images/arrow_right_gray.svg' alt='/'></img>
      </div>
      <div className="flex border-b-1 py-5 border-gray-300 justify-between">
        <div className='ml-5 font-medium'>DISTRICT</div>
        <div className=''>Sha Tin</div>
        <img className='mr-5 h-6' src='../images/arrow_right_gray.svg' alt='/'></img>
      </div>
      <div>

      </div>
      <div>
        <div
          style={{ height: '280px' }}
          ref={mapContainerRef}
          className="map-container"
        />
      </div>

      {/* <img src="../images/map.png" className="w-full" alt='/'></img> */}

      <div >
        <hr className="h-[4px] rounded my-3 bg-gray-300 border-0 w-[55px] mx-auto mb-4" />
        <div className='w-9/10 mx-auto'>
          <img src='images/dogCafe.png' alt=''></img>
          <div className='font-medium w-full mt-3'>Pet Friendly Cafe</div>
          <div className='flex my-1'>
            <img src='../images/star.svg' alt='star'></img>
            <div className='text-sm text-gray-500'>4.8 (500 reviews)</div>
            <img className='ml-6' src='../images/map-pin.svg' alt='star'></img>
            <div className='text-sm text-gray-500'>1.2 miles</div>
          </div>
          <div className='flex mt-3'>
            <div className='font-semibold text-lg'>Shops 204-214, New Town Plaza 1</div>
            <button type="button" className=" ml-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 h-[35px] ">Select</button>
          </div>

        </div>
        <img className="w-full h-auto border-t-1 border-gray-300" src="../images/tabs.png" alt='/'></img>
      </div>

    </div>
  );
}

export default Location;
