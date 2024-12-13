async function includeHTML() {
    let allElements = document.getElementsByTagName("*");
    for (let elem of allElements) {
        let file = elem.getAttribute("include-html");
        if (file) {
            try {
                let response = await fetch(file);
                if (response.ok) {
                    elem.innerHTML = await response.text();
                    elem.removeAttribute("include-html");
                    includeHTML();
                } else {
                    throw new Error('Failed to load file ' + file);
                }
            } catch (error) {
                console.error('Error loading the include HTML.', error);
            }
        }
    }
}