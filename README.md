# Improper SIGINT Handling in Node.js Express Server

This repository demonstrates a common error in Node.js Express servers: improper handling of SIGINT signals (e.g., Ctrl+C).  When a SIGINT signal is received, the server should gracefully shut down to prevent data loss and ensure a clean exit.  This example shows the incorrect approach and the correct, improved version.

## Bug

The `bug.js` file demonstrates an Express server that fails to gracefully handle SIGINT signals. When you interrupt the server (Ctrl+C), it immediately exits without completing any in-flight requests, possibly leading to data corruption or inconsistencies.

## Solution

The `bugSolution.js` file presents the corrected approach, using the `server.close` method to gracefully shut down the server, ensuring all pending requests are processed before the server terminates.