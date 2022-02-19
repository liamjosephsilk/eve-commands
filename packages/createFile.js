import chalk from "chalk";
import { writeFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sections, sectionsJS } from "../templates/sections.js";
import { script } from "../templates/script.js";
import consola from "consola";

class CreateFile {
  constructor(
    options = {
      section,
      flag: {},
    }
  ) {
    this.CURR_DIR = process.cwd();
    this.__filename = fileURLToPath(import.meta.url);
    this.__dirname = path.dirname(this.__filename);
    this.section = options.section;
    this.flag = options.flag;

    this.init();
  }

  init() {
    if (Object.entries(this.flag).length === 0) {
      this.write();
    }

    if (Object.keys(this.flag).includes("javascript")) {
      this.writeWithJS();
    }
  }

  writeWithJS() {
    const sectionFilePath = `${this.CURR_DIR}/sections/${this.section}.liquid`;
    const JSFilePath = `${this.CURR_DIR}/assets/${this.section}.js`;
    const file = this.section;

    writeFile(sectionFilePath, sectionsJS(this.section), function (err) {
      if (err) {
        consola.error(chalk.red.bold(err.message));
        consola.info(
          chalk.black.bgRedBright(
            "Looks like you need to create an /sections directory"
          )
        );
        consola.info(
          chalk.black.bgRedBright(
            "Please check you are using Shopify 2.0 file structure"
          )
        );
      } else {
        consola.info(chalk.white.bold(`Creating Liquid files`));
        consola.success(
          chalk.green(`  ${file}.liquid Successfully created!  `)
        );
      }
    });

    writeFile(JSFilePath, script(this.section), function (err) {
      if (err) {
        consola.error(chalk.red.bold(err.message));
        consola.info(
          chalk.black.bgRedBright(
            "Looks like you need to create an /assets directory"
          )
        );
        consola.info(
          chalk.black.bgRedBright(
            "Please check you are using Shopify 2.0 file structure"
          )
        );
        consola.error(new Error(err));
      } else {
        consola.info(chalk.white.bold(`Creating Javascript Files`));
        consola.success(chalk.green(`  ${file}.js Successfully created!  `));
      }
    });
  }

  write() {
    const filePath = `${this.CURR_DIR}/sections/${this.section}.liquid`;
    const file = this.section;

    writeFile(filePath, sections(this.section), function (err) {
      if (err) {
        consola.error(chalk.red.bold(err.message));
        consola.error(
          chalk.blue.bgBlack("Looks like you need to create a sections folder")
        );
        consola.error(new Error(err));
      } else {
        consola.success(
          chalk.greenBright.bold(`${file}.liquid Successfully created!`)
        );
      }
    });
  }
}

export default CreateFile;
