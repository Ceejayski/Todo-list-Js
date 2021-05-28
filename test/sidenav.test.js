/**
 * @jest-environment jsdom
 */

import Aside from "../src/sidebar/sidenav";
import Store from "../src/store/store";
import "jest-localstorage-mock";

describe("Collects every Sidenav array", () => {
  Store.addTask({
    title: "manchi",
    description: "dsds",
    date: "2021-05-28",
    priority: "3",
    project: "1",
    id: 0,
    checked: false,
  });
  Store.addTask({
    title: "manchi2",
    description: "dsds",
    date: "2021-05-27",
    priority: "1",
    project: "0",
    id: 2,
    checked: false,
  });
  Store.addTask({
    title: "manchi3",
    description: "dsds",
    date: "2021-05-28",
    priority: "2",
    project: "0",
    id: 3,
    checked: true,
  });

  test("should get task Due today", () => {
    const arr = Aside().todayArr;
    expect(arr.length).toEqual(2);
  });
  test("should get task Due this week", () => {
    const arr = Aside().weekArr;
    expect(arr.length).toEqual(3);
  });

  test("should get task Due this month", () => {
    const arr = Aside().monthArr;
    expect(arr.length).toEqual(0);
  });

  test("should get task overDue task with status onchecked", () => {
    const arr = Aside().overDueArr;
    expect(arr.length).toEqual(1);
  });

  test("should get task in the same project", () => {
    const arr = Aside().projectArrfunc('project1');
    expect(arr.length).toEqual(1);
  });
});
