import React from "react";
import Section from "./Section";

const Maps = () => {
  return (
    <Section className="container" id="maps">
      {/* Maps */}
      <div className="text-center">
        <h2 className="h4">Come visit us at </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1795290646533!2d77.34620393972267!3d28.68427577573795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa58da2a4051%3A0xa633cc4312d81718!2sDr%20Zakir%20Hussain%20Marg%2C%20Raj%20Bagh%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201005!5e0!3m2!1sen!2sin!4v1711730436212!5m2!1sen!2sin"
          width={600}
          height={450}
          //   style="border:0;"
          className="border rounded-2xl w-full bg-conic-gradient p-[1/2rem]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <h4 className="h4 flex justify-start">Contact Us:</h4>
          <p className="body-2 flex justify-start">
            Mail: FittnesPlanet@gmail.com
          </p>
          <p className="body-2 flex justify-start">Phone: +9176184XXXXX</p>
        </div>
      </div>
    </Section>
  );
};

export default Maps;
