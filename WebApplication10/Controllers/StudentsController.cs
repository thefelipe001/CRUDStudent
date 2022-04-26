using Aplication.Core.Interface;
using Aplication.Core.Models;
using Microsoft.AspNetCore.Mvc;
using WebApplication10.Models;

namespace WebApplication10.Controllers
{
    public class StudentsController : Controller
    {
        private readonly IBaseRepository<Student> _StudentRepository;
        public StudentsController(IBaseRepository<Student> StudentRepository)
        {
            _StudentRepository = StudentRepository;
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> GetData(string CurrentFilter,int Page)
        {
            var data = await _StudentRepository.GetAll();
            if (CurrentFilter!=null)
            {
                var info = data.Where(x=>x.ID.ToString().ToLower().Contains(CurrentFilter) ||
                                      x.FirstMidName.ToLower().Contains(CurrentFilter)     ||
                                      x.LastName.ToLower().Contains(CurrentFilter)         ||
                                      x.Secret.ToLower().Contains(CurrentFilter));

                return Json(new { data = info });


            }
            var recordTotal = data.Count();
             data = data.Take(Page).ToList();

            return Json(new { data = data,recordTotal=recordTotal });

        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Save(StudentsViewModels studentsViewModels)
        {
           


            try
            {
                Student student = new Student
                {
                    ID = studentsViewModels.ID,
                    FirstMidName = studentsViewModels.FirstMidName,
                    LastName = studentsViewModels.LastName,
                    EnrollmentDate = studentsViewModels.EnrollmentDate,
                    Secret = studentsViewModels.Secret
                };


               await _StudentRepository.Save(student);
               string Msg = "Se agregando correctamente";
               return Json(new { data = Msg });
            }
            catch (Exception ex)
            {

                return Json(new {data=ex});
            }
        }
    }
}
