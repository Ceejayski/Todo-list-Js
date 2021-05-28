import moment from 'moment';
import Project from '../project/project';
import Store from '../store/store';

const Aside = () => {
  const todoHead = document.getElementById('todoHead');
  const projArr = Project.getProject();
  const mainArr = Object.values(Store.getTask());

  function camelize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const headerMaker = (text) => {
    todoHead.innerText = `${camelize(text)} Task`;
  };

  const todayArr = mainArr.filter((element) => {
    const varDate = new Date(element.date);
    const today = new Date();
    return varDate.getDate() === today.getDate();
  });

  const weekArr = mainArr.filter((element) => {
    const varDate = moment(element.date);
    const today = moment();
    return today.isoWeek() === varDate.isoWeek();
  });

  const monthArr = mainArr.filter((element) => {
    const dateTime = element.date;
    const parts = dateTime.split(/[- :]/);

    const month = parts[1];
    const year = parts[0];

    const currentdate = new Date();
    const cur_month = currentdate.getMonth() + 1;
    const cur_year = currentdate.getFullYear();

    return cur_month === month && year === cur_year;
  });

  const overDueArr = mainArr.filter((element) => {
    const varDate = new Date(element.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (varDate < today && element.checked === false);
  });

  const projectArrfunc = (id) => {
    const arr = mainArr.filter((element) => {
      const mainid = id.replace('project', '');
      return element.project === mainid;
    });
    return arr;
  };

  function sortArrByDate(arr) {
    const arrNew = arr.sort((a, b) => new Date(a.date) - new Date(b.date));
    return arrNew;
  }

  function sortArrByPriority(arr) {
    const arrNew = arr.sort((a, b) => a.priority - b.priority);
    return arrNew;
  }

  const arrSelector = (id = 'all') => {
    let arr;
    if (mainArr.length !== 0) {
      if (id === 'today') {
        arr = sortArrByPriority(todayArr);
        headerMaker('today\'s');
      } else if (id === 'week') {
        arr = sortArrByDate(weekArr);
        headerMaker(id);
      } else if (id === 'month') {
        arr = sortArrByDate(monthArr);
        headerMaker(id);
      } else if (id === 'all') {
        arr = sortArrByDate(mainArr);
        headerMaker(id);
      } else if (id.includes('project')) {
        arr = sortArrByDate(projectArrfunc(id));
        const mainid = parseInt(id.replace('project', ''), 10);
        headerMaker(`${projArr[mainid]} Project`);
      } else if (id === 'overdue') {
        arr = sortArrByDate(overDueArr);
        headerMaker(id);
      }
    }
    return arr;
  };

  return {
    arrSelector,
    todayArr,
    weekArr,
    monthArr,
    overDueArr,
    projectArrfunc,
  };
};

export default Aside;
