import { Col, Row } from "antd";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="search">
        <h1></h1>
      </div>

      <div className="footer">
        <div className="fLists">
          <Row>
            <Col md={{ span: 8 }} xs={{ span: 12 }}>
              <img
                src="https://premiumlayers.com/html/hotelbooking/img/footer-logo-one.png"
                alt=""
              />
              <div className="first-part-of-footer">
                <p>
                iBooky is a MERN (MongoDB, Express, React, Node.js) app that allows users to book various services such as hotels, flights, and rental cars. This app has a user-friendly interface that allows users to search for services based on their preferences, budget, and location.
                </p>
                <p>Davao, Phillippines</p>
              </div>
            </Col>

            <Col md={{ span: 8 }} xs={{ span: 12 }}>
              <h4>QUICK LINKS</h4>
              <div className="list">
                <ul className="fList">
                  <li className="fListItem">Homes </li>
                  <li className="fListItem">Apartments </li>
                  <li className="fListItem">Resorts </li>
                  <li className="fListItem">Villas</li>
                </ul>
                <ul className="fList">
                  <li className="fListItem">Homes </li>
                  <li className="fListItem">Apartments </li>
                  <li className="fListItem">Resorts </li>
                  <li className="fListItem">Villas</li>
                </ul>
              </div>
            </Col>

            <Col md={{ span: 8 }} xs={{ span: 12 }}>
              <h4>WE ARE GLOBAL</h4>
              <div className="global-image">
                <img
                  src="https://premiumlayers.com/html/hotelbooking/img/footer-map-two.jpg"
                  alt=""
                />
              </div>
            </Col>
            <div className="fText">
              Copyright &copy; {new Date().getFullYear()} iBooky Booking. All
              rights reserved.
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
