const tag_links = document.querySelectorAll('a[href*="tags"]');

// check if the page has a tag links (as in problemset page)
if (tag_links.length > 0)
{
    // get the container component of the set of tags of each problem
    let problemTagsContainers = new Set();
    tag_links.forEach(function(tag) {
        problemTagsContainers.add(tag.parentElement);
    });

    // create individual hide/show button for each problem
    problemsToggleButtons = []
    problemTagsContainers.forEach(container => {
        const hideShowButton = document.createElement("button");
        hideShowButton.setAttribute("class", "toogleButton");
        hideShowButton.textContent = "+";
        hideShowButton.onclick = () => toggleProblemTags(hideShowButton);
        container.appendChild(hideShowButton);
        
        problemsToggleButtons.push(hideShowButton);
    });

    // create 'global' hide/show button
    const hideShowButton = document.createElement("button");
    hideShowButton.setAttribute("class", "hide-button");
    hideShowButton.textContent = hide_text;
    hideShowButton.onclick = () => toggleAllTags(tag_links, hideShowButton, problemsToggleButtons);
    const menuElement = document.querySelectorAll('.second-level-menu-list')[1];
    menuElement.appendChild(hideShowButton);

    // starts with tags hidden
    hideShowButton.click();

}


function toggleProblemTags(toggleButton, hide = null) {
    if (hide == null)
        hide = toggleButton.textContent === '-';

    if (hide)
        toggleButton.textContent = '+';
    else
        toggleButton.textContent = '-';
    
    const container = toggleButton.parentElement;
    const container_tags = container.querySelectorAll('a[href*="tags"]');

    container_tags.forEach(tag => {
        if (hide)
            tag.setAttribute("hidden", true);
        else
            tag.removeAttribute("hidden");
    })
}


function toggleAllTags(tags_links, btn)
{
    if (btn.textContent === show_text)
    {
        btn.textContent = hide_text;
        tags_links.forEach(function(tag) {
            tag.removeAttribute("hidden");
        });
        problemsToggleButtons.forEach(btn => {
            toggleProblemTags(btn, false);
        })
    }
    else
    {
        btn.textContent = show_text;
        tags_links.forEach(function(tag) {
            tag.setAttribute("hidden", true);
        });
        problemsToggleButtons.forEach(btn => {
            toggleProblemTags(btn, true);
        })
    }
}

