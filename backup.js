const { exec } = require('child_process');

// Pull latest changes from Apps Script
exec('clasp pull', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error pulling changes: ${stderr}`);
        return;
    }
    console.log(stdout);

    // Commit and push changes to GitHub
    exec('git add . && git commit -m "Automated backup" && git push', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error pushing to GitHub: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
});
