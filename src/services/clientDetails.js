const profile = document.querySelector('.profile');

export function clientDetails({
    name,
    clientSince,
    image: userImageURL
}) {
    profile.innerHTML = ''

    const image = document.createElement('div');
    image.classList.add('image');
    
    const img = document.createElement('img');
    img.src = userImageURL;
    image.append(img)

    const details = document.createElement('div');
    details.classList.add('flex');
    details.classList.add('flex-column');

    const title = document.createElement('h2');
    title.classList.add('title-sm');
    title.classList.add('text-base-gray-600');
    title.textContent = name;

    const paragraph = document.createElement('p');
    paragraph.classList.add('text-xs');
    paragraph.classList.add('text-base-gray-500');
    paragraph.textContent = `Cliente desde ${clientSince}`;

    details.append(title, paragraph)
    profile.append(image, details);
}