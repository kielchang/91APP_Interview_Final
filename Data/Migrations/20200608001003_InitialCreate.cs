using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace _91App_Interview.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    Cost = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    ProductId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ShippingOrders",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    CreatedDateTime = table.Column<DateTime>(nullable: false),
                    OrderId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShippingOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ShippingOrders_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "f7b7dce0-22da-4797-ae8b-ef1db1996826", 0, "25ee1c10-4df5-415a-b2ad-4e4ed93c7217", "test@mail.com", true, false, null, "TEST@MAIL.COM", "TEST@MAIL.COM", "AQAAAAEAACcQAAAAEN+7L2f2UKy/lIkbL0EKDhp4sd8ObjukbGQry2QDA3moyNQtykY4isi7cPIXYAAAlg==", null, false, "HJASD0982315HL1K2325ADSGADSG", false, "test@mail.com" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { "P001", "This is Product1", "Product1" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { "P002", "This is Product2", "Product2" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { "P003", "This is Product3", "Product3" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { "P004", "This is Product4", "Product4" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Cost", "Price", "ProductId", "Status" },
                values: new object[] { "A20202026001", 90, 100, "P001", "Payment completed" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Cost", "Price", "ProductId", "Status" },
                values: new object[] { "A20202023001", 100, 120, "P002", "Payment completed" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Cost", "Price", "ProductId", "Status" },
                values: new object[] { "A20202026002", 150, 200, "P003", "Payment completed" });

            migrationBuilder.InsertData(
                table: "Orders",
                columns: new[] { "Id", "Cost", "Price", "ProductId", "Status" },
                values: new object[] { "A20202024003", 120, 150, "P004", "Payment completed" });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductId",
                table: "Orders",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ShippingOrders_OrderId",
                table: "ShippingOrders",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ShippingOrders");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "f7b7dce0-22da-4797-ae8b-ef1db1996826");
        }
    }
}
