using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _91App_Interview.Data;
using _91App_Interview.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _91App_Interview.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ShippedOrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ShippedOrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ShippingOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShippingOrder>>> GetShippingOrders()
        {
            return await _context.ShippingOrders
                .ToListAsync();
        }

        private bool ShippedOrderExists(string id)
        {
            return _context.ShippingOrders.Any(e => e.Id == id);
        }
    }
}
