namespace Domain.Entities
{
    public class PropertyTrace(string propertyId, DateTime dateSale, string name, decimal value, decimal tax)
    {
        public string Id { get; private set; } = Guid.NewGuid().ToString();
        public DateTime DateSale { get; private set; } = dateSale;
        public string Name { get; private set; } = name;
        public decimal Value { get; private set; } = value;
        public decimal Tax { get; private set; } = tax;
        public string PropertyId { get; private set; } = propertyId;

        public void UpdateValue(decimal newValue)
        {
            Value = newValue;
        }

        public void UpdateTax(decimal newTax)
        {
            Tax = newTax;
        }

        public void UpdateName(string newName)
        {
            Name = newName;
        }
    }
}
