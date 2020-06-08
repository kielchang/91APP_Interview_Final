using System.ComponentModel.DataAnnotations;

namespace _91App_Interview.Models
{
    public class Product
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
