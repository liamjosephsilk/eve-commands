import chalk from "chalk";
import { writeFile, readFileSync, existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { script } from "../templates/script.js";
import consola from "consola";
import yaml from "js-yaml";

const CURR_DIR = process.cwd();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createJS = async (templateName) => {
  let filePath = `${CURR_DIR}/assets/${templateName}.js`;

  if (existsSync(`${CURR_DIR}/eve-config.yaml`)) {
    try {
      const config = readFileSync(`${CURR_DIR}/eve-config.yaml`, "utf8");
      const configData = yaml.load(config);
      filePath = `${CURR_DIR}/${configData.assetPath}/${templateName}.js`;
    } catch (err) {
      consola.error("Looks like you need an eve-config.yaml File");
      consola.error(err);
    }
  }

  writeFile(filePath, script(templateName), function (err) {
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
  });
};

export default createJS;
