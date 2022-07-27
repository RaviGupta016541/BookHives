using System.ComponentModel.DataAnnotations;
namespace booksHive.Models
{
    public class Books
    {
        [Key]
        public int BookId { get; set; }
        public string BookName { get; set; }
        public string BookDescription { get; set; }
        public float BookPrice     { get; set; }
        public string BookImage { get; set; }
        public string AuthorName   { get; set; }
        public int StockQuantity { get; set; }
        public string CategoryName { get; set; }
        public string BookEdition { get; set; }
          
        public int YearPublish { get; set; }
        public System.DateTime CreatedDate { get; set; }
    }
}
