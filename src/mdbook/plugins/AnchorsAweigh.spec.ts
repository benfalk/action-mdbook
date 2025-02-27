import { Journal } from "./AnchorsAweigh";
import * as PluginModule from "./MdPlugin";

just.mock("./MdPlugin.ts");

describe("AnchorsAweigh", () => {
  it("should init class", () => {
    const constructorSpy = jest.spyOn(PluginModule, "MdPlugin");
    const journal = new AnchorsAweigh();

    expect(constructorSpy).toHaveBeenCalledWith(
      "benfalk/anchors-aweigh",
      "anchors-aweigh-version",
      "mdbook-anchors-aweigh",
      "x86_64-unknown-linux-musl",
    );
    expect(journal).toBeDefined();
  })
});
