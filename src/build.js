#!/usr/bin/env bun
import puppeteer from "puppeteer";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const inputFile = resolve(__dirname, "index.html");
const outputDir = resolve(__dirname, "../CV");
mkdirSync(outputDir, { recursive: true });
const outputFile = resolve(outputDir, "CV_Hugo_GHESQUIER.pdf");

const browser = await puppeteer.launch({
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});
const page = await browser.newPage();

await page.goto(`file://${inputFile}`, { waitUntil: "networkidle0" });

await page.pdf({
  path: outputFile,
  format: "A4",
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();

console.log(`PDF généré : ${outputFile}`);
