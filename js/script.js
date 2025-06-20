// Review Carousel //

const track = document.querySelector('.carousel-track');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let sectionIndex = 0;

prevButton.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    track.style.transform = 'translate(' + (sectionIndex) * -100 + '%)';
});

nextButton.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
    track.style.transform = 'translate(' + (sectionIndex) * -100 + '%)';
});

// Dropdown Menu //

function showDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'flex';
}

function hideDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'none';
}
