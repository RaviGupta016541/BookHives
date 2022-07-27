using System.ComponentModel.DataAnnotations;

namespace booksHive.Models
{
    public class Users
    {
        
        [Key]
        public int UserId { get; set; }
        public String UserName{ get; set; }
        public String Email { get; set; }
        public String Password { get; set; }
        public DateTime MemberSince { get; set; }
    }
    public class UserResponce
    {
        public int UserId { get; set; }
        public String UserName { get; set; }
        public String Email { get; set; }
        public String Status { get; set; }
    }
    public class Login
    {
         public String Email { get; set; }
        public String Password { get; set; }

    }
}
