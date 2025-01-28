using Application.DTOs;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController(IPropertyAppService propertyAppService) : ControllerBase
    {
        private readonly IPropertyAppService _propertyAppService = propertyAppService;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PropertyDto>>> GetAllProperties()
        {
            var properties = await _propertyAppService.GetAllPropertiesAsync();
            return Ok(properties);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PropertyDto>> GetPropertyById(string id)
        {
            var property = await _propertyAppService.GetPropertyByIdAsync(id);

            if (property == null)
                return NotFound("Property not found");

            return Ok(property);
        }

        [HttpPost]
        public async Task<ActionResult> CreateProperty([FromBody] CreatePropertyDto createPropertyDto)
        {
            await _propertyAppService.AddPropertyAsync(createPropertyDto);
            return Created("", null);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateProperty(string id, [FromBody] UpdatePropertyDto updatePropertyDto)
        {
            if (id != updatePropertyDto.Id)
                return BadRequest("Property ID mismatch");

            await _propertyAppService.UpdatePropertyAsync(updatePropertyDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProperty(string id)
        {
            await _propertyAppService.DeletePropertyAsync(id);
            return NoContent();
        }
    }
}
