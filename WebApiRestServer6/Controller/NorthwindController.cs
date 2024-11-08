using Acsp.Demo.Core.Lib.Extension;
using Clio.Demo.DataPresentation.Elements;
using Clio.Demo.DataPresentation.ViewModel;
using Clio.Domain.MultiCrudModel.ViewModel.Element;
using Clio.Domain.NorthwindModel.Element;
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

        [Route("api/order/")]
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

        [Route("api/customer/")]
        [Route("api/customer/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetCustomers(string key = null)
        {
            IEnumerable<CustomerElement> elements = await _viewModel.GetCustomers(key);

            return this.Success(elements);
        }

        [Route("api/product/")]
        [Route("api/product/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetProducts(string key = null)
        {
            IEnumerable<ProductElement> elements = await _viewModel.GetProducts(key);

            return this.Success(elements);
        }

        [Route("api/supplier/")]
        [Route("api/supplier/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetSuppliers(string key = null)
        {
            IEnumerable<SupplierElement> elements = await _viewModel.GetSuppliers(key);

            return this.Success(elements);
        }

        [Route("api/employee/")]
        [Route("api/employee/{key}")]
        [HttpGet]
        public async Task<IActionResult> GetEmployees(string key = null)
        {
            IEnumerable<EmployeeElement> elements = await _viewModel.GetEmployees(key);

            return this.Success(elements);
        }
    }
}
