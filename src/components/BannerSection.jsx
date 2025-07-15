import image_1 from '../assets/image-1.webp';
import image_2 from '../assets/image-2.webp';
import image_3 from '../assets/image-3.webp';
import image_4 from '../assets/image-4.webp';
import image_5 from '../assets/Image-5.webp';
import image_6 from '../assets/image-6.webp';
import image_7 from '../assets/image-7.webp';
import image_8 from '../assets/image-8.webp';

export const BannerSection = () => {
    const bannerImages = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8,];

    return (


        <div className='container border rounded text-dark p-4 mb-4'>
            <div className='d-flex gap-4 flex-wrap justify-content-around '>
                {
                    bannerImages.map((img) => (
                        <div className='h-50 p-2 border rounded card cards '>
                            <img height={270} width={270} src={img} className='rounded' />
                        </div>
                    ))
                }
            </div>
            <div className="mt-4 d-flex gap-3 justify-content-center">
                <button className="btn btn-outline-success">Learn More</button>
                <button className="btn btn-outline-warning">Get Started</button>
            </div>
        </div>
    );
};
