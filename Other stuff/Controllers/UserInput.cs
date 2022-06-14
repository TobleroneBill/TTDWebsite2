using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
namespace MVCPresetCheckout.Controllers
{
    public class UserInput : Controller
    {
        public IActionResult Index() {
            return View();
        }

        // this adds /UserInput/Weclome to the HTTP
        public IActionResult Welcome(string Message, int NumTimes = 1){
            ViewData["Message"] = "Hello " + Message;
            ViewData["NumTimes"] = NumTimes;

            return View();
        }
        //bascially these get loaded when appended to the HTTP address. to test copy and paste these on the end of the adressbar (will load the string on black BG)
    }
}
