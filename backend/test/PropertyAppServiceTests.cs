using NUnit.Framework;
using Moq;
using Application.Services;
using Domain.Entities;
using Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.DTOs;

namespace Application.Tests.Services
{
    [TestFixture]
    public class PropertyAppServiceTests
    {
        private Mock<IRepository<Property>> _propertyRepositoryMock;
        private PropertyAppService _service;

        [SetUp]
        public void SetUp()
        {
            _propertyRepositoryMock = new Mock<IRepository<Property>>();
            _service = new PropertyAppService(_propertyRepositoryMock.Object);
        }

        [Test]
        public async Task GetAllPropertiesAsync_ShouldReturnOnlyPropertiesWithEnabledImages()
        {
            // Arrange
            var properties = new List<Property>
            {
                new("Prop 1", "Address 1", 1000m, "Code1", 2023, "Owner1",
                    [
                        new("image1.jpg", true),
                        new("image2.jpg", false)
                    ]),
                new("Prop 2", "Address 2", 2000m, "Code2", 2023, "Owner2",
                    [
                        new PropertyImage("image3.jpg", false)
                    ])
            };
            _propertyRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(properties);

            // Act
            var result = await _service.GetAllPropertiesAsync();

            Assert.Multiple(() =>
            {
                // Assert
                Assert.That(result.Count(), Is.EqualTo(1));
                Assert.That(result.First().Name, Is.EqualTo("Prop 1"));
                Assert.That(result.First().Images!.Count(), Is.EqualTo(1));
            });
        }

        [Test]
        public async Task GetPropertyByIdAsync_ShouldReturnPropertyWithEnabledImages()
        {
            // Arrange
            var property = new Property("Prop 1", "Address 1", 1000m, "Code1", 2023, "Owner1",
                [
                    new PropertyImage("image1.jpg", true),
                    new PropertyImage("image2.jpg", false)
                ]);
            _propertyRepositoryMock.Setup(repo => repo.GetByIdAsync("1")).ReturnsAsync(property);

            // Act
            var result = await _service.GetPropertyByIdAsync("1");

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Name, Is.EqualTo("Prop 1"));
                Assert.That(result.Images!.Count(), Is.EqualTo(1));
            });
        }

        [Test]
        public async Task GetPropertyByIdAsync_ShouldReturnNull_WhenPropertyNotFound()
        {
            // Arrange
            _propertyRepositoryMock.Setup(repo => repo.GetByIdAsync("1")).ReturnsAsync((Property)null);

            // Act
            var result = await _service.GetPropertyByIdAsync("1");

            // Assert
            Assert.That(result, Is.Null);
        }

        [Test]
        public async Task AddPropertyAsync_ShouldCallAddAsyncWithCorrectProperty()
        {
            // Arrange
            var createDto = new CreatePropertyDto
            {
                Name = "Prop 1",
                Address = "Address 1",
                Price = 1000m,
                CodeInternal = "Code1",
                Year = 2023,
                OwnerId = "Owner1"
            };

            // Act
            await _service.AddPropertyAsync(createDto);

            // Assert
            _propertyRepositoryMock.Verify(repo => repo.AddAsync(It.Is<Property>(p =>
                p.Name == createDto.Name &&
                p.Address == createDto.Address &&
                p.Price == createDto.Price &&
                p.CodeInternal == createDto.CodeInternal &&
                p.Year == createDto.Year &&
                p.OwnerId == createDto.OwnerId
            )), Times.Once);
        }

        [Test]
        public async Task UpdatePropertyAsync_ShouldUpdateProperty_WhenItExists()
        {
            // Arrange
            var property = new Property("Prop 1", "Address 1", 1000m, "Code1", 2023, "Owner1", null);
            _propertyRepositoryMock.Setup(repo => repo.GetByIdAsync("1")).ReturnsAsync(property);

            var updateDto = new UpdatePropertyDto
            {
                Id = "1",
                Address = "Updated Address",
                Price = 2000m
            };

            // Act
            await _service.UpdatePropertyAsync(updateDto);

            Assert.Multiple(() =>
            {
                // Assert
                Assert.That(property.Address, Is.EqualTo("Updated Address"));
                Assert.That(property.Price, Is.EqualTo(2000m));
            });
            _propertyRepositoryMock.Verify(repo => repo.UpdateAsync(property), Times.Once);
        }

        [Test]
        public void UpdatePropertyAsync_ShouldThrowException_WhenPropertyDoesNotExist()
        {
            // Arrange
            _propertyRepositoryMock.Setup(repo => repo.GetByIdAsync("1")).ReturnsAsync((Property)null);
            var updateDto = new UpdatePropertyDto { Id = "1" };

            // Act & Assert
            Assert.ThrowsAsync<KeyNotFoundException>(() => _service.UpdatePropertyAsync(updateDto));
        }

        [Test]
        public async Task DeletePropertyAsync_ShouldCallDeleteAsyncWithCorrectId()
        {
            // Arrange
            var id = "1";

            // Act
            await _service.DeletePropertyAsync(id);

            // Assert
            _propertyRepositoryMock.Verify(repo => repo.DeleteAsync(id), Times.Once);
        }
    }
}
