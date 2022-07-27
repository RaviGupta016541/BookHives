using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace booksHive.Migrations
{
    public partial class createdb2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "bookImagePath",
                table: "Books",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bookImagePath",
                table: "Books");
        }
    }
}
