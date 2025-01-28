import { GetServerSideProps } from 'next';
import { Property } from '@/types/property';
import { propertyService } from '@/services/propertyService';
import { PropertyList } from '@/components/PropertyList';
import SearchBar from '@/components/SearchBar';
import { FilterProvider } from '@/context/FilterContext';

interface PropertyListProps {
    properties: Property[];
}


const HomePage: React.FC<PropertyListProps> = ({ properties }) => {
    return (
        <FilterProvider>
            <div>
                <SearchBar />
                <PropertyList properties={properties} />
            </div>
        </FilterProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const properties = await propertyService.fetchProperties();
    return { props: { properties } };
};


export default HomePage;

