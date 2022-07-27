using booksHive.Controllers;
using booksHive.Data;
using booksHive.Models;

namespace TestProject1
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            Assert.Pass();
        }
        UsersService us;
        EmployeeService es;
        booksHiveContext udb;

        
        public void IndexTestMethod1()
        {
            //Act
            var viewResult = us.GetUser();
            var bks = (IEnumerable<Users>)viewResult;

            //Assert
            try
            {
                Assert.That(udb.Users.ToList().Count.Equals(bks.ToList().Count));
            }
            catch (Exception)
            {
                Assert.Fail("Exception should not be thrown. Please check the application logic");
            }
        }
        public void IndexTestMethod2()
        {
            //Act
            var viewResult = es.GetEmployee();
            var bks = (IEnumerable<Employee>)viewResult;

            //Assert
            try
            {
                Assert.That(udb.Employee.ToList().Count.Equals(bks.ToList().Count));
            }
            catch (Exception)
            {
                Assert.Fail("Exception should not be thrown. Please check the application logic");
            }
        }
    }
}