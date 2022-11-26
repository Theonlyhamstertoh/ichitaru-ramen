import React, { useEffect } from "react";
import LocationDetails from "./LocationDetails";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Location() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="fade-in" className="container-fluid location">
            <div>
                <h1 className="locationTitle">Locations</h1>
            </div>
            <div className="mapSection">
                <div className="mapcontact">
                    <div data-aos="fade-in" className="map">
                        <img
                            className="mapImg"
                            src="assets/icons/map.png"
                            alt=""
                            target="https://google.com"
                        />
                        {/* <a href="https://google.com">
                            <img
                                className="mapImg"
                                src="assets/icons/map.png"
                                alt=""
                            />
                        </a> */}
                    </div>
                    <LocationDetails
                        county="Orange County"
                        city="CYPRESS"
                        phone="(714) 236-5474"
                        address="5721 Lincoln Ave Ste F, Cypress, CA 90630"
                    />
                </div>
            </div>

            <div className="mapcontact">
                <div className="map">
                    <img
                        className="mapImg item"
                        src="assets/icons/map.png"
                        alt=""
                    />
                </div>
                <LocationDetails
                    county="San Diego"
                    city="CARLSBAD"
                    phone="(760) 394-9173"
                    address="7040 Avenida Encinas, Carslbad, CA 92011"
                />
            </div>
        </div>
    );
}
