using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreSpa.Api.Extensions
{
    public static class AuthenticationServiceCollectionExtensions
    {
        public static IServiceCollection AddWebApiAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication(sharedOptions =>
            {
                sharedOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                sharedOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            });

            services.AddJwtBearerAuthentication();
            return services;
        }
    }
}
