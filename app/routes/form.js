import Route from "@ember/routing/route";
import { action } from "@ember/object";
import RSVP from "rsvp";

export default class FormRoute extends Route {
  async model() {
    const page = await fetch("/data/user_form.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data;
      });
    return RSVP.hash({
      user: this.store.findRecord("users", 1), // http://localhost:3000/users/1
      /* user: this.store.createRecord("users"), */
      page: page
    });
  }

  @action
  updateUser() {
    console.log("update");
    this.store
      .findRecord("users", 1) // => GET /blog-posts/1
      .then(foo => {
        foo.save();
      });
  }
}
