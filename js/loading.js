window.setTimeout(function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}, 1200);

window.onpageshow = function (event) {
    if (event.persisted) {
        window.location.reload();
    }
};