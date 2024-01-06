/* global describe, it , expect, beforeEach */
import { Group } from '../src/Group.js';
import { Rectangle } from '../src/geometry/Rect.js';

describe('Group', () => {
  let group;

  beforeEach(() => {
    group = new Group();
  });

  it('should be an instance of Group', () => {
    expect(group).toBeInstanceOf(Group);
  });

  it('should have an empty members array when created', () => {
    expect(group.getMembers()).toEqual([]);
  });

  it('should nest elements correctly', () => {
    const element1 = new Rect();
    const element2 = new Rect();

    group.nest(element1, element2);

    const members = group.getMembers();

    expect(members).toContain(element1);
    expect(members).toContain(element2);
  });

  it('should iterate through its members', () => {
    const element1 = new Rect();
    const element2 = new Rect();

    group.nest(element1, element2);

    const iteratedMembers = [...group];

    expect(iteratedMembers).toContain(element1);
    expect(iteratedMembers).toContain(element2);
  });

  it('should set and get members using setMembers and getMembers', () => {
    const element1 = new Rect();
    const element2 = new Rect();

    group.setMembers(element1, element2);

    const members = group.getMembers();

    expect(members).toContain(element1);
    expect(members).toContain(element2);
  });

  it('should create a new Group instance using group method', () => {
    const element1 = new Rect();
    const element2 = new Rect();

    const newGroup = Group.group(element1, element2);

    const members = newGroup.getMembers();

    expect(members).toContain(element1);
    expect(members).toContain(element2);
  });

  it('should create a new Group instance using build method', () => {
    const element1 = new Rect();
    const element2 = new Rect();

    const newGroup = Group.from(element1, element2);

    const members = newGroup.getMembers();

    expect(members).toContain(element1);
    expect(members).toContain(element2);
  });
});
