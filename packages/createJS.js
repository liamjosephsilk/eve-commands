import chalk from "chalk";
import { writeFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { script } from "../templates/script.js";
import consola from "consola";

const CURR_DIR = process.cwd();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createJS = async (templateName) => {
  writeFile(
    `${CURR_DIR}/assets/${templateName}.js`,
    script(templateName),
    function (err) {
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
      }
    }
  );
};

export default createJS;
