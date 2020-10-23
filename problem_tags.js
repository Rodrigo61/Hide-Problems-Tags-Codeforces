const showText = "Show tags";
const hideText = "Hide tags";

const tags = document.querySelectorAll('.tag-box');

// check if the page has a tag box
if (tags.length > 0) {

    // store original tag of each tag in a new attribute
    tags.forEach(function(tag) {
        const originalTag = tag.textContent;
        tag.setAttribute("originalTag", originalTag);
    });

    // create one hide/show button for all tags
    const hideShowButton = document.createElement("button");
    hideShowButton.textContent = hideText;
    hideShowButton.setAttribute("style", "font-size: 1.1rem");
    hideShowButton.onclick = () => toggleTags(hideShowButton);
    const tagsContainer = tags[0].parentElement.parentElement;
    tagsContainer.appendChild(hideShowButton);
    
    // starts with tags hidden
    hideShowButton.click();
}


function toggleTags(btn)
{
    tags.forEach(tag => {
        if (btn.textContent === showText)
        {
            const originalTag = tag.getAttribute("originalTag");
            tag.textContent = originalTag;
        }
        else
        {
            tag.textContent = "hidden tag";
        }
    });

    if (btn.textContent === showText)
    {
        btn.textContent = hideText;
    }
    else
    {
        btn.textContent = showText;
    }
}