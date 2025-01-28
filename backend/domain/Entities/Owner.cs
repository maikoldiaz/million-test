namespace Domain.Entities
{
    public class Owner(string name, string address, string photo, DateTime birthday)
    {
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public string Name { get; private set; } = name;
        public string Address { get; private set; } = address;
        public string Photo { get; private set; } = photo;
        public DateTime Birthday { get; private set; } = birthday;

        public void UpdateAddress(string newAddress)
        {
            Address = newAddress;
        }

        public void UpdatePhoto(string newPhoto)
        {
            Photo = newPhoto;
        }
    }
}
