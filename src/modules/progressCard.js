const milestone = document.querySelector('.milestone');

export function progressCard({
    totalCuts, 
    cutsNeeded, 
    cutsRemaining
}) {
    milestone.querySelector('h3').innerHTML = ''
    milestone.querySelector('.progress-text').innerHTML = ''
    milestone.querySelector('h3').textContent = cutsRemaining

    const percentage = (totalCuts / cutsNeeded) * 100;
    milestone.querySelector('.progress').style.setProperty('--dynamic-width', `${percentage}%`);
    milestone.querySelector('.progress-text').textContent = `${totalCuts} de ${cutsNeeded}`
}