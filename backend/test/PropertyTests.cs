using NUnit.Framework;
using Domain.Entities;
using System.Collections.Generic;

namespace Domain.Tests.Entities
{
    [TestFixture]
    public class PropertyTests
    {
        [Test]
        public void Constructor_ShouldInitializePropertiesCorrectly()
        {
            // Arrange
            var name = "Casa Bonita";
            var address = "123 Main Street";
            var price = 250000m;
            var codeInternal = "ABC123";
            var year = 2023;
            var ownerId = "owner-123";
            var images = new List<PropertyImage>
            {
                new("image1.jpg", true),
                new("image2.jpg", false)
            };

            // Act
            var property = new Property(name, address, price, codeInternal, year, ownerId, images);

            Assert.Multiple(() =>
            {
                // Assert
                Assert.That(property.Name, Is.EqualTo(name));
                Assert.That(property.Address, Is.EqualTo(address));
                Assert.That(property.Price, Is.EqualTo(price));
                Assert.That(property.CodeInternal, Is.EqualTo(codeInternal));
                Assert.That(property.Year, Is.EqualTo(year));
                Assert.That(property.OwnerId, Is.EqualTo(ownerId));
                Assert.That(property.Images, Is.EqualTo(images));
            });
            Assert.IsNotNull(property.Id);
        }

        [Test]
        public void UpdatePrice_ShouldUpdatePrice()
        {
            // Arrange
            var property = new Property(
                "Casa Bonita",
                "123 Main Street",
                250000m,
                "ABC123",
                2023,
                "owner-123",
                null
            );
            var newPrice = 300000m;

            // Act
            property.UpdatePrice(newPrice);

            // Assert
            Assert.That(property.Price, Is.EqualTo(newPrice));
        }

        [Test]
        public void UpdateAddress_ShouldUpdateAddress()
        {
            // Arrange
            var property = new Property(
                "Casa Bonita",
                "123 Main Street",
                250000m,
                "ABC123",
                2023,
                "owner-123",
                null
            );
            var newAddress = "456 Elm Street";

            // Act
            property.UpdateAddress(newAddress);

            // Assert
            Assert.That(property.Address, Is.EqualTo(newAddress));
        }
    }
}
