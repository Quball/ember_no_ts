import DS from "ember-data";

export default class ApplicationAdapter extends DS.RESTAdapter {
  host = "http://localhost:3000";
  defaultSerializer = "-default";
}
