import Store from '../src/store/store'
import 'jest-localstorage-mock';

describe('Localstorge gettask', () => {
    test('should return empty array if Localstorage tasks is null', () => {
        expect(Store.getTask()).toEqual([]);
    });
}) 

describe('Localstorge getid', () => {
    test('should return empty array if Localstorage id is null', () => {
        expect(Store.getID()).toEqual(0);
    });
}) 

describe('Localstorge ID increment', () => {
    test('should increment', () => {
        Store.setID()
        expect(Store.getID()).toEqual(1);
    })
})

describe('Localstorge add tasks', ()=> {
    const tasks = {
        checked: false,
        date: "2021-05-28",
        description: "dsds",
        id: 0,
        priority: "3",
        project: "0",
        title: "manchi"
    }
    test('should add tasks', () => {
        Store.addTask(tasks)
        expect(Store.getTask()).toEqual([tasks]);
    })
})

describe('Localstorge update tasks', ()=> {
    const tasks = {
        checked: false,
        date: "2021-05-28",
        description: "dsds",
        id: 0,
        priority: "3",
        project: "4",
        title: "manchi"
    }
    test('should update tasks', () => {
        Store.storeUpdate(0, tasks)
        expect(Store.getTask()[0]).toEqual(tasks);
    })
})

describe('Localstorge delete tasks', ()=> {
    test('should delete tasks', () => {
        Store.deleteTask(0)
        expect(Store.getTask()).toEqual([]);
    })
})

