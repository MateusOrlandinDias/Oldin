using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace OldinAPI.Models
{
    public class Products
    {
        [Key]
        public int ProductID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(250)")]
        public string Name { get; set; } = "";
        public string Description { get; set; } = "";
        public string ImageURL { get; set; } = "";
        public List<string> Tags { get; set; } = new List<string>();
        public double Price { get; set; }
    }
}
