const projectsContainer = document.getElementById('projects');

const projects = [
    {
        title: 'Projekt 1',
        description: 'Krótki opis projektu 1.',
        link: 'link_do_projektu_1'
    },
    {
        title: 'Projekt 2',
        description: 'Krótki opis projektu 2.',
        link: 'link_do_projektu_2'
    },
];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    const linkElement = document.createElement('a');
    linkElement.textContent = 'Czytaj więcej';
    linkElement.href = project.link;

    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(linkElement);

    projectsContainer.appendChild(projectElement);
});
