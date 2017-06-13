namespace DotNetCoreSpa.Application.Services
{
    public class ValuesService : IValuesService
    {
        public string[] GetValues()
        {
            return new[] { "value1", "value2" };
        }
    }
}
