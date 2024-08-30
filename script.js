function changeTab(tabNumber) {
    const tabContents = {
        1: `"SEO Site Checkup runs through a fast audit of your site, checking for proper tags and surfacing any errors that might come up."`,
        2: `"The average SEO consultant is going to charge you well over a thousand dollars for advice that a product like SEO Site Checkup can do for free."`,
        3: `"SEO Site Checkup will assign your site an overall letter grade and identify the most important fixes to help you improve."`
    };

    document.getElementById('tab-content').textContent = tabContents[tabNumber];

    document.querySelectorAll('[role="tablist"] button').forEach(button => {
        button.classList.remove('border-t-black');
        button.classList.add('opacity-[0.24]');
    });

    document.getElementById(`tab${tabNumber}`).classList.remove('opacity-[0.24]');
    document.getElementById(`tab${tabNumber}`).classList.add('border-t-black');
}