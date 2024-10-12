using Acsp.Core.Core.Lib.Data;
using Acsp.Demo.Core.Lib.Pattern;
using Acsp.Demo.Core6.Asp;
using Acsp.Demo.Core6.Component;
using Clio.Demo.DataManager.Processor;
using Clio.Demo.DataPresentation.ViewModel;
using Clio.Research.Data.Northwind.DTO;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace Acsp.WebApiRestServer6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            new WebApiRestServer().Run(args);
        }

        internal class WebApiRestServer : WebAPIAppMaster
        {
            protected override void configureDomainOptions(WebApplicationBuilder builder)
            {
                builder.Services.Configure<Connection>(builder.Configuration.GetSection("SqlConnection"));
            }

            protected override void registerDomainDependencies()
            {
                NorthwindProcessor.RegisterDependencies(_services);

                _services.AddTransient<NorthwindProcessor>();
                _services.AddTransient<NorthwindViewModel>();

            }
            
            protected override Type[] assemblies()
            {
                return new Type[]
                {
                    typeof(LogMaster),
                    typeof(AspNetCore),
                    typeof(Order),  // 
                    typeof(NorthwindProcessor),
                };
            }
        }
    }
}
