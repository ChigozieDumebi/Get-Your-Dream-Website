let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(i) {
testimonials.forEach((testimonial, idx) => {
testimonial.classList.remove('active');
if (idx === i) testimonial.classList.add('active');
});
}

function startSlider() {
setInterval(() => {
index = (index + 1) % testimonials.length;
showTestimonial(index);
}, 5000); // Change every 5 seconds
}

document.addEventListener('DOMContentLoaded', startSlider);


