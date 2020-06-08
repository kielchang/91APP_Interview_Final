using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.ComponentModel.DataAnnotations;

namespace _91App_Interview.Models
{
    public class ShippingOrder
    {
        [Key]
        public string Id { get; set; }
        public string Status { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public string OrderId { get; set; }
        public Order Order { get; set; }
    }

}
