import video from '../assets/bg-video.mp4';
import fallbackuiImg from '../assets/FallbackImg.png';

export const VideoSection = () => {
  return (
    <div className="container-fluid p-0 ">
      <div
        className="position-relative overflow-hidden d-flex justify-content-center align-items-center text-center"
        style={{ height: '600px' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={fallbackuiImg}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover', zIndex: 0 }}
        >
          <source src={video} type="video/mp4" />
        </video>

        {/*  Overlay Content */}
        <div className="position-relative text-white z-1">
          <h2 className="fw-bold">Explore Our Digital Services</h2>
          <button className="btn btn-light mt-3">Explore Now</button>
        </div>
      </div>

      
      <div className="text-center py-4">
        <p className="text-muted p-1">
          We offer end-to-end digital solutions including IT services, digital marketing, business consultation, private cloud storage,<br />
          email automation, AI tools, and NFC-enabled business profiles.
        </p>
      </div>
    </div>
  );
};
