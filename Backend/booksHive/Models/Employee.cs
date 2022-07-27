using System.ComponentModel.DataAnnotations;

namespace booksHive.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        public String EmployeeName { get; set; }
        public String EmployeeEmail { get; set; }
        public String EmployeePassword { get; set; }
    }

    public class EmpResponce
    {
        public int EmployeeId { get; set; }
        public String EmployeeName { get; set; }
        public String EmployeeEmail { get; set; }
        public String Status { get; set; }
    }
    public class EmployeeLogin
    {
        public String EmployeeEmail { get; set; }
        public String EmployeePassword { get; set; }

    }
}

