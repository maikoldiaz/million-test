import React from 'react';
import { useFilterContext } from '@/context/FilterContext';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/types/property';
import styles from "@/styles/property-list.module.css";

interface PropertyListProps {
    properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
    const { search, priceMin, priceMax } = useFilterContext();

    const filteredProperties = properties.filter((property) => {
        const matchesSearch = property.name.toLowerCase().includes(search.toLowerCase());
        const matchesPriceMin = priceMin === undefined || property.price >= priceMin;
        const matchesPriceMax = priceMax === undefined || property.price <= priceMax;

        return matchesSearch && matchesPriceMin && matchesPriceMax;
    });

    return (
        <div className={styles["property--list"]}>
            {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export { PropertyList };
