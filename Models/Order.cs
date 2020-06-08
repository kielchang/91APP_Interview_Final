using System.ComponentModel.DataAnnotations;

namespace _91App_Interview.Models
{
    public class Order
    {
        [Key]
        public string Id { get; set; }
        public int Price { get; set; }
        public int Cost { get; set; }
        public string Status { get; set; }

        public string ProductId { get; set; }
        public Product Product { get; set; }
    }
}
