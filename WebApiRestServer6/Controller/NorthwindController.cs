using Acsp.Demo.Core.Lib.Extension;
using Clio.Demo.DataPresentation.Elements;
using Clio.Demo.DataPresentation.ViewModel;
using Clio.Domain.MultiCrudModel.ViewModel.Element;
using Microsoft.AspNetCore.Mvc;

namespace Acsp.Server.WebApiRestServer6.Controller
{
    [ApiController]
    public class NorthwindController : ControllerBase
    {
        private readonly NorthwindViewModel _viewModel;

        public NorthwindController(NorthwindViewModel processor)
        {
            processor.Inject<NorthwindViewModel>(out _viewModel);
        }

        [Route("api/order")]
        [HttpGet]
        public async Task<IActionResult> GetOrders()
        {
            IEnumerable<OrderElement> orders = await _viewModel.GetOrders();

            return this.Success(orders);
        }

        [Route("api/order/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetOrders(string key = null)
        {
            IEnumerable<OrderElement> orders = await _viewModel.GetOrders(key);

            return this.Success(orders);
        }

        [Route("api/deal/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetDeals(string key = null)
        {
            IEnumerable<OrderDealElement> deals = await _viewModel.GetDeals(key);

            return this.Success(deals);
        }
    }
}
