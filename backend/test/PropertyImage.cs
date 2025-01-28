using NUnit.Framework;
using Domain.Entities;

namespace Domain.Tests.Entities
{
    [TestFixture]
    public class PropertyImageTests
    {
        [Test]
        public void Constructor_ShouldInitializePropertiesCorrectly()
        {
            // Arrange
            var file = "image1.jpg";
            var enabled = true;

            // Act
            var propertyImage = new PropertyImage(file, enabled);

            Assert.Multiple(() =>
            {
                // Assert
                Assert.That(propertyImage.File, Is.EqualTo(file));
                Assert.That(propertyImage.Enabled, Is.EqualTo(enabled));
                Assert.That(propertyImage.Id, Is.Not.Null);
            });
        }

        [Test]
        public void Enable_ShouldSetEnabledToTrue()
        {
            // Arrange
            var propertyImage = new PropertyImage("image1.jpg", false);

            // Act
            propertyImage.Enable();

            // Assert
            Assert.That(propertyImage.Enabled, Is.True);
        }

        [Test]
        public void Disable_ShouldSetEnabledToFalse()
        {
            // Arrange
            var propertyImage = new PropertyImage("image1.jpg", true);

            // Act
            propertyImage.Disable();

            // Assert
            Assert.That(propertyImage.Enabled, Is.False);
        }
    }
}
