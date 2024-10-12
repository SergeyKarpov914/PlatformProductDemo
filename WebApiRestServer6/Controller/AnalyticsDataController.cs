using Acsp.Demo.Core.Lib.Data;
using Acsp.Demo.Core.Lib.Extension;
using Microsoft.AspNetCore.Mvc;

namespace Acsp.WebApiRestServer6.Controller
{
    [ApiController]
    public class CrudController : ControllerBase
    {
        private readonly AnalyticsDataProcessor _processor;

        public CrudController(AnalyticsDataProcessor processor)
        {
            processor.Inject<AnalyticsDataProcessor>(out _processor);
        }

        [Route("api/etf/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetEtfIndexCorrels(string key = null)
        {
            Snap snap = new Snap(nameof(GetEtfIndexCorrels));

            IEnumerable<EtfCorrell> correlations = null;
            try
            {
                correlations = await _processor.GetEtfIndexCorrels() ?? throw new CrudException<EtfCorrell>(true);
            }
            catch (Exception ex)
            {
                return this.Failed(ex.Message, snap);
            }
            return this.Success(correlations, snap);
        }
    }
}
