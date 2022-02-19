#! /usr/bin/env node

import { program } from "commander";
import section from "./commands/section.js";

program
  .command("section <task>")
  .description("Add a section template")
  .option(
    "-js, --javascript",
    "If flagged, will add a Javascript asset and import the module into the template."
  )
  .action(section);

program.parse();
