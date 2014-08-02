using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace tnc.tis.css.EstPoker.Controllers
{
    public class RoomController : Controller
    {
        //
        // GET: /Room/

        public ActionResult Index(string id)
        {
            if (id == null)
                return RedirectToRoute("Default", new { controller = "Home", action = "Index" });

            ViewBag.RoomId = Int32.Parse(id);
            return View();
        }
    }
}
