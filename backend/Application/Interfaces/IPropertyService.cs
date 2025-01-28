using Application.DTOs;

namespace Application.Interfaces
{
    public interface IPropertyAppService
    {
        Task<IEnumerable<PropertyDto>> GetAllPropertiesAsync();
        Task<PropertyDto> GetPropertyByIdAsync(string id);
        Task AddPropertyAsync(CreatePropertyDto createPropertyDto);
        Task UpdatePropertyAsync(UpdatePropertyDto updatePropertyDto);
        Task DeletePropertyAsync(string id);
    }
}
