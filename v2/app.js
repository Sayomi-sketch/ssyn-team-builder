Replace the current Home page with a real SSYN Command Center dashboard.

Keep the existing dark blue mobile theme.

At the top, add four statistic cards:
• Total Players
• Desert Storm Signups
• Canyon Storm Signups
• Guaranteed Next Round

Below the cards, add four large action buttons:
• 👥 Manage Roster
• ⚔️ Build Desert Storm Teams
• 🌪️ Build Canyon Storm Teams
• 📊 Reports

Make the dashboard clean, modern, and optimized for mobile phones.

Do not remove the navigation tabs.const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

for (const tab of tabs) {
  tab.addEventListener('click', (event) => {
    event.preventDefault();

    const view = tab.dataset.view;

    tabs.forEach((item) => item.classList.toggle('is-active', item === tab));
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.panel === view);
    });
  });
}
