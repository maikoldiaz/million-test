import { Property } from '@/types/property';
import { PropertyFilter } from '@/types/propertyFilter';

class PropertyService {
    private readonly baseUrl: string;
    private readonly propertyUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl || 'https://default-api-url.com';
        this.propertyUrl = `${this.baseUrl}/property`;
    }

    async fetchProperties(): Promise<Property[]> {
        const response = await fetch(this.propertyUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const data = (await response.json()) as Property[];
        return data;
    }

    async fetchPropertyById(id: string): Promise<Property> {
        const response = await fetch(`${this.propertyUrl}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch property');
        }
        const data = (await response.json()) as Property;
        return data;
    }


    async fetchPropertiesFiltered(filter: PropertyFilter): Promise<Property[]> {
        const queryParams = new URLSearchParams();
        if (filter.name) queryParams.append('name', filter.name);
        if (filter.priceMin !== undefined) queryParams.append('priceMin', filter.priceMin.toString());
        if (filter.priceMax !== undefined) queryParams.append('priceMax', filter.priceMax.toString());
        if (filter.yearMin !== undefined) queryParams.append('yearMin', filter.yearMin.toString());
        if (filter.yearMax !== undefined) queryParams.append('yearMax', filter.yearMax.toString());
        const url = `${this.propertyUrl}?${queryParams.toString()}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const data = (await response.json()) as Property[];
        return data;
    }

}

const propertyService = new PropertyService(process.env.NEXT_PUBLIC_API_URL ?? 'http://backend:80/api');
export { propertyService };
