import { createSpinner } from "nanospinner";
import createJS from "../packages/createJS.js";
import createSection from "../packages/createSection.js";
import consola from "consola";
import chalk from "chalk";
import figlet from "figlet";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export default async function section(section, options) {
  if (options.javascript) {
    const jsSpinner = createSpinner("Creatiing Javascript template").start();
    const liquidSpinner = createSpinner("Creatiing Liquid template").start();

    try {
      await createJS(section);
      await createSection(section, true);
    } catch (e) {
      jsSpinner.error();
      liquidSpinner.error();
    } finally {
      await sleep();
      jsSpinner.success();
      consola.success(chalk.green(`  ${section}.js Successfully created!  `));
      await sleep();
      liquidSpinner.success();
      consola.success(
        chalk.green(`  ${section}.liquid Successfully created!  `)
      );
    }
  } else {
    const liquidSpinner = createSpinner("Creatiing Liquid template").start();

    try {
      await createSection(section);
    } catch (e) {
      liquidSpinner.error();
    } finally {
      await sleep();
      liquidSpinner.success();

      consola.success(
        chalk.green(`  ${section}.liquid Successfully created!  `)
      );
    }
  }

  figlet("Eve CLI", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}
