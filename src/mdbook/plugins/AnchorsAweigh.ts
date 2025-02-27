import { MdPlugin } from "./MdPlugin";

export class AnchorsAweigh extends MdPlugin {
  constructor() {
    super(
      "benfalk/anchors-aweigh",
      "anchors-aweigh-version",
      "mdbook-anchors-aweigh",
      "x86_64-unknown-linux-musl",
    );
  }
}
