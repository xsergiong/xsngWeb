function Load(path)
{
    const root = document.querySelector("#blog");

    fetch(path)
        .then(response => response.json())
        .then(data => 
        {
            for (let i = data.length - 1; i > -1; i--)
            {
                let entry = document.createElement('div');
                let title = document.createElement('h3');
                let time = document.createElement('p');

                entry.setAttribute('class', 'blog-entry');
                time.setAttribute('class', 'fade-text');

                title.textContent = data[i].title;  
                time.textContent = data[i].time + " " + data[i].date;

                entry.appendChild(title);
                if (!data[i].paragraphs)
                {
                    let content = document.createElement('p');

                    content.textContent = data[i].content;

                    entry.appendChild(content);
                }
                else
                {
                    for (let j = 0; j < data[i].content.length; j++)
                    {
                        let paragraph = document.createElement('p');
                        paragraph.textContent = data[i].content[j];

                        entry.appendChild(paragraph);

                        if (j < data[i].content.length - 1)
                            entry.appendChild(document.createElement('br'));
                    }
                }
                entry.appendChild(time);

                root.appendChild(entry);
            }
        }
    );
}

export default function LoadBlog(path) { Load(path) };