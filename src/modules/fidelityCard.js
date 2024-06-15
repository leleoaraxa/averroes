const fidelity = document.querySelector('.fidelity');

export function fidelityCard({
    id,
    cutsNeeded,
    totalCuts
}) {
    fidelity.querySelector('.tag').innerHTML = '';
    fidelity.querySelector('.tag').textContent = `ID: ${id}`;

    const boxList = fidelity.querySelector('div:last-child')
    boxList.innerHTML = ''

    for (let index = 0; index < cutsNeeded; index++) {
        const grayBox = document.createElement('div');
        grayBox.classList.add('gray-box');

        if (cutsNeeded - 1 === index && cutsNeeded > totalCuts) {
            const img = document.createElement('img');
            img.src = './src/assets/gray-gift.svg';
            img.alt = 'Ícone de presente cinza desabilitado';
            grayBox.append(img)
        }

        boxList.append(grayBox)
    }

    for (let index = 0; index < totalCuts; index++) {
        const icoVerify = document.createElement('img');
        icoVerify.src = './src/assets/PinCheck.png';
        icoVerify.alt = 'Ícone de verificado';

        if (index === cutsNeeded - 1 && cutsNeeded >= totalCuts) {
            icoVerify.classList.add('achievement')
        }

        fidelity.querySelector(`.gray-box:nth-child(${index + 1})`).appendChild(icoVerify)
    }
}