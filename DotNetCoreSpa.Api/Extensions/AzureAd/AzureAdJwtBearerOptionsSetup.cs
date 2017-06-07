using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;

namespace DotNetCoreSpa.Api.Extensions.AzureAd
{
    public class AzureAdJwtBearerOptionsSetup : IConfigureOptions<JwtBearerOptions>
    {
        private readonly AzureAdOptions _adOptions;

        public AzureAdJwtBearerOptionsSetup(IOptions<AzureAdOptions> adOptions)
        {
            _adOptions = adOptions.Value;
        }
        
        public void Configure(JwtBearerOptions jwtOptions)
        {
            jwtOptions.Audience = _adOptions.ClientId;
            jwtOptions.Authority = _adOptions.Authority;
        }
    }
}
