namespace DotNetCoreSpa.Api.Extensions.AzureAd
{
    public class AzureAdOptions
    {
        public string Audience { get; set; }
        public string AzureAdInstance { get; set; }
        public string ClientId { get; set; }
        public string TenantId { get; set; }
        public string Authority => $"{AzureAdInstance}/{TenantId}";
    }
}
