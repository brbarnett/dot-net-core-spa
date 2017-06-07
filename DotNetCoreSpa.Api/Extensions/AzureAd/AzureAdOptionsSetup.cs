using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace DotNetCoreSpa.Api.Extensions.AzureAd
{
    public class AzureAdOptionsSetup : ConfigureOptions<AzureAdOptions>
    {
        public AzureAdOptionsSetup(IConfiguration config) :
            base(options => config.GetSection("Authentication:AzureAd").Bind(options))
        {
        }
    }
}
