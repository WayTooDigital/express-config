import "dotenv/config";
import yaml from "js-yaml";
import fs from "fs";

const secrets = Object.keys(process.env).reduce(
  (o, key) => ({ ...o, [key.toLowerCase()]: process.env[key] }),
  {}
);

if (!secrets.node_env) {
  console.log("Please add a NODE_ENV value to your .env file");
  process.exit(0);
}

const filename = `./config/${secrets.node_env}.yml`;
if (!fs.existsSync(filename)) {
  console.log(`File ${filename} doesn't exist.`);
  process.exit(0);
}

try {
  const contents = fs.readFileSync(filename, "utf8");
  const config = yaml.load(contents);

  global.config = { ...secrets, ...config };
} catch (err) {
  console.log(err.message);
  process.exit(0);
}
