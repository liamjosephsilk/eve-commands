import CreateFile from "../packages/createFile.js";

export default function section(task, options) {
  new CreateFile({
    section: task,
    flag: options,
  });
}
