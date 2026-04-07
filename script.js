const revealItems = document.querySelectorAll(".reveal");

const showItem = (element, index) => {
  window.setTimeout(() => {
    element.classList.add("is-visible");
  }, index * 120);
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const index = Number(entry.target.dataset.revealIndex || 0);
      showItem(entry.target, index);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  revealItems.forEach((item, index) => {
    item.dataset.revealIndex = String(index);
    observer.observe(item);
  });
} else {
  revealItems.forEach((item, index) => showItem(item, index));
}
