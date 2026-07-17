# Simple Node.js Server & Dynamic Router

A lightweight, native Node.js backend application built without external frameworks (like Express). This project demonstrates the core fundamentals of Node.js, including setting up an HTTP server, handling streams for incoming data, synchronous and asynchronous file system interactions (`fs`), and a dynamic route loader.

## 🚀 Features Covered

- **Native HTTP Server:** Multi-route serving on a specified port using Node's `http` module.

- **Dynamic HTML Router:** Automatically maps clean request URLs (e.g., `/about`) to localized file system templates (e.g., `html/about.html`).

- **Post Request Stream Handling:** Gathers, decodes, and parses chunked form-payload fields using the core `querystring` utility.

- **File System Operations (`fs`):** Handles safe directory generation and file reading safely across edge cases.

- **Modular Architecture:** Breaks logic cleanly down into separate components (`inputForm`, `submit`, and entry file layout).
