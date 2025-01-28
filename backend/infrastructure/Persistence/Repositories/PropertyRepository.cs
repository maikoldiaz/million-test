namespace infrastructure.Persistence.Repositories
{
    using Domain.Entities;
    using Domain.Interfaces;
    using MongoDB.Driver;

    public class PropertyRepository(MongoDbContext dbContext) : IRepository<Property>
    {
        private readonly IMongoCollection<Property> _properties = dbContext.GetCollection<Property>("Property");

        public async Task<Property> GetByIdAsync(string id)
        {
            return await _properties.Find(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Property>> GetAllAsync()
        {
            return await _properties.Find(p =>
                p.Images!.Any(img => img.Enabled == true)
            ).ToListAsync();
        }

        public async Task AddAsync(Property property)
        {
            await _properties.InsertOneAsync(property);
        }

        public async Task UpdateAsync(Property property)
        {
            await _properties.ReplaceOneAsync(p => p.Id == property.Id, property);
        }

        public async Task DeleteAsync(string id)
        {
            await _properties.DeleteOneAsync(p => p.Id == id);
        }
    }
}
