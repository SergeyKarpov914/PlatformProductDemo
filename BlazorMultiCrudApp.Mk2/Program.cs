using Acsp.Core.Core.Lib.Data;
using Acsp.Core8.Asp.Net;
using Acsp.Demo.Core.Lib.Data;
using BlazorMultiCrudApp.Mk2.Components;
using BlazorStrap;
using Clio.Domain.Model;
using Clio.Domain.ViewModel;
using Radzen;

namespace BlazorMultiCrudApp.Mk2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new MultiCrudBlazorServer().Run(args, app => app.MapRazorComponents<App>());
        }

        public class MultiCrudBlazorServer : BlazorServerAppMaster
        {
            protected override void configureDomainOptions(WebApplicationBuilder builder)
            {
                builder.Services.AddBlazorStrap(); // TODO move into Core8 Blazor lib

                builder.Services.Configure<Connection>(builder.Configuration.GetSection("SqlConnection"));
                builder.Services.Configure<DatalakeConnection>(builder.Configuration.GetSection("DatalakeConnection"));
            }

            protected override void registerDomainDependencies(IServiceCollection services)
            {
                MultiCrudDataProcessor.RegisterDependencies(services);

                services.AddTransient<MultiCrudDataProcessor>();
                services.AddTransient<MultiCrudViewModel>();

                services.AddRadzenComponents();
            }

            protected override void captureConfiguration(string[] args, IConfiguration configuration, IServiceCollection services, Env environment)
            {
                MultiCrudDataProcessor.Mark(args, configuration, services, environment);
            }
        }
    }
}
