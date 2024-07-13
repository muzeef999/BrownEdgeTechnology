import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import audi from "../asserts/clients/audi.jpg";
import bmwgroup from "../asserts/clients/bmwgroup.jpg";
import bosh from "../asserts/clients/bosh.jpg";
import continental from "../asserts/clients/continental.jpg";
import fiat from "../asserts/clients/fiat.jpg";
import ford from "../asserts/clients/ford.jpg";
import hella from "../asserts/clients/hella.jpg";
import iau from "../asserts/clients/iau.jpg";
import ma from "../asserts/clients/ma.jpg";
import mm from "../asserts/clients/mm.jpg"; 
import ms from "../asserts/clients/ms.jpg";
import value from "../asserts/clients/value.jpg";
import Volkswagen from "../asserts/clients/Volkswagen.jpg";
import Image from 'next/image';

export const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <center>
        <h1 className='text-center' style={{ borderBottom: '3px solid #964B00', width: '350px' }}>
          TRUSTED CLIENTS
        </h1>
      </center>
      <br />
      <div className='grid_clients'>
        {[
          audi, bmwgroup, bosh, continental,
          fiat, ford, hella, iau,
          ma, mm, ms, value, Volkswagen
        ].map((client, index) => (
          <div 
            className='client_item' 
            key={index} 
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            data-aos-offset="100"
            data-aos-delay={index * 100} // Staggered delay
          >
            <Image src={client} alt={`client-${index}`} style={{ width: '40%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};
