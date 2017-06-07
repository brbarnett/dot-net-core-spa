using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;

namespace DotNetCoreSpa.Web.Extensions
{
    public static class StartupExtensions
    {
        public static IApplicationBuilder UseAngularRouting(this IApplicationBuilder app, string indexPath,
            string[] ignoredRoots)
        {
            return app.Use(async (context, next) =>
            {
                await next();

                if (ignoredRoots.Any(root => context.Request.Path.Value.StartsWith(root))) return;

                // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
                // Rewrite request to use app root
                if (context.Response.StatusCode == 404
                    && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = indexPath; // Put your Angular root page here 
                    context.Response.StatusCode = 200; // Make sure we update the status code, otherwise it returns 404
                    await next();
                }
            });
        }
    }
}
