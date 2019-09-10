import DS from "ember-data";
const { Model, attr } = DS;

export default class UsersModel extends Model {
  @attr() title;
  @attr() firstName;
  @attr() lastName;
  @attr() country;
}
