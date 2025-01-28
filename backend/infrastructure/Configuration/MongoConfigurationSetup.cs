namespace infrastructure.Configuration
{
    using infrastructure.Persistence;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    public static class MongoConfigurationSetup
    {
        public static IServiceCollection AddMongoConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            var mongoConfig = new MongoConfiguration();
            configuration.GetSection("MongoConfiguration").Bind(mongoConfig);

            if (string.IsNullOrWhiteSpace(mongoConfig.ConnectionString) || string.IsNullOrWhiteSpace(mongoConfig.DatabaseName))
            {
                throw new ArgumentException("MongoConfiguration settings are missing or invalid in appsettings.json");
            }

            services.AddSingleton(mongoConfig);
            services.AddSingleton(provider => new MongoDbContext(mongoConfig.ConnectionString, mongoConfig.DatabaseName));

            return services;
        }
    }
}
