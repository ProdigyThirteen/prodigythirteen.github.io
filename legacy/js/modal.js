const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const titleEl = document.getElementById('modalTitle');
const studioEl = document.getElementById('modalStudio');
const descEl = document.getElementById('modalDescription');
const techEl = document.getElementById('modalTech');
const workEl = document.getElementById('modalWork');
const videoEl = document.getElementById('modalVideo');

function openProjectModal({
  title = '',
  studio = '',
  description = '',
  tech = '',
  work = '',
  video = '',
} = {}) {
  titleEl.textContent = title;
  studioEl.textContent = studio;
  descEl.textContent = description;
  workEl.textContent = `${work}`;
  videoEl.src = video;

  techEl.innerHTML = '';
  tech.split(',').forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.trim();
    techEl.appendChild(li);
  });

  modal.classList.remove('hidden');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  videoEl.src = '';
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

document.querySelectorAll('.project').forEach((project) => {
  project.setAttribute('role', 'button');
  project.setAttribute('tabindex', '0');

  const openFromElement = () => {
    openProjectModal({
      title: project.dataset.title,
      studio: project.dataset.studio,
      description: project.dataset.description,
      tech: project.dataset.tech,
      work: project.dataset.work,
      video: project.dataset.video,
    });
  };

  project.addEventListener('click', openFromElement);
  project.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openFromElement();
    }
  });
});