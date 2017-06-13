using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using DotNetCoreSpa.Application.Services;

namespace DotNetCoreSpa.Api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private readonly IValuesService _valuesService;

        public ValuesController(IValuesService valuesService)
        {
            this._valuesService = valuesService;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return this._valuesService.GetValues();
        }
    }
}
