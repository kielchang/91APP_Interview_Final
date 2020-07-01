using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _91App_Interview.Data;
using _91App_Interview.Models;
using Microsoft.AspNetCore.Authorization;

namespace _91App_Interview.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OrdersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrders()
        {
            return await _context.Orders
                .Include(o => o.Product)
                .ToListAsync();
        }

        // GET: api/Orders/Shipped
        [HttpPut("Shipped")]
        public async Task<ActionResult<IEnumerable<Order>>> ShippedOrders(string[] ids)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    var orders = await _context.Orders.Where(o => ids.Contains(o.Id)).ToListAsync();
                    foreach (var order in orders)
                    {
                        order.Status = "To be shipped";

                        int ShippedOrdersCount = _context.ShippingOrders
                            .Where(s => (s.CreatedDateTime > DateTime.Now.Date))
                            .Count();

                        _context.ShippingOrders.Add(
                            new ShippingOrder()
                            {
                                Id = $"SO{DateTime.Now.ToString("yyyyMMdd")}{$"{++ShippedOrdersCount}".PadLeft(4, '0')}",
                                OrderId = order.Id,
                                Status = "New",
                                CreatedDateTime = DateTime.Now
                            });
                        _context.SaveChanges();
                    }

                    transaction.Commit();
                }
                catch (Exception ex) {
                    transaction.Rollback();
                }
            }

            return NoContent();
        }

        private bool OrderExists(string id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }
    }
}
