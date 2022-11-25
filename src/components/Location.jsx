import React from "react";
import LocationDetails from "./LocationDetails";

export default function Location() {
    return (
        <div className="container-fluid location">
            <div>
                <h1 className="locationTitle">Locations</h1>
            </div>
            <div className="mapSection">
                <div className="mapcontact">
                    <div className="map">
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
