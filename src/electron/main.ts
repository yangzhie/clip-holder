import {app, BrowserWindow} from "electron";
import path from "path";
import { devMode } from "./utils.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});

    if (devMode()) {
        mainWindow.loadURL('http://localhost:9999/');
    } else {
        mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
    }});