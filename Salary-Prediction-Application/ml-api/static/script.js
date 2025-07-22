document.getElementById('salaryForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const age = parseInt(this.age.value) || 0;
    const experience = parseInt(this.experience.value) || 0;

    // Prevent duplicate popups
    if (document.querySelector('.validation-overlay')) {
        return;
    }

    // Add validation check before submission
    if ((age - experience) < 18) {
        const overlay = document.createElement('div');
        overlay.className = 'validation-overlay';

        const errorPopup = document.createElement('div');
        errorPopup.className = 'validation-error animate__animated animate__fadeInUp';
        errorPopup.innerHTML = `
            <h3>Validation Error</h3>
            <p>It looks like your experience exceeds your age eligibility.Please ensure your age minus experience is 18 or 18+.</p>
            <button class="validation-error-btn">OK</button>
        `;
        overlay.appendChild(errorPopup);
        document.body.appendChild(overlay);

        errorPopup.querySelector('button').addEventListener('click', () => {
            errorPopup.classList.remove('animate__fadeInUp');
            errorPopup.classList.add('animate__fadeOut');
            setTimeout(() => {
                if (overlay.parentNode) {
                    document.body.removeChild(overlay);
                }
            }, 500); // Match fadeOut duration
        });
        return;
    }
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<span>Predicting...</span>';
    submitBtn.disabled = true;
    
    const data = {
        education: this.education.value,
        experience: parseInt(this.experience.value),
        location: this.location.value,
        jobTitle: this.jobTitle.value,
        age: parseInt(this.age.value),
        gender: this.gender.value
    };

    try {
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Prediction failed');

        const result = await response.json();
        const resultElement = document.getElementById('result');

        const formattedSalary = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(result.predicted_salary);
        
        resultElement.innerHTML = `
            <div class="result-icon">💰</div>
            <div class="result-title">Predicted Salary</div>
            <div class="result-value">${formattedSalary}</div>
            <div class="result-note">Based on your profile details</div>
        `;
        
        resultElement.classList.add('show', 'animate__animated', 'animate__fadeInUp');

    } catch (err) {
        console.error(err);
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <div class="result-icon error">⚠️</div>
            <div class="result-title">Prediction Error</div>
            <div class="result-value">Could not predict salary</div>
            <div class="result-note">Please try again later</div>
        `;
        resultElement.classList.add('show', 'animate__animated', 'animate__shakeX');
    } finally {

        // Reset button state
        submitBtn.innerHTML = '<span>Predict Salary</span><svg class="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        submitBtn.disabled = false;
    }
});

// Animation

document.addEventListener('DOMContentLoaded', () => {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
    });
});

function checkScroll() {
    const aboutSections = document.querySelectorAll('.about-section');
    const triggerBottom = window.innerHeight / 5 * 4;

    aboutSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

//scroll event listener
window.addEventListener('scroll', checkScroll);

document.addEventListener('DOMContentLoaded', () => {

    checkScroll();
    
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${index * 0.1}s`;
    });
});
