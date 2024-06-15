const history = document.querySelector('.history');

export function historyCard({
    appointmentHistory
}) {
    history.querySelector('span').textContent = '';
    const quantityCuts = appointmentHistory.length;
    history.querySelector('span').textContent = `${quantityCuts} cortes`;
    history.querySelector('ul').innerHTML = '';

    for (let index = 0; index < quantityCuts; index++) {
        const { date, time } = appointmentHistory[index];

        const li = document.createElement('li');
        li.classList.add('flex');
        li.classList.add('items-center');
        li.classList.add('space-between');

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.classList.add('subtitle-sm')
        p.classList.add('text-base-gray-600')
        p.textContent = date;

        const small = document.createElement('small');
        small.classList.add('text-xs')
        small.classList.add('text-base-gray-500')
        small.textContent = time;

        div.append(p, small);

        const verified = document.createElement('div');
        verified.classList.add('verified')

        const img = document.createElement('img');
        img.src = './src/assets/verify.svg';
        img.alt = 'Ícone de verificado'
        verified.append(img)

        li.append(div, verified)
        history.querySelector('ul').append(li)
    }
}