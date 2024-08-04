import { MdPlugin } from "./MdPlugin";

export class Journal extends MdPlugin {
  constructor() {
    super(
      "benfalk/mdbook-journal",
      "journal-version",
      "mdbook-journal",
      "x86_64-unknown-linux-musl",
    );
  }
}
