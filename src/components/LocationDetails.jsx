import React from "react";

export default function LocationDetails(county, city, phone, address) {
    return (
        <div className="container-fluid location">
            <div>
                <h1 className="locationTitle">Locations</h1>
            </div>

            <div className="container mapcontact">
                <div className="map">
                    <a href="https://google.com">
                        <img
                            className="mapImg"
                            src="assets/icons/map.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="contact">
                    <div className="county">Orange County</div>
                    <h3 className="city">
                        CYPRESS, CA
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/ubereats.png"
                                alt="uber-eats"
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/doordash.png"
                                alt="uber-eats"
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/grubhub.png"
                                alt="uber-eats"
                            />
                        </a>
                    </h3>
                    <h3 className="phone">(714) 236-5474</h3>
                    <p className="address">
                        5721 Lincoln Ave Ste F, Cypress, CA 90630
                    </p>
                    <p className="hours">
                        Sun 11:00 am - 9:00 pm <br />
                        Mon 11:00 am - 9:00 pm
                        <br />
                        Tue 11:00 am - 9:00 pm
                        <br />
                        Wed 11:00 am - 9:00 pm
                        <br />
                        Thu 11:00 am - 9:00 pm
                        <br />
                        Fri 11:00 am - 9:00 pm
                        <br />
                        Sat 11:00 am - 9:00 pm
                    </p>
                </div>
            </div>
            <div className="container mapcontact">
                <div className="map">
                    <a href="https://google.com">
                        <img
                            className="mapImg"
                            src="assets/icons/map.png"
                            alt=""
                        />
                    </a>
                </div>
                <div className="contact">
                    <div className="county">San Diego</div>
                    <h3 className="city">
                        CARLSBAD, CA
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/ubereats.png"
                                alt="uber-eats"
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/doordash.png"
                                alt="uber-eats"
                            />
                        </a>
                        <a href="https://google.com">
                            <img
                                className="app"
                                src="assets/icons/grubhub.png"
                                alt="uber-eats"
                            />
                        </a>
                    </h3>
                    <h3 className="phone">(760) 394-9173</h3>
                    <p className="address">
                        7040 Avenida Encinas, Carlsbad, CA 92011
                    </p>
                    <p className="hours">
                        Sun 11:00 am - 9:00 pm <br />
                        Mon 11:00 am - 9:00 pm
                        <br />
                        Tue 11:00 am - 9:00 pm
                        <br />
                        Wed 11:00 am - 9:00 pm
                        <br />
                        Thu 11:00 am - 9:00 pm
                        <br />
                        Fri 11:00 am - 9:00 pm
                        <br />
                        Sat 11:00 am - 9:00 pm
                    </p>
                </div>
            </div>
        </div>
    );
}
