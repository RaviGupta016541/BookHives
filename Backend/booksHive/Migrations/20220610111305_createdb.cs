using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace booksHive.Migrations
{
    public partial class createdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    BookId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BookDescription = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BookPrice = table.Column<float>(type: "real", nullable: false),
                    BookImage = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    authorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    stockQuantity = table.Column<int>(type: "int", nullable: false),
                    categoryName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    bookEdition = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    yearPublish = table.Column<int>(type: "int", nullable: false),
                    createdDate = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.BookId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
