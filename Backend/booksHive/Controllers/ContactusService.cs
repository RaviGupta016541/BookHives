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
    public class ContactUsService : ControllerBase
    {
        private readonly booksHiveContext _context;

        public ContactUsService(booksHiveContext context)
        {
            _context = context;
        }

        // GET: api/ContactUs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactUs>>> GetContactUs()
        {
          if (_context.ContactUs == null)
          {
              return NotFound();
          }
            return await _context.ContactUs.ToListAsync();
        }

        // GET: api/ContactUs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactUs>> GetContactUs(int id)
        {
          if (_context.ContactUs == null)
          {
              return NotFound();
          }
            var ContactUs = await _context.ContactUs.FindAsync(id);

            if (ContactUs == null)
            {
                return NotFound();
            }

            return ContactUs;
        }

        // PUT: api/ContactUs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactUs(int id, ContactUs ContactUs)
        {
            if (id != ContactUs.ContactId)
            {
                return BadRequest();
            }

            _context.Entry(ContactUs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactUsExists(id))
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

        // POST: api/ContactUs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactUs>> PostContactUs(ContactUs ContactUs)
        {
          if (_context.ContactUs == null)
          {
              return Problem("Entity set 'booksHiveContext.ContactUs'  is null.");
          }
            _context.ContactUs.Add(ContactUs);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactUs", new { id = ContactUs.ContactId }, ContactUs);
        }

        // DELETE: api/ContactUs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContactUs(int id)
        {
            if (_context.ContactUs == null)
            {
                return NotFound();
            }
            var ContactUs = await _context.ContactUs.FindAsync(id);
            if (ContactUs == null)
            {
                return NotFound();
            }

            _context.ContactUs.Remove(ContactUs);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactUsExists(int id)
        {
            return (_context.ContactUs?.Any(e => e.ContactId == id)).GetValueOrDefault();
        }
    }
}
