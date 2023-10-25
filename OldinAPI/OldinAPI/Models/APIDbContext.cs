using Microsoft.EntityFrameworkCore;

namespace OldinAPI.Models
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions option) : base(option)
        {
            
        }

        public DbSet<Products> Products { get; set; }
    }
}
