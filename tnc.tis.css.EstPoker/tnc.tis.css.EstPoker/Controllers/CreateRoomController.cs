using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using tnc.tis.css.EstPoker.Properties;

namespace tnc.tis.css.EstPoker.Controllers
{
    public class CreateRoomController : Controller
    {
        //
        // GET: /CreateRoom/

        private int GetAvailableRoomNumber()
        {
            int room_num = Settings.Default.RoomCounter;
            Settings.Default.RoomCounter = room_num + 1;
            Settings.Default.Save();
            return room_num;
        }

        public ActionResult Index()
        {
            return RedirectToRoute("RoomRoute", new { id = GetAvailableRoomNumber() });
        }
    }
}