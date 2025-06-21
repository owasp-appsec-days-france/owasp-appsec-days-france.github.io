function update_modal(title, body) {
    document.getElementById('title-modal').innerText = title;
    document.getElementById('body-modal').innerText = body;
}
function load_speakers(language) {
    const container = document.getElementById('speakers');
    fetch(`../assets/docs/speakers-${language}.json`)
        .then((speakers) => speakers.json())
        .then((speakers) => {
            speakers.forEach((speaker, i) => {
                const card = document.createElement('div');
                card.className = 'card mx-auto mb-4 position-relative';
                card.style.width = '18rem';

                card.innerHTML = `
<button type="button" class="btn btn-primary text-right position-absolute top-0 end-0" data-bs-toggle="modal" data-bs-target="#modal-${i}">
    <span aria-hidden="true">i</span>
</button>
<img src="${speaker.img}" class="card-img-top avatar" alt="...">
<div class="card-body">
    <h5 class="card-title">${speaker.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${speaker.status}</h6>
    <p class="card-text">${speaker.title}</p>
</div>
<div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="speaker-modal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">${speaker.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ${speaker.description}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
`;

                container.appendChild(card);
            });
        }).then(() => { $('#modal-0').modal('toggle') });
}