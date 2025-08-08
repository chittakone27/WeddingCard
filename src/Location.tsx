
export default function Location() {
  return (
    <div className="text-center mb-5">
      <h2 className="mb-3">Location</h2>
      <p>Grand Ballroom, Luxury Hotel<br />123 Wedding St, Cityville, Country</p>
      <div className="ratio ratio-16x9 mx-auto card-body" >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086909157573!2d-122.41941528468242!3d37.774929779758834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e18f9dbb%3A0x9e6ee49f6cc840a2!2sLuxury%20Hotel!5e0!3m2!1sen!2sus!4v1620319457203!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Wedding Location"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
