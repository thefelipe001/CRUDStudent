using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplication.Core.Interface
{
    public interface IBaseRepository<T> where T:class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> Save(T entity);
    }
}
