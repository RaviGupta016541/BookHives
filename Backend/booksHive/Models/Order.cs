using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace booksHive.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        
        public string BookName { get; set; }
        public string BookImage { get; set; }
        public DateTime DateofPurchase { get; set; }
        public int Quantity { get; set; }
        public float Total { get; set; }
        public float BookPrice { get; set; }
        [ForeignKey("user")]
        public int UserId { get; set; }
    }
}
