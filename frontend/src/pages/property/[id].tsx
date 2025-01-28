// pages/property/[id].tsx (ejemplo de Next.js)
import { GetServerSideProps } from 'next';
import { propertyService } from '@/services/propertyService';
import { Property } from '@/types/property';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

interface PropertyDetailsProps {
  property: Property;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {

  const router = useRouter();

  const handleGoBack = () => {
    router.push({
      pathname: '/',
      query: router.query,
    });
  };
  return (
    <div className="property-details">
      <button type='button' onClick={handleGoBack}>Go Back</button>
      <h1>{property.name}</h1>
      <p>{property.address}</p>
      <p>Price: ${property.price}</p>
      <p>Year: {property.year}</p>

      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {property.images.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.file}
                alt={property.name}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const property = await propertyService.fetchPropertyById(id as string);
  return { props: { property } };
};

export default PropertyDetails;
