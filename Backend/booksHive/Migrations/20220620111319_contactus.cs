using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace booksHive.Migrations
{
    public partial class contactus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "employee");

            migrationBuilder.DropPrimaryKey(
                name: "PK_contactus",
                table: "contactus");

            migrationBuilder.RenameTable(
                name: "contactus",
                newName: "ContactUs");

            migrationBuilder.RenameColumn(
                name: "phone",
                table: "ContactUs",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "message",
                table: "ContactUs",
                newName: "Message");

            migrationBuilder.RenameColumn(
                name: "fullname",
                table: "ContactUs",
                newName: "FullName");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "ContactUs",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "contactId",
                table: "ContactUs",
                newName: "ContactId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ContactUs",
                table: "ContactUs",
                column: "ContactId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ContactUs",
                table: "ContactUs");

            migrationBuilder.RenameTable(
                name: "ContactUs",
                newName: "contactus");

            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "contactus",
                newName: "phone");

            migrationBuilder.RenameColumn(
                name: "Message",
                table: "contactus",
                newName: "message");

            migrationBuilder.RenameColumn(
                name: "FullName",
                table: "contactus",
                newName: "fullname");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "contactus",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "ContactId",
                table: "contactus",
                newName: "contactId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_contactus",
                table: "contactus",
                column: "contactId");

            migrationBuilder.CreateTable(
                name: "employee",
                columns: table => new
                {
                    EmpId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmpDesig = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpFname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpLname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpPno = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpPwd = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EmpUname = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_employee", x => x.EmpId);
                });
        }
    }
}
