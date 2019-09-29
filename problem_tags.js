const show_text = "Show Problems Tags";
const hide_text = "Hide Problems Tags";

const tagBox = document.querySelector('.tag-box');

// check if the page has a tag box
if (tagBox) {
    
    const hideShowButton = document.createElement("button");
    hideShowButton.setAttribute("class", "hide-button");
    hideShowButton.textContent = hide_text;
    hideShowButton.onclick = () => toogle_tags(hideShowButton);
    
    const parentBox = tagBox.parentElement.parentElement;
    parentBox.appendChild(hideShowButton);
    
    hideShowButton.click();
}

function toogle_tags(btn)
{
    const tags = document.querySelectorAll('.tag-box');
    tags.forEach(function(tag) {
        tag.toggleAttribute("hidden");
    });

    if (btn.textContent === show_text)
    {
        btn.textContent = hide_text;
    }
    else
    {
        btn.textContent = show_text;
    }
}