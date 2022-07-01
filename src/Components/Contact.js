import React from "react";

const Contact = ({ data }) => {
  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
  }

  return (
    <section id="contact">
      <aside className="four columns footer-widgets">
        <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="address">
            {contactName}
            {street} <br />
            {city}, {state} {zip}
            <br />
            <br />
            {contactEmail}
            <br />
            {phone}
            <br />
            <br />
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Contact;
