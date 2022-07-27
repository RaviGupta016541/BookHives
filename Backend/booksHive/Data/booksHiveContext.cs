using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using booksHive.Models;

namespace booksHive.Data
{
    public class booksHiveContext : DbContext
    {
        public booksHiveContext (DbContextOptions<booksHiveContext> options)
            : base(options)
        {
        }

        public DbSet<booksHive.Models.Books>? Books { get; set; }

        public DbSet<booksHive.Models.ContactUs>? ContactUs { get; set; }

        public DbSet<booksHive.Models.Cart>? Cart { get; set; }

        public DbSet<booksHive.Models.Order>? Order { get; set; }

        public DbSet<booksHive.Models.Users>? Users { get; set; }

        public DbSet<booksHive.Models.Employee>? Employee { get; set; }

    }
}
