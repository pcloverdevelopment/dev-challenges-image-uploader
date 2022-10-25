using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace ImageUploaderAPI.Controllers
{
  [Route("[controller]")]
  [ApiController]
  public class ImageUploadController : ControllerBase
  {
    [HttpPost(Name = "UploadImage")]
    public IActionResult Post([FromForm] IFormFile file)
    {
      string fileName = file.FileName;

      // TODO: Change this to a 201 created, and probably return the URL to the image?
      return Ok();
    }
  }
}
