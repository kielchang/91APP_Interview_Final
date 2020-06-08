using _91App_Interview.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace _91App_Interview.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ShippingOrder> ShippingOrders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>()
                .HasData(
                    new Product() { Id = "P001", Name = "Product1", Description = "This is Product1" },
                    new Product() { Id = "P002", Name = "Product2", Description = "This is Product2" },
                    new Product() { Id = "P003", Name = "Product3", Description = "This is Product3" },
                    new Product() { Id = "P004", Name = "Product4", Description = "This is Product4" }
                );

            modelBuilder.Entity<Order>()
                .HasData(
                    new Order() { Id = "A20202026001", ProductId = "P001", Price = 100, Cost = 90, Status = "Payment completed" },
                    new Order() { Id = "A20202023001", ProductId = "P002", Price = 120, Cost = 100, Status = "Payment completed" },
                    new Order() { Id = "A20202026002", ProductId = "P003", Price = 200, Cost = 150, Status = "Payment completed" },
                    new Order() { Id = "A20202024003", ProductId = "P004", Price = 150, Cost = 120, Status = "Payment completed" }
                );

            var hasher = new PasswordHasher<ApplicationUser>();
            var testUser = new ApplicationUser()
            {
                UserName = "test@mail.com",
                Email = "test@mail.com",
                NormalizedUserName = "test@mail.com".ToUpper(),
                NormalizedEmail = "test@mail.com".ToUpper(),
                EmailConfirmed = true,
                SecurityStamp = "HJASD0982315HL1K2325ADSGADSG"
            };

            testUser.PasswordHash = hasher.HashPassword(null, "Test@123");

            modelBuilder.Entity<ApplicationUser>()
                .HasData(
                    testUser
                );
        }
    }
}
