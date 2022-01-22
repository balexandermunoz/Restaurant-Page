import createHomeMain from "./home";
import createMenuMain from "./menu";
import createContactMain from "./contact";

//Header: contain title and links
function createHeader(){
    const header = document.createElement("header");
    header.classList.add("header");
    
    //Title
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Praline bakery";
    
    header.appendChild(title);  //Header contain title

    //Tabs:
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
  
    tabs.appendChild(createButtonTab('Home',createHomeMain));
    tabs.appendChild(createButtonTab('Menu',createMenuMain));
    tabs.appendChild(createButtonTab('Contact',createContactMain));

    header.appendChild(tabs);   //Header contain the tabs

    return header
}

function createButtonTab(text,funct){
    const tab = document.createElement('a');
    tab.classList.add('tab');
    tab.classList.add('tabs-'+text);
    tab.textContent = text;
    tab.addEventListener('click',funct);
    return tab
}

function createMain(){
    const main = document.createElement("main");
    main.textContent = "First main. Its never appears";
    return main
}


function createFooter(){
    const footer = document.createElement("footer");
    const b = document.createElement('b');
    b.textContent = "Made by: Brayan Muñoz";
    footer.appendChild(b);

    footer.appendChild(elementFooter("https://www.instagram.com/caos_s.a/",'instagram'));
    footer.appendChild(elementFooter("https://www.linkedin.com/in/balexandermunoz/",'linkedin'));
    footer.appendChild(elementFooter("https://github.com/balexandermunoz",'github'));

    const h = document.createElement('h4');
    h.textContent = "The Odin Project";
    footer.appendChild(h)

    return footer;
}

function elementFooter(link,red){
    const a = document.createElement('a');
    a.href = link;
    a.classList.add('fa','fa-'+red);
    return a
}


document.body.appendChild(createHeader())
document.body.appendChild(createMain())
document.body.appendChild(createHomeMain())
document.body.appendChild(createFooter())