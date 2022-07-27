using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace booksHive.Migrations
{
    public partial class newone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.RenameColumn(
                name: "cartId",
                table: "Cart",
                newName: "CartId");

            migrationBuilder.RenameColumn(
                name: "yearPublish",
                table: "Books",
                newName: "YearPublish");

            migrationBuilder.RenameColumn(
                name: "stockQuantity",
                table: "Books",
                newName: "StockQuantity");

            migrationBuilder.RenameColumn(
                name: "createdDate",
                table: "Books",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "categoryName",
                table: "Books",
                newName: "CategoryName");

            migrationBuilder.RenameColumn(
                name: "bookEdition",
                table: "Books",
                newName: "BookEdition");

            migrationBuilder.RenameColumn(
                name: "authorName",
                table: "Books",
                newName: "AuthorName");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pwd = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemberSince = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.RenameColumn(
                name: "CartId",
                table: "Cart",
                newName: "cartId");

            migrationBuilder.RenameColumn(
                name: "YearPublish",
                table: "Books",
                newName: "yearPublish");

            migrationBuilder.RenameColumn(
                name: "StockQuantity",
                table: "Books",
                newName: "stockQuantity");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Books",
                newName: "createdDate");

            migrationBuilder.RenameColumn(
                name: "CategoryName",
                table: "Books",
                newName: "categoryName");

            migrationBuilder.RenameColumn(
                name: "BookEdition",
                table: "Books",
                newName: "bookEdition");

            migrationBuilder.RenameColumn(
                name: "AuthorName",
                table: "Books",
                newName: "authorName");

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemberSince = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Mobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pwd = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.UserId);
                });
        }
    }
}
