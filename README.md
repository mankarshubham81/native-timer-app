# Multi-Timer App

## Overview
The Multi-Timer App is a React Native application that allows users to set and manage up to five timers simultaneously. Each timer functions independently, providing options to start, pause, reset, and set custom countdowns for each one. The app is user-friendly with clear notifications when a timer reaches zero and a visually optimized layout.

documentation link : https://charmed-border-26a.notion.site/Multi-timer-app-13a0c8ffdbdf80f98f65ee8dc73f4f92?pvs=73

## Features
1. **Multiple Timers**:
   - Users can add up to five timers at the same time, each operating independently.
   - A notification is displayed if the user tries to add more than five timers.

2. **Start, Pause, and Reset Controls**:
   - Each timer has dedicated buttons to start, pause, and reset its countdown.
   - Buttons are represented by intuitive icons, ensuring the interface remains clean and easy to navigate.

3. **Custom Countdown Time**:
   - Users can input a custom countdown time for each timer.
   - The countdown begins once the timer is started, and the input can be reset to the original or user-defined time.

4. **Notifications**:
   - When a timer reaches zero, the app provides a notification and vibrates to alert the user.
   - This feature ensures users are always aware when a timer has finished, even if they're using other applications.

5. **Accessible and User-Friendly UI**:
   - The layout is responsive, optimized for different screen sizes, and visually accessible, with careful color selection to support all users, including those with color blindness.
   - The app uses a grid layout to keep multiple timers within the viewport.

## Installation Guide

### Prerequisites
- **Node.js** and **npm** installed (latest LTS version recommended).
- **Expo CLI** installed globally on your machine.

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/multi-timer-app.git
   cd multi-timer-app
