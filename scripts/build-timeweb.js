
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "timeweb_host");

function run(command, args) {
    execFileSync(command, args, {
        cwd: root,
        stdio: "inherit"
    });
}

function copyFiles(source, destination) {
    fs.mkdirSync(destination, { recursive: true });

    for (const item of fs.readdirSync(source, { withFileTypes: true })) {
        const name = item.name;

        if ([
            "node_modules",
            ".git",
            "timeweb_host"
        ].includes(name)) continue;

        if ([
            "package.json",
            "package-lock.json",
            "npm-shrinkwrap.json"
        ].includes(name)) continue;

        const from = path.join(source, name);
        const to = path.join(destination, name);

        if (item.isDirectory()) {
            copyFiles(from, to);
        } else if (item.isFile()) {
            fs.copyFileSync(from, to);
        }
    }
}

try {
    console.log("\n=== TIMEWEB BUILD ===\n");

    console.log("[1/4] Установка зависимостей...");
    if (fs.existsSync(path.join(root, "package.json"))) {
        run("npm", ["install"]);
    }

    console.log("\n[2/4] Сборка проекта...");

    const packageJson = JSON.parse(
        fs.readFileSync(path.join(root, "package.json"), "utf8")
    );

    const hasBuild = Boolean(packageJson.scripts?.build);

    if (hasBuild) {
        run("npm", ["run", "build"]);
    } else {
        console.log("Скрипт build отсутствует. Используем статические файлы.");
    }

    let source = root;

    if (hasBuild && fs.existsSync(path.join(root, "dist"))) {
        source = path.join(root, "dist");
    } else if (hasBuild && fs.existsSync(path.join(root, "build"))) {
        source = path.join(root, "build");
    }

    console.log("\n[3/4] Подготовка timeweb_host...");

    fs.rmSync(output, { recursive: true, force: true });
    copyFiles(source, output);

    console.log("\n[4/4] Сборка завершена!");
    console.log(`Готовые файлы: ${output}`);

} catch (error) {
    console.error("\nОшибка:", error.message);
    process.exit(1);
}
