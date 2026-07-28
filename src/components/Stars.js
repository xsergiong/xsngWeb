function Load(root, textArray, linkArray, urlArray)
{
    const stars = document.createElement('div');
    const header = document.createElement('h2');

    header.textContent = 'STARS';

    stars.setAttribute('id', 'stars');

    stars.appendChild(header);
    root.appendChild(stars);

    for (let i = 0; i < textArray.length; i++)
    {
        let paragraph = document.createElement('p');;
        let link = document.createElement('a');

        let textNumber = i + 1;

        paragraph.textContent = textNumber.toString(2) + ".";

        for (let j = 0; j < textArray[i]; j++)
        {
            paragraph.textContent += '\xa0';
        }

        link.textContent = linkArray[i];
        link.href = urlArray[i];

        paragraph.appendChild(link);
        stars.appendChild(paragraph);
    }
}

export default function LoadStars(root, textArray, linkArray, urlArray) { Load(root, textArray, linkArray, urlArray) };