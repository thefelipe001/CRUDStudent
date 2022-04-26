using Aplication.Core.Interface;
using Aplication.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplication.Core.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly ApplicationDBContext _context;
        public BaseRepository(ApplicationDBContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> Save(T entity)
        {
           
            try
            {
                await _context.Set<T>().AddAsync(entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            catch (Exception ex)
            {

                throw new Exception("Error al Agregar"+ex.ToString());
            }
        }
    }
}
