# DE 75: Data Engineering in 75 days

A self-paced learning site built from the *Data Engineering Mastery, 75-Day Challenge* curriculum.
Plain HTML, CSS and JavaScript: no build step, no dependencies, works on GitHub Pages as is.

## What is inside

- **Overview**: a progress map of all 75 days across three months, the four portfolio projects, and how to use the course.
- **Day pages (1 to 75)**: the video (plays in the page, jumps to the right timestamp on long videos), every practice step as a checklist, the GitHub deliverable, notes, a timer, and previous/next navigation. Finishing the last step marks the day done.
- **Roadmap**: all days by month, with filters for status and topic.
- **Resources**: the full resource library (tools, docs, datasets, career links).
- **Wins**: the motivation wall, a random "give me another" push, and a win log.
- **Search**: press `/` or `Ctrl/Cmd + K` to search topics, videos and practice steps. On a day page, use the left and right arrow keys to move between days.
- **Progress**: ticks, notes, timers, streak and wins are saved in the visitor's browser (localStorage). Use the download icon in the header to back up, restore or reset.
- Light and dark themes.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `de-75`).
2. Upload everything in this folder to the repository root (`index.html`, `assets/`, `.nojekyll`, `README.md`).
3. Go to **Settings, then Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/de-75/`.

## Edit the curriculum

All course content is in `assets/data.js` (days, videos, steps, resources, quotes, projects).
Each day looks like this:

```js
{ n: 1, m: 1, topic: "…", video: "Channel – Title", url: "https://www.youtube.com/watch?v=…",
  steps: [ { t: "Step text", sub: ["optional sub-line", "another"] } ] }
```

Start a step with `Deliverable:` to highlight it. Sub-lines that look like commands or code are shown in a copyable code style.
If you change the number of steps in a day, the saved ticks of existing visitors still map by step position.

## Notes

- Fonts load from Google Fonts and videos from YouTube, so learners need an internet connection.
- Progress is per browser and per device. Nothing is sent to any server.
