using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using booksHive.Data;
using booksHive.Models;

namespace booksHive.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeService : ControllerBase
    {
        private readonly booksHiveContext _context;

        public EmployeeService(booksHiveContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeService
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        {
          if (_context.Employee == null)
          {
              return NotFound();
          }
            return await _context.Employee.ToListAsync();
        }

        // GET: api/EmployeeService/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
          if (_context.Employee == null)
          {
              return NotFound();
          }
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/EmployeeService/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeService
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
          if (_context.Employee == null)
          {
              return Problem("Entity set 'booksHiveContext.Employee'  is null.");
          }
            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.EmployeeId }, employee);
        }

        // DELETE: api/EmployeeService/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            if (_context.Employee == null)
            {
                return NotFound();
            }
            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("LoginEmployee")]
        public EmpResponce EmployeeLogin(EmployeeLogin employee)
        {
            var EmpResponce = new EmpResponce();
            var userAvailable = _context.Employee.Where(e => e.EmployeeEmail == employee.EmployeeEmail && e.EmployeePassword == employee.EmployeePassword).FirstOrDefault();
            if (userAvailable != null)
            {
                EmpResponce.EmployeeEmail = userAvailable.EmployeeEmail;
                EmpResponce.Status = "Success";
                EmpResponce.EmployeeId = userAvailable.EmployeeId;
                EmpResponce.EmployeeName = userAvailable.EmployeeName;

            }
            else
            {
                EmpResponce.EmployeeEmail = "";
                EmpResponce.Status = "Failed";
                EmpResponce.EmployeeId = 0;
                EmpResponce.EmployeeName = "";
            }
            return EmpResponce;
        }

        private bool EmployeeExists(int id)
        {
            return (_context.Employee?.Any(e => e.EmployeeId == id)).GetValueOrDefault();
        }
    }
}
