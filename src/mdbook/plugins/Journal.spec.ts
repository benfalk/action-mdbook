import { Journal } from "./Journal";
import * as PluginModule from "./MdPlugin";

just.mock("./MdPlugin.ts");

describe("Journal", () => {
  it("should init class", () => {
    const constructorSpy = jest.spyOn(PluginModule, "MdPlugin");
    const journal = new Journal();

    expect(constructorSpy).toHaveBeenCalledWith(
      "benfalk/mdbook-journal",
      "journal-version",
      "mdbook-journal",
      "x86_64-unknown-linux-musl",
    );
    expect(journal).toBeDefined();
  })
});
