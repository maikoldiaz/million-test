import { Property } from '@/types/property';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/property-card.module.css";

interface PropertyCardProps {
    property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
    const coverImage = property.images[0]?.file || '/file.svg';
    return (
        <div className={styles['card--container']}>
            <div className={styles["card--header"]}>
                <h3>{property.name}</h3>
                <Image
                    src={coverImage}
                    alt={property.name}
                    layout="intrinsic"
                    width={150}
                    height={150}
                />
            </div>
            <p>{property.address}</p>
            <p>Price: ${property.price}</p>
            <Link href={`/property/${property.id}`}>View Details</Link>
        </div>
    );
};

export default PropertyCard;
