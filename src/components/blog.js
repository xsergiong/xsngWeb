const root = document.querySelector("#blog");

function Load()
{
    fetch('./assets/json/blog-entries.json')
        .then(response => response.json())
        .then(data => 
        {
            for (let i = 0; i < data.length; i++)
            {
                let entry = document.createElement('div');
                let title = document.createElement('h3');
                let content = document.createElement('p');
                let time = document.createElement('p');

                title.textContent = data[i].title;
                content.textContent = data[i].content;
                time.textContent = data[i].time + " " + data[i].date;
                
                entry.setAttribute('class', 'blog-entry');
                time.setAttribute('class', 'fade-text');

                entry.appendChild(title);  
                entry.appendChild(content);
                entry.appendChild(time);

                root.appendChild(entry);
            }
        }
    );
}

Load();