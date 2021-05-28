import Project from '../src/project/project';
import 'jest-localstorage-mock';

describe('Localstorge get projects', () => {
    test('should return empty array if Localstorage tasks is null', () => {
        expect(Project.getProject()).toEqual(['Default']);
    });

    test('should return aray of project added', () => {
        Project.addProject('project1')
        expect(Project.getProject()).toEqual(['Default','project1']);
    });
})