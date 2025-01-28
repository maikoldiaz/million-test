namespace Application.Services
{
    using Application.DTOs;
    using Application.Interfaces;
    using Domain.Entities;
    using Domain.Interfaces;

    public class PropertyAppService(
        IRepository<Property> propertyRepository) : IPropertyAppService
    {
        private readonly IRepository<Property> _propertyRepository = propertyRepository;

        public async Task<IEnumerable<PropertyDto>> GetAllPropertiesAsync()
        {
            var properties = await _propertyRepository.GetAllAsync();
            return properties.Select(_ => new PropertyDto
            {
                Id = _.Id,
                Name = _.Name,
                Address = _.Address,
                Price = _.Price,
                CodeInternal = _.CodeInternal,
                Year = _.Year,
                OwnerId = _.OwnerId,
                Images = _.Images!.Where(x => x.Enabled).Select(i => new ImagesDto { File = i.File, Id = i.Id }),
            }).Where(p => p.Images!.Any());
        }

        public async Task<PropertyDto> GetPropertyByIdAsync(string id)
        {
            var property = await _propertyRepository.GetByIdAsync(id);

            if (property == null) return null;
            var propertyImages = property.Images!.Where(x => x.Enabled).Select(_ => new ImagesDto { File = _.File, Id = _.Id });

            return new PropertyDto
            {
                Id = property.Id,
                Name = property.Name,
                Address = property.Address,
                Price = property.Price,
                CodeInternal = property.CodeInternal,
                Year = property.Year,
                OwnerId = property.OwnerId,
                Images = propertyImages
            };
        }

        public async Task AddPropertyAsync(CreatePropertyDto createPropertyDto)
        {
            var property = new Property(
                createPropertyDto.Name,
                createPropertyDto.Address,
                createPropertyDto.Price,
                createPropertyDto.CodeInternal,
                createPropertyDto.Year,
                createPropertyDto.OwnerId,
                []
            );

            await _propertyRepository.AddAsync(property);
        }

        public async Task UpdatePropertyAsync(UpdatePropertyDto updatePropertyDto)
        {
            var property = await _propertyRepository.GetByIdAsync(updatePropertyDto.Id) ?? throw new KeyNotFoundException("Property not found");
            property.UpdateAddress(updatePropertyDto.Address);
            property.UpdatePrice(updatePropertyDto.Price);

            await _propertyRepository.UpdateAsync(property);
        }

        public async Task DeletePropertyAsync(string id)
        {
            await _propertyRepository.DeleteAsync(id);
        }
    }
}
