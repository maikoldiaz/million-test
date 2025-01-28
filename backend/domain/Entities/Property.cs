namespace Domain.Entities
{
    public class Property(
        string name,
        string address,
        decimal price,
        string codeInternal,
        int year,
        string idOwner,
        ICollection<PropertyImage>? images)
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; } = name;
        public string Address { get; set; } = address;
        public decimal Price { get; set; } = price;
        public string CodeInternal { get; set; } = codeInternal;
        public int Year { get; set; } = year;
        public string OwnerId { get; set; } = idOwner;
        public ICollection<PropertyImage>? Images { get; private set; } = images;

        public void UpdatePrice(decimal newPrice)
        {
            Price = newPrice;
        }

        public void UpdateAddress(string newAddress)
        {
            Address = newAddress;
        }
    }
}
