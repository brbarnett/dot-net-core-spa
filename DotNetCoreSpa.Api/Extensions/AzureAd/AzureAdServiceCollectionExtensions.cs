using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace DotNetCoreSpa.Api.Extensions.AzureAd
{
    public static class AzureAdServiceCollectionExtensions
    {
        public static IServiceCollection AddAzureAdWebApiAuthentication(this IServiceCollection services)
        {
            services.AddWebApiAuthentication();
            services.AddSingleton<IConfigureOptions<AzureAdOptions>, AzureAdOptionsSetup>();
            services.AddSingleton<IConfigureOptions<JwtBearerOptions>, AzureAdJwtBearerOptionsSetup>();
            return services;
        }
    }
}